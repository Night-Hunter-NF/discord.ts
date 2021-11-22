"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[16],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6949:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},s="@Once - Discord events",c={unversionedId:"decorators/general/once",id:"decorators/general/once",isDocsHomePage:!1,title:"@Once - Discord events",description:"It's exactly the same behavior as @On but the method is only executed once",source:"@site/docs/decorators/general/once.md",sourceDirName:"decorators/general",slug:"/decorators/general/once",permalink:"/docs/decorators/general/once",editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/decorators/general/once.md",tags:[],version:"current",lastUpdatedBy:"oceanroleplay",lastUpdatedAt:1637586128,formattedLastUpdatedAt:"11/22/2021",frontMatter:{},sidebar:"docSidebar",previous:{title:"@On - Discord events",permalink:"/docs/decorators/general/on"},next:{title:"@Permission",permalink:"/docs/decorators/general/permission"}},d=[{value:"Get the event payload",id:"get-the-event-payload",children:[],level:2},{value:"Signature",id:"signature",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Name",id:"name",children:[],level:3},{value:"EventParams",id:"eventparams",children:[{value:"botIds",id:"botids",children:[],level:4}],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"once---discord-events"},"@Once - Discord events"),(0,l.kt)("p",null,"It's exactly the same behavior as ",(0,l.kt)("a",{parentName:"p",href:"/docs/decorators/general/on"},"@On")," but the method is only executed once"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Discord, On, Once } from "discordx";\n\n@Discord()\nabstract class AppDiscord {\n  @Once("messageDelete")\n  private onMessageDelete() {\n    // ...\n  }\n}\n')),(0,l.kt)("h2",{id:"get-the-event-payload"},"Get the event payload"),(0,l.kt)("p",null,"For each event a list of arguments is injected in your decorated method, you can type this list thanks to the ",(0,l.kt)("inlineCode",{parentName:"p"},'ArgsOf<"YOUR_EVENT">')," type provided by discord.",(0,l.kt)("strong",{parentName:"p"},"ts"),"."),(0,l.kt)("p",null,"You also receive other useful arguments after that:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The event payload (",(0,l.kt)("inlineCode",{parentName:"li"},'ArgsOf<"YOUR_EVENT">'),")"),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Client")," instance"),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("a",{parentName:"li",href:"/docs/decorators/general/guard"},"guards")," payload")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You should use JS desctructuring for ",(0,l.kt)("inlineCode",{parentName:"p"},'ArgsOf<"YOUR_EVENT">')," like in this example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Discord, On, Client, ArgsOf } from "discordx";\n\n@Discord()\nabstract class AppDiscord {\n  @On("messageCreate")\n  private onMessage(\n    [message]: ArgsOf<"messageCreate">, // Type message automatically\n    client: Client, // Client instance injected here,\n    guardPayload: any\n  ) {\n    // ...\n  }\n}\n')),(0,l.kt)("h2",{id:"signature"},"Signature"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Once(event: DiscordEvents, params?: EventParams)\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"The event name."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h3",{id:"eventparams"},"EventParams"),(0,l.kt)("p",null,"Multiple options, check below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h4",{id:"botids"},"botIds"),(0,l.kt)("p",null,"Array of bot ids, for which only the event will be executed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string","[ ]"),(0,l.kt)("td",{parentName:"tr",align:null},"[ ]")))))}u.isMDXComponent=!0}}]);