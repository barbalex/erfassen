(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9],{294:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(51),l=n(358),i=n.n(l),s=n(337),c=n.n(s),u=n(321),d=n.n(u),p=n(307),m=n.n(p),f=n(308),g=n.n(f),h=n(334),E=n.n(h),w=n(305),v=m()(g()({onClickMenuItem:function(e){var t=e.post;return function(){Object(o.navigate)(t.frontmatter.path+"/")}}}));t.default=v(function(e){var t=e.post,n=e.onClickMenuItem;return r.a.createElement(w.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{button:!0,onClick:n},r.a.createElement(c.a,{onClick:n},E()(t,"frontmatter.title","(Titel fehlt)"))),r.a.createElement(d.a,null)))})},300:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return v});n(144),n(86);var a=n(0),r=n.n(a),o=n(51),l=n(84),i=n(368),s=n.n(i),c=n(321),u=n.n(c),d=n(332),p=n(294),m=n(305),f=l.b.div.withConfig({displayName:"Benutzer-Dokumentation__Container",componentId:"red361-0"})(["margin-top:64px;height:calc(100vh - 64px);display:flex;"]),g=l.b.div.withConfig({displayName:"Benutzer-Dokumentation__Menu",componentId:"red361-1"})(["width:25%;min-width:320px;height:calc(100vh - 64px);overflow-y:auto;padding:25px 0;border-right:1px solid rgba(0,0,0,0.12);"]),h=l.b.div.withConfig({displayName:"Benutzer-Dokumentation__Doku",componentId:"red361-2"})(["width:100%;padding:25px;overflow-y:auto;ul{margin-top:0;}p,li{margin-bottom:0;}h1,h3,ol{margin-bottom:10px;}h2{margin-top:10px;margin-bottom:10px;}"]),E=l.b.div.withConfig({displayName:"Benutzer-Dokumentation__MenuTitle",componentId:"red361-3"})(["padding:0 24px;margin-bottom:14px;"]),w=Object(l.b)(o.Link).withConfig({displayName:"Benutzer-Dokumentation__MenuTitleLink",componentId:"red361-4"})(["font-size:21px;font-weight:700;text-decoration:none;color:rgba(0,0,0,0.87);&:hover{text-decoration:underline;}"]),v="3515430989";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(m.a,null,r.a.createElement(d.a,null,r.a.createElement(f,null,r.a.createElement(g,null,r.a.createElement(E,null,r.a.createElement(w,{to:"/Benutzer-Dokumentation/"},"Benutzer-Dokumentation")),r.a.createElement(s.a,{component:"nav"},r.a.createElement(u.a,null),t.filter(function(e){return!!e&&!!e.node}).map(function(e){var t=e.node;return r.a.createElement(p.default,{post:t,key:t.id})}))),r.a.createElement(h,null,r.a.createElement("p",null,"Hoffentlich nützliche Infos für Sie")))))}},305:function(e,t,n){"use strict";n(34),n(86);var a=n(9),r=n.n(a),o=n(0),l=n.n(o),i=n(84),s=n(309),c=n.n(s),u=i.b.div.withConfig({displayName:"ErrorBoundary__Container",componentId:"sc-1fvc7se-0"})(["margin:10px;"]),d=i.b.div.withConfig({displayName:"ErrorBoundary__ErrorTitle",componentId:"sc-1fvc7se-1"})(["margin-bottom:10px;"]),p=Object(i.b)(c.a).withConfig({displayName:"ErrorBoundary__ReloadButton",componentId:"sc-1fvc7se-2"})(["margin-top:10px !important;"]),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={error:null,errorInfo:null},n}r()(t,e);var n=t.prototype;return n.componentDidCatch=function(e,t){this.setState({error:e,errorInfo:t})},n.render=function(){var e=this,t=this.state.errorInfo;if(t)return console.log("errorInfo:",t),l.a.createElement(u,null,l.a.createElement(d,null,"Oh je, es ist ein Fehler aufgetreten! Bericht:"),l.a.createElement("div",null,t.componentStack),l.a.createElement(p,{variant:"outlined",onClick:function(){window.location.reload(!1)}},"Neu laden"));var n=this.props.children;return l.a.Children.map(n,function(t){return l.a.cloneElement(t,Object.assign({},e.props))})},t}(o.Component);t.a=m},321:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(339))},332:function(e,t,n){"use strict";var a=n(333),r=n(0),o=n.n(r),l=n(351),i=n.n(l),s=n(51),c=(n(344),n(345),n(359)),u=n.n(c),d=n(360),p=n.n(d),m=n(319),f=n.n(m),g=n(309),h=n.n(g),E=n(84),w=n(15),v=n(307),b=n.n(v),y=n(308),x=n.n(y),k=(n(314),n(317)),C=n.n(k),S=n(357),P=n.n(S),_=n(356),O=n.n(_),T=n(355),D=n(315),I=n.n(D),N=n(310),B=n.n(N),L=(n(318),n(311)),j=n.n(L),M=n(323),z=n.n(M),A=n(325),H=n.n(A),q=n(331),F=n.n(q),K=n(324),R=n.n(K),W=n(327),V=n.n(W),U=n(329),J=n.n(U),Q=n(326),$=n.n(Q),G=n(328),X=n.n(G),Y=n(330),Z=n(305),ee=(n(34),n(85)),te=n(9),ne=n.n(te),ae=n(352),re=n(365),oe=n(334),le=n.n(oe),ie=(n(35),"localhost"===window.location.hostname.replace("www.","")),se=ie?"localhost":window.location.hostname,ce=ie?"http://"+se+":5984/erfassen":"https://erfassen.ch:5984/erfassen";"undefined"!=typeof window&&ae.a.plugin(re.a);var ue=function(e){function t(t){var n;n=e.call(this)||this;var a=new ae.a(ce);return n.state={authDb:a,name:null},a.getSession().then(function(e){var t=le()(e,"userCtx.name",null);t&&n.setState(function(e){return{name:t}})}).catch(function(e){throw e}),n}ne()(t,e);var n=t.prototype;return n.setAuthDb=function(e){this.setState(function(t){return{authDb:e}})},n.setName=function(e){this.setState(function(t){return{name:e}})},t}(ee.a),de=function(e){return function(t){return o.a.createElement(ee.c,{to:[ue]},function(n){return o.a.createElement(e,Object.assign({authDbState:n},t))})}},pe=Object(E.b)(z.a).withConfig({displayName:"Signup__StyledDialog",componentId:"sc-1xn6wqs-0"})([""]),me=E.b.div.withConfig({displayName:"Signup__StyledDiv",componentId:"sc-1xn6wqs-1"})(["display:flex;flex-direction:column;padding:0 24px;"]),fe=Object(E.b)(R.a).withConfig({displayName:"Signup__StyledInput",componentId:"sc-1xn6wqs-2"})(["&:before{border-bottom-color:rgba(0,0,0,0.1) !important;}"]),ge=b()(de,I()("email","setEmail",""),I()("password","setPassword",""),I()("showPass","setShowPass",!1),I()("emailErrorText","setEmailErrorText",""),I()("passwordErrorText","setPasswordErrorText",""),x()({close:function(e){var t=e.setSignupOpen;return function(){return t(!1)}},onClickSignup:function(e){var t=e.email,n=e.password,a=e.authDbState,r=e.setSignupOpen;return j()(B.a.mark(function e(){var o,l;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.state.authDb.signUp(t,n);case 3:o=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Signup: error logging in:",e.t0);case 9:return console.log("Signup: signUpResponce logging in:",o),e.prev=10,e.next=13,a.state.authDb.logIn(t,n);case 13:l=e.sent,e.next=20;break;case 16:e.prev=16,e.t1=e.catch(10),"unauthorized"===e.t1.name||e.t1.name,console.log("Signup: error logging in:",e.t1);case 20:console.log("Signup: logInResponce logging in:",l),a.setName(t),r(!1);case 23:case"end":return e.stop()}},e,this,[[0,6],[10,16]])}))},onToggleShowPass:function(e){var t=e.showPass,n=e.setShowPass;return function(){n(!t)}}}),x()({onBlurEmail:function(e){var t=e.setEmail;return function(e){return t(e.target.value)}},onBlurPassword:function(e){var t=e.setPassword;return function(e){return t(e.target.value)}}}))(function(e){var t=e.email,n=e.password,a=e.showPass,r=(e.setShowPass,e.emailErrorText),l=e.passwordErrorText,i=(e.setEmailErrorText,e.setPasswordErrorText,e.onBlurEmail),s=e.onBlurPassword,c=e.onClickSignup,u=(e.user,e.open),d=(e.setSignupOpen,e.close),p=e.onToggleShowPass;e.db;return o.a.createElement(Z.a,null,o.a.createElement(pe,{"aria-labelledby":"dialog-title",open:u},o.a.createElement(H.a,{id:"dialog-title"},"Anmeldung"),o.a.createElement(me,null,o.a.createElement($.a,{error:!!r,fullWidth:!0,"aria-describedby":"emailHelper"},o.a.createElement(V.a,{htmlFor:"email"},"Email"),o.a.createElement(fe,{id:"email",defaultValue:t,onBlur:i,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&i()}}),o.a.createElement(X.a,{id:"emailHelper"},r)),o.a.createElement($.a,{error:!!l,fullWidth:!0,"aria-describedby":"passwortHelper"},o.a.createElement(V.a,{htmlFor:"passwort"},"Passwort"),o.a.createElement(fe,{id:"passwort",type:a?"text":"password",defaultValue:n,onBlur:s,onKeyPress:function(e){"Enter"===e.key&&s()},autoComplete:"current-password",autoCorrect:"off",spellCheck:"false",endAdornment:o.a.createElement(J.a,{position:"end"},o.a.createElement(C.a,{onClick:p,onMouseDown:function(e){return e.preventDefault()},title:a?"verstecken":"anzeigen"},a?o.a.createElement(Y.b,null):o.a.createElement(Y.a,null)))}),o.a.createElement(X.a,{id:"passwortHelper"},l))),o.a.createElement(F.a,null,o.a.createElement(h.a,{onClick:d},"abbrechen"),o.a.createElement(h.a,{color:"primary",onClick:c},"Konto erstellen"))))}),he=Object(E.b)(z.a).withConfig({displayName:"Login__StyledDialog",componentId:"mq7maw-0"})([""]),Ee=E.b.div.withConfig({displayName:"Login__StyledDiv",componentId:"mq7maw-1"})(["display:flex;flex-direction:column;padding:0 24px;"]),we=Object(E.b)(R.a).withConfig({displayName:"Login__StyledInput",componentId:"mq7maw-2"})(["&:before{border-bottom-color:rgba(0,0,0,0.1) !important;}"]),ve=b()(de,I()("email","setEmail",""),I()("password","setPassword",""),I()("showPass","setShowPass",!1),I()("emailErrorText","setEmailErrorText",""),I()("passwordErrorText","setPasswordErrorText",""),x()({close:function(e){var t=e.setLoginOpen;return function(){return t(!1)}},onClickLogin:function(e){var t=e.email,n=e.password,a=e.authDbState,r=e.setLoginOpen;return j()(B.a.mark(function e(){var o;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.state.authDb.logIn(t,n);case 3:o=e.sent,e.next=11;break;case 6:throw e.prev=6,e.t0=e.catch(0),"unauthorized"===e.t0.name||e.t0.name,console.log("Login: error logging in:",e.t0),e.t0;case 11:console.log("Login: logInResponce logging in:",o),a.setName(t),r(!1);case 14:case"end":return e.stop()}},e,this,[[0,6]])}))},onToggleShowPass:function(e){var t=e.showPass,n=e.setShowPass;return function(){n(!t)}}}),x()({onBlurEmail:function(e){var t=e.setEmail;return function(e){return t(e.target.value)}},onBlurPassword:function(e){var t=e.setPassword;return function(e){return t(e.target.value)}}}))(function(e){var t=e.email,n=e.password,a=e.showPass,r=(e.setShowPass,e.emailErrorText),l=e.passwordErrorText,i=(e.setEmailErrorText,e.setPasswordErrorText,e.onBlurEmail),s=e.onBlurPassword,c=e.onClickLogin,u=(e.user,e.open),d=(e.setLoginOpen,e.close),p=e.onToggleShowPass;e.db;return o.a.createElement(Z.a,null,o.a.createElement(he,{"aria-labelledby":"dialog-title",open:u},o.a.createElement(H.a,{id:"dialog-title"},"Anmeldung"),o.a.createElement(Ee,null,o.a.createElement($.a,{error:!!r,fullWidth:!0,"aria-describedby":"emailHelper"},o.a.createElement(V.a,{htmlFor:"email"},"Email"),o.a.createElement(we,{id:"email",defaultValue:t,onBlur:i,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&i()}}),o.a.createElement(X.a,{id:"emailHelper"},r)),o.a.createElement($.a,{error:!!l,fullWidth:!0,"aria-describedby":"passwortHelper"},o.a.createElement(V.a,{htmlFor:"passwort"},"Passwort"),o.a.createElement(we,{id:"passwort",type:a?"text":"password",defaultValue:n,onBlur:s,onKeyPress:function(e){"Enter"===e.key&&s()},autoComplete:"current-password",autoCorrect:"off",spellCheck:"false",endAdornment:o.a.createElement(J.a,{position:"end"},o.a.createElement(C.a,{onClick:p,onMouseDown:function(e){return e.preventDefault()},title:a?"verstecken":"anzeigen"},a?o.a.createElement(Y.b,null):o.a.createElement(Y.a,null)))}),o.a.createElement(X.a,{id:"passwortHelper"},l))),o.a.createElement(F.a,null,o.a.createElement(h.a,{onClick:d},"abbrechen"),o.a.createElement(h.a,{color:"primary",onClick:c},"Anmelden"))))}),be=E.b.div.withConfig({displayName:"Account__IconContainer",componentId:"huyud8-0"})(["position:relative;padding-left:10px;"]),ye=E.b.div.withConfig({displayName:"Account__UserNameDiv",componentId:"huyud8-1"})(["position:absolute;bottom:0;font-size:10px;width:60px;left:5px;text-align:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]),xe=b()(de,I()("anchorEl","setAnchorEl",null),I()("signupOpen","setSignupOpen",!1),I()("loginOpen","setLoginOpen",!1),x()({onClickMenu:function(e){var t=e.setAnchorEl;return function(e){return t(e.currentTarget)}},onCloseMenu:function(e){var t=e.setAnchorEl;return function(){return t(null)}},onClickSignup:function(e){var t=e.setSignupOpen,n=e.signupOpen,a=e.setAnchorEl;return function(){a(null),t(!n)}},onClickLogin:function(e){var t=e.setLoginOpen,n=e.loginOpen,a=e.setAnchorEl;return function(){a(null),t(!n)}}}))(function(e){var t=e.anchorEl,n=e.onCloseMenu,a=e.onClickMenu,r=e.signupOpen,l=e.loginOpen,i=e.onClickSignup,s=e.onClickLogin,c=e.setSignupOpen,u=e.setLoginOpen,d=e.authDbState;return console.log("Account, name:",d.state.name),o.a.createElement(Z.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(be,null,o.a.createElement(C.a,{"aria-haspopup":"true","aria-label":"Konto",onClick:a,color:"inherit",title:"Konto"},o.a.createElement(T.a,null)),o.a.createElement(ye,null,d.state.name||"")),o.a.createElement(O.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:!!t,onClose:n},o.a.createElement(P.a,{onClick:s},"Anmelden"),o.a.createElement(P.a,{onClick:i},"Konto erstellen")),r&&o.a.createElement(ge,{open:r,setSignupOpen:c}),l&&o.a.createElement(ve,{open:l,setLoginOpen:u})))}),ke=Object(E.b)(f.a).withConfig({displayName:"Header__SiteTitle",componentId:"sc-1q5cq7d-0"})(["display:none;cursor:pointer;@media (min-width:700px){display:block;}"]),Ce=E.b.div.withConfig({displayName:"Header__Spacer",componentId:"sc-1q5cq7d-1"})(["flex-grow:1;"]),Se=Object(E.b)(h.a).withConfig({displayName:"Header__NavButton",componentId:"sc-1q5cq7d-2"})(["color:white !important;border:",";border-color:rgba(255,255,255,0.5) !important;font-weight:",";"],function(e){return e.active?"1px white":"unset"},function(e){return e.active?"700":"600"}),Pe=b()(x()({onClickSiteTitle:function(){return function(){return Object(s.navigate)("/")}}}))(function(e){var t=e.onClickSiteTitle;return o.a.createElement(w.Location,null,function(e){var n=e.location.pathname;return o.a.createElement(Z.a,null,o.a.createElement(u.a,{position:"fixed"},o.a.createElement(p.a,null,o.a.createElement(ke,{variant:"title",color:"inherit",noWrap:!0,title:"Home",onClick:t},"erfassen.ch"),o.a.createElement(Ce,null),o.a.createElement(Se,{variant:"/"===n?"outlined":"text",component:s.Link,to:"/",active:("/"===n).toString()},"Home"),o.a.createElement(Se,{variant:"/Projekte/"===n?"outlined":"text",component:s.Link,to:"/Projekte/",active:("/Projekte/"===n).toString()},"Projekte"),o.a.createElement(xe,null))))})});t.a=function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"4130953669",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(Pe,null),t)},data:a})}},333:function(e){e.exports={data:{site:{siteMetadata:{title:"erfassen"}}}}},337:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(338))},338:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(7)),o=a(n(14)),l=a(n(13)),i=a(n(0)),s=a(n(1)),c=a(n(306)),u=a(n(137)),d=a(n(319)),p=function(e){return{root:{flex:"1 1 auto",minWidth:0,padding:"0 16px","&:first-child":{paddingLeft:0}},inset:{"&:first-child":{paddingLeft:56}},dense:{fontSize:e.typography.pxToRem(13)},primary:{"&$textDense":{fontSize:"inherit"}},secondary:{"&$textDense":{fontSize:"inherit"}},textDense:{}}};function m(e,t){var n,a=e.children,s=e.classes,u=e.className,p=e.disableTypography,m=e.inset,f=e.primary,g=e.primaryTypographyProps,h=e.secondary,E=e.secondaryTypographyProps,w=(0,l.default)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),v=t.dense,b=null!=f?f:a;null==b||b.type===d.default||p||(b=i.default.createElement(d.default,(0,r.default)({variant:"subheading",className:(0,c.default)(s.primary,(0,o.default)({},s.textDense,v)),component:"span"},g),b));var y=h;return null==y||y.type===d.default||p||(y=i.default.createElement(d.default,(0,r.default)({variant:"body1",className:(0,c.default)(s.secondary,(0,o.default)({},s.textDense,v)),color:"textSecondary"},E),y)),i.default.createElement("div",(0,r.default)({className:(0,c.default)(s.root,(n={},(0,o.default)(n,s.dense,v),(0,o.default)(n,s.inset,m),n),u)},w),b,y)}t.styles=p,m.propTypes={},m.defaultProps={disableTypography:!1,inset:!1},m.contextTypes={dense:s.default.bool};var f=(0,u.default)(p,{name:"MuiListItemText"})(m);t.default=f},339:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(7)),o=a(n(14)),l=a(n(13)),i=a(n(0)),s=(a(n(1)),a(n(306))),c=a(n(137)),u=n(141),d=function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,u.fade)(e.palette.divider,.08)}}};function p(e){var t,n=e.absolute,a=e.classes,c=e.className,u=e.component,d=e.inset,p=e.light,m=(0,l.default)(e,["absolute","classes","className","component","inset","light"]),f=(0,s.default)(a.root,(t={},(0,o.default)(t,a.absolute,n),(0,o.default)(t,a.inset,d),(0,o.default)(t,a.light,p),t),c);return i.default.createElement(u,(0,r.default)({className:f},m))}t.styles=d,p.propTypes={},p.defaultProps={absolute:!1,component:"hr",inset:!1,light:!1};var m=(0,c.default)(d,{name:"MuiDivider"})(p);t.default=m}}]);
//# sourceMappingURL=component---src-pages-benutzer-dokumentation-index-tsx-a2e20f44c20f0180d918.js.map