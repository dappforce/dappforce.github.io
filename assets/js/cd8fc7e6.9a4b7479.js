"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[3083],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>b});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,b=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(6540),a=n(53);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(8168),a=n(6540),o=n(53),l=n(3104),u=n(6347),s=n(7485),i=n(1682),c=n(9466);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,i]=b({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=s??p;return f({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),m(e)}),[i,m,o]),tabValues:o}}var g=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==u&&(p(t),s(r))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},l,{className:(0,o.A)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":u===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=m(e);return a.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},a.createElement(v,(0,r.A)({},e,t)),a.createElement(h,(0,r.A)({},e,t)))}function k(e){const t=(0,g.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},2441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var r=n(8168),a=(n(6540),n(5680)),o=n(1470),l=n(9365);const u={id:"configuration",title:"Configuration",displayed_sidebar:"developSidebar"},s=void 0,i={unversionedId:"develop/sdk/configuration",id:"develop/sdk/configuration",title:"Configuration",description:"Subocial JS SDK Configuration | SDK Guide",source:"@site/docs/develop/sdk/Configuration.md",sourceDirName:"develop/sdk",slug:"/develop/sdk/configuration",permalink:"/docs/develop/sdk/configuration",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/Configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"API Types",permalink:"/docs/develop/sdk/apiTypes"},next:{title:"Connect To Subsocial",permalink:"/docs/develop/sdk/connectToSubsocial"}},c={},p=[],d={toc:p},f="wrapper";function b(e){let{components:t,...n}=e;return(0,a.yg)(f,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("head",null,(0,a.yg)("title",null,"Subocial JS SDK Configuration | SDK Guide")),(0,a.yg)("p",null,"Once you have the basic knowledge and understanding about how decentralized social networks work, it's time to get started building your own Social Dapp. To integrate Subsocial with your dApp, you have to add the following configuration settings (we recommend starting with the testnet):"),(0,a.yg)(o.A,{defaultValue:"testnet",values:[{label:"TestNet",value:"testnet"},{label:"MainNet",value:"mainnet"},{label:"xSocial",value:"xsocial"},{label:"LocalNet",value:"localnet"}],mdxType:"Tabs"},(0,a.yg)(l.A,{value:"mainnet",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const config = {\n  substrateNodeUrl: "wss://para.f3joule.space",\n  ipfsNodeUrl: "https://ipfs.subsocial.network",\n};\n')),(0,a.yg)("p",null,"Read more about Subsocial mainnet ",(0,a.yg)("a",{parentName:"p",href:"/docs/develop/mainnet"},"here"),".")),(0,a.yg)(l.A,{value:"testnet",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const config = {\n  substrateNodeUrl: "wss://rco-para.subsocial.network",\n  ipfsNodeUrl: "https://gw.crustfiles.app",\n};\n')),(0,a.yg)("p",null,"Read more about Subsocial testnet ",(0,a.yg)("a",{parentName:"p",href:"/docs/develop/testnet"},"here"),".")),(0,a.yg)(l.A,{value:"xsocial",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const config = {\n  substrateNodeUrl: "wss://xsocial.subsocial.network",\n  ipfsNodeUrl: "https://gw.crustfiles.app",\n};\n')),(0,a.yg)("p",null,"Read more about xSocial chain ",(0,a.yg)("a",{parentName:"p",href:"/docs/develop/xSocial"},"here"),".")),(0,a.yg)(l.A,{value:"localnet",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const config = {\n  substrateNodeUrl: "http://127.0.0.1:9944",\n  ipfsNodeUrl: "http://127.0.0.1:8080",\n};\n')),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Make sure to run local Subsocial & IPFS node before using these configs in your project.")))))}b.isMDXComponent=!0}}]);