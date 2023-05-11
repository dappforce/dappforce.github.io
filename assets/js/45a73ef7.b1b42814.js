"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[9565],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>p});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(o),p=n,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||s;return o?a.createElement(m,i(i({ref:t},u),{},{components:o})):a.createElement(m,i({ref:t},u))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var c=2;c<s;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9827:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=o(3117),n=(o(7294),o(3905));const s={id:"overview",title:"Glossary",description:"Learn about the different common terminologies used in the Subsocial and Polkadot ecosystems, along with many of the features available on Subsocial.",keywords:["Subsocial","Web3 Social","Glossary","Parachain","Polkadot"]},i=void 0,r={unversionedId:"basics/glossary/overview",id:"basics/glossary/overview",title:"Glossary",description:"Learn about the different common terminologies used in the Subsocial and Polkadot ecosystems, along with many of the features available on Subsocial.",source:"@site/docs/basics/glossary/Overview.md",sourceDirName:"basics/glossary",slug:"/basics/glossary/overview",permalink:"/docs/basics/glossary/overview",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/basics/glossary/Overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Glossary",description:"Learn about the different common terminologies used in the Subsocial and Polkadot ecosystems, along with many of the features available on Subsocial.",keywords:["Subsocial","Web3 Social","Glossary","Parachain","Polkadot"]},sidebar:"homeSidebar",previous:{title:"FAQ",permalink:"/docs/basics/faq/overview"}},l={},c=[{value:"Spaces",id:"spaces",level:2},{value:"Transfer Ownership",id:"transfer-ownership",level:2},{value:"Space Editors",id:"space-editors",level:2},{value:"Posts",id:"posts",level:2},{value:"Comments",id:"comments",level:2},{value:"Upvotes",id:"upvotes",level:2},{value:"Downvotes",id:"downvotes",level:2},{value:"Sharing",id:"sharing",level:2},{value:"Feed",id:"feed",level:2},{value:"Profile",id:"profile",level:2},{value:"SUB",id:"sub",level:2},{value:"Energy",id:"energy",level:2},{value:"Account Address",id:"account-address",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Sub.ID",id:"subid",level:2},{value:"Space Tokens",id:"space-tokens",level:2},{value:"Subnet",id:"subnet",level:2},{value:"On-Chain Identity",id:"on-chain-identity",level:2},{value:"DAO",id:"dao",level:2},{value:"Substrate",id:"substrate",level:2},{value:"Validators",id:"validators",level:2},{value:"IPFS",id:"ipfs",level:2},{value:"CID",id:"cid",level:2},{value:"Roles",id:"roles",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Moderation",id:"moderation",level:2},{value:"Censorship",id:"censorship",level:2},{value:"Tipping",id:"tipping",level:2},{value:"Subscriptions",id:"subscriptions",level:2},{value:"Expert Networks",id:"expert-networks",level:2},{value:"Pay-Per-View",id:"pay-per-view",level:2},{value:"Advertisements",id:"advertisements",level:2},{value:"Off-Chain Services",id:"off-chain-services",level:2},{value:"Notifications",id:"notifications",level:2},{value:"Full-Text Search",id:"full-text-search",level:2}],u={toc:c};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"spaces"},"Spaces"),(0,n.kt)("p",null,"Spaces are where content lives on Subsocial - all posts must be made inside of a Space. All users are free to create as many Spaces as they want.\nA Space can function as a personal Space, or as a community. Users can follow Spaces in order to see posts from that Space on their Feed.\nThe owner of a Space is able to moderate the Space, as well as change how it is set up, for example,\nallowing followers to post in the Space, or disabling downvotes. If desired, the owner of a Space can effectively transform the Space into a DAO."),(0,n.kt)("h2",{id:"transfer-ownership"},"Transfer Ownership"),(0,n.kt)("p",null,"Transferring ownership of a Space allows you to set someone else as the owner, meaning they will have all the powers and responsibilities that come with it.\nTransferring ownership is a two sided process - once you initiate the transfer, the recipient must accept ownership of the Space."),(0,n.kt)("h2",{id:"space-editors"},"Space Editors"),(0,n.kt)("p",null,"The owner of a Space can set other accounts as editors of that Space. Being an editor allows you to post in a Space,\nand edit and hide posts that you make in the Space (you cannot edit or hide posts made by others).\nThis feature is useful for things such as collaborative blogs or newspapers."),(0,n.kt)("h2",{id:"posts"},"Posts"),(0,n.kt)("p",null,"Posts are how you put content (whether that is text, audio, an image, or a video) on Subsocial.\nPosts have to go into a Space. Posts are able to be commented on, as well as upvoted or downvoted.\nPosts can be shared to other Spaces."),(0,n.kt)("h2",{id:"comments"},"Comments"),(0,n.kt)("p",null,"Comments are replies to a post that are visible below a post."),(0,n.kt)("h2",{id:"upvotes"},"Upvotes"),(0,n.kt)("p",null,"Upvoting is a reaction to a post that signals you like it. The number of upvotes a post has received is visible to everyone."),(0,n.kt)("h2",{id:"downvotes"},"Downvotes"),(0,n.kt)("p",null,"Downvoting is a reaction to a post that signals you do not like it. The number of downvotes a post has received is visible to everyone."),(0,n.kt)("h2",{id:"sharing"},"Sharing"),(0,n.kt)("p",null,"Sharing a post is similar to retweeting a tweet on Twitter. You can add an easily visible comment along with it when you share it.\nSharing a post is similar to a post, as posts must be shared in to Spaces. Shares can also be upvoted, downvoted, commented on, and shared."),(0,n.kt)("h2",{id:"feed"},"Feed"),(0,n.kt)("p",null,"Your feed is a collection of posts from Spaces that you follow."),(0,n.kt)("h2",{id:"profile"},"Profile"),(0,n.kt)("p",null,"Your profile is linked to your Subsocial account address, and is an overview of your activity on Subsocial.\nYou can set a profile picture and a username for your account, as well as a personal website link.\nBelow your profile overview is a collection of all of your posts, comments, reactions, and Spaces. You can view others\u2019 profiles to see this information about them."),(0,n.kt)("h2",{id:"sub"},"SUB"),(0,n.kt)("p",null,"SUB is the ticker for the Subsocial token, which powers the Subsocial blockchain.\nSUB can be used to perform actions on the network, or burned to generate energy."),(0,n.kt)("h2",{id:"energy"},"Energy"),(0,n.kt)("p",null,"Energy is created by burning SUB, and can be used to perform actions on the network with reduced fees. Energy is not transferrable. When burning SUB to create energy,\na multiplier (known as the energy coefficient) greater than 1 is used, meaning that users will be able to perform more actions with 1 energy\nthan if they spent 1 SUB directly. For example, with an energy coefficient of 5x, Alice can perform 5x more actions with 1 energy than she can with 1 SUB."),(0,n.kt)("p",null,"Energy can be created in a different wallet than the one that burnt the SUB tokens,\nallowing friends or applications to let you have energy without having to worry about SUB tokens."),(0,n.kt)("h2",{id:"account-address"},"Account Address"),(0,n.kt)("p",null,"An account address is just what it sounds like, an address for your account. Addresses are usually long strings of letters and numbers,\nand are used to perform transactions on blockchain networks. In the Substrate ecosystem, each account has multiple addresses,\nas there are multiple chains. You may or may not be able to access all of them depending on the wallet that you use."),(0,n.kt)("h2",{id:"wallet"},"Wallet"),(0,n.kt)("p",null,"A cryptocurrency wallet is simply software that allows you to control your crypto.\nIt is separate from your account, as you can log into a single account from multiple wallets.\nExamples of wallets include Polkadot.js, Polkawallet, Fearless Wallet, and Metamask."),(0,n.kt)("h2",{id:"subid"},"Sub.ID"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://sub.id"},"Sub.ID")," is a tool built by the Subsocial team as a gift to the Substrate ecosystem,\nwith the aim of helping to improve the user experience in the ecosystem.\nOne of the main problems with the ",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/"},"Polkadot.js")," wallet is it is not set up in a way that\nallows easy and smooth access to different chains, and has no way to see multiple chains at once.\nSub.ID let\u2019s you see your balances and addresses for multiple Substrate based chains at one time,\nand if someone else gives you just one of their Substrate addresses, you can look them up on Sub.id and find their addresses for other chains.\nThis will make it easier to tip people, as you can pay them on whatever Substrate chain you wish."),(0,n.kt)("h2",{id:"space-tokens"},"Space Tokens"),(0,n.kt)("p",null,"Spaces can create their own token just for that Space, and use it for various purposes.\nThe tokens could be given governance powers and distributed to members of the Space to transform the Space into a DAO.\nThe tokens could enable a revenue share where ad revenue from the Space is distributed among token holders.\nThese Space tokens will be transferable and tradeable."),(0,n.kt)("h2",{id:"subnet"},"Subnet"),(0,n.kt)("p",null,"A subnet is a front-end (website/app) built to connect to the Subsocial chain, but it only shows a subsection of content.\nPolkaverse is a good example. If someday someone makes a front-end similar to Instagram that only shows content with pictures,\nthat would be another good example of a subnet."),(0,n.kt)("h2",{id:"on-chain-identity"},"On-Chain Identity"),(0,n.kt)("p",null,"Various Substrate blockchains feature on-chain identities, which means that users can make claims about themselves\n(such as their name, their email address, their Twitter handle, etc.) which can then be independently verified by a third party for a small fee, if they so desire."),(0,n.kt)("h2",{id:"dao"},"DAO"),(0,n.kt)("p",null,"A Decentralized Autonomous Organization. DAOs essentially function like normal businesses or non-profit organizations,\nbut with much less of a hierarchical organization. Instead of having a CEO at the top and a bunch of workers at the bottom,\nDAOs put everyone on an even playing field, and reward members based on their contributions."),(0,n.kt)("h2",{id:"substrate"},"Substrate"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://substrate.dev"},"Substrate")," is a framework that is essentially composed of building blocks called pallets,\nwhich allow developers to easily build cutting edge blockchains.\nSubstrate is built with the Rust programming language and was created by Dr. Gavin Wood, who created Ethereum. Subsocial is built with Substrate."),(0,n.kt)("h2",{id:"validators"},"Validators"),(0,n.kt)("p",null,"Validator nodes maintain blockchains through a consensus system. This allows the network to function properly without\nany disagreements between parties as to what events took place on the chain. Validator nodes are computers that are run by node operators.\nIn exchange for their services they receive tokens."),(0,n.kt)("h2",{id:"ipfs"},"IPFS"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://ipfs.io"},"InterPlanetary File System")," is a decentralized storage network commonly used by blockchain projects looking for a storage solution.\nIt is similar to a torrent network where users download content to their machines, and upload it to people that wish to access it.\nIPFS node operators are able to choose what content they host on their node. Subsocial uses IPFS for multimedia storage."),(0,n.kt)("h2",{id:"cid"},"CID"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/content-addressing/"},"CIDs")," are Content Identifiers, and are used as addresses for files hosted on the IPFS network.\nThe CID is generated from the cryptographic hash of the content, which means that if the content changes in any way, the CID will change."),(0,n.kt)("h2",{id:"roles"},"Roles"),(0,n.kt)("p",null,"Roles act as groups of permissions within a Space that are applied to anyone with that particular role.\nFor example, a Space might create a Moderator role, and give it the permissions to hide posts and block users from that particular Space."),(0,n.kt)("h2",{id:"permissions"},"Permissions"),(0,n.kt)("p",null,"Permissions let you manage your Spaces, such as whether only you can post in it, edit posts,\nor whether anyone that follows the Space can post in it. Using permissions you can disable features\nlike downvotes if you are not a fan of them, or turn off comments. Permissions can be assigned to various roles within the Space."),(0,n.kt)("h2",{id:"moderation"},"Moderation"),(0,n.kt)("p",null,"On Subsocial, moderation only takes place within Spaces. The owner of a Space, or appointed moderators,\nare the only ones capable of moderation - there is no central authority that can moderate, like on traditional social media.\nThis means that outside of Spaces there is no moderation. Nobody can delete your Space, or moderate it for you,\nunless you appoint them as a moderator. The ONLY way that you could be moderated is if you are posting content\nthat is being hosted on an IPFS node, and the node operator decided to stop hosting it. However, anyone is free to host their own IPFS node."),(0,n.kt)("h2",{id:"censorship"},"Censorship"),(0,n.kt)("p",null,"Censorship is when someone or something limits your freedom of expression. While you can be censored in other people\u2019s Spaces, you cannot be censored in Spaces that you own."),(0,n.kt)("h2",{id:"tipping"},"Tipping"),(0,n.kt)("p",null,"Tipping is the simplest way to reward someone for the content they have created, whether it is an article, a video,\nor simply a joke that made you laugh. Tips will go directly to the account that created the post or comment,\nwith no intermediary skimming some off of the top, like what happens on existing content monetization platforms."),(0,n.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,n.kt)("p",null,"Subscriptions will allow you to set up recurring payments for access to a creator\u2019s Space or other unique content.\nThe frequency of payments will be determined by the content creator, for example they could decide to offer a daily subscription instead of a monthly subscription."),(0,n.kt)("h2",{id:"expert-networks"},"Expert Networks"),(0,n.kt)("p",null,"Spaces will be able to select or vote on a panel of experts, who will vote on what content is the best.\nThe creators that made the highest voted content will receive rewards."),(0,n.kt)("h2",{id:"pay-per-view"},"Pay-Per-View"),(0,n.kt)("p",null,"PPV allows content to be accessed one time for a fixed fee, if you want to access it again, you will have to pay again."),(0,n.kt)("h2",{id:"advertisements"},"Advertisements"),(0,n.kt)("p",null,"Space owners or governance committees will be able to sell ad Space in their Space in order to generate revenue.\nThis revenue can either be captured by the owner or committee, or distributed amongst all holders of that Space\u2019s Space tokens, or anything in between."),(0,n.kt)("h2",{id:"off-chain-services"},"Off-Chain Services"),(0,n.kt)("p",null,"The Subsocial team offers various off-chain services to improve the user experience of using Subsocial, such as a search function,\nnotifications (including email notifications and feed updates), personal settings, and the in-development telegram bot for notifications."),(0,n.kt)("h2",{id:"notifications"},"Notifications"),(0,n.kt)("p",null,"Notifications alert you to people following you or any of your Spaces, voting or commenting on your posts, or sharing them."),(0,n.kt)("h2",{id:"full-text-search"},"Full-Text Search"),(0,n.kt)("p",null,"Searching allows you to search by text for whatever you want, including Spaces, posts, creators, tags, and comments."))}h.isMDXComponent=!0}}]);