/*! For license information please see e2ccc6e4.ad6f7dd0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,b=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";var r=n(0),o=n(20);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},115:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},116:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},117:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(13),i=n(116),c=n(7),u=Object(r.createContext)({collectLink:function(){}}),s=n(118),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,f,p=e.isNavLink,d=e.to,b=e.href,m=e.activeClassName,v=e["data-noBrokenLinkCheck"],h=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),O=Object(s.b)().withBaseUrl,y=Object(r.useContext)(u),w=d||b,g=Object(i.a)(w),j=null==w?void 0:w.replace("pathname://",""),E=void 0!==j?function(e){return e.startsWith("/")}(n=j)?O(n):n:void 0,P=Object(r.useRef)(!1),x=p?a.e:a.c,N=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!N&&g&&window.docusaurus.prefetch(E),function(){N&&f&&f.disconnect()}}),[E,N,g]);var k=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,T=!E||!g||k;return E&&g&&!k&&!v&&y.collectLink(E),T?o.a.createElement("a",Object.assign({href:E},!g&&{target:"_blank",rel:"noopener noreferrer"},h)):o.a.createElement(x,Object.assign({},h,{onMouseEnter:function(){P.current||(window.docusaurus.preload(E),P.current=!0)},innerRef:function(e){var t,n;N&&e&&g&&(t=e,n=function(){window.docusaurus.prefetch(E)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:E||""},p&&{activeClassName:m}))}},118:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(114),o=n(116);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},120:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(117),i=n(115),c=n.n(i);n(48);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.icon,u=e.size,s=e.target,l=e.to,f=c()("jump-to","jump-to--"+u,n),p=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(i||"chevron-right")+" arrow"}))));return s?o.a.createElement("a",{href:l,target:s,className:f},p):o.a.createElement(a.a,{to:l,className:f},p)}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(6),a=(n(0),n(113)),i=n(120),c={title:"How To",description:"how to guides",sidebar_label:"hidden",hide_pagination:!0},u={unversionedId:"how-to",id:"how-to",isDocsHomePage:!1,title:"How To",description:"how to guides",source:"@site/docs/how-to.md",slug:"/how-to",permalink:"/docs/how-to",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/how-to.md",version:"current",sidebar_label:"hidden"},s=[],l={rightToc:s};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provide basic foundation of Pinot."),Object(a.b)(i.a,{to:"/docs/about/what_is_pinot/",mdxType:"Jump"},"What is Pinot?"),Object(a.b)(i.a,{to:"/docs/about/features_of_pinot/",mdxType:"Jump"},"Features of Pinot"),Object(a.b)(i.a,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Who is using Pinot?"))}f.isMDXComponent=!0}}]);