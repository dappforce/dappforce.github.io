"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[9087],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=s.createContext({}),c=function(e){var t=s.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return s.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),k=n,u=m["".concat(p,".").concat(k)]||m[k]||i[k]||r;return a?s.createElement(u,o(o({ref:t},d),{},{components:a})):s.createElement(u,o({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9886:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>i,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=a(3117),n=(a(7294),a(3905));const r={id:"spaces",title:"Spaces"},o=void 0,l={unversionedId:"develop/sdk/advanced/spaces",id:"develop/sdk/advanced/spaces",title:"Spaces",description:"Find and load a single space",source:"@site/docs/develop/sdk/advanced/Spaces.md",sourceDirName:"develop/sdk/advanced",slug:"/develop/sdk/advanced/spaces",permalink:"/docs/develop/sdk/advanced/spaces",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/sdk/advanced/Spaces.md",tags:[],version:"current",frontMatter:{id:"spaces",title:"Spaces"}},p={},c=[{value:"Find and load a single space",id:"find-and-load-a-single-space",level:2},{value:"findSpace",id:"findspace",level:3},{value:"Find and load an array of spaces",id:"find-and-load-an-array-of-spaces",level:2},{value:"findAllSpaces",id:"findallspaces",level:3},{value:"findSpaces",id:"findspaces",level:3},{value:"findPublicSpaces",id:"findpublicspaces",level:3},{value:"findUnlistedSpaces",id:"findunlistedspaces",level:3}],d={toc:c};function i(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"find-and-load-a-single-space"},"Find and load a single space"),(0,n.kt)("h3",{id:"findspace"},"findSpace"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"findSpace(query: FindSpaceQuery): Promise<SpaceData | undefined>\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"flatApi.subsocial.findSpace({id: '1'})\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Properties"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"id")),(0,n.kt)("td",{parentName:"tr",align:null},"ID of the desired struct.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"visibility")),(0,n.kt)("td",{parentName:"tr",align:null},"Filter for the visible state of the structs (see ",(0,n.kt)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility"},"Visibility"),").")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findspacequery"},"FindSpaceQuery"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstruct"},(0,n.kt)("em",{parentName:"a"},"FindStruct"))," < ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},(0,n.kt)("em",{parentName:"a"},"AnySpaceId"))," >")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},"SpaceData"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},(0,n.kt)("em",{parentName:"a"},"CommonData"))," < ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html"},(0,n.kt)("em",{parentName:"a"},"Space")),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent"},(0,n.kt)("em",{parentName:"a"},"SpaceContent"))," >")),(0,n.kt)("h2",{id:"find-and-load-an-array-of-spaces"},"Find and load an array of spaces"),(0,n.kt)("h3",{id:"findallspaces"},"findAllSpaces"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"flatApi.subsocial.findAllSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"flatApi.subsocial.findAllSpaces([ '1' ])\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},"AnySpaceId"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},(0,n.kt)("em",{parentName:"a"},"SpaceId"))," | ",(0,n.kt)("em",{parentName:"p"},"BN"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},"SpaceData"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},(0,n.kt)("em",{parentName:"a"},"CommonData"))," < ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html"},(0,n.kt)("em",{parentName:"a"},"Space")),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent"},(0,n.kt)("em",{parentName:"a"},"SpaceContent"))," >")),(0,n.kt)("h3",{id:"findspaces"},"findSpaces"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"flatApi.subsocial.findSpaces(query: FindSpacesQuery): Promise<SpaceData[]>\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"flatApi.subsocial.findSpaces({\n  ids: [ '1', '1354', '1573', '1599', '1040' ],\n  visibility: \"onlyVisible\",\n})\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Properties"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"ids")),(0,n.kt)("td",{parentName:"tr",align:null},"An array of IDs of the desired structs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"visibility")),(0,n.kt)("td",{parentName:"tr",align:null},"Filter for the visible state of the structs (see ",(0,n.kt)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility"},"Visibility"),").")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"withContentOnly?")),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean.")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility"},"Visibility"),": 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},"SpaceData"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},(0,n.kt)("em",{parentName:"a"},"CommonData"))," < ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html"},(0,n.kt)("em",{parentName:"a"},"Space")),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent"},(0,n.kt)("em",{parentName:"a"},"SpaceContent"))," >")),(0,n.kt)("h3",{id:"findpublicspaces"},"findPublicSpaces"),(0,n.kt)("p",null,"Load an array of information about public spaces from the Subsocial blockchain and IPFS by a given array of space ",(0,n.kt)("inlineCode",{parentName:"p"},"ids"),"."),(0,n.kt)("p",null,"A space is considered public if it meets these conditions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"hidden")," field on its blockchain structure is ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},"And there is a corresponding JSON file that represents the space's content on IPFS.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"flatApi.subsocial.findPublicSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"flatApi.subsocial.findPublicSpaces([ '1' ])\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},"AnySpaceId"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},(0,n.kt)("em",{parentName:"a"},"SpaceId"))," | ",(0,n.kt)("em",{parentName:"p"},"BN"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},"SpaceData"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},(0,n.kt)("em",{parentName:"a"},"CommonData"))," < ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html"},(0,n.kt)("em",{parentName:"a"},"Space")),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent"},(0,n.kt)("em",{parentName:"a"},"SpaceContent"))," >")),(0,n.kt)("h3",{id:"findunlistedspaces"},"findUnlistedSpaces"),(0,n.kt)("p",null,"Find and load an array of information about unlisted spaces from the Subsocial blockchain and IPFS by a given array of space ",(0,n.kt)("inlineCode",{parentName:"p"},"ids"),"."),(0,n.kt)("p",null,"A space is considered unlisted if it meets either of these conditions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"hidden")," field on its blockchain structure is ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},"Or there is no corresponding JSON file that represents the space's content on IPFS.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"flatApi.subsocial.findUnlistedSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"flatApi.subsocial.findUnlistedSpaces(['1'])\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid"},"AnySpaceId"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html"},(0,n.kt)("em",{parentName:"a"},"SpaceId"))," | ",(0,n.kt)("em",{parentName:"p"},"BN"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},"SpaceData"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata"},(0,n.kt)("em",{parentName:"a"},"CommonData"))," < ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html"},(0,n.kt)("em",{parentName:"a"},"Space")),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent"},(0,n.kt)("em",{parentName:"a"},"SpaceContent"))," >")))}i.isMDXComponent=!0}}]);