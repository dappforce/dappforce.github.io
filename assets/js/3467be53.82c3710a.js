"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[940],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(7294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,s=function(t,e){if(null==t)return{};var n,a,s={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var i=a.createContext({}),l=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=l(t.components);return a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,s=t.mdxType,o=t.originalType,i=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),u=l(n),g=s,f=u["".concat(i,".").concat(g)]||u[g]||p[g]||o;return n?a.createElement(f,r(r({ref:e},d),{},{components:n})):a.createElement(f,r({ref:e},d))}));function g(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:s,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8354:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(3117),s=(n(7294),n(3905));const o={id:"transactions",title:"Signing & Sending Transactions",displayed_sidebar:"developSidebar"},r=void 0,c={unversionedId:"develop/sdk/transactions",id:"develop/sdk/transactions",title:"Signing & Sending Transactions",description:"This section covers how to sign and send transactions on the Subsocial blockchain.",source:"@site/docs/develop/sdk/Transactions.md",sourceDirName:"develop/sdk",slug:"/develop/sdk/transactions",permalink:"/docs/develop/sdk/transactions",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/sdk/Transactions.md",tags:[],version:"current",frontMatter:{id:"transactions",title:"Signing & Sending Transactions",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Connect To Subsocial",permalink:"/docs/develop/sdk/connectToSubsocial"},next:{title:"Fetch Profiles",permalink:"/docs/develop/sdk/profiles/fetch-profiles"}},i={},l=[{value:"Creating a Space",id:"creating-a-space",level:2},{value:"More examples",id:"more-examples",level:2},{value:"Create a vote reaction",id:"create-a-vote-reaction",level:4},{value:"Start following a space",id:"start-following-a-space",level:4}],d={toc:l};function p(t){let{components:e,...n}=t;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"This section covers how to sign and send transactions on the Subsocial blockchain.")),(0,s.kt)("p",null,"All posts and spaces are associated with public key pairs called accounts.\nSo, these structures can be created or updated via ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/api/start/api.tx/"},"transactions"),". And you need to use a wallet / extension to sign these transactions. Therefore, Subsocial supports the ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot {.js} extension"),", which allows you to easily manage your keys in a browser."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If you are new to the Polkadot ecosystem and want help to understand the Polkadot{.js} extension, read this ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorials/"},"doc"),".")),(0,s.kt)("h2",{id:"creating-a-space"},"Creating a Space"),(0,s.kt)("p",null,"You need to add 2 more dependencies for this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"  yarn add @polkadot/wasm-crypto @polkadot/extension-dapp\n")),(0,s.kt)("p",null,"Add these methods to interact with the polkadot.js wallet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// Sign and send transaction using polkadot.js web extension.\n// Arguments: [tx] is the transaction object, accountId is the wallet adddress, callback is a method\n// that listens to events of the transaction processing. See example: [logTransaction].\nexport const signAndSendTx = async (\n  tx: any,\n  accountId: string,\n  callback?: (result: any) => void\n) => {\n  const { web3FromAddress } = await import('@polkadot/extension-dapp')\n  const accounts = await getAllAccounts()\n\n  const addresses = accounts.map((account) => account.address)\n\n  const containsAddress = addresses.includes(accountId)\n  if (!containsAddress) {\n    throw Error('Address not found on Polkadot.js extension.')\n  }\n\n  const { signer } = await web3FromAddress(accountId)\n  await tx.signAsync(accountId, { signer })\n\n  await tx.send(callback ?? logTransaction)\n}\n\n// Fetch list of available accounts from the polkadot.js extension.\n// It returns list of accounts, each account have address and other metadata property.\nexport const getAllAccounts = async () => {\n  const { isWeb3Injected, web3Enable, web3Accounts } = await import(\n    '@polkadot/extension-dapp'\n  )\n  const injectedExtensions = await web3Enable('subsocial-starter')\n  if (!isWeb3Injected) {\n    throw Error(`Browser does not have any polkadot.js extension`)\n  }\n\n  if (!injectedExtensions.length) {\n    throw Error(`Polkadot Extension has not authorized us to get accounts`)\n  }\n\n  return await web3Accounts()\n}\n")),(0,s.kt)("p",null,"Let's start with an example of creating a space:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from '@subsocial/types/substrate/classes'\nimport { waitReady } from '@polkadot/wasm-crypto'\n\nconst createSpace = async () => {\n  // wait initialize wasm.\n  await waitReady()\n  \n  const substrateApi = await api.substrateApi\n  const ipfs = api.ipfs\n  \n  // create content object on IPFS and get CID.\n  const ipfsImageCid = await ipfs.saveFile(file)\n\n  const cid = await ipfs.saveContent({\n    about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',\n    image: ipfsImageCid,\n    name: 'Subsocial',\n    tags: ['subsocial']\n  })\n\n  /* Creating a transaction for the createSpace method.\n   createSpace(\n    content: string or IPFS CID or any other (required),\n    permissions: optional\n   )\n  */\n  const tx = substrateApi.tx.spaces.createSpace(\n    IpfsContent(cid),\n    null\n  )\n\n  // Add the selected account address, to get all connected accounts\n  // use the [getAllAccounts] method.\n  const account = '<selected_account_address>'\n\n  // Signing the transaction and sending for execution.\n  signAndSendTx(tx, account, async (result) => {\n    const { status } = result;\n\n    if (!result || !status) {\n      return;\n    }\n\n    if (status.isFinalized || status.isInBlock) {\n      const blockHash = status.isFinalized\n        ? status.asFinalized\n        : status.asInBlock;\n      \n      console.log(`\u2705 Tx finalized. Block hash: ${blockHash.toString()}`);\n    } else if (result.isError) {\n      console.log(JSON.stringify(result));\n    } else {\n      console.log(`\u23f1 Current tx status: ${status.type}`);\n    }\n  });\n}\n")),(0,s.kt)("p",null,"You can also use an instance of the Keyring class (lean more about keyrings ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/keyring/start/"},"here"),"). "),(0,s.kt)("p",null,"We used substrateAPI and IPFS for creating content. Then, we used the previously created content to create a space and then sign a transaction."),(0,s.kt)("p",null,"Learn more about ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/api/start/api.tx/"},"transactions")," and ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/util-crypto/examples/create-mnemonic"},"mnemonics"),". "),(0,s.kt)("h2",{id:"more-examples"},"More examples"),(0,s.kt)("h4",{id:"create-a-vote-reaction"},"Create a vote reaction"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from '@subsocial/types/substrate/classes'\nimport { waitReady } from '@polkadot/wasm-crypto'\n\nconst makeUpvote = async () => {\n  await waitReady()\n\n  const substrateApi = await api.substrateApi\n\n  /*\n    createPostReaction(\n      postId: number | string,\n      kind: 'Upvote' | 'Downvote' | number\n    )\n  */\n  const tx = substrateApi.tx.reactions.createPostReaction('1', 'Upvote')\n\n  // Add the selected account address, to get all connected accounts\n  // use the [getAllAccounts] method.\n  const account = '<selected_account_address>'\n\n  // Signing the transaction and sending for execution.\n  signAndSendTx(tx, account, async (result) => {\n    const { status } = result;\n\n    if (!result || !status) {\n      return;\n    }\n\n    if (status.isFinalized || status.isInBlock) {\n      const blockHash = status.isFinalized\n        ? status.asFinalized\n        : status.asInBlock;\n      \n      console.log(`\u2705 Tx finalized. Block hash: ${blockHash.toString()}`);\n    } else if (result.isError) {\n      console.log(JSON.stringify(result));\n    } else {\n      console.log(`\u23f1 Current tx status: ${status.type}`);\n    }\n  });\n}\n")),(0,s.kt)("h4",{id:"start-following-a-space"},"Start following a space"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from '@subsocial/api/types/substrate/wrappers'\nimport { waitReady } from '@polkadot/wasm-crypto'\n\nconst followSpace = async () => {\n  await waitReady()\n\n  const substrateApi = await api.substrateApi\n\n  /*\n    followSpace(\n      spaceId: u64 | number\n    )\n  */\n  const tx = substrateApi.tx.spaceFollows.followSpace(1)\n  \n  // Add the selected account address, to get all connected accounts\n  // use the [getAllAccounts] method.\n  const account = '<selected_account_address>'\n\n  // Signing the transaction and sending for execution.\n  signAndSendTx(tx, account, async (result) => {\n    const { status } = result;\n\n    if (!result || !status) {\n      return;\n    }\n\n    if (status.isFinalized || status.isInBlock) {\n      const blockHash = status.isFinalized\n        ? status.asFinalized\n        : status.asInBlock;\n      \n      console.log(`\u2705 Tx finalized. Block hash: ${blockHash.toString()}`);\n    } else if (result.isError) {\n      console.log(JSON.stringify(result));\n    } else {\n      console.log(`\u23f1 Current tx status: ${status.type}`);\n    }\n  });\n}\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"For more convenient work with accounts and keys, use ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/extension/usage"},"the polkadot.{js} extension"),".")))}p.isMDXComponent=!0}}]);