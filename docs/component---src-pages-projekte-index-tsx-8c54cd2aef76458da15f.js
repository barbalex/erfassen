(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{304:function(e,t,n){"use strict";n.r(t);var r=n(310),a=n.n(r),o=(n(318),n(311)),i=n.n(o),l=n(0),s=n.n(l),c=n(84),u=n(671),p=(n(635),n(307)),m=n.n(p),d=n(332),f=(n(34),n(85)),g=n(9),h=n.n(g),E=(n(169),n(670)),w=n(665),b=n(672),v=n(666),y=n(667),x=n(668),C=n(669);E.a.plugin(w.a),E.a.plugin(b.a);var k=i()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.create({name:"erfassen",adapter:"idb",queryChangeDetection:!1});case 3:t=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:return e.next=11,t.collection({name:"message",schema:C});case 11:return e.next=13,t.collection({name:"zeit",schema:v});case 13:return e.next=15,t.collection({name:"ort",schema:y});case 15:return t.ort.sync({remote:"http://localhost:5984/erfassen/",options:{live:!0,retry:!0},query:t.ort.find().where("type").eq("ort")}),e.next=18,t.collection({name:"beob",schema:x});case 18:return t.beob.sync({remote:"http://localhost:5984/erfassen/",options:{live:!0,retry:!0},query:t.beob.find().where("type").eq("beob")}),e.abrupt("return",t);case 20:case"end":return e.stop()}},e,this,[[0,6]])})),S=function(e){function t(t){var n;return(n=e.call(this)||this).state={rxDb:window.rxDb||null},window.rxDb||k().then(function(e){n.setState(function(t){return{rxDb:e}}),window.rxDb=e}).catch(function(e){throw e}),n}return h()(t,e),t.prototype.setRxDb=function(e){this.setState(function(t){return{rxDb:e}})},t}(f.a);var P=n(305),O=c.b.div.withConfig({displayName:"Projekte__Container",componentId:"h44dj2-0"})(["margin-top:64px;min-height:calc(100vh - 64px);"]),_=Object(c.b)(O).withConfig({displayName:"Projekte__LoadingContainer",componentId:"h44dj2-1"})(["padding:20px;"]),D=Object(c.b)(u.a).withConfig({displayName:"Projekte__ReflexContainer",componentId:"h44dj2-2"})(["height:calc(100vh - 64px) !important;"]),I=m()(function(e){return function(t){return s.a.createElement(f.c,{to:[S]},function(n){return s.a.createElement(e,Object.assign({rxDbState:n},t))})}});t.default=I(function(e){var t=e.rxDbState.state.rxDb;return t?s.a.createElement(P.a,null,s.a.createElement(d.a,null,s.a.createElement(O,null,s.a.createElement(D,{orientation:"vertical"},s.a.createElement(u.b,{flex:.3,propagateDimensions:!0,renderOnResizeRate:200,renderOnResize:!0},s.a.createElement("p",null,"Tree")),s.a.createElement(u.c,null),s.a.createElement(u.b,{propagateDimensions:!0,renderOnResizeRate:200,renderOnResize:!0},s.a.createElement("p",null,"Form"),s.a.createElement("button",{onClick:i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.ort.insert({name:"test-ort",type:"ort"}));case 1:case"end":return e.stop()}},e,this)}))},"insert ort"),s.a.createElement("button",{onClick:i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.beob.insert({art:"test-art",type:"beob"}));case 1:case"end":return e.stop()}},e,this)}))},"insert beob")))))):s.a.createElement(d.a,null,s.a.createElement(_,null,"Lade daten..."))})},305:function(e,t,n){"use strict";n(34),n(86);var r=n(9),a=n.n(r),o=n(0),i=n.n(o),l=n(84),s=n(309),c=n.n(s),u=l.b.div.withConfig({displayName:"ErrorBoundary__Container",componentId:"sc-1fvc7se-0"})(["margin:10px;"]),p=l.b.div.withConfig({displayName:"ErrorBoundary__ErrorTitle",componentId:"sc-1fvc7se-1"})(["margin-bottom:10px;"]),m=Object(l.b)(c.a).withConfig({displayName:"ErrorBoundary__ReloadButton",componentId:"sc-1fvc7se-2"})(["margin-top:10px !important;"]),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={error:null,errorInfo:null},n}a()(t,e);var n=t.prototype;return n.componentDidCatch=function(e,t){this.setState({error:e,errorInfo:t})},n.render=function(){var e=this,t=this.state.errorInfo;if(t)return console.log("errorInfo:",t),i.a.createElement(u,null,i.a.createElement(p,null,"Oh je, es ist ein Fehler aufgetreten! Bericht:"),i.a.createElement("div",null,t.componentStack),i.a.createElement(m,{variant:"outlined",onClick:function(){window.location.reload(!1)}},"Neu laden"));var n=this.props.children;return i.a.Children.map(n,function(t){return i.a.cloneElement(t,Object.assign({},e.props))})},t}(o.Component);t.a=d},332:function(e,t,n){"use strict";var r=n(333),a=n(0),o=n.n(a),i=n(351),l=n.n(i),s=n(51),c=(n(344),n(345),n(359)),u=n.n(c),p=n(360),m=n.n(p),d=n(319),f=n.n(d),g=n(309),h=n.n(g),E=n(84),w=n(15),b=n(307),v=n.n(b),y=n(308),x=n.n(y),C=(n(314),n(317)),k=n.n(C),S=n(357),P=n.n(S),O=n(356),_=n.n(O),D=n(355),I=n(315),j=n.n(I),T=n(310),N=n.n(T),q=(n(318),n(311)),L=n.n(q),B=n(323),z=n.n(B),A=n(325),H=n.n(A),R=n(331),F=n.n(R),K=n(324),M=n.n(K),W=n(327),V=n.n(W),U=n(329),J=n.n(U),Q=n(326),G=n.n(Q),X=n(328),Y=n.n(X),Z=n(330),$=n(305),ee=(n(34),n(85)),te=n(9),ne=n.n(te),re=n(352),ae=n(365),oe=n(334),ie=n.n(oe),le=(n(35),"localhost"===window.location.hostname.replace("www.","")),se=le?"localhost":window.location.hostname,ce=le?"http://"+se+":5984/erfassen":"https://erfassen.ch:5984/erfassen";"undefined"!=typeof window&&re.a.plugin(ae.a);var ue=function(e){function t(t){var n;n=e.call(this)||this;var r=new re.a(ce);return n.state={authDb:r,name:null},r.getSession().then(function(e){var t=ie()(e,"userCtx.name",null);t&&n.setState(function(e){return{name:t}})}).catch(function(e){throw e}),n}ne()(t,e);var n=t.prototype;return n.setAuthDb=function(e){this.setState(function(t){return{authDb:e}})},n.setName=function(e){this.setState(function(t){return{name:e}})},t}(ee.a),pe=function(e){return function(t){return o.a.createElement(ee.c,{to:[ue]},function(n){return o.a.createElement(e,Object.assign({authDbState:n},t))})}},me=Object(E.b)(z.a).withConfig({displayName:"Signup__StyledDialog",componentId:"sc-1xn6wqs-0"})([""]),de=E.b.div.withConfig({displayName:"Signup__StyledDiv",componentId:"sc-1xn6wqs-1"})(["display:flex;flex-direction:column;padding:0 24px;"]),fe=Object(E.b)(M.a).withConfig({displayName:"Signup__StyledInput",componentId:"sc-1xn6wqs-2"})(["&:before{border-bottom-color:rgba(0,0,0,0.1) !important;}"]),ge=v()(pe,j()("email","setEmail",""),j()("password","setPassword",""),j()("showPass","setShowPass",!1),j()("emailErrorText","setEmailErrorText",""),j()("passwordErrorText","setPasswordErrorText",""),x()({close:function(e){var t=e.setSignupOpen;return function(){return t(!1)}},onClickSignup:function(e){var t=e.email,n=e.password,r=e.authDbState,a=e.setSignupOpen;return L()(N.a.mark(function e(){var o,i;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.state.authDb.signUp(t,n);case 3:o=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Signup: error logging in:",e.t0);case 9:return console.log("Signup: signUpResponce logging in:",o),e.prev=10,e.next=13,r.state.authDb.logIn(t,n);case 13:i=e.sent,e.next=20;break;case 16:e.prev=16,e.t1=e.catch(10),"unauthorized"===e.t1.name||e.t1.name,console.log("Signup: error logging in:",e.t1);case 20:console.log("Signup: logInResponce logging in:",i),r.setName(t),a(!1);case 23:case"end":return e.stop()}},e,this,[[0,6],[10,16]])}))},onToggleShowPass:function(e){var t=e.showPass,n=e.setShowPass;return function(){n(!t)}}}),x()({onBlurEmail:function(e){var t=e.setEmail;return function(e){return t(e.target.value)}},onBlurPassword:function(e){var t=e.setPassword;return function(e){return t(e.target.value)}}}))(function(e){var t=e.email,n=e.password,r=e.showPass,a=(e.setShowPass,e.emailErrorText),i=e.passwordErrorText,l=(e.setEmailErrorText,e.setPasswordErrorText,e.onBlurEmail),s=e.onBlurPassword,c=e.onClickSignup,u=(e.user,e.open),p=(e.setSignupOpen,e.close),m=e.onToggleShowPass;e.db;return o.a.createElement($.a,null,o.a.createElement(me,{"aria-labelledby":"dialog-title",open:u},o.a.createElement(H.a,{id:"dialog-title"},"Anmeldung"),o.a.createElement(de,null,o.a.createElement(G.a,{error:!!a,fullWidth:!0,"aria-describedby":"emailHelper"},o.a.createElement(V.a,{htmlFor:"email"},"Email"),o.a.createElement(fe,{id:"email",defaultValue:t,onBlur:l,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&l()}}),o.a.createElement(Y.a,{id:"emailHelper"},a)),o.a.createElement(G.a,{error:!!i,fullWidth:!0,"aria-describedby":"passwortHelper"},o.a.createElement(V.a,{htmlFor:"passwort"},"Passwort"),o.a.createElement(fe,{id:"passwort",type:r?"text":"password",defaultValue:n,onBlur:s,onKeyPress:function(e){"Enter"===e.key&&s()},autoComplete:"current-password",autoCorrect:"off",spellCheck:"false",endAdornment:o.a.createElement(J.a,{position:"end"},o.a.createElement(k.a,{onClick:m,onMouseDown:function(e){return e.preventDefault()},title:r?"verstecken":"anzeigen"},r?o.a.createElement(Z.b,null):o.a.createElement(Z.a,null)))}),o.a.createElement(Y.a,{id:"passwortHelper"},i))),o.a.createElement(F.a,null,o.a.createElement(h.a,{onClick:p},"abbrechen"),o.a.createElement(h.a,{color:"primary",onClick:c},"Konto erstellen"))))}),he=Object(E.b)(z.a).withConfig({displayName:"Login__StyledDialog",componentId:"mq7maw-0"})([""]),Ee=E.b.div.withConfig({displayName:"Login__StyledDiv",componentId:"mq7maw-1"})(["display:flex;flex-direction:column;padding:0 24px;"]),we=Object(E.b)(M.a).withConfig({displayName:"Login__StyledInput",componentId:"mq7maw-2"})(["&:before{border-bottom-color:rgba(0,0,0,0.1) !important;}"]),be=v()(pe,j()("email","setEmail",""),j()("password","setPassword",""),j()("showPass","setShowPass",!1),j()("emailErrorText","setEmailErrorText",""),j()("passwordErrorText","setPasswordErrorText",""),x()({close:function(e){var t=e.setLoginOpen;return function(){return t(!1)}},onClickLogin:function(e){var t=e.email,n=e.password,r=e.authDbState,a=e.setLoginOpen;return L()(N.a.mark(function e(){var o;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.state.authDb.logIn(t,n);case 3:o=e.sent,e.next=11;break;case 6:throw e.prev=6,e.t0=e.catch(0),"unauthorized"===e.t0.name||e.t0.name,console.log("Login: error logging in:",e.t0),e.t0;case 11:console.log("Login: logInResponce logging in:",o),r.setName(t),a(!1);case 14:case"end":return e.stop()}},e,this,[[0,6]])}))},onToggleShowPass:function(e){var t=e.showPass,n=e.setShowPass;return function(){n(!t)}}}),x()({onBlurEmail:function(e){var t=e.setEmail;return function(e){return t(e.target.value)}},onBlurPassword:function(e){var t=e.setPassword;return function(e){return t(e.target.value)}}}))(function(e){var t=e.email,n=e.password,r=e.showPass,a=(e.setShowPass,e.emailErrorText),i=e.passwordErrorText,l=(e.setEmailErrorText,e.setPasswordErrorText,e.onBlurEmail),s=e.onBlurPassword,c=e.onClickLogin,u=(e.user,e.open),p=(e.setLoginOpen,e.close),m=e.onToggleShowPass;e.db;return o.a.createElement($.a,null,o.a.createElement(he,{"aria-labelledby":"dialog-title",open:u},o.a.createElement(H.a,{id:"dialog-title"},"Anmeldung"),o.a.createElement(Ee,null,o.a.createElement(G.a,{error:!!a,fullWidth:!0,"aria-describedby":"emailHelper"},o.a.createElement(V.a,{htmlFor:"email"},"Email"),o.a.createElement(we,{id:"email",defaultValue:t,onBlur:l,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&l()}}),o.a.createElement(Y.a,{id:"emailHelper"},a)),o.a.createElement(G.a,{error:!!i,fullWidth:!0,"aria-describedby":"passwortHelper"},o.a.createElement(V.a,{htmlFor:"passwort"},"Passwort"),o.a.createElement(we,{id:"passwort",type:r?"text":"password",defaultValue:n,onBlur:s,onKeyPress:function(e){"Enter"===e.key&&s()},autoComplete:"current-password",autoCorrect:"off",spellCheck:"false",endAdornment:o.a.createElement(J.a,{position:"end"},o.a.createElement(k.a,{onClick:m,onMouseDown:function(e){return e.preventDefault()},title:r?"verstecken":"anzeigen"},r?o.a.createElement(Z.b,null):o.a.createElement(Z.a,null)))}),o.a.createElement(Y.a,{id:"passwortHelper"},i))),o.a.createElement(F.a,null,o.a.createElement(h.a,{onClick:p},"abbrechen"),o.a.createElement(h.a,{color:"primary",onClick:c},"Anmelden"))))}),ve=E.b.div.withConfig({displayName:"Account__IconContainer",componentId:"huyud8-0"})(["position:relative;padding-left:10px;"]),ye=E.b.div.withConfig({displayName:"Account__UserNameDiv",componentId:"huyud8-1"})(["position:absolute;bottom:0;font-size:10px;width:60px;left:5px;text-align:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]),xe=v()(pe,j()("anchorEl","setAnchorEl",null),j()("signupOpen","setSignupOpen",!1),j()("loginOpen","setLoginOpen",!1),x()({onClickMenu:function(e){var t=e.setAnchorEl;return function(e){return t(e.currentTarget)}},onCloseMenu:function(e){var t=e.setAnchorEl;return function(){return t(null)}},onClickSignup:function(e){var t=e.setSignupOpen,n=e.signupOpen,r=e.setAnchorEl;return function(){r(null),t(!n)}},onClickLogin:function(e){var t=e.setLoginOpen,n=e.loginOpen,r=e.setAnchorEl;return function(){r(null),t(!n)}}}))(function(e){var t=e.anchorEl,n=e.onCloseMenu,r=e.onClickMenu,a=e.signupOpen,i=e.loginOpen,l=e.onClickSignup,s=e.onClickLogin,c=e.setSignupOpen,u=e.setLoginOpen,p=e.authDbState;return console.log("Account, name:",p.state.name),o.a.createElement($.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(ve,null,o.a.createElement(k.a,{"aria-haspopup":"true","aria-label":"Konto",onClick:r,color:"inherit",title:"Konto"},o.a.createElement(D.a,null)),o.a.createElement(ye,null,p.state.name||"")),o.a.createElement(_.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:!!t,onClose:n},o.a.createElement(P.a,{onClick:s},"Anmelden"),o.a.createElement(P.a,{onClick:l},"Konto erstellen")),a&&o.a.createElement(ge,{open:a,setSignupOpen:c}),i&&o.a.createElement(be,{open:i,setLoginOpen:u})))}),Ce=Object(E.b)(f.a).withConfig({displayName:"Header__SiteTitle",componentId:"sc-1q5cq7d-0"})(["display:none;cursor:pointer;@media (min-width:700px){display:block;}"]),ke=E.b.div.withConfig({displayName:"Header__Spacer",componentId:"sc-1q5cq7d-1"})(["flex-grow:1;"]),Se=Object(E.b)(h.a).withConfig({displayName:"Header__NavButton",componentId:"sc-1q5cq7d-2"})(["color:white !important;border:",";border-color:rgba(255,255,255,0.5) !important;font-weight:",";"],function(e){return e.active?"1px white":"unset"},function(e){return e.active?"700":"600"}),Pe=v()(x()({onClickSiteTitle:function(){return function(){return Object(s.navigate)("/")}}}))(function(e){var t=e.onClickSiteTitle;return o.a.createElement(w.Location,null,function(e){var n=e.location.pathname;return o.a.createElement($.a,null,o.a.createElement(u.a,{position:"fixed"},o.a.createElement(m.a,null,o.a.createElement(Ce,{variant:"title",color:"inherit",noWrap:!0,title:"Home",onClick:t},"erfassen.ch"),o.a.createElement(ke,null),o.a.createElement(Se,{variant:"/"===n?"outlined":"text",component:s.Link,to:"/",active:("/"===n).toString()},"Home"),o.a.createElement(Se,{variant:"/Projekte/"===n?"outlined":"text",component:s.Link,to:"/Projekte/",active:("/Projekte/"===n).toString()},"Projekte"),o.a.createElement(xe,null))))})});t.a=function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"4130953669",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(Pe,null),t)},data:r})}},333:function(e){e.exports={data:{site:{siteMetadata:{title:"erfassen"}}}}},637:function(e,t){},654:function(e,t){},666:function(e){e.exports={title:"zeit schema",version:0,description:"describes a date",type:"object",properties:{type:{type:"string"},zeit:{type:"string",primary:!0}},required:["zeit","type"]}},667:function(e){e.exports={title:"ort schema",version:0,description:"describes a location",type:"object",properties:{type:{type:"string"},parentId:{type:"string"},name:{type:"string"}},required:["name","type"]}},668:function(e){e.exports={title:"beob schema",version:0,description:"describes a sighting",type:"object",properties:{type:{type:"string"},parentId:{type:"string"},art:{type:"string"}},required:["art","type"]}},669:function(e){e.exports={title:"message schema",version:0,description:"describes a message",type:"object",properties:{type:{type:"string"},message:{type:"string"}},required:["type"]}}}]);
//# sourceMappingURL=component---src-pages-projekte-index-tsx-8c54cd2aef76458da15f.js.map