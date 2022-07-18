(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{135:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return l})),t.d(o,"metadata",(function(){return r})),t.d(o,"toc",(function(){return s})),t.d(o,"default",(function(){return p}));var c=t(3),n=t(7),a=(t(0),t(162)),l={id:"fetch-follow",title:"Fetch Follows",displayed_sidebar:"developSidebar"},r={unversionedId:"develop/how-to-guides/follow/fetch-follow",id:"develop/how-to-guides/follow/fetch-follow",isDocsHomePage:!1,title:"Fetch Follows",description:"This section covers how to fetch follows on the Subsocial blockchain.",source:"@site/docs/develop/how-to-guides/follow/FetchFollow.md",slug:"/develop/how-to-guides/follow/fetch-follow",permalink:"/docs/develop/how-to-guides/follow/fetch-follow",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/follow/FetchFollow.md",version:"current",sidebar:"developSidebar",previous:{title:"Create, Update, And Delete Reactions",permalink:"/docs/develop/how-to-guides/reactions/create-reactions"},next:{title:"Following And Unfollowing",permalink:"/docs/develop/how-to-guides/follow/create-follow"}},s=[{value:"Check if a user is following a space or account",id:"check-if-a-user-is-following-a-space-or-account",children:[{value:"isSpaceFollower",id:"isspacefollower",children:[]},{value:"isAccountFollower",id:"isaccountfollower",children:[]}]},{value:"Find and load a list of space followers",id:"find-and-load-a-list-of-space-followers",children:[{value:"spacesFollowedByAccount",id:"spacesfollowedbyaccount",children:[]},{value:"spaceFollowers",id:"spacefollowers",children:[]}]},{value:"Find and load the list of followers and followings",id:"find-and-load-the-list-of-followers-and-followings",children:[{value:"accountFollowers",id:"accountfollowers",children:[]},{value:"accountsFollowedByAccount",id:"accountsfollowedbyaccount",children:[]}]}],i={toc:s};function p(e){var o=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},i,t,{components:o,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This section covers how to fetch follows on the Subsocial blockchain.")),Object(a.b)("h2",{id:"check-if-a-user-is-following-a-space-or-account"},"Check if a user is following a space or account"),Object(a.b)("h3",{id:"isspacefollower"},"isSpaceFollower"),Object(a.b)("p",null,"This checks if an account is following a particular space."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"substrateApi.isSpaceFollower(myAddress: AnyAccountId, spaceId: AnySpaceId): Promise<boolean>\n")),Object(a.b)("p",null,"Example: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const isFollower = await substrateApi.isSpaceFollower('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', idToBn('1'))\n")),Object(a.b)("h3",{id:"isaccountfollower"},"isAccountFollower"),Object(a.b)("p",null,"This checks if an account is following a particular account."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"SubstrateApi.isAccountFollower(myAddress: AnyAccountId, followedAddress: AnyAccountId): Promise<boolean>\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const isFollower = await substrateApi.isAccountFollower('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', idToBn('1'))\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(a.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid"},"AnyAccountId"),": ",Object(a.b)("em",{parentName:"p"},"AccountId")," | ",Object(a.b)("em",{parentName:"p"},"string"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\ud83c\udd78 ",Object(a.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},"AnySpaceId"),": ",Object(a.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},Object(a.b)("em",{parentName:"a"},"SpaceId"))," | ",Object(a.b)("em",{parentName:"p"},"BN"))),Object(a.b)("h2",{id:"find-and-load-a-list-of-space-followers"},"Find and load a list of space followers"),Object(a.b)("h3",{id:"spacesfollowedbyaccount"},"spacesFollowedByAccount"),Object(a.b)("p",null,"Get an array of space IDs that an account is following."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"readyApi.query.spaceFollows.spacesFollowedByAccount(account: AccountId)\n")),Object(a.b)("p",null,"Example: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Vec } from \"@polkadot/types\";\nimport { SpaceId as SubstrateSpaceId } from '@subsocial/types/substrate/interfaces'\nimport { bnsToIds } from '@subsocial/utils'\n\nconst res = await substrateApi.query.spaceFollows.spacesFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8') as Vec<SubstrateSpaceId>\nconst followedSpaceIds = bnsToIds(res) // array of Space ids\n")),Object(a.b)("h3",{id:"spacefollowers"},"spaceFollowers"),Object(a.b)("p",null,"Get an array of account IDs that follow a space."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"readyApi.query.spaceFollows.spaceFollowers(spaceId: SpaceId)\n")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { GenericAccountId as SubstrateAccountId } from '@polkadot/types'\nimport { SubstrateId } from '@subsocial/types';\n\nconst res = await substrateApi.query.spaceFollows.spaceFollowers('1') as Vec<SubstrateAccountId>\nconst followersBySpaceId = bnsToIds(res as unknown as SubstrateId[]) // array of Account ids\n")),Object(a.b)("h2",{id:"find-and-load-the-list-of-followers-and-followings"},"Find and load the list of followers and followings"),Object(a.b)("h3",{id:"accountfollowers"},"accountFollowers"),Object(a.b)("p",null,"Get an array of account IDs that follow an account."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { GenericAccountId as SubstrateAccountId } from '@polkadot/types'\nimport { SubstrateId } from '@subsocial/types'\n\nconst res = await substrateApi.query.profileFollows.accountFollowers('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8') as Vec<SubstrateAccountId>\nconst accountFollowersIds = bnsToIds(res as unknown as SubstrateId[])\n")),Object(a.b)("h3",{id:"accountsfollowedbyaccount"},"accountsFollowedByAccount"),Object(a.b)("p",null,"Get an array of account IDs that an account is following."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { GenericAccountId as SubstrateAccountId } from '@polkadot/types'\nimport { SubstrateId } from '@subsocial/types'\n\nconst res = await substrateApi.query.profileFollows.accountsFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8') as Vec<SubstrateAccountId>\nconst accountsFollowedByAccountIds = bnsToIds(res as unknown as SubstrateId[])\n")))}p.isMDXComponent=!0},162:function(e,o,t){"use strict";t.d(o,"a",(function(){return u})),t.d(o,"b",(function(){return f}));var c=t(0),n=t.n(c);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function l(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);o&&(c=c.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,c)}return t}function r(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,c,n=function(e,o){if(null==e)return{};var t,c,n={},a=Object.keys(e);for(c=0;c<a.length;c++)t=a[c],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)t=a[c],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=n.a.createContext({}),p=function(e){var o=n.a.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):r(r({},o),e)),t},u=function(e){var o=p(e.components);return n.a.createElement(i.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.a.createElement(n.a.Fragment,{},o)}},b=n.a.forwardRef((function(e,o){var t=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=c,f=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return t?n.a.createElement(f,r(r({ref:o},i),{},{components:t})):n.a.createElement(f,r({ref:o},i))}));function f(e,o){var t=arguments,c=o&&o.mdxType;if("string"==typeof e||c){var a=t.length,l=new Array(a);l[0]=b;var r={};for(var s in o)hasOwnProperty.call(o,s)&&(r[s]=o[s]);r.originalType=e,r.mdxType="string"==typeof e?e:c,l[1]=r;for(var i=2;i<a;i++)l[i]=t[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);