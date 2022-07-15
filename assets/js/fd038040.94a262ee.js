(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{155:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return s})),a.d(e,"toc",(function(){return u})),a.d(e,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(159)),c={id:"substrate",title:"Substrate"},s={unversionedId:"tutorials/getting-started/account-setup/substrate",id:"tutorials/getting-started/account-setup/substrate",isDocsHomePage:!1,title:"Substrate",description:"Substrate",source:"@site/docs/tutorials/getting-started/account-setup/Substrate.md",slug:"/tutorials/getting-started/account-setup/substrate",permalink:"/docs/tutorials/getting-started/account-setup/substrate",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/tutorials/getting-started/account-setup/Substrate.md",version:"current",sidebar:"tutorialsSidebar",previous:{title:"Creating An Account",permalink:"/docs/tutorials/getting-started/account-setup/creating-an-account"},next:{title:"Intro",permalink:"/docs/tutorials/getting-started/our-web-app/intro"}},u=[{value:"Substrate",id:"substrate",children:[]}],i={toc:u};function l(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"substrate"},"Substrate"),Object(o.b)("p",null,"Substrate is a framework used to build blockchains. Polkadot and Kusama, and many other chains, are all built using Substrate.\nThe technical specifics are not important here, but you can ",Object(o.b)("a",{parentName:"p",href:"https://substrate.io/"},"read about them")," if you want to.\nWhat is important now is to learn how accounts work."),Object(o.b)("p",null,"Basically, when you make a Polkadot or Kusama account, or an account for any other Substrate-based blockchain,\nyou are actually making a Substrate account. That single Substrate account has accounts on every Substrate-based blockchain.\nSo, if you create a Polkadot account, you automatically create accounts for Kusama, Subsocial, Picasso, Zeitgeist, etc."),Object(o.b)("p",null,"Additionally, these accounts are all linked together.\nThis can best ",Object(o.b)("a",{parentName:"p",href:"https://sub.id/#/5E7sS6NaRTxPnUqN8W9dfh6nbdNrk5HZ9fiuAcYTdd2sTZbD"},"be seen using Sub.ID"),",\na tool built by the Subsocial team. We will look at an example account."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"*Note:")," Substrate addresses have certain prefixes depending on which chain they are for.*"),Object(o.b)("img",{src:"img/getting-started-5.png",width:"600"}),Object(o.b)("p",null,"At the top we can see the base Substrate address, with a prefix of 5. You can think of a Substrate account like a wheel.\nEach individual chain is a spoke on the wheel, and the Substrate address is at the center, connecting them all."),Object(o.b)("p",null,"Further down, we can see addresses and balances for a few Substrate-based chains, such as Polkadot, Kusama, Acala, and Astar.\nAs you can see, they all have different addresses. However, they are all part of the same Substrate account,\nand the owner of this account only sees one account in his polkadot.js extension, but is able to perform transactions on all of these networks."))}l.isMDXComponent=!0},159:function(t,e,a){"use strict";a.d(e,"a",(function(){return b})),a.d(e,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=r.a.createContext({}),l=function(t){var e=r.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},b=function(t){var e=l(t.components);return r.a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),b=l(a),d=n,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return a?r.a.createElement(f,s(s({ref:e},i),{},{components:a})):r.a.createElement(f,s({ref:e},i))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,c=new Array(o);c[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:n,c[1]=s;for(var i=2;i<o;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);