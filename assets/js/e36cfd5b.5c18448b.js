(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(143)),s={id:"overview",title:"Overview"},i={unversionedId:"sdk/quick-start/overview",id:"sdk/quick-start/overview",isDocsHomePage:!1,title:"Overview",description:"Subsocial is a platform that allows anyone to launch their own decentralized censorship-resistant",source:"@site/docs/sdk/quick-start/Overview.md",slug:"/sdk/quick-start/overview",permalink:"/docs/sdk/quick-start/overview",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/sdk/quick-start/Overview.md",version:"current",sidebar:"someSidebar",previous:{title:"Flat API",permalink:"/docs/sdk/getting-started/flat-api"},next:{title:"How to connect to Subsocial",permalink:"/docs/sdk/quick-start/connection"}},c=[{value:"Example code",id:"example-code",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Subsocial is a platform that allows anyone to launch their own decentralized censorship-resistant\nsocial network."),Object(a.b)("h2",{id:"example-code"},"Example code"),Object(a.b)("p",null,"Here we are providing example code for interacting with subsocial sdk."),Object(a.b)("p",null,"Start with installing @subsocial/api"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"yarn add @subsocial/api\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { newFlatSubsocialApi } from '@subsocial/api'\nimport { bnsToIds, idToBn } from '@subsocial/utils'\n\nconst spaceId = '1'\nconst myAccount = '3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8'\n\nconst example = async () => {\n  const flatApi = await newFlatSubsocialApi({\n    substrateNodeUrl, // http://127.0.0.1:9944\n    offchainUrl,  // http://127.0.0.1:3001\n    ipfsNodeUrl // http://127.0.0.1:8080\n  })\n\n  // get a space\n  const space = await flatApi.findSpace({id: spaceId})\n\n  // get post ids\n  const postBns = await flatApi.subsocial.substrate.postIdsBySpaceId(idToBn(spaceId))\n  const postIds = bnsToIds(postBns).reverse();\n\n  const substrateApi = await flatApi.subsocial.substrate.api\n\n  // get reactions (upvote/downvote) by owner in post ids [use multi requerst from blockchain]\n  const tuples = postIds.map(postId => [ myAccount, postId ])\n  const reactionIds = await substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)\n  const reactions = await res.subsocial.substrate.findReactions(reactionIds as ReactionId[])\n\n  // get space owner\n  const spaceOwner = await flatApi.findProfile(space.struct.ownerId)\n\n  // get all owner space ids\n  const ownerSpacesBns = await flatApi.subsocial.substrate.spaceIdsByOwner(space.struct.ownerId)\n  const ownerSpacesIds = bnsToIds(ownerSpacesBns)\n\n  // get all owner post ids\n  const postIdsPromises = ownerSpacesIds.map(id => flatApi.subsocial.substrate.postIdsBySpaceId(idToBn(id)))\n  const postIdsArray = await Promise.all(postIdsPromises)\n  const postsIds = bnsToIds(postIdsArray.flat().sort((a, b) => b.sub(a).toNumber()))\n}\n")),Object(a.b)("p",null,"Lets explain the example. We first connected to subsocial using newFlatSubsocialApi function which\nneeds the substrate node url, offchain url and ipfs node url. After initialisation flatApi can be\nused to retrieve data from the node. We fetched a space and post ids by space id. After that we\nconnected to substrate api for getting reaction ids. In the next step, we got a space owner by\nretrieved id from the space struct. And finally we fetched owner posts by owner space ids. "),Object(a.b)("p",null,"You can learn more about these terms below and in ",Object(a.b)("a",{parentName:"p",href:"/docs/glossary/overview"},"Glossary")))}l.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(f,i(i({ref:t},p),{},{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);