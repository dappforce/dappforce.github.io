"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[4314],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,h=p["".concat(i,".").concat(g)]||p[g]||d[g]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(6540),r=n(53);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(8168),r=n(6540),o=n(53),l=n(3104),s=n(6347),i=n(7485),u=n(1682),c=n(9466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:n,groupId:a}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=i??p;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var y=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),i(a))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:d},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function q(e){const t=m(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function w(e){const t=(0,y.A)();return r.createElement(q,(0,a.A)({key:String(t)},e))}},6464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(8168),r=(n(6540),n(5680)),o=n(1470),l=n(9365);const s={id:"subsocial-graqhql",title:"GraqhQL APIs",description:"Learn how to use Subsocial GraphQL APIs that can be used to do custom queries from the blockchain, allowing you to access indexed social data.",keywords:["GraphQL APIs","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},i=void 0,u={unversionedId:"develop/subsocial-graqhql",id:"develop/subsocial-graqhql",title:"GraqhQL APIs",description:"Learn how to use Subsocial GraphQL APIs that can be used to do custom queries from the blockchain, allowing you to access indexed social data.",source:"@site/docs/develop/SubsocialGraphQL.md",sourceDirName:"develop",slug:"/develop/subsocial-graqhql",permalink:"/docs/develop/subsocial-graqhql",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/SubsocialGraphQL.md",tags:[],version:"current",frontMatter:{id:"subsocial-graqhql",title:"GraqhQL APIs",description:"Learn how to use Subsocial GraphQL APIs that can be used to do custom queries from the blockchain, allowing you to access indexed social data.",keywords:["GraphQL APIs","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Playground",permalink:"/docs/develop/playground"},next:{title:"For Testnet",permalink:"/docs/develop/testnet"}},c={},p=[{value:"Getting Started",id:"getting-started",level:3},{value:"Setup",id:"setup",level:3},{value:"Creating Queries",id:"creating-queries",level:3},{value:"Running Queries",id:"running-queries",level:3},{value:"More Examples",id:"more-examples",level:2},{value:"News Feed",id:"news-feed",level:3},{value:"Get Notifications",id:"get-notifications",level:3}],d={toc:p},g="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("head",null,(0,r.yg)("title",null,"Configuring The GraphQL API client for Subsocial")),(0,r.yg)("p",null,"When you are building social apps, you need to fetch data quickly to provide a smooth experience for your users."),(0,r.yg)("p",null,"Subsocial provides you with the Subsocial GraphQL endpoint, which can be used to query the blockchain instantaneously."),(0,r.yg)("h3",{id:"getting-started"},"Getting Started"),(0,r.yg)("p",null,"You can add GraphQL and the Apollo client to a new or existing project."),(0,r.yg)("p",null,"To add create a new project, you can use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/develop/developer-quickstart"},"Subsocial Starter"),"."),(0,r.yg)("p",null,"Install the following dependencies:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add @apollo/client graphql\n")),(0,r.yg)("h3",{id:"setup"},"Setup"),(0,r.yg)(o.A,{defaultValue:"testnet",values:[{label:"TestNet",value:"testnet"},{label:"xSocial",value:"xSocial"},{label:"MainNet",value:"mainnet"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"mainnet",mdxType:"TabItem"},(0,r.yg)("p",null,"Our GraphQL API endpoint:\n",(0,r.yg)("a",{parentName:"p",href:"https://squid.subsquid.io/subsocial/graphql"},"https://squid.subsquid.io/subsocial/graphql")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { ApolloClient, InMemoryCache, gql } from '@apollo/client'\n\nconst API_URL = 'https://squid.subsquid.io/subsocial/graphql'\n\n/* create the API client */\nexport const client = new ApolloClient({\n  uri: API_URL,\n  cache: new InMemoryCache()\n})\n")),(0,r.yg)("p",null,"Read more about Subsocial mainnet ",(0,r.yg)("a",{parentName:"p",href:"/docs/develop/mainnet"},"here"),"."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Detailed docs on GraphQL API & query options can be found easily on the API Endpoint ",(0,r.yg)("a",{parentName:"p",href:"https://squid.subsquid.io/subsocial/graphql"},"here"),"."))),(0,r.yg)(l.A,{value:"testnet",mdxType:"TabItem"},(0,r.yg)("p",null,"Our GraphQL API endpoint:\n",(0,r.yg)("a",{parentName:"p",href:"https://squid.subsquid.io/soonsocial/graphql"},"https://squid.subsquid.io/soonsocial/graphql")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { ApolloClient, InMemoryCache, gql } from '@apollo/client'\n\nconst API_URL = 'https://squid.subsquid.io/soonsocial/graphql'\n\n/* create the API client */\nexport const client = new ApolloClient({\n  uri: API_URL,\n  cache: new InMemoryCache()\n})\n")),(0,r.yg)("p",null,"Read more about Subsocial testnet ",(0,r.yg)("a",{parentName:"p",href:"/docs/develop/testnet"},"here"),"."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Detailed docs on GraphQL API & query options can be found easily on the API Endpoint ",(0,r.yg)("a",{parentName:"p",href:"https://squid.subsquid.io/soonsocial/graphql"},"here"),"."))),(0,r.yg)(l.A,{value:"xSocial",mdxType:"TabItem"},(0,r.yg)("p",null,"Our GraphQL API endpoint:\n",(0,r.yg)("a",{parentName:"p",href:"https://squid.subsquid.io/xsocial/graphql"},"https://squid.subsquid.io/xsocial/graphql")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { ApolloClient, InMemoryCache, gql } from '@apollo/client'\n\nconst API_URL = 'https://squid.subsquid.io/xsocial/graphql'\n\n/* create the API client */\nexport const client = new ApolloClient({\n  uri: API_URL,\n  cache: new InMemoryCache()\n})\n")),(0,r.yg)("p",null,"Read more about xSocial chain ",(0,r.yg)("a",{parentName:"p",href:"/docs/develop/xSocial"},"here"),"."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Detailed docs on GraphQL API & query options can be found easily on the API Endpoint ",(0,r.yg)("a",{parentName:"p",href:"https://squid.subsquid.io/xsocial/graphql"},"here"),".")))),(0,r.yg)("h3",{id:"creating-queries"},"Creating Queries"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'\n/* define a GraphQL query  */\nexport const explorePosts = gql`\nquery MyQuery {\n  posts(orderBy: reactionsCount_DESC, limit: 3, where: {createdAtTime_gt: "2023-01-01T00:00:00.000000Z"}) {\n    content\n    title\n    reactionsCount\n    sharedPost {\n      id\n    }\n    createdAtTime\n    space {\n      id\n      name\n      summary\n    }\n  }\n}\n`\n')),(0,r.yg)("p",null,"The above query fetches the top 3 most liked posts of this year.\nYou can choose the data you need from the query, and leverage the power of GraphQL."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Use the GraphQL ",(0,r.yg)("a",{parentName:"p",href:"https://squid.subsquid.io/subsocial/graphql"},"Playground")," to explore the queries. ")),(0,r.yg)("h3",{id:"running-queries"},"Running Queries"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const response = await client.query({ query: explorePosts })\n")),(0,r.yg)("p",null,"Response:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "posts": [\n      {\n        "content": "bafyreigvgydzk42f2uynxlvrqdfmylhysopqgcctt6gxiwfc6jbmc5z73i",\n        "title": "Trustless Bitcoin on Polkadot... So What\'s Next? - Space Monkeys 081",\n        "reactionsCount": 2,\n        "sharedPost": null,\n        "createdAtTime": "2023-01-01T16:55:24.340000Z",\n        "space": {\n          "id": "4809",\n          "name": "The Kusamarian",\n          "summary": "Threads and Videos from the Jay Chrawnna vault"\n        }\n      },\n      {\n        "content": "bafyreieoory7axld6mw2i6gpwfxy3scesy4l65vawc7lcnwgbdsl6thbfy",\n        "title": null,\n        "reactionsCount": 1,\n        "sharedPost": null,\n        "createdAtTime": "2023-01-01T16:33:54.261000Z",\n        "space": {\n          "id": "10714",\n          "name": "polbatona",\n          "summary": "Web 3.0"\n        }\n      },\n      {\n        "content": "bafyreiacd3ae2maa3tbwu2eomsvysrfopowo6xmp4g2sprslfaapieayba",\n        "title": "December 2022 In\xa0Review",\n        "reactionsCount": 1,\n        "sharedPost": null,\n        "createdAtTime": "2023-01-03T15:13:36.362000Z",\n        "space": {\n          "id": "1",\n          "name": "Subsocial",\n          "summary": "Subsocial is a web3 social networking platform built to support the social apps of the future. These apps will feature built-in monetization methods and censorship resistance, where users own their content and social graphs.\\n\\nSubsocial is a one-of-a-kind in the Polkadot ecosystem, and designed..."\n        }\n      }\n    ]\n  }\n}\n')),(0,r.yg)("h2",{id:"more-examples"},"More Examples"),(0,r.yg)("h3",{id:"news-feed"},"News Feed"),(0,r.yg)("p",null,"Get a list of posts for an address's news feed."),(0,r.yg)("p",null,"This excludes: "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Posts made by themselves"),(0,r.yg)("li",{parentName:"ul"},"Posts that are technically comments")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"/* define a GraphQL query  */\nexport const getNewsFeed = gql`\n  query GetNewsFeeds($address: String!, $offset: Int = 0, $limit: Int!) {\n      accountById(id: $address) {\n        feeds(\n          limit: $limit\n          offset: $offset\n          orderBy: activity_date_DESC\n          where: { activity: { account: { id_not_eq: $address }, post: { isComment_eq: false } } }\n        ) {\n          activity {\n            post {\n              id\n              isComment\n              title\n            }\n          }\n        }\n      }\n    }\n`\n")),(0,r.yg)("h3",{id:"get-notifications"},"Get Notifications"),(0,r.yg)("p",null,"Get notifications data for a specific address."),(0,r.yg)("p",null,"You can set the aggregated property true to club the notifications together that are about the same post, for example: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"  A like post Z\n  B like post Z\n\n  You can club them togather like this:\n  {\n    aggregated: true\n    aggCount: 2\n    ...\n  }\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The amount of same notifcations that are aggregated is in aggCount.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"/* define a GraphQL query  */\nexport const getNotifications = gql`\n  query GetNotifications($address: String!, $offset: Int = 0, $limit: Int!) {\n      accountById(id: $address) {\n        notifications(\n          where: { activity: { aggregated_eq: true, account: { id_not_eq: $address } } }\n          limit: $limit\n          offset: $offset\n          orderBy: activity_date_DESC\n        ) {\n          id\n          activity {  \n            aggCount\n            aggregated\n            post {\n              id\n              isComment\n            }\n            space {\n              id\n            }\n            followingAccount {\n              id\n            }\n            reaction {\n              id\n            }\n          }\n        }\n      }\n    }\n`\n")))}h.isMDXComponent=!0}}]);