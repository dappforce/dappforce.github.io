/*! For license information please see 2.643501bc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{173:function(e,t,a){"use strict";var n=a(0),r=a(177);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},174:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(165),i=a(168),s=a(169),u=a(23),d=a(164);function m(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,m=void 0===d?"navbar__link--active":d,f=e.prependBaseUrlToHref,h=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(s.a)(c),b=Object(s.a)(t),p=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:f?p:l}:Object.assign({isNavLink:!0,activeClassName:m,to:v},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(b)}}:null),h),u)}function f(e){var t,a=e.items,i=e.position,s=e.className,u=Object(r.a)(e,["items","position","className"]),d=Object(c.useRef)(null),f=Object(c.useRef)(null),h=Object(c.useState)(!1),v=h[0],b=h[1];Object(c.useEffect)((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]);var p=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return a?o.a.createElement("div",{ref:d,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i,"dropdown--show":v})},o.a.createElement(m,Object(n.a)({className:p(s)},u,{onClick:u.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!v))}}),null!==(t=u.children)&&void 0!==t?t:u.label),o.a.createElement("ul",{ref:f,className:"dropdown__menu"},a.map((function(e,t){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:t},o.a.createElement(m,Object(n.a)({onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var n=d.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:p(c,!0)},l)))})))):o.a.createElement(m,Object(n.a)({className:p(s)},u))}function h(e){var t,a,i,s=e.items,f=e.className,h=(e.position,Object(r.a)(e,["items","className","position"])),v=Object(c.useRef)(null),b=Object(u.useLocation)().pathname,p=Object(c.useState)((function(){var e;return null===(e=!(null!=s&&s.some((function(e){return Object(d.isSamePath)(e.to,b)}))))||void 0===e||e})),g=p[0],E=p[1],k=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!s)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(m,Object(n.a)({className:k(f)},h)));var O=null!==(t=v.current)&&void 0!==t&&t.scrollHeight?(null===(a=v.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":g})},o.a.createElement(m,Object(n.a)({role:"button",className:k(f,!0)},h,{onClick:function(){E((function(e){return!e}))}}),null!==(i=h.children)&&void 0!==i?i:h.label),o.a.createElement("ul",{className:"menu__list",ref:v,style:{height:g?void 0:O}},s.map((function(e,t){var a=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(m,Object(n.a)({activeClassName:"menu__link--active",className:k(a)},c,{onClick:h.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,["mobile"]),c=a?h:f;return o.a.createElement(c,n)}},175:function(e,t,a){"use strict";var n=a(0),r=a(176);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},176:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},177:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(165),o=a(167),l=a(23),i=a(57),s=a.n(i);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var d=function(){var e=Object(n.useRef)(null),t=Object(l.useLocation)();return Object(n.useEffect)((function(){u(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:s.a.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.a.createElement(o.a,{id:"theme.SkipToContent.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=a(164),f=a(175),h=a(58),v=a.n(h);var b=function(){var e,t=Object(f.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,o=Object(m.useThemeConfig)().announcementBar;if(!o)return null;var l=o.content,i=o.backgroundColor,s=o.textColor,u=o.isCloseable;return!l||u&&a?null:r.a.createElement("div",{className:v.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:Object(c.a)(v.a.announcementBarContent,(e={},e[v.a.announcementBarCloseable]=u,e)),dangerouslySetInnerHTML:{__html:l}}),u?r.a.createElement("button",{type:"button",className:v.a.announcementBarClose,onClick:n,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},p=a(3),g=function(){return null},E=a(202),k=a.n(E),O=a(16),j=a(59),y=a.n(j),_=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(y.a.toggle,y.a.dark),style:a},t)},w=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(y.a.toggle,y.a.light),style:a},t)},C=function(e){var t=Object(m.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(O.default)().isClient;return r.a.createElement(k.a,Object(p.a)({disabled:!l,icons:{checked:r.a.createElement(_,{icon:a,style:n}),unchecked:r.a.createElement(w,{icon:c,style:o})}},e))},N=a(173),T=a(194),S=function(e){var t=Object(l.useLocation)(),a=Object(n.useState)(!e),r=a[0],c=a[1],o=Object(n.useRef)(!1),i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),m=d[0],f=d[1],h=Object(n.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().height)}),[]);return Object(T.a)((function(t){var a=t.scrollY;if(e&&!(a<m)){if(o.current)return o.current=!1,c(!1),void u(a);s&&0===a&&c(!0);var n=document.documentElement.scrollHeight-m,r=window.innerHeight;s&&a>=s?c(!1):a+r<n&&c(!0),u(a)}}),[s,m,o]),Object(n.useEffect)((function(){e&&s&&c(!0)}),[t.pathname]),Object(n.useEffect)((function(){e&&(o.current=!0)}),[t.hash]),{navbarRef:h,isNavbarVisible:r}},L=a(195),I=a(196),x=a(7),B=a(174),D=function(e){var t=e.width,a=void 0===t?20:t,n=e.height,c=void 0===n?20:n,o=Object(x.a)(e,["width","height"]);return r.a.createElement("svg",Object(p.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:a,height:c},o),r.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function A(e){var t=e.mobile,a=e.dropdownItemsBefore,n=e.dropdownItemsAfter,c=Object(x.a)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),o=Object(O.default)().i18n,l=o.currentLocale,i=o.locales,s=o.localeConfigs,u=Object(m.useAlternatePageUtils)();function d(e){return s[e].label}var f=i.map((function(e){var t="pathname://"+u.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":""}})),h=[].concat(a,f,n),v=t?"Languages":d(l);return r.a.createElement(B.a,Object(p.a)({},c,{mobile:t,label:r.a.createElement("span",null,r.a.createElement(D,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.a.createElement("span",null,v)),items:h}))}var P={default:function(){return B.a},localeDropdown:function(){return A},docsVersion:function(){return a(207).default},docsVersionDropdown:function(){return a(208).default},doc:function(){return a(209).default}};function M(e){var t=e.type,a=Object(x.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=P[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var V=a(197),U=a(199),F=a(61),R=a.n(F),H="right";var X=function(){var e,t,a=Object(m.useThemeConfig)(),o=a.navbar,l=o.items,i=o.hideOnScroll,s=o.style,u=a.colorMode.disableSwitch,d=Object(n.useState)(!1),f=d[0],h=d[1],v=Object(n.useState)(!1),b=v[0],E=v[1],k=Object(N.a)(),O=k.isDarkTheme,j=k.setLightTheme,y=k.setDarkTheme,_=S(i),w=_.navbarRef,T=_.isNavbarVisible;Object(L.a)(f);var x=Object(n.useCallback)((function(){h(!0)}),[h]),B=Object(n.useCallback)((function(){h(!1)}),[h]),D=Object(n.useCallback)((function(e){return e.target.checked?y():j()}),[j,y]),A=Object(I.a)();Object(n.useEffect)((function(){A===I.b.desktop&&h(!1)}),[A]);var P=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:H)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:H)}))}}(l),F=P.leftItems,X=P.rightItems;return r.a.createElement("nav",{ref:w,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===s,"navbar--primary":"primary"===s,"navbar-sidebar--show":f},e[R.a.navbarHideable]=i,e[R.a.navbarHidden]=!T,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:x,onKeyDown:x},r.a.createElement(U.a,null)),r.a.createElement(V.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(t={},t[R.a.hideLogoText]=b,t))}),F.map((function(e,t){return r.a.createElement(M,Object(p.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},X.map((function(e,t){return r.a.createElement(M,Object(p.a)({},e,{key:t}))})),!u&&r.a.createElement(C,{className:R.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:O,onChange:D}),r.a.createElement(g,{handleSearchBarToggle:E,isSearchBarExpanded:b}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:B}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(V.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:B}),!u&&f&&r.a.createElement(C,{"aria-label":"Dark mode toggle in sidebar",checked:O,onChange:D})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.a.createElement(M,Object(p.a)({mobile:!0},e,{onClick:B,key:t}))})))))))},z=a(168),G=a(169),Y=a(62),W=a.n(Y),K=a(198);function Q(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(x.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(G.a)(t),i=Object(G.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(z.a,Object(p.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?i:a}:{to:l},o),n)}var q=function(e){var t=e.sources,a=e.alt;return r.a.createElement(K.a,{className:"footer__logo",alt:a,sources:t})};var J=function(){var e=Object(m.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,o=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,s={light:Object(G.a)(i.src),dark:Object(G.a)(i.srcDark||i.src)};return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(Q,e))}))):null)}))),(i||a)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&(i.src||i.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:W.a.footerLogoLink},r.a.createElement(q,{alt:i.alt,sources:s})):r.a.createElement(q,{alt:i.alt,sources:s})),a?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null},Z=a(8),$="light",ee="dark",te=function(e){return e===ee?ee:$},ae=function(){return Z.a.canUseDOM?te(document.documentElement.getAttribute("data-theme")):$},ne=function(e){try{localStorage.setItem("theme",te(e))}catch(t){console.error(t)}},re=function(){var e=Object(m.useThemeConfig)().colorMode,t=e.disableSwitch,a=e.respectPrefersColorScheme,r=Object(n.useState)(ae),c=r[0],o=r[1],l=Object(n.useCallback)((function(){o($),ne($)}),[]),i=Object(n.useCallback)((function(){o(ee),ne(ee)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",te(c))}),[c]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&o(te(e))}catch(a){console.error(a)}}),[o]),Object(n.useEffect)((function(){t&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;o(t?ee:$)}))}),[]),{isDarkTheme:c===ee,setLightTheme:l,setDarkTheme:i}},ce=a(177);var oe=function(e){var t=re(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(ce.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},le="docusaurus.tab.",ie=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(le))e[n.substring(le.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},se="docusaurus.announcement.dismiss",ue="docusaurus.announcement.id",de=function(){var e=Object(m.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem(se,"true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(ue);"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem(ue,t),n&&localStorage.setItem(se,"false"),(n||"false"===localStorage.getItem(se))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},me=a(176);var fe=function(e){var t=ie(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=de(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(me.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function he(e){var t=e.children;return r.a.createElement(oe,null,r.a.createElement(fe,null,r.a.createElement(m.DocsPreferredVersionContextProvider,null,t)))}var ve=a(25);function be(e){var t=e.locale,a=e.version,n=e.tag;return r.a.createElement(ve.a,null,t&&r.a.createElement("meta",{name:"docusaurus_locale",content:""+t}),a&&r.a.createElement("meta",{name:"docusaurus_version",content:a}),n&&r.a.createElement("meta",{name:"docusaurus_tag",content:n}))}function pe(){var e=Object(O.default)().i18n,t=e.defaultLocale,a=e.locales,n=Object(m.useAlternatePageUtils)();return r.a.createElement(ve.a,null,a.map((function(e){return r.a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.a.createElement("link",{rel:"alternate",href:n.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ge(e){var t=e.permalink,a=Object(O.default)().siteConfig.url,n=function(){var e=Object(O.default)().siteConfig.url,t=Object(l.useLocation)().pathname;return e+Object(G.a)(t)}(),c=t?""+a+t:n;return r.a.createElement(ve.a,null,r.a.createElement("meta",{property:"og:url",content:c}),r.a.createElement("link",{rel:"canonical",href:c}))}function Ee(e){var t=Object(O.default)(),a=t.siteConfig,n=t.i18n.currentLocale,c=a.favicon,o=a.themeConfig,l=o.image,i=o.metadatas,s=e.title,u=e.description,d=e.image,f=e.keywords,h=e.searchMetadatas,v=Object(m.useTitleFormatter)(s),b=d||l,g=Object(G.a)(b,{absolute:!0}),E=Object(G.a)(c),k=n;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,null,r.a.createElement("html",{lang:k}),v&&r.a.createElement("title",null,v),v&&r.a.createElement("meta",{property:"og:title",content:v}),c&&r.a.createElement("link",{rel:"shortcut icon",href:E}),u&&r.a.createElement("meta",{name:"description",content:u}),u&&r.a.createElement("meta",{property:"og:description",content:u}),f&&f.length&&r.a.createElement("meta",{name:"keywords",content:Array.isArray(f)?f.join(","):f}),b&&r.a.createElement("meta",{property:"og:image",content:g}),b&&r.a.createElement("meta",{name:"twitter:image",content:g}),b&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(ge,null),r.a.createElement(pe,null),r.a.createElement(be,Object(p.a)({tag:m.DEFAULT_SEARCH_TAG,locale:n},h)),r.a.createElement(ve.a,null,i.map((function(e,t){return r.a.createElement("meta",Object(p.a)({key:"metadata_"+t},e))}))))}a(63);var ke=function(){Object(n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(64);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return ke(),r.a.createElement(he,null,r.a.createElement(Ee,e),r.a.createElement(d,null),r.a.createElement(b,null),r.a.createElement(X,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(J,null))}},194:function(e,t,a){"use strict";var n=a(0),r=a(8),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},195:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},196:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},197:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(168),i=a(198),s=a(169),u=a(16),d=a(164),m=a(178);t.a=function(e){var t=Object(u.default)().isClient,a=Object(d.useThemeConfig)().navbar,c=a.title,f=a.logo,h=void 0===f?{src:""}:f,v=e.imageClassName,b=e.titleClassName,p=Object(r.a)(e,["imageClassName","titleClassName"]),g=Object(s.a)(h.href||"/"),E=h.target?{target:h.target}:Object(m.a)(g)?{}:{rel:"noopener noreferrer",target:"_blank"},k={light:Object(s.a)(h.src),dark:Object(s.a)(h.srcDark||h.src)};return o.a.createElement(l.a,Object(n.a)({to:g},p,E),h.src&&o.a.createElement(i.a,{key:t,className:v,sources:k,alt:h.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:b},c))}},198:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(165),i=a(16),s=a(173),u=a(60),d=a.n(u);t.a=function(e){var t=Object(i.default)().isClient,a=Object(s.a)().isDarkTheme,c=e.sources,u=e.className,m=e.alt,f=void 0===m?"":m,h=Object(r.a)(e,["sources","className","alt"]),v=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,v.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:f,className:Object(l.a)(d.a.themedImage,d.a["themedImage--"+e],u)},h))})))}},199:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c);t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,l=void 0===c?30:c,i=e.className,s=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:i,width:a,height:l,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},202:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(203)),i=m(a(1)),s=m(a(204)),u=m(a(205)),d=a(206);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},203:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var l in n)a.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},204:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},205:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},206:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},207:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(174),i=a(166),s=a(164);function u(e){var t,a=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]),m=Object(i.useActiveVersion)(u),f=Object(s.useDocsPreferredVersion)(u).preferredVersion,h=Object(i.useLatestVersion)(u),v=null!==(t=null!=m?m:f)&&void 0!==t?t:h,b=null!=a?a:v.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(l.a,Object(n.a)({},d,{label:b,to:p}))}},208:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(174),i=a(166),s=a(164),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,a,c=e.mobile,d=e.docsPluginId,m=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,h=e.dropdownItemsAfter,v=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),b=Object(i.useActiveDocContext)(d),p=Object(i.useVersions)(d),g=Object(i.useLatestVersion)(d),E=Object(s.useDocsPreferredVersion)(d),k=E.preferredVersion,O=E.savePreferredVersionName;var j=null!==(t=null!==(a=b.activeVersion)&&void 0!==a?a:k)&&void 0!==t?t:g,y=c?"Versions":j.label,_=c?void 0:u(j).path;return o.a.createElement(l.a,Object(n.a)({},v,{mobile:c,label:y,to:_,items:function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){O(e.name)}}})),t=[].concat(f,e,h);if(!(t.length<=1))return t}(),isActive:m?function(){return!1}:void 0}))}},209:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(174),i=a(166),s=a(165),u=a(164);function d(e){var t,a,c=e.docId,d=e.activeSidebarClassName,m=e.label,f=e.docsPluginId,h=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),v=Object(i.useActiveDocContext)(f),b=v.activeVersion,p=v.activeDoc,g=Object(u.useDocsPreferredVersion)(f).preferredVersion,E=Object(i.useLatestVersion)(f),k=null!==(t=null!=b?b:g)&&void 0!==t?t:E,O=k.docs.find((function(e){return e.id===c}));if(!O)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+k.name+".\nAvailable docIds=\n- "+k.docs.join("\n- "));return o.a.createElement(l.a,Object(n.a)({exact:!0},h,{className:Object(s.a)(h.className,(a={},a[d]=p&&p.sidebar===O.sidebar,a)),label:null!=m?m:O.id,to:O.path}))}}}]);