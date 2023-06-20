"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[6681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,y=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={id:"registry",title:"Adding An Extension To The Registry",description:"This section explains how to link a newly created extension to Light Grill's extension registry.",keywords:["Registry","Extensions","Light Grill","Building on Grill App","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},s=void 0,l={unversionedId:"develop/zero-to-hero/extension/registry",id:"develop/zero-to-hero/extension/registry",title:"Adding An Extension To The Registry",description:"This section explains how to link a newly created extension to Light Grill's extension registry.",source:"@site/docs/develop/zero-to-hero/extension/Registry.md",sourceDirName:"develop/zero-to-hero/extension",slug:"/develop/zero-to-hero/extension/registry",permalink:"/docs/develop/zero-to-hero/extension/registry",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/zero-to-hero/extension/Registry.md",tags:[],version:"current",frontMatter:{id:"registry",title:"Adding An Extension To The Registry",description:"This section explains how to link a newly created extension to Light Grill's extension registry.",keywords:["Registry","Extensions","Light Grill","Building on Grill App","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Creating An Input Modal",permalink:"/docs/develop/zero-to-hero/extension/modal"},next:{title:"Introduction",permalink:"/docs/develop/zero-to-hero/twitter-dapp/introduction"}},a={},p=[{value:"Creating An Extension",id:"creating-an-extension",level:2},{value:"Wohooo \ud83c\udf8a",id:"wohooo-",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every extension that is created needs to be added to the registry to ensure it is listed on the Grill Extension Selector."),(0,o.kt)("h2",{id:"creating-an-extension"},"Creating An Extension"),(0,o.kt)("p",null,"We need to extend the ",(0,o.kt)("strong",{parentName:"p"},"Extension")," interface to create values for the extension related details like Modal, Extension and Schema Name."),(0,o.kt)("p",null,"You need to create the ",(0,o.kt)("strong",{parentName:"p"},"index.tsx")," file inside the ",(0,o.kt)("strong",{parentName:"p"},"components/Extensions/url")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Extension } from "../types"\nimport { UrlExtension, UrlProperties } from "./UrlExtension"\nimport UrlModal from "./UrlModal"\n\nconst url: Extension<UrlExtension> = {\n  name: UrlExtension.id,\n  initialize: (properties: UrlProperties) => new UrlExtension(properties),\n  label: "URL",\n  modal: <UrlModal />,\n}\n\nexport default url\n\n\n')),(0,o.kt)("p",null,"Now, the last step is to add the ",(0,o.kt)("strong",{parentName:"p"},"url")," to the list of extensions in the ",(0,o.kt)("inlineCode",{parentName:"p"},"registry.tsx")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'\n  import url from "@/components/Extensions/url";\n\n  export const registry: Extension<any>[] = [\n    image,\n    nft,\n    url // url is added here.\n  ]\n\n')),(0,o.kt)("h2",{id:"wohooo-"},"Wohooo \ud83c\udf8a"),(0,o.kt)("p",null,"You have successfully built your first extension on top of Light Grill!"),(0,o.kt)("p",null,"Now keep building for more interesting use cases, and ask any questions ",(0,o.kt)("a",{parentName:"p",href:"hhttps://t.me/+0bn2xWmRXdpmM2Y6"},"here"),"."))}u.isMDXComponent=!0}}]);