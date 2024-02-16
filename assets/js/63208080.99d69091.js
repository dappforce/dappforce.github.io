(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[6420],{5680:(e,t,n)=>{"use strict";n.d(t,{xA:()=>p,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2439:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(6540),a=n(9896),o=n.n(a),i=n(7979),c=n.n(i);const s=()=>r.createElement("span",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:"550px",flexDirection:"column"}},r.createElement("img",{src:"/img/playground-logo.png",style:{height:"50px",position:"absolute"}}),r.createElement(c(),{color:"#e89b25",loading:!0,size:70,"aria-label":"Loading Spinner","data-testid":"loader"}));function l(e){let{src:t}=e;return r.createElement(o(),{skeleton:r.createElement(s,null),src:t,height:"550px",className:"iframe",scrolling:"no"})}},7176:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(8168),a=(n(6540),n(5680)),o=n(2439);const i={id:"create-reactions",title:"Create, Update, And Delete Reactions",displayed_sidebar:"developSidebar"},c=void 0,s={unversionedId:"develop/sdk/reactions/create-reactions",id:"develop/sdk/reactions/create-reactions",title:"Create, Update, And Delete Reactions",description:"How To Create Reactions With The Subsocial JS SDK",source:"@site/docs/develop/sdk/reactions/CreateReactions.md",sourceDirName:"develop/sdk/reactions",slug:"/develop/sdk/reactions/create-reactions",permalink:"/docs/develop/sdk/reactions/create-reactions",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/reactions/CreateReactions.md",tags:[],version:"current",frontMatter:{id:"create-reactions",title:"Create, Update, And Delete Reactions",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Fetch Reactions",permalink:"/docs/develop/sdk/reactions/fetch-reactions"},next:{title:"Fetch Follows",permalink:"/docs/develop/sdk/follow/fetch-follow"}},l={},p=[{value:"Create a reaction",id:"create-a-reaction",level:2},{value:"Update a reaction",id:"update-a-reaction",level:2},{value:"Delete a reaction",id:"delete-a-reaction",level:2}],u={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("head",null,(0,a.yg)("title",null,"How To Create Reactions With The Subsocial JS SDK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This section covers how to create, update and delete reactions on the Subsocial blockchain.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const substrateApi = await api.substrateApi\n")),(0,a.yg)("h2",{id:"create-a-reaction"},"Create a reaction"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'substrateApi.tx.reactions.createPostReaction(postId: AnyPostId, kind: PalletReactionsReactionKind | "Upvote" | "Downvote" | Uint8Array)\n')),(0,a.yg)("p",null,"Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"const tx = substrateApi.tx.reactions.createPostReaction('1', 'Upvote')\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/substrate/wrappers/reaction.ts#L9"},"ReactionKind"),': PalletReactionsReactionKind | "Upvote" | "Downvote" | Uint8Array')),(0,a.yg)(o.A,{src:"https://play.subsocial.network/writing-data/post-reaction/create?iframe=true",mdxType:"IFrameViewer"}),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"update-a-reaction"},"Update a reaction"),(0,a.yg)("p",null,"Change the type of reaction."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"substrateApi.tx.reactions.updatePostReaction(postId: AnyPostId, reactionId: ReactionId, newKind: ReactionType)\n")),(0,a.yg)("p",null,"Example: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"const tx = substrateApi.tx.reactions.updatePostReaction('1', '53', 'Downvote')\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/types/dto.ts#L192"},"ReactionType"),": ",(0,a.yg)("em",{parentName:"p"},"'Upvote'")," | ",(0,a.yg)("em",{parentName:"p"},"'Downvote'"))),(0,a.yg)(o.A,{src:"https://play.subsocial.network/writing-data/post-reaction/update?iframe=true",mdxType:"IFrameViewer"}),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"delete-a-reaction"},"Delete a reaction"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"substrateApi.tx.reactions.updatePostReaction(postId: AnyPostId, reactionId: ReactionId)\n")),(0,a.yg)("p",null,"Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"const tx = substrateApi.tx.reactions.deletePostReaction('1', '53')\n")),(0,a.yg)(o.A,{src:"https://play.subsocial.network/writing-data/post-reaction/delete?iframe=true",mdxType:"IFrameViewer"}),(0,a.yg)("br",null))}y.isMDXComponent=!0},9896:(e,t,n)=>{var r,a,o,i,c,s=n(6540);r=e.exports,Object.defineProperty(r,"__esModule",{value:!0,configurable:!0}),a=e.exports,o="default",i=()=>p,c=e=>p=e,Object.defineProperty(a,o,{get:i,set:c,enumerable:!0,configurable:!0});var l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var p=e=>{const{skeleton:t,className:n}=e,r=l(e,["skeleton","className"]),[a,o]=(0,s.useState)(!0);return t||console.warn("react-loading-iframe: Rendered without skeleton, consider using an html iframe"),s.createElement(s.Fragment,null,a&&t,s.createElement("iframe",Object.assign({className:n},r,{style:{display:a?"none":"block",height:"100%",width:"100%"},onLoad:()=>{o(!1)}})))}},7979:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n(6540)),l=n(1665),p=(0,n(9489).createAnimation)("MoonLoader","100% {transform: rotate(360deg)}","moon");t.default=function(e){var t=e.loading,n=void 0===t||t,a=e.color,o=void 0===a?"#000000":a,i=e.speedMultiplier,u=void 0===i?1:i,d=e.cssOverride,y=void 0===d?{}:d,m=e.size,f=void 0===m?60:m,g=c(e,["loading","color","speedMultiplier","cssOverride","size"]),b=(0,l.parseLengthAndUnit)(f),v=b.value,h=b.unit,O=v/7,w=r({display:"inherit",position:"relative",width:"".concat("".concat(v+2*O).concat(h)),height:"".concat("".concat(v+2*O).concat(h)),animation:"".concat(p," ").concat(.6/u,"s 0s infinite linear"),animationFillMode:"forwards"},y),x=function(e){return{width:(0,l.cssValue)(e),height:(0,l.cssValue)(e),borderRadius:"100%"}},j=r(r({},x(O)),{backgroundColor:"".concat(o),opacity:"0.8",position:"absolute",top:"".concat("".concat(v/2-O/2).concat(h)),animation:"".concat(p," ").concat(.6/u,"s 0s infinite linear"),animationFillMode:"forwards"}),P=r(r({},x(v)),{border:"".concat(O,"px solid ").concat(o),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return n?s.createElement("span",r({style:w},g),s.createElement("span",{style:j}),s.createElement("span",{style:P})):null}},9489:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var o=a.sheet,i="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(i,0),r}},1665:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var a=(e.match(/[^0-9]*$/)||"").toString();return n[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return"".concat(t.value).concat(t.unit)}}}]);