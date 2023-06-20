"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[94],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={id:"schema",title:"Defining The Schema",description:"This section explains how to define the schema for an extension for the Light Grill app.",keywords:["Schema","Extensions","Light Grill","Building on Grill App","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},a=void 0,s={unversionedId:"develop/zero-to-hero/extension/schema",id:"develop/zero-to-hero/extension/schema",title:"Defining The Schema",description:"This section explains how to define the schema for an extension for the Light Grill app.",source:"@site/docs/develop/zero-to-hero/extension/Schema.md",sourceDirName:"develop/zero-to-hero/extension",slug:"/develop/zero-to-hero/extension/schema",permalink:"/docs/develop/zero-to-hero/extension/schema",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/zero-to-hero/extension/Schema.md",tags:[],version:"current",frontMatter:{id:"schema",title:"Defining The Schema",description:"This section explains how to define the schema for an extension for the Light Grill app.",keywords:["Schema","Extensions","Light Grill","Building on Grill App","Web3 Social","Blockchain","Subsocial"],displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Setting Up Light Grill Locally",permalink:"/docs/develop/zero-to-hero/extension/setup"},next:{title:"Creating An Input Modal",permalink:"/docs/develop/zero-to-hero/extension/modal"}},l={},c=[{value:"How are schema structures defined?",id:"how-are-schema-structures-defined",level:2},{value:"Schema for the URL Extension",id:"schema-for-the-url-extension",level:2},{value:"Defining the schema in Light Grill",id:"defining-the-schema-in-light-grill",level:2},{value:"Creating the UrlExtension File",id:"creating-the-urlextension-file",level:2},{value:"Creating a UI for URLs in the chat",id:"creating-a-ui-for-urls-in-the-chat",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The schema for an extension explains how the content will be stored on IPFS and parsed to render the React Component inside the chat."),(0,i.kt)("h2",{id:"how-are-schema-structures-defined"},"How are schema structures defined?"),(0,i.kt)("p",null,"Each extension is stored in the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "string",\n  "properties": {\n    // Your schema structure here.\n  }\n}\n')),(0,i.kt)("h2",{id:"schema-for-the-url-extension"},"Schema for the URL Extension"),(0,i.kt)("p",null,"In the case of the URL extension we need to have two properties in the schema:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Title: A caption for the URL, for example, LinkedIn, My Portfolio, etc."),(0,i.kt)("li",{parentName:"ul"},"Value: The actual URL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "string",\n  "properties": {\n    "title": "string",\n    "value": "string"\n  }\n}\n')),(0,i.kt)("h2",{id:"defining-the-schema-in-light-grill"},"Defining the schema in Light Grill"),(0,i.kt)("p",null,"Create a new folder named ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"components/Extensions")," directory."),(0,i.kt)("p",null,"Each extension needs to have 3 files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UrlExtension.tsx"),(0,i.kt)("li",{parentName:"ul"},"UrlModal.tsx"),(0,i.kt)("li",{parentName:"ul"},"index.tsx")),(0,i.kt)("p",null,"Where Url means the name of your extension and in the case of the current example it is ",(0,i.kt)("strong",{parentName:"p"},"Url")),(0,i.kt)("h2",{id:"creating-the-urlextension-file"},"Creating the UrlExtension File"),(0,i.kt)("p",null,"Inside the ",(0,i.kt)("strong",{parentName:"p"},"UrlExtension.tsx")," file under ",(0,i.kt)("inlineCode",{parentName:"p"},"components/Extensions/url")," directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'\nimport { ExtensionWidget, ExtensionSchema } from "../types";\n\nexport type UrlProperties = {\n  title: string\n  value: string\n}\n\n\n')),(0,i.kt)("p",null,"Now, we need to create a new class called ",(0,i.kt)("strong",{parentName:"p"},"UrlExtension"),", extending the ",(0,i.kt)("strong",{parentName:"p"},"ExtensionWidget")," class inside the same file to handle the rendering and computation of the schema data."),(0,i.kt)("p",null,"Inside ",(0,i.kt)("strong",{parentName:"p"},"UrlExtension.tsx")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'\nexport class UrlExtension extends ExtensionWidget<UrlProperties> {\n  public isPreviewReady: boolean = true;\n\n  // Schema Name to be used in IFPS storage.\n  static id: string = "URL"\n\n  constructor(properties: UrlProperties) {\n    super(UrlExtension.id, properties)\n  }\n\n  async loadPreview() {\n    // Use this method to call APIs, compute schema data, set object state, etc.\n    return this.render()\n  }\n  \n  render(): React.ReactNode {\n    // Write code to render the User Interface for the extension inside chat component.\n    return <></>\n  }\n}\n\n')),(0,i.kt)("h2",{id:"creating-a-ui-for-urls-in-the-chat"},"Creating a UI for URLs in the chat"),(0,i.kt)("p",null,"We have to rewrite the render method to display how we want to show the URL, in this case we just simply show the title, and hyperlink it with the actual URL."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"However, you can actually add more features like showing icons for a set of websites like Instagram, Twitter or Polkaverse, or adding link previews like Telegram, or even iFrames.")),(0,i.kt)("p",null,"Inside the ",(0,i.kt)("strong",{parentName:"p"},"UrlExtension.tsx")," update the ",(0,i.kt)("strong",{parentName:"p"},"render")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'  render(): React.ReactNode {\n    return <div>\n      <a target="_blank" className="link link-secondary" href={this.schema.properties.value}>{this.schema.properties.title}</a>\n    </div>\n  }\n')),(0,i.kt)("p",null,"Here's the full code for ",(0,i.kt)("strong",{parentName:"p"},"UrlExtension.tsx")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { ExtensionWidget, ExtensionSchema } from "../types";\n\nexport type UrlProperties = {\n  title: string\n  value: string\n}\n\nexport class UrlExtension extends ExtensionWidget<UrlProperties> {\n  public isPreviewReady: boolean = true;\n\n  // Schema Name to be used in IFPS storage.\n  static id: string = "URL"\n\n  constructor(properties: UrlProperties) {\n    super(UrlExtension.id, properties)\n  }\n\n  async loadPreview() {\n    return this.render()\n  }\n\n  render(): React.ReactNode {\n    return <div>\n      <a target="_blank" className="link link-secondary" href={this.schema.properties.value}>{this.schema.properties.title}</a>\n      </div>\n  }\n}\n\n')),(0,i.kt)("p",null,"Awesome, you are already half way. "),(0,i.kt)("p",null,"Let's see how to create an input modal next."))}h.isMDXComponent=!0}}]);