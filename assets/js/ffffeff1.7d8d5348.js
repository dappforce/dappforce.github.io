(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),r=(n(0),n(159)),s={id:"transactions",title:"Signing & Sending Transactions",displayed_sidebar:"developSidebar"},i={unversionedId:"develop/how-to-guides/transactions",id:"develop/how-to-guides/transactions",isDocsHomePage:!1,title:"Signing & Sending Transactions",description:"This section covers how to sign and send transactions on the Subsocial blockchain.",source:"@site/docs/develop/how-to-guides/Transactions.md",slug:"/develop/how-to-guides/transactions",permalink:"/docs/develop/how-to-guides/transactions",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/Transactions.md",version:"current",sidebar:"developSidebar",previous:{title:"Connect To Subsocial",permalink:"/docs/develop/how-to-guides/connectToSubsocial"},next:{title:"Blockchain Structures",permalink:"/docs/develop/how-to-guides/structures"}},c=[{value:"Creating a Space",id:"creating-a-space",children:[]},{value:"More examples",id:"more-examples",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This section covers how to sign and send transactions on the Subsocial blockchain.")),Object(r.b)("p",null,"All posts and spaces are associated with public key pairs called accounts.\nSo, these structures can be created or updated via ",Object(r.b)("a",{parentName:"p",href:"https://polkadot.js.org/docs/api/start/api.tx/"},"transactions"),". And you need to use a wallet / extension to sign these transactions. Therefore, Subsocial supports the ",Object(r.b)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot {.js} extension"),", which allows you to easily manage your keys in a browser."),Object(r.b)("h2",{id:"creating-a-space"},"Creating a Space"),Object(r.b)("p",null,"You need to add 2 more dependencies for this"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"  yarn add @polkadot/keyring @polkadot/wasm-crypto\n")),Object(r.b)("p",null,"Let's start with an example of creating a space:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from '@subsocial/types/substrate/classes'\nimport { Keyring } from '@polkadot/keyring'\nimport { waitReady } from '@polkadot/wasm-crypto'\n\n// Create a keyring instance.\nconst keyring = new Keyring({ type: 'sr25519' })\n\nconst createSpace = async () => {\n  // wait initialize wasm.\n  await waitReady()\n  \n  const substrateApi = await flatApi.subsocial.substrate.api\n  const ipfs = await flatApi.subsocial.ipfs\n  \n  // create content object on IPFS and get CID.\n  const ipfsImageCid = await flatApi.subsocial.ipfs.saveFile(file)\n\n  const cid = await ipfs.saveContent({\n    about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',\n    image: ipfsImageCid,\n    name: 'Subsocial',\n    tags: ['subsocial']\n  })\n\n  /* Creating a transaction for the createSpace method.\n   createSpace(\n    parentId: optional,\n    handleId: optional,\n    content: string or IPFS CID or any other (required),\n    permissions: optional\n   )\n  */\n  const tx = substrateApi.tx.spaces.createSpace(\n    null,\n    null,\n    IpfsContent(cid),\n    null\n  )\n\n  // Add your mnemonic in a config file and import it from there.\n  const accountPair = keyring.addFromMnemonic('add your mnemonic here')\n\n  // Signing the transaction and sending for execution.\n  tx.signAndSend(accountPair, async (result) => {\n    const { status } = result;\n\n    if (!result || !status) {\n      return;\n    }\n\n    if (status.isFinalized || status.isInBlock) {\n      const blockHash = status.isFinalized\n        ? status.asFinalized\n        : status.asInBlock;\n      \n      console.log(`\u2705 Tx finalized. Block hash: ${blockHash.toString()}`);\n    } else if (result.isError) {\n      console.log(JSON.stringify(result));\n    } else {\n      console.log(`\u23f1 Current tx status: ${status.type}`);\n    }\n  });\n}\n")),Object(r.b)("p",null,"Fist we created an instance of the Keyring class (lean more about keyrings ",Object(r.b)("a",{parentName:"p",href:"https://polkadot.js.org/docs/keyring/start/"},"here"),").\nIn the next step we connected to the Substrate API using getSubstrateApi and the Substrate node URL, and we also connected to IPFS by flatApi.\nAfter that we used substrateAPI and IPFS for creating content. Then, we used the previously created content to create a space and then sign a transaction."),Object(r.b)("p",null,"Learn more about ",Object(r.b)("a",{parentName:"p",href:"https://polkadot.js.org/docs/api/start/api.tx/"},"transactions")," and ",Object(r.b)("a",{parentName:"p",href:"https://polkadot.js.org/docs/util-crypto/examples/create-mnemonic"},"mnemonics"),". "),Object(r.b)("h2",{id:"more-examples"},"More examples"),Object(r.b)("h4",{id:"create-a-vote-reaction"},"Create a vote reaction"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from '@subsocial/types/substrate/classes'\nimport { Keyring } from '@polkadot/keyring'\nimport { waitReady } from '@polkadot/wasm-crypto'\n\nconst keyring = new Keyring({ type: 'sr25519' })\n\nconst makeUpvote = async () => {\n  await waitReady()\n\n  const substrateApi = await flatApi.subsocial.substrate.api\n\n  /*\n    createPostReaction(\n      postId: number,\n      kind: 'Upvote' | 'Downvote' | number\n    )\n  */\n  const tx = substrateApi.tx.reactions.createPostReaction('1', 'Upvote')\n\n  const accountPair = keyring.addFromMnemonic('add your mnemonic here')\n\n  tx.signAndSend(accountPair);\n}\n")),Object(r.b)("h4",{id:"start-following-a-space"},"Start following a space"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from '@subsocial/types/substrate/classes'\nimport { Keyring } from '@polkadot/keyring'\nimport { waitReady } from '@polkadot/wasm-crypto'\n\nconst keyring = new Keyring({ type: 'sr25519' })\n\nconst followSpace = async () => {\n  await waitReady()\n\n  const substrateApi = await flatApi.subsocial.substrate.api\n\n  /*\n    followSpace(\n      spaceId: u64 | number\n    )\n  */\n  const tx = substrateApi.tx.spaceFollows.followSpace(1)\n  \n  const accountPair = keyring.addFromMnemonic('add your mnemonic here')\n\n  tx.signAndSend(accountPair);\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For more convenient work with accounts and keys, use ",Object(r.b)("a",{parentName:"p",href:"https://polkadot.js.org/docs/extension/usage"},"the polkadot.{js} extension"),".")))}l.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||r;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);