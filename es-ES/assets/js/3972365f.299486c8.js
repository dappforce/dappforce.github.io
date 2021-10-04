(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(115)),i={id:"roles-and-permissions",title:"Roles y Permisos"},c={unversionedId:"lightpaper/architecture/roles-and-permissions",id:"lightpaper/architecture/roles-and-permissions",isDocsHomePage:!1,title:"Roles y Permisos",description:"Subsocial ofrece de forma nativa cuatro roles integrados y din\xe1micos. Los propietarios de espacios pueden especificar y luego actualizar el rol de forma din\xe1mica sobre cualquier cuenta de Subsocial, as\xed\u0301 como designar que\u0301 permisos est\xe1n asociados a ese rol.",source:"@site/i18n/es-ES/docusaurus-plugin-content-docs/current/lightpaper/architecture/RolesAndPermissions.md",slug:"/lightpaper/architecture/roles-and-permissions",permalink:"/es-ES/docs/lightpaper/architecture/roles-and-permissions",editUrl:"https://github.com/dappforce/dappforce.github.io/docs/lightpaper/architecture/RolesAndPermissions.md",version:"current",sidebar:"someSidebar",previous:{title:"Moneda estable",permalink:"/es-ES/docs/lightpaper/architecture/monetization/stablecoins"},next:{title:"Moderaci\xf3n del contenido",permalink:"/es-ES/docs/lightpaper/architecture/moderation"}},l=[{value:"Por ejemplo, un espacio similar al de Twitter",id:"por-ejemplo-un-espacio-similar-al-de-twitter",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Subsocial ofrece de forma nativa cuatro roles integrados y din\xe1micos. Los propietarios de espacios pueden especificar y luego actualizar el rol de forma din\xe1mica sobre cualquier cuenta de Subsocial, as\xed\u0301 como designar que\u0301 permisos est\xe1n asociados a ese rol."),Object(o.b)("p",null,"Estos serian los cuatro roles integrados:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Role"),Object(o.b)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Todo el mundo"),Object(o.b)("td",{parentName:"tr",align:null},"Cualquier cuenta en la blockchain de Subsocial.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Ninguno"),Object(o.b)("td",{parentName:"tr",align:null},"Ninguna cuenta podr\xeda hacerlo.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Seguidor"),Object(o.b)("td",{parentName:"tr",align:null},"Cualquier cuenta que siga un espacio determinado.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Propietario del espacio"),Object(o.b)("td",{parentName:"tr",align:null},"Un propietario vigente de un espacio determinado.")))),Object(o.b)("p",null,"Los roles pueden asumir diferentes permisos seg\xfan lo desee el propietario del espacio o el moderador. Al igual que con otras plataformas de redes sociales, es importante definir los permisos teniendo en cuenta las siguientes cuestiones:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\xbfQui\xe9n puede crear publicaciones y comentarios en un espacio?"),Object(o.b)("li",{parentName:"ul"},"\xbfEs posible editar una publicaci\xf3n o un comentario?"),Object(o.b)("li",{parentName:"ul"},"\xbfEs posible eliminar una publicaci\xf3n o un comentario?"),Object(o.b)("li",{parentName:"ul"},"\xbfEs posible el voto positivo/negativo o compartir un post?"),Object(o.b)("li",{parentName:"ul"},"... y mucho m\xe1s.")),Object(o.b)("h2",{id:"por-ejemplo-un-espacio-similar-al-de-twitter"},"Por ejemplo, un espacio similar al de Twitter"),Object(o.b)("p",null,"Si quieres que sea similar a Twitter, implementar\xedas los permisos en tu espacio de la siguiente manera:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"S\xf3lo el propietario puede escribir post en un espacio determinado."),Object(o.b)("li",{parentName:"ul"},"Desactivar la edici\xf3n de publicaciones y comentarios."),Object(o.b)("li",{parentName:"ul"},"Desactivar el voto negativo (downvotes).")),Object(o.b)("p",null,"Los roles y permisos permiten que un espacio sea flexible, personal y que defina un control de acceso granular. Esto ayuda a la gesti\xf3n del espacio cuando este representa a un grupo de personas, como una comunidad, una organizaci\xf3n o un equipo."))}u.isMDXComponent=!0}}]);