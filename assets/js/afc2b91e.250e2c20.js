(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var s=a(3),n=a(7),o=(a(0),a(163)),l={id:"posts-with-details",title:"Posts With Details",displayed_sidebar:"developSidebar"},r={unversionedId:"develop/how-to-guides/posts/posts-with-details",id:"develop/how-to-guides/posts/posts-with-details",isDocsHomePage:!1,title:"Posts With Details",description:"All entities (posts, profiles, and spaces) are interconnected. For faster data retrieval use",source:"@site/docs/develop/how-to-guides/posts/PostWithDetails.md",slug:"/develop/how-to-guides/posts/posts-with-details",permalink:"/docs/develop/how-to-guides/posts/posts-with-details",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/develop/how-to-guides/posts/PostWithDetails.md",version:"current"},i=[{value:"Find and load a single post",id:"find-and-load-a-single-post",children:[{value:"findPostWithAllDetails",id:"findpostwithalldetails",children:[]},{value:"findPostWithSomeDetails",id:"findpostwithsomedetails",children:[]}]},{value:"Find and load an array of posts",id:"find-and-load-an-array-of-posts",children:[{value:"findPostsWithAllDetails",id:"findpostswithalldetails",children:[]},{value:"findPublicPostsWithAllDetails",id:"findpublicpostswithalldetails",children:[]},{value:"findUnlistedPostsWithAllDetails",id:"findunlistedpostswithalldetails",children:[]},{value:"findPublicPostsWithSomeDetails",id:"findpublicpostswithsomedetails",children:[]}]}],b={toc:i};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All entities (posts, profiles, and spaces) are interconnected. For faster data retrieval use\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"findPostWithAllDetails")," method."),Object(o.b)("h2",{id:"find-and-load-a-single-post"},"Find and load a single post"),Object(o.b)("h3",{id:"findpostwithalldetails"},"findPostWithAllDetails"),Object(o.b)("p",null,"Finds and loads a post with their extension and the owner's profile and space (if defined)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"flatApi.findPostWithAllDetails(id: AnyPostId): Promise<PostWithAllDetails | undefined>\n")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"flatApi.findPostWithAllDetails('1')\n")),Object(o.b)("p",null,"Output:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "ext": undefined,\n  "id": "1",\n  "post": {"id": "1"...},\n  "owner": {"id": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8"...},\n  "space": {"id": "1"...}\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},"AnyPostId"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html"},Object(o.b)("em",{parentName:"a"},"PostId"))," | ",Object(o.b)("em",{parentName:"p"},"BN"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails"},"PostWithAllDetails"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner"},Object(o.b)("em",{parentName:"a"},"PostWithOwner"))," & ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace"},Object(o.b)("em",{parentName:"a"},"PostWithSpace")))),Object(o.b)("h3",{id:"findpostwithsomedetails"},"findPostWithSomeDetails"),Object(o.b)("p",null,"Finds and loads a post with their extension and the owner's profile (if defined)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"flatApi.findPostWithSomeDetails(query: FindPostWithDetailsQuery): Promise<PostWithSomeDetails | undefined>\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Properties"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"ids")),Object(o.b)("td",{parentName:"tr",align:null},"An array of IDs of desired structs.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"visibility")),Object(o.b)("td",{parentName:"tr",align:null},"Filter for the visible state of the structs (see ",Object(o.b)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility"},"Visibility"),")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"withContentOnly?")),Object(o.b)("td",{parentName:"tr",align:null},"Boolean.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"withSpace?")),Object(o.b)("td",{parentName:"tr",align:null},"Pass ",Object(o.b)("inlineCode",{parentName:"td"},"true")," to get the space data.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"withOwner?")),Object(o.b)("td",{parentName:"tr",align:null},"Pass ",Object(o.b)("inlineCode",{parentName:"td"},"true")," to get the profile data.")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility"},"Visibility"),": 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'")),Object(o.b)("p",null,"The four visible state filters correspond to the next conditions:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Filters"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"onlyVisible")),Object(o.b)("td",{parentName:"tr",align:null},"returns posts where the ",Object(o.b)("inlineCode",{parentName:"td"},"hidden")," field on the corresponding Substrate struct is ",Object(o.b)("inlineCode",{parentName:"td"},"false"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"onlyHidden")),Object(o.b)("td",{parentName:"tr",align:null},"returns posts where the ",Object(o.b)("inlineCode",{parentName:"td"},"hidden")," field on the corresponding Substrate struct is ",Object(o.b)("inlineCode",{parentName:"td"},"true"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"onlyPublic")),Object(o.b)("td",{parentName:"tr",align:null},"returns posts where the ",Object(o.b)("inlineCode",{parentName:"td"},"hidden")," field on the corresponding Substrate struct is ",Object(o.b)("inlineCode",{parentName:"td"},"false")," and there is a corresponding JSON file on IPFS.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"onlyUnlisted")),Object(o.b)("td",{parentName:"tr",align:null},"returns posts where either the ",Object(o.b)("inlineCode",{parentName:"td"},"hidden")," field is ",Object(o.b)("inlineCode",{parentName:"td"},"true")," or there is no corresponding JSON file on IPFS.")))),Object(o.b)("p",null,"Example: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"flatApi.findPostWithSomeDetails({id: '1'})\n")),Object(o.b)("p",null,"Output: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "ext": undefined,\n  "id": "1",\n  "post": {"id": "1"...},\n  "owner": undefined,\n  "space": undefined\n}\n')),Object(o.b)("p",null,"Example with owner: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"flatApi.findPostWithSomeDetails({id: '1', withOwner: true})\n")),Object(o.b)("p",null,"Output: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "ext": undefined,\n  "id": "1",\n  "post": {"id": "1"...},\n  "owner": {"id": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8"...},\n  "space": undefined\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails"},"PostWithSomeDetails"),": { ext?: ",Object(o.b)("em",{parentName:"p"},"Exclude"),"<",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails"},Object(o.b)("em",{parentName:"a"},"PostWithSomeDetails")),', "ext">; owner?: ',Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata"},Object(o.b)("em",{parentName:"a"},"ProfileData")),"; post: ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata"},Object(o.b)("em",{parentName:"a"},"PostData")),"; space?: ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},Object(o.b)("em",{parentName:"a"},"SpaceData"))," }")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostwithdetailsquery"},"FindPostWithDetailsQuery"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostquery"},Object(o.b)("em",{parentName:"a"},"FindPostQuery"))," & ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#postdetailsopts"},Object(o.b)("em",{parentName:"a"},"PostDetailsOpts"),"   "))),Object(o.b)("h2",{id:"find-and-load-an-array-of-posts"},"Find and load an array of posts"),Object(o.b)("h3",{id:"findpostswithalldetails"},"findPostsWithAllDetails"),Object(o.b)("p",null,"findPostsWithAllDetails returns information of the post, space and owner (profile)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"flatApi.findPostsWithAllDetails(query: FindPostsQuery): Promise<PostWithAllDetails[]>\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Properties"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"ids")),Object(o.b)("td",{parentName:"tr",align:null},"An array of IDs of desired structs.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"visibility")),Object(o.b)("td",{parentName:"tr",align:null},"Filter for the visible state of the structs (see ",Object(o.b)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility"},"Visibility"),")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"withContentOnly?")),Object(o.b)("td",{parentName:"tr",align:null},"Boolean.")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostsquery"},"FindPostsQuery"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstructs"},Object(o.b)("em",{parentName:"a"},"FindStructs"))," < ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},Object(o.b)("em",{parentName:"a"},"AnyPostId"))," >")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails"},"PostWithAllDetails"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner"},Object(o.b)("em",{parentName:"a"},"PostWithOwner"))," & ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace"},Object(o.b)("em",{parentName:"a"},"PostWithSpace")))),Object(o.b)("p",null,"\ud83d\udc47 ",Object(o.b)("strong",{parentName:"p"},"There are also methods with ready-made visibility filters.")),Object(o.b)("h3",{id:"findpublicpostswithalldetails"},"findPublicPostsWithAllDetails"),Object(o.b)("p",null,"Find and load posts that have the ",Object(o.b)("inlineCode",{parentName:"p"},"hidden == false")," field in their Substrate struct and their IPFS content is\nnot empty, using their extension and the owner's profile and space (if defined)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"flatApi.findPublicPostsWithAllDetails(ids: AnyPostId[]): Promise<PostWithAllDetails[]>\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails"},"PostWithAllDetails"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner"},Object(o.b)("em",{parentName:"a"},"PostWithOwner"))," & ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace"},Object(o.b)("em",{parentName:"a"},"PostWithSpace")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},"AnyPostId"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html"},Object(o.b)("em",{parentName:"a"},"PostId"))," | ",Object(o.b)("em",{parentName:"p"},"BN"))),Object(o.b)("h3",{id:"findunlistedpostswithalldetails"},"findUnlistedPostsWithAllDetails"),Object(o.b)("p",null,"Find and load posts that have the ",Object(o.b)("inlineCode",{parentName:"p"},"hidden == true")," field in their Substrate struct and their IPFS content is\nnot empty, using their extension and owner's profile and space (if defined)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"flatApi.findUnlistedPostsWithAllDetails(ids: AnyPostId[]): Promise<PostWithAllDetails[]>\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails"},"PostWithAllDetails"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner"},Object(o.b)("em",{parentName:"a"},"PostWithOwner"))," & ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace"},Object(o.b)("em",{parentName:"a"},"PostWithSpace")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid"},"AnyPostId"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html"},Object(o.b)("em",{parentName:"a"},"PostId"))," | ",Object(o.b)("em",{parentName:"p"},"BN"))),Object(o.b)("h3",{id:"findpublicpostswithsomedetails"},"findPublicPostsWithSomeDetails"),Object(o.b)("p",null,"Load an array of information about public posts with the space and/or owner."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"flatApi.findPublicPostsWithSomeDetails(query: FindPostsWithDetailsQuery): Promise<PostWithSomeDetails[]\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Properties"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"ids")),Object(o.b)("td",{parentName:"tr",align:null},"An array of IDs of desired structs.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"visibility")),Object(o.b)("td",{parentName:"tr",align:null},"Filter for the visible state of the structs (see ",Object(o.b)("a",{parentName:"td",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility"},"Visibility"),")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"withContentOnly?")),Object(o.b)("td",{parentName:"tr",align:null},"Boolean.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"withSpace?")),Object(o.b)("td",{parentName:"tr",align:null},"Pass ",Object(o.b)("inlineCode",{parentName:"td"},"true")," to get the space data.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("em",{parentName:"td"},"withOwner?")),Object(o.b)("td",{parentName:"tr",align:null},"Pass ",Object(o.b)("inlineCode",{parentName:"td"},"true")," to get the profile data.")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostswithdetailsquery"},"FindPostsWithDetailsQuery"),": ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostsquery"},Object(o.b)("em",{parentName:"a"}," FindPostsQuery"))," & ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules.html#postdetailsopts"},Object(o.b)("em",{parentName:"a"},"PostDetailsOpts")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83c\udd83 ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails"},"PostWithSomeDetails"),": { ext?: ",Object(o.b)("em",{parentName:"p"},"Exclude"),"<",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails"},Object(o.b)("em",{parentName:"a"},"PostWithSomeDetails")),', "ext">; owner?: ',Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata"},Object(o.b)("em",{parentName:"a"},"ProfileData")),"; post: ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata"},Object(o.b)("em",{parentName:"a"},"PostData")),"; space?: ",Object(o.b)("a",{parentName:"p",href:"https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata"},Object(o.b)("em",{parentName:"a"},"SpaceData"))," }")))}d.isMDXComponent=!0},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return u}));var s=a(0),n=a.n(s);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),d=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=s,u=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return a?n.a.createElement(u,r(r({ref:t},b),{},{components:a})):n.a.createElement(u,r({ref:t},b))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,l=new Array(o);l[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:s,l[1]=r;for(var b=2;b<o;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);