"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[4989],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>y});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),l=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=l(n),f=a,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(y,r(r({ref:e},u),{},{components:n})):o.createElement(y,r({ref:e},u))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[d]="string"==typeof t?t:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3702:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const i={id:"notifications",title:"Notifications",displayed_sidebar:"developSidebar"},r=void 0,c={unversionedId:"develop/concepts/synthetic/notifications",id:"develop/concepts/synthetic/notifications",title:"Notifications",description:"Notifications consist of activities from other accounts which is related to your account. For example, if someone likes your post, or comments on your post, or shares your post, you will get a notification for that activity. You can use notifications query to get the notifications which can also be filtered by the account it belongs to. Or you can also use accountById query and get the notifications attribute.",source:"@site/docs/develop/concepts/synthetic/notifications.md",sourceDirName:"develop/concepts/synthetic",slug:"/develop/concepts/synthetic/notifications",permalink:"/docs/develop/concepts/synthetic/notifications",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/concepts/synthetic/notifications.md",tags:[],version:"current",frontMatter:{id:"notifications",title:"Notifications",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Feeds",permalink:"/docs/develop/concepts/synthetic/feeds"},next:{title:"Installation",permalink:"/docs/develop/sdk/installation"}},s={},l=[{value:"Example queries",id:"example-queries",level:3},{value:"Get Notifications for an account",id:"get-notifications-for-an-account",level:4},{value:"Get Feeds Count",id:"get-feeds-count",level:4}],u={toc:l},d="wrapper";function p(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Notifications consist of activities from other accounts which is related to your account. For example, if someone likes your post, or comments on your post, or shares your post, you will get a notification for that activity. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"notifications")," query to get the notifications which can also be filtered by the account it belongs to. Or you can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"accountById")," query and get the ",(0,a.kt)("inlineCode",{parentName:"p"},"notifications")," attribute."),(0,a.kt)("h3",{id:"example-queries"},"Example queries"),(0,a.kt)("h4",{id:"get-notifications-for-an-account"},"Get Notifications for an account"),(0,a.kt)("p",null,"Both queries below will result in same data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetNotifications($accountId: String!) {\n  notifications(\n    where: { account: { id_eq: $accountId } }\n    orderBy: activity_date_DESC\n    limit: 10\n  ) {\n    activity {\n      # You can also get other activity data from here\n      event\n      date\n      account {\n        id\n      }\n    }\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetNotifications($accountId: String!) {\n  accountById(id: $accountId) {\n    notifications(orderBy: activity_date_DESC, limit: 10) {\n      activity {\n        # You can also get other activity data from here\n        event\n        date\n        account {\n          id\n        }\n      }\n    }\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you want to aggregate similar notifications, you can filter the notifications by the aggregated value."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetNotifications($accountId: String!) {\n  notifications(\n    where: { account: { id_eq: $accountId }, aggregated_eq: true }\n    orderBy: activity_date_DESC\n    limit: 10\n  ) {\n    activity {\n      # You can also get other activity data from here\n      aggregated\n      aggCount\n\n      event\n      date\n      account {\n        id\n      }\n    }\n  }\n}\n")),(0,a.kt)("p",{parentName:"admonition"},"This way, you can use the data like below:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"Account {activity.account.id} and {activity.aggCount} others liked your post.\n"))),(0,a.kt)("h4",{id:"get-feeds-count"},"Get Feeds Count"),(0,a.kt)("p",null,"You can get the count of the notifications using ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationsConnection")," query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetNotificationsCount($accountId: String!) {\n  notificationsConnection(\n    where: { account: { id_eq: $accountId } }\n    orderBy: activity_date_DESC\n  ) {\n    totalCount\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"One trick you can use to get the unread notifications count is to use ",(0,a.kt)("inlineCode",{parentName:"p"},"notificationsConnection")," query and filter the notifications to only include activity with date more than the last read date."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetNotificationsCount($accountId: String!, $lastReadDate: DateTime!) {\n  notificationsConnection(\n    where: {\n      account: { id_eq: $accountId }\n      activity: { date_gt: $lastReadDate }\n    }\n    orderBy: activity_date_DESC\n  ) {\n    totalCount\n  }\n}\n")),(0,a.kt)("p",{parentName:"admonition"},"Example variables:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accountId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",\n  "lastReadDate": "2023-01-20T15:56:36.304Z"\n}\n'))))}p.isMDXComponent=!0}}]);