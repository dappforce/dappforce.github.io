"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[5589],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(3117),a=(r(7294),r(3905));const o={id:"styling",title:"Setup Styling",displayed_sidebar:"developSidebar"},i=void 0,s={unversionedId:"develop/zero-to-hero/twitter-dapp/styling",id:"develop/zero-to-hero/twitter-dapp/styling",title:"Setup Styling",description:"We need to add tailwind css support for creating the UI elements & styling.",source:"@site/docs/develop/zero-to-hero/twitter-dapp/Styling.md",sourceDirName:"develop/zero-to-hero/twitter-dapp",slug:"/develop/zero-to-hero/twitter-dapp/styling",permalink:"/docs/develop/zero-to-hero/twitter-dapp/styling",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/zero-to-hero/twitter-dapp/Styling.md",tags:[],version:"current",frontMatter:{id:"styling",title:"Setup Styling",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Creating New Project",permalink:"/docs/develop/zero-to-hero/twitter-dapp/creating-project"},next:{title:"Login Screen",permalink:"/docs/develop/zero-to-hero/twitter-dapp/login-screen"}},p={},l=[],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We need to add ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/guides/create-react-app"},"tailwind")," css support for creating the UI elements & styling."),(0,a.kt)("p",null,"Follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following commands:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"}," yarn add -D tailwindcss postcss autoprefixer\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"}," yarn tailwindcss init tailwind.js --full\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new file called ",(0,a.kt)("strong",{parentName:"p"},"postcss.config.js")," in the ",(0,a.kt)("strong",{parentName:"p"},"root")," directory."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const tailwindcss = require('tailwindcss');\nmodule.exports = {\n    plugins: [\n        tailwindcss('./tailwind.js'),\n        require('autoprefixer')\n    ],\n};\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the ",(0,a.kt)("strong",{parentName:"p"},"tailwind.js")," file by adding a new property called ",(0,a.kt)("strong",{parentName:"p"},"extend"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'  module.exports = {\n  content: [\n    "./src/**/*.{js,jsx,ts,tsx}",\n  ],\n  presets: [],\n  darkMode: \'media\', // or \'class\'\n  theme: {\n    extend: {\n      colors: {\n        pinkish: "rgb(224, 36, 94)",\n        primary: "rgb(29, 161, 242)",\n        "primary-hover": "rgb(26, 145, 218)",\n        dark: "rgb(21, 32, 43)",\n        "dark-lighter": "rgb(25, 39, 52)",\n        "dark-hover": "rgb(22, 45, 64)",\n      },\n      opacity: {\n        0: 0,\n        15: "0.15",\n        25: "0.25",\n        50: "0.50",\n        75: "0.75",\n        100: "100",\n      },\n      borderRadius: {\n        none: "0",\n        sm: "0.125rem",\n        default: "0.25rem",\n        md: "0.375rem",\n        lg: "0.5rem",\n        full: "9999px",\n        xl: "1rem",\n      },\n    },\n    ...\n  };\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new file named ",(0,a.kt)("strong",{parentName:"p"},"index.css")," inside the ",(0,a.kt)("strong",{parentName:"p"},"src")," directory, and paste the following code:  "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-css"},"  @tailwind base;\n  @tailwind components;\n  @tailwind utilities;\n\n  body {\n    background-color: rgb(21, 32, 43);\n  }\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the following scripts in package.json:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'  "scripts": {\n    "start": "yarn watch:css && react-scripts start",\n    "build": "yarn build:css && react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject",\n    "build:css": "postcss src/index.css -o src/assets/main.css",\n    "watch:css": "postcss src/index.css -o src/assets/main.css"\n  } \n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the import statement inside the ",(0,a.kt)("strong",{parentName:"p"},"index.ts")," file like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  import './assets/main.css';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1l6t06P1aJqTCM7vi5rU6qIhwxeHc3_WR?usp=sharing"},"Download")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"svgs"),", and save the directory inside ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder."))))}d.isMDXComponent=!0}}]);