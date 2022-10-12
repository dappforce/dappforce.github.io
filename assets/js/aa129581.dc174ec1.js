(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{133:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return b}));var a=t(3),s=t(7),o=(t(0),t(163)),i=t(200),r=t(201),c=(t(180),{id:"playground",title:"Playground Rules",displayed_sidebar:"developSidebar"}),l={unversionedId:"develop/playground",id:"develop/playground",isDocsHomePage:!1,title:"Playground Rules",description:"Subsocial's Playground is an easy tool that allows you to run code snippets from our SDK without downloading anything.",source:"@site/docs/develop/Playground.md",slug:"/develop/playground",permalink:"/docs/develop/playground",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/Playground.md",version:"current",sidebar:"developSidebar",previous:{title:"Developer's FAQs",permalink:"/docs/develop/developers"}},d=[{value:"Try out the Subsocial Playground.",id:"try-out-the-subsocial-playground",children:[]},{value:"Built-in APIs",id:"built-in-apis",children:[{value:"Subsocial API",id:"subsocial-api",children:[]},{value:"IPFS API",id:"ipfs-api",children:[]},{value:"Keyring",id:"keyring",children:[]},{value:"Sending Transaction",id:"sending-transaction",children:[]}]}],u={toc:d};function b(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Subsocial's Playground is an easy tool that allows you to run code snippets from our SDK without downloading anything."),Object(o.b)("p",null,"This Playground provides a perfect environment to play, test and debug some of your code snippets before building a real project. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The Playground is running on our Testnet called Soonsocial. You can get some test tokens from our ",Object(o.b)("a",{parentName:"p",href:"https://discord.gg/JRTMTtPK"},"Discord bot"),"."))),Object(o.b)("h3",{id:"try-out-the-subsocial-playground"},"Try out the ",Object(o.b)("a",{parentName:"h3",href:"https://docs.subsocial.network/playground"},"Subsocial Playground"),"."),Object(o.b)("h2",{id:"built-in-apis"},"Built-in APIs"),Object(o.b)("p",null,"It comes with a set of rules & in-built function to help you focus on library methods rather than writing everything from scratch. The following list represents these functions and their code: "),Object(o.b)("h3",{id:"subsocial-api"},"Subsocial API"),Object(o.b)("p",null,"The Subsocial Playground comes with the Subsocial SDK's ",Object(o.b)("inlineCode",{parentName:"p"},"api")," instance. This is used to interact with most of the SDK methods. Here is how it's being created under the hood:"),Object(o.b)(i.a,{defaultValue:"testnet",values:[{label:"TestNet",value:"testnet"},{label:"MainNet",value:"mainnet"},{label:"LocalNet",value:"localnet"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"mainnet",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"  const configDetails = {\n    substrateNodeUrl: 'wss://para.f3joule.space',\n    ipfsNodeUrl: 'https://app.subsocial.network/ipfs'\n  }\n"))),Object(o.b)(r.a,{value:"testnet",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"  const configDetails = {\n    substrateNodeUrl: 'wss://rco-para.subsocial.network',\n    ipfsNodeUrl: 'https://staging.subsocial.network/ipfs'\n  }\n"))),Object(o.b)(r.a,{value:"localnet",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"  const configDetails = {\n    substrateNodeUrl: 'http://127.0.0.1:9944',\n    ipfsNodeUrl: 'http://127.0.0.1:8080'\n  }\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Make sure to run local Subsocial & IPFS nodes before using these configs in your project."))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"  const api = api = await SubsocialApi.create({\n    ...configDetails,\n    useServer: {\n      httpRequestMethod: 'get'\n    }\n  })\n")),Object(o.b)("h3",{id:"ipfs-api"},"IPFS API"),Object(o.b)("p",null,"The Subsocial Playground comes with the CRUST IPFS API's ",Object(o.b)("inlineCode",{parentName:"p"},"ipfs")," instance. This is use to store data related spaces, posts and comments on the network. Let's see how the configuration is set:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"  import { generateCrustAuthToken } from '@subsocial/api/utils/ipfs'\n\n  const authHeader = generateCrustAuthToken('bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice')\n\n  const ipfs = new SubsocialIpfsApi({\n    ipfsNodeUrl: 'https://crustwebsites.net'\n  })\n\n  ipfs.setWriteHeaders({\n    authorization: 'Basic ' + authHeader\n  })\n")),Object(o.b)("h3",{id:"keyring"},"Keyring"),Object(o.b)("p",null,"The Subsocial Playground comes with a basic ",Object(o.b)("inlineCode",{parentName:"p"},"keyring")," instance to help you sign and send transactions. By default, we use the Alice (Test) account for our Testnet transactions, but you can change it if you want. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"  import { Keyring } from \"@polkadot/api\"\n  import { waitReady } from '@polkadot/wasm-crypto';\n\n  await waitReady()\n  const keyring = new Keyring({ type: 'sr25519' })\n")),Object(o.b)("h3",{id:"sending-transaction"},"Sending Transaction"),Object(o.b)("p",null,"The Subsocial Playground allows you to sign and send transactions with Mnemonic phrases using both Keyring and the Polkadot.js extension. "),Object(o.b)("h4",{id:"using-keyring"},"Using Keyring"),Object(o.b)("p",null,"To sign and send transactions with Mnemonic phrases through Keyring, use:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"  transaction.signAndSend(pair, logger) \n")),Object(o.b)("p",null,"The logger is a method that tracks the transaction and show toasts in UI. Here's how it works:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const logger = (result: any) => {\n    const { status } = result\n\n    if (!result || !status) {\n      return;\n    }\n    if (status.isFinalized) {\n      const blockHash = status.isFinalized\n        ? status.asFinalized\n        : status.asInBlock;\n      console.log('\u2705 Tx finalized. Block hash', blockHash.toString());\n      showToast(`\u2705 Transaction: ${status.isFinalized ? 'Finalised' : 'Added in Block'}`);\n      const newIds = getNewIdsFromEvent(result); // get first argument from array.\n      if (newIds.length > 0) {\n        showToast(`\u26a1\ufe0f New Item Id: ${newIds[0]}`)\n      }\n      return;\n    } else if (result.isError) {\n      console.log(JSON.stringify(result));\n      showToast(JSON.stringify(result));\n    } else {\n      console.log('\u23f1 Current tx status:', status.type);\n      showToast(`\u23f1 Current tx status: ${status.type}`);\n    }\n  }\n")),Object(o.b)("h4",{id:"using-polkadotjs-extension"},"Using Polkadot.js Extension"),Object(o.b)("p",null,"Signing using the Polkadot.js extension: "),Object(o.b)("h4",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"  signAndSendTx(transactionVariable, accountAddressToSignFrom)\n")),Object(o.b)("p",null,"Implementation of signAndSendTx function: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"  const signAndSendTx = async (tx: any, accountId: string) => {\n    const { isWeb3Injected, web3Enable, web3AccountsSubscribe, web3FromAddress } = await import('@polkadot/extension-dapp')\n    const injectedExtensions = await web3Enable('twitter-dapp-subsocial')\n    if (!isWeb3Injected) {\n      showToast(`Browser do not have any polkadot.js extension`);\n      return;\n    }\n\n    if (!injectedExtensions.length) {\n      showToast(`Polkadot Extension have not authorized us to get accounts`);\n      return;\n    }\n\n    await web3AccountsSubscribe(async (accounts) => {\n      if (accounts.length > 0) {\n        const addresses = accounts.map((account) => account.address)\n\n        const containsAddress = addresses.includes(accountId)\n        if (!containsAddress) {\n          showToast(\"\ud83d\ude2c Address not found on Polkadot.js extension.\")\n          return;\n        }\n        const { signer } = await web3FromAddress(accountId)\n        await tx.signAsync(accountId, { signer })\n\n        await tx.send(logger)\n      }\n    })\n  }\n")))}b.isMDXComponent=!0}}]);