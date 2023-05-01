"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[5026],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var o=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,s=function(e,t){if(null==e)return{};var a,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),b=s,f=d["".concat(l,".").concat(b)]||d[b]||u[b]||n;return a?o.createElement(f,i(i({ref:t},c),{},{components:a})):o.createElement(f,i({ref:t},c))}));function b(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var o=a(3117),s=(a(7294),a(3905));const n={id:"apiTypes",title:"API Types",displayed_sidebar:"developSidebar"},i=void 0,r={unversionedId:"develop/sdk/apiTypes",id:"develop/sdk/apiTypes",title:"API Types",description:"Understanding the API Types of Subsocial JS SDK",source:"@site/docs/develop/sdk/APITypes.md",sourceDirName:"develop/sdk",slug:"/develop/sdk/apiTypes",permalink:"/docs/develop/sdk/apiTypes",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/sdk/APITypes.md",tags:[],version:"current",frontMatter:{id:"apiTypes",title:"API Types",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Installation",permalink:"/docs/develop/sdk/installation"},next:{title:"Configuration",permalink:"/docs/develop/sdk/configuration"}},l={},p=[{value:"General API",id:"general-api",level:2},{value:"Base Subsocial API",id:"base-subsocial-api",level:2},{value:"SubsocialSubstrateApi",id:"subsocialsubstrateapi",level:2},{value:"SubsocialIpfsApi",id:"subsocialipfsapi",level:2},{value:"Off-chain",id:"off-chain",level:2},{value:"IPFS",id:"ipfs",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("title",null,"Understanding the API Types of Subsocial JS SDK")),(0,s.kt)("h2",{id:"general-api"},"General API"),(0,s.kt)("p",null,"Subsocial API creates a new connection to the blockchain and provides a list of methods that help in fetching and writing data on substrate pallets. It uses proper types for javascript and is easy for developing most of the social dapps."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"const api = new SubsocialApi.create(CONFIG);\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Check SubsocialApi types here: ",(0,s.kt)("a",{parentName:"p",href:"https://js-sdk-api.subsocial.network/classes/api_src_subsocial.SubsocialApi.html"},(0,s.kt)("em",{parentName:"a"},"SubsocialApi")))),(0,s.kt)("h2",{id:"base-subsocial-api"},"Base Subsocial API"),(0,s.kt)("p",null,"The base SubsocialApi provides you with detailed methods for interacting with Subsocial blockchain. "),(0,s.kt)("p",null,"Using this class, you can get all the data of posts, spaces and profiles from IPFS and the blockchain's storage with appropriate methods."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"You can access it from the SubsocialApi object like this: `api.base`.\n")),(0,s.kt)("h2",{id:"subsocialsubstrateapi"},"SubsocialSubstrateApi"),(0,s.kt)("p",null,"SubsocialSubstrateApi is a wrapper for connecting to a Subsocial Node with functions from Subsocial Pallets wrapped in convenient methods to call."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SubsocialSubstrateApi(props: SubstrateApiProps): SubsocialSubstrateApi\n")),(0,s.kt)("h2",{id:"subsocialipfsapi"},"SubsocialIpfsApi"),(0,s.kt)("p",null,"Aggregated API to work with IPFS: This gets the contents of spaces, posts, and profiles."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SubsocialIpfsApi(props: SubsocialIpfsProps): SubsocialIpfsApi\n")),(0,s.kt)("h2",{id:"off-chain"},"Off-chain"),(0,s.kt)("p",null,"Off-chain is a storage where data is built on the basis of blockchain events. This allows you to conveniently perform work that the blockchain itself does not allow."),(0,s.kt)("p",null,"It saves text data of blogs, posts and comments to IPFS, builds user feeds and notifications in Postgres,\nand supports full text search by indexing text data into an ElasticSeach database."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/dappforce/subsocial-offchain/"},"off-chain repository"))),(0,s.kt)("h2",{id:"ipfs"},"IPFS"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/"},"InterPlanetary File System (IPFS)")," is a decentralized storage network commonly used by blockchain projects looking for a storage solution. It is similar to a torrent network where users download content to their machines, and upload it to people that wish to access it. IPFS node operators are able to choose what content they host on their node. Subsocial uses IPFS for multimedia storage."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/"},"Learn more in the documentation"))))}u.isMDXComponent=!0}}]);