"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[5304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,y=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(3117),o=(n(7294),n(3905));const a={id:"feeds",title:"Feeds",displayed_sidebar:"developSidebar"},i=void 0,s={unversionedId:"develop/concepts/synthetic/feeds",id:"develop/concepts/synthetic/feeds",title:"Feeds",description:"Feeds consist of post activities which are created by accounts or published to spaces that you follow. Using this query, you can get personalized feeds for your users. The included activities are only creating posts and sharing posts. Comments are not included in feed.",source:"@site/docs/develop/concepts/synthetic/feeds.md",sourceDirName:"develop/concepts/synthetic",slug:"/develop/concepts/synthetic/feeds",permalink:"/docs/develop/concepts/synthetic/feeds",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/concepts/synthetic/feeds.md",tags:[],version:"current",frontMatter:{id:"feeds",title:"Feeds",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Activities",permalink:"/docs/develop/concepts/synthetic/activities"},next:{title:"Notifications",permalink:"/docs/develop/concepts/synthetic/notifications"}},c={},d=[{value:"Example queries",id:"example-queries",level:3},{value:"Get News Feeds for an account",id:"get-news-feeds-for-an-account",level:4},{value:"Get Feeds Count",id:"get-feeds-count",level:4}],l={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Feeds consist of post activities which are created by accounts or published to spaces that you follow. Using this query, you can get personalized feeds for your users. The included activities are only creating posts and sharing posts. Comments are not included in feed."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"newsFeeds")," query to get the feeds which can also be filtered by the account it belongs to. Or you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"accountById")," query and get the ",(0,o.kt)("inlineCode",{parentName:"p"},"feeds")," attribute."),(0,o.kt)("h3",{id:"example-queries"},"Example queries"),(0,o.kt)("h4",{id:"get-news-feeds-for-an-account"},"Get News Feeds for an account"),(0,o.kt)("p",null,"Both queries below will result in same data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetNewsFeeds($accountId: String!) {\n  newsFeeds(\n    where: { account: { id_eq: $accountId } }\n    orderBy: activity_date_DESC\n    limit: 10\n  ) {\n    activity {\n      # You can also get other activity data from here\n      post {\n        id\n        title\n        body\n      }\n    }\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetNewsFeeds($accountId: String!) {\n  accountById(id: $accountId) {\n    feeds(orderBy: activity_date_DESC, limit: 10) {\n      activity {\n        # You can also get other activity data from here\n        post {\n          id\n          title\n          body\n        }\n      }\n    }\n  }\n}\n")),(0,o.kt)("h4",{id:"get-feeds-count"},"Get Feeds Count"),(0,o.kt)("p",null,"You can also get the count of the feeds using ",(0,o.kt)("inlineCode",{parentName:"p"},"newsFeedsConnection")," query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetNewsFeedsCount($accountId: String!) {\n  newsFeedsConnection(\n    where: { account: { id_eq: $accountId } }\n    orderBy: activity_date_DESC\n  ) {\n    totalCount\n  }\n}\n")))}u.isMDXComponent=!0}}]);