# @Description

This decorator is a shortcut to set the description property.

:::danger
Deprecated decorator, will be removed at the end of August.
:::

```typescript
import { CommandInteraction } from "discord.js";

@Discord()
export abstract class DiscordBot {
  @Slash("ciao")
  @Description("say ciao")
  async ciao(interaction: CommandInteraction) {
    interaction.reply("Ciao!");
  }
}
```

Is equivalent to:

```typescript
import { CommandInteraction } from "discord.js";

@Discord()
export abstract class DiscordBot {
  @Slash("ciao", { description: "say ciao" })
  async ciao(interaction: CommandInteraction) {
    interaction.reply("Ciao!");
  }
}
```

## Make changes to

It either extends or overwrites data configured in below decorators, however, the order of decorators matters.

[@SimpleCommand](/docs/decorators/commands/simplecommand)

[@Slash](/docs/decorators/commands/slash)