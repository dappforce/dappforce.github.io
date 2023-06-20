"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[3178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=i,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={id:"architecture",title:"Architecture",displayed_sidebar:"homeSidebar"},a=void 0,c={unversionedId:"basics/lightpaper/architecture/architecture",id:"basics/lightpaper/architecture/architecture",title:"Architecture",description:"The architecture of Subsocial is primarily focused on creating so called Social Primitives, such as posts, follows, comments, and reactions,",source:"@site/docs/basics/lightpaper/architecture/Architecture.md",sourceDirName:"basics/lightpaper/architecture",slug:"/basics/lightpaper/architecture/",permalink:"/docs/basics/lightpaper/architecture/",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/basics/lightpaper/architecture/Architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture",displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar",previous:{title:"Overview",permalink:"/docs/basics/lightpaper/overview"},next:{title:"Posts and Spaces",permalink:"/docs/basics/lightpaper/architecture/posts-and-spaces"}},s={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The architecture of Subsocial is primarily focused on creating so called Social Primitives, such as posts, follows, comments, and reactions,\nthat enable developers to build or integrate novel use cases using uniquely Web3 features\nlike NFT-gated chats, social tokens, or renting content from the author."),(0,i.kt)("p",null,"We will briefly cover topics such as where content is published and how it can be monetized via\na myriad of methods that we are working on adding as soon as possible. This paper will also\ncover how we handle reputation and allow for a multitude of reputation types."),(0,i.kt)("p",null,"Subsocial saves you the hassle of running your own social network blockchain. Multiple social\nnetworks can run from the Subsocial chain which will provide shared networking effects. By\ndefault, the network is censorship-resistant, however, each community is able to set their own\nrules for moderation."))}d.isMDXComponent=!0}}]);