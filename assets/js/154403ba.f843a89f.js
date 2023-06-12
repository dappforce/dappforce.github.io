(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[1861],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9674:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7294),o=n(4219),a=n.n(o),s=n(1563),i=n.n(s);const l=()=>r.createElement("span",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:"550px",flexDirection:"column"}},r.createElement("img",{src:"/img/playground-logo.png",style:{height:"50px",position:"absolute"}}),r.createElement(i(),{color:"#e89b25",loading:!0,size:70,"aria-label":"Loading Spinner","data-testid":"loader"}));function c(e){let{src:t}=e;return r.createElement(a(),{skeleton:r.createElement(l,null),src:t,height:"550px",className:"iframe",scrolling:"no"})}},7211:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(3117),o=(n(7294),n(3905)),a=n(9674);const s={id:"create-roles",title:"Create & Grant Roles",description:"Roles enable on-chain moderation for spaces in Subsocial Blockchain. Let's take a deep look on how you can create custom roles for your space.",displayed_sidebar:"developSidebar"},i=void 0,l={unversionedId:"develop/sdk/roles/create-roles",id:"develop/sdk/roles/create-roles",title:"Create & Grant Roles",description:"Roles enable on-chain moderation for spaces in Subsocial Blockchain. Let's take a deep look on how you can create custom roles for your space.",source:"@site/docs/develop/sdk/roles/CreateRoles.md",sourceDirName:"develop/sdk/roles",slug:"/develop/sdk/roles/create-roles",permalink:"/docs/develop/sdk/roles/create-roles",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/roles/CreateRoles.md",tags:[],version:"current",frontMatter:{id:"create-roles",title:"Create & Grant Roles",description:"Roles enable on-chain moderation for spaces in Subsocial Blockchain. Let's take a deep look on how you can create custom roles for your space.",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Fetch Roles & Permissions",permalink:"/docs/develop/sdk/roles/fetch-roles"},next:{title:"Energy",permalink:"/docs/develop/sdk/energy"}},c={},p=[{value:"Types of Roles",id:"types-of-roles",level:2},{value:"Creating a new role",id:"creating-a-new-role",level:2},{value:"Granting role to User",id:"granting-role-to-user",level:2},{value:"Revoking role from User",id:"revoking-role-from-user",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section takes a deeper look into creating custom roles for your space and granting the access to accounts."),(0,o.kt)("h2",{id:"types-of-roles"},"Types of Roles"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Role Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UpdateSpace"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows users to update the space, which could involve modifying the space bio, name, etc.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CreatePosts"),(0,o.kt)("td",{parentName:"tr",align:null},"Grants the ability to create new posts within the Space. Users with this role can share their thoughts, ideas, or content with the community.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UpdateOwnPosts"),(0,o.kt)("td",{parentName:"tr",align:null},"Permits users to update their own posts. This role allows individuals to make changes to the content, title, or other details of the posts they have created.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HideOwnPosts"),(0,o.kt)("td",{parentName:"tr",align:null},"Enables users to hide their own posts from public view. This role provides users with the option to remove their posts from visibility.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UpdateAnyPost"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows users to update any post within the Space created. This role is usually assigned to moderators or administrators who can edit or modify posts created by other users.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HideAnyPost"),(0,o.kt)("td",{parentName:"tr",align:null},"Grants the ability to hide any post within the Space. Users with this role can remove posts created by other users from public view. This role is often given to moderators to manage content.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CreateComments"),(0,o.kt)("td",{parentName:"tr",align:null},"Permits users to create comments on posts within the Space. This role allows individuals to engage in discussions, provide feedback, or share additional information related to the posts.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UpdateOwnComments"),(0,o.kt)("td",{parentName:"tr",align:null},"Enables users to update their own comments. This role allows individuals to edit or modify the content of the comments they have posted in response to various posts.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HideOwnComments"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows users to hide their own comments from public view. This role provides individuals with the option to remove their comments from visibility.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HideAnyComment"),(0,o.kt)("td",{parentName:"tr",align:null},"Grants the ability to hide any comment within the space. Users with this role can remove comments made by other users from public view.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Upvote"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows users to upvote posts or comments within the space. This role indicates agreement or appreciation for the content or comments posted by other users.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Downvote"),(0,o.kt)("td",{parentName:"tr",align:null},"Enables users to downvote posts or comments within the space. This role indicates disagreement or disapproval of the content or comments posted by other users.")))),(0,o.kt)("h2",{id:"creating-a-new-role"},"Creating a new role"),(0,o.kt)("p",null,"The following code snippet shows creating a new role using JS SDK:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"  const spaceId = '1005'\n\n  const substrateApi = await api.substrateApi\n\n  const roleTransaction = substrateApi.tx.roles.createRole(\n  spaceId, \n  null, // Time to Live. \n  null, // Content: IPFS cid or any description about the role. \n  ['CreatePosts', 'UpdateSpace', 'HideAnyComment'], // Permissions.\n  )\n")),(0,o.kt)("p",null,"Understanding the parameters of the method, createRole:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Space Id: The exact space for which this role will be created & applicable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Time to Live: The expiration time in terms of block number untill which the role is applicable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Content: It represents any data you want to associate with the role, like description or information. It can be of type None, Other or IPFS. Here's an example of IPFS: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"  const aboutRoleCID = ''\n  const spaceId = '1005'\n\n  const substrateApi = await api.substrateApi\n\n  const roleTransaction = substrateApi.tx.roles.createRole(\n  spaceId, \n  null, // Time to Live. \n  {IPFS: aboutRoleCID}, // Content: IPFS cid or any description about the role. \n  ['CreatePosts', 'UpdateSpace', 'HideAnyComment'], // Permissions.\n  )\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Permissions: Set of permissions this role will have like CreatePosts, UpdateSpace, etc."))),(0,o.kt)("p",null,"Try Live on the Playground:"),(0,o.kt)(a.Z,{src:"https://play.subsocial.network/writing-data/roles/create?iframe=true",mdxType:"IFrameViewer"}),(0,o.kt)("h2",{id:"granting-role-to-user"},"Granting role to User"),(0,o.kt)("p",null,"The role you created for a space that holds a set of permissions can be granted to a user to actually moderate your space."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"  const roleId = '4'\n\n  const users = [\n    { Account: '5HYYeCa1Hae5YYGJ2pHskHLVrA7V5WjaSuSbntidhhD9qqgs' }, \n    { Space: '1' }\n  ] // List of users to grant the role.\n\n  const substrateApi = await api.substrateApi\n\n  const roleTransaction = substrateApi.tx.roles.grantRole(\n    roleId, \n    users \n  )\n")),(0,o.kt)("p",null,"Notice that you can assign a role to a user 2 ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By Account: Basically mentioning the user's address "),(0,o.kt)("li",{parentName:"ul"},"By Space Id: Mentioning the Space Id of the user who can moderate")),(0,o.kt)("p",null,"Try Live on the Playground:"),(0,o.kt)(a.Z,{src:"https://play.subsocial.network/writing-data/roles/grant?iframe=true",mdxType:"IFrameViewer"}),(0,o.kt)("h2",{id:"revoking-role-from-user"},"Revoking role from User"),(0,o.kt)("p",null,"The following exmaple shows how you can revoke role from a user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"  const roleId = '4'\n\n  const users = [\n    { Account: '5HYYeCa1Hae5YYGJ2pHskHLVrA7V5WjaSuSbntidhhD9qqgs' }, \n    { Space: '1' }\n  ] // List of users to grant the role.\n\n  const substrateApi = await api.substrateApi\n\n  const roleTransaction = substrateApi.tx.roles.revokeRole(\n    roleId, \n    users \n  )\n")),(0,o.kt)("p",null,"Try Live on the Playground:"),(0,o.kt)(a.Z,{src:"https://play.subsocial.network/writing-data/roles/revoke?iframe=true",mdxType:"IFrameViewer"}))}d.isMDXComponent=!0},4219:(e,t,n)=>{var r,o,a,s,i,l=n(7294);r=e.exports,Object.defineProperty(r,"__esModule",{value:!0,configurable:!0}),o=e.exports,a="default",s=()=>p,i=e=>p=e,Object.defineProperty(o,a,{get:s,set:i,enumerable:!0,configurable:!0});var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var p=e=>{const{skeleton:t,className:n}=e,r=c(e,["skeleton","className"]),[o,a]=(0,l.useState)(!0);return t||console.warn("react-loading-iframe: Rendered without skeleton, consider using an html iframe"),l.createElement(l.Fragment,null,o&&t,l.createElement("iframe",Object.assign({className:n},r,{style:{display:o?"none":"block",height:"100%",width:"100%"},onLoad:()=>{a(!1)}})))}},1563:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=s(n(7294)),c=n(6657),p=(0,n(10).createAnimation)("MoonLoader","100% {transform: rotate(360deg)}","moon");t.default=function(e){var t=e.loading,n=void 0===t||t,o=e.color,a=void 0===o?"#000000":o,s=e.speedMultiplier,u=void 0===s?1:s,d=e.cssOverride,m=void 0===d?{}:d,h=e.size,f=void 0===h?60:h,y=i(e,["loading","color","speedMultiplier","cssOverride","size"]),b=(0,c.parseLengthAndUnit)(f),g=b.value,v=b.unit,k=g/7,w=r({display:"inherit",position:"relative",width:"".concat("".concat(g+2*k).concat(v)),height:"".concat("".concat(g+2*k).concat(v)),animation:"".concat(p," ").concat(.6/u,"s 0s infinite linear"),animationFillMode:"forwards"},m),N=function(e){return{width:(0,c.cssValue)(e),height:(0,c.cssValue)(e),borderRadius:"100%"}},O=r(r({},N(k)),{backgroundColor:"".concat(a),opacity:"0.8",position:"absolute",top:"".concat("".concat(g/2-k/2).concat(v)),animation:"".concat(p," ").concat(.6/u,"s 0s infinite linear"),animationFillMode:"forwards"}),P=r(r({},N(g)),{border:"".concat(k,"px solid ").concat(a),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return n?l.createElement("span",r({style:w},y),l.createElement("span",{style:O}),l.createElement("span",{style:P})):null}},10:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var o=document.createElement("style");document.head.appendChild(o);var a=o.sheet,s="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return a&&a.insertRule(s,0),r}},6657:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var o=(e.match(/[^0-9]*$/)||"").toString();return n[o]?{value:t,unit:o}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return"".concat(t.value).concat(t.unit)}}}]);