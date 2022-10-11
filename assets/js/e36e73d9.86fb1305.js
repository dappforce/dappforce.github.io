(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(162)),c={id:"creating-an-account",title:"Creating An Account"},i={unversionedId:"tutorials/getting-started/account-setup/creating-an-account",id:"tutorials/getting-started/account-setup/creating-an-account",isDocsHomePage:!1,title:"Creating An Account",description:"Note: *It is recommended to read the rest of the steps on how to create an account, and then create an account.",source:"@site/docs/tutorials/getting-started/account-setup/CreatingAnAccount.md",slug:"/tutorials/getting-started/account-setup/creating-an-account",permalink:"/docs/tutorials/getting-started/account-setup/creating-an-account",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/tutorials/getting-started/account-setup/CreatingAnAccount.md",version:"current",sidebar:"tutorialsSidebar",previous:{title:"Polkadot{.js}",permalink:"/docs/tutorials/"},next:{title:"Substrate",permalink:"/docs/tutorials/getting-started/account-setup/substrate"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Note:"))," ",Object(a.b)("em",{parentName:"p"},"It is recommended to read the rest of the steps on how to create an account, and then create an account.\nIf you click off of the extension during the creation process, it will close and you will have to start over.")),Object(a.b)("p",null,"To create an account with the Polkadot.js extension, you need to:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Click the + button in the top right corner"),Object(a.b)("li",{parentName:"ol"},"Click \u201cCreate new account\u201d")),Object(a.b)("img",{src:"/img/getting-started-2.png",width:"360"}),Object(a.b)("p",null,"On the next screen, 12 words in order will be shown. These 12 words make up your mnemonic seed phrase, and provide access to your account.\n",Object(a.b)("strong",{parentName:"p"},"Store these, ",Object(a.b)("em",{parentName:"strong"},"in the correct order"),", somewhere safe")," (for more information on storing your seed properly,\n",Object(a.b)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-account-generation#storing-your-key-safely"},"read the wiki here"),")."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a copy of the 12 words somewhere safe and secure"),Object(a.b)("li",{parentName:"ol"},"Check the box at the bottom that says \u201cI have saved my mnemonic seed safely.\u201d")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"NOTE:"))," ",Object(a.b)("em",{parentName:"p"},"Your seed phrase will grant anyone access to your account, and all funds held in it.\nLosing your seed phrase can prevent you from being able to recover your account.\nIf your seed phrase is stolen, the thief will be able to take all of the funds from your account.")),Object(a.b)("img",{src:"/img/getting-started-3.png",width:"360"}),Object(a.b)("p",null,"On the next page, you can define some settings for your account. "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"For Network, we recommend leaving it on \u201cAllow use on any chain\u201d\n(",Object(a.b)("em",{parentName:"li"},"Advanced users seeking more security can create individual accounts for each chain, but this complicates the user experience, and can be confusing."),")"),Object(a.b)("li",{parentName:"ol"},"Set a descriptive name for the account"),Object(a.b)("li",{parentName:"ol"},"Create a strong password")),Object(a.b)("img",{src:"/img/getting-started-4.png",width:"360"}),Object(a.b)("p",null,"Congratulations, you now have a Substrate account. What that means will be explained in the next section."))}l.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);