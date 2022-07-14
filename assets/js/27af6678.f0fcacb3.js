(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{159:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(f,s(s({ref:t},l),{},{components:r})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(159)),c={id:"spaces-as-DAOs",title:"Spaces as DAOs",displayed_sidebar:"homeSidebar"},s={unversionedId:"basics/lightpaper/architecture/spaces-as-DAOs",id:"basics/lightpaper/architecture/spaces-as-DAOs",isDocsHomePage:!1,title:"Spaces as DAOs",description:"The functionality provided by the Roles & Permissions modules is reminiscent of a DAO\u2019s",source:"@site/docs/basics/lightpaper/architecture/SpacesAsDAOs.md",slug:"/basics/lightpaper/architecture/spaces-as-DAOs",permalink:"/docs/basics/lightpaper/architecture/spaces-as-DAOs",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/basics/lightpaper/architecture/SpacesAsDAOs.md",version:"current",sidebar:"homeSidebar",previous:{title:"Moderation",permalink:"/docs/basics/lightpaper/architecture/moderation"},next:{title:"Scalability",permalink:"/docs/basics/lightpaper/architecture/scalability"}},i=[],l={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The functionality provided by the Roles & Permissions modules is reminiscent of a DAO\u2019s\ncharacteristics. That is, a space on Subsocial could be run as a DAO. Subsocial allows multiple\nowners (via multisignature wallets) to collectively control and monetize content."),Object(o.b)("p",null,"Each space can have its own token, therefore space ownership can be represented as a stake\nin the space\u2019s token. Similarly, each space could evolve by its own governance mechanisms,\nusing the space token as a governance token. As a result of this, each space could have its own treasury\nthat\u2019s controlled by its token holders. A space could elect to sell ad space within the space,\nand split up the ad revenue proportionally among all holders of the space's token."),Object(o.b)("p",null,"Governance can be used to modify space permissions and roles, elect moderators, or even\ncollectively decide how to block unwanted content."))}p.isMDXComponent=!0}}]);