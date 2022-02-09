(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(3),s=n(7),c=(n(0),n(145)),o={id:"getting-spaces",title:"Getting Spaces"},r={unversionedId:"sdk/quick-start/spaces/getting-spaces",id:"sdk/quick-start/spaces/getting-spaces",isDocsHomePage:!1,title:"Getting Spaces",description:"Find and load single space",source:"@site/docs/sdk/quick-start/spaces/GettingSpaces.md",slug:"/sdk/quick-start/spaces/getting-spaces",permalink:"/docs/sdk/quick-start/spaces/getting-spaces",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/sdk/quick-start/spaces/GettingSpaces.md",version:"current",sidebar:"someSidebar",previous:{title:"What Is A Space?",permalink:"/docs/sdk/quick-start/spaces/overview"},next:{title:"Creating And Updating",permalink:"/docs/sdk/quick-start/spaces/creating-spaces"}},p=[{value:"Find and load single space",id:"find-and-load-single-space",children:[]},{value:"Find and load an array of spaces",id:"find-and-load-an-array-of-spaces",children:[{value:"findPublicSpaces",id:"findpublicspaces",children:[]},{value:"findUnlistedSpaces",id:"findunlistedspaces",children:[]}]},{value:"Find and load structs and contents separately",id:"find-and-load-structs-and-contents-separately",children:[{value:"Get structs",id:"get-structs",children:[]},{value:"Get contents",id:"get-contents",children:[]}]},{value:"Find and load space ID by handle",id:"find-and-load-space-id-by-handle",children:[]},{value:"Find and load space IDs by owner",id:"find-and-load-space-ids-by-owner",children:[]},{value:"Find and load space IDs followed by account",id:"find-and-load-space-ids-followed-by-account",children:[]}],i={toc:p};function l(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"find-and-load-single-space"},"Find and load single space"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"flatApi.findSpace(query: FindSpaceQuery): Promise<SpaceData | undefined>\n")),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"flatApi.findSpace({ id: '1' })\n")),Object(c.b)("p",null,"Output: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1",\n  "struct": {\n    "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n    "createdAtBlock": 0,\n    "createdAtTime": 0,\n    "isUpdated": true,\n    "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n    "updatedAtBlock": 1976464,\n    "updatedAtTime": 1608780324000,\n    "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",\n    "id": "1",\n    "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n    "hidden": false,\n    "handle": "subsocial",\n    "postsCount": 88,\n    "hiddenPostsCount": 7,\n    "visiblePostsCount": 81,\n    "followersCount": 2200,\n    "score": 65716\n  },\n  "content": {\n    "about": "Subsocial is an open protocol for decentralized social networks and marketplaces. It\'s built with Substrate and IPFS. [Learn more](https://subsocial.network/)",\n    "handle": "subsocial",\n    "image": "Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe",\n    "links": [\n      "https://subsocial.network",\n      "https://twitter.com/SubsocialChain",\n      "https://medium.com/dappforce",\n      "https://t.me/Subsocial",\n      "https://github.com/dappforce",\n      "https://www.youtube.com/channel/UC1xCFynfwMrjEtFdMf8nXgQ"\n    ],\n    "name": "Subsocial",\n    "tags": [\n      "subsocial",\n      "polkadot",\n      "substrate",\n      "sofi",\n      "chain",\n      "ipfs"\n    ],\n    "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It\'s built with Substrate and IPFS. Learn more",\n    "isShowMore": false\n  }\n}\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findspacequery"},"FindSpaceQuery"),": ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstruct"},Object(c.b)("em",{parentName:"a"},"FindStruct"))," < ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},Object(c.b)("em",{parentName:"a"},"AnySpaceId"))," >")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},"SpaceData"),": ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},Object(c.b)("em",{parentName:"a"},"CommonData"))," < ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html"},Object(c.b)("em",{parentName:"a"},"Space")),", ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent"},Object(c.b)("em",{parentName:"a"},"SpaceContent"))," >")),Object(c.b)("h2",{id:"find-and-load-an-array-of-spaces"},"Find and load an array of spaces"),Object(c.b)("h3",{id:"findpublicspaces"},"findPublicSpaces"),Object(c.b)("p",null,"Load an array of information about public spaces from the Subsocial blockchain and IPFS by a given array of space ",Object(c.b)("inlineCode",{parentName:"p"},"ids"),"."),Object(c.b)("p",null,"A space is considered public if it meets these conditions:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The ",Object(c.b)("inlineCode",{parentName:"li"},"hidden")," field on its blockchain structure is ",Object(c.b)("inlineCode",{parentName:"li"},"false"),"."),Object(c.b)("li",{parentName:"ul"},"And there is a corresponding JSON file that represents the space's content on IPFS.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"flatApi.findPublicSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>\n")),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"flatApi.findPublicSpaces(['1'])\n")),Object(c.b)("h3",{id:"findunlistedspaces"},"findUnlistedSpaces"),Object(c.b)("p",null,"Find and load an array of information about unlisted spaces from the Subsocial blockchain and IPFS by a given array of space ",Object(c.b)("inlineCode",{parentName:"p"},"ids"),"."),Object(c.b)("p",null,"A space is considered unlisted if it meets either of these conditions:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The ",Object(c.b)("inlineCode",{parentName:"li"},"hidden")," field on it's blockchain structure is ",Object(c.b)("inlineCode",{parentName:"li"},"true"),"."),Object(c.b)("li",{parentName:"ul"},"Or there is no corresponding JSON file that represents the space's content on IPFS.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"flatApi.findUnlistedSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>\n")),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"flatApi.findUnlistedSpaces(['1'])\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findspacesquery"},"FindSpacesQuery"),": ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstructs"},Object(c.b)("em",{parentName:"a"},"FindStructs"))," < ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},Object(c.b)("em",{parentName:"a"},"AnySpaceId"))," >"),Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},"SpaceData"),": ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},Object(c.b)("em",{parentName:"a"},"CommonData"))," < ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html"},Object(c.b)("em",{parentName:"a"},"Space")),", ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent"},Object(c.b)("em",{parentName:"a"},"SpaceContent"))," >"),Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},"AnySpaceId"),": ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},Object(c.b)("em",{parentName:"a"},"SpaceId"))," | ",Object(c.b)("em",{parentName:"p"},"BN"),"  ")),Object(c.b)("h2",{id:"find-and-load-structs-and-contents-separately"},"Find and load structs and contents separately"),Object(c.b)("h3",{id:"get-structs"},"Get structs"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"flatApi.findSpaceStructs(ids: AnyId[]): Promise<SpaceStruct[]>\nflatApi.findSpaceStruct(id: AnyId): Promise<SpaceStruct | undefined>\n")),Object(c.b)("p",null,"Example: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"flatApi.findSpaceStruct('1')\n")),Object(c.b)("p",null,"Output: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "createdAtBlock": 0,\n  "createdAtTime": 0,\n  "isUpdated": true,\n  "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "updatedAtBlock": 1976464,\n  "updatedAtTime": 1608780324000,\n  "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",\n  "id": "1",\n  "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "hidden": false,\n  "handle": "subsocial",\n  "postsCount": 88,\n  "hiddenPostsCount": 7,\n  "visiblePostsCount": 81,\n  "followersCount": 2200,\n  "score": 65716\n}\n')),Object(c.b)("h3",{id:"get-contents"},"Get contents"),Object(c.b)("p",null,"Find and load off-chain information about spaces from IPFS by a given array ",Object(c.b)("inlineCode",{parentName:"p"},"cid"),"."),Object(c.b)("p",null,"Space information only exists if there is a corresponding JSON file that represents the spaces' content on IPFS."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"flatApi.subsocial.ipfs.findSpaces(cids: IpfsCid[]): Promise<ContentResult<SpaceContent>>\nflatApi.subsocial.ipfs.findSpace(cid: IpfsCid): Promise<SpaceContent | undefined>\n")),Object(c.b)("p",null,"Example: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"import { convertToDerivedContent } from \"@subsocial/api/flat-subsocial/utils\" //add summary and isShowMore properties\n\n(async () => {\n  convertToDerivedContent(await flatApi.subsocial.ipfs.findSpace('bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e'))\n})()\n")),Object(c.b)("p",null,"Output:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e": {\n    "about": "Subsocial is an open protocol for decentralized social networks and marketplaces. It\'s built with Substrate and IPFS. [Learn more](https://subsocial.network/)",\n    "handle": "subsocial",\n    "image": "Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe",\n    "links": [\n      "https://subsocial.network",\n      "https://twitter.com/SubsocialChain",\n      "https://medium.com/dappforce",\n      "https://t.me/Subsocial",\n      "https://github.com/dappforce",\n      "https://www.youtube.com/channel/UC1xCFynfwMrjEtFdMf8nXgQ"\n    ],\n    "name": "Subsocial",\n    "tags": [\n      "subsocial",\n      "polkadot",\n      "substrate",\n      "sofi",\n      "chain",\n      "ipfs"\n    ],\n    "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It\'s built with Substrate and IPFS. Learn more",\n    "isShowMore": false\n  }\n}\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#ipfscid"},"IpfsCid"),": ",Object(c.b)("em",{parentName:"p"},"string")," | ",Object(c.b)("em",{parentName:"p"},"CID")," | ",Object(c.b)("em",{parentName:"p"},"IpfsCid"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#contentresult"},"ContentResult")," <T&>: ",Object(c.b)("em",{parentName:"p"},"Record"),"<",Object(c.b)("em",{parentName:"p"},"CidAsStr"),", ",Object(c.b)("em",{parentName:"p"},"T"),">")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent"},"SpaceContent"),": ",Object(c.b)("em",{parentName:"p"},"ContentFormat")," & { about: ",Object(c.b)("em",{parentName:"p"},"string"),"; email: ",Object(c.b)("em",{parentName:"p"},"string"),"; image: ",Object(c.b)("em",{parentName:"p"},"string"),"; links: ",Object(c.b)("em",{parentName:"p"},"string[]")," | ",Object(c.b)("em",{parentName:"p"},"NamedLink[]"),"; name: ",Object(c.b)("em",{parentName:"p"},"string"),"; tags: ",Object(c.b)("em",{parentName:"p"},"string[]")," }")),Object(c.b)("h2",{id:"find-and-load-space-id-by-handle"},"Find and load space ID by handle"),Object(c.b)("p",null,"A handle is an alias for a space ID."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"substrateApi.getSpaceIdByHandle(handle: string): Promise<SpaceId>\n")),Object(c.b)("p",null,"Example: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"substrateApi.getSpaceIdByHandle('subsocial')\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd78 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},"SpaceId"))),Object(c.b)("h2",{id:"find-and-load-space-ids-by-owner"},"Find and load space IDs by owner"),Object(c.b)("p",null,"Get the IDs of all spaces created by a certain profile."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"substrateApi.spaceIdsByOwner(id: AnyAccountId): Promise<SpaceId[]>\n")),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"substrateApi.spaceIdsByOwner('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')\n")),Object(c.b)("h2",{id:"find-and-load-space-ids-followed-by-account"},"Find and load space IDs followed by account"),Object(c.b)("p",null,"Find IDs of all spaces that a profile is following."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"substrateApi.spaceIdsFollowedByAccount(id: AnyAccountId): Promise<SpaceId[]>\n")),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"substrateApi.spaceIdsFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid"},"AnyAccountId"),": ",Object(c.b)("em",{parentName:"p"},"AccountId")," | ",Object(c.b)("em",{parentName:"p"},"string"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd78 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},"SpaceId"))))}l.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),s=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createContext({}),l=function(e){var t=s.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||c;return n?s.a.createElement(m,r(r({ref:t},i),{},{components:n})):s.a.createElement(m,r({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var i=2;i<c;i++)o[i]=n[i];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);