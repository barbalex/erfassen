(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{293:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(57),l=n(332),i=n.n(l),u=n(316),d=n.n(u),s=n(311),c=n.n(s),p=n(314),f=n.n(p),m=n(319),y=n.n(m),h=n(330),g=n.n(h),v=n(307),b=f()(y()({onClickMenuItem:function(e){var t=e.post;return function(){Object(o.navigate)(t.frontmatter.path+"/")}}}));t.default=b(function(e){var t=e.post,n=e.onClickMenuItem;return r.a.createElement(v.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{button:!0,onClick:n},r.a.createElement(d.a,{onClick:n},g()(t,"frontmatter.title","(Titel fehlt)"))),r.a.createElement(c.a,null)))})},299:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return b});n(142),n(85);var a=n(0),r=n.n(a),o=n(57),l=n(84),i=n(346),u=n.n(i),d=n(311),s=n.n(d),c=n(333),p=n(293),f=n(307),m=l.b.div.withConfig({displayName:"Benutzer-Dokumentation__Container",componentId:"red361-0"})(["margin-top:64px;height:calc(100vh - 64px);display:flex;"]),y=l.b.div.withConfig({displayName:"Benutzer-Dokumentation__Menu",componentId:"red361-1"})(["width:25%;min-width:320px;height:calc(100vh - 64px);overflow-y:auto;padding:25px 0;border-right:1px solid rgba(0,0,0,0.12);"]),h=l.b.div.withConfig({displayName:"Benutzer-Dokumentation__Doku",componentId:"red361-2"})(["width:100%;padding:25px;overflow-y:auto;ul{margin-top:0;}p,li{margin-bottom:0;}h1,h3,ol{margin-bottom:10px;}h2{margin-top:10px;margin-bottom:10px;}"]),g=l.b.div.withConfig({displayName:"Benutzer-Dokumentation__MenuTitle",componentId:"red361-3"})(["padding:0 24px;margin-bottom:14px;"]),v=Object(l.b)(o.Link).withConfig({displayName:"Benutzer-Dokumentation__MenuTitleLink",componentId:"red361-4"})(["font-size:21px;font-weight:700;text-decoration:none;color:rgba(0,0,0,0.87);&:hover{text-decoration:underline;}"]),b="3515430989";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(f.a,null,r.a.createElement(c.a,null,r.a.createElement(m,null,r.a.createElement(y,null,r.a.createElement(g,null,r.a.createElement(v,{to:"/Benutzer-Dokumentation/"},"Benutzer-Dokumentation")),r.a.createElement(u.a,{component:"nav"},r.a.createElement(s.a,null),t.filter(function(e){return!!e&&!!e.node}).map(function(e){var t=e.node;return r.a.createElement(p.default,{post:t,key:t.id})}))),r.a.createElement(h,null,r.a.createElement("p",null,"Hoffentlich nützliche Infos für Sie")))))}},311:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(318))},316:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(317))},317:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(7)),o=a(n(12)),l=a(n(14)),i=a(n(0)),u=a(n(1)),d=a(n(304)),s=a(n(135)),c=a(n(321)),p=function(e){return{root:{flex:"1 1 auto",minWidth:0,padding:"0 16px","&:first-child":{paddingLeft:0}},inset:{"&:first-child":{paddingLeft:56}},dense:{fontSize:e.typography.pxToRem(13)},primary:{"&$textDense":{fontSize:"inherit"}},secondary:{"&$textDense":{fontSize:"inherit"}},textDense:{}}};function f(e,t){var n,a=e.children,u=e.classes,s=e.className,p=e.disableTypography,f=e.inset,m=e.primary,y=e.primaryTypographyProps,h=e.secondary,g=e.secondaryTypographyProps,v=(0,l.default)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),b=t.dense,x=null!=m?m:a;null==x||x.type===c.default||p||(x=i.default.createElement(c.default,(0,r.default)({variant:"subheading",internalDeprecatedVariant:!0,className:(0,d.default)(u.primary,(0,o.default)({},u.textDense,b)),component:"span"},y),x));var k=h;return null==k||k.type===c.default||p||(k=i.default.createElement(c.default,(0,r.default)({className:(0,d.default)(u.secondary,(0,o.default)({},u.textDense,b)),color:"textSecondary"},g),k)),i.default.createElement("div",(0,r.default)({className:(0,d.default)(u.root,(n={},(0,o.default)(n,u.dense,b),(0,o.default)(n,u.inset,f),n),s)},v),x,k)}t.styles=p,f.propTypes={},f.defaultProps={disableTypography:!1,inset:!1},f.contextTypes={dense:u.default.bool};var m=(0,s.default)(p,{name:"MuiListItemText"})(f);t.default=m},318:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(7)),o=a(n(12)),l=a(n(14)),i=a(n(0)),u=(a(n(1)),a(n(304))),d=a(n(135)),s=n(139),c=function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,s.fade)(e.palette.divider,.08)}}};function p(e){var t,n=e.absolute,a=e.classes,d=e.className,s=e.component,c=e.inset,p=e.light,f=(0,l.default)(e,["absolute","classes","className","component","inset","light"]),m=(0,u.default)(a.root,(t={},(0,o.default)(t,a.absolute,n),(0,o.default)(t,a.inset,c),(0,o.default)(t,a.light,p),t),d);return i.default.createElement(s,(0,r.default)({className:m},f))}t.styles=c,p.propTypes={},p.defaultProps={absolute:!1,component:"hr",inset:!1,light:!1};var f=(0,d.default)(c,{name:"MuiDivider"})(p);t.default=f}}]);
//# sourceMappingURL=component---src-pages-benutzer-dokumentation-index-tsx-7e846213fe48356025f4.js.map