"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[2250],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=l(a),m=s,k=u["".concat(p,".").concat(m)]||u[m]||i[m]||o;return a?n.createElement(k,c(c({ref:t},d),{},{components:a})):n.createElement(k,c({ref:t},d))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,c=new Array(o);c[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:s,c[1]=r;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},816:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>i,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=a(3117),s=(a(7294),a(3905));const o={id:"fetch-spaces",title:"Fetch Spaces",displayed_sidebar:"developSidebar"},c=void 0,r={unversionedId:"develop/how-to-guides/spaces/fetch-spaces",id:"develop/how-to-guides/spaces/fetch-spaces",title:"Fetch Spaces",description:"This section covers how to fetch spaces from the Subsocial blockchain.",source:"@site/docs/develop/how-to-guides/spaces/FetchSpaces.md",sourceDirName:"develop/how-to-guides/spaces",slug:"/develop/how-to-guides/spaces/fetch-spaces",permalink:"/docs/develop/how-to-guides/spaces/fetch-spaces",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/spaces/FetchSpaces.md",tags:[],version:"current",frontMatter:{id:"fetch-spaces",title:"Fetch Spaces",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Create And Update Profiles",permalink:"/docs/develop/how-to-guides/profiles/create-profiles"},next:{title:"Create And Update Spaces",permalink:"/docs/develop/how-to-guides/spaces/create-spaces"}},p={},l=[{value:"Find and load single space",id:"find-and-load-single-space",level:2},{value:"Find and load an array of spaces",id:"find-and-load-an-array-of-spaces",level:2},{value:"findPublicSpaces",id:"findpublicspaces",level:3},{value:"findUnlistedSpaces",id:"findunlistedspaces",level:3},{value:"Find and load structs and contents separately",id:"find-and-load-structs-and-contents-separately",level:2},{value:"Get structs",id:"get-structs",level:3},{value:"Find and load space IDs by owner",id:"find-and-load-space-ids-by-owner",level:2},{value:"Find and load space IDs followed by account",id:"find-and-load-space-ids-followed-by-account",level:2}],d={toc:l};function i(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"This section covers how to fetch spaces from the Subsocial blockchain.")),(0,s.kt)("h2",{id:"find-and-load-single-space"},"Find and load single space"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"api.findSpace(query: FindSpaceQuery): Promise<SpaceData | undefined>\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"api.findSpace({ id: '1' })\n")),(0,s.kt)("p",null,"Output: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1",\n  "struct": {\n    "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n    "createdAtBlock": 0,\n    "createdAtTime": 0,\n    "isUpdated": true,\n    "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n    "updatedAtBlock": 1976464,\n    "updatedAtTime": 1608780324000,\n    "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",\n    "id": "1",\n    "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n    "hidden": false,\n    "handle": "subsocial",\n    "postsCount": 88,\n    "hiddenPostsCount": 7,\n    "visiblePostsCount": 81,\n    "followersCount": 2200,\n    "score": 65716\n  },\n  "content": {\n    "about": "Subsocial is an open protocol for decentralized social networks and marketplaces. It\'s built with Substrate and IPFS. [Learn more](https://subsocial.network/)",\n    "handle": "subsocial",\n    "image": "Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe",\n    "links": [\n      "https://subsocial.network",\n      "https://twitter.com/SubsocialChain",\n      "https://medium.com/dappforce",\n      "https://t.me/Subsocial",\n      "https://github.com/dappforce",\n      "https://www.youtube.com/channel/UC1xCFynfwMrjEtFdMf8nXgQ"\n    ],\n    "name": "Subsocial",\n    "tags": [\n      "subsocial",\n      "polkadot",\n      "substrate",\n      "sofi",\n      "chain",\n      "ipfs"\n    ],\n    "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It\'s built with Substrate and IPFS. Learn more",\n    "isShowMore": false\n  }\n}\n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findspacequery"},"FindSpaceQuery"),": ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstruct"},(0,s.kt)("em",{parentName:"a"},"FindStruct"))," < ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},(0,s.kt)("em",{parentName:"a"},"AnySpaceId"))," >")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},"SpaceData"),": ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},(0,s.kt)("em",{parentName:"a"},"CommonData"))," < ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html"},(0,s.kt)("em",{parentName:"a"},"Space")),", ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent"},(0,s.kt)("em",{parentName:"a"},"SpaceContent"))," >")),(0,s.kt)("h2",{id:"find-and-load-an-array-of-spaces"},"Find and load an array of spaces"),(0,s.kt)("h3",{id:"findpublicspaces"},"findPublicSpaces"),(0,s.kt)("p",null,"Load an array of information about public spaces from the Subsocial blockchain and IPFS by a given array of space ",(0,s.kt)("inlineCode",{parentName:"p"},"ids"),"."),(0,s.kt)("p",null,"A space is considered public if it meets these conditions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"hidden")," field on its blockchain structure is ",(0,s.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,s.kt)("li",{parentName:"ul"},"And there is a corresponding JSON file that represents the space's content on IPFS.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"api.findPublicSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"api.findPublicSpaces(['1'])\n")),(0,s.kt)("h3",{id:"findunlistedspaces"},"findUnlistedSpaces"),(0,s.kt)("p",null,"Find and load an array of information about unlisted spaces from the Subsocial blockchain and IPFS by a given array of space ",(0,s.kt)("inlineCode",{parentName:"p"},"ids"),"."),(0,s.kt)("p",null,"A space is considered unlisted if it meets either of these conditions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"hidden")," field on it's blockchain structure is ",(0,s.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,s.kt)("li",{parentName:"ul"},"Or there is no corresponding JSON file that represents the space's content on IPFS.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"api.findUnlistedSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"api.findUnlistedSpaces(['1'])\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findspacesquery"},"FindSpacesQuery"),": ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstructs"},(0,s.kt)("em",{parentName:"a"},"FindStructs"))," < ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},(0,s.kt)("em",{parentName:"a"},"AnySpaceId"))," >"),(0,s.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},"SpaceData"),": ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},(0,s.kt)("em",{parentName:"a"},"CommonData"))," < ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html"},(0,s.kt)("em",{parentName:"a"},"Space")),", ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent"},(0,s.kt)("em",{parentName:"a"},"SpaceContent"))," >"),(0,s.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},"AnySpaceId"),": ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},(0,s.kt)("em",{parentName:"a"},"SpaceId"))," | ",(0,s.kt)("em",{parentName:"p"},"BN"),"  ")),(0,s.kt)("h2",{id:"find-and-load-structs-and-contents-separately"},"Find and load structs and contents separately"),(0,s.kt)("h3",{id:"get-structs"},"Get structs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"api.findSpaceStructs(ids: AnyId[]): Promise<SpaceStruct[]>\napi.findSpaceStruct(id: AnyId): Promise<SpaceStruct | undefined>\n")),(0,s.kt)("p",null,"Example: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"api.findSpaceStruct('1')\n")),(0,s.kt)("p",null,"Output: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "createdAtBlock": 0,\n  "createdAtTime": 0,\n  "isUpdated": true,\n  "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "updatedAtBlock": 1976464,\n  "updatedAtTime": 1608780324000,\n  "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",\n  "id": "1",\n  "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "hidden": false,\n  "handle": "subsocial",\n  "postsCount": 88,\n  "hiddenPostsCount": 7,\n  "visiblePostsCount": 81,\n  "followersCount": 2200,\n  "score": 65716\n}\n')),(0,s.kt)("h2",{id:"find-and-load-space-ids-by-owner"},"Find and load space IDs by owner"),(0,s.kt)("p",null,"Get the IDs of all spaces created by a certain profile."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"api.blockchain.spaceIdsByOwner(id: AnyAccountId): Promise<SpaceId[]>\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.spaceIdsByOwner('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')\n")),(0,s.kt)("h2",{id:"find-and-load-space-ids-followed-by-account"},"Find and load space IDs followed by account"),(0,s.kt)("p",null,"Find IDs of all spaces that a profile is following."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"api.blockchain.spaceIdsFollowedByAccount(id: AnyAccountId): Promise<SpaceId[]>\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.spaceIdsFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid"},"AnyAccountId"),": ",(0,s.kt)("em",{parentName:"p"},"AccountId")," | ",(0,s.kt)("em",{parentName:"p"},"string"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\ud83c\udd78 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},"SpaceId"))),(0,s.kt)("p",null,"There are more methods available inside ",(0,s.kt)("inlineCode",{parentName:"p"},"api.blockchain")," for fetching spaceIds like getSpaceIdsWithRolesByAccount, getSpacePermissionsByAccount, etc."))}i.isMDXComponent=!0}}]);