"use strict";(self.webpackChunksubsocial_docs=self.webpackChunksubsocial_docs||[]).push([[1210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?r.createElement(u,s(s({ref:t},c),{},{components:n})):r.createElement(u,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={id:"home-screen-ui",title:"Home Screen UI",displayed_sidebar:"developSidebar"},s=void 0,i={unversionedId:"develop/zero-to-hero/twitter-dapp/home-screen-ui",id:"develop/zero-to-hero/twitter-dapp/home-screen-ui",title:"Home Screen UI",description:"Let's design the UI for the homescreen with a list of tweets.",source:"@site/docs/develop/zero-to-hero/twitter-dapp/HomeScreen.md",sourceDirName:"develop/zero-to-hero/twitter-dapp",slug:"/develop/zero-to-hero/twitter-dapp/home-screen-ui",permalink:"/docs/develop/zero-to-hero/twitter-dapp/home-screen-ui",draft:!1,editUrl:"https://github.com/dappforce/subsocial-docs/tree/main/docs/develop/zero-to-hero/twitter-dapp/HomeScreen.md",tags:[],version:"current",frontMatter:{id:"home-screen-ui",title:"Home Screen UI",displayed_sidebar:"developSidebar"},sidebar:"developSidebar",previous:{title:"Login Screen",permalink:"/docs/develop/zero-to-hero/twitter-dapp/login-screen"},next:{title:"Creating a Tweet",permalink:"/docs/develop/zero-to-hero/twitter-dapp/creating-tweet"}},l={},p=[{value:"Setup",id:"setup",level:3},{value:"Installing",id:"installing",level:4},{value:"React Components",id:"react-components",level:4}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's design the UI for the homescreen with a list of tweets."),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("h4",{id:"installing"},"Installing"),(0,a.kt)("p",null,"First we need to install a few more packages for the home screen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"  yarn add react-list react-contenteditable\n")),(0,a.kt)("h4",{id:"react-components"},"React Components"),(0,a.kt)("p",null,"Follow the steps to add the UI:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new file inside the ",(0,a.kt)("strong",{parentName:"li"},"src/components")," directory, with the name ",(0,a.kt)("strong",{parentName:"li"},"tweet-box.tsx"),", and add the following code for tweet box:")),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{alt:"Tweet Box UI",src:n(3253).Z,width:"1654",height:"362"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'  import ContentEditable, { ContentEditableEvent } from \'react-contenteditable\';\n  import { useState } from \'react\';\n  import { ReactComponent as Share } from \'../svgs/share.svg\'\n  import { ReactComponent as Gallery } from \'../svgs/gallery.svg\'\n  import { ReactComponent as Poll } from \'../svgs/poll.svg\'\n  import { ReactComponent as Emoji } from \'../svgs/emojis.svg\'\n  import { ReactComponent as Schedule } from \'../svgs/schedule.svg\'\n\n  const TweetBox: React.FC = () => {\n    const [tweetData, setTweet] = useState(\'\');\n\n    const onTweetBtnClick = async () => {\n      setTweet(\'\')\n    }\n\n    const updateTweetData = async (e: ContentEditableEvent) => {\n      setTweet(e.target.value);\n    };\n    return (\n      <div>\n        <div className="px-3 pt-3 pb-2 flex flex-wrap">\n          <a className="flex-shrink-0 h-12 w-12">\n            <div className="relative">\n              <div className="absolute anim left-0 right-0 top-0 bottom-0 z-10 hover:bg-black rounded-full hover:bg-opacity-15"></div>\n              <img\n                src="https://ipfs.subsocial.network/ipfs/Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe"\n                className="rounded-full min-w-full asd h-12 w-12"\n              />\n            </div>\n          </a>\n          <div id="tweet-box" className="flex-grow px-2 pt-3 pb-1 relative">\n            <div className="px-2">\n              <div className="pointer-events-none absolute text-gray-600 max-h-full text-lg">\n                {tweetData.length === 0 && "What\'s happening?"}\n              </div>\n\n              <ContentEditable\n                aria-multiline="true"\n                aria-autocomplete="list"\n                aria-describedby="tweet-box"\n                spellCheck\n                tagName="div"\n                className="text-white text-lg w-full focus:outline-none select-text whitespace-pre-wrap break-all inline-block"\n                onChange={updateTweetData}\n                html={tweetData}></ContentEditable>\n            </div>\n            <div className="flex flex-wrap justify-between mt-5">\n              <div className="flex items-center">\n                <button style={{ marginRight: 8 }}>\n                  <Gallery height="20px" width="20px" color=\'rgb(29, 155, 240)\' />\n                </button>\n                <button style={{ marginRight: 8 }}>\n                  <Share height="20px" width="20px" color=\'rgb(29, 155, 240)\' />\n                </button>\n                <button style={{ marginRight: 8 }}>\n                  <Poll height="20px" width="20px" color=\'rgb(29, 155, 240)\' />\n                </button>\n                <button style={{ marginRight: 8 }}>\n                  <Emoji height="20px" width="20px" color=\'rgb(29, 155, 240)\' />\n                </button>\n                <button style={{ marginRight: 8 }}>\n                  <Schedule height="20px" width="20px" color=\'rgb(29, 155, 240)\' />\n                </button>\n              </div>\n              <div className="">\n                <button\n                  onClick={onTweetBtnClick}\n                  disabled={tweetData.length === 0}\n                  className={`text-white px-4 py-2 shadow-sm focus:outline-none font-bold bg-primary rounded-full ${tweetData.length === 0 ? \'cursor-not-allowed opacity-50\' : \'\'\n                    }`}>\n                  Tweet\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div className="h-2 bg-gray-100 w-full bg-opacity-15"></div>\n      </div>\n    );\n  };\n\n  export default TweetBox;\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, let's create the UI of a tweet. Create a new file inside the ",(0,a.kt)("strong",{parentName:"p"},"src/components")," directory, with the name ",(0,a.kt)("strong",{parentName:"p"},"tweet.tsx"),", and paste the following code for the UI:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'  import { ReactComponent as ArrowDown } from \'../svgs/arrow-down.svg\';\n  import { ReactComponent as Replies } from \'../svgs/replies.svg\';\n  import { ReactComponent as Retweet } from \'../svgs/retweet.svg\';\n  import { ReactComponent as Share } from \'../svgs/share.svg\';\n  import { ReactComponent as Heart } from \'../svgs/heart.svg\'\n\n  export interface ITweet {\n    id?: string;\n    avatar?: string;\n    username?: string;\n    name?: string;\n    description?: string;\n    assets?: { type: string; url: string }[];\n    replies?: number;\n    retweets?: number;\n    likes?: number;\n    date?: string | Date;\n  }\n\n  const TweetComponent: React.FC<ITweet> = props => {\n\n    return (\n      <div className="flex cursor-pointer hover:bg-dark-lighter p-3 anim border-b border-gray-100 border-opacity-15">\n        <a className="flex-shrink-0 h-12 w-12 pt-1">\n          <div className="relative">\n            <div className="absolute anim left-0 right-0 top-0 bottom-0 z-10 hover:bg-black rounded-full hover:bg-opacity-15"></div>\n            <img src={props.avatar} className="rounded-full min-w-full asd h-12 w-12" />\n          </div>\n        </a>\n        <div className="flex-grow px-3 pb-1 relative">\n          <div className="flex">\n            <div className="flex flex-grow flex-wrap items-center">\n              <div>\n                <span className="text-white font-bold mr-1 cursor-pointer hover:underline">\n                  {props.name?.slice(0, 5) + \'...\' + props.name?.slice(props.name.length - 4)}\n                </span>\n                <span className="text-gray-600">\n                  {props.username} . {props.date?.toString()}\n                </span>\n              </div>\n            </div>\n            <button className="text-white rounded-full anim px-1 py-1 hover:bg-primary hover:bg-opacity-15 focus:bg-opacity-50 focus:outline-none">\n              <ArrowDown color="white" height="20px" width="20px" />\n            </button>\n          </div>\n          <div className="pr-1">\n            <span\n              className="text-white"\n              dangerouslySetInnerHTML={{ __html: props.description || \'\' }}></span>\n            <div className="mt-3 flex-wrap flex">\n              {props.assets?.map((file, idx) => (\n                <div\n                  key={idx}\n                  className={`rounded-lg overflow-hidden border border-gray-100 border-opacity-15 ${props.assets && props.assets.length > 1 ? \'w-full lg:w-1/2\' : \'w-full\'\n                    }`}>\n                  <img src={file.url} className="w-full" />\n                </div>\n              ))}\n            </div>\n          </div>\n          <div className="flex mt-3">\n            <div className="text-gray-500 select-none hover:text-primary anim flex items-center">\n              <Replies color="white" height="20px" width="20px" />\n              <span className="ml-3 text-xs">{props.replies}</span>\n            </div>\n            <div className="text-gray-500 select-none hover:text-green-600 anim flex items-center">\n              <Retweet color="white" height="20px" width="20px" />\n              <span className="ml-3 text-xs">{props.retweets}</span>\n            </div>\n            <div className="text-gray-500 select-none hover:text-pinkish anim flex items-center">\n              <Heart color="white" height="20px" width="20px" />\n              <span className="ml-3 text-xs">{props.likes}</span>\n            </div>\n            <div className="text-gray-500 select-none  hover:text-primary anim flex items-center">\n              <Share color="white" height="20px" width="20px" />\n            </div>\n          </div>\n        </div>\n      </div>\n    );\n  };\n\n  export default TweetComponent;\n\n')))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new file inside the ",(0,a.kt)("strong",{parentName:"p"},"src/screens")," directory, with the name ",(0,a.kt)("strong",{parentName:"p"},"home.tsx"),", and paste the following code for the UI:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport ReactList from \'react-list\'\nimport TweetBox from "../components/tweet-box";\nimport TweetComponent, { ITweet } from "../components/tweet";\nimport Logo from \'../svgs/logo.svg\';\n\nconst HomeScreen = () => {\n\n  const [tweets, setTweets] = useState<ITweet[]>([])\n\n  return (\n    <div className="flex">\n      <div className="flex flex-1 items-center justify-center">\n        <div className="w-full lg:w-1/2a">\n          <div className="p-3 border-b border-white border-opacity-15 sticky top-0 bg-dark z-50 flex">\n            <span className="text-white text-xl font-extrabold ml-10">Home</span>\n          </div>\n          <TweetBox />\n          <div>\n            <ReactList\n              type="variable"\n              axis="y"\n              length={tweets.length}\n              itemRenderer={(idx: any, key: any) => <TweetComponent key={key} {...tweets[idx]} />}\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}\n\nexport default HomeScreen\n')))))}d.isMDXComponent=!0},3253:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tweet-box-87ab56436d51a2d70f10c9fcca14c259.png"}}]);