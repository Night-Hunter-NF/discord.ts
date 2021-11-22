"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3817],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},726:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],s={},o="Client",d={unversionedId:"general/client",id:"general/client",isDocsHomePage:!1,title:"Client",description:"It manages all the operations between your app and Discord's API using discord.js",source:"@site/docs/general/client.md",sourceDirName:"general",slug:"/general/client",permalink:"/docs/general/client",editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/general/client.md",tags:[],version:"current",lastUpdatedBy:"oceanroleplay",lastUpdatedAt:1637586128,formattedLastUpdatedAt:"11/22/2021",frontMatter:{},sidebar:"docSidebar",previous:{title:"ArgsOf",permalink:"/docs/general/argsof"},next:{title:"Debugging",permalink:"/docs/general/debugging"}},p=[{value:"Setup and start your application",id:"setup-and-start-your-application",children:[{value:"intents",id:"intents",children:[],level:3},{value:"botId",id:"botid",children:[],level:3},{value:"prefix",id:"prefix",children:[],level:3},{value:"commandUnauthorizedHandler",id:"commandunauthorizedhandler",children:[],level:3},{value:"silent",id:"silent",children:[],level:3},{value:"guards",id:"guards",children:[],level:3},{value:"botGuilds",id:"botguilds",children:[],level:3}],level:2},{value:"Intents",id:"intents-1",children:[{value:"Basic intents, just text messages",id:"basic-intents-just-text-messages",children:[],level:3},{value:"Enable direct messages from user",id:"enable-direct-messages-from-user",children:[],level:3},{value:"Voice activity intent, the ability to speak",id:"voice-activity-intent-the-ability-to-speak",children:[],level:3},{value:"List of all the intents",id:"list-of-all-the-intents",children:[],level:3}],level:2},{value:"See also",id:"see-also",children:[],level:2}],u={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"client"},"Client"),(0,l.kt)("p",null,"It manages all the operations between your app and Discord's API using discord.js"),(0,l.kt)("h2",{id:"setup-and-start-your-application"},"Setup and start your application"),(0,l.kt)("p",null,"In order to start your application, you must use the discord.",(0,l.kt)("strong",{parentName:"p"},"ts"),"'s Client (not the client that is provided by discord.",(0,l.kt)("strong",{parentName:"p"},"js"),"!).",(0,l.kt)("br",{parentName:"p"}),"\n","It works the same as the discord.",(0,l.kt)("strong",{parentName:"p"},"js"),"'s Client (same methods, properties, ...)."),(0,l.kt)("h3",{id:"intents"},"intents"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#list-of-all-the-intents"},"see Intents")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Intents","[ ]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h3",{id:"botid"},"botId"),(0,l.kt)("p",null,"a bot id, help you manage your bot interactions, events (this is important in case there are more than one bot running in single instance)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"bot"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"prefix"},"prefix"),(0,l.kt)("p",null,"simple commands use this prefix by default, use function to fetch different prefix for different guilds"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," ((message: Message) =",">"," Promise<string",">",")"),(0,l.kt)("td",{parentName:"tr",align:null},"!"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"commandunauthorizedhandler"},"commandUnauthorizedHandler"),(0,l.kt)("p",null,"define bot reply, when command is not auhorized"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," ((command: SimpleCommandMessage) =",">"," Promise<void",">",")"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"silent"},"silent"),(0,l.kt)("p",null,"Allows you to disable your event information at startup"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"guards"},"guards"),(0,l.kt)("p",null,"Global guards, it's an array of functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GuardFunction ","[ ]"),(0,l.kt)("td",{parentName:"tr",align:null},"[ ]"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"botguilds"},"botGuilds"),(0,l.kt)("p",null,"The application commands are executed only on this list of guilds by default, ex. slash, button, selectmenu, contextmenu"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IGuild ","[ ]"),(0,l.kt)("td",{parentName:"tr",align:null},"[ ]"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"intents-1"},"Intents"),(0,l.kt)("p",null,'You must specify the "',(0,l.kt)("strong",{parentName:"p"},"intents"),"\" of your bot when you initialize the Client, it specify which informations your bot receive from the Discord's servers, ",(0,l.kt)("strong",{parentName:"p"},"it's different from the permissions")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Maintaining a stateful application can be difficult when it comes to the amount of data you're expected to process, especially at scale. Gateway Intents are a system to help you lower that computational burden.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'When identifying to the gateway, you can specify an intents parameter which allows you to conditionally subscribe to pre-defined "intents", groups of events defined by Discord. If you do not specify a certain intent, you will not receive any of the gateway events that are batched into that group.')),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If an event of your app isn't triggered, you probably missed an Intent"))),(0,l.kt)("h3",{id:"basic-intents-just-text-messages"},"Basic intents, just text messages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Intents } from "discord.js";\n\nconst client = new Client({\n  botId: "test",\n  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],\n  // ...\n});\n')),(0,l.kt)("h3",{id:"enable-direct-messages-from-user"},"Enable direct messages from user"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Intents } from "discord.js";\n\nconst client = new Client({\n  botId: "test",\n  // partial configuration required to enable direct messages\n  partials: ["CHANNEL", "MESSAGE"],\n  intents: [\n    Intents.FLAGS.GUILDS,\n    Intents.FLAGS.GUILD_MESSAGES,\n    Intents.FLAGS.DIRECT_MESSAGES,\n  ],\n  // ...\n});\n')),(0,l.kt)("h3",{id:"voice-activity-intent-the-ability-to-speak"},"Voice activity intent, the ability to speak"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Intents } from "discord.js";\n\nconst client = new Client({\n  botId: "test",\n  intents: [\n    Intents.FLAGS.GUILDS,\n    Intents.FLAGS.GUILD_MESSAGES,\n    Intents.FLAGS.GUILD_VOICE_STATES, // Can speak\n  ],\n  // ...\n});\n')),(0,l.kt)("h3",{id:"list-of-all-the-intents"},"List of all the intents"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#list-of-intents"},"You can find the complete list here")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Most used ones")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GUILDS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_MEMBERS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_BANS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_EMOJIS_AND_STICKERS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_INTEGRATIONS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_WEBHOOKS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_INVITES"),(0,l.kt)("li",{parentName:"ul"},"GUILD_VOICE_STATES"),(0,l.kt)("li",{parentName:"ul"},"GUILD_PRESENCES"),(0,l.kt)("li",{parentName:"ul"},"GUILD_MESSAGES"),(0,l.kt)("li",{parentName:"ul"},"GUILD_MESSAGE_REACTIONS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_MESSAGE_TYPING"),(0,l.kt)("li",{parentName:"ul"},"DIRECT_MESSAGES"),(0,l.kt)("li",{parentName:"ul"},"DIRECT_MESSAGE_REACTIONS"),(0,l.kt)("li",{parentName:"ul"},"DIRECT_MESSAGE_TYPING")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Intents } from "discord.js";\n\nconst client = new Client({\n  botId: "test",\n  intents: [\n    Intents.FLAGS.GUILDS,\n    Intents.FLAGS.GUILD_MESSAGES,\n    Intents.FLAGS.GUILD_VOICE_STATES,\n    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,\n    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,\n    Intents.FLAGS.DIRECT_MESSAGES,\n    Intents.FLAGS.DIRECT_MESSAGE_TYPING,\n    Intents.FLAGS.GUILD_INTEGRATIONS,\n    Intents.FLAGS.GUILD_PRESENCES,\n    Intents.FLAGS.GUILD_WEBHOOKS,\n    Intents.FLAGS.GUILD_MEMBERS,\n    Intents.FLAGS.GUILD_INVITES,\n    Intents.FLAGS.GUILD_BANS,\n  ],\n  // ...\n});\n')),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/stable/class/Intents"},"Discord.js documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/topics/gateway#list-of-intents"},"Discord's documentation"))))}m.isMDXComponent=!0}}]);