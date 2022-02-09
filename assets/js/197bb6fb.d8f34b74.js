(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{145:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),m=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=m(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=m(n),u=r,d=l["".concat(c,".").concat(u)]||l[u]||b[u]||o;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(145)),c={id:"creating-comments",title:"Creating"},s={unversionedId:"sdk/quick-start/comments/creating-comments",id:"sdk/quick-start/comments/creating-comments",isDocsHomePage:!1,title:"Creating",description:"Post methods are used for comments.",source:"@site/docs/sdk/quick-start/comments/CreatingComments.md",slug:"/sdk/quick-start/comments/creating-comments",permalink:"/docs/sdk/quick-start/comments/creating-comments",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/sdk/quick-start/comments/CreatingComments.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting Comments",permalink:"/docs/sdk/quick-start/comments/getting-comments"},next:{title:"What is Reaction?",permalink:"/docs/sdk/quick-start/reactions/overview"}},i=[{value:"Create comment",id:"create-comment",children:[{value:"Create a comment below a post",id:"create-a-comment-below-a-post",children:[]},{value:"Create a reply to a comment",id:"create-a-reply-to-a-comment",children:[]}]},{value:"Update Comment",id:"update-comment",children:[]}],p={toc:i};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/sdk/quick-start/posts/creating-posts"},"Post methods")," are used for comments."),Object(o.b)("h2",{id:"create-comment"},"Create comment"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { getSubstrateApi } from '@subsocial/api'\nimport { IpfsContent } from '@subsocial/types/substrate/classes'\n\nconst substrateApi = getSubstrateApi({ endpoint: substrateUrl })\n\nsubstrateApi.tx.posts.createPost(spaceIdOpt, { \u0421omment }, IpfsContent(\"CID of your content\"))\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd78 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.comment.html"},"Comment")," ")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Properties"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"parentId?")),Object(o.b)("td",{parentName:"tr",align:null},"id of the message that was replied to.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"rootPostId?")),Object(o.b)("td",{parentName:"tr",align:null},"commented post id.")))),Object(o.b)("h3",{id:"create-a-comment-below-a-post"},"Create a comment below a post"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/types/substrate/classes\"\n\n...\nconst cid = await ipfs.saveContent({\n  body: 'Keep up the good work!'\n})\n\nconst tx = substrateApi.tx.posts.createPost('1', { Comment: { parentId: null, rootPostId: '1'}}, IpfsContent(cid))\n\n...\n")),Object(o.b)("h3",{id:"create-a-reply-to-a-comment"},"Create a reply to a comment"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/types/substrate/classes\"\n\n...\nconst cid = await ipfs.saveContent({\n  body: 'Agree' //replied\n})\n\nconst tx = substrateApi.tx.posts.createPost('1', { Comment: { parentId: '2', rootPostId: '1'}}, IpfsContent(cid))\n...\n")),Object(o.b)("h2",{id:"update-comment"},"Update Comment"),Object(o.b)("p",null,"For updating comments use ",Object(o.b)("a",{parentName:"p",href:"/docs/sdk/quick-start/posts/creating-posts"},"post methods")))}m.isMDXComponent=!0}}]);