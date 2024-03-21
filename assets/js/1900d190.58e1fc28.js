"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[1883],{5680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>f});var t=n(6540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),y=o,f=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return n?t.createElement(f,s(s({ref:r},p),{},{components:n})):t.createElement(f,s({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=y;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},626:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=n(8168),o=(n(6540),n(5680));const a={id:"energy",title:"Sponsored Transaction (Energy)",displayed_sidebar:"developSidebar"},s=void 0,i={unversionedId:"develop/concepts/sponsored/energy",id:"develop/concepts/sponsored/energy",title:"Sponsored Transaction (Energy)",description:"Energy allows usage of the Subsocial network without tokens, and has a few key points and implications. Energy is not actually a token, and cannot be transferred between accounts, and transaction fees are lower when using energy.",source:"@site/docs/develop/concepts/sponsored/energy.md",sourceDirName:"develop/concepts/sponsored",slug:"/develop/concepts/sponsored/energy",permalink:"/docs/develop/concepts/sponsored/energy",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/concepts/sponsored/energy.md",tags:[],version:"current",frontMatter:{id:"energy",title:"Sponsored Transaction (Energy)",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Entity Relations",permalink:"/docs/develop/concepts/entity-relations"},next:{title:"What are Synthetic Concepts?",permalink:"/docs/develop/concepts/synthetic/overview"}},c={},l=[{value:"Burn SUB tokens",id:"burn-sub-tokens",level:3},{value:"Get for free from our discord server",id:"get-for-free-from-our-discord-server",level:3}],p={toc:l},u="wrapper";function d(e){let{components:r,...n}=e;return(0,o.yg)(u,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Energy allows usage of the Subsocial network without tokens, and has a few key points and implications. Energy is not actually a token, and cannot be transferred between accounts, and transaction fees are lower when using energy."),(0,o.yg)("p",null,"Currently, there are 2 ways to generate energy which will be explained below."),(0,o.yg)("h3",{id:"burn-sub-tokens"},"Burn SUB tokens"),(0,o.yg)("p",null,"You can burn SUB tokens to generate energy for your account, or for another account. The fee used for each transaction will be significantly lower than if you were to use SUB tokens. How much cheaper the energy is set by energy coefficient. Energy coefficient is an on-chain parameter that can be set by the chain's governance. At the time of writing, the energy coefficient is 2x, meaning transaction fees are 2x cheaper if energy is used.\nFor more details, you can read it ",(0,o.yg)("a",{parentName:"p",href:"/docs/basics/lightpaper/architecture/energy"},"here"),"."),(0,o.yg)("p",null,"By using this method, app developer can onboard their user easily by burning their own tokens for them. This can make the user experience for the app much better by making the user not have to worry about buying tokens to use the app. To see how to do it, you can read it ",(0,o.yg)("a",{parentName:"p",href:"/docs/develop/sdk/energy"},"here")),(0,o.yg)("h3",{id:"get-for-free-from-our-discord-server"},"Get for free from our ",(0,o.yg)("a",{parentName:"h3",href:"https://discord.com/invite/w2Rqy2M"},"discord server")),(0,o.yg)("p",null,"Currently, you can also get energy for free from our discord server. You can get 2 energy which is enough for 500 transactions. You can request more energy only if your energy is less than 0.5 energy, which is equivalent to 100 transactions."),(0,o.yg)("p",null,"To request energy, you can use the command ",(0,o.yg)("inlineCode",{parentName:"p"},"!energy <your address>")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"#energy")," channel."))}d.isMDXComponent=!0}}]);