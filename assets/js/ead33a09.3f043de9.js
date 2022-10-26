(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return i}));var a=n(3),c=n(7),s=(n(0),n(163)),o={id:"fetch-spaces",title:"Fetch Spaces",displayed_sidebar:"developSidebar"},r={unversionedId:"develop/how-to-guides/spaces/fetch-spaces",id:"develop/how-to-guides/spaces/fetch-spaces",isDocsHomePage:!1,title:"Fetch Spaces",description:"This section covers how to fetch spaces from the Subsocial blockchain.",source:"@site/docs/develop/how-to-guides/spaces/FetchSpaces.md",slug:"/develop/how-to-guides/spaces/fetch-spaces",permalink:"/docs/develop/how-to-guides/spaces/fetch-spaces",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/spaces/FetchSpaces.md",version:"current",sidebar:"developSidebar",previous:{title:"Create And Update Profiles",permalink:"/docs/develop/how-to-guides/profiles/create-profiles"},next:{title:"Create And Update Spaces",permalink:"/docs/develop/how-to-guides/spaces/create-spaces"}},p=[{value:"Find and load single space",id:"find-and-load-single-space",children:[]},{value:"Find and load an array of spaces",id:"find-and-load-an-array-of-spaces",children:[{value:"findPublicSpaces",id:"findpublicspaces",children:[]},{value:"findUnlistedSpaces",id:"findunlistedspaces",children:[]}]},{value:"Find and load structs and contents separately",id:"find-and-load-structs-and-contents-separately",children:[{value:"Get structs",id:"get-structs",children:[]}]},{value:"Find and load space IDs by owner",id:"find-and-load-space-ids-by-owner",children:[]},{value:"Find and load space IDs followed by account",id:"find-and-load-space-ids-followed-by-account",children:[]}],d={toc:p};function i(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"This section covers how to fetch spaces from the Subsocial blockchain.")),Object(s.b)("h2",{id:"find-and-load-single-space"},"Find and load single space"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"api.findSpace(query: FindSpaceQuery): Promise<SpaceData | undefined>\n")),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"api.findSpace({ id: '1' })\n")),Object(s.b)("p",null,"Output: "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1",\n  "struct": {\n    "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n    "createdAtBlock": 0,\n    "createdAtTime": 0,\n    "isUpdated": true,\n    "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n    "updatedAtBlock": 1976464,\n    "updatedAtTime": 1608780324000,\n    "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",\n    "id": "1",\n    "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n    "hidden": false,\n    "handle": "subsocial",\n    "postsCount": 88,\n    "hiddenPostsCount": 7,\n    "visiblePostsCount": 81,\n    "followersCount": 2200,\n    "score": 65716\n  },\n  "content": {\n    "about": "Subsocial is an open protocol for decentralized social networks and marketplaces. It\'s built with Substrate and IPFS. [Learn more](https://subsocial.network/)",\n    "handle": "subsocial",\n    "image": "Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe",\n    "links": [\n      "https://subsocial.network",\n      "https://twitter.com/SubsocialChain",\n      "https://medium.com/dappforce",\n      "https://t.me/Subsocial",\n      "https://github.com/dappforce",\n      "https://www.youtube.com/channel/UC1xCFynfwMrjEtFdMf8nXgQ"\n    ],\n    "name": "Subsocial",\n    "tags": [\n      "subsocial",\n      "polkadot",\n      "substrate",\n      "sofi",\n      "chain",\n      "ipfs"\n    ],\n    "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It\'s built with Substrate and IPFS. Learn more",\n    "isShowMore": false\n  }\n}\n')),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findspacequery"},"FindSpaceQuery"),": ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstruct"},Object(s.b)("em",{parentName:"a"},"FindStruct"))," < ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},Object(s.b)("em",{parentName:"a"},"AnySpaceId"))," >")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},"SpaceData"),": ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},Object(s.b)("em",{parentName:"a"},"CommonData"))," < ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html"},Object(s.b)("em",{parentName:"a"},"Space")),", ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent"},Object(s.b)("em",{parentName:"a"},"SpaceContent"))," >")),Object(s.b)("h2",{id:"find-and-load-an-array-of-spaces"},"Find and load an array of spaces"),Object(s.b)("h3",{id:"findpublicspaces"},"findPublicSpaces"),Object(s.b)("p",null,"Load an array of information about public spaces from the Subsocial blockchain and IPFS by a given array of space ",Object(s.b)("inlineCode",{parentName:"p"},"ids"),"."),Object(s.b)("p",null,"A space is considered public if it meets these conditions:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The ",Object(s.b)("inlineCode",{parentName:"li"},"hidden")," field on its blockchain structure is ",Object(s.b)("inlineCode",{parentName:"li"},"false"),"."),Object(s.b)("li",{parentName:"ul"},"And there is a corresponding JSON file that represents the space's content on IPFS.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"api.findPublicSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>\n")),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"api.findPublicSpaces(['1'])\n")),Object(s.b)("h3",{id:"findunlistedspaces"},"findUnlistedSpaces"),Object(s.b)("p",null,"Find and load an array of information about unlisted spaces from the Subsocial blockchain and IPFS by a given array of space ",Object(s.b)("inlineCode",{parentName:"p"},"ids"),"."),Object(s.b)("p",null,"A space is considered unlisted if it meets either of these conditions:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The ",Object(s.b)("inlineCode",{parentName:"li"},"hidden")," field on it's blockchain structure is ",Object(s.b)("inlineCode",{parentName:"li"},"true"),"."),Object(s.b)("li",{parentName:"ul"},"Or there is no corresponding JSON file that represents the space's content on IPFS.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"api.findUnlistedSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>\n")),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"api.findUnlistedSpaces(['1'])\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findspacesquery"},"FindSpacesQuery"),": ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstructs"},Object(s.b)("em",{parentName:"a"},"FindStructs"))," < ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},Object(s.b)("em",{parentName:"a"},"AnySpaceId"))," >"),Object(s.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},"SpaceData"),": ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},Object(s.b)("em",{parentName:"a"},"CommonData"))," < ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html"},Object(s.b)("em",{parentName:"a"},"Space")),", ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent"},Object(s.b)("em",{parentName:"a"},"SpaceContent"))," >"),Object(s.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},"AnySpaceId"),": ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},Object(s.b)("em",{parentName:"a"},"SpaceId"))," | ",Object(s.b)("em",{parentName:"p"},"BN"),"  ")),Object(s.b)("h2",{id:"find-and-load-structs-and-contents-separately"},"Find and load structs and contents separately"),Object(s.b)("h3",{id:"get-structs"},"Get structs"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"api.findSpaceStructs(ids: AnyId[]): Promise<SpaceStruct[]>\napi.findSpaceStruct(id: AnyId): Promise<SpaceStruct | undefined>\n")),Object(s.b)("p",null,"Example: "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"api.findSpaceStruct('1')\n")),Object(s.b)("p",null,"Output: "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "createdAtBlock": 0,\n  "createdAtTime": 0,\n  "isUpdated": true,\n  "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "updatedAtBlock": 1976464,\n  "updatedAtTime": 1608780324000,\n  "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",\n  "id": "1",\n  "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "hidden": false,\n  "handle": "subsocial",\n  "postsCount": 88,\n  "hiddenPostsCount": 7,\n  "visiblePostsCount": 81,\n  "followersCount": 2200,\n  "score": 65716\n}\n')),Object(s.b)("h2",{id:"find-and-load-space-ids-by-owner"},"Find and load space IDs by owner"),Object(s.b)("p",null,"Get the IDs of all spaces created by a certain profile."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"api.blockchain.spaceIdsByOwner(id: AnyAccountId): Promise<SpaceId[]>\n")),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.spaceIdsByOwner('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')\n")),Object(s.b)("h2",{id:"find-and-load-space-ids-followed-by-account"},"Find and load space IDs followed by account"),Object(s.b)("p",null,"Find IDs of all spaces that a profile is following."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"api.blockchain.spaceIdsFollowedByAccount(id: AnyAccountId): Promise<SpaceId[]>\n")),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.spaceIdsFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid"},"AnyAccountId"),": ",Object(s.b)("em",{parentName:"p"},"AccountId")," | ",Object(s.b)("em",{parentName:"p"},"string"))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\ud83c\udd78 ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},"SpaceId"))),Object(s.b)("p",null,"There are more methods available inside ",Object(s.b)("inlineCode",{parentName:"p"},"api.blockchain")," for fetching spaceIds like getSpaceIdsWithRolesByAccount, getSpacePermissionsByAccount, etc."))}i.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var d=c.a.createContext({}),i=function(e){var t=c.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=i(e.components);return c.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=i(n),u=a,m=l["".concat(o,".").concat(u)]||l[u]||b[u]||s;return n?c.a.createElement(m,r(r({ref:t},d),{},{components:n})):c.a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var d=2;d<s;d++)o[d]=n[d];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);