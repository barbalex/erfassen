(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{286:function(e,n,t){"use strict";t.r(n);var r=t(4),a=t.n(r),o=(t(81),t(6)),i=t.n(o),l=t(5),c=t.n(l),s=t(292),u=t(601),m=(t(599),t(105)),d=t.n(m),p=t(302),f=t(136),h=s.b.div.withConfig({displayName:"Projekte__Container",componentId:"h44dj2-0"})(["margin-top:64px;min-height:calc(100vh - 64px);"]),b=Object(s.b)(h).withConfig({displayName:"Projekte__LoadingContainer",componentId:"h44dj2-1"})(["padding:20px;"]),E=Object(s.b)(u.a).withConfig({displayName:"Projekte__ReflexContainer",componentId:"h44dj2-2"})(["height:calc(100vh - 64px) !important;"]),g=d()(f.b);n.default=g(function(e){var n=e.db;if(!n)return c.a.createElement(p.a,null,c.a.createElement(b,null,"Lade daten..."));n.ort&&n.ort.dump().then(function(e){return console.log("orte:",e.docs)}),n.beob&&n.beob.dump().then(function(e){return console.log("beobs:",e.docs)});return c.a.createElement(p.a,null,c.a.createElement(h,null,c.a.createElement(E,{orientation:"vertical"},c.a.createElement(u.b,{flex:.3,propagateDimensions:!0,renderOnResizeRate:200,renderOnResize:!0},c.a.createElement("p",null,"Tree")),c.a.createElement(u.c,null),c.a.createElement(u.b,{propagateDimensions:!0,renderOnResizeRate:200,renderOnResize:!0},c.a.createElement("p",null,"Form"),c.a.createElement("button",{onClick:i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.ort.insert({name:"test-ort",type:"ort"}));case 1:case"end":return e.stop()}},e,this)}))},"insert ort"),c.a.createElement("button",{onClick:i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.beob.insert({art:"test-art",type:"beob"}));case 1:case"end":return e.stop()}},e,this)}))},"insert beob")))))})},301:function(e){e.exports={data:{site:{siteMetadata:{title:"erfassen"}}}}},302:function(e,n,t){"use strict";var r=t(314),a=t.n(r),o=t(301),i=t(5),l=t.n(i),c=t(315),s=t.n(c),u=t(77),m=t(292),d=t(331),p=t(309),f=t.n(p),h=t(332),b=t.n(h),E=(t(303),t(304),t(329)),g=t.n(E),w=t(330),v=t.n(w),k=t(299),x=t.n(k),C=t(297),y=t.n(C),S=t(39),O=t(105),P=t.n(O),_=t(296),j=t.n(_),T=t(300),I=t.n(T),N=t(328),B=t.n(N),q=t(327),H=t.n(q),M=t(326),z=t(106),R=t.n(z),A=t(4),D=t.n(A),F=(t(81),t(6)),L=t.n(F),K=t(317),W=t.n(K),J=t(319),V=t.n(J),Q=t(325),U=t.n(Q),G=t(318),X=t.n(G),Y=t(321),Z=t.n(Y),$=t(323),ee=t.n($),ne=t(320),te=t.n(ne),re=t(322),ae=t.n(re),oe=t(324),ie=(t(52),t(107),t(15)),le=t.n(ie),ce=m.b.div.withConfig({displayName:"ErrorBoundary__Container",componentId:"sc-1fvc7se-0"})(["margin:10px;"]),se=m.b.div.withConfig({displayName:"ErrorBoundary__ErrorTitle",componentId:"sc-1fvc7se-1"})(["margin-bottom:10px;"]),ue=Object(m.b)(y.a).withConfig({displayName:"ErrorBoundary__ReloadButton",componentId:"sc-1fvc7se-2"})(["margin-top:10px !important;"]),me=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={error:null,errorInfo:null},t}le()(n,e);var t=n.prototype;return t.componentDidCatch=function(e,n){this.setState({error:e,errorInfo:n})},t.render=function(){var e=this,n=this.state.errorInfo;if(n)return console.log("errorInfo:",n),l.a.createElement(ce,null,l.a.createElement(se,null,"Oh je, es ist ein Fehler aufgetreten! Bericht:"),l.a.createElement("div",null,n.componentStack),l.a.createElement(ue,{variant:"outlined",onClick:function(){window.location.reload(!1)}},"Neu laden"));var t=this.props.children;return l.a.Children.map(t,function(n){return l.a.cloneElement(n,Object.assign({},e.props))})},n}(i.Component),de=Object(m.b)(W.a).withConfig({displayName:"Signin__StyledDialog",componentId:"sc-1249hqr-0"})([""]),pe=m.b.div.withConfig({displayName:"Signin__StyledDiv",componentId:"sc-1249hqr-1"})(["display:flex;flex-direction:column;padding:0 24px;"]),fe=Object(m.b)(X.a).withConfig({displayName:"Signin__StyledInput",componentId:"sc-1249hqr-2"})(["&:before{border-bottom-color:rgba(0,0,0,0.1) !important;}"]),he=P()(R()("email","setEmail",""),R()("password","setPassword",""),R()("showPass","setShowPass",!1),R()("emailErrorText","setEmailErrorText",""),R()("passwordErrorText","setPasswordErrorText",""),j()({close:function(e){var n=e.setSigninOpen;return function(){return n(!1)}},fetchLogin:function(){return L()(D.a.mark(function e(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}))},onToggleShowPass:function(e){var n=e.showPass,t=e.setShowPass;return function(){t(!n)}}}),j()({onBlurEmail:function(){return function(){}},onBlurPassword:function(){return function(){}}}))(function(e){var n=e.email,t=e.password,r=e.showPass,a=(e.setShowPass,e.emailErrorText),o=e.passwordErrorText,i=(e.setEmailErrorText,e.setPasswordErrorText,e.onBlurEmail),c=e.onBlurPassword,s=e.fetchLogin,u=(e.user,e.open),m=(e.setSigninOpen,e.close),d=e.onToggleShowPass;return l.a.createElement(me,null,l.a.createElement(de,{"aria-labelledby":"dialog-title",open:u},l.a.createElement(V.a,{id:"dialog-title"},"Anmeldung"),l.a.createElement(pe,null,l.a.createElement(te.a,{error:!!a,fullWidth:!0,"aria-describedby":"emailHelper"},l.a.createElement(Z.a,{htmlFor:"email"},"Email"),l.a.createElement(fe,{id:"email",defaultValue:n,onBlur:i,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&i()}}),l.a.createElement(ae.a,{id:"emailHelper"},a)),l.a.createElement(te.a,{error:!!o,fullWidth:!0,"aria-describedby":"passwortHelper"},l.a.createElement(Z.a,{htmlFor:"passwort"},"Passwort"),l.a.createElement(fe,{id:"passwort",type:r?"text":"password",defaultValue:t,onBlur:c,onKeyPress:function(e){"Enter"===e.key&&c()},autoComplete:"current-password",autoCorrect:"off",spellCheck:"false",endAdornment:l.a.createElement(ee.a,{position:"end"},l.a.createElement(I.a,{onClick:d,onMouseDown:function(e){return e.preventDefault()},title:r?"verstecken":"anzeigen"},r?l.a.createElement(oe.b,null):l.a.createElement(oe.a,null)))}),l.a.createElement(ae.a,{id:"passwortHelper"},o))),l.a.createElement(U.a,null,l.a.createElement(y.a,{onClick:m},"abbrechen"),l.a.createElement(y.a,{color:"primary",onClick:s},"anmelden"))))}),be=P()(R()("anchorEl","setAnchorEl",null),R()("signinOpen","setSigninOpen",!1),j()({onClickMenu:function(e){var n=e.setAnchorEl;return function(e){return n(e.currentTarget)}},onCloseMenu:function(e){var n=e.setAnchorEl;return function(){return n(null)}},onClickSignin:function(e){var n=e.setSigninOpen,t=e.signinOpen,r=e.setAnchorEl;return function(){r(null),n(!t)}}}))(function(e){var n=e.anchorEl,t=e.onCloseMenu,r=e.onClickMenu,a=e.signinOpen,o=e.onClickSignin,i=e.setSigninOpen;return l.a.createElement("div",null,l.a.createElement(I.a,{"aria-haspopup":"true","aria-label":"Konto",onClick:r,color:"inherit",title:"Konto"},l.a.createElement(M.a,null)),l.a.createElement(H.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:!!n,onClose:t},l.a.createElement(B.a,{onClick:t},"Anmelden"),l.a.createElement(B.a,{onClick:o},"Konto erstellen")),l.a.createElement(he,{open:a,setSigninOpen:i}))}),Ee=Object(m.b)(x.a).withConfig({displayName:"Header__SiteTitle",componentId:"sc-1q5cq7d-0"})(["display:none;cursor:pointer;@media (min-width:700px){display:block;}"]),ge=m.b.div.withConfig({displayName:"Header__Spacer",componentId:"sc-1q5cq7d-1"})(["flex-grow:1;"]),we=Object(m.b)(y.a).withConfig({displayName:"Header__NavButton",componentId:"sc-1q5cq7d-2"})(["color:white !important;border:",";border-color:rgba(255,255,255,0.5) !important;font-weight:",";"],function(e){return e.active?"1px white":"unset"},function(e){return e.active?"700":"600"}),ve=P()(j()({onClickSiteTitle:function(){return function(){return Object(u.navigate)("/")}}}))(function(e){var n=e.onClickSiteTitle;return l.a.createElement(S.Location,null,function(e){var t=e.location.pathname;return l.a.createElement(g.a,{position:"fixed"},l.a.createElement(v.a,null,l.a.createElement(Ee,{variant:"title",color:"inherit",noWrap:!0,title:"Home",onClick:n},"erfassen.ch"),l.a.createElement(ge,null),l.a.createElement(we,{variant:"/"===t?"outlined":"text",component:u.Link,to:"/",active:("/"===t).toString()},"Home"),l.a.createElement(we,{variant:"/Projekte/"===t?"outlined":"text",component:u.Link,to:"/Projekte/",active:("/Projekte/"===t).toString()},"Projekte"),l.a.createElement(be,null)))})});function ke(){var e=a()(["\n  html {\n    overflow: hidden;\n  }\n\n/* scrollbars */\n\n::-webkit-scrollbar {\n  width: 12px;\n  background: rgba(255, 253, 231, 0.1);\n}\n\n::-webkit-scrollbar:horizontal {\n  height: 12px;\n}\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.4);\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.5);\n  background: rgba(85, 85, 85, 0.05);\n}\n\n::-webkit-scrollbar-corner {\n  background: rgba(0, 0, 0, 0);\n}\n  \n\n/*\n * seems that overflow:hidden is necessary\n * for all relfex-elements\n * BUT: map is not shown with it...\n */\n\n.reflex-element:not(.karte) {\n  border-right: 0 !important;\n  border-left: 0 !important;\n}\n\n/*\n.reflex-element:not(.karte) > div {\n  overflow: hidden;\n}*/\n\n.reflex-splitter {\n  background-color: #fffde7 !important;\n  border-right: 1px solid #fffde7 !important;\n  border-left: 1px solid #fffde7 !important;\n}\n\n.reflex-splitter:hover {\n  background-color: #fff59d !important;\n  border-right: 1px solid #fff59d !important;\n  border-left: 1px solid #fff59d !important;\n}\n"]);return ke=function(){return e},e}var xe=Object(m.a)(ke()),Ce=Object(d.createMuiTheme)({palette:{type:"light",primary:{main:b.a[500]},error:{main:f.a[500]}}});n.a=function(e){var n=e.children;return l.a.createElement(u.StaticQuery,{query:"4130953669",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(xe,null),l.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(d.MuiThemeProvider,{theme:Ce},l.a.createElement(l.a.Fragment,null,l.a.createElement(ve,null),n)))},data:o})}}}]);
//# sourceMappingURL=component---src-pages-projekte-index-tsx-8cf9e68d0502328618f9.js.map