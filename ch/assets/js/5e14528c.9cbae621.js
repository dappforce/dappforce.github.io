(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,h=l["".concat(i,".").concat(f)]||l[f]||d[f]||o;return n?a.a.createElement(h,c(c({ref:t},u),{},{components:n})):a.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(115)),i={id:"parachain-vs-parathread",title:"Parachain vs Parathread"},c={unversionedId:"tokenomics/parachain-vs-parathread",id:"tokenomics/parachain-vs-parathread",isDocsHomePage:!1,title:"Parachain vs Parathread",description:"A chain developed with Substrate can at different points in its lifetime assume one of three",source:"@site/i18n/ch/docusaurus-plugin-content-docs/current/tokenomics/Parachain-vs-parathread.md",slug:"/tokenomics/parachain-vs-parathread",permalink:"/ch/docs/tokenomics/parachain-vs-parathread",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/tokenomics/Parachain-vs-parathread.md",version:"current",sidebar:"someSidebar",previous:{title:"Treasury",permalink:"/ch/docs/tokenomics/treasury"},next:{title:"Resources",permalink:"/ch/docs/tokenomics/resources"}},s=[],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A chain developed with Substrate can at different points in its lifetime assume one of three\nstates: an independent chain with a secured bridge, a parachain, or a parathread. (",Object(o.b)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/ru/learn-parathreads"},"source"),")")),Object(o.b)("p",null,"Subsocial is planning to be a parachain of Kusama, if that is successful then we will consider\nalso launching a parachain for Polkadot but provide no guarantee that will happen."),Object(o.b)("p",null,"If Subsocial is unsuccessful in launching a parachain, it will consider launching instead as a\nparathread. In that case, no tokens will be generated for the users who wished to participate in\nthe PLO (as the action was unsuccessful)."),Object(o.b)("p",null,"As a parathread we would need to purchase KSM or DOT to pay for block inclusion. To cover\nthis cost, one option would be to sell our native chain token."))}p.isMDXComponent=!0}}]);