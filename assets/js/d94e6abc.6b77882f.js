"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[2450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(3117),o=(r(7294),r(3905));const a={id:"energy",title:"Energy",displayed_sidebar:"developSidebar"},s=void 0,c={unversionedId:"develop/sdk/energy",id:"develop/sdk/energy",title:"Energy",description:"This section covers interaction that you can do with energy module. You can learn more here",source:"@site/docs/develop/sdk/Energy.md",sourceDirName:"develop/sdk",slug:"/develop/sdk/energy",permalink:"/docs/develop/sdk/energy",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/Energy.md",tags:[],version:"current",frontMatter:{id:"energy",title:"Energy",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Registering Usernames",permalink:"/docs/develop/sdk/usernames/register-usernames"},next:{title:"Subsocial Utils",permalink:"/docs/develop/sdk/subsocial-utils"}},i={},l=[{value:"Burn SUB to generate energy",id:"burn-sub-to-generate-energy",level:3}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This section covers interaction that you can do with energy module. You can learn more ",(0,o.kt)("a",{parentName:"strong",href:"/docs/develop/concepts/sponsored/energy"},"here"))),(0,o.kt)("h3",{id:"burn-sub-to-generate-energy"},"Burn SUB to generate energy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"substrateApi.tx.energy.generateEnergy(target, burnAmount)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { convertToBalanceWithDecimal } from '@subsocial/utils'\n\nconst burnAmount = 1 // 1 SUB\n\nconst parsedBurnAmount = convertToBalanceWithDecimal(burnAmount, 10) // SUB token uses 10 decimals, SOON (testnet) uses 12 decimals\n\n// or you can just multiply it manually\n// const parsedBurnAmount = burnAmount * 10 ** 10\n\nconst tx = substrateApi.tx.reactions.createPostReaction('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', parsedBurnAmount.toString())\n")))}p.isMDXComponent=!0}}]);