(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return v});n(107);var a=n(5),r=n.n(a),o=n(77),i=n(295),l=n(340),c=n.n(l),s=n(302),u=n.n(s),d=n(306),m=n(367),p=i.b.div.withConfig({displayName:"technDokuTemplate__Container",componentId:"nnu6gs-0"})(["margin-top:64px;height:calc(100vh - 64px);display:flex;"]),f=i.b.div.withConfig({displayName:"technDokuTemplate__Menu",componentId:"nnu6gs-1"})(["width:25%;min-width:320px;height:calc(100vh - 64px);overflow-y:auto;padding:25px 0;border-right:1px solid rgba(0,0,0,0.12);"]),h=i.b.div.withConfig({displayName:"technDokuTemplate__Doku",componentId:"nnu6gs-2"})(["width:100%;padding:25px;overflow-y:auto;ul{margin-top:0;}p,li{margin-bottom:0;}h1,h3,ol{margin-bottom:10px;}h2{margin-top:10px;margin-bottom:10px;}"]),g=i.b.div.withConfig({displayName:"technDokuTemplate__MenuTitle",componentId:"nnu6gs-3"})(["padding:0 24px;margin-bottom:14px;"]),b=Object(i.b)(o.Link).withConfig({displayName:"technDokuTemplate__MenuTitleLink",componentId:"nnu6gs-4"})(["font-size:21px;font-weight:700;text-decoration:none;color:rgba(0,0,0,0.87);&:hover{text-decoration:underline;}"]),E=i.b.p.withConfig({displayName:"technDokuTemplate__DokuDate",componentId:"nnu6gs-5"})(["margin-bottom:15px !important;color:grey;"]),v="2351590388";t.default=function(e){var t=e.data,n=t.markdownRemark,a=t.allMarkdownRemark,o=n.frontmatter,i=n.html,l=a.edges;return r.a.createElement(d.a,null,r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement(g,null,r.a.createElement(b,{to:"/Technische-Dokumentation/"},"Technische Dokumentation")),r.a.createElement(c.a,{component:"nav"},r.a.createElement(u.a,null),l.map(function(e){var t=e.node;return r.a.createElement(m.a,{post:t,key:t.id})}))),r.a.createElement(h,null,r.a.createElement("h1",null,o.title),r.a.createElement(E,null,o.date),r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:i}}))))}},302:function(e,t,n){"use strict";var a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(309))},304:function(e){e.exports={data:{site:{siteMetadata:{title:"erfassen"}}}}},306:function(e,t,n){"use strict";var a=n(315),r=n.n(a),o=n(304),i=n(5),l=n.n(i),c=n(316),s=n.n(c),u=n(77),d=n(295),m=n(333),p=n(313),f=n.n(p),h=n(334),g=n.n(h),b=(n(310),n(311),n(331)),E=n.n(b),v=n(332),y=n.n(v),w=n(301),k=n.n(w),x=n(297),C=n.n(x),_=n(39),T=n(104),S=n.n(T),P=n(296),O=n.n(P),I=n(303),N=n.n(I),j=n(329),M=n.n(j),D=n(328),L=n.n(D),B=n(327),q=n(106),H=n.n(q),z=n(4),A=n.n(z),F=(n(81),n(6)),K=n.n(F),R=n(318),W=n.n(R),J=n(320),Q=n.n(J),V=n(326),$=n.n(V),U=n(319),G=n.n(U),X=n(322),Y=n.n(X),Z=n(324),ee=n.n(Z),te=n(321),ne=n.n(te),ae=n(323),re=n.n(ae),oe=n(325),ie=(n(52),n(107),n(15)),le=n.n(ie),ce=d.b.div.withConfig({displayName:"ErrorBoundary__Container",componentId:"sc-1fvc7se-0"})(["margin:10px;"]),se=d.b.div.withConfig({displayName:"ErrorBoundary__ErrorTitle",componentId:"sc-1fvc7se-1"})(["margin-bottom:10px;"]),ue=Object(d.b)(C.a).withConfig({displayName:"ErrorBoundary__ReloadButton",componentId:"sc-1fvc7se-2"})(["margin-top:10px !important;"]),de=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={error:null,errorInfo:null},n}le()(t,e);var n=t.prototype;return n.componentDidCatch=function(e,t){this.setState({error:e,errorInfo:t})},n.render=function(){var e=this,t=this.state.errorInfo;if(t)return console.log("errorInfo:",t),l.a.createElement(ce,null,l.a.createElement(se,null,"Oh je, es ist ein Fehler aufgetreten! Bericht:"),l.a.createElement("div",null,t.componentStack),l.a.createElement(ue,{variant:"outlined",onClick:function(){window.location.reload(!1)}},"Neu laden"));var n=this.props.children;return l.a.Children.map(n,function(t){return l.a.cloneElement(t,Object.assign({},e.props))})},t}(i.Component),me=Object(d.b)(W.a).withConfig({displayName:"Signin__StyledDialog",componentId:"sc-1249hqr-0"})([""]),pe=d.b.div.withConfig({displayName:"Signin__StyledDiv",componentId:"sc-1249hqr-1"})(["display:flex;flex-direction:column;padding:0 24px;"]),fe=Object(d.b)(G.a).withConfig({displayName:"Signin__StyledInput",componentId:"sc-1249hqr-2"})(["&:before{border-bottom-color:rgba(0,0,0,0.1) !important;}"]),he=S()(H()("email","setEmail",""),H()("password","setPassword",""),H()("showPass","setShowPass",!1),H()("emailErrorText","setEmailErrorText",""),H()("passwordErrorText","setPasswordErrorText",""),O()({close:function(e){var t=e.setSigninOpen;return function(){return t(!1)}},fetchLogin:function(){return K()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}))},onToggleShowPass:function(e){var t=e.showPass,n=e.setShowPass;return function(){n(!t)}}}),O()({onBlurEmail:function(){return function(){}},onBlurPassword:function(){return function(){}}}))(function(e){var t=e.email,n=e.password,a=e.showPass,r=(e.setShowPass,e.emailErrorText),o=e.passwordErrorText,i=(e.setEmailErrorText,e.setPasswordErrorText,e.onBlurEmail),c=e.onBlurPassword,s=e.fetchLogin,u=(e.user,e.open),d=(e.setSigninOpen,e.close),m=e.onToggleShowPass;return l.a.createElement(de,null,l.a.createElement(me,{"aria-labelledby":"dialog-title",open:u},l.a.createElement(Q.a,{id:"dialog-title"},"Anmeldung"),l.a.createElement(pe,null,l.a.createElement(ne.a,{error:!!r,fullWidth:!0,"aria-describedby":"emailHelper"},l.a.createElement(Y.a,{htmlFor:"email"},"Email"),l.a.createElement(fe,{id:"email",defaultValue:t,onBlur:i,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&i()}}),l.a.createElement(re.a,{id:"emailHelper"},r)),l.a.createElement(ne.a,{error:!!o,fullWidth:!0,"aria-describedby":"passwortHelper"},l.a.createElement(Y.a,{htmlFor:"passwort"},"Passwort"),l.a.createElement(fe,{id:"passwort",type:a?"text":"password",defaultValue:n,onBlur:c,onKeyPress:function(e){"Enter"===e.key&&c()},autoComplete:"current-password",autoCorrect:"off",spellCheck:"false",endAdornment:l.a.createElement(ee.a,{position:"end"},l.a.createElement(N.a,{onClick:m,onMouseDown:function(e){return e.preventDefault()},title:a?"verstecken":"anzeigen"},a?l.a.createElement(oe.b,null):l.a.createElement(oe.a,null)))}),l.a.createElement(re.a,{id:"passwortHelper"},o))),l.a.createElement($.a,null,l.a.createElement(C.a,{onClick:d},"abbrechen"),l.a.createElement(C.a,{color:"primary",onClick:s},"anmelden"))))}),ge=S()(H()("anchorEl","setAnchorEl",null),H()("signinOpen","setSigninOpen",!1),O()({onClickMenu:function(e){var t=e.setAnchorEl;return function(e){return t(e.currentTarget)}},onCloseMenu:function(e){var t=e.setAnchorEl;return function(){return t(null)}},onClickSignin:function(e){var t=e.setSigninOpen,n=e.signinOpen,a=e.setAnchorEl;return function(){a(null),t(!n)}}}))(function(e){var t=e.anchorEl,n=e.onCloseMenu,a=e.onClickMenu,r=e.signinOpen,o=e.onClickSignin,i=e.setSigninOpen;return l.a.createElement("div",null,l.a.createElement(N.a,{"aria-haspopup":"true","aria-label":"Konto",onClick:a,color:"inherit",title:"Konto"},l.a.createElement(B.a,null)),l.a.createElement(L.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:!!t,onClose:n},l.a.createElement(M.a,{onClick:n},"Anmelden"),l.a.createElement(M.a,{onClick:o},"Konto erstellen")),l.a.createElement(he,{open:r,setSigninOpen:i}))}),be=Object(d.b)(k.a).withConfig({displayName:"Header__SiteTitle",componentId:"sc-1q5cq7d-0"})(["display:none;cursor:pointer;@media (min-width:700px){display:block;}"]),Ee=d.b.div.withConfig({displayName:"Header__Spacer",componentId:"sc-1q5cq7d-1"})(["flex-grow:1;"]),ve=Object(d.b)(C.a).withConfig({displayName:"Header__NavButton",componentId:"sc-1q5cq7d-2"})(["color:white !important;border:",";border-color:rgba(255,255,255,0.5) !important;font-weight:",";"],function(e){return e.active?"1px white":"unset"},function(e){return e.active?"700":"600"}),ye=S()(O()({onClickSiteTitle:function(){return function(){return Object(u.navigate)("/")}}}))(function(e){var t=e.onClickSiteTitle;return l.a.createElement(_.Location,null,function(e){var n=e.location.pathname;return l.a.createElement(E.a,{position:"fixed"},l.a.createElement(y.a,null,l.a.createElement(be,{variant:"title",color:"inherit",noWrap:!0,title:"Home",onClick:t},"erfassen.ch"),l.a.createElement(Ee,null),l.a.createElement(ve,{variant:"/"===n?"outlined":"text",component:u.Link,to:"/",active:("/"===n).toString()},"Home"),l.a.createElement(ve,{variant:"/Projekte/"===n?"outlined":"text",component:u.Link,to:"/Projekte/",active:("/Projekte/"===n).toString()},"Projekte"),l.a.createElement(ge,null)))})});function we(){var e=r()(["\n  html {\n    overflow: hidden;\n  }\n\n/* scrollbars */\n\n::-webkit-scrollbar {\n  width: 12px;\n  background: rgba(255, 253, 231, 0.1);\n}\n\n::-webkit-scrollbar:horizontal {\n  height: 12px;\n}\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.4);\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.5);\n  background: rgba(85, 85, 85, 0.05);\n}\n\n::-webkit-scrollbar-corner {\n  background: rgba(0, 0, 0, 0);\n}\n  \n\n/*\n * seems that overflow:hidden is necessary\n * for all relfex-elements\n * BUT: map is not shown with it...\n */\n\n.reflex-element:not(.karte) {\n  border-right: 0 !important;\n  border-left: 0 !important;\n}\n\n/*\n.reflex-element:not(.karte) > div {\n  overflow: hidden;\n}*/\n\n.reflex-splitter {\n  background-color: #fffde7 !important;\n  border-right: 1px solid #fffde7 !important;\n  border-left: 1px solid #fffde7 !important;\n}\n\n.reflex-splitter:hover {\n  background-color: #fff59d !important;\n  border-right: 1px solid #fff59d !important;\n  border-left: 1px solid #fff59d !important;\n}\n"]);return we=function(){return e},e}var ke=Object(d.a)(we()),xe=Object(m.createMuiTheme)({palette:{type:"light",primary:{main:g.a[500]},error:{main:f.a[500]}}});t.a=function(e){var t=e.children;return l.a.createElement(u.StaticQuery,{query:"4130953669",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(ke,null),l.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(m.MuiThemeProvider,{theme:xe},l.a.createElement(l.a.Fragment,null,l.a.createElement(ye,null),t)))},data:o})}},307:function(e,t,n){"use strict";var a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(308))},308:function(e,t,n){"use strict";var a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(103)),o=a(n(76)),i=a(n(292)),l=a(n(5)),c=a(n(11)),s=a(n(294)),u=a(n(293)),d=a(n(301)),m=function(e){return{root:{flex:"1 1 auto",minWidth:0,padding:"0 16px","&:first-child":{paddingLeft:0}},inset:{"&:first-child":{paddingLeft:56}},dense:{fontSize:e.typography.pxToRem(13)},primary:{"&$textDense":{fontSize:"inherit"}},secondary:{"&$textDense":{fontSize:"inherit"}},textDense:{}}};function p(e,t){var n,a=e.children,c=e.classes,u=e.className,m=e.disableTypography,p=e.inset,f=e.primary,h=e.primaryTypographyProps,g=e.secondary,b=e.secondaryTypographyProps,E=(0,i.default)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),v=t.dense,y=null!=f?f:a;null==y||y.type===d.default||m||(y=l.default.createElement(d.default,(0,r.default)({variant:"subheading",className:(0,s.default)(c.primary,(0,o.default)({},c.textDense,v)),component:"span"},h),y));var w=g;return null==w||w.type===d.default||m||(w=l.default.createElement(d.default,(0,r.default)({variant:"body1",className:(0,s.default)(c.secondary,(0,o.default)({},c.textDense,v)),color:"textSecondary"},b),w)),l.default.createElement("div",(0,r.default)({className:(0,s.default)(c.root,(n={},(0,o.default)(n,c.dense,v),(0,o.default)(n,c.inset,p),n),u)},E),y,w)}t.styles=m,p.propTypes={},p.defaultProps={disableTypography:!1,inset:!1},p.contextTypes={dense:c.default.bool};var f=(0,u.default)(m,{name:"MuiListItemText"})(p);t.default=f},309:function(e,t,n){"use strict";var a=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(103)),o=a(n(76)),i=a(n(292)),l=a(n(5)),c=(a(n(11)),a(n(294))),s=a(n(293)),u=n(312),d=function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,u.fade)(e.palette.divider,.08)}}};function m(e){var t,n=e.absolute,a=e.classes,s=e.className,u=e.component,d=e.inset,m=e.light,p=(0,i.default)(e,["absolute","classes","className","component","inset","light"]),f=(0,c.default)(a.root,(t={},(0,o.default)(t,a.absolute,n),(0,o.default)(t,a.inset,d),(0,o.default)(t,a.light,m),t),s);return l.default.createElement(u,(0,r.default)({className:f},p))}t.styles=d,m.propTypes={},m.defaultProps={absolute:!1,component:"hr",inset:!1,light:!1};var p=(0,s.default)(d,{name:"MuiDivider"})(m);t.default=p},367:function(e,t,n){"use strict";n(310),n(311);var a=n(5),r=n.n(a),o=n(77),i=n(330),l=n.n(i),c=n(307),s=n.n(c),u=n(302),d=n.n(u),m=n(104),p=n.n(m),f=n(296),h=n.n(f),g=n(39),b=n(295),E=Object(b.b)(l.a).withConfig({displayName:"MenuItem__ListItem",componentId:"sc-1f48m1p-0"})(["background-color:"," !important;"],function(e){return"true"===e.active?"#eaeaea":"unset"}),v=p()(h()({onClickMenuItem:function(e){var t=e.post;return function(){Object(o.navigate)(t.frontmatter.path+"/")}}}));t.a=v(function(e){var t=e.post,n=e.onClickMenuItem;return r.a.createElement(g.Location,null,function(e){var a=e.location,o=(t.frontmatter.path+"/"===a.pathname).toString();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{button:!0,onClick:n,active:o},r.a.createElement(s.a,{onClick:n},t.frontmatter.title)),r.a.createElement(d.a,null))})})}}]);
//# sourceMappingURL=component---src-templates-techn-doku-template-tsx-01c8ddeae0baa9872b2d.js.map