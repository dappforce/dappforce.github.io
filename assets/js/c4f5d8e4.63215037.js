"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[2632],{8804:(t,a,s)=>{s.r(a),s.d(a,{default:()=>w});var o=s(1504),n=s(4971),c=s(6016),i=s(8264),l=s(964),r=s(6952),m=s(784),u=s(8248);const d={heroBanner:"heroBanner_UJJx",parentLayout:"parentLayout_FdK7",container:"container_czXe",bgImg:"bgImg_Wyz7",body:"body_sRCM",itemContainer:"itemContainer_H66e",heading1:"heading1_jY2R",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",row:"row_BFIh",colItem:"colItem_le3t",footer:"footer_SBgd",contactus:"contactus_v8xc",newsletter:"newsletter_aSeZ",copyright:"copyright_wQvw",socialIconsContainer:"socialIconsContainer_r4Kb",socialIcon:"socialIcon_ZDZZ",iconCover:"iconCover_pv4a",form:"form_Vli6",emailInput:"emailInput_v6I3",subscribeBtn:"subscribeBtn_ARZE",bodyHeading:"bodyHeading_NVWu",searchBox:"searchBox_omZR"},p="menuCard_ABTr",h="title_DQhu",g="description_mMls",b="img_U3fQ",E="link_HFOh",v=e=>{let{item:t}=e;const{img:a,title:s,description:n,link:i}=t;return o.createElement(c.c,{className:E,to:(0,l.c)(i)},o.createElement("div",{className:p},o.createElement("div",null,o.createElement("img",{className:b,src:`/img/home/${a}.png`})),o.createElement("div",{className:h},s),o.createElement("div",{className:g},n)))};var y=s(4228);const N=()=>{const[t,a]=(0,o.useState)(""),[s,n]=(0,o.useState)(!1);return o.createElement("div",{className:d.footer},o.createElement("div",{className:d.contactus},"Connect with us",o.createElement("div",{className:d.socialIconsContainer},o.createElement(c.c,{className:d.socialIcon,to:"https://github.com/dappforce"},o.createElement(y.w3q,null)),o.createElement(c.c,{className:d.socialIcon,to:"https://t.me/+ZzvLu0ZfkQwxNGQy"}," ",o.createElement(y.Wsi,null)),o.createElement(c.c,{className:d.iconCover,to:"https://discord.gg/w2Rqy2M"},o.createElement(y.im3,{style:{color:"#fff"}})))),o.createElement("div",{className:d.copyright},(new Date).getFullYear()," Subsocial. All Rights Reserved."),o.createElement("div",{className:d.newsletter},"Subsocial Newsletter",o.createElement("div",{className:d.form},o.createElement("input",{value:t,onChange:e=>a(e.target.value),className:d.emailInput,type:"email",placeholder:"example@gmail.com"}),o.createElement("div",{onClick:()=>{s||((e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))(t)?(n(!0),fetch("https://api.subsocial.network/mail/add_email/796340",{method:"POST",body:JSON.stringify({email:t}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json())).then((e=>{!0===e.result&&alert("Thanks for joining our newsletter.")})).catch((t=>{console.log(t.message),alert(e.message)})).finally((()=>{a(""),n(!1)}))):alert("Invalid email for subscription."))},className:d.subscribeBtn},s?"Loading":"Subscribe"))))},_=JSON.parse('[{"img":"cube","title":"Protocol Basics","description":"Learn about Subsocial\'s mission and architecture in our lightpaper, and find the tokenomics, FAQ, and glossary","link":"/docs/basics/"},{"img":"tools","title":"Build your dapp","description":"Dig into the technical specifications of Subsocial","link":"/docs/develop/"},{"img":"playground","title":"Playground","description":"Start playing with code snippets from our SDK without downloading anything","link":"https://play.subsocial.network"},{"img":"example","title":"Example Projects","description":"See what you can build using Subsocial\'s tech stack","link":"https://github.com/dappforce/awesome-subsocial"},{"img":"bounties","title":"Bounties","description":"Easily earn rewards by building on Subsocial","link":"https://github.com/dappforce/subsocial-bounties"},{"img":"tutorials","title":"Developer Tutorials","description":"See how you can build your first Web3 social app in just 30 minutes","link":"/docs/develop/zero-to-hero/twitter-dapp/introduction"}]');var f=s(2314);function w(){const e=(0,i.c)(),{siteConfig:t={}}=e;return o.createElement("div",{className:d.body},o.createElement(r.c,null,o.createElement("meta",{property:"title",content:"Subsocial Documentation"}),o.createElement("meta",{property:"description",content:"Learn about the web3 social protocol and join our developer ecosystem. Subsocial is a set of Substrate pallets that allows anyone to launch their own decentralized censorship-resistant social network. "})),o.createElement("div",{className:d.parentLayout,title:`${t.title}`},o.createElement("header",{className:(0,n.c)("hero hero--primary",d.heroBanner)},o.createElement("div",{className:d.container},o.createElement("h1",{className:"hero__title"},t.title),o.createElement("p",{className:"hero__subtitle"},t.tagline),o.createElement("div",{className:d.buttons},o.createElement(c.c,{className:(0,n.c)("button button--primary button--lg"),to:(0,l.c)("docs/develop/")},"Start Building")))),o.createElement("div",{className:"vignette"},o.createElement("img",{src:`/img/home/${Math.floor(3*Math.random()+1)}.png`,className:d.bgImg}))),o.createElement("div",{className:d.itemContainer},o.createElement("div",{className:d.bodyHeading},o.createElement("div",{className:d.heading1},"Choose a Topic"),o.createElement("div",{className:d.searchBox},o.createElement(f.c,null))),o.createElement(m.c,{className:d.row},_.map((e=>o.createElement(u.c,{lg:12,md:6,sm:6,xs:12,key:e.title,className:d.colItem},o.createElement(v,{item:e})))))),o.createElement(N,null))}}}]);