(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[4229],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9674:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(7294),r=n(4219),o=n.n(r),s=n(1563),i=n.n(s);const l=()=>a.createElement("span",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:"550px",flexDirection:"column"}},a.createElement("img",{src:"/img/playground-logo.png",style:{height:"50px",position:"absolute"}}),a.createElement(i(),{color:"#e89b25",loading:!0,size:70,"aria-label":"Loading Spinner","data-testid":"loader"}));function p(e){let{src:t}=e;return a.createElement(o(),{skeleton:a.createElement(l,null),src:t,height:"550px",className:"iframe",scrolling:"no"})}},5295:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(3117),r=(n(7294),n(3905)),o=n(9674);const s={id:"create-posts",title:"Create and update Posts",displayed_sidebar:"developSidebar"},i=void 0,l={unversionedId:"develop/sdk/posts/create-posts",id:"develop/sdk/posts/create-posts",title:"Create and update Posts",description:"This section covers how to create and update posts on the Subsocial blockchain.",source:"@site/docs/develop/sdk/posts/CreatePosts.md",sourceDirName:"develop/sdk/posts",slug:"/develop/sdk/posts/create-posts",permalink:"/docs/develop/sdk/posts/create-posts",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/posts/CreatePosts.md",tags:[],version:"current",frontMatter:{id:"create-posts",title:"Create and update Posts",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Fetch Posts",permalink:"/docs/develop/sdk/posts/fetch-posts"},next:{title:"Fetch Comments",permalink:"/docs/develop/sdk/comments/fetch-comments"}},p={},c=[{value:"Create A Post",id:"create-a-post",level:2},{value:"A Regular Post",id:"a-regular-post",level:3},{value:"A Shared Post",id:"a-shared-post",level:3},{value:"Update A Post",id:"update-a-post",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This section covers how to create and update posts on the Subsocial blockchain.")),(0,r.kt)("h2",{id:"create-a-post"},"Create A Post"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.substrateApi.tx.posts.createPost(spaceIdOpt, extension, content)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"spaceId")),(0,r.kt)("td",{parentName:"tr",align:null},"The space where a post will be published.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"extension")),(0,r.kt)("td",{parentName:"tr",align:null},"A kind of post. It can be a regular post, a shared post or a comment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html"},"IpfsContent"),' is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}.')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#postextensionenum"},"PostExtensionEnum"),": ",(0,r.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/classes/regularpost.html"},(0,r.kt)("em",{parentName:"a"},"RegularPost"))," | ",(0,r.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.comment.html"},(0,r.kt)("em",{parentName:"a"},"Comment"))," | ",(0,r.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/classes/sharedpost.html"},(0,r.kt)("em",{parentName:"a"},"SharedPost")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples:")),(0,r.kt)("h3",{id:"a-regular-post"},"A Regular Post"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/api/substrate/wrappers\"\n\n...\nconst cid = await api.ipfs.saveContent({\n  title: \"What is Subsocial?\",\n  image: \"QmcWWpR176oFao49jrLHUoH3R9MCziE5d77fdD8qdoiinx\",\n  tags: [ 'Hello world', 'FAQ' ],\n  body: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS.'\n})\n\nconst tx = substrateApi.tx.posts.createPost('1', { RegularPost: null}, IpfsContent(cid))\n\n...\n")),(0,r.kt)(o.Z,{src:"https://play.subsocial.network/writing-data/post/regular?iframe=true",mdxType:"IFrameViewer"}),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"a-shared-post"},"A Shared Post"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/api/substrate/wrappers\"\n\n...\nconst cid = await ipfs.saveContent({\n  body: 'Keep up the good work!'\n})\n\nconst tx = substrateApi.tx.posts.createPost('1', { SharedPost: '1'}, IpfsContent(cid))\n...\n}\n")),(0,r.kt)(o.Z,{src:"https://play.subsocial.network/writing-data/post/shared?iframe=true",mdxType:"IFrameViewer"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"update-a-post"},"Update A Post"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"substrateApi.tx.posts.updatePost(postId: AnyPostId, update: PostUpdateType)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"postId")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the current space.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},"The fields available to be updated.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update properties")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"spaceId?")),(0,r.kt)("td",{parentName:"tr",align:null},"If a new spaceId is provided, it will move this post to the new space.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"content?")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html"},"IpfsContent"),' is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"hidden?")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, if post is hidden from other users.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  IpfsContent, \n  OptionBool,\n} from \"@subsocial/api/substrate/wrappers\"\n\n...\nconst cid = await api.ipfs.saveContent({\n  title: \"What is Subsocial?\",\n  image: \"QmcWWpR176oFao49jrLHUoH3R9MCziE5d77fdD8qdoiinx\",\n  tags: ['Hello world', 'FAQ', 'Subsoical'], //updated field\n  body: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS.'\n})\n\nconst update = {\n  content: IpfsContent(cid),\n  hidden: new OptionBool(true),\n}\n\nconst tx = substrateApi.tx.posts.updatePost('1', update)\n...\n")),(0,r.kt)(o.Z,{src:"https://play.subsocial.network/writing-data/post/update?iframe=true",mdxType:"IFrameViewer"}),(0,r.kt)("br",null))}u.isMDXComponent=!0},4219:(e,t,n)=>{var a,r,o,s,i,l=n(7294);a=e.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),r=e.exports,o="default",s=()=>c,i=e=>c=e,Object.defineProperty(r,o,{get:s,set:i,enumerable:!0,configurable:!0});var p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var c=e=>{const{skeleton:t,className:n}=e,a=p(e,["skeleton","className"]),[r,o]=(0,l.useState)(!0);return t||console.warn("react-loading-iframe: Rendered without skeleton, consider using an html iframe"),l.createElement(l.Fragment,null,r&&t,l.createElement("iframe",Object.assign({className:n},a,{style:{display:r?"none":"block",height:"100%",width:"100%"},onLoad:()=>{o(!1)}})))}},1563:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=s(n(7294)),p=n(6657),c=(0,n(10).createAnimation)("MoonLoader","100% {transform: rotate(360deg)}","moon");t.default=function(e){var t=e.loading,n=void 0===t||t,r=e.color,o=void 0===r?"#000000":r,s=e.speedMultiplier,d=void 0===s?1:s,u=e.cssOverride,m=void 0===u?{}:u,f=e.size,b=void 0===f?60:f,k=i(e,["loading","color","speedMultiplier","cssOverride","size"]),h=(0,p.parseLengthAndUnit)(b),g=h.value,y=h.unit,v=g/7,N=a({display:"inherit",position:"relative",width:"".concat("".concat(g+2*v).concat(y)),height:"".concat("".concat(g+2*v).concat(y)),animation:"".concat(c," ").concat(.6/d,"s 0s infinite linear"),animationFillMode:"forwards"},m),w=function(e){return{width:(0,p.cssValue)(e),height:(0,p.cssValue)(e),borderRadius:"100%"}},O=a(a({},w(v)),{backgroundColor:"".concat(o),opacity:"0.8",position:"absolute",top:"".concat("".concat(g/2-v/2).concat(y)),animation:"".concat(c," ").concat(.6/d,"s 0s infinite linear"),animationFillMode:"forwards"}),P=a(a({},w(g)),{border:"".concat(v,"px solid ").concat(o),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return n?l.createElement("span",a({style:N},k),l.createElement("span",{style:O}),l.createElement("span",{style:P})):null}},10:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var a="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var o=r.sheet,s="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(s,0),a}},6657:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"==typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var r=(e.match(/[^0-9]*$/)||"").toString();return n[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=a,t.cssValue=function(e){var t=a(e);return"".concat(t.value).concat(t.unit)}}}]);