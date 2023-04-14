(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[4397],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(b,s(s({ref:t},c),{},{components:a})):n.createElement(b,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9674:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(7294),r=a(4219),o=a.n(r),s=a(1563),p=a.n(s);const i=()=>n.createElement("span",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:"550px",flexDirection:"column"}},n.createElement("img",{src:"/img/playground-logo.png",style:{height:"50px",position:"absolute"}}),n.createElement(p(),{color:"#e89b25",loading:!0,size:70,"aria-label":"Loading Spinner","data-testid":"loader"}));function l(e){let{src:t}=e;return n.createElement(o(),{skeleton:n.createElement(i,null),src:t,height:"550px",className:"iframe",scrolling:"no"})}},7302:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(3117),r=(a(7294),a(3905)),o=a(9674);const s={id:"create-spaces",title:"Create And Update Spaces",displayed_sidebar:"developSidebar"},p=void 0,i={unversionedId:"develop/sdk/spaces/create-spaces",id:"develop/sdk/spaces/create-spaces",title:"Create And Update Spaces",description:"This section covers how to create and update spaces on the Subsocial blockchain.",source:"@site/docs/develop/sdk/spaces/CreateSpaces.md",sourceDirName:"develop/sdk/spaces",slug:"/develop/sdk/spaces/create-spaces",permalink:"/docs/develop/sdk/spaces/create-spaces",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/spaces/CreateSpaces.md",tags:[],version:"current",frontMatter:{id:"create-spaces",title:"Create And Update Spaces",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Fetch Spaces",permalink:"/docs/develop/sdk/spaces/fetch-spaces"},next:{title:"Fetch Posts",permalink:"/docs/develop/sdk/posts/fetch-posts"}},l={},c=[{value:"Create A Space",id:"create-a-space",level:2},{value:"Update A Space",id:"update-a-space",level:2},{value:"Space Permissions",id:"space-permissions",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This section covers how to create and update spaces on the Subsocial blockchain.")),(0,r.kt)("h2",{id:"create-a-space"},"Create A Space"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"substrateApi.tx.spaces.createSpace(content, permissionsOpt)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/substrate/wrappers/content.ts#L29"},"IpfsContent"),' is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"permissions")),(0,r.kt)("td",{parentName:"tr",align:null},"advanced options.")))),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/api/substrate/wrappers\"\n...\nconst cid = await api.ipfs.saveContent({\n  about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',\n  image: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', // ipfsImageCid = await api.subsocial.ipfs.saveFile(file)\n  name: 'Subsocial',\n  tags: [ 'subsocial' ]\n})\n\nconst tx = substrateApi.tx.spaces.createSpace(\n  IpfsContent(cid),\n  null\n)\n...\n")),(0,r.kt)(o.Z,{src:"https://play.subsocial.network/writing-data/space/create?iframe=true",mdxType:"IFrameViewer"}),(0,r.kt)("h2",{id:"update-a-space"},"Update A Space"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"substrateApi.tx.spaces.updateSpace(spaceId: AnySpaceId, update: SpaceUpdateType)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"spaceId")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the current space.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},"fields available to be updated.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update properties")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"content"),"?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/substrate/wrappers/content.ts#L29"},"IpfsContent"),' is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"hidden"),"?"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, if space is hidden from other users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"permissions"),"?"),(0,r.kt)("td",{parentName:"tr",align:null},"advance opt.")))),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  IpfsContent, \n  OptionBool,\n} from \"@subsocial/api/substrate/wrappers\"\n\n...\nconst cid = await api.ipfs.saveContent({\n  about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',\n  image: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', \n  name: 'Subsocial updated', // updated field\n  tags: ['subsocial']\n})\n\nconst update = {\n  content: IpfsContent(cid),\n  hidden: new OptionBool(true),\n}\n      \nconst tx = substrateApi.tx.spaces.updateSpace('1', update)\n...\n")),(0,r.kt)(o.Z,{src:"https://play.subsocial.network/writing-data/space/update?iframe=true",mdxType:"IFrameViewer"}),(0,r.kt)("h2",{id:"space-permissions"},"Space Permissions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Blockchains by nature are public and transparent, which means that anyone can read any data you store in these spaces. To hide it from people, you can to encrypt the data from your end. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Read-Only Content")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"everyone"),(0,r.kt)("td",{parentName:"tr",align:null},"Everyone can write.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"follower"),(0,r.kt)("td",{parentName:"tr",align:null},"Only the space followers can write.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spaceOwner"),(0,r.kt)("td",{parentName:"tr",align:null},"Only the space owner can write.")))),(0,r.kt)("p",null,"Writing includes both updating the space data and adding new posts to a particular space."),(0,r.kt)("p",null,"The way you can set permissions is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  const tx = substrateApi.tx.spaces.createSpace(IpfsContent(cid), {follower: true})\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/types/common.ts#L39"},"AnySpaceId"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/substrate/wrappers/space-update.ts#L5"},"SpaceUpdateType"),": { content: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/types/ipfs.ts#L16"},(0,r.kt)("em",{parentName:"a"},"SpaceContent")),", handle: string, hidden: ",(0,r.kt)("em",{parentName:"p"},"Option"),"<",(0,r.kt)("em",{parentName:"p"},"bool"),">, permissions: ",(0,r.kt)("em",{parentName:"p"},"Option"),"<",(0,r.kt)("em",{parentName:"p"},"Option"),"<",(0,r.kt)("em",{parentName:"p"},"SpacePermissions")," (none, everyone, follower, space_owner)>> }")))}u.isMDXComponent=!0},4219:(e,t,a)=>{var n,r,o,s,p,i=a(7294);n=e.exports,Object.defineProperty(n,"__esModule",{value:!0,configurable:!0}),r=e.exports,o="default",s=()=>c,p=e=>c=e,Object.defineProperty(r,o,{get:s,set:p,enumerable:!0,configurable:!0});var l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var c=e=>{const{skeleton:t,className:a}=e,n=l(e,["skeleton","className"]),[r,o]=(0,i.useState)(!0);return t||console.warn("react-loading-iframe: Rendered without skeleton, consider using an html iframe"),i.createElement(i.Fragment,null,r&&t,i.createElement("iframe",Object.assign({className:a},n,{style:{display:r?"none":"block",height:"100%",width:"100%"},onLoad:()=>{o(!1)}})))}},1563:function(e,t,a){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return o(t,e),t},p=this&&this.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};Object.defineProperty(t,"__esModule",{value:!0});var i=s(a(7294)),l=a(6657),c=(0,a(10).createAnimation)("MoonLoader","100% {transform: rotate(360deg)}","moon");t.default=function(e){var t=e.loading,a=void 0===t||t,r=e.color,o=void 0===r?"#000000":r,s=e.speedMultiplier,d=void 0===s?1:s,u=e.cssOverride,m=void 0===u?{}:u,b=e.size,f=void 0===b?60:b,k=p(e,["loading","color","speedMultiplier","cssOverride","size"]),h=(0,l.parseLengthAndUnit)(f),y=h.value,g=h.unit,v=y/7,N=n({display:"inherit",position:"relative",width:"".concat("".concat(y+2*v).concat(g)),height:"".concat("".concat(y+2*v).concat(g)),animation:"".concat(c," ").concat(.6/d,"s 0s infinite linear"),animationFillMode:"forwards"},m),w=function(e){return{width:(0,l.cssValue)(e),height:(0,l.cssValue)(e),borderRadius:"100%"}},O=n(n({},w(v)),{backgroundColor:"".concat(o),opacity:"0.8",position:"absolute",top:"".concat("".concat(y/2-v/2).concat(g)),animation:"".concat(c," ").concat(.6/d,"s 0s infinite linear"),animationFillMode:"forwards"}),S=n(n({},w(y)),{border:"".concat(v,"px solid ").concat(o),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return a?i.createElement("span",n({style:N},k),i.createElement("span",{style:O}),i.createElement("span",{style:S})):null}},10:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,a){var n="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return n;var r=document.createElement("style");document.head.appendChild(r);var o=r.sheet,s="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(s,0),n}},6657:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var a={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return a[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=n,t.cssValue=function(e){var t=n(e);return"".concat(t.value).concat(t.unit)}}}]);