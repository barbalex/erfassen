(window.webpackJsonp=window.webpackJsonp||[]).push([[12,13],{282:function(e,n,t){"use strict";t.r(n);var r=t(5),a=t.n(r),o=t(77),i=t(326),l=t.n(i),c=t(334),s=t.n(c),u=t(306),m=t.n(u),d=t(104),p=t.n(d),f=t(296),h=t.n(f),g=t(333),b=t.n(g),E=p()(h()({onClickMenuItem:function(e){var n=e.post;return function(){Object(o.navigate)(n.frontmatter.path+"/")}}}));n.default=E(function(e){var n=e.post,t=e.onClickMenuItem;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{button:!0,onClick:t},a.a.createElement(s.a,{onClick:t},b()(n,"frontmatter.title","(Titel fehlt)"))),a.a.createElement(m.a,null))})},290:function(e,n,t){"use strict";t.r(n),t.d(n,"pageQuery",function(){return E});t(161),t(107);var r=t(5),a=t.n(r),o=t(77),i=t(293),l=t(338),c=t.n(l),s=t(306),u=t.n(s),m=t(304),d=t(282),p=i.b.div.withConfig({displayName:"Technische-Dokumentation__Container",componentId:"tcetke-0"})(["margin-top:64px;height:calc(100vh - 64px);display:flex;"]),f=i.b.div.withConfig({displayName:"Technische-Dokumentation__Menu",componentId:"tcetke-1"})(["width:25%;min-width:320px;height:calc(100vh - 64px);overflow-y:auto;padding:25px 0;border-right:1px solid rgba(0,0,0,0.12);"]),h=i.b.div.withConfig({displayName:"Technische-Dokumentation__Doku",componentId:"tcetke-2"})(["width:100%;padding:25px;overflow-y:auto;ul{margin-top:0;}p,li{margin-bottom:0;}h1,h3,ol{margin-bottom:10px;}h2{margin-top:10px;margin-bottom:10px;}"]),g=i.b.div.withConfig({displayName:"Technische-Dokumentation__MenuTitle",componentId:"tcetke-3"})(["padding:0 24px;margin-bottom:14px;"]),b=Object(i.b)(o.Link).withConfig({displayName:"Technische-Dokumentation__MenuTitleLink",componentId:"tcetke-4"})(["font-size:21px;font-weight:700;text-decoration:none;color:rgba(0,0,0,0.87);&:hover{text-decoration:underline;}"]),E=(i.b.p.withConfig({displayName:"Technische-Dokumentation__DokuDate",componentId:"tcetke-5"})(["margin-bottom:15px !important;color:grey;"]),"2565606666");n.default=function(e){var n=e.data.allMarkdownRemark.edges;return a.a.createElement(m.a,null,a.a.createElement(p,null,a.a.createElement(f,null,a.a.createElement(g,null,a.a.createElement(b,{to:"/Technische-Dokumentation/"},"Technische Dokumentation")),a.a.createElement(c.a,{component:"nav"},a.a.createElement(u.a,null),n.filter(function(e){return!!e&&!!e.node}).map(function(e){var n=e.node;return a.a.createElement(d.default,{post:n,key:n.id})}))),a.a.createElement(h,null,a.a.createElement("p",null,"Hier informieren wir, wie erfassen.ch funktioniert"))))}},302:function(e){e.exports={data:{site:{siteMetadata:{title:"erfassen"}}}}},304:function(e,n,t){"use strict";var r=t(311),a=t.n(r),o=t(302),i=t(5),l=t.n(i),c=t(312),s=t.n(c),u=t(77),m=t(293),d=t(329),p=t(309),f=t.n(p),h=t(330),g=t.n(h),b=(t(307),t(308),t(327)),E=t.n(b),w=t(328),k=t.n(w),v=t(305),x=t.n(v),y=t(297),C=t.n(y),_=t(39),S=t(104),T=t.n(S),O=t(296),I=t.n(O),P=t(301),N=t.n(P),j=t(325),D=t.n(j),M=t(324),B=t.n(M),q=t(323),H=t(106),A=t.n(H),F=t(4),L=t.n(F),z=(t(81),t(6)),K=t.n(z),W=t(314),J=t.n(W),Q=t(316),R=t.n(Q),V=t(322),U=t.n(V),G=t(315),X=t.n(G),Y=t(318),Z=t.n(Y),$=t(320),ee=t.n($),ne=t(317),te=t.n(ne),re=t(319),ae=t.n(re),oe=t(321),ie=(t(52),t(107),t(15)),le=t.n(ie),ce=m.b.div.withConfig({displayName:"ErrorBoundary__Container",componentId:"sc-1fvc7se-0"})(["margin:10px;"]),se=m.b.div.withConfig({displayName:"ErrorBoundary__ErrorTitle",componentId:"sc-1fvc7se-1"})(["margin-bottom:10px;"]),ue=Object(m.b)(C.a).withConfig({displayName:"ErrorBoundary__ReloadButton",componentId:"sc-1fvc7se-2"})(["margin-top:10px !important;"]),me=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={error:null,errorInfo:null},t}le()(n,e);var t=n.prototype;return t.componentDidCatch=function(e,n){this.setState({error:e,errorInfo:n})},t.render=function(){var e=this,n=this.state.errorInfo;if(n)return console.log("errorInfo:",n),l.a.createElement(ce,null,l.a.createElement(se,null,"Oh je, es ist ein Fehler aufgetreten! Bericht:"),l.a.createElement("div",null,n.componentStack),l.a.createElement(ue,{variant:"outlined",onClick:function(){window.location.reload(!1)}},"Neu laden"));var t=this.props.children;return l.a.Children.map(t,function(n){return l.a.cloneElement(n,Object.assign({},e.props))})},n}(i.Component),de=Object(m.b)(J.a).withConfig({displayName:"Signin__StyledDialog",componentId:"sc-1249hqr-0"})([""]),pe=m.b.div.withConfig({displayName:"Signin__StyledDiv",componentId:"sc-1249hqr-1"})(["display:flex;flex-direction:column;padding:0 24px;"]),fe=Object(m.b)(X.a).withConfig({displayName:"Signin__StyledInput",componentId:"sc-1249hqr-2"})(["&:before{border-bottom-color:rgba(0,0,0,0.1) !important;}"]),he=T()(A()("email","setEmail",""),A()("password","setPassword",""),A()("showPass","setShowPass",!1),A()("emailErrorText","setEmailErrorText",""),A()("passwordErrorText","setPasswordErrorText",""),I()({close:function(e){var n=e.setSigninOpen;return function(){return n(!1)}},fetchLogin:function(){return K()(L.a.mark(function e(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}))},onToggleShowPass:function(e){var n=e.showPass,t=e.setShowPass;return function(){t(!n)}}}),I()({onBlurEmail:function(){return function(){}},onBlurPassword:function(){return function(){}}}))(function(e){var n=e.email,t=e.password,r=e.showPass,a=(e.setShowPass,e.emailErrorText),o=e.passwordErrorText,i=(e.setEmailErrorText,e.setPasswordErrorText,e.onBlurEmail),c=e.onBlurPassword,s=e.fetchLogin,u=(e.user,e.open),m=(e.setSigninOpen,e.close),d=e.onToggleShowPass;return l.a.createElement(me,null,l.a.createElement(de,{"aria-labelledby":"dialog-title",open:u},l.a.createElement(R.a,{id:"dialog-title"},"Anmeldung"),l.a.createElement(pe,null,l.a.createElement(te.a,{error:!!a,fullWidth:!0,"aria-describedby":"emailHelper"},l.a.createElement(Z.a,{htmlFor:"email"},"Email"),l.a.createElement(fe,{id:"email",defaultValue:n,onBlur:i,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&i()}}),l.a.createElement(ae.a,{id:"emailHelper"},a)),l.a.createElement(te.a,{error:!!o,fullWidth:!0,"aria-describedby":"passwortHelper"},l.a.createElement(Z.a,{htmlFor:"passwort"},"Passwort"),l.a.createElement(fe,{id:"passwort",type:r?"text":"password",defaultValue:t,onBlur:c,onKeyPress:function(e){"Enter"===e.key&&c()},autoComplete:"current-password",autoCorrect:"off",spellCheck:"false",endAdornment:l.a.createElement(ee.a,{position:"end"},l.a.createElement(N.a,{onClick:d,onMouseDown:function(e){return e.preventDefault()},title:r?"verstecken":"anzeigen"},r?l.a.createElement(oe.b,null):l.a.createElement(oe.a,null)))}),l.a.createElement(ae.a,{id:"passwortHelper"},o))),l.a.createElement(U.a,null,l.a.createElement(C.a,{onClick:m},"abbrechen"),l.a.createElement(C.a,{color:"primary",onClick:s},"anmelden"))))}),ge=T()(A()("anchorEl","setAnchorEl",null),A()("signinOpen","setSigninOpen",!1),I()({onClickMenu:function(e){var n=e.setAnchorEl;return function(e){return n(e.currentTarget)}},onCloseMenu:function(e){var n=e.setAnchorEl;return function(){return n(null)}},onClickSignin:function(e){var n=e.setSigninOpen,t=e.signinOpen,r=e.setAnchorEl;return function(){r(null),n(!t)}}}))(function(e){var n=e.anchorEl,t=e.onCloseMenu,r=e.onClickMenu,a=e.signinOpen,o=e.onClickSignin,i=e.setSigninOpen;return l.a.createElement("div",null,l.a.createElement(N.a,{"aria-haspopup":"true","aria-label":"Konto",onClick:r,color:"inherit",title:"Konto"},l.a.createElement(q.a,null)),l.a.createElement(B.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:!!n,onClose:t},l.a.createElement(D.a,{onClick:t},"Anmelden"),l.a.createElement(D.a,{onClick:o},"Konto erstellen")),l.a.createElement(he,{open:a,setSigninOpen:i}))}),be=Object(m.b)(x.a).withConfig({displayName:"Header__SiteTitle",componentId:"sc-1q5cq7d-0"})(["display:none;cursor:pointer;@media (min-width:700px){display:block;}"]),Ee=m.b.div.withConfig({displayName:"Header__Spacer",componentId:"sc-1q5cq7d-1"})(["flex-grow:1;"]),we=Object(m.b)(C.a).withConfig({displayName:"Header__NavButton",componentId:"sc-1q5cq7d-2"})(["color:white !important;border:",";border-color:rgba(255,255,255,0.5) !important;font-weight:",";"],function(e){return e.active?"1px white":"unset"},function(e){return e.active?"700":"600"}),ke=T()(I()({onClickSiteTitle:function(){return function(){return Object(u.navigate)("/")}}}))(function(e){var n=e.onClickSiteTitle;return l.a.createElement(_.Location,null,function(e){var t=e.location.pathname;return l.a.createElement(E.a,{position:"fixed"},l.a.createElement(k.a,null,l.a.createElement(be,{variant:"title",color:"inherit",noWrap:!0,title:"Home",onClick:n},"erfassen.ch"),l.a.createElement(Ee,null),l.a.createElement(we,{variant:"/"===t?"outlined":"text",component:u.Link,to:"/",active:("/"===t).toString()},"Home"),l.a.createElement(we,{variant:"/Projekte/"===t?"outlined":"text",component:u.Link,to:"/Projekte/",active:("/Projekte/"===t).toString()},"Projekte"),l.a.createElement(ge,null)))})});function ve(){var e=a()(["\n  html {\n    overflow: hidden;\n  }\n\n/* scrollbars */\n\n::-webkit-scrollbar {\n  width: 12px;\n  background: rgba(255, 253, 231, 0.1);\n}\n\n::-webkit-scrollbar:horizontal {\n  height: 12px;\n}\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.4);\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.5);\n  background: rgba(85, 85, 85, 0.05);\n}\n\n::-webkit-scrollbar-corner {\n  background: rgba(0, 0, 0, 0);\n}\n  \n\n/*\n * seems that overflow:hidden is necessary\n * for all relfex-elements\n * BUT: map is not shown with it...\n */\n\n.reflex-element:not(.karte) {\n  border-right: 0 !important;\n  border-left: 0 !important;\n}\n\n/*\n.reflex-element:not(.karte) > div {\n  overflow: hidden;\n}*/\n\n.reflex-splitter {\n  background-color: #fffde7 !important;\n  border-right: 1px solid #fffde7 !important;\n  border-left: 1px solid #fffde7 !important;\n}\n\n.reflex-splitter:hover {\n  background-color: #fff59d !important;\n  border-right: 1px solid #fff59d !important;\n  border-left: 1px solid #fff59d !important;\n}\n"]);return ve=function(){return e},e}var xe=Object(m.a)(ve()),ye=Object(d.createMuiTheme)({palette:{type:"light",primary:{main:g.a[500]},error:{main:f.a[500]}}});n.a=function(e){var n=e.children;return l.a.createElement(u.StaticQuery,{query:"4130953669",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(xe,null),l.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(d.MuiThemeProvider,{theme:ye},l.a.createElement(l.a.Fragment,null,l.a.createElement(ke,null),n)))},data:o})}}}]);
//# sourceMappingURL=component---src-pages-technische-dokumentation-index-tsx-a4dd5f6573660be5b1f7.js.map