"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[4751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={id:"content-storage",title:"Content Storage",displayed_sidebar:"homeSidebar"},i=void 0,s={unversionedId:"basics/lightpaper/architecture/content-storage",id:"basics/lightpaper/architecture/content-storage",title:"Content Storage",description:"Subsocial uses the InterPlanetary File System (IPFS) for storage.",source:"@site/docs/basics/lightpaper/architecture/ContentStorage.md",sourceDirName:"basics/lightpaper/architecture",slug:"/basics/lightpaper/architecture/content-storage",permalink:"/docs/basics/lightpaper/architecture/content-storage",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/basics/lightpaper/architecture/ContentStorage.md",tags:[],version:"current",frontMatter:{id:"content-storage",title:"Content Storage",displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar",previous:{title:"Posts and Spaces",permalink:"/docs/basics/lightpaper/architecture/posts-and-spaces"},next:{title:"Identity",permalink:"/docs/basics/lightpaper/architecture/identity"}},c={},l=[],p={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Subsocial uses the ",(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"InterPlanetary File System")," (IPFS) for storage.\nWhen a file is uploaded to IPFS, it is hashed to create a CID, which can be thought of as directions to find that file.\nThe only thing that is put onto the Subsocial blockchain is the CID of content. Applications can then use the CID to load the content from IPFS."),(0,o.kt)("p",null,"The problem with normal IPFS is that random strangers on the internet are not going to want to host users' content.\nMultiple blockchain projects have been created that add a payment layer on top of IPFS, solving this problem.\nContent uploaded to these networks can be stored for decades with just a tiny payment."),(0,o.kt)("p",null,"However, these projects have tokens of their own that are required to pay the network to store a piece of content.\nThis means that users would need to acquire another token to pay the storage fee, and this can be inconvenient."),(0,o.kt)("p",null,"Alternative options include applications paying all of the storage fees for users, or at least handling some token conversion,\nallowing users to pay for storage in SUB or DOT."),(0,o.kt)("p",null,"The solution to this will be covered in the Applications section.\nIn short, applications on Subsocial can use one of these payment layer solutions to manage content storage."))}h.isMDXComponent=!0}}]);