(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{283:function(e,n,t){"use strict";t.r(n);var r=t(4),a=t.n(r),o=(t(112),t(6)),i=t.n(o),l=t(5),c=t.n(l),s=t(290),m=t(539),u=(t(537),t(105)),d=t.n(u),p=t(295),b=t(134),f=s.b.div.withConfig({displayName:"Projekte__Container",componentId:"sc-1c9qmuu-0"})(["margin-top:64px;min-height:calc(100vh - 64px);"]),h=Object(s.b)(m.a).withConfig({displayName:"Projekte__ReflexContainer",componentId:"sc-1c9qmuu-1"})(["height:calc(100vh - 64px) !important;"]),g=d()(b.b);n.default=g(function(e){var n=e.db,t=void 0===n?{}:n;return t?(console.log("Projekte, db:",t),c.a.createElement(p.a,null,c.a.createElement(f,null,c.a.createElement(h,{orientation:"vertical"},c.a.createElement(m.b,{flex:.3,propagateDimensions:!0,renderOnResizeRate:200,renderOnResize:!0},c.a.createElement("p",null,"Tree")),c.a.createElement(m.c,null),c.a.createElement(m.b,{propagateDimensions:!0,renderOnResizeRate:200,renderOnResize:!0},c.a.createElement("p",null,"Form"),c.a.createElement("button",{onClick:i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.ort.insert({name:"test-ort",type:"ort"}));case 1:case"end":return e.stop()}},e,this)}))},"insert ort"),c.a.createElement("button",{onClick:i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.beob.insert({art:"test-art",type:"beob"}));case 1:case"end":return e.stop()}},e,this)}))},"insert beob")))))):c.a.createElement(p.a,null,c.a.createElement(f,null,"Lade daten..."))})},294:function(e){e.exports={data:{site:{siteMetadata:{title:"erfassen"}}}}},295:function(e,n,t){"use strict";var r=t(306),a=t.n(r),o=t(294),i=t(5),l=t.n(i),c=t(307),s=t.n(c),m=t(79),u=t(290),d=t(318),p=t(304),b=t.n(p),f=t(319),h=t.n(f),g=(t(300),t(301),t(315)),k=t.n(g),w=t(316),v=t.n(w),x=t(317),E=t.n(x),y=t(296),j=t.n(y),C=t(314),O=t.n(C),_=t(326),P=t(40),S=t(105),T=t.n(S),R=t(302),q=t.n(R),N=Object(u.b)(j.a).withConfig({displayName:"header__SiteTitle",componentId:"sc-4q4ver-0"})(["display:none;cursor:pointer;@media (min-width:700px){display:block;}"]),z=u.b.div.withConfig({displayName:"header__Spacer",componentId:"sc-4q4ver-1"})(["flex-grow:1;"]),I=Object(u.b)(O.a).withConfig({displayName:"header__NavButton",componentId:"sc-4q4ver-2"})(["color:white !important;border:",";border-color:rgba(255,255,255,0.5) !important;font-weight:",";"],function(e){return e.active?"1px white":"unset"},function(e){return e.active?"700":"600"}),L=T()(q()({onClickSiteTitle:function(){return function(){return Object(m.navigate)("/")}}}))(function(e){var n=e.onClickSiteTitle;return l.a.createElement(P.Location,null,function(e){var t=e.location.pathname;return l.a.createElement(k.a,{position:"fixed"},l.a.createElement(v.a,null,l.a.createElement(N,{variant:"title",color:"inherit",noWrap:!0,title:"Home",onClick:n},"erfassen.ch"),l.a.createElement(z,null),l.a.createElement(I,{variant:"/"===t?"outlined":"text",component:m.Link,to:"/",active:("/"===t).toString()},"Home"),l.a.createElement(I,{variant:"/Projekte/"===t?"outlined":"text",component:m.Link,to:"/Projekte/",active:("/Projekte/"===t).toString()},"Projekte"),l.a.createElement(E.a,{"aria-haspopup":"true","aria-label":"Konto",onClick:function(){return console.log("TODO")},color:"inherit",title:"Konto"},l.a.createElement(_.a,null))))})});function M(){var e=a()(["\n  html {\n    overflow: hidden;\n  }\n\n/* scrollbars */\n\n::-webkit-scrollbar {\n  width: 12px;\n  background: rgba(255, 253, 231, 0.1);\n}\n\n::-webkit-scrollbar:horizontal {\n  height: 12px;\n}\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.4);\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.5);\n  background: rgba(85, 85, 85, 0.05);\n}\n\n::-webkit-scrollbar-corner {\n  background: rgba(0, 0, 0, 0);\n}\n  \n\n/*\n * seems that overflow:hidden is necessary\n * for all relfex-elements\n * BUT: map is not shown with it...\n */\n\n.reflex-element:not(.karte) {\n  border-right: 0 !important;\n  border-left: 0 !important;\n}\n\n/*\n.reflex-element:not(.karte) > div {\n  overflow: hidden;\n}*/\n\n.reflex-splitter {\n  background-color: #fffde7 !important;\n  border-right: 1px solid #fffde7 !important;\n  border-left: 1px solid #fffde7 !important;\n}\n\n.reflex-splitter:hover {\n  background-color: #fff59d !important;\n  border-right: 1px solid #fff59d !important;\n  border-left: 1px solid #fff59d !important;\n}\n"]);return M=function(){return e},e}var D=Object(u.a)(M()),F=Object(d.createMuiTheme)({palette:{type:"light",primary:{main:h.a[500]},error:{main:b.a[500]}}});n.a=function(e){var n=e.children;return l.a.createElement(m.StaticQuery,{query:"4130953669",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(D,null),l.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(d.MuiThemeProvider,{theme:F},l.a.createElement(l.a.Fragment,null,l.a.createElement(L,null),n)))},data:o})}}}]);
//# sourceMappingURL=component---src-pages-projekte-tsx-dd97cd4cf4112bb3dfbb.js.map