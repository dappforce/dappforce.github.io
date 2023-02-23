"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[2450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(3117),o=(n(7294),n(3905));const a={id:"energy",title:"Energy",displayed_sidebar:"developSidebar"},s=void 0,i={unversionedId:"develop/sdk/energy",id:"develop/sdk/energy",title:"Energy",description:"This section covers interaction that you can do with energy module.",source:"@site/docs/develop/sdk/Energy.md",sourceDirName:"develop/sdk",slug:"/develop/sdk/energy",permalink:"/docs/develop/sdk/energy",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/Energy.md",tags:[],version:"current",frontMatter:{id:"energy",title:"Energy",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Registering Usernames",permalink:"/docs/develop/sdk/usernames/register-usernames"},next:{title:"Subsocial Utils",permalink:"/docs/develop/sdk/subsocial-utils"}},c={},l=[{value:"Burn SUB to generate energy",id:"burn-sub-to-generate-energy",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This section covers interaction that you can do with energy module.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"We recommend to learn ",(0,o.kt)("a",{parentName:"em",href:"https://docs.subsocial.network/docs/develop/sdk/transactions"},"Signing & Sending Transactions")," before it.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Also you can learn more about energy ",(0,o.kt)("a",{parentName:"em",href:"/docs/develop/concepts/sponsored/energy"},"here"))),(0,o.kt)("h3",{id:"burn-sub-to-generate-energy"},"Burn SUB to generate energy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"substrateApi.tx.energy.generateEnergy(target, burnAmount)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { convertToBalanceWithDecimal } from '@subsocial/utils'\n\nconst burnAmount = 1 // 1 SUB\n\nconst parsedBurnAmount = convertToBalanceWithDecimal(burnAmount, 10) // SUB token uses 10 decimals, SOON (testnet) uses 12 decimals\n\n// or you can just multiply it manually\n// const parsedBurnAmount = burnAmount * 10 ** 10\n\nconst tx = substrateApi.tx.reactions.createPostReaction('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', parsedBurnAmount.toString())\n")))}u.isMDXComponent=!0}}]);