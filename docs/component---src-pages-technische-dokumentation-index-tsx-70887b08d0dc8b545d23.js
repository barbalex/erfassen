(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{308:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(63),i=n(345),l=n.n(i),u=n(330),d=n.n(u),c=n(325),s=n.n(c),p=n(328),f=n.n(p),m=n(333),h=n.n(m),y=n(343),g=n.n(y),b=n(321),v=f()(h()({onClickMenuItem:function(e){var t=e.post;return function(){Object(r.navigate)(t.frontmatter.path+"/")}}}));t.default=v(function(e){var t=e.post,n=e.onClickMenuItem;return o.a.createElement(b.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{button:!0,onClick:n},o.a.createElement(d.a,{onClick:n},g()(t,"frontmatter.title","(Titel fehlt)"))),o.a.createElement(s.a,null)))})},316:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return v});n(153),n(93);var a=n(0),o=n.n(a),r=n(63),i=n(92),l=n(358),u=n.n(l),d=n(325),c=n.n(d),s=n(346),p=n(308),f=n(321),m=i.b.div.withConfig({displayName:"Technische-Dokumentation__Container",componentId:"tcetke-0"})(["margin-top:64px;height:calc(100vh - 64px);display:flex;"]),h=i.b.div.withConfig({displayName:"Technische-Dokumentation__Menu",componentId:"tcetke-1"})(["width:25%;min-width:320px;height:calc(100vh - 64px);overflow-y:auto;padding:25px 0;border-right:1px solid rgba(0,0,0,0.12);"]),y=i.b.div.withConfig({displayName:"Technische-Dokumentation__Doku",componentId:"tcetke-2"})(["width:100%;padding:25px;overflow-y:auto;ul{margin-top:0;}p,li{margin-bottom:0;}h1,h3,ol{margin-bottom:10px;}h2{margin-top:10px;margin-bottom:10px;}"]),g=i.b.div.withConfig({displayName:"Technische-Dokumentation__MenuTitle",componentId:"tcetke-3"})(["padding:0 24px;margin-bottom:14px;"]),b=Object(i.b)(r.Link).withConfig({displayName:"Technische-Dokumentation__MenuTitleLink",componentId:"tcetke-4"})(["font-size:21px;font-weight:700;text-decoration:none;color:rgba(0,0,0,0.87);&:hover{text-decoration:underline;}"]),v=(i.b.p.withConfig({displayName:"Technische-Dokumentation__DokuDate",componentId:"tcetke-5"})(["margin-bottom:15px !important;color:grey;"]),"2565606666");t.default=function(e){var t=e.data.allMarkdownRemark.edges;return o.a.createElement(f.a,null,o.a.createElement(s.a,null,o.a.createElement(m,null,o.a.createElement(h,null,o.a.createElement(g,null,o.a.createElement(b,{to:"/Technische-Dokumentation/"},"Technische Dokumentation")),o.a.createElement(u.a,{component:"nav"},o.a.createElement(c.a,null),t.filter(function(e){return!!e&&!!e.node}).map(function(e){var t=e.node;return o.a.createElement(p.default,{post:t,key:t.id})}))),o.a.createElement(y,null,o.a.createElement("p",null,"Hier erfahren Sie, wie erfassen.ch funktioniert")))))}},325:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=a(n(332))},330:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=a(n(331))},331:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=a(n(8)),r=a(n(15)),i=a(n(17)),l=a(n(0)),u=a(n(1)),d=a(n(318)),c=a(n(146)),s=a(n(335)),p=function(e){return{root:{flex:"1 1 auto",minWidth:0,padding:"0 16px","&:first-child":{paddingLeft:0}},inset:{"&:first-child":{paddingLeft:56}},dense:{fontSize:e.typography.pxToRem(13)},primary:{"&$textDense":{fontSize:"inherit"}},secondary:{"&$textDense":{fontSize:"inherit"}},textDense:{}}};function f(e,t){var n,a=e.children,u=e.classes,c=e.className,p=e.disableTypography,f=e.inset,m=e.primary,h=e.primaryTypographyProps,y=e.secondary,g=e.secondaryTypographyProps,b=(0,i.default)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),v=t.dense,k=null!=m?m:a;null==k||k.type===s.default||p||(k=l.default.createElement(s.default,(0,o.default)({variant:"subheading",internalDeprecatedVariant:!0,className:(0,d.default)(u.primary,(0,r.default)({},u.textDense,v)),component:"span"},h),k));var x=y;return null==x||x.type===s.default||p||(x=l.default.createElement(s.default,(0,o.default)({className:(0,d.default)(u.secondary,(0,r.default)({},u.textDense,v)),color:"textSecondary"},g),x)),l.default.createElement("div",(0,o.default)({className:(0,d.default)(u.root,(n={},(0,r.default)(n,u.dense,v),(0,r.default)(n,u.inset,f),n),c)},b),k,x)}t.styles=p,f.propTypes={},f.defaultProps={disableTypography:!1,inset:!1},f.contextTypes={dense:u.default.bool};var m=(0,c.default)(p,{name:"MuiListItemText"})(f);t.default=m},332:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=a(n(8)),r=a(n(15)),i=a(n(17)),l=a(n(0)),u=(a(n(1)),a(n(318))),d=a(n(146)),c=n(150),s=function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,c.fade)(e.palette.divider,.08)}}};function p(e){var t,n=e.absolute,a=e.classes,d=e.className,c=e.component,s=e.inset,p=e.light,f=(0,i.default)(e,["absolute","classes","className","component","inset","light"]),m=(0,u.default)(a.root,(t={},(0,r.default)(t,a.absolute,n),(0,r.default)(t,a.inset,s),(0,r.default)(t,a.light,p),t),d);return l.default.createElement(c,(0,o.default)({className:m},f))}t.styles=s,p.propTypes={},p.defaultProps={absolute:!1,component:"hr",inset:!1,light:!1};var f=(0,d.default)(s,{name:"MuiDivider"})(p);t.default=f}}]);
//# sourceMappingURL=component---src-pages-technische-dokumentation-index-tsx-70887b08d0dc8b545d23.js.map