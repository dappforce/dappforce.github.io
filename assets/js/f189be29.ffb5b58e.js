"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[418],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=i(a),m=s,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,l=new Array(o);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:s,l[1]=r;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),s=a(4334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(3117),s=a(7294),o=a(4334),l=a(2389),r=a(7392),c=a(7094),i=a(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:l,values:d,groupId:m,className:k}=e,f=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,r.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,c.U)(),[y,I]=(0,s.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=m){const e=v[m];null!=e&&e!==y&&b.some((t=>t.value===e))&&I(e)}const A=e=>{const t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==y&&(N(t),I(n),null!=m&&w(m,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,o.Z)("tabs-container",p)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},k)},b.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:C,onClick:A},l,{className:(0,o.Z)("tabs__item",u,l?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,s.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,l.Z)();return s.createElement(d,(0,n.Z)({key:String(t)},e))}},953:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(3117),s=(a(7294),a(3905)),o=a(5488),l=a(5162);const r={id:"sdk-cheatsheet",title:"SDK Cheatsheet",displayed_sidebar:"developSidebar"},c=void 0,i={unversionedId:"develop/sdk-cheatsheet",id:"develop/sdk-cheatsheet",title:"SDK Cheatsheet",description:"Here is a collection of the most commonly used methods within Subsocial SDK. For more in-depth look into this library, please reference the TypeDocs.",source:"@site/docs/develop/SDKCheatsheet.md",sourceDirName:"develop",slug:"/develop/sdk-cheatsheet",permalink:"/docs/develop/sdk-cheatsheet",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/SDKCheatsheet.md",tags:[],version:"current",frontMatter:{id:"sdk-cheatsheet",title:"SDK Cheatsheet",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Developer's FAQs",permalink:"/docs/develop/developers"},next:{title:"Playground",permalink:"/docs/develop/playground"}},p={},u=[{value:"Setup",id:"setup",level:2},{value:"Install",id:"install",level:3},{value:"Import",id:"import",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Signing and sending transactions",id:"signing-and-sending-transactions",level:2},{value:"Reading Data",id:"reading-data",level:2},{value:"Space",id:"space",level:3},{value:"Post",id:"post",level:3},{value:"Profile",id:"profile",level:3},{value:"Writing Data",id:"writing-data",level:2},{value:"Note",id:"note",level:3},{value:"Space",id:"space-1",level:3},{value:"Post",id:"post-1",level:3},{value:"Profile",id:"profile-1",level:3},{value:"Comments",id:"comments",level:2},{value:"Reading Comments",id:"reading-comments",level:3},{value:"Writing Comments",id:"writing-comments",level:3},{value:"Follows",id:"follows",level:2},{value:"Check if follower",id:"check-if-follower",level:3},{value:"Fetch list of followers",id:"fetch-list-of-followers",level:3},{value:"For Spaces",id:"for-spaces",level:4},{value:"For Accounts",id:"for-accounts",level:4},{value:"Follow / Unfollow",id:"follow--unfollow",level:3},{value:"For Spaces",id:"for-spaces-1",level:4},{value:"For Accounts",id:"for-accounts-1",level:4},{value:"Reactions",id:"reactions",level:2},{value:"Get all reactions",id:"get-all-reactions",level:3},{value:"Reacting to a post",id:"reacting-to-a-post",level:3}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Here is a collection of the most commonly used methods within Subsocial SDK. For more in-depth look into this library, please reference the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/index.html"},"TypeDocs"),".")),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("h3",{id:"install"},"Install"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @subsocial/api\n")),(0,s.kt)("p",null,"Add utils library:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @subsocial/utils\n")),(0,s.kt)("h3",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import { SubsocialApi } from "@subsocial/api";\n')),(0,s.kt)("h3",{id:"configuration"},"Configuration"),(0,s.kt)(o.Z,{defaultValue:"testnet",values:[{label:"TestNet",value:"testnet"},{label:"MainNet",value:"mainnet"},{label:"LocalNet",value:"localnet"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"mainnet",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const config = {\n  substrateNodeUrl: "wss://para.f3joule.space",\n  ipfsNodeUrl: "https://ipfs.subsocial.network",\n};\n'))),(0,s.kt)(l.Z,{value:"testnet",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const config = {\n  substrateNodeUrl: "wss://rco-para.subsocial.network",\n  ipfsNodeUrl: "https://gw.crustfiles.app",\n};\n'))),(0,s.kt)(l.Z,{value:"localnet",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const config = {\n  substrateNodeUrl: "http://127.0.0.1:9944",\n  ipfsNodeUrl: "http://127.0.0.1:8080",\n};\n')),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Make sure to run local Subsocial & IPFS node before using these configs in your project.")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const api = await SubsocialApi.create(config);\n")),(0,s.kt)("h2",{id:"signing-and-sending-transactions"},"Signing and sending transactions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Keyring } from "@polkadot/keyring";\n\nconst keyring = new Keyring({ type: "sr25519" });\nconst accountPair = keyring.addFromMnemonic("add your mnemonic here");\n\ntx.signAndSend(accountPair, async (result) => {\n  const { status } = result;\n\n  if (!result || !status) {\n    return;\n  }\n\n  if (status.isFinalized || status.isInBlock) {\n    const blockHash = status.isFinalized\n      ? status.asFinalized\n      : status.asInBlock;\n\n    console.log(`\u2705 Tx finalized. Block hash: ${blockHash.toString()}`);\n  } else if (result.isError) {\n    console.log(JSON.stringify(result));\n  } else {\n    console.log(`\u23f1 Current tx status: ${status.type}`);\n  }\n});\n')),(0,s.kt)("p",null,"Read more about signing & sending transactions ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/transactions"},"here"),"."),(0,s.kt)("h2",{id:"reading-data"},"Reading Data"),(0,s.kt)("h3",{id:"space"},"Space"),(0,s.kt)("p",null,"Space is the place where all content on SubSocial lives. It holds multiple posts from different people depending upon the permission. ",(0,s.kt)("a",{parentName:"p",href:"/docs/basics/glossary/overview#spaces"},"Read More")),(0,s.kt)(o.Z,{defaultValue:"byid",values:[{label:"By Id",value:"byid"},{label:"By Owner",value:"owner"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"byid",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const spaceId = 1;\nconst space = await api.findSpace({ id: spaceId });\n"))),(0,s.kt)(l.Z,{value:"owner",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const ownerAccountId = "<owner_account_public_key>";\n\n// Fetching ids of all the spaces by owner.\nconst spaceIds = await api.blockchain.spaceIdsByOwner(ownerAccountId);\n\n// Fetching space data from all ids.\nconst spaces = await api.base.findSpaces({ ids: spaceIds });\n')))),(0,s.kt)("p",null,"Check full docs ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/spaces/fetch-spaces"},"here"),"."),(0,s.kt)("h3",{id:"post"},"Post"),(0,s.kt)("p",null,"Post is the piece of content that provides value for the readers. It can be some written text, an image, or a video. ",(0,s.kt)("a",{parentName:"p",href:"/docs/basics/glossary/overview#posts"},"Read More")),(0,s.kt)(o.Z,{defaultValue:"byid",values:[{label:"By Id",value:"byid"},{label:"By Space Id",value:"byspaceid"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"byid",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const postId = 1;\nconst post = await api.findPost({ id: postId });\n"))),(0,s.kt)(l.Z,{value:"byspaceid",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const spaceId = 1;\nconst postIds = await api.blockchain.postIdsBySpaceId(spaceId);\n\nconst posts = await api.base.findPosts({ ids: postIds });\n")))),(0,s.kt)("p",null,"Check full docs ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/posts/fetch-posts"},"here"),"."),(0,s.kt)("h3",{id:"profile"},"Profile"),(0,s.kt)("p",null,"Profile is linked to your Subsocial account address, and is an overview of your activity on Subsocial. You can set a profile picture and a username for your account, as well as a personal website link.\n",(0,s.kt)("a",{parentName:"p",href:"/docs/basics/glossary/overview#profile"},"Read More")),(0,s.kt)(o.Z,{defaultValue:"singleprofile",values:[{label:"Single Account",value:"singleprofile"},{label:"Multiple Accounts",value:"multipleprofiles"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"singleprofile",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const accountId = "<account_public_key>";\nconst profile = await api.base.findProfileSpace(accountId);\n'))),(0,s.kt)(l.Z,{value:"multipleprofiles",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const accountIds = ["<account_public_key_1>", "<account_public_key_2>"];\nconst profiles = await api.base.findProfileSpaces(accountIds);\n')))),(0,s.kt)("p",null,"Check full docs ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/profiles/fetch-profiles"},"here"),"."),(0,s.kt)("h2",{id:"writing-data"},"Writing Data"),(0,s.kt)("h3",{id:"note"},"Note"),(0,s.kt)("p",null,"To store data on IPFS, it is necessary to set up a CRUST IPFS account and push the data from your account. "),(0,s.kt)("p",null,"You set authHeader and setup with Subsocial SDK like this:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This is only required for the Testnet. On the Mainnet, this will not work.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const authHeader = 'c3ViLTVGQTluUURWZzI2N0RFZDhtMVp5cFhMQm52TjdTRnhZd1Y3bmRxU1lHaU45VFRwdToweDEwMmQ3ZmJhYWQwZGUwNzFjNDFmM2NjYzQzYmQ0NzIxNzFkZGFiYWM0MzEzZTc5YTY3ZWExOWM0OWFlNjgyZjY0YWUxMmRlY2YyNzhjNTEwZGY4YzZjZTZhYzdlZTEwNzY2N2YzYTBjZjM5OGUxN2VhMzAyMmRkNmEyYjc1OTBi';\n\napi.ipfs.setWriteHeaders({\n  authorization: \"Basic \" + authHeader,\n});\n")),(0,s.kt)("h3",{id:"space-1"},"Space"),(0,s.kt)("p",null,"Add following import statement:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { IpfsContent, OptionBool } from "@subsocial/api/substrate/wrappers";\n')),(0,s.kt)("p",null,"Storing space details in IPFS, and generating a CID."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const ipfsImageCid = await api.ipfs.saveFile(file);\n\nconst cid = await ipfs.saveContent({\n  about:\n    "Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS",\n  image: ipfsImageCid,\n  name: "Subsocial",\n  tags: ["subsocial"],\n});\n')),(0,s.kt)("p",null,"Creating a Space transaction object"),(0,s.kt)(o.Z,{defaultValue:"create",values:[{label:"Create Space",value:"create"},{label:"Update Space",value:"update"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"create",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const substrateApi = await api.substrateApi;\nconst spaceTransaction = substrateApi.tx.spaces.createSpace(\n  IpfsContent(cid),\n  null // Permissions config (optional)\n);\n"))),(0,s.kt)(l.Z,{value:"update",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const substrateApi = await api.substrateApi;\nconst update = {\n  content: IpfsContent(cid),\n  hidden: new OptionBool(true),\n};\n\nconst spaceTransaction = substrateApi.tx.spaces.updateSpace("1", update);\n')))),(0,s.kt)("p",null,"Sign and send the transaction, ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/transactions"},"Check Here")),(0,s.kt)("p",null,"Check the full docs ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/spaces/create-spaces"},"here"),"."),(0,s.kt)("h3",{id:"post-1"},"Post"),(0,s.kt)("p",null,"Add following import statement:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { IpfsContent, OptionBool } from "@subsocial/api/substrate/wrappers";\n')),(0,s.kt)("p",null,"Storing post details in IPFS, and generating a CID."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const ipfsImageCid = await api.ipfs.saveFile(file);\n\nconst cid = await ipfs.saveContent({\n  title: "What is Subsocial?",\n  image: ipfsImageCid,\n  tags: ["Hello world", "FAQ"],\n  body: "Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS.",\n});\n')),(0,s.kt)("p",null,"Creating a post transaction object"),(0,s.kt)(o.Z,{defaultValue:"regular",values:[{label:"Regular Post",value:"regular"},{label:"Shared Post",value:"shared"},{label:"Update Post",value:"update"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"regular",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const spaceId = "1"; // The space in which you\'re posting.\nconst substrateApi = await api.substrateApi;\nconst postTransaction = substrateApi.tx.posts.createPost(\n  spaceId,\n  { RegularPost: null }, // Creates a regular post.\n  IpfsContent(cid)\n);\n'))),(0,s.kt)(l.Z,{value:"shared",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const spaceId = "1"; // The space in which you\'re posting.\nconst parentPostId = "2"; // The original post you want to share.\n\n// Creating new sharedPostCid having shared message.\nconst sharedPostCid = await ipfs.saveContent({\n  body: "Keep up the good work!",\n});\n\nconst substrateApi = await api.substrateApi;\nconst postTransaction = substrateApi.tx.posts.createPost(\n  spaceId,\n  { SharedPost: parentPostId }, // Creates a shared post.\n  IpfsContent(sharedPostCid)\n);\n'))),(0,s.kt)(l.Z,{value:"update",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const postId = "7"; // Id of post which you want to update.\nconst substrateApi = await api.substrateApi;\n\nconst update = {\n  content: IpfsContent(cid),\n  hidden: new OptionBool(true),\n};\n\nconst postTransaction = substrateApi.tx.posts.updatePost(postId, update);\n')))),(0,s.kt)("p",null,"Sign and send the transaction, ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/transactions"},"Check Here")),(0,s.kt)("p",null,"Check the full docs ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/posts/create-posts"},"here"),"."),(0,s.kt)("h3",{id:"profile-1"},"Profile"),(0,s.kt)("p",null,"Add the following import statement:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { IpfsContent } from "@subsocial/api/substrate/wrappers";\n')),(0,s.kt)("p",null,"Storing profile details in IPFS, and generating a CID to add on blockchain:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const ipfsImageCid = await api.ipfs.saveFile(file);\nconst cid = await ipfs.saveContent({\n  about: "Subsocial official account.",\n  avatar: ipfsImageCid,\n  name: "Subsocial",\n});\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Profiles in Subsocial is a simple space with it's Id marked on the blockchain to represent as profile.")),(0,s.kt)("p",null,"Now, create a new space as mentioned ",(0,s.kt)("a",{parentName:"p",href:"http://docs.subsocial.network/docs/develop/sdk-cheatsheet#space-1"},"here"),", so we can mark it as a profile."),(0,s.kt)("p",null,"Creating a profile object:"),(0,s.kt)(o.Z,{defaultValue:"createprofile",values:[{label:"Create Profile",value:"createprofile"},{label:"Reset Profile",value:"updateprofile"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"createprofile",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const substrateApi = await api.substrateApi;\n\nconst spaceId = 3232; // The Id of space you want to mark as profile.\nconst profileTransaction = substrateApi.tx.profiles.setProfile(spaceId);\n"))),(0,s.kt)(l.Z,{value:"updateprofile",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const profileTransaction = substrateApi.tx.profiles.resetProfile();\n")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To change profile data, update the profile space from it's id.")),(0,s.kt)("p",null,"Sign and send the transaction, ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/transactions"},"Check Here")),(0,s.kt)("p",null,"Check the full docs ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/profiles/create-profiles"},"here"),"."),(0,s.kt)("h2",{id:"comments"},"Comments"),(0,s.kt)("p",null,"Comments are replies to a post that are visible below a post."),(0,s.kt)("h3",{id:"reading-comments"},"Reading Comments"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { idToBn } from "@subsocial/utils";\n\nconst postId = "1";\n\n// Get reply ids (comments) by parent post id and fetch posts by ids\nconst replyIds = await api.blockchain.getReplyIdsByPostId(idToBn(postId));\n\n// For getting comments use posts functions\nconst replies = await api.findPublicPosts(replyIds);\n')),(0,s.kt)("h3",{id:"writing-comments"},"Writing Comments"),(0,s.kt)(o.Z,{defaultValue:"commentToPost",values:[{label:"Create",value:"commentToPost"},{label:"Update",value:"replyToComment"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"commentToPost",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { IpfsContent } from "@subsocial/api/substrate/wrappers";\n\nconst spaceId = "1"; // Optional.\nconst rootPostId = "1";\nconst cid = await ipfs.saveContent({\n  body: "Keep up the good work!",\n});\n\nconst substrateApi = await api.substrateApi;\n\nconst tx = substrateApi.tx.posts.createPost(\n  spaceId,\n  { Comment: { parentId: null, rootPostId } },\n  IpfsContent(cid)\n);\n'))),(0,s.kt)(l.Z,{value:"replyToComment",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { IpfsContent } from "@subsocial/api/substrate/wrappers";\n\nconst spaceId = "1"; // Optional.\nconst parentId = "2"; // Parent comment id.\nconst rootPostId = "1";\nconst cid = await ipfs.saveContent({\n  body: "Agree", // Reply message.\n});\n\nconst substrateApi = await api.substrateApi;\n\nconst tx = substrateApi.tx.posts.createPost(\n  spaceId,\n  { Comment: { parentId, rootPostId } },\n  IpfsContent(cid)\n);\n')))),(0,s.kt)("p",null,"Check the full docs ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/comments/fetch-comments"},"here"),"."),(0,s.kt)("h2",{id:"follows"},"Follows"),(0,s.kt)("h3",{id:"check-if-follower"},"Check if follower"),(0,s.kt)("p",null,"This checks if an account is following a particular space."),(0,s.kt)(o.Z,{defaultValue:"isSpaceFollower",values:[{label:"Is Space Follower",value:"isSpaceFollower"},{label:"Is Account Follower",value:"isAccountFollower"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"isSpaceFollower",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const accountId = "<any_public_key>";\nconst spaceId = "1";\n\nconst isFollower = await api.blockchain.isSpaceFollower(accountId, spaceId);\n'))),(0,s.kt)(l.Z,{value:"isAccountFollower",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const yourAccountId = "<any_public_key>";\nconst otherAccountId = "<any_public_key>";\n\nconst isFollower = await api.blockchain.isAccountFollower(\n  yourAccountId,\n  otherAccountId\n);\n')))),(0,s.kt)("h3",{id:"fetch-list-of-followers"},"Fetch list of followers"),(0,s.kt)("h4",{id:"for-spaces"},"For Spaces"),(0,s.kt)(o.Z,{defaultValue:"spacefollowers",values:[{label:"By Space Id",value:"spacefollowers"},{label:"Followed by Account Id",value:"replyToComment"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"spacefollowers",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const spaceId = "1";\nconst substrateApi = await api.substrateApi;\nconst res = await substrateApi.query.spaceFollows.spaceFollowers(spaceId);\nconst followersSpaceIds = res;\n'))),(0,s.kt)(l.Z,{value:"replyToComment",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const accountId = "<any_public_key>";\nconst substrateApi = await api.substrateApi;\nconst res = await substrateApi.query.spaceFollows.spacesFollowedByAccount(\n  accountId\n);\nconst followedSpaceIds = res;\n')))),(0,s.kt)("h4",{id:"for-accounts"},"For Accounts"),(0,s.kt)(o.Z,{defaultValue:"spacefollowers",values:[{label:"Followers",value:"spacefollowers"},{label:"Following",value:"replyToComment"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"spacefollowers",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const accountId = "<any_public_key>";\nconst substrateApi = await api.substrateApi;\nconst res = await substrateApi.query.accountFollows.accountFollowers(accountId);\nconst followersOfAccount = res;\n'))),(0,s.kt)(l.Z,{value:"replyToComment",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const accountId = "<any_public_key>";\nconst substrateApi = await api.substrateApi;\nconst res = await substrateApi.query.accountFollows.accountsFollowedByAccount(\n  accountId\n);\nconst followingOfAccount = res;\n')))),(0,s.kt)("p",null,"Check the full docs ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/follow/fetch-follow"},"here"),"."),(0,s.kt)("h3",{id:"follow--unfollow"},"Follow / Unfollow"),(0,s.kt)("h4",{id:"for-spaces-1"},"For Spaces"),(0,s.kt)(o.Z,{defaultValue:"spacefollowers",values:[{label:"Follow",value:"spacefollowers"},{label:"Unfollow",value:"replyToComment"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"spacefollowers",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const spaceId = "1";\nconst substrateApi = await api.substrateApi;\nconst tx = substrateApi.tx.spaceFollows.followSpace(spaceId);\n'))),(0,s.kt)(l.Z,{value:"replyToComment",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const spaceId = "1";\nconst substrateApi = await api.substrateApi;\nconst tx = substrateApi.tx.spaceFollows.unfollowSpace(spaceId);\n')))),(0,s.kt)("p",null,"Sign and send the transaction, ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/transactions"},"Check Here")),(0,s.kt)("h4",{id:"for-accounts-1"},"For Accounts"),(0,s.kt)(o.Z,{defaultValue:"spacefollowers",values:[{label:"Follow",value:"spacefollowers"},{label:"Unfollow",value:"replyToComment"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"spacefollowers",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const accountIdToFollow = "<any_public_key>";\nconst substrateApi = await api.substrateApi;\nconst tx = substrateApi.tx.accountFollows.followAccount(accountIdToFollow);\n'))),(0,s.kt)(l.Z,{value:"replyToComment",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const accountIdToFollow = "<any_public_key>";\nconst substrateApi = await api.substrateApi;\nconst tx = substrateApi.tx.accountFollows.followAccount(accountIdToFollow);\n')))),(0,s.kt)("p",null,"Sign and send the transaction, ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/transactions"},"Check Here")),(0,s.kt)("p",null,"Check the full docs ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/follow/create-follow"},"here"),"."),(0,s.kt)("h2",{id:"reactions"},"Reactions"),(0,s.kt)("p",null,"Reactions are your signs to ",(0,s.kt)("inlineCode",{parentName:"p"},"Upvote")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Downvote")," a post."),(0,s.kt)("h3",{id:"get-all-reactions"},"Get all reactions"),(0,s.kt)(o.Z,{defaultValue:"single",values:[{label:"Single Reaction",value:"single"},{label:"Multiple Reactions",value:"multi"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"single",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const myAccount = "<any_account_public_key>";\nconst reaction = await api.blockchain.getPostReactionIdByAccount(\n  myAccount,\n  "1"\n);\n'))),(0,s.kt)(l.Z,{value:"multi",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import { ReactionId } from "@subsocial/api/types/substrate";\n\nconst myAccount = "<any_account_public_key>";\n\nconst substrateApi = await api.substrateApi;\n\nconst tuples = ["1", "2", "3"].map((postId) => [myAccount, postId]);\n\nconst reactionIds =\n  await substrateApi.query.reactions.postReactionIdByAccount.multi(tuples);\nconst reactions = await api.blockchain.findReactions(\n  reactionIds as ReactionId[]\n);\n')))),(0,s.kt)("h3",{id:"reacting-to-a-post"},"Reacting to a post"),(0,s.kt)(o.Z,{defaultValue:"createReaction",values:[{label:"Create",value:"createReaction"},{label:"Update",value:"updateReaction"},{label:"Delete",value:"deleteReaction"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"createReaction",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const postId = "1"; // Post Id you want to react on.\nconst substrateApi = await api.substrateApi;\n\nconst reactionTx = substrateApi.tx.reactions.createPostReaction(\n  postId,\n  "Upvote"\n);\n'))),(0,s.kt)(l.Z,{value:"updateReaction",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const postId = "1"; // Post Id you want to update reaction on.\nconst reactionId = "2"; // Reaction Id to update.\nconst substrateApi = await api.substrateApi;\n\nconst reactionTx = substrateApi.tx.reactions.updatePostReaction(\n  postId,\n  reactionId,\n  "Downvote"\n);\n'))),(0,s.kt)(l.Z,{value:"deleteReaction",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'const postId = "1"; // Post Id on which reaction you want to delete reaction.\nconst reactionId = "2"; // Reaction Id to delete.\nconst substrateApi = await api.substrateApi;\n\nconst reactionTx = substrateApi.tx.reactions.deletePostReaction(\n  postId,\n  reactionId\n);\n')))),(0,s.kt)("p",null,"Sign and send the transaction, ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/transactions"},"Check Here")),(0,s.kt)("p",null,"Check the full docs ",(0,s.kt)("a",{parentName:"p",href:"/docs/develop/sdk/reactions/create-reactions"},"here"),"."))}m.isMDXComponent=!0}}]);