(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{113:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=o.a.createContext({}),l=function(t){var e=o.a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return o.a.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=l(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||m[b]||i;return n?o.a.createElement(d,s(s({ref:e},c),{},{components:n})):o.a.createElement(d,s({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},89:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(113)),a={title:"Install Pinot On Ubuntu",sidebar_label:"Ubuntu",description:"Install Pinot on the Ubuntu operating system"},s={unversionedId:"administration/installation/operating-systems/ubuntu",id:"administration/installation/operating-systems/ubuntu",isDocsHomePage:!1,title:"Install Pinot On Ubuntu",description:"Install Pinot on the Ubuntu operating system",source:"@site/docs/administration/installation/operating-systems/ubuntu.md",slug:"/administration/installation/operating-systems/ubuntu",permalink:"/docs/administration/installation/operating-systems/ubuntu",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration/installation/operating-systems/ubuntu.md",version:"current",sidebar_label:"Ubuntu",sidebar:"docs",previous:{title:"Install Pinot On MacOS",permalink:"/docs/administration/installation/operating-systems/macos"},next:{title:"Broker",permalink:"/docs/components/broker"}},u=[],c={rightToc:u};function l(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Pinot can be installed on the Ubuntu through the following methods:"))}l.isMDXComponent=!0}}]);