"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[5464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||s;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(3117),o=(n(7294),n(3905));const s={id:"postsAndComments",title:"Posts and Comments",displayed_sidebar:"developSidebar"},a=void 0,i={unversionedId:"develop/getting-started/blockchain-structure/postsAndComments",id:"develop/getting-started/blockchain-structure/postsAndComments",title:"Posts and Comments",description:"Posts and Comments are the building blocks that allow you to store content on Subsocial(whether that is text, audio, an image, or a video).",source:"@site/docs/develop/getting-started/blockchain-structure/PostsAndComments.md",sourceDirName:"develop/getting-started/blockchain-structure",slug:"/develop/getting-started/blockchain-structure/postsAndComments",permalink:"/docs/develop/getting-started/blockchain-structure/postsAndComments",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/getting-started/blockchain-structure/PostsAndComments.md",tags:[],version:"current",frontMatter:{id:"postsAndComments",title:"Posts and Comments",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Profiles",permalink:"/docs/develop/getting-started/blockchain-structure/profiles"},next:{title:"Reactions",permalink:"/docs/develop/getting-started/blockchain-structure/reactions"}},c={},l=[],d={toc:l};function p(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Posts and Comments are the building blocks that allow you to store content on Subsocial(whether that is text, audio, an image, or a video)."),(0,o.kt)("p",null,"Posts live inside spaces and are the way users can interact and share content with each other. Posts can be commented and reacted, have upvotes and downvotes, and be shared across different Spaces."),(0,o.kt)("p",null,"Comments are just an extension of Posts and serve to add content under a specific post. These inherit all Posts properties, enabling reactions and so on. Basically comments are just posts that have one or more parents.\nThere are different extensions for Posts: Shared Posts, Regular Posts and Comments."),(0,o.kt)("p",null,"Here you can have an overall vision of what Posts allow:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"PostsAndComments-UML",src:n(5202).Z,width:"3433",height:"3667"})))}p.isMDXComponent=!0},5202:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/postsAndComments-83baf51a5ccfec0053685346dc21f0d6.png"}}]);