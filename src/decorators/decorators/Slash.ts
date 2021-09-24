import {
  ApplicationCommandParams,
  DApplicationCommand,
  MetadataStorage,
  MethodDecoratorEx,
} from "../..";

const testName = RegExp(/^[\w-]{1,32}$/);

/**
 * Define slash command
 * @param name name of your slash command
 * ___
 * [View Documentation](https://oceanroleplay.github.io/discord.ts/docs/decorators/commands/slash)
 * @category Decorator
 */
export function Slash(name?: string): MethodDecoratorEx;

/**
 * Define slash command
 * @param name name of your slash command
 * @param params additional configuration for slash
 * ___
 * [View Documentation](https://oceanroleplay.github.io/discord.ts/docs/decorators/commands/slash)
 * @category Decorator
 */
export function Slash(
  name?: string,
  params?: ApplicationCommandParams
): MethodDecoratorEx;
export function Slash(
  name?: string,
  params?: ApplicationCommandParams
): MethodDecoratorEx {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (target: Record<string, any>, key: string) {
    name = name ?? key;
    if (!testName.test(name)) {
      throw Error(`invalid command name: ${name}`);
    }

    const applicationCommand = DApplicationCommand.create(
      name,
      "CHAT_INPUT",
      params?.description,
      params?.defaultPermission,
      params?.guilds,
      params?.botIds
    ).decorate(target.constructor, key, target[key]);

    MetadataStorage.instance.addApplicationCommand(applicationCommand);
  };
}
