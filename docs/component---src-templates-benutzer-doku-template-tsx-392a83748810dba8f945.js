(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{311:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return x});a(153),a(93);var n=a(0),r=a.n(n),o=a(63),l=a(92),i=a(358),u=a.n(i),d=a(325),s=a.n(d),c=a(346),p=a(392),m=a(321),f=l.b.div.withConfig({displayName:"benutzerDokuTemplate__Container",componentId:"sc-1w1j7al-0"})(["margin-top:64px;height:calc(100vh - 64px);display:flex;"]),y=l.b.div.withConfig({displayName:"benutzerDokuTemplate__Menu",componentId:"sc-1w1j7al-1"})(["width:25%;min-width:320px;height:calc(100vh - 64px);overflow-y:auto;padding:25px 0;border-right:1px solid rgba(0,0,0,0.12);"]),h=l.b.div.withConfig({displayName:"benutzerDokuTemplate__Doku",componentId:"sc-1w1j7al-2"})(["width:100%;padding:25px;overflow-y:auto;ul{margin-top:0;}p,li{margin-bottom:0;}h1,h3,h4,ol{margin-bottom:10px;}h2{margin-top:10px;margin-bottom:10px;}"]),g=l.b.div.withConfig({displayName:"benutzerDokuTemplate__MenuTitle",componentId:"sc-1w1j7al-3"})(["padding:0 24px;margin-bottom:14px;"]),b=Object(l.b)(o.Link).withConfig({displayName:"benutzerDokuTemplate__MenuTitleLink",componentId:"sc-1w1j7al-4"})(["font-size:21px;font-weight:700;text-decoration:none;color:rgba(0,0,0,0.87);&:hover{text-decoration:underline;}"]),v=l.b.p.withConfig({displayName:"benutzerDokuTemplate__DokuDate",componentId:"sc-1w1j7al-5"})(["margin-bottom:15px !important;color:grey;"]),x="4193278439";t.default=function(e){var t=e.data,a=t.markdownRemark,n=t.allMarkdownRemark,o=a.frontmatter,l=a.html,i=n.edges;return r.a.createElement(m.a,null,r.a.createElement(c.a,null,r.a.createElement(f,null,r.a.createElement(y,null,r.a.createElement(g,null,r.a.createElement(b,{to:"/Benutzer-Dokumentation/"},"Benutzer-Dokumentation")),r.a.createElement(u.a,{component:"nav"},r.a.createElement(s.a,null),i.filter(function(e){return!!e&&!!e.node}).map(function(e){var t=e.node;return r.a.createElement(p.a,{post:t,key:t.id})}))),r.a.createElement(h,null,r.a.createElement("h1",null,o.title),r.a.createElement(v,null,o.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})))))}},325:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(332))},330:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(331))},331:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(8)),o=n(a(15)),l=n(a(17)),i=n(a(0)),u=n(a(1)),d=n(a(318)),s=n(a(146)),c=n(a(335)),p=function(e){return{root:{flex:"1 1 auto",minWidth:0,padding:"0 16px","&:first-child":{paddingLeft:0}},inset:{"&:first-child":{paddingLeft:56}},dense:{fontSize:e.typography.pxToRem(13)},primary:{"&$textDense":{fontSize:"inherit"}},secondary:{"&$textDense":{fontSize:"inherit"}},textDense:{}}};function m(e,t){var a,n=e.children,u=e.classes,s=e.className,p=e.disableTypography,m=e.inset,f=e.primary,y=e.primaryTypographyProps,h=e.secondary,g=e.secondaryTypographyProps,b=(0,l.default)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),v=t.dense,x=null!=f?f:n;null==x||x.type===c.default||p||(x=i.default.createElement(c.default,(0,r.default)({variant:"subheading",internalDeprecatedVariant:!0,className:(0,d.default)(u.primary,(0,o.default)({},u.textDense,v)),component:"span"},y),x));var w=h;return null==w||w.type===c.default||p||(w=i.default.createElement(c.default,(0,r.default)({className:(0,d.default)(u.secondary,(0,o.default)({},u.textDense,v)),color:"textSecondary"},g),w)),i.default.createElement("div",(0,r.default)({className:(0,d.default)(u.root,(a={},(0,o.default)(a,u.dense,v),(0,o.default)(a,u.inset,m),a),s)},b),x,w)}t.styles=p,m.propTypes={},m.defaultProps={disableTypography:!1,inset:!1},m.contextTypes={dense:u.default.bool};var f=(0,s.default)(p,{name:"MuiListItemText"})(m);t.default=f},332:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(8)),o=n(a(15)),l=n(a(17)),i=n(a(0)),u=(n(a(1)),n(a(318))),d=n(a(146)),s=a(150),c=function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,s.fade)(e.palette.divider,.08)}}};function p(e){var t,a=e.absolute,n=e.classes,d=e.className,s=e.component,c=e.inset,p=e.light,m=(0,l.default)(e,["absolute","classes","className","component","inset","light"]),f=(0,u.default)(n.root,(t={},(0,o.default)(t,n.absolute,a),(0,o.default)(t,n.inset,c),(0,o.default)(t,n.light,p),t),d);return i.default.createElement(s,(0,r.default)({className:f},m))}t.styles=c,p.propTypes={},p.defaultProps={absolute:!1,component:"hr",inset:!1,light:!1};var m=(0,d.default)(c,{name:"MuiDivider"})(p);t.default=m},392:function(e,t,a){"use strict";a(376),a(377);var n=a(0),r=a.n(n),o=a(63),l=a(345),i=a.n(l),u=a(330),d=a.n(u),s=a(325),c=a.n(s),p=a(328),m=a.n(p),f=a(333),y=a.n(f),h=a(22),g=a(92),b=a(343),v=a.n(b),x=a(321),w=Object(g.b)(i.a).withConfig({displayName:"MenuItem__ListItem",componentId:"sc-1f48m1p-0"})(["background-color:"," !important;"],function(e){return"true"===e.active?"#eaeaea":"unset"}),k=m()(y()({onClickMenuItem:function(e){var t=e.post;return function(){Object(o.navigate)(t.frontmatter.path+"/")}}}));t.a=k(function(e){var t=e.post,a=e.onClickMenuItem;return r.a.createElement(h.Location,null,function(e){var n=e.location,o=(t.frontmatter.path+"/"===n.pathname).toString();return r.a.createElement(x.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{button:!0,onClick:a,active:o},r.a.createElement(d.a,{onClick:a},v()(t,"frontmatter.title","(Titel fehlt)"))),r.a.createElement(c.a,null)))})})}}]);
//# sourceMappingURL=component---src-templates-benutzer-doku-template-tsx-392a83748810dba8f945.js.map