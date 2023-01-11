"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[2218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(b,a(a({ref:t},p),{},{components:n})):o.createElement(b,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(3117),r=(n(7294),n(3905));const i={id:"connectToSubsocial",title:"Connect To Subsocial",displayed_sidebar:"developSidebar"},a=void 0,c={unversionedId:"develop/sdk/connectToSubsocial",id:"develop/sdk/connectToSubsocial",title:"Connect To Subsocial",description:"This section covers how to connect to the Subsocial blockchain using our JS SDK.",source:"@site/docs/develop/sdk/ConnectToSubsocial.md",sourceDirName:"develop/sdk",slug:"/develop/sdk/connectToSubsocial",permalink:"/docs/develop/sdk/connectToSubsocial",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/sdk/ConnectToSubsocial.md",tags:[],version:"current",frontMatter:{id:"connectToSubsocial",title:"Connect To Subsocial",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Configuration",permalink:"/docs/develop/sdk/configuration"},next:{title:"Signing & Sending Transactions",permalink:"/docs/develop/sdk/transactions"}},s={},l=[{value:"Initializing The APIs",id:"initializing-the-apis",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This section covers how to connect to the Subsocial blockchain using our JS SDK.")),(0,r.kt)("p",null,"After the ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/sdk/configuration"},"Configuration")," settings you can create an instance of the Subsocial api, so that you can have access to all blockchain methods:"),(0,r.kt)("h3",{id:"initializing-the-apis"},"Initializing The APIs"),(0,r.kt)("p",null,"You need to initialize the Subsocial Api and set authorizations for saving content on IPFS with the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { SubsocialApi } from "@subsocial/api";\nimport { config } from "config";\n\nconst initSubsocialApi = async () => {\n  const api = await SubsocialApi.create(config);\n  return api;\n};\n\n// Required only for Testnet.\nconst authHeader = \'c3ViLTVGQTluUURWZzI2N0RFZDhtMVp5cFhMQm52TjdTRnhZd1Y3bmRxU1lHaU45VFRwdToweDEwMmQ3ZmJhYWQwZGUwNzFjNDFmM2NjYzQzYmQ0NzIxNzFkZGFiYWM0MzEzZTc5YTY3ZWExOWM0OWFlNjgyZjY0YWUxMmRlY2YyNzhjNTEwZGY4YzZjZTZhYzdlZTEwNzY2N2YzYTBjZjM5OGUxN2VhMzAyMmRkNmEyYjc1OTBi\';\n\n\n// Use this ipfs object, to set authHeader for writing on Crust IPFS cluster.\napi.ipfs.setWriteHeaders({\n  authorization: "Basic " + authHeader,\n});\n')),(0,r.kt)("p",null,"In order to deploy content on your own ipfs node, just change the property ipfsNodeUrl in the configuration settings"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before going deep in the SDK you can try out the code in our ",(0,r.kt)("a",{parentName:"p",href:"https://play.subsocial.network"},"Playground"),".")))}u.isMDXComponent=!0}}]);