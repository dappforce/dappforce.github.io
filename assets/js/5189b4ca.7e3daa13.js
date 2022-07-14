(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{159:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),i=l(a),u=n,m=i["".concat(s,".").concat(u)]||i[u]||d[u]||o;return a?r.a.createElement(m,c(c({ref:t},b),{},{components:a})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var b=2;b<o;b++)s[b]=a[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(159)),s={id:"create-posts",title:"Create and update Posts",displayed_sidebar:"developSidebar"},c={unversionedId:"develop/how-to-guides/posts/create-posts",id:"develop/how-to-guides/posts/create-posts",isDocsHomePage:!1,title:"Create and update Posts",description:"This section covers how to create and update posts on the Subsocial blockchain.",source:"@site/docs/develop/how-to-guides/posts/CreatePosts.md",slug:"/develop/how-to-guides/posts/create-posts",permalink:"/docs/develop/how-to-guides/posts/create-posts",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/posts/CreatePosts.md",version:"current",sidebar:"developSidebar",previous:{title:"Fetch Posts",permalink:"/docs/develop/how-to-guides/posts/fetch-posts"},next:{title:"Fetch Comments",permalink:"/docs/develop/how-to-guides/comments/fetch-comments"}},p=[{value:"Create A Post",id:"create-a-post",children:[{value:"A Regular Post",id:"a-regular-post",children:[]},{value:"A Shared Post",id:"a-shared-post",children:[]}]},{value:"Update A Post",id:"update-a-post",children:[]}],b={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"This section covers how to create and update posts on the Subsocial blockchain.")),Object(o.b)("h2",{id:"create-a-post"},"Create A Post"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"substrateApi.tx.posts.createPost(spaceIdOpt, extension, content)\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Params"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"spaceIdOpt")),Object(o.b)("td",{parentName:"tr",align:null},"The space where a post will be published.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"extension")),Object(o.b)("td",{parentName:"tr",align:null},"A kind of post. It can be a regular post, a shared post or a comment.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"content")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html"},"IpfsContent"),' is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}.')))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#postextensionenum"},"PostExtensionEnum"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/classes/regularpost.html"},Object(o.b)("em",{parentName:"a"},"RegularPost"))," | ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.comment.html"},Object(o.b)("em",{parentName:"a"},"Comment"))," | ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/classes/sharedpost.html"},Object(o.b)("em",{parentName:"a"},"SharedPost")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples:")),Object(o.b)("h3",{id:"a-regular-post"},"A Regular Post"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/types/substrate/classes\"\n\n...\nconst cid = await ipfs.saveContent({\n  title: \"What is Subsocial?\",\n  image: \"QmcWWpR176oFao49jrLHUoH3R9MCziE5d77fdD8qdoiinx\",\n  tags: [ 'Hello world', 'FAQ' ],\n  body: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS.'\n})\n\nconst tx = substrateApi.tx.posts.createPost('1', { RegularPost: null}, IpfsContent(cid))\n\n...\n")),Object(o.b)("h3",{id:"a-shared-post"},"A Shared Post"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/types/substrate/classes\"\n\n...\nconst cid = await ipfs.saveContent({\n  body: 'Keep up the good work!'\n})\n\nconst tx = substrateApi.tx.posts.createPost('1', { SharedPost: '1'}, IpfsContent(cid))\n...\n}\n")),Object(o.b)("h2",{id:"update-a-post"},"Update A Post"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"substrateApi.tx.posts.updatePost(postId: AnyPostId, update: PostUpdateType)\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Params"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"postId")),Object(o.b)("td",{parentName:"tr",align:null},"The ID of the current space.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"update")),Object(o.b)("td",{parentName:"tr",align:null},"The fields available to be updated.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Update properties")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Properties"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"spaceId?")),Object(o.b)("td",{parentName:"tr",align:null},"If a new spaceId is provided, it will move this post to the new space.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"content?")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html"},"IpfsContent"),' is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"hidden?")),Object(o.b)("td",{parentName:"tr",align:null},"boolean, if post is hidden from other users.")))),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import {\n  IpfsContent, \n  OptionBool,\n  PostUpdate\n} from \"@subsocial/types/substrate/classes\"\n\n...\nconst cid = await ipfs.saveContent({\n  title: \"What is Subsocial?\",\n  image: \"QmcWWpR176oFao49jrLHUoH3R9MCziE5d77fdD8qdoiinx\",\n  tags: ['Hello world', 'FAQ', 'Subsoical'], //updated field\n  body: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS.'\n})\n\nconst update = new PostUpdate({\n  content: IpfsContent(cid),\n  hidden: OptionBool(true),\n})\n\nconst tx = substrateApi.tx.spaces.posts.updatePost('1', update)\n...\n")))}l.isMDXComponent=!0}}]);