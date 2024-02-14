"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[6244],{5788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>y});var o=n(1504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,y=d["".concat(c,".").concat(u)]||d[u]||g[u]||l;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var o=n(5072),r=(n(1504),n(5788));const l={id:"login-screen",title:"Login Screen",displayed_sidebar:"developSidebar"},i=void 0,a={unversionedId:"develop/zero-to-hero/twitter-dapp/login-screen",id:"develop/zero-to-hero/twitter-dapp/login-screen",title:"Login Screen",description:"Now, let's first write the login / signup screen.",source:"@site/docs/develop/zero-to-hero/twitter-dapp/LoginScreen.md",sourceDirName:"develop/zero-to-hero/twitter-dapp",slug:"/develop/zero-to-hero/twitter-dapp/login-screen",permalink:"/docs/develop/zero-to-hero/twitter-dapp/login-screen",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/zero-to-hero/twitter-dapp/LoginScreen.md",tags:[],version:"current",frontMatter:{id:"login-screen",title:"Login Screen",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Setup Styling",permalink:"/docs/develop/zero-to-hero/twitter-dapp/styling"},next:{title:"Home Screen UI",permalink:"/docs/develop/zero-to-hero/twitter-dapp/home-screen-ui"}},c={},s=[{value:"Creating the login screen UI",id:"creating-the-login-screen-ui",level:3},{value:"Connecting to the wallet",id:"connecting-to-the-wallet",level:3},{value:"Fetching a list of all accounts",id:"fetching-a-list-of-all-accounts",level:4},{value:"Rendering the UI conditionally",id:"rendering-the-ui-conditionally",level:4}],p={toc:s},d="wrapper";function g(e){let{components:t,...l}=e;return(0,r.yg)(d,(0,o.c)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Now, let's first write the login / signup screen. "),(0,r.yg)("p",null,"In web3, user authentication is done via wallets. In this case, we will be using the ",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot.js")," wallet extension."),(0,r.yg)("p",null,"This is how it looks:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Login Screen",src:n(7452).c,width:"2586",height:"1410"})),(0,r.yg)("h3",{id:"creating-the-login-screen-ui"},"Creating the login screen UI"),(0,r.yg)("p",null,"Follow the steps to create this login screen: "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a new file with the name ",(0,r.yg)("inlineCode",{parentName:"p"},"login.tsx")," inside a new directory ",(0,r.yg)("strong",{parentName:"p"},"screens")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"src")," folder.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Paste the following content: "))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import Logo from \'../svgs/logo.svg\';\n\ntype LoginScreenProps = {\n  onLoginClick: () => void\n}\n\nconst LoginScreen = ({ onLoginClick }: LoginScreenProps) => {\n\n  return (\n    <div className="flex flex-col justify-center  container mt-5 text-white mx-auto">\n\n      <div className=\'flex flex-1 justify-center\'>\n        <img src={Logo} width="40px" alt="Twitter Logo" />\n      </div>\n\n      <span className="font-bold text-2xl mt-6 pt-1 text-center">Log in to Twitter</span>\n      <small className="text-center">powered by Subsocial</small>\n      <div className=" lg:w-5/12 lg:px-0 px-5 w-full mt-5 mx-auto">\n        <button\n          onClick={onLoginClick}\n          type="submit"\n          className={`bg-primary focus:outline-none font-bold hover:bg-primary-hover text-white rounded-full w-full py-3`}>\n          Log in\n        </button>\n      </div>\n    </div>\n  );\n}\n\nexport default LoginScreen\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://drive.google.com/drive/folders/1l6t06P1aJqTCM7vi5rU6qIhwxeHc3_WR?usp=sharing"},"Download")," the ",(0,r.yg)("inlineCode",{parentName:"li"},"svgs")," and save the directory inside the ",(0,r.yg)("inlineCode",{parentName:"li"},"src")," folder (if it's not there already).")),(0,r.yg)("h3",{id:"connecting-to-the-wallet"},"Connecting to the wallet"),(0,r.yg)("p",null,"For connecting the web app to the wallet, we need to do 2 things:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use the methods provided by the Subsocial Starter to connect to the wallet"),(0,r.yg)("li",{parentName:"ul"},"Saving / Fetching selected the wallet address to localstorage")),(0,r.yg)("h4",{id:"fetching-a-list-of-all-accounts"},"Fetching a list of all accounts"),(0,r.yg)("p",null,"Update the ",(0,r.yg)("strong",{parentName:"p"},"App.tsx")," file above the return statement like this, and clear everything else:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react'\nimport polkadotjs from './subsocial/wallets/polkadotjs'\nimport LoginScreen from './login'\n\nconst ACCOUNT_STORAGE_KEY = 'connected_account'\n\nconst App = () => {\n\n  const [account, setAccount] = useState<string | null>(localStorage.getItem(ACCOUNT_STORAGE_KEY))\n\n  const connectWallet = async () => {\n    const accounts = await polkadotjs.getAllAccounts()\n    console.log('List of all accounts:', accounts)\n\n    // Store the first account address.\n    if (accounts.length > 0) {\n      localStorage.setItem('connected_account', accounts[0].address)\n      setAccount(accounts[0].address)\n    } else {\n      alert('No accounts found in polkadotjs wallet.')\n    }\n  }\n\n  // ... continue with the rest of the code below\n}\n\nexport default App\n")),(0,r.yg)("h4",{id:"rendering-the-ui-conditionally"},"Rendering the UI conditionally"),(0,r.yg)("p",null,"Now, we have to make sure that the login screen UI is rendered conditionally."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n  // ...\n\n  if(account) {\n    // User is already logged-in.\n    return <div> </div>;\n  }\n\n  return <LoginScreen\n    onLoginClick={connectWallet}\n  />\n}\n\nexport default App\n")),(0,r.yg)("admonition",{title:"Note",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Make sure to add all required imports suggested by the text editor. "),(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("strong",{parentName:"p"},"...")," represents code part covered in previous steps.")))}g.isMDXComponent=!0},7452:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/login-9029c146cfd1294f4a76b7b61e4cd851.png"}}]);