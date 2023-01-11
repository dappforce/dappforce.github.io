"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[6926],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),i=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=i(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return a?t.createElement(b,l(l({ref:n},c),{},{components:a})):t.createElement(b,l({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(7294),r=a(4334);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:a,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},n)}},5488:(e,n,a)=>{a.d(n,{Z:()=>d});var t=a(3117),r=a(7294),o=a(4334),l=a(2389),s=a(7392),u=a(7094),i=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:n,block:a,defaultValue:l,values:m,groupId:d,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),k=(0,s.l)(h,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,u.U)(),[w,N]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=d){const e=g[d];null!=e&&e!==w&&h.some((n=>n.value===e))&&N(e)}const T=e=>{const n=e.currentTarget,a=x.indexOf(n),t=h[a].value;t!==w&&(E(n),N(t),null!=d&&v(d,String(t)))},D=e=>{let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;n=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;n=x[a]??x[x.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},b)},h.map((e=>{let{value:n,label:a,attributes:l}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>x.push(e),onKeyDown:D,onClick:T},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===n})}),a??n)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function d(e){const n=(0,l.Z)();return r.createElement(m,(0,t.Z)({key:String(n)},e))}},217:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=a(3117),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const s={id:"fetch-usernames",title:"Fetching Usernames",displayed_sidebar:"developSidebar"},u=void 0,i={unversionedId:"develop/sdk/usernames/fetch-usernames",id:"develop/sdk/usernames/fetch-usernames",title:"Fetching Usernames",description:"This section covers how to fetch details about a particular username on the Subsocial blockchain.",source:"@site/docs/develop/sdk/usernames/FetchUsername.md",sourceDirName:"develop/sdk/usernames",slug:"/develop/sdk/usernames/fetch-usernames",permalink:"/docs/develop/sdk/usernames/fetch-usernames",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/sdk/usernames/FetchUsername.md",tags:[],version:"current",frontMatter:{id:"fetch-usernames",title:"Fetching Usernames",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Following And Unfollowing",permalink:"/docs/develop/sdk/follow/create-follow"},next:{title:"Registering Usernames",permalink:"/docs/develop/sdk/usernames/register-usernames"}},c={},p=[{value:"Usernames by owner",id:"usernames-by-owner",level:3},{value:"Details by username",id:"details-by-username",level:3},{value:"Username of a space",id:"username-of-a-space",level:3}],m={toc:p};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This section covers how to fetch details about a particular username on the Subsocial blockchain.")),(0,r.kt)("admonition",{title:"What are Subsocial Usernames?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Subsocial usernames allow you to map a human-readable name to your Substrate account. Read more ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/usernames"},"here"),".")),(0,r.kt)("p",null,"The Subsocial username entity allows you to map data like URLs, text, and spaces to a human readable text string. To explore these properties of an already registered username, we can use the following approaches:"),(0,r.kt)("h3",{id:"usernames-by-owner"},"Usernames by owner"),(0,r.kt)("p",null,"An owner is a substrate account that can hold up to 3 usernames for now. With the following method we can fetch all of them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.domainsByOwner(accountId: string): Promise<string[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const accountId = '5HYYeCa1Hae5YYGJ2pHskHLVrA7V5WjaSuSbntidhhD9qqgs'\nconst usernames = await api.blockchain.domainsByOwner(accountId)\nconsole.log(usernames)\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "tusharojha.sub",\n  "ilovepolka.sub",\n  "wagmi.sub"\n]\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Try it yourself, on the ",(0,r.kt)("a",{parentName:"p",href:"https://play.subsocial.network/reading-data/domains/by-owner"},"Subsocial Playground"),".")),(0,r.kt)("h3",{id:"details-by-username"},"Details by username"),(0,r.kt)("p",null,"A username entity holds a lot of values on-chain like created, expiresAt, owner, content, innerValue and much more."),(0,r.kt)("p",null,"Let's see how we can explore these properties by passing the username:"),(0,r.kt)(o.Z,{defaultValue:"single",values:[{label:"Single",value:"single"},{label:"Multiple",value:"multiple"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.registeredDomain(username: string): Promise<PalletDomainsDomainMeta[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const username = 'olehmell.sub'\nconst usernameDetails = await api.blockchain.registeredDomain(username)\nreturn usernameDetails\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "created": {\n      "account": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",\n      "block": 344181,\n      "time": 1649878698238\n    },\n    "updated": null,\n    "expiresAt": 2972181,\n    "owner": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",\n    "content": {\n      "none": null\n    },\n    "innerValue": {\n      "space": 1626\n    },\n    "outerValue": "0x68747470733a2f2f6769746875622e636f6d2f6f6c65686d656c6c",\n    "domainDeposit": 0,\n    "outerValueDeposit": 2700000000\n  }\n]\n'))),(0,r.kt)(l.Z,{value:"multiple",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.registeredDomains(usernames: string[]): Promise<PalletDomainsDomainMeta[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const usernames = ['olehmell.sub', 'ilovepolka.dot']\nconst usernameDetails = await api.blockchain.registeredDomain(usernames)\nreturn usernameDetails\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "created": {\n      "account": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",\n      "block": 344181,\n      "time": 1649878698238\n    },\n    "updated": null,\n    "expiresAt": 2972181,\n    "owner": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",\n    "content": {\n      "none": null\n    },\n    "innerValue": {\n      "space": 1626\n    },\n    "outerValue": "0x68747470733a2f2f6769746875622e636f6d2f6f6c65686d656c6c",\n    "domainDeposit": 0,\n    "outerValueDeposit": 2700000000\n  },\n  {\n    "created": {\n      "account": "3tXK2JzMuWPuMiboMMyYTfcYoN7NJwvHojgmBKiRDitKuMLo",\n      "block": 406861,\n      "time": 1651591092295\n    },\n    "updated": null,\n    "expiresAt": 3034861,\n    "owner": "3tXK2JzMuWPuMiboMMyYTfcYoN7NJwvHojgmBKiRDitKuMLo",\n    "content": {\n      "none": null\n    },\n    "innerValue": null,\n    "outerValue": null,\n    "domainDeposit": 10000000000,\n    "outerValueDeposit": 0\n  }\n]\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Try it yourself, on the ",(0,r.kt)("a",{parentName:"p",href:"https://play.subsocial.network/reading-data/domains/by-name"},"Subsocial Playground"),".")),(0,r.kt)("h3",{id:"username-of-a-space"},"Username of a space"),(0,r.kt)("p",null,"A space can have username pointing to it. While building apps you might want to know about these usernames, and you can easily get them using the following method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.domainNameBySpaceId(accountId: string, spaceId: AnySpaceId): Promise<string>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const accountId = '3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8'\nconst spaceId = '1'\n\nconst username = await api.blockchain.domainNameBySpaceId(accountId, spaceId)\nreturn { userName: username }\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userName": "subsocial.sub"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Try it yourself, on the ",(0,r.kt)("a",{parentName:"p",href:"https://play.subsocial.network/reading-data/domains/by-space"},"Subsocial Playground"),".")))}d.isMDXComponent=!0}}]);