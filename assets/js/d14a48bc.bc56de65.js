"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[4008],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(3117),r=(n(7294),n(3905));const o={id:"subsocial-graqhql",title:"Subsocial GraqhQL",displayed_sidebar:"developSidebar"},i=void 0,s={unversionedId:"develop/subsocial-graqhql",id:"develop/subsocial-graqhql",title:"Subsocial GraqhQL",description:"When you are building social apps, you need to fetch data quickly to provide a smooth experience for your users.",source:"@site/docs/develop/SubsocialGraphQL.md",sourceDirName:"develop",slug:"/develop/subsocial-graqhql",permalink:"/docs/develop/subsocial-graqhql",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/SubsocialGraphQL.md",tags:[],version:"current",frontMatter:{id:"subsocial-graqhql",title:"Subsocial GraqhQL",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Playground",permalink:"/docs/develop/playground"},next:{title:"About The Testnet",permalink:"/docs/develop/testnet"}},l={},c=[{value:"Getting Started",id:"getting-started",level:3},{value:"Setup",id:"setup",level:3},{value:"Creating Queries",id:"creating-queries",level:3},{value:"Running Queries",id:"running-queries",level:3},{value:"More Examples",id:"more-examples",level:2},{value:"News Feed",id:"news-feed",level:3},{value:"Get Notifications",id:"get-notifications",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you are building social apps, you need to fetch data quickly to provide a smooth experience for your users."),(0,r.kt)("p",null,"Subsocial provides you with the Subsocial GraphQL endpoint, which can be used to query the blockchain instantaneously."),(0,r.kt)("h3",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"You can add GraphQL and the Apollo client to a new or existing project."),(0,r.kt)("p",null,"To add create a new project, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/developer-quickstart"},"Subsocial Starter"),"."),(0,r.kt)("p",null,"Install the following dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @apollo/client graphql\n")),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Our GraphQL API endpoint:\n",(0,r.kt)("a",{parentName:"p",href:"https://squid.subsquid.io/subsocial/graphql"},"https://squid.subsquid.io/subsocial/graphql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ApolloClient, InMemoryCache, gql } from '@apollo/client'\n\nconst API_URL = 'https://squid.subsquid.io/subsocial/graphql'\n\n/* create the API client */\nexport const client = new ApolloClient({\n  uri: API_URL,\n  cache: new InMemoryCache()\n})\n")),(0,r.kt)("h3",{id:"creating-queries"},"Creating Queries"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'\n/* define a GraphQL query  */\nexport const explorePosts = gql`\nquery MyQuery {\n  posts(orderBy: reactionsCount_DESC, limit: 3, where: {createdAtTime_gt: "2023-01-01T00:00:00.000000Z"}) {\n    content\n    title\n    reactionsCount\n    sharedPost {\n      id\n    }\n    createdAtTime\n    space {\n      id\n      name\n      summary\n    }\n  }\n}\n`\n')),(0,r.kt)("p",null,"The above query fetches the top 3 most liked posts of this year.\nYou can choose the data you need from the query, and leverage the power of GraphQL."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the GraphQL ",(0,r.kt)("a",{parentName:"p",href:"https://squid.subsquid.io/subsocial/graphql"},"Playground")," to explore the queries. ")),(0,r.kt)("h3",{id:"running-queries"},"Running Queries"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const response = await client.query({ query: explorePosts })\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "posts": [\n      {\n        "content": "bafyreigvgydzk42f2uynxlvrqdfmylhysopqgcctt6gxiwfc6jbmc5z73i",\n        "title": "Trustless Bitcoin on Polkadot... So What\'s Next? - Space Monkeys 081",\n        "reactionsCount": 2,\n        "sharedPost": null,\n        "createdAtTime": "2023-01-01T16:55:24.340000Z",\n        "space": {\n          "id": "4809",\n          "name": "The Kusamarian",\n          "summary": "Threads and Videos from the Jay Chrawnna vault"\n        }\n      },\n      {\n        "content": "bafyreieoory7axld6mw2i6gpwfxy3scesy4l65vawc7lcnwgbdsl6thbfy",\n        "title": null,\n        "reactionsCount": 1,\n        "sharedPost": null,\n        "createdAtTime": "2023-01-01T16:33:54.261000Z",\n        "space": {\n          "id": "10714",\n          "name": "polbatona",\n          "summary": "Web 3.0"\n        }\n      },\n      {\n        "content": "bafyreiacd3ae2maa3tbwu2eomsvysrfopowo6xmp4g2sprslfaapieayba",\n        "title": "December 2022 In\xa0Review",\n        "reactionsCount": 1,\n        "sharedPost": null,\n        "createdAtTime": "2023-01-03T15:13:36.362000Z",\n        "space": {\n          "id": "1",\n          "name": "Subsocial",\n          "summary": "Subsocial is a web3 social networking platform built to support the social apps of the future. These apps will feature built-in monetization methods and censorship resistance, where users own their content and social graphs.\\n\\nSubsocial is a one-of-a-kind in the Polkadot ecosystem, and designed..."\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"more-examples"},"More Examples"),(0,r.kt)("h3",{id:"news-feed"},"News Feed"),(0,r.kt)("p",null,"Get a list of posts for an address's news feed."),(0,r.kt)("p",null,"This excludes: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Posts made by themselves"),(0,r.kt)("li",{parentName:"ul"},"Posts that are technically comments")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"/* define a GraphQL query  */\nexport const getNewsFeed = gql`\n  query GetNewsFeeds($address: String!, $offset: Int = 0, $limit: Int!) {\n      accountById(id: $address) {\n        feeds(\n          limit: $limit\n          offset: $offset\n          orderBy: activity_date_DESC\n          where: { activity: { account: { id_not_eq: $address }, post: { isComment_eq: false } } }\n        ) {\n          activity {\n            post {\n              id\n              isComment\n              title\n            }\n          }\n        }\n      }\n    }\n`\n")),(0,r.kt)("h3",{id:"get-notifications"},"Get Notifications"),(0,r.kt)("p",null,"Get notifications data for a specific address."),(0,r.kt)("p",null,"You can set the aggregated property true to club the notifications together that are about the same post, for example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  A like post Z\n  B like post Z\n\n  You can club them togather like this:\n  {\n    aggregated: true\n    aggCount: 2\n    ...\n  }\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The amount of same notifcations that are aggregated is in aggCount.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"/* define a GraphQL query  */\nexport const getNotifications = gql`\n  query GetNotifications($address: String!, $offset: Int = 0, $limit: Int!) {\n      accountById(id: $address) {\n        notifications(\n          where: { activity: { aggregated_eq: true, account: { id_not_eq: $address } } }\n          limit: $limit\n          offset: $offset\n          orderBy: activity_date_DESC\n        ) {\n          id\n          activity {  \n            aggCount\n            aggregated\n            post {\n              id\n              isComment\n            }\n            space {\n              id\n            }\n            followingAccount {\n              id\n            }\n            reaction {\n              id\n            }\n          }\n        }\n      }\n    }\n`\n")))}p.isMDXComponent=!0}}]);