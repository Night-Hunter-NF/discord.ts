import {
  ClientOptions as DiscordJSClientOptions,
  Message,
  Snowflake,
} from "discord.js";
import { GuardFunction, SimpleCommandMessage } from "../..";

export interface ClientOptions extends DiscordJSClientOptions {
  /**
   * Specifiy bot id (added for multiple bot support)
   */
  botId?: string;

  /**
   * bot prefix resolver
   */
  prefix?: string | ((message: Message) => Promise<string> | string);

  /**
   * define bot reply, when command is not auhorized
   */
  commandUnauthorizedHandler?:
    | string
    | ((command: SimpleCommandMessage) => Promise<void> | void);

  /**
   * Do not log anything in the console
   */
  silent?: boolean;

  /**
   * The classes to load for your discord bot
   */
  classes?: string[];

  /**
   * The global guards
   */
  guards?: GuardFunction[];

  /**
   * Set the guilds globally for application commands
   */
  botGuilds?: Snowflake[];
}
