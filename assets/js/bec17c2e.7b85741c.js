(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(142)),i={id:"getting-reactions",title:"Getting Reactions"},c={unversionedId:"sdk/quick-start/reactions/getting-reactions",id:"sdk/quick-start/reactions/getting-reactions",isDocsHomePage:!1,title:"Getting Reactions",description:"Find and load an array of information about reactions from Subsocial blockchain by a given array of ids.",source:"@site/docs/sdk/quick-start/reactions/GettingReactions.md",slug:"/sdk/quick-start/reactions/getting-reactions",permalink:"/docs/sdk/quick-start/reactions/getting-reactions",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/sdk/quick-start/reactions/GettingReactions.md",version:"current",sidebar:"someSidebar",previous:{title:"What is Reaction?",permalink:"/docs/sdk/quick-start/reactions/overview"},next:{title:"Creating Reactions",permalink:"/docs/sdk/quick-start/reactions/creating-reactions"}},s=[{value:"Get reaction ids",id:"get-reaction-ids",children:[]},{value:"Get reactions",id:"get-reactions",children:[]},{value:"Example",id:"example",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Find and load an array of information about reactions from Subsocial blockchain by a given array of ids."),Object(o.b)("h2",{id:"get-reaction-ids"},"Get reaction ids"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"query")," allows for the querying of multiple storage entries and the combination thereof into a single result. This is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription."),Object(o.b)("h2",{id:"get-reactions"},"Get reactions"),Object(o.b)("p",null,"Get reactions (upvote/downvote) by owner in post ids (use multi request from blockchain)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"substrateApi.findReactions(ids: AnyReactionId[]): Promise<Reaction[]>\nsubstrateApi.findReaction(id: AnyReactionId): Promise<Reaction | undefined>\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyreactionid"},"AnyReactionId"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reactionid.html"},Object(o.b)("em",{parentName:"a"},"ReactionId"))," | ",Object(o.b)("em",{parentName:"p"},"BN")),Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd78 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html"},"Reaction"))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { ReactionId } from '@subsocial/types/substrate/interfaces';\n  \nconst myAccount = '3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8';\n\nconst example = async () =>  {\n  const substrate = await flatApi.subsocial.substrate\n  const substrateApi = await flatApi.subsocial.substrate.api\n  \n  const tuples = [ '1', '2', '3' ].map(postId => [ myAccount, postId ])\n  \n  const reactionIds = await substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)\n  const reactions = await substrate.findReactions(reactionIds as ReactionId[])\n}\n")))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);