(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{317:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return E});var a=n(0),l=n.n(a),r=n(58),o=n(97),i=n(395),c=n.n(i),u=n(346),s=n.n(u),d=n(353),m=n(434),p=n(326),f=o.b.div.withConfig({displayName:"technDokuTemplate__Container",componentId:"elxdkd-0"})(["margin-top:64px;height:calc(100vh - 64px);display:flex;"]),b=o.b.div.withConfig({displayName:"technDokuTemplate__Menu",componentId:"elxdkd-1"})(["width:25%;min-width:320px;height:calc(100vh - 64px);overflow-y:auto;padding:25px 0;border-right:1px solid rgba(0,0,0,0.12);"]),g=o.b.div.withConfig({displayName:"technDokuTemplate__Doku",componentId:"elxdkd-2"})(["width:100%;padding:25px;overflow-y:auto;ul{margin-top:0;}p,li{margin-bottom:0;}h1,h3,h4,ol{margin-bottom:10px;}h2{margin-top:10px;margin-bottom:10px;}"]),h=o.b.div.withConfig({displayName:"technDokuTemplate__MenuTitle",componentId:"elxdkd-3"})(["padding:0 24px;margin-bottom:14px;"]),v=Object(o.b)(r.Link).withConfig({displayName:"technDokuTemplate__MenuTitleLink",componentId:"elxdkd-4"})(["font-size:21px;font-weight:700;text-decoration:none;color:rgba(0,0,0,0.87);&:hover{text-decoration:underline;}"]),y=o.b.p.withConfig({displayName:"technDokuTemplate__DokuDate",componentId:"elxdkd-5"})(["margin-bottom:15px !important;color:grey;"]),E="2316100509";t.default=function(e){var t=e.data,n=t.markdownRemark,a=t.allMarkdownRemark,r=n.frontmatter,o=n.html,i=a.edges;return l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(f,null,l.a.createElement(b,null,l.a.createElement(h,null,l.a.createElement(v,{to:"/Technische-Dokumentation/"},"Technische Dokumentation")),l.a.createElement(c.a,{component:"nav"},l.a.createElement(s.a,null),i.filter(function(e){return!!e&&!!e.node}).map(function(e){var t=e.node;return l.a.createElement(m.a,{post:t,key:t.id})}))),l.a.createElement(g,null,l.a.createElement("h1",null,r.title),l.a.createElement(y,null,r.date),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))))}},346:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=a(n(358))},351:function(e){e.exports={data:{site:{siteMetadata:{title:"erfassen"}}}}},353:function(e,t,n){"use strict";var a=n(351),l=n(0),r=n.n(l),o=n(370),i=n.n(o),c=n(58),u=(n(345),n(377)),s=n.n(u),d=n(378),m=n.n(d),p=n(343),f=n.n(p),b=n(330),g=n.n(b),h=n(97),v=n(24),y=n(327),E=n(334),k=n.n(E),C=n(376),w=n.n(C),O=n(375),x=n.n(O),j=n(374),_=n(328),S=n.n(_),N=(n(331),n(329)),I=n.n(N),D=n(341),T=n.n(D),P=n(342),L=n.n(P),M=n(344),z=n.n(M),F=n(336),A=n.n(F),H=n(338),q=n.n(H),K=n(349),W=n.n(K),R=n(339),B=n.n(R),V=n(340),J=n.n(V),Q=n(348),U=n.n(Q),$=n(350),G=n(326),X=n(332);Object(y.setConfig)({pureSFC:!0});var Y=Object(h.b)(T.a).withConfig({displayName:"Signup__StyledDialog",componentId:"sc-17e34hu-0"})([""]),Z=h.b.div.withConfig({displayName:"Signup__StyledDiv",componentId:"sc-17e34hu-1"})(["display:flex;flex-direction:column;padding:0 24px;"]),ee=Object(h.b)(U.a).withConfig({displayName:"Signup__StyledTextField",componentId:"sc-17e34hu-2"})(["div:before{border-bottom-color:rgba(0,0,0,0.1) !important;}"]),te=Object(h.b)(A.a).withConfig({displayName:"Signup__StyledInput",componentId:"sc-17e34hu-3"})(["&:before{border-bottom-color:rgba(0,0,0,0.1) !important;}"]),ne=Object(X.a)(function(e){var t=e.authState,n=Object(l.useState)(""),a=n[0],o=n[1],i=Object(l.useState)(""),c=i[0],u=i[1],s=Object(l.useState)(!1),d=s[0],m=s[1],p=Object(l.useState)(""),f=p[0],b=(p[1],Object(l.useState)("")),h=b[0],v=(b[1],Object(l.useCallback)(function(){return t.setSignupOpen(!1)},[])),y=Object(l.useCallback)(I()(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.signUp({email:a,password:c});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Signup: error logging in:",e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])})),[a,c]),E=Object(l.useCallback)(function(){m(!d)},[d]),C=Object(l.useCallback)(function(e){return o(e.target.value)},[]),w=Object(l.useCallback)(function(e){return u(e.target.value)},[]);return r.a.createElement(G.a,null,r.a.createElement(Y,{"aria-labelledby":"dialog-title",open:t.state.signupOpen},r.a.createElement(L.a,{id:"dialog-title"},"Neues Konto"),r.a.createElement(Z,null,r.a.createElement(ee,{label:"Email",defaultValue:a,onBlur:C,autoFocus:!0,fullWidth:!0,helperText:f}),r.a.createElement(B.a,{error:!!h,fullWidth:!0,"aria-describedby":"signupPasswortHelper"},r.a.createElement(q.a,{htmlFor:"signupPasswort"},"Passwort"),r.a.createElement(te,{id:"signupPasswort",type:d?"text":"password",defaultValue:c,onBlur:w,onKeyPress:function(e){"Enter"===e.key&&w()},autoComplete:"current-password",autoCorrect:"off",spellCheck:"false",endAdornment:r.a.createElement(W.a,{position:"end"},r.a.createElement(k.a,{onClick:E,onMouseDown:function(e){return e.preventDefault()},title:d?"verstecken":"anzeigen"},d?r.a.createElement($.b,null):r.a.createElement($.a,null)))}),r.a.createElement(J.a,{id:"signupPasswortHelper"},h))),r.a.createElement(z.a,null,r.a.createElement(g.a,{onClick:v},"abbrechen"),r.a.createElement(g.a,{color:"primary",onClick:y},"Konto erstellen"))))});Object(y.setConfig)({pureSFC:!0});var ae=Object(h.b)(T.a).withConfig({displayName:"Login__StyledDialog",componentId:"czqfs7-0"})([""]),le=h.b.div.withConfig({displayName:"Login__StyledDiv",componentId:"czqfs7-1"})(["display:flex;flex-direction:column;padding:0 24px;"]),re=Object(h.b)(U.a).withConfig({displayName:"Login__StyledTextField",componentId:"czqfs7-2"})(["div:before{border-bottom-color:rgba(0,0,0,0.1) !important;}"]),oe=Object(h.b)(A.a).withConfig({displayName:"Login__StyledInput",componentId:"czqfs7-3"})(["&:before{border-bottom-color:rgba(0,0,0,0.1) !important;}"]),ie=Object(X.a)(function(e){var t=e.authState,n=t.setLoginOpen,a=t.setSignupOpen,o=t.logIn,i=t.state.loginOpen,c=Object(l.useState)(""),u=c[0],s=c[1],d=Object(l.useState)(""),m=d[0],p=d[1],f=Object(l.useState)(!1),b=f[0],h=f[1],v=Object(l.useState)(""),y=v[0],E=v[1],C=Object(l.useState)(""),w=C[0],O=C[1],x=Object(l.useCallback)(function(){return n(!1)},[]),j=Object(l.useCallback)(function(){n(!1),a(!0)},[]),_=Object(l.useCallback)(I()(S.a.mark(function e(){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o({email:u,password:m});case 3:e.next=10;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Error logging in:",e.t0),E(e.t0.message),O(e.t0.message);case 10:case"end":return e.stop()}},e,this,[[0,5]])})),[u,m]),N=Object(l.useCallback)(function(){return h(!b)},[b]),D=Object(l.useCallback)(function(e){s(e.target.value)},[]),T=Object(l.useCallback)(function(e){return p(e.target.value)},[]);return r.a.createElement(G.a,null,r.a.createElement(ae,{"aria-labelledby":"login-dialog-title",open:i},r.a.createElement(L.a,{id:"login-dialog-title"},"Anmeldung"),r.a.createElement(le,null,r.a.createElement(re,{label:"Email",value:u,onChange:D,autoFocus:!0,fullWidth:!0,helperText:y}),r.a.createElement(B.a,{error:!!w,fullWidth:!0},r.a.createElement(q.a,{htmlFor:"loginPasswort"},"Passwort"),r.a.createElement(oe,{id:"loginPasswort",type:b?"text":"password",value:m,onChange:T,autoComplete:"current-password",autoCorrect:"off",spellCheck:"false",endAdornment:r.a.createElement(W.a,{position:"end"},r.a.createElement(k.a,{onClick:N,onMouseDown:function(e){return e.preventDefault()},title:b?"verstecken":"anzeigen"},b?r.a.createElement($.b,null):r.a.createElement($.a,null)))}),r.a.createElement(J.a,null,w))),r.a.createElement(z.a,null,r.a.createElement(g.a,{onClick:x},"abbrechen"),r.a.createElement(g.a,{color:"primary",onClick:_},"Anmelden"),r.a.createElement(g.a,{onClick:j},"Neues Konto"))))});Object(y.setConfig)({pureSFC:!0});var ce=h.b.div.withConfig({displayName:"Account__IconContainer",componentId:"sc-1ioq2ng-0"})(["position:relative;padding-left:10px;"]),ue=h.b.div.withConfig({displayName:"Account__UserNameDiv",componentId:"sc-1ioq2ng-1"})(["position:absolute;bottom:0;font-size:10px;width:60px;left:5px;text-align:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;z-index:-1;"]),se=Object(X.a)(function(e){var t=e.authState,n=t.state,a=n.email,o=n.signupOpen,i=n.loginOpen,c=Object(l.useState)(null),u=c[0],s=c[1],d=Object(l.useCallback)(function(e){return s(e.currentTarget)},[]),m=Object(l.useCallback)(function(){return s(null)},[]),p=Object(l.useCallback)(function(){s(null),t.setSignupOpen(!o)},[]),f=Object(l.useCallback)(function(){s(null),t.setLoginOpen(!i)},[]),b=Object(l.useCallback)(function(){s(null),t.logOut()},[]);return r.a.createElement(G.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,null,r.a.createElement(k.a,{"aria-haspopup":"true","aria-label":"Konto",onClick:d,color:"inherit",title:"Konto"},r.a.createElement(j.a,null)),r.a.createElement(ue,null,a||"")),r.a.createElement(x.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:!!u,onClose:m},!a&&r.a.createElement(w.a,{onClick:f},"Anmelden"),a&&r.a.createElement(w.a,{onClick:b},"Abmelden"),r.a.createElement(w.a,{onClick:p},"Konto erstellen")),o&&r.a.createElement(ne,null),i&&r.a.createElement(ie,null)))});Object(y.setConfig)({pureSFC:!0});var de=Object(h.b)(f.a).withConfig({displayName:"Header__SiteTitle",componentId:"sc-9u5ymu-0"})(["display:none;cursor:pointer;@media (min-width:700px){display:block;}"]),me=h.b.div.withConfig({displayName:"Header__Spacer",componentId:"sc-9u5ymu-1"})(["flex-grow:1;"]),pe=Object(h.b)(g.a).withConfig({displayName:"Header__NavButton",componentId:"sc-9u5ymu-2"})(["color:white !important;border:",";border-color:rgba(255,255,255,0.5) !important;font-weight:",";"],function(e){return e.active?"1px white":"unset"},function(e){return e.active?"700":"600"}),fe=function(){var e=Object(l.useCallback)(function(){return Object(c.navigate)("/")});return r.a.createElement(v.Location,null,function(t){var n=t.location.pathname;return r.a.createElement(G.a,null,r.a.createElement(s.a,{position:"fixed"},r.a.createElement(m.a,null,r.a.createElement(de,{variant:"h6",color:"inherit",noWrap:!0,title:"Home",onClick:e},"erfassen.ch"),r.a.createElement(me,null),r.a.createElement(pe,{variant:"/"===n?"outlined":"text",component:c.Link,to:"/",active:("/"===n).toString()},"Home"),r.a.createElement(pe,{variant:"/Projekte/"===n?"outlined":"text",component:c.Link,to:"/Projekte/",active:("/Projekte/"===n).toString()},"Projekte"),r.a.createElement(se,null))))})};t.a=function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"4130953669",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(fe,null),t)},data:a})}},356:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=a(n(357))},357:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var l=a(n(8)),r=a(n(14)),o=a(n(17)),i=a(n(0)),c=(a(n(2)),a(n(325))),u=a(n(146)),s=a(n(343)),d=a(n(354)),m=function(e){return{root:{flex:"1 1 auto",minWidth:0,padding:"0 16px","&:first-child":{paddingLeft:0}},inset:{"&:first-child":{paddingLeft:56}},dense:{fontSize:e.typography.pxToRem(13)},primary:{"&$textDense":{fontSize:"inherit"}},secondary:{"&$textDense":{fontSize:"inherit"}},textDense:{}}};function p(e){var t=e.children,n=e.classes,a=e.className,u=e.disableTypography,m=e.inset,p=e.primary,f=e.primaryTypographyProps,b=e.secondary,g=e.secondaryTypographyProps,h=(0,o.default)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]);return i.default.createElement(d.default.Consumer,null,function(e){var o,d=e.dense,v=null!=p?p:t;null==v||v.type===s.default||u||(v=i.default.createElement(s.default,(0,l.default)({variant:"subheading",internalDeprecatedVariant:!0,className:(0,c.default)(n.primary,(0,r.default)({},n.textDense,d)),component:"span"},f),v));var y=b;return null==y||y.type===s.default||u||(y=i.default.createElement(s.default,(0,l.default)({className:(0,c.default)(n.secondary,(0,r.default)({},n.textDense,d)),color:"textSecondary"},g),y)),i.default.createElement("div",(0,l.default)({className:(0,c.default)(n.root,(o={},(0,r.default)(o,n.dense,d),(0,r.default)(o,n.inset,m),o),a)},h),v,y)})}t.styles=m,p.defaultProps={disableTypography:!1,inset:!1};var f=(0,u.default)(m,{name:"MuiListItemText"})(p);t.default=f},358:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var l=a(n(8)),r=a(n(14)),o=a(n(17)),i=a(n(0)),c=(a(n(2)),a(n(325))),u=(n(28),a(n(146))),s=n(151),d=(a(n(365)),function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,s.fade)(e.palette.divider,.08)},middle:{marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit}}});function m(e){var t,n=e.absolute,a=e.classes,u=e.className,s=e.component,d=e.inset,m=e.light,p=e.variant,f=(0,o.default)(e,["absolute","classes","className","component","inset","light","variant"]);return i.default.createElement(s,(0,l.default)({className:(0,c.default)(a.root,(t={},(0,r.default)(t,a.inset,d||"inset"===p),(0,r.default)(t,a.middle,"middle"===p),(0,r.default)(t,a.absolute,n),(0,r.default)(t,a.light,m),t),u)},f))}t.styles=d,m.defaultProps={absolute:!1,component:"hr",light:!1,variant:"fullWidth"};var p=(0,u.default)(d,{name:"MuiDivider"})(m);t.default=p},434:function(e,t,n){"use strict";n(345);var a=n(0),l=n.n(a),r=n(58),o=n(362),i=n.n(o),c=n(356),u=n.n(c),s=n(346),d=n.n(s),m=n(24),p=n(97),f=n(366),b=n.n(f),g=n(327),h=n(326);Object(g.setConfig)({pureSFC:!0});var v=Object(p.b)(i.a).withConfig({displayName:"MenuItem__ListItem",componentId:"zuw7er-0"})(["background-color:"," !important;"],function(e){return"true"===e.active?"#eaeaea":"unset"});t.a=function(e){var t=e.post,n=Object(a.useCallback)(function(){return Object(r.navigate)(t.frontmatter.path+"/")},[t]);return l.a.createElement(m.Location,null,function(e){var a=e.location,r=(t.frontmatter.path+"/"===a.pathname).toString();return l.a.createElement(h.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{button:!0,onClick:n,active:r},l.a.createElement(u.a,{onClick:n},b()(t,"frontmatter.title","(Titel fehlt)"))),l.a.createElement(d.a,null)))})}}}]);
//# sourceMappingURL=component---src-templates-techn-doku-template-js-3e53c1ccf4b9b1db61d0.js.map