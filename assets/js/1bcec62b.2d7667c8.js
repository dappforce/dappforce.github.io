(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[6926],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(7294),r=n(4334);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},5488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(3117),r=n(7294),o=n(4334),s=n(2389),l=n(7392),i=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:s,values:m,groupId:d,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===s?s:s??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,i.U)(),[w,O]=(0,r.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=d){const e=v[d];null!=e&&e!==w&&h.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==w&&(N(t),O(a),null!=d&&k(d,String(a)))},E=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},h.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:E,onClick:j},s,{className:(0,o.Z)("tabs__item",p,s?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},9674:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(7294),r=n(4219),o=n.n(r),s=n(1563),l=n.n(s);const i=()=>a.createElement("span",{style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:"550px",flexDirection:"column"}},a.createElement("img",{src:"/img/playground-logo.png",style:{height:"50px",position:"absolute"}}),a.createElement(l(),{color:"#e89b25",loading:!0,size:70,"aria-label":"Loading Spinner","data-testid":"loader"}));function c(e){let{src:t}=e;return a.createElement(o(),{skeleton:a.createElement(i,null),src:t,height:"550px",className:"iframe",scrolling:"no"})}},217:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=n(3117),r=(n(7294),n(3905)),o=n(9674),s=n(5488),l=n(5162);const i={id:"fetch-usernames",title:"Fetching Usernames",displayed_sidebar:"developSidebar"},c=void 0,u={unversionedId:"develop/sdk/usernames/fetch-usernames",id:"develop/sdk/usernames/fetch-usernames",title:"Fetching Usernames",description:"This section covers how to fetch details about a particular username on the Subsocial blockchain.",source:"@site/docs/develop/sdk/usernames/FetchUsername.md",sourceDirName:"develop/sdk/usernames",slug:"/develop/sdk/usernames/fetch-usernames",permalink:"/docs/develop/sdk/usernames/fetch-usernames",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/usernames/FetchUsername.md",tags:[],version:"current",frontMatter:{id:"fetch-usernames",title:"Fetching Usernames",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Following And Unfollowing",permalink:"/docs/develop/sdk/follow/create-follow"},next:{title:"Registering Usernames",permalink:"/docs/develop/sdk/usernames/register-usernames"}},p={},m=[{value:"Usernames by owner",id:"usernames-by-owner",level:3},{value:"Details by username",id:"details-by-username",level:3},{value:"Username of a space",id:"username-of-a-space",level:3}],d={toc:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This section covers how to fetch details about a particular username on the Subsocial blockchain.")),(0,r.kt)("admonition",{title:"What are Subsocial Usernames?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Subsocial usernames allow you to map a human-readable name to your Substrate account. Read more ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/usernames"},"here"),".")),(0,r.kt)("p",null,"The Subsocial username entity allows you to map data like URLs, text, and spaces to a human readable text string. To explore these properties of an already registered username, we can use the following approaches:"),(0,r.kt)("h3",{id:"usernames-by-owner"},"Usernames by owner"),(0,r.kt)("p",null,"An owner is a substrate account that can hold up to 3 usernames for now. With the following method we can fetch all of them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.domainsByOwner(accountId: string): Promise<string[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const accountId = '5HYYeCa1Hae5YYGJ2pHskHLVrA7V5WjaSuSbntidhhD9qqgs'\nconst usernames = await api.blockchain.domainsByOwner(accountId)\nconsole.log(usernames)\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "tusharojha.sub",\n  "ilovepolka.sub",\n  "wagmi.sub"\n]\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Try it yourself, on the ",(0,r.kt)("a",{parentName:"p",href:"https://play.subsocial.network/reading-data/domains/by-owner"},"Subsocial Playground"),".")),(0,r.kt)(o.Z,{src:"https://play.subsocial.network/reading-data/domains/by-owner?iframe=true",mdxType:"IFrameViewer"}),(0,r.kt)("h3",{id:"details-by-username"},"Details by username"),(0,r.kt)("p",null,"A username entity holds a lot of values on-chain like created, expiresAt, owner, content, innerValue and much more."),(0,r.kt)("p",null,"Let's see how we can explore these properties by passing the username:"),(0,r.kt)(s.Z,{defaultValue:"single",values:[{label:"Single",value:"single"},{label:"Multiple",value:"multiple"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.registeredDomain(username: string): Promise<PalletDomainsDomainMeta[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const username = 'olehmell.sub'\nconst usernameDetails = await api.blockchain.registeredDomain(username)\nreturn usernameDetails\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "created": {\n      "account": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",\n      "block": 344181,\n      "time": 1649878698238\n    },\n    "updated": null,\n    "expiresAt": 2972181,\n    "owner": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",\n    "content": {\n      "none": null\n    },\n    "innerValue": {\n      "space": 1626\n    },\n    "outerValue": "0x68747470733a2f2f6769746875622e636f6d2f6f6c65686d656c6c",\n    "domainDeposit": 0,\n    "outerValueDeposit": 2700000000\n  }\n]\n'))),(0,r.kt)(l.Z,{value:"multiple",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.registeredDomains(usernames: string[]): Promise<PalletDomainsDomainMeta[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const usernames = ['olehmell.sub', 'ilovepolka.dot']\nconst usernameDetails = await api.blockchain.registeredDomain(usernames)\nreturn usernameDetails\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "created": {\n      "account": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",\n      "block": 344181,\n      "time": 1649878698238\n    },\n    "updated": null,\n    "expiresAt": 2972181,\n    "owner": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",\n    "content": {\n      "none": null\n    },\n    "innerValue": {\n      "space": 1626\n    },\n    "outerValue": "0x68747470733a2f2f6769746875622e636f6d2f6f6c65686d656c6c",\n    "domainDeposit": 0,\n    "outerValueDeposit": 2700000000\n  },\n  {\n    "created": {\n      "account": "3tXK2JzMuWPuMiboMMyYTfcYoN7NJwvHojgmBKiRDitKuMLo",\n      "block": 406861,\n      "time": 1651591092295\n    },\n    "updated": null,\n    "expiresAt": 3034861,\n    "owner": "3tXK2JzMuWPuMiboMMyYTfcYoN7NJwvHojgmBKiRDitKuMLo",\n    "content": {\n      "none": null\n    },\n    "innerValue": null,\n    "outerValue": null,\n    "domainDeposit": 10000000000,\n    "outerValueDeposit": 0\n  }\n]\n')))),(0,r.kt)(o.Z,{src:"https://play.subsocial.network/reading-data/domains/by-name?iframe=true",mdxType:"IFrameViewer"}),(0,r.kt)("h3",{id:"username-of-a-space"},"Username of a space"),(0,r.kt)("p",null,"A space can have username pointing to it. While building apps you might want to know about these usernames, and you can easily get them using the following method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.domainNameBySpaceId(accountId: string, spaceId: AnySpaceId): Promise<string>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const accountId = '3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8'\nconst spaceId = '1'\n\nconst username = await api.blockchain.domainNameBySpaceId(accountId, spaceId)\nreturn { userName: username }\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userName": "subsocial.sub"\n}\n')),(0,r.kt)(o.Z,{src:"https://play.subsocial.network/reading-data/domains/by-space?iframe=true",mdxType:"IFrameViewer"}))}f.isMDXComponent=!0},4219:(e,t,n)=>{var a,r,o,s,l,i=n(7294);a=e.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),r=e.exports,o="default",s=()=>u,l=e=>u=e,Object.defineProperty(r,o,{get:s,set:l,enumerable:!0,configurable:!0});var c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var u=e=>{const{skeleton:t,className:n}=e,a=c(e,["skeleton","className"]),[r,o]=(0,i.useState)(!0);return t||console.warn("react-loading-iframe: Rendered without skeleton, consider using an html iframe"),i.createElement(i.Fragment,null,r&&t,i.createElement("iframe",Object.assign({className:n},a,{style:{display:r?"none":"block",height:"100%",width:"100%"},onLoad:()=>{o(!1)}})))}},1563:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},l=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=s(n(7294)),c=n(6657),u=(0,n(10).createAnimation)("MoonLoader","100% {transform: rotate(360deg)}","moon");t.default=function(e){var t=e.loading,n=void 0===t||t,r=e.color,o=void 0===r?"#000000":r,s=e.speedMultiplier,p=void 0===s?1:s,m=e.cssOverride,d=void 0===m?{}:m,f=e.size,b=void 0===f?60:f,h=l(e,["loading","color","speedMultiplier","cssOverride","size"]),y=(0,c.parseLengthAndUnit)(b),g=y.value,v=y.unit,k=g/7,w=a({display:"inherit",position:"relative",width:"".concat("".concat(g+2*k).concat(v)),height:"".concat("".concat(g+2*k).concat(v)),animation:"".concat(u," ").concat(.6/p,"s 0s infinite linear"),animationFillMode:"forwards"},d),O=function(e){return{width:(0,c.cssValue)(e),height:(0,c.cssValue)(e),borderRadius:"100%"}},x=a(a({},O(k)),{backgroundColor:"".concat(o),opacity:"0.8",position:"absolute",top:"".concat("".concat(g/2-k/2).concat(v)),animation:"".concat(u," ").concat(.6/p,"s 0s infinite linear"),animationFillMode:"forwards"}),N=a(a({},O(g)),{border:"".concat(k,"px solid ").concat(o),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return n?i.createElement("span",a({style:w},h),i.createElement("span",{style:x}),i.createElement("span",{style:N})):null}},10:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var a="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var o=r.sheet,s="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(s,0),a}},6657:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"==typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var r=(e.match(/[^0-9]*$/)||"").toString();return n[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=a,t.cssValue=function(e){var t=a(e);return"".concat(t.value).concat(t.unit)}}}]);