"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[7514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||n;return r?o.createElement(m,s(s({ref:t},c),{},{components:r})):o.createElement(m,s({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var o=r(3117),a=(r(7294),r(3905));const n={id:"create-profiles",title:"Create And Update Profiles",displayed_sidebar:"developSidebar"},s=void 0,i={unversionedId:"develop/sdk/profiles/create-profiles",id:"develop/sdk/profiles/create-profiles",title:"Create And Update Profiles",description:"This section covers how to create and update profiles on the Subsocial blockchain.",source:"@site/docs/develop/sdk/profiles/CreateProfiles.md",sourceDirName:"develop/sdk/profiles",slug:"/develop/sdk/profiles/create-profiles",permalink:"/docs/develop/sdk/profiles/create-profiles",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/sdk/profiles/CreateProfiles.md",tags:[],version:"current",frontMatter:{id:"create-profiles",title:"Create And Update Profiles",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Fetch Profiles",permalink:"/docs/develop/sdk/profiles/fetch-profiles"},next:{title:"Fetch Spaces",permalink:"/docs/develop/sdk/spaces/fetch-spaces"}},p={},l=[{value:"Create a profile",id:"create-a-profile",level:2},{value:"Update a profile",id:"update-a-profile",level:2}],c={toc:l};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This section covers how to create and update profiles on the Subsocial blockchain.")),(0,a.kt)("h2",{id:"create-a-profile"},"Create a profile"),(0,a.kt)("p",null,"To create a profile it is first necessary to create a space and then set it as the profile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"substrateApi.tx.spaces.createSpace(content, permissionsOpt)\nsubstrateApi.tx.profiles.setProfile(spaceId)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83c\udd78 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html"},"IpfsContent"),' is function that return substrate like implementation for enum { IPFS: "CID of your content"}.  ')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IpfsContent } from \"@subsocial/api/substrate/wrappers\"\n\n...\nconst cid = await api.ipfs.saveContent({\n  about: 'Subsocial official account.',\n  avatar: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', // ipfsImageCid = await api.subsocial.ipfs.saveFile(file)\n  name: 'Subsocial',\n})\n\nconst spaceTransaction = substrateApi.tx.spaces.createSpace(\n  IpfsContent(cid),\n  null // Permissions config (optional)\n)\n\n// Send the spaceTransaction and wait for it to get the newly created spaceId.\n// Now set this space as your profile.\n\nconst profileTx = substrateApi.tx.profiles.setProfile(spaceId);\n...\n")),(0,a.kt)("h2",{id:"update-a-profile"},"Update a profile"),(0,a.kt)("p",null,"Updating a profile is the same as updating the profile space. You can just update the profile space and it will work out of the box."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#profileupdatetype"},"ProfileUpdateType"),": { content: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/classes/optioncontent.html"},(0,a.kt)("em",{parentName:"a"},"OptionContent"))," }")))}f.isMDXComponent=!0}}]);