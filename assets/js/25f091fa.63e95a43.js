(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{159:function(e,o,t){"use strict";t.d(o,"a",(function(){return u})),t.d(o,"b",(function(){return f}));var n=t(0),l=t.n(n);function c(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){c(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function p(e,o){if(null==e)return{};var t,n,l=function(e,o){if(null==e)return{};var t,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],o.indexOf(t)>=0||(l[t]=e[t]);return l}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=l.a.createContext({}),i=function(e){var o=l.a.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},u=function(e){var o=i(e.components);return l.a.createElement(s.Provider,{value:o},e.children)},b={inlineCode:"code",wrapper:function(e){var o=e.children;return l.a.createElement(l.a.Fragment,{},o)}},d=l.a.forwardRef((function(e,o){var t=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(t),d=n,f=u["".concat(r,".").concat(d)]||u[d]||b[d]||c;return t?l.a.createElement(f,a(a({ref:o},s),{},{components:t})):l.a.createElement(f,a({ref:o},s))}));function f(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var c=t.length,r=new Array(c);r[0]=d;var a={};for(var p in o)hasOwnProperty.call(o,p)&&(a[p]=o[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,r[1]=a;for(var s=2;s<c;s++)r[s]=t[s];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return r})),t.d(o,"metadata",(function(){return a})),t.d(o,"toc",(function(){return p})),t.d(o,"default",(function(){return i}));var n=t(3),l=t(7),c=(t(0),t(159)),r={id:"create-follow",title:"Following And Unfollowing",displayed_sidebar:"developSidebar"},a={unversionedId:"develop/how-to-guides/follow/create-follow",id:"develop/how-to-guides/follow/create-follow",isDocsHomePage:!1,title:"Following And Unfollowing",description:"This section covers how to follow and unfollow on the Subsocial blockchain.",source:"@site/docs/develop/how-to-guides/follow/CreateFollow.md",slug:"/develop/how-to-guides/follow/create-follow",permalink:"/docs/develop/how-to-guides/follow/create-follow",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/follow/CreateFollow.md",version:"current",sidebar:"developSidebar",previous:{title:"Fetch Follows",permalink:"/docs/develop/how-to-guides/follow/fetch-follow"},next:{title:"Quick Reference",permalink:"/docs/develop/quick-reference"}},p=[{value:"Methods for profiles",id:"methods-for-profiles",children:[{value:"Follow An Account",id:"follow-an-account",children:[]},{value:"Unfollow An Account",id:"unfollow-an-account",children:[]}]},{value:"Methods for spaces",id:"methods-for-spaces",children:[{value:"Follow A Space",id:"follow-a-space",children:[]},{value:"Unfollow A Space",id:"unfollow-a-space",children:[]}]}],s={toc:p};function i(e){var o=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,t,{components:o,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"This section covers how to follow and unfollow on the Subsocial blockchain.")),Object(c.b)("h2",{id:"methods-for-profiles"},"Methods for profiles"),Object(c.b)("h3",{id:"follow-an-account"},"Follow An Account"),Object(c.b)("p",null,"Start following an account."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"substrateApi.tx.profileFollows.followAccount(AccountId: AnyAccountId)\n")),Object(c.b)("p",null,"Example: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"...\nconst tx = substrateApi.tx.profileFollows.followAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')\n\n...\n")),Object(c.b)("h3",{id:"unfollow-an-account"},"Unfollow An Account"),Object(c.b)("p",null,"Stop following an account."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"substrateApi.tx.profileFollows.unfollowAccount(AccountId: AnyAccountId)\n")),Object(c.b)("p",null,"Example: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"...\nconst tx = substrateApi.tx.profileFollows.unfollowAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')\n\n...\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid"},"AnyAccountId"),": ",Object(c.b)("em",{parentName:"p"},"AccountId")," | ",Object(c.b)("em",{parentName:"p"},"string"))),Object(c.b)("h2",{id:"methods-for-spaces"},"Methods for spaces"),Object(c.b)("h3",{id:"follow-a-space"},"Follow A Space"),Object(c.b)("p",null,"Start following a space."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"substrateApi.tx.spaceFollows.followSpace(SpaceId: AnySpaceId)\n")),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"...\nconst tx = substrateApi.tx.spaceFollows.followSpace('1')\n\n...\n")),Object(c.b)("h3",{id:"unfollow-a-space"},"Unfollow A Space"),Object(c.b)("p",null,"Stop following a space."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"substrateApi.tx.spaceFollows.unfollowSpace(SpaceId: AnySpaceId)\n")),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"...\nconst tx = substrateApi.tx.spaceFollows.unfollowSpace('1')\n\n...\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},"AnySpaceId"),": ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},Object(c.b)("em",{parentName:"a"},"SpaceId"))," | ",Object(c.b)("em",{parentName:"p"},"BN"))))}i.isMDXComponent=!0}}]);