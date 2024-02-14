"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[5752],{5788:(e,t,o)=>{o.d(t,{Iu:()=>d,yg:()=>y});var r=o(1504);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),f=n,y=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return o?r.createElement(y,a(a({ref:t},d),{},{components:o})):r.createElement(y,a({ref:t},d))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},6156:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(5072),n=(o(1504),o(5788));const i={id:"introduction",title:"Introduction",displayed_sidebar:"developSidebar"},a=void 0,s={unversionedId:"develop/zero-to-hero/twitter-dapp/introduction",id:"develop/zero-to-hero/twitter-dapp/introduction",title:"Introduction",description:"Build A Decentralized Twitter In 50 Minutes With Subsocial",source:"@site/docs/develop/zero-to-hero/twitter-dapp/ProjectSetup.md",sourceDirName:"develop/zero-to-hero/twitter-dapp",slug:"/develop/zero-to-hero/twitter-dapp/introduction",permalink:"/docs/develop/zero-to-hero/twitter-dapp/introduction",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/zero-to-hero/twitter-dapp/ProjectSetup.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Adding An Extension To The Registry",permalink:"/docs/develop/zero-to-hero/extension/registry"},next:{title:"Creating New Project",permalink:"/docs/develop/zero-to-hero/twitter-dapp/creating-project"}},l={},c=[{value:"So what are we going to build? \ud83e\uddd0",id:"so-what-are-we-going-to-build-",level:3},{value:"Sign-in using the Polkadot.js wallet",id:"sign-in-using-the-polkadotjs-wallet",level:4},{value:"See feed / posts of a space",id:"see-feed--posts-of-a-space",level:4},{value:"Tweet, Like, View Profiles",id:"tweet-like-view-profiles",level:4},{value:"In case you face some issues \ud83d\udc1e",id:"in-case-you-face-some-issues-",level:3},{value:"Let&#39;s go \ud83d\ude80",id:"lets-go-",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.yg)(p,(0,r.c)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("head",null,(0,n.yg)("title",null,"Build A Decentralized Twitter In 50 Minutes With Subsocial")),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Zero to Hero tutorial")," is your chance to build a fully decentralized Twitter app in 50 minutes using the Subsocial Starter."),(0,n.yg)("admonition",{title:"Tip",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"It's recommended to follow the steps as you read and tweet about your journey to invite others as well.")),(0,n.yg)("h3",{id:"so-what-are-we-going-to-build-"},"So what are we going to build? \ud83e\uddd0"),(0,n.yg)("p",null,"A decentralized twitter that lets your users own their social connections and content they create :D"),(0,n.yg)("h4",{id:"sign-in-using-the-polkadotjs-wallet"},"Sign-in using the ",(0,n.yg)("a",{parentName:"h4",href:"https://polkadot.js.org/extension/"},"Polkadot.js wallet")),(0,n.yg)("h4",{id:"see-feed--posts-of-a-space"},"See feed / posts of a space"),(0,n.yg)("h4",{id:"tweet-like-view-profiles"},"Tweet, Like, View Profiles"),(0,n.yg)("h3",{id:"in-case-you-face-some-issues-"},"In case you face some issues \ud83d\udc1e"),(0,n.yg)("p",null,"If you face any issues, doubts, or have any questions for us, feel free to chat with us on ",(0,n.yg)("a",{parentName:"p",href:"https://discord.gg/w2Rqy2M"},"Discord")," and ",(0,n.yg)("a",{parentName:"p",href:"https://t.me/+ZzvLu0ZfkQwxNGQy"},"Telegram"),"."),(0,n.yg)("h3",{id:"lets-go-"},"Let's go \ud83d\ude80"))}u.isMDXComponent=!0}}]);