"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[4086],{3905:(e,t,s)=>{s.d(t,{Zo:()=>i,kt:()=>m});var n=s(7294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function d(e,t){if(null==e)return{};var s,n,o=function(e,t){if(null==e)return{};var s,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},i=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var s=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),u=l(s),m=o,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return s?n.createElement(k,r(r({ref:t},i),{},{components:s})):n.createElement(k,r({ref:t},i))}));function m(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=s.length,r=new Array(a);r[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var l=2;l<a;l++)r[l]=s[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,s)}u.displayName="MDXCreateElement"},3382:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=s(3117),o=(s(7294),s(3905));const a={id:"fetch-posts",title:"Fetch Posts",displayed_sidebar:"developSidebar"},r=void 0,d={unversionedId:"develop/how-to-guides/posts/fetch-posts",id:"develop/how-to-guides/posts/fetch-posts",title:"Fetch Posts",description:"This section covers how to fetch posts from the Subsocial blockchain.",source:"@site/docs/develop/how-to-guides/posts/FetchPosts.md",sourceDirName:"develop/how-to-guides/posts",slug:"/develop/how-to-guides/posts/fetch-posts",permalink:"/docs/develop/how-to-guides/posts/fetch-posts",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/posts/FetchPosts.md",tags:[],version:"current",frontMatter:{id:"fetch-posts",title:"Fetch Posts",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Create And Update Spaces",permalink:"/docs/develop/how-to-guides/spaces/create-spaces"},next:{title:"Create and update Posts",permalink:"/docs/develop/how-to-guides/posts/create-posts"}},p={},l=[{value:"Find and load a single post",id:"find-and-load-a-single-post",level:2},{value:"Find and load an array of posts",id:"find-and-load-an-array-of-posts",level:2},{value:"Find and load structs and contents separately",id:"find-and-load-structs-and-contents-separately",level:2},{value:"Get structs",id:"get-structs",level:3},{value:"Find and load post IDs by space ID",id:"find-and-load-post-ids-by-space-id",level:2}],i={toc:l};function c(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This section covers how to fetch posts from the Subsocial blockchain.")),(0,o.kt)("h2",{id:"find-and-load-a-single-post"},"Find and load a single post"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"api.findPost(query: FindPostQuery): Promise<PostData | undefined\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"api.findPost({ id: '1' })\n")),(0,o.kt)("p",null,"Output: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "1",\n    "struct": {\n        "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n        "createdAtBlock": 658170,\n        "createdAtTime": 1600870242000,\n        "isUpdated": false,\n        "contentId": "bafyreidzue2dtxpj6n4x5mktrt7las5wz5diqma47zr25uau743dhe76we",\n        "id": "1",\n        "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n        "hidden": false,\n        "spaceId": "1",\n        "repliesCount": 12,\n        "hiddenRepliesCount": 0,\n        "visibleRepliesCount": 12,\n        "sharesCount": 0,\n        "upvotesCount": 29,\n        "downvotesCount": 0,\n        "score": 835,\n        "isRegularPost": true,\n        "isSharedPost": false,\n        "isComment": false\n    },\n    "content": {\n        "body": "Subsocial is an open protocol for decentralized social networks and marketplaces. It\'s built with [Substrate](https://www.substrate.io/) and [IPFS](https://ipfs.io/).",\n        "image": "QmcWWpR176oFao49jrLHUoH3R9MCziE5d77fdD8qdoiinx",\n        "tags": [\n            "Hello World",\n            "FAQ"\n        ],\n        "title": "What is Subsocial?",\n        "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It\'s built with Substrate and IPFS.",\n        "isShowMore": false\n    }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostquery"},"FindPostQuery"),": ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstruct"},(0,o.kt)("em",{parentName:"a"},"FindStruct"))," < ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},(0,o.kt)("em",{parentName:"a"},"AnyPostId"))," >")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata"},"PostData"),": ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},(0,o.kt)("em",{parentName:"a"},"CommonData"))," < ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.post.html"},(0,o.kt)("em",{parentName:"a"},"Post")),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#postcontent"},(0,o.kt)("em",{parentName:"a"},"PostContent"))," >")),(0,o.kt)("h2",{id:"find-and-load-an-array-of-posts"},"Find and load an array of posts"),(0,o.kt)("p",null,"Find and load an array of information about public posts from the Subsocial blockchain and IPFS by a given array of post ",(0,o.kt)("inlineCode",{parentName:"p"},"ids"),"."),(0,o.kt)("p",null,"A post is considered public if it meets these conditions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"hidden")," field on its blockchain structure is ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},"And there is a corresponding JSON file that represents the post's content on IPFS.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"api.findPublicPosts(ids: AnyId[]): Promise<PostData[]>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostsquery"},"FindPostsQuery"),": ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstructs"},(0,o.kt)("em",{parentName:"a"},"FindStructs"))," < ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},(0,o.kt)("em",{parentName:"a"},"AnyPostId"))," >")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata"},"PostData"),": ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},(0,o.kt)("em",{parentName:"a"},"CommonData"))," < ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.post.html"},(0,o.kt)("em",{parentName:"a"},"Post")),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#postcontent"},(0,o.kt)("em",{parentName:"a"},"PostContent"))," >")),(0,o.kt)("h2",{id:"find-and-load-structs-and-contents-separately"},"Find and load structs and contents separately"),(0,o.kt)("h3",{id:"get-structs"},"Get structs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"api.findPostStructs(ids: AnyId[]): Promise<PostStruct[]>\napi.findPostStruct(id: AnyId): Promise<PostStruct | undefined>\n")),(0,o.kt)("p",null,"Example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"api.findPostStruct('1')\n")),(0,o.kt)("p",null,"Output: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "createdAtBlock": 658170,\n  "createdAtTime": 1600870242000,\n  "isUpdated": false,\n  "contentId": "bafyreidzue2dtxpj6n4x5mktrt7las5wz5diqma47zr25uau743dhe76we",\n  "id": "1",\n  "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "hidden": false,\n  "spaceId": "1",\n  "repliesCount": 12,\n  "hiddenRepliesCount": 0,\n  "visibleRepliesCount": 12,\n  "sharesCount": 0,\n  "upvotesCount": 29,\n  "downvotesCount": 0,\n  "score": 835,\n  "isRegularPost": true,\n  "isSharedPost": false,\n  "isComment": false\n}\n')),(0,o.kt)("h2",{id:"find-and-load-post-ids-by-space-id"},"Find and load post IDs by space ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"api.blockchain.postIdsBySpaceId(id: AnySpaceId): Promise<PostId[]>\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.postIdsBySpaceId('1')\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},"AnySpaceId"),": ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},(0,o.kt)("em",{parentName:"a"},"SpaceId"))," | ",(0,o.kt)("em",{parentName:"p"},"BN"),"  ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83c\udd78 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html"},"PostId"))))}c.isMDXComponent=!0}}]);