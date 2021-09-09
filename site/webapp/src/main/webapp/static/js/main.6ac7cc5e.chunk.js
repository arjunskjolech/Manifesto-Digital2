(this["webpackJsonphee-react-csr"]=this["webpackJsonphee-react-csr"]||[]).push([[0],{42:function(e,t,a){e.exports=a(90)},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),i=a.n(l),s=a(39),o=a(3),c=a(26),m=a(23),u=a.n(m),h=a(5),p=a(41),d=a(2);function E(e){var t=e.component.getModels().articleDocument,a=t&&e.page.getContent(t),n=r.a.useContext(h.BrPageContext);if(!a||!n)return null;var l,i=a.getData(),s=i.title,o=i.summary,c=i.relatedNews,m=[],u=Object(p.a)(c);try{for(u.s();!(l=u.n()).done;){var E=l.value,g=E&&e.page.getContent(E);if(g){var f=g.getData(),w=f.title,v=f._links,b=g.getUrl();"internal"===(null===v||void 0===v?void 0:v.site.type)&&(b=(null===v||void 0===v?void 0:v.site).href),m.push(r.a.createElement(d.c.Item,{href:b,key:b},w))}}}catch(k){u.e(k)}finally{u.f()}return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.h,null,r.a.createElement("h2",null,s),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.value}})),r.a.createElement(d.c,null,r.a.createElement("h3",null,"Related Articles"),m))}function g(e){var t=e.component.getModels().user,a=r.a.useContext(h.BrPageContext);return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Azure AD User Profile"),r.a.createElement(d.i,{noBorder:!0},r.a.createElement(d.i.Row,null,r.a.createElement(d.i.Key,null,"Name"),r.a.createElement(d.i.Value,null,t.displayName)),r.a.createElement(d.i.Row,null,r.a.createElement(d.i.Key,null,"Username"),r.a.createElement(d.i.Value,null,t.username)),r.a.createElement(d.i.Row,null,r.a.createElement(d.i.Key,null,"Job Title"),r.a.createElement(d.i.Value,null,t.jobTitle)),r.a.createElement(d.i.Row,null,r.a.createElement(d.i.Key,null,"Groups"),r.a.createElement(d.i.Value,null,t.groups.map((function(e,t){return r.a.createElement(d.a,{key:t},e)})))))):a&&a.isPreview()?r.a.createElement(d.j,{label:"Azure AD User Profile"},r.a.createElement("p",null,"This component cannot be previewed in Channel Manager as it needs to get user profile from Azure AD which in turn requires an Azure AD/Office 365 user to be logged in.")):null}function f(){return r.a.createElement(d.d,null,r.a.createElement(d.d.List,{columns:!0},r.a.createElement(d.d.ListItem,{href:"https://www.nhs.uk/nhs-sites/"},"NHS sites"),r.a.createElement(d.d.ListItem,{href:"https://www.nhs.uk/about-us/"},"About us"),r.a.createElement(d.d.ListItem,{href:"https://www.nhs.uk/contact-us/"},"Contact us"),r.a.createElement(d.d.ListItem,{href:"https://www.nhs.uk/personalisation/login.aspx"},"Profile editor login"),r.a.createElement(d.d.ListItem,{href:"https://www.nhs.uk/about-us/sitemap/"},"Sitemap"),r.a.createElement(d.d.ListItem,{href:"https://www.nhs.uk/accessibility/"},"Accessibility"),r.a.createElement(d.d.ListItem,{href:"https://www.nhs.uk/our-policies/"},"Our policies"),r.a.createElement(d.d.ListItem,{href:"https://www.nhs.uk/our-policies/cookies-policy/"},"Cookies")),r.a.createElement(d.d.Copyright,null,"\xa9 Crown copyright"))}function w(e){var t=e.component.getModels().heroBannerDocument,a=t&&e.page.getContent(t);if(!a)return null;var n=a.getData(),l=n.heading,i=n.summaryText;return r.a.createElement(d.g,null,r.a.createElement(d.g.Heading,null,l),r.a.createElement(d.g.Text,null,i))}function v(e){var t=e.item;return t._links.site?r.a.createElement(d.f.NavItem,{href:t._links.site.href},t.name):r.a.createElement(d.f.NavItem,{disabled:!0},t.name)}function b(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),"\xa0",r.a.createElement(d.e,{action:"/site/logout",method:"post"},"\xa0\xa0",r.a.createElement(d.b,{secondary:!0},"Logout")))}function k(){var e=r.a.useContext(h.BrComponentContext),t=r.a.useContext(h.BrPageContext);if(!e||!t)return null;var a=t.toJSON()._links.site.href,n=!1;a.endsWith("/user-home-page")&&(n=!0);var l="south-east,west-midlands,greater-london,north-east,north-west,south-west-england,midlands-east,south-east-england,east-england,south-east-england,yorkshire-and-humber".split(","),i="/site";l.forEach((function(e){-1===a.indexOf("/site/"+e)&&-1===a.indexOf("/site/_cmsinternal/"+e)||(i="/site/"+e)}));var s=e.getModels().menu,o=e.getModels().headerTheme;return r.a.createElement(d.f,{orgName:o.orgName,orgSplit:o.orgSplit,orgDescriptor:o.orgDescriptor,white:o.whiteHeaderBg},r.a.createElement(d.f.Container,null,r.a.createElement(d.f.Logo,{href:i}),r.a.createElement(d.f.Content,null,r.a.createElement(d.f.MenuToggle,null),r.a.createElement(d.f.Search,null),n&&r.a.createElement(b,null))),r.a.createElement(d.f.Nav,{className:t.isPreview()?"has-edit-button":""},r.a.createElement(h.BrManageMenuButton,{menu:s}),s.siteMenuItems.map((function(e,t){return r.a.createElement(v,{key:t,item:e})}))))}function y(e){var t=e.component.getModels().sharepointSiteFiles,a=r.a.useContext(h.BrPageContext);return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Sharepoint Documents"),Object.keys(t).map((function(e,a){return r.a.createElement(d.c,{key:a},r.a.createElement(d.i.Row,null,r.a.createElement("b",null,e)),t[e].map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(d.c.Item,{href:e.url,key:t,target:"_blank"},e.title),"\xa0\xa0\xa0\xa0\xa0\xa0[",e.fileType,"] [Last Modified By: ",e.modifiedBy,", Date: ",new Date(e.modifiedDate).toUTCString(),"]"))})))}))):a&&a.isPreview()?r.a.createElement(d.j,{label:"Sharepoint Documents"},r.a.createElement("p",null,"This component cannot be previewed in Channel Manager as it needs to list files from Sharepoint which in turn requires an Azure AD/Office 365 user to be logged in.")):null}u.a.interceptors.request.use((function(e){return Object(c.a)(Object(c.a)({},e),{},{withCredentials:!0})})),i.a.render(r.a.createElement(s.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/(.*)",component:function(e){var t="south-east,west-midlands,greater-london,north-east,north-west,south-west-england,midlands-east,south-east-england,east-england,south-east-england,yorkshire-and-humber".split(","),a="http://localhost:8080/site",n="http://localhost:8080/site/_cmsinternal",l=e.location.pathname;t.forEach((function(t){e.location.pathname.startsWith("/site/"+t)&&(a+="/"+t,l=e.location.pathname.replace("/site/"+t,"")),e.location.pathname.startsWith("/site/_cmsinternal/"+t)&&(n+="/"+t,l=e.location.pathname.replace("/site/_cmsinternal/"+t,"/site/_cmsinternal"))})),l.startsWith("/site")&&!l.startsWith("/site/_cmsinternal")&&(l=e.location.pathname.substring("/site".length));var i={httpClient:u.a,options:{live:{cmsBaseUrl:a,spaBaseUrl:""},preview:{cmsBaseUrl:n,spaBaseUrl:"/site/_cmsinternal?bloomreach-preview=true"}},request:{path:"".concat(l).concat(e.location.search)}},s={Article:E,"AzureAD Profile":g,"Hero Banner":w,"Sharepoint Files":y};return r.a.createElement(h.BrPage,{configuration:i,mapping:s},r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark sticky-top bg-dark",role:"navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement(h.BrComponent,{path:"menu"},r.a.createElement(k,null)))))),r.a.createElement(h.BrComponent,{path:"hero"}),r.a.createElement("div",{className:"nhsuk-width-container"},r.a.createElement("main",{className:"nhsuk-main-wrapper",id:"maincontent"},r.a.createElement(h.BrComponent,{path:"main"}))),r.a.createElement(f,null))}}),r.a.createElement(o.a,{to:"/"}))),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.6ac7cc5e.chunk.js.map