"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[2576],{5788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>y});var r=a(1504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),g=n,y=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return a?r.createElement(y,l(l({ref:t},p),{},{components:a})):r.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(5072),n=(a(1504),a(5788));const o=a.p+"assets/images/starter-structure-2fa4f566359a8d7fc990ab56e3644ada.png",l={id:"developer-quickstart",title:"QuickStart",description:"Learn how you can quickly start building revolutionary social applications on Subsocial using our Create React App Starter Kit.",keywords:["Developer Quickstart","Subsocial Starter Kit","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},i=void 0,s={unversionedId:"develop/developer-quickstart",id:"develop/developer-quickstart",title:"QuickStart",description:"Learn how you can quickly start building revolutionary social applications on Subsocial using our Create React App Starter Kit.",source:"@site/docs/develop/SubsocialStarter.md",sourceDirName:"develop",slug:"/develop/developer-quickstart",permalink:"/docs/develop/developer-quickstart",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/SubsocialStarter.md",tags:[],version:"current",frontMatter:{id:"developer-quickstart",title:"QuickStart",description:"Learn how you can quickly start building revolutionary social applications on Subsocial using our Create React App Starter Kit.",keywords:["Developer Quickstart","Subsocial Starter Kit","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"FAQs",permalink:"/docs/develop/developers"},next:{title:"SDK Cheatsheet",permalink:"/docs/develop/sdk-cheatsheet"}},c={},p=[{value:"Get started building on Subsocial quickly using the Subsocial Starter",id:"get-started-building-on-subsocial-quickly-using-the-subsocial-starter",level:3},{value:"Create a new project",id:"create-a-new-project",level:3},{value:"Running a new project",id:"running-a-new-project",level:3},{value:"About the project structure",id:"about-the-project-structure",level:3},{value:"How to build using the Starter",id:"how-to-build-using-the-starter",level:3},{value:"Other helpful resources",id:"other-helpful-resources",level:3}],u={toc:p},d="wrapper";function g(e){let{components:t,...l}=e;return(0,n.yg)(d,(0,r.c)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("head",null,(0,n.yg)("title",null,"Subsocial Quickstart Guide | Developer Docs")),(0,n.yg)("h3",{id:"get-started-building-on-subsocial-quickly-using-the-subsocial-starter"},"Get started building on Subsocial quickly using the Subsocial Starter"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Subsocial Starter")," is a create-react-app template that gives you an initial template to start building on Subsocial. It has all of the necessary dependencies and configurations that are required to quickly start."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The Starter is the foundational layer for using the Subsocial JS SDK in a React app.")),(0,n.yg)("p",null,"The Starter template provides the following features:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Installed package dependencies like ",(0,n.yg)("strong",{parentName:"li"},"@subsocial/api")," and ",(0,n.yg)("strong",{parentName:"li"},"@polkadot/api")),(0,n.yg)("li",{parentName:"ul"},"API Configurations for ",(0,n.yg)("strong",{parentName:"li"},"Testnet")," and ",(0,n.yg)("strong",{parentName:"li"},"Mainnet")," to switch easily"),(0,n.yg)("li",{parentName:"ul"},"React context hooks for Subsocial APIs automatically connects and exposes necessary methods"),(0,n.yg)("li",{parentName:"ul"},"Polkadotjs Wallet methods to easily fetch connected accounts and send transactions for signing")),(0,n.yg)("h3",{id:"create-a-new-project"},"Create a new project"),(0,n.yg)("p",null,"Open the terminal, and run the following command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"  npx create-react-app my-app --template @subsocial/starter\n")),(0,n.yg)("p",null,"Now, the project is ",(0,n.yg)("strong",{parentName:"p"},"created")," inside the ",(0,n.yg)("inlineCode",{parentName:"p"},"/my-app")," directory."),(0,n.yg)("p",null,"Next, run the following command in the terminal:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"  cd my-app && yarn\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Make sure you use ",(0,n.yg)("inlineCode",{parentName:"p"},"yarn")," to install all dependencies, npm might not work.")),(0,n.yg)("p",null,"Update ",(0,n.yg)("inlineCode",{parentName:"p"},"package.json")," file with the project details. "),(0,n.yg)("h3",{id:"running-a-new-project"},"Running a new project"),(0,n.yg)("p",null,"To run a new project, just do:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"  yarn start\n")),(0,n.yg)("p",null,"You will see the following output in the browser window:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Starter Demo",src:a(8988).c,width:"2600",height:"1492"})),(0,n.yg)("h3",{id:"about-the-project-structure"},"About the project structure"),(0,n.yg)("p",null,"Understanding the project structure:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The ",(0,n.yg)("strong",{parentName:"p"},"config.ts")," file contains the objects to connect to different networks like the Subsocial Testnet and Mainnet. ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The ",(0,n.yg)("strong",{parentName:"p"},"provider.tsx")," file contains the context provider & hook for Subsocial related methods like:"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"export default { isReady, api, initialize, network, changeNetwork, setupCrustIPFS }\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("strong",{parentName:"li"},"polkadotjs.ts")," file exposes methods for connecting and getting data from the polkadot.js wallet extension.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"export default { logTransaction, getAllAccounts, signAndSendTx }\n")),(0,n.yg)("img",{src:o,width:"350"}),(0,n.yg)("h3",{id:"how-to-build-using-the-starter"},"How to build using the Starter"),(0,n.yg)("p",null,"Once the project is setup, you can go through the ",(0,n.yg)("strong",{parentName:"p"},"App.tsx")," file that contains the basic usage of connecting to the testnet, fetching a space, and creating a new space."),(0,n.yg)("p",null,"Now, you can start exploring the ideas and build on Subsocial."),(0,n.yg)("p",null,"We have list of methods to read and do transactions on chain. Try out the code snippets in the ",(0,n.yg)("a",{parentName:"p",href:"https://play.subsocial.network"},(0,n.yg)("strong",{parentName:"a"},"Subsocial Playground"))),(0,n.yg)("p",null,"The following pointers to have in mind: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Build on the ",(0,n.yg)("strong",{parentName:"li"},"Testnet")," first. And get some test tokens ",(0,n.yg)("a",{parentName:"li",href:"/docs/develop/testnet"},"here")),(0,n.yg)("li",{parentName:"ul"},"Before experimenting locally, try the code snippets on the ",(0,n.yg)("a",{parentName:"li",href:"https://play.subsocial.network"},"Playground")),(0,n.yg)("li",{parentName:"ul"},"Go through ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dappforce/subsocial-bounties"},"bounties")," repository, to get some project interesting project ideas"),(0,n.yg)("li",{parentName:"ul"},"Facing issues? Report them in our ",(0,n.yg)("a",{parentName:"li",href:"https://discord.gg/w2Rqy2M"},"Discord")," or ",(0,n.yg)("a",{parentName:"li",href:"https://t.me/+ZzvLu0ZfkQwxNGQy"},"Telegram")," channels")),(0,n.yg)("h3",{id:"other-helpful-resources"},"Other helpful resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Starter GitHub Repository: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/dappforce/subsocial-starter"},"https://github.com/dappforce/subsocial-starter")),(0,n.yg)("li",{parentName:"ul"},"Quick Reference Guide: ",(0,n.yg)("a",{parentName:"li",href:"https://docs.subsocial.network/docs/develop/sdk-cheatsheet"},"https://docs.subsocial.network/docs/develop/sdk-cheatsheet")),(0,n.yg)("li",{parentName:"ul"},"Subsocial Playground: ",(0,n.yg)("a",{parentName:"li",href:"https://play.subsocial.network"},"https://play.subsocial.network")),(0,n.yg)("li",{parentName:"ul"},"Subsocial Docs: ",(0,n.yg)("a",{parentName:"li",href:"https://docs.subsocial.network/docs/develop"},"https://docs.subsocial.network/docs/develop"))))}g.isMDXComponent=!0},8988:(e,t,a)=>{a.d(t,{c:()=>r});const r=a.p+"assets/images/subsocial-starter-00a97c01d59dcb4d10950610af3a4ba1.png"}}]);