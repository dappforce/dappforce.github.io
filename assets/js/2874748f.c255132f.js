(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?o.a.createElement(b,c(c({ref:t},s),{},{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(116)),i={id:"overview",title:"Overview"},c={unversionedId:"lightpaper/overview",id:"lightpaper/overview",isDocsHomePage:!1,title:"Overview",description:"Subsocial is an open platform that allows anyone to launch their own decentralized",source:"@site/docs/lightpaper/Overview.md",slug:"/lightpaper/overview",permalink:"/docs/lightpaper/overview",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/lightpaper/Overview.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/lightpaper/"},next:{title:"Architecture",permalink:"/docs/lightpaper/architecture/architecture"}},l=[],s={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Subsocial is an open platform that allows anyone to launch their own decentralized\ncensorship-resistant social networks and marketplaces. Subsocial will help you create your own\ndecentralized version of the popular sites we see today, such as Medium, Twitter, Reddit,\nInstagram, Discourse, Patreon, OnlyFans and more."),Object(a.b)("p",null,"Our software uses the Substrate blockchain framework and IPFS for decentralized file storage.\nThis enables personalized news feed and notifications, transparent reputation, full text\nsearching, rich content formats, without sacrificing SEO (search engine optimization)."),Object(a.b)("p",null,"Using Substrate also allows Subsocial to connect to the Polkadot and Kusama networks.\nPolkadot is a next-generation blockchain protocol that unites an entire network of purpose-built\nblockchains, allowing them to interoperate seamlessly at scale. Polkadot will provide\ncross-chain interaction as well as providing a shared security platform upon which Subsocial\ncan scale whilst remaining secure."),Object(a.b)("p",null,"Subsocial is social media unbounded."))}p.isMDXComponent=!0}}]);