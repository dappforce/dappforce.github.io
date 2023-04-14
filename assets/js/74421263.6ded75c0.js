(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[140],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,c(c({ref:t},p),{},{components:n})):o.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9674:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(7294),a=n(4219),r=n.n(a),c=n(1563),i=n.n(c);const s=()=>o.createElement("span",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:"550px",flexDirection:"column"}},o.createElement("img",{src:"/img/playground-logo.png",style:{height:"50px",position:"absolute"}}),o.createElement(i(),{color:"#e89b25",loading:!0,size:70,"aria-label":"Loading Spinner","data-testid":"loader"}));function l(e){let{src:t}=e;return o.createElement(r(),{skeleton:o.createElement(s,null),src:t,height:"550px",className:"iframe",scrolling:"no"})}},1492:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var o=n(3117),a=(n(7294),n(3905)),r=n(9674);const c={id:"fetch-reactions",title:"Fetch Reactions",displayed_sidebar:"developSidebar"},i=void 0,s={unversionedId:"develop/sdk/reactions/fetch-reactions",id:"develop/sdk/reactions/fetch-reactions",title:"Fetch Reactions",description:"This section covers how to fetch reactions on the Subsocial blockchain.",source:"@site/docs/develop/sdk/reactions/FetchReactions.md",sourceDirName:"develop/sdk/reactions",slug:"/develop/sdk/reactions/fetch-reactions",permalink:"/docs/develop/sdk/reactions/fetch-reactions",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/reactions/FetchReactions.md",tags:[],version:"current",frontMatter:{id:"fetch-reactions",title:"Fetch Reactions",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Create And Update Comments",permalink:"/docs/develop/sdk/comments/create-comments"},next:{title:"Create, Update, And Delete Reactions",permalink:"/docs/develop/sdk/reactions/create-reactions"}},l={},p=[{value:"Get reaction IDs",id:"get-reaction-ids",level:2},{value:"Get reactions",id:"get-reactions",level:2},{value:"Example",id:"example",level:3},{value:"Get a reaction by post ID and account",id:"get-a-reaction-by-post-id-and-account",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This section covers how to fetch reactions on the Subsocial blockchain.")),(0,a.kt)("p",null,"Find and load an array of information about reactions from the Subsocial blockchain by a given array of IDs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const substrateApi = await api.substrateApi\n")),(0,a.kt)("h2",{id:"get-reaction-ids"},"Get reaction IDs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"query")," allows for the querying of multiple storage entries and the combination into a single result.\nThis is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription."),(0,a.kt)("h2",{id:"get-reactions"},"Get reactions"),(0,a.kt)("p",null,"Get reactions (upvotes/downvotes) on posts or comments by reaction IDs (use multi request from blockchain)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"api.blockchain.findReactions(ids: AnyReactionId[]): Promise<Reaction[]>\napi.blockchain.findReaction(id: AnyReactionId): Promise<Reaction | undefined>\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ReactionId } from '@subsocial/api/types/substrate';\n  \nconst myAccount = '3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8';\n\nconst example = async () =>  {\n  const substrate = await api.blockchain\n  const substrateApi = await api.substrateApi\n  \n  const tuples = [ '1', '2', '3' ].map(postId => [ myAccount, postId ])\n  \n  const reactionIds = await substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)\n  const reactions = await substrate.findReactions(reactionIds as ReactionId[])\n}\n")),(0,a.kt)(r.Z,{src:"https://play.subsocial.network/reading-data/reactions/multiple-reactions?iframe=true",mdxType:"IFrameViewer"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"get-a-reaction-by-post-id-and-account"},"Get a reaction by post ID and account"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"api.blockchain.getPostReactionIdByAccount(accountId: AnyAccountId, postId: AnyPostId): Promise<ReactionId | undefined>\n")),(0,a.kt)("p",null,"Example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.getPostReactionIdByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', '1')\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dappforce/subsocial-js/blob/9d060310ac34d63fdd098f34460e455e76b85a43/packages/api/src/types/common.ts#L41"},"AnyReactionId"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/types/common.ts#L40"},"AnyPostId"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83c\udd78 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/types/common.ts#L41"},(0,a.kt)("em",{parentName:"a"},"ReactionId")))))}d.isMDXComponent=!0},4219:(e,t,n)=>{var o,a,r,c,i,s=n(7294);o=e.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),a=e.exports,r="default",c=()=>p,i=e=>p=e,Object.defineProperty(a,r,{get:c,set:i,enumerable:!0,configurable:!0});var l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};var p=e=>{const{skeleton:t,className:n}=e,o=l(e,["skeleton","className"]),[a,r]=(0,s.useState)(!0);return t||console.warn("react-loading-iframe: Rendered without skeleton, consider using an html iframe"),s.createElement(s.Fragment,null,a&&t,s.createElement("iframe",Object.assign({className:n},o,{style:{display:a?"none":"block",height:"100%",width:"100%"},onLoad:()=>{r(!1)}})))}},1563:function(e,t,n){"use strict";var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,a)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},i=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var s=c(n(7294)),l=n(6657),p=(0,n(10).createAnimation)("MoonLoader","100% {transform: rotate(360deg)}","moon");t.default=function(e){var t=e.loading,n=void 0===t||t,a=e.color,r=void 0===a?"#000000":a,c=e.speedMultiplier,u=void 0===c?1:c,d=e.cssOverride,m=void 0===d?{}:d,f=e.size,b=void 0===f?60:f,y=i(e,["loading","color","speedMultiplier","cssOverride","size"]),h=(0,l.parseLengthAndUnit)(b),v=h.value,g=h.unit,k=v/7,O=o({display:"inherit",position:"relative",width:"".concat("".concat(v+2*k).concat(g)),height:"".concat("".concat(v+2*k).concat(g)),animation:"".concat(p," ").concat(.6/u,"s 0s infinite linear"),animationFillMode:"forwards"},m),w=function(e){return{width:(0,l.cssValue)(e),height:(0,l.cssValue)(e),borderRadius:"100%"}},j=o(o({},w(k)),{backgroundColor:"".concat(r),opacity:"0.8",position:"absolute",top:"".concat("".concat(v/2-k/2).concat(g)),animation:"".concat(p," ").concat(.6/u,"s 0s infinite linear"),animationFillMode:"forwards"}),x=o(o({},w(v)),{border:"".concat(k,"px solid ").concat(r),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return n?s.createElement("span",o({style:O},y),s.createElement("span",{style:j}),s.createElement("span",{style:x})):null}},10:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var o="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return o;var a=document.createElement("style");document.head.appendChild(a);var r=a.sheet,c="\n    @keyframes ".concat(o," {\n      ").concat(t,"\n    }\n  ");return r&&r.insertRule(c,0),o}},6657:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function o(e){if("number"==typeof e)return{value:e,unit:"px"};var t,o=(e.match(/^[0-9.]*/)||"").toString();t=o.includes(".")?parseFloat(o):parseInt(o,10);var a=(e.match(/[^0-9]*$/)||"").toString();return n[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=o,t.cssValue=function(e){var t=o(e);return"".concat(t.value).concat(t.unit)}}}]);