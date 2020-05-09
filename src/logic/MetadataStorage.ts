import {
  DOn,
  Decorator,
  DInstance,
  DGuard,
  Client,
  CommandMessage,
  DiscordParams,
  CommandParams,
  CommandInfos
} from "..";
import { Message } from "discord.js";

export class MetadataStorage {
  private static _instance: MetadataStorage;
  private _ons: Decorator<DOn>[] = [];
  private _guards: Decorator<DGuard>[] = [];
  private _instances: Decorator<DInstance>[] = [];

  static get instance() {
    if (!this._instance) {
      this._instance = new MetadataStorage();
    }
    return this._instance;
  }

  static clear() {
    this._instance = new MetadataStorage();
  }

  get ons() {
    return this.getReadonlyArray(this._ons);
  }

  addOn(on: Decorator<DOn>) {
    this._ons.push(on);
  }

  addGuard(guard: Decorator<DGuard>) {
    this._guards.push(guard);
  }

  addInstance(classType: Decorator<DInstance>) {
    this._instances.push({
      ...classType,
      params: {
        instance: new classType.class(),
        ...classType.params
      }
    });
  }

  build(client: Client) {
    const commands = this._ons.reduce<string[]>((prev, on) => {
      if (on.params.commandName) {
        prev.push(on.params.commandName);
      }
      return prev;
    }, []);

    this._ons.map((on) => {
      on.params.guards = this._guards.reverse().filter((guard) => {
        return (
          guard.class === on.params.from &&
          guard.params.method === on.params.method
        );
      }, []);

      on.params.guardFn = async (client: Client, params: any) => {
        let res = true;
        for (const fn of on.params.guards) {
          if (res) {
            res = await fn.params.fn(
              ...this.getParams(on, params, client, true),
              client
            );
          } else {
            break;
          }
        }
        return res;
      };

      const instance = this._instances.find((instance) => instance.class === on.class);
      if (instance) {
        on.params.linkedInstance = instance;
      }

      on.params.compiledMethod = async (params: any[]) => {
        let command: Decorator<DOn> = on;
        let execute = true;

        if (on.params.event === "message") {
          if (on.params.commandName !== undefined) {
            execute = false;
            const message = params[0] as CommandMessage;
            let prefix = on.params.prefix || on.params.linkedInstance.params.prefix;
            if (typeof prefix === "function") {
              prefix = await prefix(message, client);
            }
            if (this.prefix(prefix)(message)) {
              if (message.author.id !== client.user.id) {
                const params = message.content.split(" ");

                let testedCommand = params[0].replace(prefix, "");
                let commandName = on.params.commandName;
                let allCommands = commands;
                const lowerCommands = allCommands.map((command) => command.toLowerCase());
                const notFoundFn = this._ons.find((cmd) => {
                  return (
                    (cmd.params.prefix || cmd.params.linkedInstance.params.prefix) === prefix &&
                    cmd.params.commandName === ""
                  );
                });

                if (testedCommand.toLowerCase() === commandName.toLowerCase()) {
                  const originalCommand = testedCommand;

                  message.prefix = prefix;
                  message.command = testedCommand;
                  message.commandWithPrefix = prefix + testedCommand;
                  message.originalCommand = originalCommand;
                  message.originalCommandWithPrefix = prefix + originalCommand;
                  message.params = params;
                  message.params.splice(0, 1);

                  if (
                    !on.params.linkedInstance.params.commandCaseSensitive &&
                    !on.params.commandCaseSensitive &&
                    on.params.commandCaseSensitive !== undefined
                  ) {
                    testedCommand = testedCommand.toLowerCase();
                    commandName = commandName.toLowerCase();
                    allCommands = lowerCommands;
                  }

                  if (allCommands.indexOf(testedCommand) === -1) {
                    if (notFoundFn) {
                      command = notFoundFn;
                      execute = true;
                    }
                  }
                } else {
                  if (lowerCommands.indexOf(testedCommand.toLowerCase()) === -1) {
                    testedCommand = "";
                  }
                }

                if (testedCommand === commandName) {
                  execute = true;
                  command = on;
                }
              }
            }
          }
        }

        if (execute) {
          const executeMain = await command.params.guardFn(client, params);
          if (executeMain) {
            return await this.executeBindedOn(command, params, client);
          }
        }
      };
    });
  }

  setDiscordParams(discordInstance: InstanceType<any>, params: DiscordParams): boolean {
    const discord = this._instances.find((instance) => instance.params.instance === discordInstance);

    if (discord) {
      discord.params = {
        ...discord.params,
        ...params
      };
      return true;
    }

    return false;
  }

  getPrefix(command: DOn) {
    if (command.prefix || command.linkedInstance) {
      return command.prefix || command.linkedInstance.params.prefix;
    }
  }

  getCommands<InfoType = any>(forPrefix?: string) {
    return this.getCommandsIntrospection(forPrefix).map<CommandInfos<InfoType>>((command) => {
      const prefix = this.getPrefix(command);
      if (prefix) {
        return {
          prefix,
          commandName: command.commandName,
          description: command.description,
          infos: command.infos,
          caseSensitive: command.commandCaseSensitive || false
        };
      }
    });
  }

  getCommandsIntrospection(forPrefix?: string) {
    return this._ons.reduce<DOn[]>((prev, on) => {
      if (on.params.commandName) {
        if (forPrefix) {
          const prefix = on.params.prefix || on.params.linkedInstance.params.prefix;
          if (forPrefix === prefix) {
            prev.push(on.params);
          }
        } else {
          prev.push(on.params);
        }
      }
      return prev;
    }, []);
  }

  setCommandParams(discordInstance: InstanceType<any>, instanceMethod: Function, params: CommandParams): boolean {
    const on = this._ons.find((on) => {
      let cond = on.class === discordInstance;

      if (on.params.linkedInstance) {
        cond = on.params.linkedInstance.params.instance === discordInstance;
      }

      return (
        cond &&
        on.params.method === instanceMethod
      );
    });

    if (on) {
      on.params = {
        ...on.params,
        ...params
      };
      return true;
    }

    return false;
  }

  compileOnForEvent(
    event: string,
    client: Client,
    once: boolean = false
  ) {
    const ons = this._ons.filter(on => (
      on.params.event === event &&
      on.params.once === once
    ));

    return async (...params: any[]) => {
      const results: any = [];
      for (const on of ons) {
        const res = await on.params.compiledMethod(
          params,
          client
        );
        results.push(res);
      }
      return results;
    };
  }

  private getParams(on: Decorator<DOn>, params: any[], client: Client, middleware: boolean = false) {
    if (on.params.commandName !== undefined && !middleware) {
      return params;
    }
    return client.payloadInjection === "first" ? [params] : params;
  }

  private executeBindedOn(on: Decorator<DOn>, params: any[], client: Client) {
    const newParams = this.getParams(on, params, client);

    if (on.params.linkedInstance && on.params.linkedInstance.params.instance) {
      return on.params.method.bind(on.params.linkedInstance.params.instance)(
        ...newParams,
        client
      );
    } else {
      return on.params.method(
        ...newParams,
        client
      );
    }
  }

  private getReadonlyArray<Type>(array: Type[]) {
    return array as ReadonlyArray<Type>;
  }

  private prefix(text: string, replace: boolean = false) {
    return (message: Message) => {
      const startWith = message.content.startsWith(text);
      if (replace) {
        message.content = message.content.replace(text, "");
      }
      return startWith;
    };
  }
}