"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[5543],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(3117),a=(r(7294),r(3905));const i={id:"signer",title:"Off-Chain Signer",displayed_sidebar:"homeSidebar"},o=void 0,s={unversionedId:"basics/lightpaper/architecture/signer",id:"basics/lightpaper/architecture/signer",title:"Off-Chain Signer",description:"The Off-Chain Signer provides the ability to use Subsocial applications without a wallet, or without constant transaction",source:"@site/docs/basics/lightpaper/architecture/Signer.md",sourceDirName:"basics/lightpaper/architecture",slug:"/basics/lightpaper/architecture/signer",permalink:"/docs/basics/lightpaper/architecture/signer",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/basics/lightpaper/architecture/Signer.md",tags:[],version:"current",frontMatter:{id:"signer",title:"Off-Chain Signer",displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar",previous:{title:"Energy",permalink:"/docs/basics/lightpaper/architecture/energy"},next:{title:"A User-Owned Social Network",permalink:"/docs/basics/lightpaper/architecture/user-owned-social-network"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Off-Chain Signer provides the ability to use Subsocial applications without a wallet, or without constant transaction\nconfirmations if you do use a wallet."),(0,a.kt)("p",null,"The Signer technology leverages proxies accounts, a feature of Substrate,\nto allow applications to sign a select set of social transactions on behalf of users.\nNote that this does not include important transactions such as transferring spaces or tokens, or managing roles.\nThis removes the need to constantly confirm transactions every time you like a post, and allows users to get started with just an email and password."),(0,a.kt)("p",null,"For those using an email and password, an account is generated and the private key is stored in their browser. We are investigating possible solutions\nsuch as Web3Auth to further improve this."),(0,a.kt)("p",null,"For more details on the Off-Chain signer,\nplease read ",(0,a.kt)("a",{parentName:"p",href:"https://polkaverse.com/@subsocial/leveraging-polkadot-s-unique-capabilities-to-enable-web2-ux-38336"},"this article"),"."))}u.isMDXComponent=!0}}]);