(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(162)),o={id:"split-reputation",title:"Split Reputation",displayed_sidebar:"homeSidebar"},c={unversionedId:"basics/lightpaper/beyond-v1.0/split-reputation",id:"basics/lightpaper/beyond-v1.0/split-reputation",isDocsHomePage:!1,title:"Split Reputation",description:"One key mechanism that we are building is to enable reputation per space and per tag.",source:"@site/docs/basics/lightpaper/beyond-v1.0/SplitReputation.md",slug:"/basics/lightpaper/beyond-v1.0/split-reputation",permalink:"/docs/basics/lightpaper/beyond-v1.0/split-reputation",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/basics/lightpaper/beyond-v1.0/SplitReputation.md",version:"current",sidebar:"homeSidebar",previous:{title:"Advanced Moderation",permalink:"/docs/basics/lightpaper/beyond-v1.0/advanced-moderation"},next:{title:"Token Economics vs Token Distribution",permalink:"/docs/basics/tokenomics/economics-vs-distribution"}},p=[],s={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"One key mechanism that we are building is to enable reputation per space and per tag.\nCompare this to Reddit which only has one reputation system: general reputation for the whole\nwebsite, rather than a reputation level specific to individual subreddits. This generic\nkarma (reputation) does not accurately reflect where reputation is earned. Experts in\nfinancial markets are unlikely to be experts in surgery."),Object(i.b)("p",null,"What we are planning is more like the split reputation system on Stack Overflow (Stack Exchange).\nTaking this approach allows for advanced features using your specific reputation:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When voting on a poll, your reputation for that space can be used to add weight to your vote."),Object(i.b)("li",{parentName:"ul"},"When participating in a challenge or contest with incentives, reputation in a particular\nspace can be used as a multiplier to determine a share of the rewards. Fair rewards require\na specific reputation.")),Object(i.b)("p",null,"Given the customization that is enabled by smart contracts, spaces could extend or override the\nreputation system built into the base chain. Space owners or their community members can\ncreate alternative formulas for how to calculate reputation and how to use it."))}u.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(o,".").concat(b)]||l[b]||d[b]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);