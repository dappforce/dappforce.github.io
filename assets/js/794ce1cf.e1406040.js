"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[8770],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,b=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(b,s(s({ref:t},p),{},{components:a})):n.createElement(b,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(4334);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(3117),r=a(7294),l=a(4334),s=a(2389),o=a(7392),i=a(7094),u=a(2466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:s,values:c,groupId:d,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,o.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,i.U)(),[N,w]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=d){const e=v[d];null!=e&&e!==N&&k.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=O.indexOf(t),n=k[a].value;n!==N&&(T(t),w(n),null!=d&&f(d,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},b)},k.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:S,onClick:x},s,{className:(0,l.Z)("tabs__item",m,s?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,s.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},2432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var n=a(3117),r=(a(7294),a(3905)),l=a(5488),s=a(5162);const o={id:"register-usernames",title:"Registering Usernames",displayed_sidebar:"developSidebar"},i=void 0,u={unversionedId:"develop/how-to-guides/usernames/register-usernames",id:"develop/how-to-guides/usernames/register-usernames",title:"Registering Usernames",description:"This section covers how to programmatically register Subsocial Usernames on the Subsocial blockchain.",source:"@site/docs/develop/how-to-guides/usernames/RegisterUsername.md",sourceDirName:"develop/how-to-guides/usernames",slug:"/develop/how-to-guides/usernames/register-usernames",permalink:"/docs/develop/how-to-guides/usernames/register-usernames",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/usernames/RegisterUsername.md",tags:[],version:"current",frontMatter:{id:"register-usernames",title:"Registering Usernames",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Fetching Usernames",permalink:"/docs/develop/how-to-guides/usernames/fetch-usernames"},next:{title:"Quick Reference",permalink:"/docs/develop/quick-reference"}},p={},m=[{value:"Registering usernames",id:"registering-usernames",level:3},{value:"Updating content",id:"updating-content",level:3},{value:"Updating values",id:"updating-values",level:3}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This section covers how to programmatically register Subsocial Usernames on the Subsocial blockchain.")),(0,r.kt)("admonition",{title:"What are Subsocial Usernames?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Subsocial usernames allow you to map a human-readable name to your Substrate account. Read more ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/usernames"},"here"),".")),(0,r.kt)("p",null,"To register a Subsocial username from a web UI, go to ",(0,r.kt)("a",{parentName:"p",href:"https://polkaverse.com/dd"},"https://polkaverse.com/dd"),"."),(0,r.kt)("h3",{id:"registering-usernames"},"Registering usernames"),(0,r.kt)("p",null,"To register new usernames, you need to pass a set of details to create the transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.substrateApi.tx.domains.registerDomain(fullDomain: Bytes | string | Uint8Array, content: SubsocialSupportContent | {\n                None: any;\n            } | {\n                Other: any;\n            } | {\n                IPFS: any;\n            } | string | Uint8Array, expiresIn: u32 | AnyNumber | Uint8Array)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"fullDomain")),(0,r.kt)("td",{parentName:"tr",align:null},"Full username like myname.sub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},"The content field can have a value like a string, IPFS content, a URL, or Subsocial defined object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"expiresIn")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of blocks after which a username expires.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const username = 'ramesh.sub'\nconst content = {\n  IPFS: 'my custom content'\n}\nconst expiresIn = 1000\n\nconst substrateApi = await api.substrateApi\nconst usernameTransaction = await substrateApi.tx.domains.registerDomain(username, content, expiresIn)\n")),(0,r.kt)("h3",{id:"updating-content"},"Updating content"),(0,r.kt)("p",null,"To set content for an existing username, you can use the following method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.substrateApi.tx.domains.setDomainContent(domain: Bytes | string | Uint8Array, content: SubsocialSupportContent | {\n                None: any;\n            } | {\n                Other: any;\n            } | {\n                IPFS: any;\n            } | string | Uint8Array)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},"Existing username like myname.sub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},"The content field can have a value like a string, IPFS content, a URL, or Subsocial defined object.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const username = 'ramesh.sub'\nconst content = {\n  IPFS: 'my new custom content'\n}\n\nconst substrateApi = await api.substrateApi\nconst usernameTransaction = await substrateApi.tx.domains.setDomainContent(username, content)\n")),(0,r.kt)("h3",{id:"updating-values"},"Updating values"),(0,r.kt)("p",null,"Each username entity has properties called innerValue and outerValue that can be set by the user. Generally, we use innerValue for referencing a particular space on the Subsocial blockchain and outerValue for websites or URLs."),(0,r.kt)("p",null,"To set values for an existing username, you can use the following method:"),(0,r.kt)(l.Z,{defaultValue:"inner",values:[{label:"Inner Value",value:"inner"},{label:"Outer Value",value:"outer"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"inner",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.substrateApi.tx.domains.setInnerValue(domain: Bytes | string | Uint8Array, valueOpt: Option<PalletDomainsInnerValue> | null | Uint8Array | PalletDomainsInnerValue | {\n                Account: any;\n            } | {\n                Space: any;\n            } | {\n                Post: any;\n            } | string)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},"Existing username like myname.sub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"valueOpt")),(0,r.kt)("td",{parentName:"tr",align:null},"The value opt can point to entities on the Subsocial blockchain like Space, Account, Post, etc.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const username = 'ramesh.sub'\nconst valueOpt = {\n  Space: '1'\n}\n\nconst substrateApi = await api.substrateApi\nconst usernameTransaction = await substrateApi.tx.domains.setInnerValue(username, valueOpt)\n"))),(0,r.kt)(s.Z,{value:"outer",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.substrateApi.tx.domains.setOuterValue(domain: Bytes | string | Uint8Array, valueOpt: Option<Bytes> | null | Uint8Array | Bytes | string)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},"Existing username like myname.sub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"valueOpt")),(0,r.kt)("td",{parentName:"tr",align:null},"The valueOpt field can have a value like a string, urls or it can be null too.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const username = 'ramesh.sub'\nconst valueOpt = 'https://polkaverse.com'\n\nconst substrateApi = await api.substrateApi\nconst usernameTransaction = await substrateApi.tx.domains.setOuterValue(username, valueOpt)\n")))))}d.isMDXComponent=!0}}]);