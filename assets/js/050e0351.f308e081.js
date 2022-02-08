(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return f}));var n=o(0),c=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,c=function(e,t){if(null==e)return{};var o,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(c[o]=e[o]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(c[o]=e[o])}return c}var i=c.a.createContext({}),p=function(e){var t=c.a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(o),b=n,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||r;return o?c.a.createElement(f,s(s({ref:t},i),{},{components:o})):c.a.createElement(f,s({ref:t},i))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var i=2;i<r;i++)a[i]=o[i];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},64:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return p}));var n=o(3),c=o(7),r=(o(0),o(143)),a={id:"getting-follow",title:"Getting"},s={unversionedId:"sdk/quick-start/follow/getting-follow",id:"sdk/quick-start/follow/getting-follow",isDocsHomePage:!1,title:"Getting",description:"Check if user is following",source:"@site/docs/sdk/quick-start/follow/GettingFollow.md",slug:"/sdk/quick-start/follow/getting-follow",permalink:"/docs/sdk/quick-start/follow/getting-follow",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/sdk/quick-start/follow/GettingFollow.md",version:"current",sidebar:"someSidebar",previous:{title:"What is Follow?",permalink:"/docs/sdk/quick-start/follow/overview"},next:{title:"Following and unfollowing",permalink:"/docs/sdk/quick-start/follow/following"}},l=[{value:"Check if user is following",id:"check-if-user-is-following",children:[{value:"isSpaceFollower",id:"isspacefollower",children:[]},{value:"isAccountFollower",id:"isaccountfollower",children:[]}]},{value:"Find and load a list of space followers",id:"find-and-load-a-list-of-space-followers",children:[{value:"spacesFollowedByAccount",id:"spacesfollowedbyaccount",children:[]},{value:"spaceFollowers",id:"spacefollowers",children:[]}]},{value:"Find and load the list of followers and subscriptions",id:"find-and-load-the-list-of-followers-and-subscriptions",children:[{value:"accountFollowers",id:"accountfollowers",children:[]},{value:"accountsFollowedByAccount",id:"accountsfollowedbyaccount",children:[]}]}],i={toc:l};function p(e){var t=e.components,o=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"check-if-user-is-following"},"Check if user is following"),Object(r.b)("h3",{id:"isspacefollower"},"isSpaceFollower"),Object(r.b)("p",null,"Checking if an account is following space."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"substrateApi.isSpaceFollower(myAddress: AnyAccountId, spaceId: AnySpaceId): Promise<boolean>\n")),Object(r.b)("p",null,"Example: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const isFollower = await substrateApi.isSpaceFollower('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', idToBn('1'))\n")),Object(r.b)("h3",{id:"isaccountfollower"},"isAccountFollower"),Object(r.b)("p",null,"Checking if an account is following another account."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"SubstrateApi.isAccountFollower(myAddress: AnyAccountId, followedAddress: AnyAccountId): Promise<boolean>\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const isFollower = await substrateApi.isAccountFollower('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', idToBn('1'))\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(r.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid"},"AnyAccountId"),": ",Object(r.b)("em",{parentName:"p"},"AccountId")," | ",Object(r.b)("em",{parentName:"p"},"string"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\ud83c\udd78 ",Object(r.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},"AnySpaceId"),": ",Object(r.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},Object(r.b)("em",{parentName:"a"},"SpaceId"))," | ",Object(r.b)("em",{parentName:"p"},"BN"))),Object(r.b)("h2",{id:"find-and-load-a-list-of-space-followers"},"Find and load a list of space followers"),Object(r.b)("h3",{id:"spacesfollowedbyaccount"},"spacesFollowedByAccount"),Object(r.b)("p",null,"Get array of space ids that the user is following."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"readyApi.query.spaceFollows.spacesFollowedByAccount(account: AccountId)\n")),Object(r.b)("p",null,"Example: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { Vec } from \"@polkadot/types\";\nimport { SpaceId as SubstrateSpaceId } from '@subsocial/types/substrate/interfaces'\nimport { bnsToIds } from '@subsocial/utils'\n\nconst res = await substrateApi.query.spaceFollows.spacesFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8') as Vec<SubstrateSpaceId>\nconst followedSpaceIds = bnsToIds(res) // array of Space ids\n")),Object(r.b)("h3",{id:"spacefollowers"},"spaceFollowers"),Object(r.b)("p",null,"Get an array of account ids that follow the space."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"readyApi.query.spaceFollows.spaceFollowers(spaceId: SpaceId)\n")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { GenericAccountId as SubstrateAccountId } from '@polkadot/types'\nimport { SubstrateId } from '@subsocial/types';\n\nconst res = await substrateApi.query.spaceFollows.spaceFollowers('1') as Vec<SubstrateAccountId>\nconst followersBySpaceId = bnsToIds(res as unknown as SubstrateId[]) // array of Account ids\n")),Object(r.b)("h2",{id:"find-and-load-the-list-of-followers-and-subscriptions"},"Find and load the list of followers and subscriptions"),Object(r.b)("h3",{id:"accountfollowers"},"accountFollowers"),Object(r.b)("p",null,"Get an array of account ids that follow the account."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { GenericAccountId as SubstrateAccountId } from '@polkadot/types'\nimport { SubstrateId } from '@subsocial/types'\n\nconst res = await substrateApi.query.profileFollows.accountFollowers('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8') as Vec<SubstrateAccountId>\nconst accountFollowersIds = bnsToIds(res as unknown as SubstrateId[])\n")),Object(r.b)("h3",{id:"accountsfollowedbyaccount"},"accountsFollowedByAccount"),Object(r.b)("p",null,"Get an array of account ids that an account is following"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { GenericAccountId as SubstrateAccountId } from '@polkadot/types'\nimport { SubstrateId } from '@subsocial/types'\n\nconst res = await substrateApi.query.profileFollows.accountsFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8') as Vec<SubstrateAccountId>\nconst accountsFollowedByAccountIds = bnsToIds(res as unknown as SubstrateId[])\n")))}p.isMDXComponent=!0}}]);