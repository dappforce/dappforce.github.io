"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[6780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),b=o,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(3117),o=(n(7294),n(3905));const a={id:"installation",title:"Installation",description:"A quick guide for installing Subsocial's JavaScript SDK that allows developers to easily build web3 social apps.",keywords:["Introduction","Web3 Social","Blockchain","Developers","Subsocial"],displayed_sidebar:"developSidebar"},l=void 0,i={unversionedId:"develop/sdk/installation",id:"develop/sdk/installation",title:"Installation",description:"A quick guide for installing Subsocial's JavaScript SDK that allows developers to easily build web3 social apps.",source:"@site/docs/develop/sdk/Installation.md",sourceDirName:"develop/sdk",slug:"/develop/sdk/installation",permalink:"/docs/develop/sdk/installation",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/Installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",description:"A quick guide for installing Subsocial's JavaScript SDK that allows developers to easily build web3 social apps.",keywords:["Introduction","Web3 Social","Blockchain","Developers","Subsocial"],displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Notifications",permalink:"/docs/develop/concepts/synthetic/notifications"},next:{title:"API Types",permalink:"/docs/develop/sdk/apiTypes"}},s={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Installing The Subsocial JS SDK")),(0,o.kt)("p",null,"To install the SDK, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @subsocial/api\n")),(0,o.kt)("p",null,"Also, you can add additonal methods for utility using the utils package. Install it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @subsocial/utils\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u2757 In order to correctly build the application, Yarn needs to be used. If you try to use NPM, you may face issues with some NPM packages.")))}d.isMDXComponent=!0}}]);