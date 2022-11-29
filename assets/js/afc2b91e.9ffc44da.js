"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[8379],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var s=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,s,n=function(t,e){if(null==t)return{};var a,s,n={},o=Object.keys(t);for(s=0;s<o.length;s++)a=o[s],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)a=o[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=s.createContext({}),d=function(t){var e=s.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return s.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),k=d(a),u=n,c=k["".concat(i,".").concat(u)]||k[u]||m[u]||o;return a?s.createElement(c,l(l({ref:e},p),{},{components:a})):s.createElement(c,l({ref:e},p))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=k;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=t,r.mdxType="string"==typeof t?t:n,l[1]=r;for(var d=2;d<o;d++)l[d]=a[d];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6333:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=a(3117),n=(a(7294),a(3905));const o={id:"posts-with-details",title:"Posts With Details",displayed_sidebar:"developSidebar"},l=void 0,r={unversionedId:"develop/how-to-guides/posts/posts-with-details",id:"develop/how-to-guides/posts/posts-with-details",title:"Posts With Details",description:"All entities (posts, profiles, and spaces) are interconnected. For faster data retrieval use",source:"@site/docs/develop/how-to-guides/posts/PostWithDetails.md",sourceDirName:"develop/how-to-guides/posts",slug:"/develop/how-to-guides/posts/posts-with-details",permalink:"/docs/develop/how-to-guides/posts/posts-with-details",draft:!1,editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/posts/PostWithDetails.md",tags:[],version:"current",frontMatter:{id:"posts-with-details",title:"Posts With Details",displayed_sidebar:"developSidebar"},sidebar:"developSidebar"},i={},d=[{value:"Find and load a single post",id:"find-and-load-a-single-post",level:2},{value:"findPostWithAllDetails",id:"findpostwithalldetails",level:3},{value:"findPostWithSomeDetails",id:"findpostwithsomedetails",level:3},{value:"Find and load an array of posts",id:"find-and-load-an-array-of-posts",level:2},{value:"findPostsWithAllDetails",id:"findpostswithalldetails",level:3},{value:"findPublicPostsWithAllDetails",id:"findpublicpostswithalldetails",level:3},{value:"findUnlistedPostsWithAllDetails",id:"findunlistedpostswithalldetails",level:3},{value:"findPublicPostsWithSomeDetails",id:"findpublicpostswithsomedetails",level:3}],p={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,s.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"All entities (posts, profiles, and spaces) are interconnected. For faster data retrieval use\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"findPostWithAllDetails")," method."),(0,n.kt)("h2",{id:"find-and-load-a-single-post"},"Find and load a single post"),(0,n.kt)("h3",{id:"findpostwithalldetails"},"findPostWithAllDetails"),(0,n.kt)("p",null,"Finds and loads a post with their extension and the owner's profile and space (if defined)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"flatApi.findPostWithAllDetails(id: AnyPostId): Promise<PostWithAllDetails | undefined>\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"flatApi.findPostWithAllDetails('1')\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "ext": undefined,\n  "id": "1",\n  "post": {"id": "1"...},\n  "owner": {"id": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8"...},\n  "space": {"id": "1"...}\n}\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},"AnyPostId"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html"},(0,n.kt)("em",{parentName:"a"},"PostId"))," | ",(0,n.kt)("em",{parentName:"p"},"BN"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails"},"PostWithAllDetails"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner"},(0,n.kt)("em",{parentName:"a"},"PostWithOwner"))," & ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace"},(0,n.kt)("em",{parentName:"a"},"PostWithSpace")))),(0,n.kt)("h3",{id:"findpostwithsomedetails"},"findPostWithSomeDetails"),(0,n.kt)("p",null,"Finds and loads a post with their extension and the owner's profile (if defined)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"flatApi.findPostWithSomeDetails(query: FindPostWithDetailsQuery): Promise<PostWithSomeDetails | undefined>\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Properties"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"ids")),(0,n.kt)("td",{parentName:"tr",align:null},"An array of IDs of desired structs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"visibility")),(0,n.kt)("td",{parentName:"tr",align:null},"Filter for the visible state of the structs (see ",(0,n.kt)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility"},"Visibility"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"withContentOnly?")),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"withSpace?")),(0,n.kt)("td",{parentName:"tr",align:null},"Pass ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," to get the space data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"withOwner?")),(0,n.kt)("td",{parentName:"tr",align:null},"Pass ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," to get the profile data.")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility"},"Visibility"),": 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'")),(0,n.kt)("p",null,"The four visible state filters correspond to the next conditions:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Filters"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"onlyVisible")),(0,n.kt)("td",{parentName:"tr",align:null},"returns posts where the ",(0,n.kt)("inlineCode",{parentName:"td"},"hidden")," field on the corresponding Substrate struct is ",(0,n.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"onlyHidden")),(0,n.kt)("td",{parentName:"tr",align:null},"returns posts where the ",(0,n.kt)("inlineCode",{parentName:"td"},"hidden")," field on the corresponding Substrate struct is ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"onlyPublic")),(0,n.kt)("td",{parentName:"tr",align:null},"returns posts where the ",(0,n.kt)("inlineCode",{parentName:"td"},"hidden")," field on the corresponding Substrate struct is ",(0,n.kt)("inlineCode",{parentName:"td"},"false")," and there is a corresponding JSON file on IPFS.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"onlyUnlisted")),(0,n.kt)("td",{parentName:"tr",align:null},"returns posts where either the ",(0,n.kt)("inlineCode",{parentName:"td"},"hidden")," field is ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," or there is no corresponding JSON file on IPFS.")))),(0,n.kt)("p",null,"Example: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"flatApi.findPostWithSomeDetails({id: '1'})\n")),(0,n.kt)("p",null,"Output: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "ext": undefined,\n  "id": "1",\n  "post": {"id": "1"...},\n  "owner": undefined,\n  "space": undefined\n}\n')),(0,n.kt)("p",null,"Example with owner: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"flatApi.findPostWithSomeDetails({id: '1', withOwner: true})\n")),(0,n.kt)("p",null,"Output: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "ext": undefined,\n  "id": "1",\n  "post": {"id": "1"...},\n  "owner": {"id": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8"...},\n  "space": undefined\n}\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails"},"PostWithSomeDetails"),": { ext?: ",(0,n.kt)("em",{parentName:"p"},"Exclude"),"<",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails"},(0,n.kt)("em",{parentName:"a"},"PostWithSomeDetails")),', "ext">; owner?: ',(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata"},(0,n.kt)("em",{parentName:"a"},"ProfileData")),"; post: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata"},(0,n.kt)("em",{parentName:"a"},"PostData")),"; space?: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},(0,n.kt)("em",{parentName:"a"},"SpaceData"))," }")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostwithdetailsquery"},"FindPostWithDetailsQuery"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostquery"},(0,n.kt)("em",{parentName:"a"},"FindPostQuery"))," & ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#postdetailsopts"},(0,n.kt)("em",{parentName:"a"},"PostDetailsOpts"),"   "))),(0,n.kt)("h2",{id:"find-and-load-an-array-of-posts"},"Find and load an array of posts"),(0,n.kt)("h3",{id:"findpostswithalldetails"},"findPostsWithAllDetails"),(0,n.kt)("p",null,"findPostsWithAllDetails returns information of the post, space and owner (profile)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"flatApi.findPostsWithAllDetails(query: FindPostsQuery): Promise<PostWithAllDetails[]>\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Properties"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"ids")),(0,n.kt)("td",{parentName:"tr",align:null},"An array of IDs of desired structs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"visibility")),(0,n.kt)("td",{parentName:"tr",align:null},"Filter for the visible state of the structs (see ",(0,n.kt)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility"},"Visibility"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"withContentOnly?")),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean.")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostsquery"},"FindPostsQuery"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstructs"},(0,n.kt)("em",{parentName:"a"},"FindStructs"))," < ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},(0,n.kt)("em",{parentName:"a"},"AnyPostId"))," >")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails"},"PostWithAllDetails"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner"},(0,n.kt)("em",{parentName:"a"},"PostWithOwner"))," & ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace"},(0,n.kt)("em",{parentName:"a"},"PostWithSpace")))),(0,n.kt)("p",null,"\ud83d\udc47 ",(0,n.kt)("strong",{parentName:"p"},"There are also methods with ready-made visibility filters.")),(0,n.kt)("h3",{id:"findpublicpostswithalldetails"},"findPublicPostsWithAllDetails"),(0,n.kt)("p",null,"Find and load posts that have the ",(0,n.kt)("inlineCode",{parentName:"p"},"hidden == false")," field in their Substrate struct and their IPFS content is\nnot empty, using their extension and the owner's profile and space (if defined)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"flatApi.findPublicPostsWithAllDetails(ids: AnyPostId[]): Promise<PostWithAllDetails[]>\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails"},"PostWithAllDetails"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner"},(0,n.kt)("em",{parentName:"a"},"PostWithOwner"))," & ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace"},(0,n.kt)("em",{parentName:"a"},"PostWithSpace")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},"AnyPostId"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html"},(0,n.kt)("em",{parentName:"a"},"PostId"))," | ",(0,n.kt)("em",{parentName:"p"},"BN"))),(0,n.kt)("h3",{id:"findunlistedpostswithalldetails"},"findUnlistedPostsWithAllDetails"),(0,n.kt)("p",null,"Find and load posts that have the ",(0,n.kt)("inlineCode",{parentName:"p"},"hidden == true")," field in their Substrate struct and their IPFS content is\nnot empty, using their extension and owner's profile and space (if defined)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"flatApi.findUnlistedPostsWithAllDetails(ids: AnyPostId[]): Promise<PostWithAllDetails[]>\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails"},"PostWithAllDetails"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner"},(0,n.kt)("em",{parentName:"a"},"PostWithOwner"))," & ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace"},(0,n.kt)("em",{parentName:"a"},"PostWithSpace")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},"AnyPostId"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html"},(0,n.kt)("em",{parentName:"a"},"PostId"))," | ",(0,n.kt)("em",{parentName:"p"},"BN"))),(0,n.kt)("h3",{id:"findpublicpostswithsomedetails"},"findPublicPostsWithSomeDetails"),(0,n.kt)("p",null,"Load an array of information about public posts with the space and/or owner."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"flatApi.findPublicPostsWithSomeDetails(query: FindPostsWithDetailsQuery): Promise<PostWithSomeDetails[]\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Properties"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"ids")),(0,n.kt)("td",{parentName:"tr",align:null},"An array of IDs of desired structs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"visibility")),(0,n.kt)("td",{parentName:"tr",align:null},"Filter for the visible state of the structs (see ",(0,n.kt)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility"},"Visibility"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"withContentOnly?")),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"withSpace?")),(0,n.kt)("td",{parentName:"tr",align:null},"Pass ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," to get the space data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"withOwner?")),(0,n.kt)("td",{parentName:"tr",align:null},"Pass ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," to get the profile data.")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostswithdetailsquery"},"FindPostsWithDetailsQuery"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostsquery"},(0,n.kt)("em",{parentName:"a"}," FindPostsQuery"))," & ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#postdetailsopts"},(0,n.kt)("em",{parentName:"a"},"PostDetailsOpts")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udd83 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails"},"PostWithSomeDetails"),": { ext?: ",(0,n.kt)("em",{parentName:"p"},"Exclude"),"<",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails"},(0,n.kt)("em",{parentName:"a"},"PostWithSomeDetails")),', "ext">; owner?: ',(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata"},(0,n.kt)("em",{parentName:"a"},"ProfileData")),"; post: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata"},(0,n.kt)("em",{parentName:"a"},"PostData")),"; space?: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},(0,n.kt)("em",{parentName:"a"},"SpaceData"))," }")))}m.isMDXComponent=!0}}]);