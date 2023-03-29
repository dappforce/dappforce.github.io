"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[4008],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),o=n(4334);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(3117),o=n(7294),r=n(4334),s=n(2389),l=n(7392),i=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:s,values:d,groupId:m,className:h}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,i.U)(),[q,w]=(0,o.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=v[m];null!=e&&e!==q&&b.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),a=b[n].value;a!==q&&(T(t),w(a),null!=m&&k(m,String(a)))},P=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},h)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:e=>N.push(e),onKeyDown:P,onClick:x},s,{className:(0,r.Z)("tabs__item",p,s?.className,{"tabs__item--active":q===t})}),n??t)}))),t?(0,o.cloneElement)(f.filter((e=>e.props.value===q))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==q})))))}function m(e){const t=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(3117),o=(n(7294),n(3905)),r=n(5488),s=n(5162);const l={id:"subsocial-graqhql",title:"GraqhQL APIs",displayed_sidebar:"developSidebar"},i=void 0,u={unversionedId:"develop/subsocial-graqhql",id:"develop/subsocial-graqhql",title:"GraqhQL APIs",description:"When you are building social apps, you need to fetch data quickly to provide a smooth experience for your users.",source:"@site/docs/develop/SubsocialGraphQL.md",sourceDirName:"develop",slug:"/develop/subsocial-graqhql",permalink:"/docs/develop/subsocial-graqhql",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/SubsocialGraphQL.md",tags:[],version:"current",frontMatter:{id:"subsocial-graqhql",title:"GraqhQL APIs",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Playground",permalink:"/docs/develop/playground"},next:{title:"For Testnet",permalink:"/docs/develop/testnet"}},c={},p=[{value:"Getting Started",id:"getting-started",level:3},{value:"Setup",id:"setup",level:3},{value:"Creating Queries",id:"creating-queries",level:3},{value:"Running Queries",id:"running-queries",level:3},{value:"More Examples",id:"more-examples",level:2},{value:"News Feed",id:"news-feed",level:3},{value:"Get Notifications",id:"get-notifications",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you are building social apps, you need to fetch data quickly to provide a smooth experience for your users."),(0,o.kt)("p",null,"Subsocial provides you with the Subsocial GraphQL endpoint, which can be used to query the blockchain instantaneously."),(0,o.kt)("h3",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"You can add GraphQL and the Apollo client to a new or existing project."),(0,o.kt)("p",null,"To add create a new project, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/developer-quickstart"},"Subsocial Starter"),"."),(0,o.kt)("p",null,"Install the following dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @apollo/client graphql\n")),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)(r.Z,{defaultValue:"testnet",values:[{label:"TestNet",value:"testnet"},{label:"MainNet",value:"mainnet"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"mainnet",mdxType:"TabItem"},(0,o.kt)("p",null,"Our GraphQL API endpoint:\n",(0,o.kt)("a",{parentName:"p",href:"https://squid.subsquid.io/subsocial/graphql"},"https://squid.subsquid.io/subsocial/graphql")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ApolloClient, InMemoryCache, gql } from '@apollo/client'\n\nconst API_URL = 'https://squid.subsquid.io/subsocial/graphql'\n\n/* create the API client */\nexport const client = new ApolloClient({\n  uri: API_URL,\n  cache: new InMemoryCache()\n})\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Detailed docs on GraphQL API & query options can be found easily on the API Endpoint ",(0,o.kt)("a",{parentName:"p",href:"https://squid.subsquid.io/subsocial/graphql"},"here"),"."))),(0,o.kt)(s.Z,{value:"testnet",mdxType:"TabItem"},(0,o.kt)("p",null,"Our GraphQL API endpoint:\n",(0,o.kt)("a",{parentName:"p",href:"https://squid.subsquid.io/soonsocial/graphql"},"https://squid.subsquid.io/soonsocial/graphql")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ApolloClient, InMemoryCache, gql } from '@apollo/client'\n\nconst API_URL = 'https://squid.subsquid.io/soonsocial/graphql'\n\n/* create the API client */\nexport const client = new ApolloClient({\n  uri: API_URL,\n  cache: new InMemoryCache()\n})\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Detailed docs on GraphQL API & query options can be found easily on the API Endpoint ",(0,o.kt)("a",{parentName:"p",href:"https://squid.subsquid.io/soonsocial/graphql"},"here"),".")))),(0,o.kt)("h3",{id:"creating-queries"},"Creating Queries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'\n/* define a GraphQL query  */\nexport const explorePosts = gql`\nquery MyQuery {\n  posts(orderBy: reactionsCount_DESC, limit: 3, where: {createdAtTime_gt: "2023-01-01T00:00:00.000000Z"}) {\n    content\n    title\n    reactionsCount\n    sharedPost {\n      id\n    }\n    createdAtTime\n    space {\n      id\n      name\n      summary\n    }\n  }\n}\n`\n')),(0,o.kt)("p",null,"The above query fetches the top 3 most liked posts of this year.\nYou can choose the data you need from the query, and leverage the power of GraphQL."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Use the GraphQL ",(0,o.kt)("a",{parentName:"p",href:"https://squid.subsquid.io/subsocial/graphql"},"Playground")," to explore the queries. ")),(0,o.kt)("h3",{id:"running-queries"},"Running Queries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const response = await client.query({ query: explorePosts })\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "posts": [\n      {\n        "content": "bafyreigvgydzk42f2uynxlvrqdfmylhysopqgcctt6gxiwfc6jbmc5z73i",\n        "title": "Trustless Bitcoin on Polkadot... So What\'s Next? - Space Monkeys 081",\n        "reactionsCount": 2,\n        "sharedPost": null,\n        "createdAtTime": "2023-01-01T16:55:24.340000Z",\n        "space": {\n          "id": "4809",\n          "name": "The Kusamarian",\n          "summary": "Threads and Videos from the Jay Chrawnna vault"\n        }\n      },\n      {\n        "content": "bafyreieoory7axld6mw2i6gpwfxy3scesy4l65vawc7lcnwgbdsl6thbfy",\n        "title": null,\n        "reactionsCount": 1,\n        "sharedPost": null,\n        "createdAtTime": "2023-01-01T16:33:54.261000Z",\n        "space": {\n          "id": "10714",\n          "name": "polbatona",\n          "summary": "Web 3.0"\n        }\n      },\n      {\n        "content": "bafyreiacd3ae2maa3tbwu2eomsvysrfopowo6xmp4g2sprslfaapieayba",\n        "title": "December 2022 In\xa0Review",\n        "reactionsCount": 1,\n        "sharedPost": null,\n        "createdAtTime": "2023-01-03T15:13:36.362000Z",\n        "space": {\n          "id": "1",\n          "name": "Subsocial",\n          "summary": "Subsocial is a web3 social networking platform built to support the social apps of the future. These apps will feature built-in monetization methods and censorship resistance, where users own their content and social graphs.\\n\\nSubsocial is a one-of-a-kind in the Polkadot ecosystem, and designed..."\n        }\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"more-examples"},"More Examples"),(0,o.kt)("h3",{id:"news-feed"},"News Feed"),(0,o.kt)("p",null,"Get a list of posts for an address's news feed."),(0,o.kt)("p",null,"This excludes: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Posts made by themselves"),(0,o.kt)("li",{parentName:"ul"},"Posts that are technically comments")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"/* define a GraphQL query  */\nexport const getNewsFeed = gql`\n  query GetNewsFeeds($address: String!, $offset: Int = 0, $limit: Int!) {\n      accountById(id: $address) {\n        feeds(\n          limit: $limit\n          offset: $offset\n          orderBy: activity_date_DESC\n          where: { activity: { account: { id_not_eq: $address }, post: { isComment_eq: false } } }\n        ) {\n          activity {\n            post {\n              id\n              isComment\n              title\n            }\n          }\n        }\n      }\n    }\n`\n")),(0,o.kt)("h3",{id:"get-notifications"},"Get Notifications"),(0,o.kt)("p",null,"Get notifications data for a specific address."),(0,o.kt)("p",null,"You can set the aggregated property true to club the notifications together that are about the same post, for example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  A like post Z\n  B like post Z\n\n  You can club them togather like this:\n  {\n    aggregated: true\n    aggCount: 2\n    ...\n  }\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount of same notifcations that are aggregated is in aggCount.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"/* define a GraphQL query  */\nexport const getNotifications = gql`\n  query GetNotifications($address: String!, $offset: Int = 0, $limit: Int!) {\n      accountById(id: $address) {\n        notifications(\n          where: { activity: { aggregated_eq: true, account: { id_not_eq: $address } } }\n          limit: $limit\n          offset: $offset\n          orderBy: activity_date_DESC\n        ) {\n          id\n          activity {  \n            aggCount\n            aggregated\n            post {\n              id\n              isComment\n            }\n            space {\n              id\n            }\n            followingAccount {\n              id\n            }\n            reaction {\n              id\n            }\n          }\n        }\n      }\n    }\n`\n")))}m.isMDXComponent=!0}}]);