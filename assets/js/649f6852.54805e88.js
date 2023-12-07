"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[3897],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(a),d=r,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(b,s(s({ref:t},c),{},{components:a})):n.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),l=a(6010),s=a(2466),o=a(6550),u=a(1980),i=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,i]=b({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),g(e)}),[i,g,l]),tabValues:l}}var k=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==o&&(p(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},s,{className:(0,l.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},6746:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),s=a(5162);const o={id:"register-usernames",title:"Registering Usernames",displayed_sidebar:"developSidebar"},u=void 0,i={unversionedId:"develop/sdk/usernames/register-usernames",id:"develop/sdk/usernames/register-usernames",title:"Registering Usernames",description:"Registering Subsocial Usernames With The Subsocial JS SDK",source:"@site/docs/develop/sdk/usernames/RegisterUsername.md",sourceDirName:"develop/sdk/usernames",slug:"/develop/sdk/usernames/register-usernames",permalink:"/docs/develop/sdk/usernames/register-usernames",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/usernames/RegisterUsername.md",tags:[],version:"current",frontMatter:{id:"register-usernames",title:"Registering Usernames",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Fetching Usernames",permalink:"/docs/develop/sdk/usernames/fetch-usernames"},next:{title:"Fetch Roles & Permissions",permalink:"/docs/develop/sdk/roles/fetch-roles"}},c={},p=[{value:"Registering usernames",id:"registering-usernames",level:3},{value:"Updating content",id:"updating-content",level:3},{value:"Updating values",id:"updating-values",level:3}],m={toc:p},d="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Registering Subsocial Usernames With The Subsocial JS SDK")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This section covers how to programmatically register Subsocial Usernames on the Subsocial blockchain.")),(0,r.kt)("admonition",{title:"What are Subsocial Usernames?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Subsocial usernames allow you to map a human-readable name to your Substrate account. Read more ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/usernames"},"here"),".")),(0,r.kt)("p",null,"To register a Subsocial username from a web UI, go to ",(0,r.kt)("a",{parentName:"p",href:"https://polkaverse.com/dd"},"https://polkaverse.com/dd"),"."),(0,r.kt)("h3",{id:"registering-usernames"},"Registering usernames"),(0,r.kt)("p",null,"To register new usernames, you need to pass a set of details to create the transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.substrateApi.tx.domains.registerDomain(\n  fullDomain: Bytes | string | Uint8Array, \n  content: SubsocialSupportContent \n          | { None: any; } \n          | { Other: any; } \n          | { IPFS: any; } \n          | string | Uint8Array, \n  expiresIn: u32 | AnyNumber | Uint8Array)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"fullDomain")),(0,r.kt)("td",{parentName:"tr",align:null},"Full username like myname.sub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},"The content field can have a value like a string, IPFS content, a URL, or Subsocial defined object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"expiresIn")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of blocks after which a username expires.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const username = 'ramesh.sub'\nconst content = {\n  IPFS: 'my custom content'\n}\nconst expiresIn = 1000\n\nconst substrateApi = await api.substrateApi\nconst usernameTransaction = await substrateApi.tx.domains.registerDomain(username, content, expiresIn)\n")),(0,r.kt)("h3",{id:"updating-content"},"Updating content"),(0,r.kt)("p",null,"To set content for an existing username, you can use the following method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.substrateApi.tx.domains.setDomainContent(domain: Bytes | string | Uint8Array, content: SubsocialSupportContent | {\n                None: any;\n            } | {\n                Other: any;\n            } | {\n                IPFS: any;\n            } | string | Uint8Array)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},"Existing username like myname.sub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},"The content field can have a value like a string, IPFS content, a URL, or Subsocial defined object.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const username = 'ramesh.sub'\nconst content = {\n  IPFS: 'my new custom content'\n}\n\nconst substrateApi = await api.substrateApi\nconst usernameTransaction = await substrateApi.tx.domains.setDomainContent(username, content)\n")),(0,r.kt)("h3",{id:"updating-values"},"Updating values"),(0,r.kt)("p",null,"Each username entity has properties called innerValue and outerValue that can be set by the user. Generally, we use innerValue for referencing a particular space on the Subsocial blockchain and outerValue for websites or URLs."),(0,r.kt)("p",null,"To set values for an existing username, you can use the following method:"),(0,r.kt)(l.Z,{defaultValue:"inner",values:[{label:"Inner Value",value:"inner"},{label:"Outer Value",value:"outer"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"inner",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.substrateApi.tx.domains.setInnerValue(domain: Bytes | string | Uint8Array, valueOpt: Option<PalletDomainsInnerValue> | null | Uint8Array | PalletDomainsInnerValue | {\n                Account: any;\n            } | {\n                Space: any;\n            } | {\n                Post: any;\n            } | string)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},"Existing username like myname.sub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"valueOpt")),(0,r.kt)("td",{parentName:"tr",align:null},"The value opt can point to entities on the Subsocial blockchain like Space, Account, Post, etc.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const username = 'ramesh.sub'\nconst valueOpt = {\n  Space: '1'\n}\n\nconst substrateApi = await api.substrateApi\nconst usernameTransaction = await substrateApi.tx.domains.setInnerValue(username, valueOpt)\n"))),(0,r.kt)(s.Z,{value:"outer",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.substrateApi.tx.domains.setOuterValue(domain: Bytes | string | Uint8Array, valueOpt: Option<Bytes> | null | Uint8Array | Bytes | string)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},"Existing username like myname.sub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"valueOpt")),(0,r.kt)("td",{parentName:"tr",align:null},"The valueOpt field can have a value like a string, urls or it can be null too.")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const username = 'ramesh.sub'\nconst valueOpt = 'https://polkaverse.com'\n\nconst substrateApi = await api.substrateApi\nconst usernameTransaction = await substrateApi.tx.domains.setOuterValue(username, valueOpt)\n")))))}b.isMDXComponent=!0}}]);