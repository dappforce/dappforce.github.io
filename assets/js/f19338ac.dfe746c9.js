"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[7893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(3117),r=(n(7294),n(3905));const a={id:"testnet",title:"Understanding The Testnet",displayed_sidebar:"developSidebar"},i=void 0,s={unversionedId:"develop/getting-started/testnet",id:"develop/getting-started/testnet",title:"Understanding The Testnet",description:"This section covers information about Subsocial's testnet i.e. SoonSocialX.",source:"@site/docs/develop/getting-started/UnderstandingTestnet.md",sourceDirName:"develop/getting-started",slug:"/develop/getting-started/testnet",permalink:"/docs/develop/getting-started/testnet",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/getting-started/UnderstandingTestnet.md",tags:[],version:"current",frontMatter:{id:"testnet",title:"Understanding The Testnet",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Overall Interaction",permalink:"/docs/develop/getting-started/blockchain-structure/overallInteraction"},next:{title:"Installation",permalink:"/docs/develop/how-to-guides/installation"}},l={},p=[{value:"Why do we need a testnet?",id:"why-do-we-need-a-testnet",level:3},{value:"How many tokens will I get?",id:"how-many-tokens-will-i-get",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This section covers information about Subsocial's testnet i.e. SoonSocialX.")),(0,r.kt)("p",null,"Subsocial provides developers with a new and fast testnet (named Soonsocial) for building and testing your social Dapps. It enables you to start building and deploy your dapps on our testnet, and invite your early community to start using it without need to buy real SUB tokens on the mainnet."),(0,r.kt)("h3",{id:"why-do-we-need-a-testnet"},"Why do we need a testnet?"),(0,r.kt)("p",null,"Building Dapps on Subsocial is simple and quick but it requires your users to own some $SUB tokens. As of now, we haven't listed $SUB so people can't buy tokens yet. It's important to build a community around your social Dapp before going to the mainnet, and the testnet lets you do that."),(0,r.kt)("p",null,"Tokens on the testnet can be received by writing the following command in our Discord server."),(0,r.kt)("p",null,"Run this command under ",(0,r.kt)("inlineCode",{parentName:"p"},"#testnet-faucet")," : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  !drip <YOUR_POLKADOT_JS_ADDRESS> \n")),(0,r.kt)("p",null,"Join our Discord server ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/w2Rqy2M"},"here"),"."),(0,r.kt)("h2",{id:"how-many-tokens-will-i-get"},"How many tokens will I get?"),(0,r.kt)("p",null,"The Discord bot will grant you ",(0,r.kt)("strong",{parentName:"p"},"10 SOON")," tokens to test on the Soonsocial solochain. "),(0,r.kt)("p",null,"You can check your balances ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"here")," by choosing the Soonsocial network from the list of test networks on the left."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": If you face any issues while using the testnet, please let us know in our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/w2Rqy2M"},"Discord server")," or ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/+ZzvLu0ZfkQwxNGQy"},"Telegram developer chat"),".")))}d.isMDXComponent=!0}}]);