(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{117:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return p})),t.d(a,"metadata",(function(){return r})),t.d(a,"toc",(function(){return b})),t.d(a,"TransactionSnippet",(function(){return d})),t.d(a,"default",(function(){return m}));var n=t(3),o=t(7),s=(t(0),t(163)),c=t(200),l=t(201),i=t(180),p={id:"quick-reference",title:"Quick Reference",displayed_sidebar:"developSidebar"},r={unversionedId:"develop/quick-reference",id:"develop/quick-reference",isDocsHomePage:!1,title:"Quick Reference",description:"const senderKeyPair = keyring.addFromMnemonic('')",source:"@site/docs/develop/QuickReference.md",slug:"/develop/quick-reference",permalink:"/docs/develop/quick-reference",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/QuickReference.md",version:"current",sidebar:"developSidebar",previous:{title:"Following And Unfollowing",permalink:"/docs/develop/how-to-guides/follow/create-follow"},next:{title:"Developer's FAQs",permalink:"/docs/develop/developers"}},b=[{value:"Setup",id:"setup",children:[{value:"Install",id:"install",children:[]},{value:"Import",id:"import",children:[]},{value:"Configuration",id:"configuration",children:[]}]},{value:"Reading Data",id:"reading-data",children:[{value:"Space",id:"space",children:[]},{value:"Post",id:"post",children:[]},{value:"Profile",id:"profile",children:[]}]},{value:"Writing Data",id:"writing-data",children:[{value:"Note",id:"note",children:[]},{value:"Space",id:"space-1",children:[]},{value:"Post",id:"post-1",children:[]},{value:"Profile",id:"profile-1",children:[]}]},{value:"Comments",id:"comments",children:[{value:"Reading Comments",id:"reading-comments",children:[]},{value:"Writing Comments",id:"writing-comments",children:[]}]},{value:"Follows",id:"follows",children:[{value:"Check if follower",id:"check-if-follower",children:[]},{value:"Fetch list of followers",id:"fetch-list-of-followers",children:[]},{value:"Follow / Unfollow",id:"follow--unfollow",children:[]}]},{value:"Reactions",id:"reactions",children:[{value:"Get all reactions",id:"get-all-reactions",children:[]},{value:"Reacting to a post",id:"reacting-to-a-post",children:[]}]}],d=function(e){var a=e.variableName;return Object(s.b)(i.a,{language:"tsx",mdxType:"CodeBlock"},"  const keyring = (new Keyring({ type: \"sr25519\" }))\n  const senderKeyPair = keyring.addFromMnemonic('<your_mnemonic_here>')\n  \n  "+a+".signAndSend(senderKeyPair, async (result) => {\n      const { status } = result\n      \n      if(!result || !status){\n        return;\n      }\n      if (status.isFinalized || status.isInBlock) {\n        const blockHash = status.isFinalized\n          ? status.asFinalized\n          : status.asInBlock; \n          console.log('\u2705 Tx finalized. Block hash', blockHash.toString());\n      } else if (result.isError) {\n        console.log(JSON.stringify(result));\n      } else {\n        console.log('\u23f1 Current tx status:', status.type);\n      }\n  })\n")},u={toc:b,TransactionSnippet:d};function m(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Here is a collection of the most commonly used methods within Subsocial SDK. For more in-depth look into this library, please reference the ",Object(s.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/index.html"},"TypeDocs"),"."))),Object(s.b)("h2",{id:"setup"},"Setup"),Object(s.b)("h3",{id:"install"},"Install"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"  yarn add @subsocial/api \n")),Object(s.b)("p",null,"Add utils library:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"  yarn add @subsocial/utils\n")),Object(s.b)("h3",{id:"import"},"Import"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"  import { SubsocialApi } from '@subsocial/api'\n")),Object(s.b)("h3",{id:"configuration"},"Configuration"),Object(s.b)(c.a,{defaultValue:"testnet",values:[{label:"TestNet",value:"testnet"},{label:"MainNet",value:"mainnet"},{label:"LocalNet",value:"localnet"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"mainnet",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const config = {\n    substrateNodeUrl: 'wss://para.subsocial.network ',\n    ipfsNodeUrl: 'https://app.subsocial.network/ipfs'\n  }\n"))),Object(s.b)(l.a,{value:"testnet",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const testnet = {\n  substrateNodeUrl: 'wss://rco-para.subsocial.network',\n  ipfsNodeUrl: 'https://staging.subsocial.network/ipfs'\n  }\n"))),Object(s.b)(l.a,{value:"localnet",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const config = {\n    substrateNodeUrl: 'http://127.0.0.1:9944',\n    ipfsNodeUrl: 'http://127.0.0.1:8080'\n  }\n")),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Make sure to run local Subsocial & IPFS node before using these configs in your project."))))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"  const api = await SubsocialApi.create(config)\n")),Object(s.b)("h2",{id:"reading-data"},"Reading Data"),Object(s.b)("h3",{id:"space"},"Space"),Object(s.b)("p",null,"Space is the place where all content on SubSocial lives. It holds multiple posts from different people depending upon the permission. ",Object(s.b)("a",{parentName:"p",href:"/docs/basics/glossary/overview#spaces"},"Read More")),Object(s.b)(c.a,{defaultValue:"byid",values:[{label:"By Id",value:"byid"},{label:"By Owner",value:"owner"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"byid",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const spaceId = 1\n  const space = await api.findSpace({id: spaceId})\n"))),Object(s.b)(l.a,{value:"owner",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const ownerAccountId = '<owner_account_public_key>'\n\n  // Fetching ids of all the spaces by owner.\n  const spaceIds = await api.blockchain.spaceIdsByOwner(ownerAccountId)\n\n  // Fetching space data from all ids.\n  const spaces = await api.subsocial.findSpaces({ids: spaceIds})\n")))),Object(s.b)("p",null,"Check full docs ",Object(s.b)("a",{parentName:"p",href:"/docs/develop/how-to-guides/spaces/fetch-spaces"},"here"),"."),Object(s.b)("h3",{id:"post"},"Post"),Object(s.b)("p",null,"Post is the piece of content that provides value for the readers. It can be some written text, an image, or a video. ",Object(s.b)("a",{parentName:"p",href:"/docs/basics/glossary/overview#posts"},"Read More")),Object(s.b)(c.a,{defaultValue:"byid",values:[{label:"By Id",value:"byid"},{label:"By Space Id",value:"byspaceid"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"byid",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const postId = 1\n  const post = await api.findPost({id: postId})\n"))),Object(s.b)(l.a,{value:"byspaceid",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const spaceId = 1\n  const postIds = await api.blockchain.postIdsBySpaceId(spaceId)\n\n  const posts = await api.subsocial.findPosts({ids: postIds})\n")))),Object(s.b)("p",null,"Check full docs ",Object(s.b)("a",{parentName:"p",href:"/docs/develop/how-to-guides/posts/fetch-posts"},"here"),"."),Object(s.b)("h3",{id:"profile"},"Profile"),Object(s.b)("p",null,"Profile is linked to your Subsocial account address, and is an overview of your activity on Subsocial. You can set a profile picture and a username for your account, as well as a personal website link.\n",Object(s.b)("a",{parentName:"p",href:"/docs/basics/glossary/overview#profile"},"Read More")),Object(s.b)(c.a,{defaultValue:"singleprofile",values:[{label:"Single Account",value:"singleprofile"},{label:"Multiple Accounts",value:"multipleprofiles"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"singleprofile",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const accountId = '<account_public_key>'\n  const profile = await api.subsocial.findProfileSpace(accountId)\n"))),Object(s.b)(l.a,{value:"multipleprofiles",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const accountIds = ['<account_public_key_1>', '<account_public_key_2>']\n  const profiles = await api.subsocial.findProfiles(accountIds)\n")))),Object(s.b)("p",null,"Check full docs ",Object(s.b)("a",{parentName:"p",href:"/docs/develop/how-to-guides/profiles/fetch-profiles"},"here"),"."),Object(s.b)("h2",{id:"writing-data"},"Writing Data"),Object(s.b)("h3",{id:"note"},"Note"),Object(s.b)("p",null,"To store data on IPFS, it is necessary to setup CRUST IPFS account and pushing the data from your account. "),Object(s.b)("p",null,"You generate authHeader and setup with Subsocial SDK like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"  import { generateCrustAuthToken } from '@subsocial/api/utils/ipfs'\n  const authHeader = generateCrustAuthToken('bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice')\n\n  // Use this ipfs object, to store data on Crust IPFS cluster.\n  const ipfs = new SubsocialIpfsApi({\n    ipfsNodeUrl: 'https://crustwebsites.net'\n  })\n\n  ipfs.setWriteHeaders({\n    authorization: 'Basic ' + authHeader\n  })\n")),Object(s.b)("h3",{id:"space-1"},"Space"),Object(s.b)("p",null,"Add following import statement: "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'  import {\n    IpfsContent, \n    OptionBool,\n    SpaceUpdate\n  } from "@subsocial/api/substrate/wrappers" \n')),Object(s.b)("p",null,"Storing space details in IPFS, and generating a CID."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const ipfsImageCid = await api.subsocial.ipfs.saveFile(file)\n\n  const cid = await ipfs.saveContent({\n    about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',\n    image: ipfsImageCid, \n    name: 'Subsocial',\n    tags: [ 'subsocial' ]\n  })\n")),Object(s.b)("p",null,"Creating a Space transaction object"),Object(s.b)(c.a,{defaultValue:"create",values:[{label:"Create Space",value:"create"},{label:"Update Space",value:"update"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"create",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const substrateApi = await api.blockchain.api\n  const spaceTransaction = substrateApi.tx.spaces.createSpace(\n    IpfsContent(cid),\n    null // Permissions config (optional)\n  )\n"))),Object(s.b)(l.a,{value:"update",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const substrateApi = await api.blockchain.api\n  const update = new SpaceUpdate({\n    content: IpfsContent(cid),\n    hidden: OptionBool(true),\n  })\n\n  const spaceTransaction = substrateApi.tx.spaces.updateSpace('1', update)\n")))),Object(s.b)("p",null,"Signing a transaction and sending to blockchains"),Object(s.b)(d,{variableName:"spaceTransaction",mdxType:"TransactionSnippet"}),Object(s.b)("p",null,"Check full docs ",Object(s.b)("a",{parentName:"p",href:"/docs/develop/how-to-guides/spaces/create-spaces"},"here"),"."),Object(s.b)("h3",{id:"post-1"},"Post"),Object(s.b)("p",null,"Add following import statement: "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'  import {\n    IpfsContent, \n    OptionBool,\n    SpaceUpdate\n  } from "@subsocial/api/substrate/wrappers" \n')),Object(s.b)("p",null,"Storing post details in IPFS, and generating a CID."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const ipfsImageCid = await api.subsocial.ipfs.saveFile(file)\n\n  const cid = await ipfs.saveContent({\n    title: \"What is Subsocial?\",\n    image: ipfsImageCid,\n    tags: [ 'Hello world', 'FAQ' ],\n    body: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS.'\n  })\n")),Object(s.b)("p",null,"Creating a post transaction object"),Object(s.b)(c.a,{defaultValue:"regular",values:[{label:"Regular Post",value:"regular"},{label:"Shared Post",value:"shared"},{label:"Update Post",value:"update"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"regular",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const spaceId = '1' // The space in which you're posting.\n  const substrateApi = await api.blockchain.api\n  const postTransaction = substrateApi.tx.posts.createPost(\n    spaceId, \n    { RegularPost: null }, // Creates a regular post.\n    IpfsContent(cid)\n  )\n"))),Object(s.b)(l.a,{value:"shared",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const spaceId = '1' // The space in which you're posting.\n  const parentPostId = '2' // The original post you want to share.\n\n  // Creating new sharedPostCid having shared message.\n  const sharedPostCid = await ipfs.saveContent({\n    body: 'Keep up the good work!'\n  })\n\n  const substrateApi = await api.blockchain.api\n  const postTransaction = substrateApi.tx.posts.createPost(\n    spaceId, \n    { SharedPost: parentPostId }, // Creates a shared post.\n    IpfsContent(sharedPostCid)\n  )\n"))),Object(s.b)(l.a,{value:"update",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const postId = '7' // Id of post which you want to update.\n  const substrateApi = await api.blockchain.api\n\n  const update = new PostUpdate({\n    content: IpfsContent(cid),\n    hidden: OptionBool(true),\n  })\n\n  const postTransaction = substrateApi.tx.spaces.posts.updatePost(postId, update)\n")))),Object(s.b)("p",null,"Signing a transaction and sending to blockchain"),Object(s.b)(d,{variableName:"postTransaction",mdxType:"TransactionSnippet"}),Object(s.b)("p",null,"Check full docs ",Object(s.b)("a",{parentName:"p",href:"/docs/develop/how-to-guides/posts/create-posts"},"here"),"."),Object(s.b)("h3",{id:"profile-1"},"Profile"),Object(s.b)("p",null,"Add the following import statement:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'  import { IpfsContent } from "@subsocial/api/substrate/wrappers"\n')),Object(s.b)("p",null,"Storing profile details in IPFS, and generating a CID to add on blockchain:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const ipfsImageCid = await api.subsocial.ipfs.saveFile(file)\n  const cid = await ipfs.saveContent({\n    about: 'Subsocial official account.',\n    avatar: ipfsImageCid,\n    name: 'Subsocial',\n  })\n")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Profiles in Subsocial is a simple space with it's Id marked on the blockchain to represent as profile."))),Object(s.b)("p",null,"Now, create a new space as mentioned ",Object(s.b)("a",{parentName:"p",href:"http://docs.subsocial.network/docs/develop/quick-reference#space-1"},"here"),". So we can mark it as profile."),Object(s.b)("p",null,"Creating a profile object:"),Object(s.b)(c.a,{defaultValue:"createprofile",values:[{label:"Create Profile",value:"createprofile"},{label:"Reset Profile",value:"updateprofile"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"createprofile",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const substrateApi = await api.blockchain.api\n\n  const spaceId = 3232 // The Id of space you want to mark as profile.\n  const profileTransaction = (await api.blockchain.api).tx.profiles.setProfile(spaceId);\n"))),Object(s.b)(l.a,{value:"updateprofile",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const profileTransaction = (await api.blockchain.api).tx.profiles.resetProfile();\n")))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"To change profile data, update the profile space from it's id.")),Object(s.b)("p",null,"Signing a transaction and sending to blockchain"),Object(s.b)(d,{variableName:"profileTransaction",mdxType:"TransactionSnippet"}),Object(s.b)("p",null,"Check full docs ",Object(s.b)("a",{parentName:"p",href:"/docs/develop/how-to-guides/profiles/create-profiles"},"here"),"."),Object(s.b)("h2",{id:"comments"},"Comments"),Object(s.b)("p",null,"Comments are replies to a post that are visible below a post."),Object(s.b)("h3",{id:"reading-comments"},"Reading Comments"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  import { idToBn } from \"@subsocial/utils\"\n\n  const substrate = api.blockchain\n  const postId = '1'\n\n  // Get reply ids (comments) by parent post id and fetch posts by ids\n  const replyIds = await substrate.getReplyIdsByPostId(idToBn(postId))\n\n  // For getting comments use posts functions\n  const replies = await api.findPublicPosts(replyIds)\n")),Object(s.b)("h3",{id:"writing-comments"},"Writing Comments"),Object(s.b)(c.a,{defaultValue:"commentToPost",values:[{label:"Create",value:"commentToPost"},{label:"Update",value:"replyToComment"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"commentToPost",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  import { IpfsContent } from \"@subsocial/api/substrate/wrappers\"\n\n  const spaceId = '1' // Optional.\n  const rootPostId = '1'\n  const cid = await ipfs.saveContent({\n    body: 'Keep up the good work!'\n  })\n\n  const substrateApi = await api.blockchain.api\n\n  const tx = await substrateApi.tx.posts.createPost(spaceId, { Comment: { parentId: null, rootPostId}}, IpfsContent(cid))\n"))),Object(s.b)(l.a,{value:"replyToComment",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  import { IpfsContent } from \"@subsocial/api/substrate/wrappers\"\n\n  const spaceId = '1' // Optional.\n  const parentId = '2' // Parent comment id.\n  const rootPostId = '1'\n  const cid = await ipfs.saveContent({\n    body: 'Agree' // Reply message.\n  })\n\n  const substrateApi = await api.blockchain.api\n\n  const tx = substrateApi.tx.posts.createPost(spaceId, { Comment: { parentId, rootPostId}}, IpfsContent(cid))\n")))),Object(s.b)("p",null,"Check full docs ",Object(s.b)("a",{parentName:"p",href:"/docs/develop/how-to-guides/comments/fetch-comments"},"here"),"."),Object(s.b)("h2",{id:"follows"},"Follows"),Object(s.b)("h3",{id:"check-if-follower"},"Check if follower"),Object(s.b)("p",null,"This checks if an account is following a particular space."),Object(s.b)(c.a,{defaultValue:"isSpaceFollower",values:[{label:"Is Space Follower",value:"isSpaceFollower"},{label:"Is Account Follower",value:"isAccountFollower"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"isSpaceFollower",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const accountId = '<any_public_key>'\n  const spaceId = '1'\n\n  const substrateApi = api.blockchain\n  const isFollower = await substrateApi.isSpaceFollower(accountId, spaceId)\n"))),Object(s.b)(l.a,{value:"isAccountFollower",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const yourAccountId = '<any_public_key>'\n  const otherAccountId = '<any_public_key>'\n\n  const substrateApi = api.blockchain\n  const isFollower = await substrateApi.isAccountFollower(yourAccountId, otherAccountId)\n")))),Object(s.b)("h3",{id:"fetch-list-of-followers"},"Fetch list of followers"),Object(s.b)("h4",{id:"for-spaces"},"For Spaces"),Object(s.b)(c.a,{defaultValue:"spacefollowers",values:[{label:"By Space Id",value:"spacefollowers"},{label:"Followed by Account Id",value:"replyToComment"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"spacefollowers",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  import { bnsToIds } from '@subsocial/utils'\n\n  const spaceId = '1'\n  const substrateApi = await api.blockchain.api\n  const res = await substrateApi.query.spaceFollows.spaceFollowers(spaceId)\n  const followersSpaceIds = bnsToIds(res)\n"))),Object(s.b)(l.a,{value:"replyToComment",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  import { bnsToIds } from '@subsocial/utils'\n\n  const accountId = '<any_public_key>'\n  const substrateApi = await api.blockchain.api\n  const res = await substrateApi.query.spaceFollows.spacesFollowedByAccount(accountId)\n  const followedSpaceIds = bnsToIds(res)\n")))),Object(s.b)("h4",{id:"for-accounts"},"For Accounts"),Object(s.b)(c.a,{defaultValue:"spacefollowers",values:[{label:"Followers",value:"spacefollowers"},{label:"Following",value:"replyToComment"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"spacefollowers",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  import { bnsToIds } from '@subsocial/utils'\n\n  const accountId = '<any_public_key>'\n  const substrateApi = await api.blockchain.api\n  const res = await substrateApi.api.query.accountFollows.accountFollowers(accountId)\n  const followersOfAccount = bnsToIds(res)\n"))),Object(s.b)(l.a,{value:"replyToComment",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  import { bnsToIds } from '@subsocial/utils'\n\n  const accountId = '<any_public_key>'\n  const substrateApi = await api.blockchain.api\n  const res = await substrateApi.api.query.accountFollows.accountsFollowedByAccount(accountId)\n  const followingOfAccount = bnsToIds(res)\n")))),Object(s.b)("p",null,"Check full docs ",Object(s.b)("a",{parentName:"p",href:"/docs/develop/how-to-guides/follow/fetch-follow"},"here"),"."),Object(s.b)("h3",{id:"follow--unfollow"},"Follow / Unfollow"),Object(s.b)("h4",{id:"for-spaces-1"},"For Spaces"),Object(s.b)(c.a,{defaultValue:"spacefollowers",values:[{label:"Follow",value:"spacefollowers"},{label:"Unfollow",value:"replyToComment"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"spacefollowers",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const spaceId = '1'\n  const substrateApi = await api.blockchain.api\n  const tx = substrateApi.tx.spaceFollows.followSpace(spaceId)\n"))),Object(s.b)(l.a,{value:"replyToComment",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const spaceId = '1'\n  const substrateApi = await api.blockchain.api\n  const tx = substrateApi.tx.spaceFollows.unfollowSpace(spaceId)\n")))),Object(s.b)("p",null,"Signing a transaction and sending to blockchain"),Object(s.b)(d,{variableName:"tx",mdxType:"TransactionSnippet"}),Object(s.b)("h4",{id:"for-accounts-1"},"For Accounts"),Object(s.b)(c.a,{defaultValue:"spacefollowers",values:[{label:"Follow",value:"spacefollowers"},{label:"Unfollow",value:"replyToComment"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"spacefollowers",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const accountIdToFollow = '<any_public_key>'\n  const substrateApi = await api.blockchain.api\n  const tx = substrateApi.tx.accountFollows.followAccount(accountIdToFollow)\n"))),Object(s.b)(l.a,{value:"replyToComment",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const accountIdToFollow = '<any_public_key>'\n  const substrateApi = await api.blockchain.api\n  const tx = substrateApi.tx.accountFollows.followAccount(accountIdToFollow)\n")))),Object(s.b)("p",null,"Signing a transaction and sending to blockchain"),Object(s.b)(d,{variableName:"tx",mdxType:"TransactionSnippet"}),Object(s.b)("p",null,"Check full docs ",Object(s.b)("a",{parentName:"p",href:"/docs/develop/how-to-guides/follow/create-follow"},"here"),"."),Object(s.b)("h2",{id:"reactions"},"Reactions"),Object(s.b)("p",null,"Reactions are your signs to ",Object(s.b)("inlineCode",{parentName:"p"},"Upvote")," or ",Object(s.b)("inlineCode",{parentName:"p"},"Downvote")," a post."),Object(s.b)("h3",{id:"get-all-reactions"},"Get all reactions"),Object(s.b)(c.a,{defaultValue:"single",values:[{label:"Single Reaction",value:"single"},{label:"Multiple Reactions",value:"multi"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"single",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const myAccount = '<any_account_public_key>';\n  const reaction = await api.blockchain.getPostReactionIdByAccount (myAccount, '1')\n"))),Object(s.b)(l.a,{value:"multi",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  import { ReactionId } from '@subsocial/api/types/substrate';\n  \n  const myAccount = '<any_account_public_key>';\n\n  const blockchain = await api.blockchain\n  const substrateApi = await api.blockchain.api\n  \n  const tuples = [ '1', '2', '3' ].map(postId => [ myAccount, postId ])\n  \n  const reactionIds = await substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)\n  const reactions = await blockchain.findReactions(reactionIds as ReactionId[])\n")))),Object(s.b)("h3",{id:"reacting-to-a-post"},"Reacting to a post"),Object(s.b)(c.a,{defaultValue:"createReaction",values:[{label:"Create",value:"createReaction"},{label:"Update",value:"updateReaction"},{label:"Delete",value:"deleteReaction"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"createReaction",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const postId = '1' // Post Id you want to react on.\n  const substrateApi = api.blockchain\n\n  const reactionTx = substrateApi.tx.reactions.createPostReaction(postId, 'Upvote')\n"))),Object(s.b)(l.a,{value:"updateReaction",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const postId = '1' // Post Id you want to update reaction on.\n  const reactionId = '2' // Reaction Id to update.\n  const substrateApi = await api.blockchain.api\n\n  const reactionTx = substrateApi.tx.reactions.updatePostReaction(postId, reactionId, 'Downvote')\n"))),Object(s.b)(l.a,{value:"deleteReaction",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  const postId = '1' // Post Id on which reaction you want to delete reaction.\n  const reactionId = '2' // Reaction Id to delete.\n  const substrateApi = await api.blockchain.api\n\n  const reactionTx = substrateApi.tx.reactions.deletePostReaction(postId, reactionId)\n")))),Object(s.b)("p",null,"Signing a transaction and sending to blockchain"),Object(s.b)(d,{variableName:"tx",mdxType:"TransactionSnippet"}),Object(s.b)("p",null,"Check full docs ",Object(s.b)("a",{parentName:"p",href:"/docs/develop/how-to-guides/reactions/create-reactions"},"here"),"."))}m.isMDXComponent=!0}}]);