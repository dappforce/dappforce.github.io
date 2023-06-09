"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[1285],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(a),d=r,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(3117),r=(a(7294),a(3905));const o={id:"applications",title:"Applications",displayed_sidebar:"homeSidebar"},i=void 0,s={unversionedId:"basics/lightpaper/architecture/applications",id:"basics/lightpaper/architecture/applications",title:"Applications",description:"One of the most critical parts of the Subsocial stack is the application layer.",source:"@site/docs/basics/lightpaper/architecture/Applications.md",sourceDirName:"basics/lightpaper/architecture",slug:"/basics/lightpaper/architecture/applications",permalink:"/docs/basics/lightpaper/architecture/applications",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/basics/lightpaper/architecture/Applications.md",tags:[],version:"current",frontMatter:{id:"applications",title:"Applications",displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar",previous:{title:"Not Your Keys \u2013 Not Your Data",permalink:"/docs/basics/lightpaper/architecture/not-your-keys-not-your-data"},next:{title:"Tips",permalink:"/docs/basics/lightpaper/architecture/monetization/tips"}},c={},l=[],p={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of the most critical parts of the Subsocial stack is the application layer.\nWithout applications, users would have no interface with which to use Subsocial."),(0,r.kt)("p",null,"Applications connect to Subsocial using the Subsocial SDK, allowing them to read to and write from the blockchain.\nThese apps can then, if desired, filter the content shown to their users to create a curated experience.\nFor example, an application could be launched to just focus on dogs,\nand the operators of the app would create a filter so that cats are not shown."),(0,r.kt)("p",null,"Every app on the Subsocial network has access to the full content and userbase present on the Subsocial network.\nThis means that new applications can be automatically populated with existing content, easing the launch process of new social apps.\nWith this in mind, apps will be competing in different market segments to provide users the best interface, experience, and cost."),(0,r.kt)("p",null,"It is likely that most applications will pay the transaction and storage fees (with tokens) for their users.\nThis creates a much smoother user experience as the users do not need to acquire tokens,\nand allows them to use our email and password sign-on solution if desired.\nApplications can still pass on the cost to the users through subscriptions, ads,\nor just a small fee for every action, but these could be paid with a credit card, another token entirely, or some other method."),(0,r.kt)("p",null,"Applications could also exist for other uses besides normal social networking.\nAs previously mentioned, an app like AirBnb could be created on Subsocial,\nwhich would only show rental listings that were created from that specific app, cutting out all of the other social noise on the network."),(0,r.kt)("p",null,"Another aspect that may vary between apps is the level of decentralization.\nOne app may require a crypto wallet and not pay fees, meaning their users have to acquire tokens on their own.\nA second app might allow you to login with an email and password, and handle transactions and costs for their users,\nat the expense of increased centralization risk.\nThis would be quite centralized, but probably appeal to our grandmothers much more than the other app. They could then offer the future option to transfer\nall of a user's content and NFTs to a new wallet that a user created, allowing the user to transition to a decentralized style."),(0,r.kt)("p",null,"The advantage is that, regardless of which application someone decides to use, they are still operating on an open and transparent network."))}u.isMDXComponent=!0}}]);