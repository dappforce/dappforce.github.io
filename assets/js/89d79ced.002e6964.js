(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),s=(n(0),n(161)),i={id:"getting-comments",title:"Getting Comments"},c={unversionedId:"sdk/quick-start/comments/getting-comments",id:"sdk/quick-start/comments/getting-comments",isDocsHomePage:!1,title:"Getting Comments",description:"Get replies",source:"@site/docs/sdk/quick-start/comments/GettingComments.md",slug:"/sdk/quick-start/comments/getting-comments",permalink:"/docs/sdk/quick-start/comments/getting-comments",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/sdk/quick-start/comments/GettingComments.md",version:"current",sidebar:"someSidebar",previous:{title:"Posts With Details",permalink:"/docs/sdk/quick-start/posts/posts-with-details"},next:{title:"Creating And Updating Comments",permalink:"/docs/sdk/quick-start/comments/creating-comments"}},a=[{value:"Get replies",id:"get-replies",children:[]}],p={toc:a};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"get-replies"},"Get replies"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"substrateApi.getReplyIdsByPostId(id: AnyPostId): Promise<PostId[]>\n")),Object(s.b)("p",null,"Example: "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"import { idToBn } from \"@subsocial/utils\"\n\nconst substrate = flatApi.subsocial.substrate\n\n// Get reply ids (comments) by parent post id and fetch posts by ids\nconst replyIds = await substrate.getReplyIdsByPostId(idToBn('1'))\n\n// For getting comments use posts functions\nconst replies = await flatApi.findPublicPosts(replyIds)\n")))}u.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,f=l["".concat(i,".").concat(d)]||l[d]||m[d]||s;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<s;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);