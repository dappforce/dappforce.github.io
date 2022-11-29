"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[6169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(3117),n=(r(7294),r(3905));const s={id:"posts-and-spaces",title:"Posts and Spaces",displayed_sidebar:"homeSidebar"},o=void 0,i={unversionedId:"basics/lightpaper/architecture/posts-and-spaces",id:"basics/lightpaper/architecture/posts-and-spaces",title:"Posts and Spaces",description:"The building blocks of Subsocial are Spaces, posts, comments, upvotes, downvotes, and follows. They",source:"@site/docs/basics/lightpaper/architecture/PostsAndSpaces.md",sourceDirName:"basics/lightpaper/architecture",slug:"/basics/lightpaper/architecture/posts-and-spaces",permalink:"/docs/basics/lightpaper/architecture/posts-and-spaces",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/basics/lightpaper/architecture/PostsAndSpaces.md",tags:[],version:"current",frontMatter:{id:"posts-and-spaces",title:"Posts and Spaces",displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar",previous:{title:"Architecture",permalink:"/docs/basics/lightpaper/architecture/"},next:{title:"Content Storage",permalink:"/docs/basics/lightpaper/architecture/content-storage"}},l={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The building blocks of Subsocial are ",(0,n.kt)("strong",{parentName:"p"},"Spaces"),", ",(0,n.kt)("strong",{parentName:"p"},"posts"),", ",(0,n.kt)("strong",{parentName:"p"},"comments"),", ",(0,n.kt)("strong",{parentName:"p"},"upvotes"),", ",(0,n.kt)("strong",{parentName:"p"},"downvotes"),", and ",(0,n.kt)("strong",{parentName:"p"},"follows"),". They\nwill be familiar to everyone who has used any social media platform."),(0,n.kt)("p",null,"The best way to understand them is through comparison to familiar platforms:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Spaces")," are similar to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Blogs on Blogger,"),(0,n.kt)("li",{parentName:"ul"},"Publications on Medium,"),(0,n.kt)("li",{parentName:"ul"},"Accounts, pages, or groups on Facebook,"),(0,n.kt)("li",{parentName:"ul"},"Accounts on Twitter and Instagram,"),(0,n.kt)("li",{parentName:"ul"},"Channels on YouTube,"),(0,n.kt)("li",{parentName:"ul"},"Servers on Discord,"),(0,n.kt)("li",{parentName:"ul"},"Forums on Discourse,"),(0,n.kt)("li",{parentName:"ul"},"Subreddits on Reddit.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posts")," are similar to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Posts on Facebook, Instagram, and Reddit,"),(0,n.kt)("li",{parentName:"ul"},"Articles on Medium,"),(0,n.kt)("li",{parentName:"ul"},"Tweets on Twitter"),(0,n.kt)("li",{parentName:"ul"},"Videos on Youtube.")),(0,n.kt)("p",null,"How about something more advanced? How can we recreate popular platforms for Web3\nusing Subsocial?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Airbnb")," \u2013 apartment listings are spaces, while reviews are posts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Quora")," \u2013 a question is a post, answers are comments/replies."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Stack Overflow")," \u2013",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Answers can be rewarded, e.g. by the question asker."),(0,n.kt)("li",{parentName:"ul"},"The distribution of payouts can also be split between what the question asker\nand what the community finds to be the best answer."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Patreon/OnlyFans")," \u2013 subscribing users can be granted access to a private space or private posts.")),(0,n.kt)("p",null,"All posts and spaces are associated with public key pairs (accounts). This means all content\ncan be correctly attributed to the post's author and/or owner. The cryptography used is the same\nas found in Polkadot and Kusama. Subsocial supports multiple web browser extensions that allow for\neasy key management in the browser, or, in the future, an offline vault via Parity Signer."))}u.isMDXComponent=!0}}]);