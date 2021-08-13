import { Decorator } from "./Decorator";
import { DApplicationCommandOption } from "./DApplicationCommandOption";
import { DApplicationCommand } from "./DApplicationCommand";

export class DSlashGroup<
  InfoType = DApplicationCommand | DApplicationCommandOption
> extends Decorator {
  name: string;
  infos: Partial<InfoType>;

  protected constructor(name: string, infos?: Partial<InfoType>) {
    super();
    this.name = name.toLowerCase();
    this.infos = infos ?? {};
  }

  static create<InfoType = DApplicationCommand | DApplicationCommandOption>(
    name: string,
    infos?: Partial<InfoType>
  ) {
    return new DSlashGroup<InfoType>(name, infos);
  }
}