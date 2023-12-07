"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[4819],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>f});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},l=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),p=u(a),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return a?n.createElement(f,s(s({ref:e},l),{},{components:a})):n.createElement(f,s({ref:e},l))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,s=new Array(o);s[0]=b;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[p]="string"==typeof t?t:r,s[1]=c;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},6928:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={id:"substrate",title:"Substrate"},s=void 0,c={unversionedId:"tutorials/getting-started/account-setup/substrate",id:"tutorials/getting-started/account-setup/substrate",title:"Substrate",description:"Substrate is a framework used to build blockchains. Polkadot and Kusama, and many other chains,",source:"@site/docs/tutorials/getting-started/account-setup/Substrate.md",sourceDirName:"tutorials/getting-started/account-setup",slug:"/tutorials/getting-started/account-setup/substrate",permalink:"/docs/tutorials/getting-started/account-setup/substrate",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/tutorials/getting-started/account-setup/Substrate.md",tags:[],version:"current",frontMatter:{id:"substrate",title:"Substrate"},sidebar:"tutorialsSidebar",previous:{title:"Talisman",permalink:"/docs/tutorials/"},next:{title:"Intro",permalink:"/docs/tutorials/getting-started/polkaverse/intro"}},i={},u=[],l={toc:u},p="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Substrate is a framework used to build blockchains. Polkadot and Kusama, and many other chains,\nare all built using Substrate. The technical specifics are not important here,\nbut you can ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.io/"},"read about them")," if you want to.\nWhat is important now is to learn how accounts work."),(0,r.kt)("p",null,"Basically, when you make a Polkadot or Kusama account, or an account for any other Substrate-based blockchain,\nyou are actually making a Substrate account. That single Substrate account has accounts on every Substrate-based blockchain.\nSo, if you create a Polkadot account, you automatically create accounts for Kusama, Subsocial, Picasso, Zeitgeist, etc."),(0,r.kt)("p",null,"Additionally, these accounts are all linked together.\nThis can best ",(0,r.kt)("a",{parentName:"p",href:"https://sub.id/#/5E7sS6NaRTxPnUqN8W9dfh6nbdNrk5HZ9fiuAcYTdd2sTZbD"},"be seen using Sub.ID"),",\na tool built by the Subsocial team. We will look at an example account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))," ",(0,r.kt)("em",{parentName:"p"},"Substrate addresses have certain prefixes depending on which chain they are for.")),(0,r.kt)("img",{src:"/img/getting-started-5.png",width:"600"}),(0,r.kt)("p",null,"At the top we can see the base Substrate address, with a prefix of 5. You can think of a Substrate account like a wheel.\nEach individual chain is a spoke on the wheel, and the Substrate address is at the center, connecting them all."),(0,r.kt)("p",null,"Further down, we can see addresses and balances for a few Substrate-based chains,\nsuch as Polkadot, Kusama, Acala, and Astar. As you can see, they all have different addresses.\nHowever, they are all part of the same Substrate account,\nand the owner of this account only sees one account in his polkadot.js extension,\nbut is able to perform transactions on all of these networks."))}d.isMDXComponent=!0}}]);