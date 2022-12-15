"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[1544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=i(n),u=r,b=d["".concat(c,".").concat(u)]||d[u]||l[u]||a;return n?o.createElement(b,s(s({ref:t},m),{},{components:n})):o.createElement(b,s({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var i=2;i<a;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var o=n(3117),r=(n(7294),n(3905));const a={id:"create-comments",title:"Create And Update Comments",displayed_sidebar:"developSidebar"},s=void 0,p={unversionedId:"develop/how-to-guides/comments/create-comments",id:"develop/how-to-guides/comments/create-comments",title:"Create And Update Comments",description:"This section covers how to create and update comments on the Subsocial blockchain.",source:"@site/docs/develop/how-to-guides/comments/CreateComments.md",sourceDirName:"develop/how-to-guides/comments",slug:"/develop/how-to-guides/comments/create-comments",permalink:"/docs/develop/how-to-guides/comments/create-comments",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/comments/CreateComments.md",tags:[],version:"current",frontMatter:{id:"create-comments",title:"Create And Update Comments",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Fetch Comments",permalink:"/docs/develop/how-to-guides/comments/fetch-comments"},next:{title:"Fetch Reactions",permalink:"/docs/develop/how-to-guides/reactions/fetch-reactions"}},c={},i=[{value:"Create a comment",id:"create-a-comment",level:2},{value:"Create a comment below a post",id:"create-a-comment-below-a-post",level:3},{value:"Create a reply to a comment",id:"create-a-reply-to-a-comment",level:3},{value:"Update A Comment",id:"update-a-comment",level:2}],m={toc:i};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This section covers how to create and update comments on the Subsocial blockchain.")),(0,r.kt)("h2",{id:"create-a-comment"},"Create a comment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from '@subsocial/types/substrate/classes'\n\nconst substrateApi = await api.substrateApi\n\nsubstrateApi.tx.posts.createPost(spaceIdOpt, { \u0421omment }, IpfsContent(\"CID of your content\"))\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83c\udd78 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.comment.html"},"Comment")," ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"parentId?")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the post or comment that was replied to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"rootPostId?")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the original post.")))),(0,r.kt)("p",null,"Comments directly under a post will have the same parentId and rootPostId."),(0,r.kt)("h3",{id:"create-a-comment-below-a-post"},"Create a comment below a post"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/api/substrate/wrappers\"\n\n...\nconst cid = await api.ipfs.saveContent({\n  body: 'Keep up the good work!'\n})\n\nconst substrateApi = await api.substrateApi\n\nconst tx = substrateApi.tx.posts.createPost('1', { Comment: { parentId: null, rootPostId: '1'}}, IpfsContent(cid))\n\n...\n")),(0,r.kt)("h3",{id:"create-a-reply-to-a-comment"},"Create a reply to a comment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/api/substrate/wrappers\"\n\n...\nconst cid = await api.ipfs.saveContent({\n  body: 'Agree' //replied\n})\n\nconst substrateApi = await api.substrateApi\n\nconst tx = substrateApi.tx.posts.createPost('1', { Comment: { parentId: '2', rootPostId: '1'}}, IpfsContent(cid))\n...\n")),(0,r.kt)("h2",{id:"update-a-comment"},"Update A Comment"),(0,r.kt)("p",null,"For updating comments use ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/how-to-guides/posts/create-posts"},"post methods"),"."))}l.isMDXComponent=!0}}]);