"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[3608],{5788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>g});var r=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),y=a,g=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(5072),a=(n(1504),n(5788));const o={id:"setup",title:"Setting Up Light Grill Locally",description:"A quick guide to run the Light Grill app locally on your machine in seconds.",keywords:["Extensions","Light Grill","Building on the Grill app","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},l=void 0,i={unversionedId:"develop/zero-to-hero/extension/setup",id:"develop/zero-to-hero/extension/setup",title:"Setting Up Light Grill Locally",description:"A quick guide to run the Light Grill app locally on your machine in seconds.",source:"@site/docs/develop/zero-to-hero/extension/Setup.md",sourceDirName:"develop/zero-to-hero/extension",slug:"/develop/zero-to-hero/extension/setup",permalink:"/docs/develop/zero-to-hero/extension/setup",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/zero-to-hero/extension/Setup.md",tags:[],version:"current",frontMatter:{id:"setup",title:"Setting Up Light Grill Locally",description:"A quick guide to run the Light Grill app locally on your machine in seconds.",keywords:["Extensions","Light Grill","Building on the Grill app","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Overview",permalink:"/docs/develop/zero-to-hero/extension/overview"},next:{title:"Defining The Schema",permalink:"/docs/develop/zero-to-hero/extension/schema"}},p={},c=[{value:"Local development environment setup",id:"local-development-environment-setup",level:2},{value:"Understanding environment variables",id:"understanding-environment-variables",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.c)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This section covers the steps for setting up Grill locally, and the environment variables that need to be added."),(0,a.yg)("h2",{id:"local-development-environment-setup"},"Local development environment setup"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fork the ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/dappforce/grillchat-light-ui"},"Light Grill app")," on your GitHub"),(0,a.yg)("li",{parentName:"ul"},"Clone the repository locally"),(0,a.yg)("li",{parentName:"ul"},"Rename ",(0,a.yg)("inlineCode",{parentName:"li"},".env.example")," file to ",(0,a.yg)("inlineCode",{parentName:"li"},".env")," "),(0,a.yg)("li",{parentName:"ul"},"Run ",(0,a.yg)("inlineCode",{parentName:"li"},"yarn && yarn dev")," to run the project locally")),(0,a.yg)("h2",{id:"understanding-environment-variables"},"Understanding environment variables"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Required?"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SERVER_MNEMONIC"),(0,a.yg)("td",{parentName:"tr",align:null},"The wallet mnemonic of the server, in order to automatically send users ",(0,a.yg)("a",{parentName:"td",href:"https://docs.subsocial.network/docs/basics/lightpaper/architecture/energy"},"Energy")),(0,a.yg)("td",{parentName:"tr",align:null},"Yes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"CAPTCHA_SECRET"),(0,a.yg)("td",{parentName:"tr",align:null},"ReCaptcha secret, read ",(0,a.yg)("a",{parentName:"td",href:"https://developers.google.com/recaptcha/intro"},"here")," for more information."),(0,a.yg)("td",{parentName:"tr",align:null},"Yes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"NEXT_PUBLIC_CAPTCHA_SITE_KEY"),(0,a.yg)("td",{parentName:"tr",align:null},"ReCaptcha sitekey"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"NEXT_PUBLIC_MORALIS_API_KEY"),(0,a.yg)("td",{parentName:"tr",align:null},"API key to fetch NFT metadata from Moralis. Get your own API key ",(0,a.yg)("a",{parentName:"td",href:"https://moralis.io/api/nft/"},"here"),"."),(0,a.yg)("td",{parentName:"tr",align:null},"No")))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"NOTE: We have already created an example environment file for you for local development. You can rename the file and run the app locally.")))}u.isMDXComponent=!0}}]);