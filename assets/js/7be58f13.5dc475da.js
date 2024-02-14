"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[1720],{5788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>m});var o=r(1504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(5072),n=(r(1504),r(5788));const a={id:"moderation",title:"Moderation",displayed_sidebar:"homeSidebar"},i=void 0,s={unversionedId:"basics/lightpaper/architecture/moderation",id:"basics/lightpaper/architecture/moderation",title:"Moderation",description:"One topic that is important for the decentralized technology ecosystem is how moderation is",source:"@site/docs/basics/lightpaper/architecture/Moderation.md",sourceDirName:"basics/lightpaper/architecture",slug:"/basics/lightpaper/architecture/moderation",permalink:"/docs/basics/lightpaper/architecture/moderation",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/basics/lightpaper/architecture/Moderation.md",tags:[],version:"current",frontMatter:{id:"moderation",title:"Moderation",displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar",previous:{title:"Roles and Permissions",permalink:"/docs/basics/lightpaper/architecture/roles-and-permissions"},next:{title:"Spaces as DAOs",permalink:"/docs/basics/lightpaper/architecture/spaces-as-DAOs"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,o.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"One topic that is important for the decentralized technology ecosystem is how moderation is\nhandled. Subsocial respects censorship resistance by not blocking content at the base level\n(on-chain); however, we also understand the necessity of being able to moderate your personal\nspace in order to remove unrelated content, trolls, and spam, or otherwise moderate\ninappropriate content."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Subsocial has three levels of moderation:")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"On-chain:")," Spaces on Subsocial feature moderation abilities given to the owner(s) and/or moderator(s) of a space.\nIf you post in a space that you don't own, you may be moderated.\nSpaces will be able to have very different moderation rules to meet the needs of their communities, but will still share the same blockchain.\nSubsocial is the glue that binds all of the spaces together."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Storage:")," As previously mentioned, content on Subsocial is stored on IPFS, with only the CID of the content stored on the blockchain.\nSomeone is running the server(s) that this content gets stored on, and they do have the ability to remove (moderate) it from their server.\nA good example of this would be someone uploading illegal content. This puts the server operator at risk, and they have the ability to remove it. "),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Applications:")," Apps built on Subsocial can be very diverse and customizable, including curated content feeds.\nFor example, a social network focused on dogs would not show any Subsocial content about cats.\nThis means they are effectively moderating all cat-related content, but the cats are not being censored, as they are available on the Subsocial network."),(0,n.yg)("p",null,"The only way for a bad actor to be immune to moderation is to post in their own space, have their own storage, and build their own user interface\n(this is basically how the dark web of Web2 already operates)."),(0,n.yg)("p",null,"Combining all three of these layers together, Subsocial's full moderation stack is ",(0,n.yg)("em",{parentName:"p"},"very")," versatile and robust."))}u.isMDXComponent=!0}}]);