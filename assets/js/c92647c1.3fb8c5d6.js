(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[9134],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(m,c(c({ref:t},p),{},{components:n})):a.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9674:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(7294),r=n(4219),o=n.n(r),c=n(1563),s=n.n(c);const i=()=>a.createElement("span",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:"550px",flexDirection:"column"}},a.createElement("img",{src:"/img/playground-logo.png",style:{height:"50px",position:"absolute"}}),a.createElement(s(),{color:"#e89b25",loading:!0,size:70,"aria-label":"Loading Spinner","data-testid":"loader"}));function l(e){let{src:t}=e;return a.createElement(o(),{skeleton:a.createElement(i,null),src:t,height:"550px",className:"iframe",scrolling:"no"})}},6967:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=n(3117),r=(n(7294),n(3905)),o=n(9674);const c={id:"fetch-spaces",title:"Fetch Spaces",displayed_sidebar:"developSidebar"},s=void 0,i={unversionedId:"develop/sdk/spaces/fetch-spaces",id:"develop/sdk/spaces/fetch-spaces",title:"Fetch Spaces",description:"This section covers how to fetch spaces from the Subsocial blockchain.",source:"@site/docs/develop/sdk/spaces/FetchSpaces.md",sourceDirName:"develop/sdk/spaces",slug:"/develop/sdk/spaces/fetch-spaces",permalink:"/docs/develop/sdk/spaces/fetch-spaces",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/spaces/FetchSpaces.md",tags:[],version:"current",frontMatter:{id:"fetch-spaces",title:"Fetch Spaces",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Create And Update Profiles",permalink:"/docs/develop/sdk/profiles/create-profiles"},next:{title:"Create And Update Spaces",permalink:"/docs/develop/sdk/spaces/create-spaces"}},l={},p=[{value:"Find and load single space",id:"find-and-load-single-space",level:2},{value:"Find and load an array of spaces",id:"find-and-load-an-array-of-spaces",level:2},{value:"findPublicSpaces",id:"findpublicspaces",level:3},{value:"findUnlistedSpaces",id:"findunlistedspaces",level:3},{value:"Find and load structs and contents separately",id:"find-and-load-structs-and-contents-separately",level:2},{value:"Get structs",id:"get-structs",level:3},{value:"Find and load space IDs by owner",id:"find-and-load-space-ids-by-owner",level:2},{value:"Find and load space IDs followed by account",id:"find-and-load-space-ids-followed-by-account",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This section covers how to fetch spaces from the Subsocial blockchain.")),(0,r.kt)("h2",{id:"find-and-load-single-space"},"Find and load single space"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"api.findSpace(query: FindSpaceQuery): Promise<SpaceData | undefined>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.findSpace({ id: '1' })\n")),(0,r.kt)("p",null,"Output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1",\n  "struct": {\n    "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n    "createdAtBlock": 0,\n    "createdAtTime": 0,\n    "isUpdated": true,\n    "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n    "updatedAtBlock": 1976464,\n    "updatedAtTime": 1608780324000,\n    "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",\n    "id": "1",\n    "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n    "hidden": false,\n    "handle": "subsocial",\n    "postsCount": 88,\n    "hiddenPostsCount": 7,\n    "visiblePostsCount": 81,\n    "followersCount": 2200,\n    "score": 65716\n  },\n  "content": {\n    "about": "Subsocial is an open protocol for decentralized social networks and marketplaces. It\'s built with Substrate and IPFS. [Learn more](https://subsocial.network/)",\n    "handle": "subsocial",\n    "image": "Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe",\n    "links": [\n      "https://subsocial.network",\n      "https://twitter.com/SubsocialChain",\n      "https://medium.com/dappforce",\n      "https://t.me/Subsocial",\n      "https://github.com/dappforce",\n      "https://www.youtube.com/channel/UC1xCFynfwMrjEtFdMf8nXgQ"\n    ],\n    "name": "Subsocial",\n    "tags": [\n      "subsocial",\n      "polkadot",\n      "substrate",\n      "sofi",\n      "chain",\n      "ipfs"\n    ],\n    "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It\'s built with Substrate and IPFS. Learn more",\n    "isShowMore": false\n  }\n}\n')),(0,r.kt)(o.Z,{src:"https://play.subsocial.network/reading-data/space/by-id?iframe=true",mdxType:"IFrameViewer"}),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 type FindSpaceQuery = FindStruct<",(0,r.kt)("em",{parentName:"p"},"AnySpaceId"),">")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 type SpaceData = EntityData<",(0,r.kt)("em",{parentName:"p"},"SpaceStruct"),", SpaceContent>")),(0,r.kt)("h2",{id:"find-and-load-an-array-of-spaces"},"Find and load an array of spaces"),(0,r.kt)("h3",{id:"findpublicspaces"},"findPublicSpaces"),(0,r.kt)("p",null,"Load an array of information about public spaces from the Subsocial blockchain and IPFS by a given array of space ",(0,r.kt)("inlineCode",{parentName:"p"},"ids"),"."),(0,r.kt)("p",null,"A space is considered public if it meets these conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"hidden")," field on its blockchain structure is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},"And there is a corresponding JSON file that represents the space's content on IPFS.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"api.findPublicSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.findPublicSpaces(['1'])\n")),(0,r.kt)("h3",{id:"findunlistedspaces"},"findUnlistedSpaces"),(0,r.kt)("p",null,"Find and load an array of information about unlisted spaces from the Subsocial blockchain and IPFS by a given array of space ",(0,r.kt)("inlineCode",{parentName:"p"},"ids"),"."),(0,r.kt)("p",null,"A space is considered unlisted if it meets either of these conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"hidden")," field on it's blockchain structure is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},"Or there is no corresponding JSON file that represents the space's content on IPFS.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"api.findUnlistedSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.findUnlistedSpaces(['1'])\n")),(0,r.kt)("h2",{id:"find-and-load-structs-and-contents-separately"},"Find and load structs and contents separately"),(0,r.kt)("h3",{id:"get-structs"},"Get structs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"api.findSpaceStructs(ids: AnyId[]): Promise<SpaceStruct[]>\napi.findSpaceStruct(id: AnyId): Promise<SpaceStruct | undefined>\n")),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.findSpaceStruct('1')\n")),(0,r.kt)("p",null,"Output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "createdAtBlock": 0,\n  "createdAtTime": 0,\n  "isUpdated": true,\n  "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "updatedAtBlock": 1976464,\n  "updatedAtTime": 1608780324000,\n  "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",\n  "id": "1",\n  "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "hidden": false,\n  "handle": "subsocial",\n  "postsCount": 88,\n  "hiddenPostsCount": 7,\n  "visiblePostsCount": 81,\n  "followersCount": 2200,\n  "score": 65716\n}\n')),(0,r.kt)("h2",{id:"find-and-load-space-ids-by-owner"},"Find and load space IDs by owner"),(0,r.kt)("p",null,"Get the IDs of all spaces created by a certain profile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"api.blockchain.spaceIdsByOwner(id: AnyAccountId): Promise<SpaceId[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.spaceIdsByOwner('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')\n")),(0,r.kt)(o.Z,{src:"https://play.subsocial.network/reading-data/space/by-owner?iframe=true",mdxType:"IFrameViewer"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"find-and-load-space-ids-followed-by-account"},"Find and load space IDs followed by account"),(0,r.kt)("p",null,"Find IDs of all spaces that a profile is following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"api.blockchain.spaceIdsFollowedByAccount(id: AnyAccountId): Promise<SpaceId[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.spaceIdsFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 AnyAccountId: ",(0,r.kt)("em",{parentName:"p"},"AccountId")," | ",(0,r.kt)("em",{parentName:"p"},"string"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83c\udd78 SpaceId: string")),(0,r.kt)("p",null,"There are more methods available inside ",(0,r.kt)("inlineCode",{parentName:"p"},"api.blockchain")," for fetching spaceIds like getSpaceIdsWithRolesByAccount, getSpacePermissionsByAccount, etc."))}u.isMDXComponent=!0},4219:(e,t,n)=>{var a,r,o,c,s,i=n(7294);a=e.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),r=e.exports,o="default",c=()=>p,s=e=>p=e,Object.defineProperty(r,o,{get:c,set:s,enumerable:!0,configurable:!0});var l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var p=e=>{const{skeleton:t,className:n}=e,a=l(e,["skeleton","className"]),[r,o]=(0,i.useState)(!0);return t||console.warn("react-loading-iframe: Rendered without skeleton, consider using an html iframe"),i.createElement(i.Fragment,null,r&&t,i.createElement("iframe",Object.assign({className:n},a,{style:{display:r?"none":"block",height:"100%",width:"100%"},onLoad:()=>{o(!1)}})))}},1563:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},s=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=c(n(7294)),l=n(6657),p=(0,n(10).createAnimation)("MoonLoader","100% {transform: rotate(360deg)}","moon");t.default=function(e){var t=e.loading,n=void 0===t||t,r=e.color,o=void 0===r?"#000000":r,c=e.speedMultiplier,d=void 0===c?1:c,u=e.cssOverride,f=void 0===u?{}:u,m=e.size,b=void 0===m?60:m,y=s(e,["loading","color","speedMultiplier","cssOverride","size"]),k=(0,l.parseLengthAndUnit)(b),h=k.value,v=k.unit,g=h/7,S=a({display:"inherit",position:"relative",width:"".concat("".concat(h+2*g).concat(v)),height:"".concat("".concat(h+2*g).concat(v)),animation:"".concat(p," ").concat(.6/d,"s 0s infinite linear"),animationFillMode:"forwards"},f),w=function(e){return{width:(0,l.cssValue)(e),height:(0,l.cssValue)(e),borderRadius:"100%"}},O=a(a({},w(g)),{backgroundColor:"".concat(o),opacity:"0.8",position:"absolute",top:"".concat("".concat(h/2-g/2).concat(v)),animation:"".concat(p," ").concat(.6/d,"s 0s infinite linear"),animationFillMode:"forwards"}),N=a(a({},w(h)),{border:"".concat(g,"px solid ").concat(o),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return n?i.createElement("span",a({style:S},y),i.createElement("span",{style:O}),i.createElement("span",{style:N})):null}},10:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var a="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var o=r.sheet,c="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(c,0),a}},6657:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"==typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var r=(e.match(/[^0-9]*$/)||"").toString();return n[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=a,t.cssValue=function(e){var t=a(e);return"".concat(t.value).concat(t.unit)}}}]);