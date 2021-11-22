"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[64],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(k,l(l({ref:t},d),{},{components:r})):n.createElement(k,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5901:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={id:"Lava.HTTPError",title:"Class: HTTPError",sidebar_label:"HTTPError",custom_edit_url:null},s=void 0,p={unversionedId:"api/music/classes/Lava.HTTPError",id:"api/music/classes/Lava.HTTPError",isDocsHomePage:!1,title:"Class: HTTPError",description:"Lava.HTTPError",source:"@site/docs/api/music/classes/Lava.HTTPError.md",sourceDirName:"api/music/classes",slug:"/api/music/classes/Lava.HTTPError",permalink:"/docs/api/music/classes/Lava.HTTPError",editUrl:null,tags:[],version:"current",frontMatter:{id:"Lava.HTTPError",title:"Class: HTTPError",sidebar_label:"HTTPError",custom_edit_url:null},sidebar:"apiMusicSidebar",previous:{title:"Connection",permalink:"/docs/api/music/classes/Lava.Connection"},next:{title:"Http",permalink:"/docs/api/music/classes/Lava.Http"}},d=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Overrides",id:"overrides",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"headers",id:"headers",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"method",id:"method",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"path",id:"path",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"statusCode",id:"statuscode",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"statusMessage",id:"statusmessage",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../namespaces/Lava"},"Lava"),".HTTPError"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Error")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"HTTPError"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new HTTPError"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"httpMessage"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"httpMessage")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"IncomingMessage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"method")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"url")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"URL"))))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,"Error.constructor"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/8300051/packages/music/src/LavaPlayer/core/Http.ts#L19"},"LavaPlayer/core/Http.ts:19")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"headers"},"headers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"headers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"IncomingHttpHeaders")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/8300051/packages/music/src/LavaPlayer/core/Http.ts#L17"},"LavaPlayer/core/Http.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"method"},"method"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"method"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/8300051/packages/music/src/LavaPlayer/core/Http.ts#L15"},"LavaPlayer/core/Http.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"path"},"path"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/8300051/packages/music/src/LavaPlayer/core/Http.ts#L18"},"LavaPlayer/core/Http.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"statuscode"},"statusCode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"statusCode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/8300051/packages/music/src/LavaPlayer/core/Http.ts#L16"},"LavaPlayer/core/Http.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"statusmessage"},"statusMessage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"statusMessage"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/8300051/packages/music/src/LavaPlayer/core/Http.ts#L14"},"LavaPlayer/core/Http.ts:14")))}u.isMDXComponent=!0}}]);