(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{281:function(e,n,t){"use strict";t.r(n);var r=t(5),a=t.n(r),o=t(77),i=t(330),l=t.n(i),c=t(307),s=t.n(c),u=t(302),d=t.n(u),m=t(104),p=t.n(m),f=t(296),h=t.n(f),g=p()(h()({onClickMenuItem:function(e){var n=e.post;return function(){Object(o.navigate)(n.frontmatter.path+"/")}}}));n.default=g(function(e){var n=e.post,t=e.onClickMenuItem;return console.log("Benutzer-Dokumentation MenuItem, post:",n),a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{button:!0,onClick:t},a.a.createElement(s.a,{onClick:t},n.frontmatter.title)),a.a.createElement(d.a,null))})},287:function(e,n,t){"use strict";t.r(n),t.d(n,"pageQuery",function(){return E});t(169),t(107);var r=t(5),a=t.n(r),o=t(77),i=t(295),l=t(340),c=t.n(l),s=t(302),u=t.n(s),d=t(306),m=t(281),p=i.b.div.withConfig({displayName:"Benutzer-Dokumentation__Container",componentId:"red361-0"})(["margin-top:64px;height:calc(100vh - 64px);display:flex;"]),f=i.b.div.withConfig({displayName:"Benutzer-Dokumentation__Menu",componentId:"red361-1"})(["width:25%;min-width:320px;height:calc(100vh - 64px);overflow-y:auto;padding:25px 0;border-right:1px solid rgba(0,0,0,0.12);"]),h=i.b.div.withConfig({displayName:"Benutzer-Dokumentation__Doku",componentId:"red361-2"})(["width:100%;padding:25px;overflow-y:auto;ul{margin-top:0;}p,li{margin-bottom:0;}h1,h3,ol{margin-bottom:10px;}h2{margin-top:10px;margin-bottom:10px;}"]),g=i.b.div.withConfig({displayName:"Benutzer-Dokumentation__MenuTitle",componentId:"red361-3"})(["padding:0 24px;margin-bottom:14px;"]),b=Object(i.b)(o.Link).withConfig({displayName:"Benutzer-Dokumentation__MenuTitleLink",componentId:"red361-4"})(["font-size:21px;font-weight:700;text-decoration:none;color:rgba(0,0,0,0.87);&:hover{text-decoration:underline;}"]),E=(i.b.p.withConfig({displayName:"Benutzer-Dokumentation__DokuDate",componentId:"red361-5"})(["margin-bottom:15px !important;color:grey;"]),"3515430989");n.default=function(e){var n=e.data.allMarkdownRemark.edges;return console.log("Benutzer-Dokumentation, edges:",n),a.a.createElement(d.a,null,a.a.createElement(p,null,a.a.createElement(f,null,a.a.createElement(g,null,a.a.createElement(b,{to:"/Benutzer-Dokumentation/"},"Benutzer-Dokumentation")),a.a.createElement(c.a,{component:"nav"},a.a.createElement(u.a,null),n.filter(function(e){return!!e}).map(function(e){var n=e.node;return console.log("Benutzer-Dokumentation, node:",n),a.a.createElement(m.default,{post:n,key:n.id})}))),a.a.createElement(h,null,a.a.createElement("p",null,"(hoffentlich) nützliche Infos für Sie"))))}},302:function(e,n,t){"use strict";var r=t(35);Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a.default}});var a=r(t(309))},304:function(e){e.exports={data:{site:{siteMetadata:{title:"erfassen"}}}}},306:function(e,n,t){"use strict";var r=t(315),a=t.n(r),o=t(304),i=t(5),l=t.n(i),c=t(316),s=t.n(c),u=t(77),d=t(295),m=t(333),p=t(313),f=t.n(p),h=t(334),g=t.n(h),b=(t(310),t(311),t(331)),E=t.n(b),y=t(332),v=t.n(y),w=t(301),k=t.n(w),x=t(297),C=t.n(x),_=t(39),S=t(104),P=t.n(S),T=t(296),O=t.n(T),D=t(303),I=t.n(D),N=t(329),B=t.n(N),j=t(328),M=t.n(j),z=t(327),L=t(106),q=t.n(L),H=t(4),A=t.n(H),F=(t(81),t(6)),K=t.n(F),W=t(318),R=t.n(W),J=t(320),Q=t.n(J),V=t(326),$=t.n(V),U=t(319),G=t.n(U),X=t(322),Y=t.n(X),Z=t(324),ee=t.n(Z),ne=t(321),te=t.n(ne),re=t(323),ae=t.n(re),oe=t(325),ie=(t(52),t(107),t(15)),le=t.n(ie),ce=d.b.div.withConfig({displayName:"ErrorBoundary__Container",componentId:"sc-1fvc7se-0"})(["margin:10px;"]),se=d.b.div.withConfig({displayName:"ErrorBoundary__ErrorTitle",componentId:"sc-1fvc7se-1"})(["margin-bottom:10px;"]),ue=Object(d.b)(C.a).withConfig({displayName:"ErrorBoundary__ReloadButton",componentId:"sc-1fvc7se-2"})(["margin-top:10px !important;"]),de=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={error:null,errorInfo:null},t}le()(n,e);var t=n.prototype;return t.componentDidCatch=function(e,n){this.setState({error:e,errorInfo:n})},t.render=function(){var e=this,n=this.state.errorInfo;if(n)return console.log("errorInfo:",n),l.a.createElement(ce,null,l.a.createElement(se,null,"Oh je, es ist ein Fehler aufgetreten! Bericht:"),l.a.createElement("div",null,n.componentStack),l.a.createElement(ue,{variant:"outlined",onClick:function(){window.location.reload(!1)}},"Neu laden"));var t=this.props.children;return l.a.Children.map(t,function(n){return l.a.cloneElement(n,Object.assign({},e.props))})},n}(i.Component),me=Object(d.b)(R.a).withConfig({displayName:"Signin__StyledDialog",componentId:"sc-1249hqr-0"})([""]),pe=d.b.div.withConfig({displayName:"Signin__StyledDiv",componentId:"sc-1249hqr-1"})(["display:flex;flex-direction:column;padding:0 24px;"]),fe=Object(d.b)(G.a).withConfig({displayName:"Signin__StyledInput",componentId:"sc-1249hqr-2"})(["&:before{border-bottom-color:rgba(0,0,0,0.1) !important;}"]),he=P()(q()("email","setEmail",""),q()("password","setPassword",""),q()("showPass","setShowPass",!1),q()("emailErrorText","setEmailErrorText",""),q()("passwordErrorText","setPasswordErrorText",""),O()({close:function(e){var n=e.setSigninOpen;return function(){return n(!1)}},fetchLogin:function(){return K()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}))},onToggleShowPass:function(e){var n=e.showPass,t=e.setShowPass;return function(){t(!n)}}}),O()({onBlurEmail:function(){return function(){}},onBlurPassword:function(){return function(){}}}))(function(e){var n=e.email,t=e.password,r=e.showPass,a=(e.setShowPass,e.emailErrorText),o=e.passwordErrorText,i=(e.setEmailErrorText,e.setPasswordErrorText,e.onBlurEmail),c=e.onBlurPassword,s=e.fetchLogin,u=(e.user,e.open),d=(e.setSigninOpen,e.close),m=e.onToggleShowPass;return l.a.createElement(de,null,l.a.createElement(me,{"aria-labelledby":"dialog-title",open:u},l.a.createElement(Q.a,{id:"dialog-title"},"Anmeldung"),l.a.createElement(pe,null,l.a.createElement(te.a,{error:!!a,fullWidth:!0,"aria-describedby":"emailHelper"},l.a.createElement(Y.a,{htmlFor:"email"},"Email"),l.a.createElement(fe,{id:"email",defaultValue:n,onBlur:i,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&i()}}),l.a.createElement(ae.a,{id:"emailHelper"},a)),l.a.createElement(te.a,{error:!!o,fullWidth:!0,"aria-describedby":"passwortHelper"},l.a.createElement(Y.a,{htmlFor:"passwort"},"Passwort"),l.a.createElement(fe,{id:"passwort",type:r?"text":"password",defaultValue:t,onBlur:c,onKeyPress:function(e){"Enter"===e.key&&c()},autoComplete:"current-password",autoCorrect:"off",spellCheck:"false",endAdornment:l.a.createElement(ee.a,{position:"end"},l.a.createElement(I.a,{onClick:m,onMouseDown:function(e){return e.preventDefault()},title:r?"verstecken":"anzeigen"},r?l.a.createElement(oe.b,null):l.a.createElement(oe.a,null)))}),l.a.createElement(ae.a,{id:"passwortHelper"},o))),l.a.createElement($.a,null,l.a.createElement(C.a,{onClick:d},"abbrechen"),l.a.createElement(C.a,{color:"primary",onClick:s},"anmelden"))))}),ge=P()(q()("anchorEl","setAnchorEl",null),q()("signinOpen","setSigninOpen",!1),O()({onClickMenu:function(e){var n=e.setAnchorEl;return function(e){return n(e.currentTarget)}},onCloseMenu:function(e){var n=e.setAnchorEl;return function(){return n(null)}},onClickSignin:function(e){var n=e.setSigninOpen,t=e.signinOpen,r=e.setAnchorEl;return function(){r(null),n(!t)}}}))(function(e){var n=e.anchorEl,t=e.onCloseMenu,r=e.onClickMenu,a=e.signinOpen,o=e.onClickSignin,i=e.setSigninOpen;return l.a.createElement("div",null,l.a.createElement(I.a,{"aria-haspopup":"true","aria-label":"Konto",onClick:r,color:"inherit",title:"Konto"},l.a.createElement(z.a,null)),l.a.createElement(M.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:!!n,onClose:t},l.a.createElement(B.a,{onClick:t},"Anmelden"),l.a.createElement(B.a,{onClick:o},"Konto erstellen")),l.a.createElement(he,{open:a,setSigninOpen:i}))}),be=Object(d.b)(k.a).withConfig({displayName:"Header__SiteTitle",componentId:"sc-1q5cq7d-0"})(["display:none;cursor:pointer;@media (min-width:700px){display:block;}"]),Ee=d.b.div.withConfig({displayName:"Header__Spacer",componentId:"sc-1q5cq7d-1"})(["flex-grow:1;"]),ye=Object(d.b)(C.a).withConfig({displayName:"Header__NavButton",componentId:"sc-1q5cq7d-2"})(["color:white !important;border:",";border-color:rgba(255,255,255,0.5) !important;font-weight:",";"],function(e){return e.active?"1px white":"unset"},function(e){return e.active?"700":"600"}),ve=P()(O()({onClickSiteTitle:function(){return function(){return Object(u.navigate)("/")}}}))(function(e){var n=e.onClickSiteTitle;return l.a.createElement(_.Location,null,function(e){var t=e.location.pathname;return l.a.createElement(E.a,{position:"fixed"},l.a.createElement(v.a,null,l.a.createElement(be,{variant:"title",color:"inherit",noWrap:!0,title:"Home",onClick:n},"erfassen.ch"),l.a.createElement(Ee,null),l.a.createElement(ye,{variant:"/"===t?"outlined":"text",component:u.Link,to:"/",active:("/"===t).toString()},"Home"),l.a.createElement(ye,{variant:"/Projekte/"===t?"outlined":"text",component:u.Link,to:"/Projekte/",active:("/Projekte/"===t).toString()},"Projekte"),l.a.createElement(ge,null)))})});function we(){var e=a()(["\n  html {\n    overflow: hidden;\n  }\n\n/* scrollbars */\n\n::-webkit-scrollbar {\n  width: 12px;\n  background: rgba(255, 253, 231, 0.1);\n}\n\n::-webkit-scrollbar:horizontal {\n  height: 12px;\n}\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.4);\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.5);\n  background: rgba(85, 85, 85, 0.05);\n}\n\n::-webkit-scrollbar-corner {\n  background: rgba(0, 0, 0, 0);\n}\n  \n\n/*\n * seems that overflow:hidden is necessary\n * for all relfex-elements\n * BUT: map is not shown with it...\n */\n\n.reflex-element:not(.karte) {\n  border-right: 0 !important;\n  border-left: 0 !important;\n}\n\n/*\n.reflex-element:not(.karte) > div {\n  overflow: hidden;\n}*/\n\n.reflex-splitter {\n  background-color: #fffde7 !important;\n  border-right: 1px solid #fffde7 !important;\n  border-left: 1px solid #fffde7 !important;\n}\n\n.reflex-splitter:hover {\n  background-color: #fff59d !important;\n  border-right: 1px solid #fff59d !important;\n  border-left: 1px solid #fff59d !important;\n}\n"]);return we=function(){return e},e}var ke=Object(d.a)(we()),xe=Object(m.createMuiTheme)({palette:{type:"light",primary:{main:g.a[500]},error:{main:f.a[500]}}});n.a=function(e){var n=e.children;return l.a.createElement(u.StaticQuery,{query:"4130953669",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(ke,null),l.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(m.MuiThemeProvider,{theme:xe},l.a.createElement(l.a.Fragment,null,l.a.createElement(ve,null),n)))},data:o})}},307:function(e,n,t){"use strict";var r=t(35);Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a.default}});var a=r(t(308))},308:function(e,n,t){"use strict";var r=t(35);Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.styles=void 0;var a=r(t(103)),o=r(t(76)),i=r(t(292)),l=r(t(5)),c=r(t(11)),s=r(t(294)),u=r(t(293)),d=r(t(301)),m=function(e){return{root:{flex:"1 1 auto",minWidth:0,padding:"0 16px","&:first-child":{paddingLeft:0}},inset:{"&:first-child":{paddingLeft:56}},dense:{fontSize:e.typography.pxToRem(13)},primary:{"&$textDense":{fontSize:"inherit"}},secondary:{"&$textDense":{fontSize:"inherit"}},textDense:{}}};function p(e,n){var t,r=e.children,c=e.classes,u=e.className,m=e.disableTypography,p=e.inset,f=e.primary,h=e.primaryTypographyProps,g=e.secondary,b=e.secondaryTypographyProps,E=(0,i.default)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),y=n.dense,v=null!=f?f:r;null==v||v.type===d.default||m||(v=l.default.createElement(d.default,(0,a.default)({variant:"subheading",className:(0,s.default)(c.primary,(0,o.default)({},c.textDense,y)),component:"span"},h),v));var w=g;return null==w||w.type===d.default||m||(w=l.default.createElement(d.default,(0,a.default)({variant:"body1",className:(0,s.default)(c.secondary,(0,o.default)({},c.textDense,y)),color:"textSecondary"},b),w)),l.default.createElement("div",(0,a.default)({className:(0,s.default)(c.root,(t={},(0,o.default)(t,c.dense,y),(0,o.default)(t,c.inset,p),t),u)},E),v,w)}n.styles=m,p.propTypes={},p.defaultProps={disableTypography:!1,inset:!1},p.contextTypes={dense:c.default.bool};var f=(0,u.default)(m,{name:"MuiListItemText"})(p);n.default=f},309:function(e,n,t){"use strict";var r=t(35);Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.styles=void 0;var a=r(t(103)),o=r(t(76)),i=r(t(292)),l=r(t(5)),c=(r(t(11)),r(t(294))),s=r(t(293)),u=t(312),d=function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,u.fade)(e.palette.divider,.08)}}};function m(e){var n,t=e.absolute,r=e.classes,s=e.className,u=e.component,d=e.inset,m=e.light,p=(0,i.default)(e,["absolute","classes","className","component","inset","light"]),f=(0,c.default)(r.root,(n={},(0,o.default)(n,r.absolute,t),(0,o.default)(n,r.inset,d),(0,o.default)(n,r.light,m),n),s);return l.default.createElement(u,(0,a.default)({className:f},p))}n.styles=d,m.propTypes={},m.defaultProps={absolute:!1,component:"hr",inset:!1,light:!1};var p=(0,s.default)(d,{name:"MuiDivider"})(m);n.default=p}}]);
//# sourceMappingURL=component---src-pages-benutzer-dokumentation-index-tsx-46413ee5f66df582383e.js.map