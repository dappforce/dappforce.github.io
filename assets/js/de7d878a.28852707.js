"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[956],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(t),d=r,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(4334);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(3117),r=t(7294),o=t(4334),l=t(2389),s=t(7392),u=t(7094),i=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:n,block:t,defaultValue:l,values:m,groupId:d,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,s.l)(f,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,u.U)(),[w,N]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=d){const e=k[d];null!=e&&e!==w&&f.some((n=>n.value===e))&&N(e)}const T=e=>{const n=e.currentTarget,t=x.indexOf(n),a=f[t].value;a!==w&&(E(n),N(a),null!=d&&v(d,String(a)))},D=e=>{let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},b)},f.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>x.push(e),onKeyDown:D,onClick:T},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===n})}),t??n)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function d(e){const n=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},71:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(3117),r=(t(7294),t(3905)),o=t(5488),l=t(5162);const s={id:"fetch-usernames",title:"Fetching Usernames",displayed_sidebar:"developSidebar"},u=void 0,i={unversionedId:"develop/how-to-guides/usernames/fetch-usernames",id:"develop/how-to-guides/usernames/fetch-usernames",title:"Fetching Usernames",description:"This section covers how to fetch details about a particular username on the Subsocial blockchain.",source:"@site/docs/develop/how-to-guides/usernames/FetchUsername.md",sourceDirName:"develop/how-to-guides/usernames",slug:"/develop/how-to-guides/usernames/fetch-usernames",permalink:"/docs/develop/how-to-guides/usernames/fetch-usernames",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/usernames/FetchUsername.md",tags:[],version:"current",frontMatter:{id:"fetch-usernames",title:"Fetching Usernames",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Following And Unfollowing",permalink:"/docs/develop/how-to-guides/follow/create-follow"},next:{title:"Registering Usernames",permalink:"/docs/develop/how-to-guides/usernames/register-usernames"}},c={},p=[{value:"Usernames by owner",id:"usernames-by-owner",level:3},{value:"Details by username",id:"details-by-username",level:3},{value:"Username of a space",id:"username-of-a-space",level:3}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This section covers how to fetch details about a particular username on the Subsocial blockchain.")),(0,r.kt)("admonition",{title:"What are Subsocial Usernames?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Subsocial usernames allow you to map a human-readable name to your Substrate account. Read more ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/usernames"},"here"),".")),(0,r.kt)("p",null,"The Subsocial username entity allows you to map data like URLs, text, and spaces to a human readable text string. To explore these properties of an already registered username, we can use the following approaches:"),(0,r.kt)("h3",{id:"usernames-by-owner"},"Usernames by owner"),(0,r.kt)("p",null,"An owner is a substrate account that can hold up to 3 usernames for now. With the following method we can fetch all of them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.domainsByOwner(accountId: string): Promise<string[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const accountId = '5HYYeCa1Hae5YYGJ2pHskHLVrA7V5WjaSuSbntidhhD9qqgs'\nconst usernames = await api.blockchain.domainsByOwner(accountId)\nconsole.log(usernames)\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "tusharojha.sub",\n  "ilovepolka.sub",\n  "wagmi.sub"\n]\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Try it yourself, on the ",(0,r.kt)("a",{parentName:"p",href:"https://play.subsocial.network/reading-data/domains/by-owner"},"Subsocial Playground"),".")),(0,r.kt)("h3",{id:"details-by-username"},"Details by username"),(0,r.kt)("p",null,"A username entity holds a lot of values on-chain like created, expiresAt, owner, content, innerValue and much more."),(0,r.kt)("p",null,"Let's see how we can explore these properties by passing the username:"),(0,r.kt)(o.Z,{defaultValue:"single",values:[{label:"Single",value:"single"},{label:"Multiple",value:"multiple"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"single",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.registeredDomain(username: string): Promise<PalletDomainsDomainMeta[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const username = 'olehmell.sub'\nconst usernameDetails = await api.blockchain.registeredDomain(username)\nreturn usernameDetails\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "created": {\n      "account": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",\n      "block": 344181,\n      "time": 1649878698238\n    },\n    "updated": null,\n    "expiresAt": 2972181,\n    "owner": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",\n    "content": {\n      "none": null\n    },\n    "innerValue": {\n      "space": 1626\n    },\n    "outerValue": "0x68747470733a2f2f6769746875622e636f6d2f6f6c65686d656c6c",\n    "domainDeposit": 0,\n    "outerValueDeposit": 2700000000\n  }\n]\n'))),(0,r.kt)(l.Z,{value:"multiple",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.registeredDomains(usernames: string[]): Promise<PalletDomainsDomainMeta[]>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const usernames = ['olehmell.sub', 'ilovepolka.dot']\nconst usernameDetails = await api.blockchain.registeredDomain(usernames)\nreturn usernameDetails\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "created": {\n      "account": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",\n      "block": 344181,\n      "time": 1649878698238\n    },\n    "updated": null,\n    "expiresAt": 2972181,\n    "owner": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",\n    "content": {\n      "none": null\n    },\n    "innerValue": {\n      "space": 1626\n    },\n    "outerValue": "0x68747470733a2f2f6769746875622e636f6d2f6f6c65686d656c6c",\n    "domainDeposit": 0,\n    "outerValueDeposit": 2700000000\n  },\n  {\n    "created": {\n      "account": "3tXK2JzMuWPuMiboMMyYTfcYoN7NJwvHojgmBKiRDitKuMLo",\n      "block": 406861,\n      "time": 1651591092295\n    },\n    "updated": null,\n    "expiresAt": 3034861,\n    "owner": "3tXK2JzMuWPuMiboMMyYTfcYoN7NJwvHojgmBKiRDitKuMLo",\n    "content": {\n      "none": null\n    },\n    "innerValue": null,\n    "outerValue": null,\n    "domainDeposit": 10000000000,\n    "outerValueDeposit": 0\n  }\n]\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Try it yourself, on the ",(0,r.kt)("a",{parentName:"p",href:"https://play.subsocial.network/reading-data/domains/by-name"},"Subsocial Playground"),".")),(0,r.kt)("h3",{id:"username-of-a-space"},"Username of a space"),(0,r.kt)("p",null,"A space can have username pointing to it. While building apps you might want to know about these usernames, and you can easily get them using the following method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"api.blockchain.domainNameBySpaceId(accountId: string, spaceId: AnySpaceId): Promise<string>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const accountId = '3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8'\nconst spaceId = '1'\n\nconst username = await api.blockchain.domainNameBySpaceId(accountId, spaceId)\nreturn { userName: username }\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userName": "subsocial.sub"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Try it yourself, on the ",(0,r.kt)("a",{parentName:"p",href:"https://play.subsocial.network/reading-data/domains/by-space"},"Subsocial Playground"),".")))}d.isMDXComponent=!0}}]);