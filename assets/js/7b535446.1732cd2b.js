(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[8609],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return f},kt:function(){return p}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,m=d["".concat(l,".").concat(p)]||d[p]||s[p]||i;return t?o.createElement(m,a(a({ref:n},f),{},{components:t})):o.createElement(m,a({ref:n},f))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1526:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:6},l={unversionedId:"configuration/delete_config",id:"configuration/delete_config",isDocsHomePage:!1,title:"Delete Configuration",description:"Configuration which is not needed anymore can also be deleted in automated fashion. This tool is looking for delete.yaml file located in projects root",source:"@site/docs/configuration/delete_config.md",sourceDirName:"configuration",slug:"/configuration/delete_config",permalink:"/dynatrace-monitoring-as-code/next/configuration/delete_config",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/docs/configuration/delete_config.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Plugin Configuration",permalink:"/dynatrace-monitoring-as-code/next/configuration/plugin_config"},next:{title:"Configuration Types and Token Permissions",permalink:"/dynatrace-monitoring-as-code/next/configuration/configTypes_tokenPermissions"}},u=[],f={toc:u};function s(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Configuration which is not needed anymore can also be deleted in automated fashion. This tool is looking for ",(0,i.kt)("inlineCode",{parentName:"p"},"delete.yaml")," file located in projects root\nfolder and deletes all configurations defined in this file after finishing deployment. ",(0,i.kt)("inlineCode",{parentName:"p"},"delete.yaml")," file structure should be defined as following, where\nbeside from API you also have to specify then ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," (not id) of configuration to be deleted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'delete:\n  - "auto-tag/my-tag"\n  - "custom-service-java/my custom service"\n...\n')),(0,i.kt)("p",null,"Warning: if the same name is used for the new config and config defined in delete.yaml, then config will be deleted right after deployment."))}s.isMDXComponent=!0}}]);