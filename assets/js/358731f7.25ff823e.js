(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{145:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||f[b]||o;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(145)),i={id:"creating-profiles",title:"Creating And Updating"},s={unversionedId:"sdk/quick-start/profiles/creating-profiles",id:"sdk/quick-start/profiles/creating-profiles",isDocsHomePage:!1,title:"Creating And Updating",description:"Create A Profile",source:"@site/docs/sdk/quick-start/profiles/CreatingProfiles.md",slug:"/sdk/quick-start/profiles/creating-profiles",permalink:"/docs/sdk/quick-start/profiles/creating-profiles",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/sdk/quick-start/profiles/CreatingProfiles.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting Profiles",permalink:"/docs/sdk/quick-start/profiles/getting-profiles"},next:{title:"What Is A Post?",permalink:"/docs/sdk/quick-start/posts/overview"}},c=[{value:"Create A Profile",id:"create-a-profile",children:[]},{value:"Update A Profile",id:"update-a-profile",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-a-profile"},"Create A Profile"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"substateApi.tx.profiles.createProfile(content)\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd78 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html"},"IpfsContent"),' is function that return substrate like implementation for enum { IPFS: "CID of your content"}.  ')),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/types/substrate/classes\"\n\n...\nconst cid = await ipfs.saveContent({\n  about: 'Subsocial official account.',\n  avatar: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', // ipfsImageCid = await api.subsocial.ipfs.saveFile(file)\n  name: 'Subsocial',\n})\n\nconst tx = substrateApi.tx.profiles.createProfile(IpfsContent('bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e'))\n...\n")),Object(o.b)("h2",{id:"update-a-profile"},"Update A Profile"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"substateApi.tx.profiles.updateProfile(update: ProfileUpdateType)\n")),Object(o.b)("p",null,"Update properties:",Object(o.b)("br",{parentName:"p"}),"\n","1: ",Object(o.b)("inlineCode",{parentName:"p"},"content"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html"},"IpfsContent"),'\nis a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}.  '),Object(o.b)("p",null,"Example: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/types/substrate/classes\"\n\n...\nconst cid = await ipfs.saveContent({\n  about: 'Subsocial official account.',\n  avatar: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe',\n  name: 'Subsocial updated', //updated field\n})\n\nconst update = { content: IpfsContent(cid) }\n\nconst tx = substrateApi.tx.profiles.updateProfile(update)\n...\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#profileupdatetype"},"ProfileUpdateType"),": { content: ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/classes/optioncontent.html"},Object(o.b)("em",{parentName:"a"},"OptionContent"))," }  ")))}l.isMDXComponent=!0}}]);