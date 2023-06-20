"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[8771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"roles-and-permissions",title:"Roles and Permissions",displayed_sidebar:"homeSidebar"},i=void 0,s={unversionedId:"basics/lightpaper/architecture/roles-and-permissions",id:"basics/lightpaper/architecture/roles-and-permissions",title:"Roles and Permissions",description:"Subsocial natively offers built-in and dynamic roles. Space owners can specify the role of any Subsocial account in that space,",source:"@site/docs/basics/lightpaper/architecture/RolesAndPermissions.md",sourceDirName:"basics/lightpaper/architecture",slug:"/basics/lightpaper/architecture/roles-and-permissions",permalink:"/docs/basics/lightpaper/architecture/roles-and-permissions",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/basics/lightpaper/architecture/RolesAndPermissions.md",tags:[],version:"current",frontMatter:{id:"roles-and-permissions",title:"Roles and Permissions",displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar",previous:{title:"Stablecoins",permalink:"/docs/basics/lightpaper/architecture/monetization/stablecoins"},next:{title:"Moderation",permalink:"/docs/basics/lightpaper/architecture/moderation"}},l={},c=[{value:"Example: Twitter-like space",id:"example-twitter-like-space",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Subsocial natively offers built-in and dynamic roles. Space owners can specify the role of any Subsocial account in that space,\nas well as designate which permissions are associated with that role."),(0,a.kt)("p",null,"Here are some possible roles: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Role"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"No account can do this.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Everyone"),(0,a.kt)("td",{parentName:"tr",align:null},"Any account on the Subsocial blockchain.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Follower"),(0,a.kt)("td",{parentName:"tr",align:null},"Any account that follows a given space.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Space Owner"),(0,a.kt)("td",{parentName:"tr",align:null},"The current owner(s) of a given space.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Editor"),(0,a.kt)("td",{parentName:"tr",align:null},"Able to post in a given space (non-editors cannot).")))),(0,a.kt)("p",null,"The roles can assume different permissions as defined by the space owner(s) and/or moderator(s).\nAs with other social media platforms, it is important to define the permissions by considering questions such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Who can create posts and comments in a space?"),(0,a.kt)("li",{parentName:"ul"},"Is it possible to edit a post or comment?"),(0,a.kt)("li",{parentName:"ul"},"Is it possible to delete a post or comment?"),(0,a.kt)("li",{parentName:"ul"},"Is it possible to upvote, downvote or share a post?")),(0,a.kt)("h2",{id:"example-twitter-like-space"},"Example: Twitter-like space"),(0,a.kt)("p",null,"For example, if you want to make your space similar to your Twitter profile, you would implement the following permissions in your space:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only the owner (you) can create posts (tweets)."),(0,a.kt)("li",{parentName:"ul"},"Disable downvotes (Twitter only has upvotes/likes).")),(0,a.kt)("p",null,"Roles and permissions enable a space to be flexible and personal, and allow you to define granular access control.\nThis helps with the management of your space when it represents a group of people such as a community, organization, or team."))}m.isMDXComponent=!0}}]);