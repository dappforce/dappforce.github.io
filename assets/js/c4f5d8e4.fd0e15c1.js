"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[4195],{7191:(t,a,l)=>{l.r(a),l.d(a,{default:()=>M});var s=l(7294),i=l(6010),n=l(9960),c=l(2263),o=l(4996),r=l(4051),m=l(1555);const d="heroBanner_UJJx",u="parentLayout_FdK7",p="container_czXe",h="bgImg_Wyz7",g="body_sRCM",E="itemContainer_H66e",b="heading1_jY2R",v="buttons_pzbO",N="row_BFIh",_="colItem_le3t",y="footer_SBgd",f="contactus_v8xc",Z="newsletter_aSeZ",w="copyright_wQvw",k="socialIconsContainer_r4Kb",S="socialIcon_ZDZZ",C="iconCover_pv4a",B="form_Vli6",x="emailInput_v6I3",z="subscribeBtn_ARZE",I="bodyHeading_NVWu",j="searchBox_omZR",A="menuCard_ABTr",D="title_DQhu",F="description_mMls",Q="img_U3fQ",R="link_HFOh",T=e=>{let{item:t}=e;const{img:a,title:l,description:i,link:c}=t;return s.createElement(n.Z,{className:R,to:(0,o.Z)(c)},s.createElement("div",{className:A},s.createElement("div",null,s.createElement("img",{className:Q,src:`/img/home/${a}.png`})),s.createElement("div",{className:D},l),s.createElement("div",{className:F},i)))};var J=l(5154);const L=()=>{const[t,a]=(0,s.useState)(""),[l,i]=(0,s.useState)(!1);return s.createElement("div",{className:y},s.createElement("div",{className:f},"Connect with us",s.createElement("div",{className:k},s.createElement(n.Z,{className:S,to:"https://github.com/dappforce"},s.createElement(J.hJX,null)),s.createElement(n.Z,{className:S,to:"https://t.me/+ZzvLu0ZfkQwxNGQy"}," ",s.createElement(J.Ww5,null)),s.createElement(n.Z,{className:C,to:"https://discord.gg/KGrvG6zc"},s.createElement(J.j2d,{style:{color:"#fff"}})))),s.createElement("div",{className:w},(new Date).getFullYear()," Subsocial. All Rights Reserved."),s.createElement("div",{className:Z},"Subsocial Newsletter",s.createElement("div",{className:B},s.createElement("input",{value:t,onChange:e=>a(e.target.value),className:x,type:"email",placeholder:"example@gmail.com"}),s.createElement("div",{onClick:()=>{l||((e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))(t)?(i(!0),fetch("https://api.subsocial.network/mail/add_email/796340",{method:"POST",body:JSON.stringify({email:t}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json())).then((e=>{!0===e.result&&alert("Thanks for joining our newsletter.")})).catch((t=>{console.log(t.message),alert(e.message)})).finally((()=>{a(""),i(!1)}))):alert("Invalid email for subscription."))},className:z},l?"Loading":"Subscribe"))))},O=JSON.parse('[{"img":"cube","title":"Protocol Basics","description":"Learn about Subsocial\'s mission and architecture in our lightpaper, and find the tokenomics, FAQ, and glossary","link":"/docs/basics/"},{"img":"tools","title":"Build your dapp","description":"Dig into the technical specifications of Subsocial","link":"/docs/develop/"},{"img":"playground","title":"Playground","description":"Start playing with code snippets from our SDK without downloading anything","link":"https://play.subsocial.network"},{"img":"example","title":"Example Projects","description":"See what you can build using Subsocial\'s tech stack","link":"https://github.com/dappforce?q=template&type=all&language=&sort="},{"img":"bounties","title":"Bounties","description":"Easily earn rewards by building on Subsocial","link":"/docs/bounties"},{"img":"tutorials","title":"Developer Tutorials","description":"See how you can build your first Web3 social app in just 30 minutes","link":"/docs/develop/zero-to-hero/twitter-dapp/introduction"}]');var K=l(8375);function M(){const e=(0,c.Z)(),{siteConfig:t={}}=e;return s.createElement("div",{className:g},s.createElement("div",{className:u,title:`${t.title}`},s.createElement("header",{className:(0,i.Z)("hero hero--primary",d)},s.createElement("div",{className:p},s.createElement("h1",{className:"hero__title"},t.title),s.createElement("p",{className:"hero__subtitle"},t.tagline),s.createElement("div",{className:v},s.createElement(n.Z,{className:(0,i.Z)("button button--primary button--lg"),to:(0,o.Z)("docs/develop/")},"Start Building")))),s.createElement("div",{className:"vignette"},s.createElement("img",{src:`/img/home/${Math.floor(3*Math.random()+1)}.png`,className:h}))),s.createElement("div",{className:E},s.createElement("div",{className:I},s.createElement("div",{className:b},"Choose a Topic"),s.createElement("div",{className:j},s.createElement(K.Z,null))),s.createElement(r.Z,{className:N},O.map((e=>s.createElement(m.Z,{lg:12,md:6,sm:6,xs:12,key:e.title,className:_},s.createElement(T,{item:e})))))),s.createElement(L,null))}}}]);