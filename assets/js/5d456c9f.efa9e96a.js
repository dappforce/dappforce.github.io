(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(163)),i={id:"content-storage",title:"Content Storage",displayed_sidebar:"homeSidebar"},c={unversionedId:"basics/lightpaper/architecture/content-storage",id:"basics/lightpaper/architecture/content-storage",isDocsHomePage:!1,title:"Content Storage",description:"Subsocial uses the InterPlanetary File System (IPFS) for storage.",source:"@site/docs/basics/lightpaper/architecture/ContentStorage.md",slug:"/basics/lightpaper/architecture/content-storage",permalink:"/docs/basics/lightpaper/architecture/content-storage",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/basics/lightpaper/architecture/ContentStorage.md",version:"current",sidebar:"homeSidebar",previous:{title:"Posts and Spaces",permalink:"/docs/basics/lightpaper/architecture/posts-and-spaces"},next:{title:"Identity",permalink:"/docs/basics/lightpaper/architecture/identity"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Subsocial uses the ",Object(a.b)("a",{parentName:"p",href:"https://ipfs.io/"},"InterPlanetary File System")," (IPFS) for storage.\nWhen a file is uploaded to IPFS, it is hashed to create a CID, which can be thought of as directions to find that file.\nThe only thing that is put onto the Subsocial blockchain is the CID of content. Applications can then use the CID to load the content from IPFS."),Object(a.b)("p",null,"The problem with normal IPFS is that random strangers on the internet are not going to want to host users' content.\nMultiple blockchain projects have been created that add a payment layer on top of IPFS, solving this problem.\nContent uploaded to these networks can be stored for decades with just a tiny payment."),Object(a.b)("p",null,"However, these projects have tokens of their own that are requires to pay the network to store a piece of content.\nThis means that users would need to acquire another token to pay the storage fee, and this is very inconvenient."),Object(a.b)("p",null,"The solution to this will be covered in the Applications section.\nIn short, Subsocial will use one of these payment layer solutions to manage content storage."))}l.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||h[d]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);