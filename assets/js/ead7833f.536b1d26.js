"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[8538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={id:"mainnet",title:"For Mainnet",displayed_sidebar:"developSidebar"},i=void 0,l={unversionedId:"develop/mainnet",id:"develop/mainnet",title:"For Mainnet",description:"How to build dapps on the Subsocial mainnet",source:"@site/docs/develop/UnderstandingMainnet.md",sourceDirName:"develop",slug:"/develop/mainnet",permalink:"/docs/develop/mainnet",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/UnderstandingMainnet.md",tags:[],version:"current",frontMatter:{id:"mainnet",title:"For Mainnet",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"For Testnet",permalink:"/docs/develop/testnet"},next:{title:"For xSocial",permalink:"/docs/develop/xSocial"}},p={},s=[{value:"SDK Configuration",id:"sdk-configuration",level:3},{value:"GraphQL Configuration",id:"graphql-configuration",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"How to build dapps on the Subsocial mainnet")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This section covers information about Subsocial's Mainnet i.e. SubsocialX.")),(0,o.kt)("p",null,"Subsocial mainnet is the parachain on Polkadot network that holds main social profiles of the people and can be used on the ",(0,o.kt)("a",{parentName:"p",href:"https://polkaverse.com"},"Polkaverse dapp"),". "),(0,o.kt)("h3",{id:"sdk-configuration"},"SDK Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const config = {\n  substrateNodeUrl: "wss://para.f3joule.space",\n  ipfsNodeUrl: "https://ipfs.subsocial.network",\n};\n')),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/sdk/configuration"},"here"),"."),(0,o.kt)("h3",{id:"graphql-configuration"},"GraphQL Configuration"),(0,o.kt)("p",null,"Our GraphQL API endpoint:\n",(0,o.kt)("a",{parentName:"p",href:"https://squid.subsquid.io/subsocial/graphql"},"https://squid.subsquid.io/subsocial/graphql")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ApolloClient, InMemoryCache, gql } from '@apollo/client'\n\nconst API_URL = 'https://squid.subsquid.io/subsocial/graphql'\n\n/* create the API client */\nexport const client = new ApolloClient({\n  uri: API_URL,\n  cache: new InMemoryCache()\n})\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Detailed docs on GraphQL API & query options can be found easily on the API Endpoint ",(0,o.kt)("a",{parentName:"p",href:"https://squid.subsquid.io/subsocial/graphql"},"here"),".")),(0,o.kt)("p",null,"Read more details ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/subsocial-graqhql"},"here"),"."))}d.isMDXComponent=!0}}]);