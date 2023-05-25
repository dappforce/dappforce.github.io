"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[1006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?l.createElement(f,i(i({ref:t},c),{},{components:n})):l.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var d=2;d<r;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var l=n(3117),o=(n(7294),n(3905));const r={id:"modal",title:"Creating An Input Modal",description:"This section explains about the input modal required for the extension of Grill Light.",keywords:["Schema","Extensions","Grill Light","Building on the Grill app","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},i=void 0,a={unversionedId:"develop/grill-light/extension/modal",id:"develop/grill-light/extension/modal",title:"Creating An Input Modal",description:"This section explains about the input modal required for the extension of Grill Light.",source:"@site/docs/develop/grill-light/extension/Modal.md",sourceDirName:"develop/grill-light/extension",slug:"/develop/grill-light/extension/modal",permalink:"/docs/develop/grill-light/extension/modal",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/grill-light/extension/Modal.md",tags:[],version:"current",frontMatter:{id:"modal",title:"Creating An Input Modal",description:"This section explains about the input modal required for the extension of Grill Light.",keywords:["Schema","Extensions","Grill Light","Building on the Grill app","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Defining The Schema",permalink:"/docs/develop/grill-light/extension/schema"},next:{title:"Adding An Extension To The Registry",permalink:"/docs/develop/grill-light/extension/registry"}},s={},d=[{value:"Creating UrlModal.tsx file",id:"creating-urlmodaltsx-file",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section covers how to create an input modal for the extension that we just created for URLs."),(0,o.kt)("h2",{id:"creating-urlmodaltsx-file"},"Creating UrlModal.tsx file"),(0,o.kt)("p",null,"We need to create another file inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"components/extension/url")," directory."),(0,o.kt)("p",null,"The first thing we need to create is a component that renders the input fields and two action buttons (for send and cancel). Like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Url Modal",src:n(9435).Z,width:"1650",height:"1550"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'\n  import { useState } from "react"\n  import useModalStore from "@/stores/modal"\n\n  const URLModal = () => {\n\n    const [url, setURL] = useState<string>(\'\')\n    const [title, setTitle] = useState<string>(\'\')\n\n    const { closeModal } = useModalStore()\n\n    const sendURL = () => {  }\n\n    const close = () => {\n      setTitle(\'\')\n      setURL(\'\')\n      closeModal()\n    }\n\n    return <div>\n      <h3 className="font-bold text-lg">Attach an URL</h3>\n      <div className="mt-4">\n        <h2>External URL</h2>\n        <input type="text" value={url} onChange={(e) => setURL(e.target.value)} placeholder="Paste your external URL" className="input input-bordered w-full max-w-xs mt-1" />\n      </div>\n\n      <div className="mt-4">\n        <h2>Title</h2>\n        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Any title for the URL" className="input input-bordered w-full max-w-xs mt-1" />\n      </div>\n\n      <div className="modal-action">\n        <label onClick={close} className="btn btn-outline btn-secondary">Cancel</label>\n        <label onClick={sendURL} className="btn">Add</label>\n      </div>\n    </div>\n  }\n\n  export default URLModal\n\n')),(0,o.kt)("p",null,"Now we need to import Redux Store to add the logics, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"  \n  import useExtensionsStore from \"@/stores/extensions\"\n  import { UrlExtension } from \"./UrlExtension\"\n\n  const URLModal = () => {\n  \n    ...\n    \n    const { addExtension } = useExtensionsStore()\n\n    const sendURL = () => {\n      if (url.trim() == '' && title.trim() == '') return;\n\n        const urlExt = new UrlExtension({ title, value: url })\n        addExtension(urlExt)\n        close()\n        return;\n    }\n\n    ...\n\n  }\n\n  export default URLModal\n")),(0,o.kt)("p",null,"Here's the full code for Modal file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'\n  import useExtensionsStore from "@/stores/extensions"\n  import { useState } from "react"\n  import { UrlExtension } from "./UrlExtension"\n  import useModalStore from "@/stores/modal"\n\n  const URLModal = () => {\n\n    const [url, setURL] = useState<string>(\'\')\n    const [title, setTitle] = useState<string>(\'\')\n\n    const { closeModal } = useModalStore()\n    const { addExtension } = useExtensionsStore()\n\n    const sendURL = () => {\n      if (url.trim() == \'\' && title.trim() == \'\') return;\n\n        const urlExt = new UrlExtension({ title, value: url })\n        addExtension(urlExt)\n        close()\n        return;\n    }\n\n    const close = () => {\n      setTitle(\'\')\n      setURL(\'\')\n      closeModal()\n    }\n\n    return <div>\n      <h3 className="font-bold text-lg">Attach an URL</h3>\n      <div className="mt-4">\n        <h2>External URL</h2>\n        <input type="text" value={url} onChange={(e) => setURL(e.target.value)} placeholder="Paste your external URL" className="input input-bordered w-full max-w-xs mt-1" />\n      </div>\n\n      <div className="mt-4">\n        <h2>Title</h2>\n        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Any title for the URL" className="input input-bordered w-full max-w-xs mt-1" />\n      </div>\n\n      <div className="modal-action">\n        <label onClick={close} className="btn btn-outline btn-secondary">Cancel</label>\n        <label onClick={sendURL} className="btn">Add</label>\n      </div>\n    </div>\n  }\n\n  export default URLModal\n\n')),(0,o.kt)("p",null,"Awesome, now we just need to add our newly created extension to the registry."))}u.isMDXComponent=!0},9435:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/url-modal-a203ad70556f55c5b21bab05b5c3fd9e.png"}}]);