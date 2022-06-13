(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(7),c=(a(0),a(161)),s={id:"creating-spaces",title:"Creating And Updating Spaces"},p={unversionedId:"sdk/quick-start/spaces/creating-spaces",id:"sdk/quick-start/spaces/creating-spaces",isDocsHomePage:!1,title:"Creating And Updating Spaces",description:"Create A Space",source:"@site/docs/sdk/quick-start/spaces/CreatingSpaces.md",slug:"/sdk/quick-start/spaces/creating-spaces",permalink:"/docs/sdk/quick-start/spaces/creating-spaces",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/sdk/quick-start/spaces/CreatingSpaces.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting Spaces",permalink:"/docs/sdk/quick-start/spaces/getting-spaces"},next:{title:"Getting Posts",permalink:"/docs/sdk/quick-start/posts/getting-posts"}},b=[{value:"Create A Space",id:"create-a-space",children:[]},{value:"Update A Space",id:"update-a-space",children:[]}],o={toc:b};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"create-a-space"},"Create A Space"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"substrateApi.tx.spaces.createSpace(parentIdOpt, handleOpt, content, permissionsOpt)\n")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Params"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"parentIdOpt")),Object(c.b)("td",{parentName:"tr",align:null},"don't use now.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"handleOpt")),Object(c.b)("td",{parentName:"tr",align:null},"disabled now.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"content")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html"},"IpfsContent"),' is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}.')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"permissions")),Object(c.b)("td",{parentName:"tr",align:null},"advanced options.")))),Object(c.b)("p",null,"Example: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/types/substrate/classes\"\n...\nconst cid = await ipfs.saveContent({\n  about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',\n  image: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', // ipfsImageCid = await api.subsocial.ipfs.saveFile(file)\n  name: 'Subsocial',\n  tags: [ 'subsocial' ]\n})\n\nconst tx = substrateApi.tx.spaces.createSpace(\n  null,\n  null,\n  IpfsContent(cid),\n  null\n)\n...\n")),Object(c.b)("h2",{id:"update-a-space"},"Update A Space"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"substrateApi.tx.spaces.updateSpace(spaceId: AnySpaceId, update: SpaceUpdateType)\n")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Params"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"spaceId")),Object(c.b)("td",{parentName:"tr",align:null},"ID of the current space.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"update")),Object(c.b)("td",{parentName:"tr",align:null},"fields available to be updated.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Update properties")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Properties"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"handle"),"?"),Object(c.b)("td",{parentName:"tr",align:null},"if enabled. A handle is an alias for a space ID.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"content"),"?"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html"},"IpfsContent"),' is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}.')),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"hidden"),"?"),Object(c.b)("td",{parentName:"tr",align:null},"boolean, if space is hidden from other users.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"permissions"),"?"),Object(c.b)("td",{parentName:"tr",align:null},"advance opt.")))),Object(c.b)("p",null,"Example: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"import {\n  IpfsContent, \n  OptionBool,\n  SpaceUpdate\n} from \"@subsocial/types/substrate/classes\"\n\n...\nconst cid = await ipfs.saveContent({\n  about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',\n  image: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', \n  name: 'Subsocial updated', // updated field\n  tags: ['subsocial']\n})\n\nconst update = new SpaceUpdate({\n  content: IpfsContent(cid),\n  hidden: OptionBool(true),\n})\n\nconst tx = substrateApi.tx.spaces.updateSpace('1', update)\n...\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},"AnySpaceId"),": ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},Object(c.b)("em",{parentName:"a"},"SpaceId"))," | ",Object(c.b)("em",{parentName:"p"},"BN"),"  ")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spaceupdatetype"},"SpaceUpdateType"),": { content: ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/classes/optioncontent.html"},Object(c.b)("em",{parentName:"a"},"OptionContent")),", handle: ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/classes/optionoptiontext.html"},Object(c.b)("em",{parentName:"a"},"OptionOptionText")),", hidden: ",Object(c.b)("em",{parentName:"p"},"Option"),"<",Object(c.b)("em",{parentName:"p"},"bool"),">, permissions: ",Object(c.b)("em",{parentName:"p"},"Option"),"<",Object(c.b)("em",{parentName:"p"},"Option"),"<",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spacepermissions.html"},Object(c.b)("em",{parentName:"a"},"SpacePermissions"))," >> }  ")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\ud83c\udd78 ",Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceupdate.html"},"SpaceUpdate"),"  ")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/classes/optionbool.html"},"OptionBool"),"  ")))}i.isMDXComponent=!0},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),l=i(a),u=n,m=l["".concat(s,".").concat(u)]||l[u]||d[u]||c;return a?r.a.createElement(m,p(p({ref:t},o),{},{components:a})):r.a.createElement(m,p({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,s=new Array(c);s[0]=u;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var o=2;o<c;o++)s[o]=a[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);