"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[1826],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return a?o.createElement(k,s(s({ref:t},l),{},{components:a})):o.createElement(k,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var p=2;p<r;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var o=a(3117),n=(a(7294),a(3905));const r={id:"create-reactions",title:"Create, Update, And Delete Reactions",displayed_sidebar:"developSidebar"},s=void 0,c={unversionedId:"develop/how-to-guides/reactions/create-reactions",id:"develop/how-to-guides/reactions/create-reactions",title:"Create, Update, And Delete Reactions",description:"This section covers how to create, update and delete reactions on the Subsocial blockchain.",source:"@site/docs/develop/how-to-guides/reactions/CreateReactions.md",sourceDirName:"develop/how-to-guides/reactions",slug:"/develop/how-to-guides/reactions/create-reactions",permalink:"/docs/develop/how-to-guides/reactions/create-reactions",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/reactions/CreateReactions.md",tags:[],version:"current",frontMatter:{id:"create-reactions",title:"Create, Update, And Delete Reactions",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Fetch Reactions",permalink:"/docs/develop/how-to-guides/reactions/fetch-reactions"},next:{title:"Fetch Follows",permalink:"/docs/develop/how-to-guides/follow/fetch-follow"}},i={},p=[{value:"Create a reaction",id:"create-a-reaction",level:2},{value:"Update a reaction",id:"update-a-reaction",level:2},{value:"Delete a reaction",id:"delete-a-reaction",level:2}],l={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This section covers how to create, update and delete reactions on the Subsocial blockchain.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const substrateApi = await api.substrateApi\n")),(0,n.kt)("h2",{id:"create-a-reaction"},"Create a reaction"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'substrateApi.tx.reactions.createPostReaction(postId: AnyPostId, kind: PalletReactionsReactionKind | "Upvote" | "Downvote" | Uint8Array)\n')),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const tx = substrateApi.tx.reactions.createPostReaction('1', 'Upvote')\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'\ud83c\udd83 ReactionKind: PalletReactionsReactionKind | "Upvote" | "Downvote" | Uint8Array')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},"AnyPostId"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html"},(0,n.kt)("em",{parentName:"a"},"PostId"))," | ",(0,n.kt)("em",{parentName:"p"},"BN"))),(0,n.kt)("h2",{id:"update-a-reaction"},"Update a reaction"),(0,n.kt)("p",null,"Change the type of reaction."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"substrateApi.tx.reactions.updatePostReaction(postId: AnyPostId, reactionId: ReactionId, newKind: ReactionType)\n")),(0,n.kt)("p",null,"Example: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const tx = substrateApi.tx.reactions.updatePostReaction('1', '53', 'Downvote')\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ReactionType: ",(0,n.kt)("em",{parentName:"p"},"'Upvote'")," | ",(0,n.kt)("em",{parentName:"p"},"'Downvote'"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},"AnyPostId"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html"},(0,n.kt)("em",{parentName:"a"},"PostId"))," | ",(0,n.kt)("em",{parentName:"p"},"BN"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyreactionid"},"AnyReactionId"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reactionid.html"},(0,n.kt)("em",{parentName:"a"},"ReactionId"))," | ",(0,n.kt)("em",{parentName:"p"},"BN"))),(0,n.kt)("h2",{id:"delete-a-reaction"},"Delete a reaction"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"substrateApi.tx.reactions.updatePostReaction(postId: AnyPostId, reactionId: ReactionId)\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const tx = substrateApi.tx.reactions.deletePostReaction('1', '53')\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},"AnyPostId"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html"},(0,n.kt)("em",{parentName:"a"},"PostId"))," | ",(0,n.kt)("em",{parentName:"p"},"BN"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyreactionid"},"AnyReactionId"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reactionid.html"},(0,n.kt)("em",{parentName:"a"},"ReactionId"))," | ",(0,n.kt)("em",{parentName:"p"},"BN"))))}d.isMDXComponent=!0}}]);