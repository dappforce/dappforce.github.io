"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[49],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=s,u=c["".concat(o,".").concat(h)]||c[h]||g[h]||l;return n?i.createElement(u,a(a({ref:t},d),{},{components:n})):i.createElement(u,a({ref:t},d))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,a=new Array(l);a[0]=h;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[c]="string"==typeof e?e:s,a[1]=r;for(var p=2;p<l;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var i=n(7462),s=(n(7294),n(3905));const l={id:"wordpress",title:"Grill Wordpress Integration",description:"Learn how to integrate Grill with Wordpress websites to make them engaging for your users in a few minutes.",keywords:["Wordpress","Grill integration with Wordpress","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},a=void 0,r={unversionedId:"develop/grill-chat/wordpress",id:"develop/grill-chat/wordpress",title:"Grill Wordpress Integration",description:"Learn how to integrate Grill with Wordpress websites to make them engaging for your users in a few minutes.",source:"@site/docs/develop/grill-chat/Wordpress.md",sourceDirName:"develop/grill-chat",slug:"/develop/grill-chat/wordpress",permalink:"/docs/develop/grill-chat/wordpress",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/grill-chat/Wordpress.md",tags:[],version:"current",frontMatter:{id:"wordpress",title:"Grill Wordpress Integration",description:"Learn how to integrate Grill with Wordpress websites to make them engaging for your users in a few minutes.",keywords:["Wordpress","Grill integration with Wordpress","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Extensions with Light Grill",permalink:"/docs/develop/grill-chat/extensions"},next:{title:"Overview",permalink:"/docs/develop/zero-to-hero/extension/overview"}},o={},p=[{value:"Step 1: Create New Site",id:"step-1-create-new-site",level:2},{value:"Step 2: Setup Site",id:"step-2-setup-site",level:2},{value:"Step 3: Skip to Dashboard",id:"step-3-skip-to-dashboard",level:2},{value:"Step 4: Choose Plugins from Sidebar",id:"step-4-choose-plugins-from-sidebar",level:2},{value:"Step 5: Search in the Plugins",id:"step-5-search-in-the-plugins",level:2},{value:"Step 6: Install the following plugin",id:"step-6-install-the-following-plugin",level:2},{value:"Step 7: Setup the <strong>Headers and Footer</strong> code plugin",id:"step-7-setup-the-headers-and-footer-code-plugin",level:2},{value:"Step 8: Add Grill Setup Script",id:"step-8-add-grill-setup-script",level:2},{value:"Step 9: Add Grill Config Script",id:"step-9-add-grill-config-script",level:2},{value:"Step 10: Adding CSS for Styling",id:"step-10-adding-css-for-styling",level:2},{value:"Step 11: Integration Complete, Try Live Now!",id:"step-11-integration-complete-try-live-now",level:2}],d={toc:p},c="wrapper";function g(e){let{components:t,...l}=e;return(0,s.kt)(c,(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section covers the step by step process to integrate ",(0,s.kt)("strong",{parentName:"p"},"Grill")," with any ",(0,s.kt)("strong",{parentName:"p"},"wordpress site")," in a few minutes."),(0,s.kt)("h2",{id:"step-1-create-new-site"},"Step 1: Create New Site"),(0,s.kt)("p",null,"Create a new site at ",(0,s.kt)("inlineCode",{parentName:"p"},"https://wordpress.com")," by clicking ",(0,s.kt)("strong",{parentName:"p"},'"Add New Site"')," button:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Wordpress New Site",src:n(9016).Z,width:"1493",height:"840"})),(0,s.kt)("h2",{id:"step-2-setup-site"},"Step 2: Setup Site"),(0,s.kt)("p",null,"Add the following details for your website:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Wordpress Setup",src:n(4598).Z,width:"1493",height:"840"})),(0,s.kt)("h2",{id:"step-3-skip-to-dashboard"},"Step 3: Skip to Dashboard"),(0,s.kt)("p",null,"Head towards the site dashboard:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Skip to Dashboard",src:n(9800).Z,width:"1493",height:"840"})),(0,s.kt)("h2",{id:"step-4-choose-plugins-from-sidebar"},"Step 4: Choose Plugins from Sidebar"),(0,s.kt)("p",null,"Choose the plugins section from sidebar and hit ",(0,s.kt)("strong",{parentName:"p"},'"Add New"')," button:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Sidebar Plugin",src:n(6123).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Install New",src:n(1248).Z,width:"1493",height:"840"})),(0,s.kt)("h2",{id:"step-5-search-in-the-plugins"},"Step 5: Search in the Plugins"),(0,s.kt)("p",null,"Search for ",(0,s.kt)("strong",{parentName:"p"},'"Headers and Footers"')," in the plugin section:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Search Plugins",src:n(4099).Z,width:"1493",height:"840"})),(0,s.kt)("h2",{id:"step-6-install-the-following-plugin"},"Step 6: Install the following plugin"),(0,s.kt)("p",null,"Install & activate the plugin for adding our scripts:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Intall new plygin",src:n(4139).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Activate",src:n(17).Z,width:"1493",height:"840"})),(0,s.kt)("h2",{id:"step-7-setup-the-headers-and-footer-code-plugin"},"Step 7: Setup the ",(0,s.kt)("strong",{parentName:"h2"},"Headers and Footer")," code plugin"),(0,s.kt)("p",null,"Head towards the installed plugins section, and find it in active section."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Installed Plygin",src:n(6151).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Active Plugins",src:n(6848).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Setup Plugins",src:n(5975).Z,width:"1493",height:"840"})),(0,s.kt)("h2",{id:"step-8-add-grill-setup-script"},"Step 8: Add Grill Setup Script"),(0,s.kt)("p",null,"Install Grill Setup script in the plugins, and follow the steps:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Add new Script",src:n(6159).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,"Update the Script Name as ",(0,s.kt)("strong",{parentName:"p"},"Grill Setup"),":\n",(0,s.kt)("img",{alt:"Update the title",src:n(5243).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,"Paste the following code, in the ",(0,s.kt)("strong",{parentName:"p"},"Source Code")," section:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'  <script src="https://unpkg.com/@subsocial/grill-widget"><\/script>\n  <div class="fixed-div">\n    <div id="grill" class="chat"></div>\n    <img id="grill-toggle" alt="grill-logo" src="https://sub.id/images/grillchat.svg" />\n  </div>\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Add the grill setup code",src:n(9902).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,"And hit ",(0,s.kt)("strong",{parentName:"p"},"Save")," button:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"grill setup save",src:n(8674).Z,width:"1493",height:"840"})),(0,s.kt)("h2",{id:"step-9-add-grill-config-script"},"Step 9: Add Grill Config Script"),(0,s.kt)("p",null,"Install Grill Config script in the plugins, and follow the steps:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Add new Script",src:n(5393).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,"Update the Script Name as ",(0,s.kt)("strong",{parentName:"p"},"Grill Config"),":\n",(0,s.kt)("img",{alt:"Update the title",src:n(4990).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,"Paste the following code, in the ",(0,s.kt)("strong",{parentName:"p"},"Source Code")," section:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"  <script>\n    // Get the image element and the div element\n    const grillLogo = document.getElementById('grill-toggle');\n    const grillDiv = document.getElementById('grill');\n\n    // Add a click event listener to the image element\n    grillLogo.addEventListener('click', function() {\n      // Toggle the 'grill-enabled' class on the div element\n      grillDiv.classList.toggle('chat-show');\n      \n      // Check if the class 'grill-enabled' is present\n      if (grillDiv.classList.contains('chat-show')) {\n        // initalizing grill.\n        const config = {}\n        window.GRILL.init(config)\n      }\n    });\n  <\/script>\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Add the grill setup code",src:n(8579).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,"And hit ",(0,s.kt)("strong",{parentName:"p"},"Save")," button:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"grill setup save",src:n(1179).Z,width:"1493",height:"840"})),(0,s.kt)("h2",{id:"step-10-adding-css-for-styling"},"Step 10: Adding CSS for Styling"),(0,s.kt)("p",null,"Now, as the last step we need to add the CSS code to style the button and position it correctly:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Installed Plygin",src:n(8196).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,"Choose ",(0,s.kt)("strong",{parentName:"p"},"Addtional CSS")," button:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Active Plugins",src:n(4569).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,"Paste the following CSS code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"  .fixed-div {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 1000;\n    text-align: right;\n  }\n\n  .fixed-div img {\n    width: 60px;\n    height: 60px;\n    margin-top: 4px;\n    border-radius: 50%;\n    color: #fff;\n    font-size: 24px;\n    cursor: pointer;\n    background-color: #fff;\n    padding: 1px;\n  }\n\n  .fixed-div img:hover {\n    padding: 0;\n  }\n\n  .chat {\n    height: min(570px,90vh - 100px);\n    width: min(400px,100vw - 60px);\n    overflow: hidden;\n    border-radius: .625em;\n    -webkit-box-shadow: 0 12px 50px -12px rgba(0,0,0,.5);\n    box-shadow: 0 12px 50px -12px rgba(0,0,0,.5);\n    -webkit-transition-property: opacity,height,width;\n    transition-property: opacity,height,width;\n    -webkit-transition-duration: .3s,0s,0s;\n    transition-duration: .3s,0s,0s;\n    -webkit-transition-delay: 0s,0s,0s;\n    transition-delay: 0s,0s,0s;\n    opacity: 1;\n    display: none;\n  }\n\n  .chat iframe {\n    border-radius: .625em;\n  }\n\n  .chat-show{\n    display: block;\n  }\n\n")),(0,s.kt)("p",null,"Hit ",(0,s.kt)("strong",{parentName:"p"},"Save Changes")," button:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Setup Plugins",src:n(6291).Z,width:"1493",height:"840"})),(0,s.kt)("h2",{id:"step-11-integration-complete-try-live-now"},"Step 11: Integration Complete, Try Live Now!"),(0,s.kt)("p",null,"We have finished the Setup Successfully."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Installed Plygin",src:n(3622).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,"You can try out the website here: ",(0,s.kt)("a",{parentName:"p",href:"https://newsnft2.wpcomstaging.com/"},"https://newsnft2.wpcomstaging.com/")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Setup Plugins",src:n(1986).Z,width:"1493",height:"840"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Setup Plugins",src:n(7240).Z,width:"1493",height:"840"})))}g.isMDXComponent=!0},9016:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1-c8b5e26ddd373ceeb0df1a8e68e4f89b.png"},6848:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/10-3c34602b5ec3849198d36ab21ad32240.png"},5975:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/11-fe54055b897a49406349d22f1bcabbdf.png"},6159:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/12-1c83085566fdcc13a7636debda5899c0.png"},5243:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/13-3c98351f6ff6062795e454b5ed9d3017.png"},9902:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/14-b828865859a86a0aa69535b70e783c3a.png"},8674:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/15-bc546b19fbf7685c94730323d22c322b.png"},5393:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/16-0f5292765499ec07a76ea715ea55cbd8.png"},4990:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/17-55b23f3c91a74fdfef2bd29a33106541.png"},8579:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/18-92825fbc02fea55f4e8019aef87ca5b5.png"},1179:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/19-72f8611d3b1164549822147c2061f8d9.png"},4598:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2-69d10d4a3167dcfc3bd63f30b3b8531e.png"},8196:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/20-08748de01bb93f4cabce84e62217eab6.png"},4569:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/21-97d41a9c7ca99d2638782cfa63ce630c.png"},6291:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/22-e92730d7a8e132a33b031992ff76c8d6.png"},3622:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/23-582ec7d407facd11b43049d2338e8367.png"},1986:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/24-8fa478d8f6ca05b41d9a9e16e0efa72b.png"},7240:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/25-236d7758e0d4dac9655a728452863678.png"},9800:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/3-4d2fb6924afca3d1f0cc210498ebdccf.png"},6123:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/4-6ca779a6c4feee816c12429379faacd8.png"},1248:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/5-d9bede5e0e3aca2ef785018a010af0a3.png"},4099:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/6-181912ece2dc495fe3aa634645c86067.png"},4139:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/7-c9980f7724f9f138c90f59e387312ed8.png"},17:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/8-54fb12a4556e1885aa6546c89c83d773.png"},6151:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/9-47a7749dbf12190fe7cd81e6c69597c9.png"}}]);