"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[2685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,c(c({ref:t},l),{},{components:n})):r.createElement(g,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(3117),o=(n(7294),n(3905));const a={id:"creating-an-account",title:"Creating An Account"},c=void 0,i={unversionedId:"tutorials/getting-started/account-setup/creating-an-account",id:"tutorials/getting-started/account-setup/creating-an-account",title:"Creating An Account",description:"Note: *It is recommended to read the rest of the steps on how to create an account, and then create an account.",source:"@site/docs/tutorials/getting-started/account-setup/CreatingAnAccount.md",sourceDirName:"tutorials/getting-started/account-setup",slug:"/tutorials/getting-started/account-setup/creating-an-account",permalink:"/docs/tutorials/getting-started/account-setup/creating-an-account",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/tutorials/getting-started/account-setup/CreatingAnAccount.md",tags:[],version:"current",frontMatter:{id:"creating-an-account",title:"Creating An Account"}},s={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:"))," ",(0,o.kt)("em",{parentName:"p"},"It is recommended to read the rest of the steps on how to create an account, and then create an account.\nIf you click off of the extension during the creation process, it will close and you will have to start over.")),(0,o.kt)("p",null,"To create an account with the Polkadot.js extension, you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the + button in the top right corner"),(0,o.kt)("li",{parentName:"ol"},"Click \u201cCreate new account\u201d")),(0,o.kt)("img",{src:"/img/getting-started-2.png",width:"360"}),(0,o.kt)("p",null,"On the next screen, 12 words in order will be shown. These 12 words make up your mnemonic seed phrase, and provide access to your account.\n",(0,o.kt)("strong",{parentName:"p"},"Store these, ",(0,o.kt)("em",{parentName:"strong"},"in the correct order"),", somewhere safe")," (for more information on storing your seed properly,\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-account-generation#storing-your-key-safely"},"read the wiki here"),")."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a copy of the 12 words somewhere safe and secure"),(0,o.kt)("li",{parentName:"ol"},"Check the box at the bottom that says \u201cI have saved my mnemonic seed safely.\u201d")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE:"))," ",(0,o.kt)("em",{parentName:"p"},"Your seed phrase will grant anyone access to your account, and all funds held in it.\nLosing your seed phrase can prevent you from being able to recover your account.\nIf your seed phrase is stolen, the thief will be able to take all of the funds from your account.")),(0,o.kt)("img",{src:"/img/getting-started-3.png",width:"360"}),(0,o.kt)("p",null,"On the next page, you can define some settings for your account. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"For Network, we recommend leaving it on \u201cAllow use on any chain\u201d\n(",(0,o.kt)("em",{parentName:"li"},"Advanced users seeking more security can create individual accounts for each chain, but this complicates the user experience, and can be confusing."),")"),(0,o.kt)("li",{parentName:"ol"},"Set a descriptive name for the account"),(0,o.kt)("li",{parentName:"ol"},"Create a strong password")),(0,o.kt)("img",{src:"/img/getting-started-4.png",width:"360"}),(0,o.kt)("p",null,"Congratulations, you now have a Substrate account. What that means will be explained in the next section."))}p.isMDXComponent=!0}}]);