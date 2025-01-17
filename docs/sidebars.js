/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  apiMusicSidebar: [
    {
      href: "https://www.npmjs.com/package/@discordx/music",
      label: "Installation",
      type: "link",
    },
    {
      items: [
        {
          dirName: "api/music",
          type: "autogenerated",
        },
      ],
      label: "API",
      type: "category",
    },
  ],

  apiPaginationSidebar: [
    {
      href: "https://www.npmjs.com/package/@discordx/pagination",
      label: "Installation",
      type: "link",
    },
    {
      items: [
        {
          dirName: "api/pagination",
          type: "autogenerated",
        },
      ],
      label: "API",
      type: "category",
    },
  ],

  apiSidebar: [
    {
      href: "https://www.npmjs.com/package/discordx",
      label: "Installation",
      type: "link",
    },
    {
      items: [
        {
          dirName: "api/main",
          type: "autogenerated",
        },
      ],
      label: "API",
      type: "category",
    },
  ],

  apiUtilitiesSidebar: [
    {
      href: "https://www.npmjs.com/package/@discordx/utilities",
      label: "Installation",
      type: "link",
    },
    {
      items: [
        {
          dirName: "api/utilities",
          type: "autogenerated",
        },
      ],
      label: "API",
      type: "category",
    },
  ],

  docSidebar: [
    {
      id: "installation",
      label: "Installation",
      type: "doc",
    },
    {
      items: [
        {
          items: [
            { id: "decorators/commands/slash", label: "@Slash", type: "doc" },
            {
              id: "decorators/commands/slashchoice",
              label: "@SlashChoice",
              type: "doc",
            },
            {
              id: "decorators/commands/slashgroup",
              label: "@SlashGroup",
              type: "doc",
            },
            {
              id: "decorators/commands/slashoption",
              label: "@SlashOption",
              type: "doc",
            },
            {
              id: "decorators/commands/simplecommand",
              label: "@SimpleCommand",
              type: "doc",
            },
            {
              id: "decorators/commands/simplecommandoption",
              label: "@SimpleCommandOption",
              type: "doc",
            },
          ],
          label: "Commands",
          type: "category",
        },
        {
          items: [
            { id: "decorators/general/bot", label: "@Bot", type: "doc" },
            {
              id: "decorators/general/discord",
              label: "@Discord",
              type: "doc",
            },
            { id: "decorators/general/guard", label: "@Guard", type: "doc" },
            { id: "decorators/general/guild", label: "@Guild", type: "doc" },
            { id: "decorators/general/on", label: "@On", type: "doc" },
            { id: "decorators/general/once", label: "@Once", type: "doc" },
            {
              id: "decorators/general/permission",
              label: "@Permission",
              type: "doc",
            },
          ],
          label: "General",
          type: "category",
        },
        {
          items: [
            {
              id: "decorators/gui/buttoncomponent",
              label: "@ButtonComponent",
              type: "doc",
            },
            {
              id: "decorators/gui/contextmenu",
              label: "@ContextMenu",
              type: "doc",
            },
            {
              id: "decorators/gui/selectmenucomponent",
              label: "@SelectMenuComponent",
              type: "doc",
            },
          ],
          label: "Gui Interactions",
          type: "category",
        },
      ],
      label: "Decorators",
      type: "category",
    },
    {
      items: [
        {
          id: "general/argsof",
          label: "ArgsOf",
          type: "doc",
        },
        {
          id: "general/client",
          label: "Client",
          type: "doc",
        },
        {
          id: "general/debugging",
          label: "Debugging",
          type: "doc",
        },
        {
          id: "general/events",
          label: "List of the events",
          type: "doc",
        },
        {
          id: "general/metadatastorage",
          label: "MetadataStorage",
          type: "doc",
        },
        {
          id: "general/sharding",
          label: "Sharding",
          type: "doc",
        },
        {
          id: "general/tsyringe",
          label: "TSyringe",
          type: "doc",
        },
      ],
      label: "Guides",
      type: "category",
    },
  ],
};
