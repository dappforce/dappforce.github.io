"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[4006],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(3117),o=(r(7294),r(3905));const a={id:"storage",title:"Storage",description:"Content Storage",displayed_sidebar:"developSidebar"},i=void 0,s={unversionedId:"develop/concepts/storage",id:"develop/concepts/storage",title:"Storage",description:"Content Storage",source:"@site/docs/develop/concepts/Storage.md",sourceDirName:"develop/concepts",slug:"/develop/concepts/storage",permalink:"/docs/develop/concepts/storage",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/concepts/Storage.md",tags:[],version:"current",frontMatter:{id:"storage",title:"Storage",description:"Content Storage",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Usernames",permalink:"/docs/develop/concepts/usernames"},next:{title:"Entity Relations",permalink:"/docs/develop/concepts/entity-relations"}},l={},c=[{value:"Data stored on IPFS",id:"data-stored-on-ipfs",level:2},{value:"Flexibility in IPFS service selection",id:"flexibility-in-ipfs-service-selection",level:2},{value:"Configuration",id:"configuration",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Subsocial leverages the ",(0,o.kt)("strong",{parentName:"p"},"CRUST IPFS")," network as its default storage solution, which is a payment layer built on top of the IPFS network. By using CRUST IPFS, content uploaded to the network can be stored securely for extended periods, ensuring its availability and longevity with minimal costs."),(0,o.kt)("h2",{id:"data-stored-on-ipfs"},"Data stored on IPFS"),(0,o.kt)("p",null,"Subsocial stores various types of data on IPFS, including user-generated content such as posts, images, videos, and other media files. The decentralized nature of IPFS ensures that these files are distributed across the network, making them resilient to censorship and providing redundancy for data durability."),(0,o.kt)("h2",{id:"flexibility-in-ipfs-service-selection"},"Flexibility in IPFS service selection"),(0,o.kt)("p",null,"While Subsocial integrates CRUST IPFS as the default storage solution, it also allows developers to configure other IPFS services within the SDK when necessary. "),(0,o.kt)("p",null,"You have the freedom to choose alternative IPFS services such as ",(0,o.kt)("a",{parentName:"p",href:"https://filebase.com"},"Filebase"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.pinata.cloud/"},"Pinata"),", or any other compatible provider. This flexibility empowers developers and users to customize their storage options based on their specific needs and preferences."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"To configure the URL of the IPFS node in the SDK, modify the network config object. "),(0,o.kt)("p",null,"Specifically, update the ",(0,o.kt)("strong",{parentName:"p"},"ipfsNodeUrl")," property to the desired IPFS service URL. "),(0,o.kt)("p",null,"Here are some examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default configuration using Subsocial's hosted CRUST IPFS:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'  const config = {\n    substrateNodeUrl: "wss://para.f3joule.space",\n    ipfsNodeUrl: "https://ipfs.subsocial.network",\n  };\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the Filebase service (read about the details in their ",(0,o.kt)("a",{parentName:"li",href:"https://docs.filebase.com/"},"docs"),").")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'  const config = {\n    substrateNodeUrl: "wss://para.f3joule.space",\n    ipfsNodeUrl: "https://ipfs.filebase.com",\n  };\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the Pinata service (read about the details in their ",(0,o.kt)("a",{parentName:"li",href:"https://docs.pinata.cloud/sdks"},"docs"),").")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'  const config = {\n    substrateNodeUrl: "wss://para.f3joule.space",\n    ipfsNodeUrl: "https://api.pinata.cloud",\n  };\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the Infura Service:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'  const config = {\n    substrateNodeUrl: "wss://para.f3joule.space",\n    ipfsNodeUrl: "https://ipfs.infura.io",\n  };\n')),(0,o.kt)("p",null,"Therefore, you can use any IPFS service of your choice with the Subsocial JS SDK, and it will work like a charm."))}u.isMDXComponent=!0}}]);