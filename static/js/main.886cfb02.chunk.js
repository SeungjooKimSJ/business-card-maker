(this["webpackJsonpbusiness-card-maker"]=this["webpackJsonpbusiness-card-maker"]||[]).push([[0],{10:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerWheat:"wheat",card:"card_card__1py-W",dark:"card_dark__1FdRe",light:"card_light__1Cc6G",colorful:"card_colorful__2zruV",img:"card_img__1iozP",info:"card_info__2Fslj",name:"card_name__31aE7",company:"card_company__3UM9t",title:"card_title__25_dG",email:"card_email__3uHYI",message:"card_message__2dRnZ"}},13:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card-add-form_form__2B_sx",input:"card-add-form_input__1AOb3",textarea:"card-add-form_textarea__2nmtI",select:"card-add-form_select__13Aql",button:"card-add-form_button__3X9jl",fileInput:"card-add-form_fileInput__2UXmz"}},14:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card-edit-form_form__343CU",input:"card-edit-form_input__328j0",textarea:"card-edit-form_textarea__2BvWL",select:"card-edit-form_select__1lcjc",button:"card-edit-form_button__vOfUK",fileInput:"card-edit-form_fileInput__2u3tf"}},18:function(e,t,a){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",makerWhite:"white",login:"login_login__19aQM",ul:"login_ul__1y7WQ",li:"login_li__2TgL1",button:"login_button__Fi6x4"}},19:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerLightPink:"#ffeae8",container:"image_file_input_container__3Eqtx",input:"image_file_input_input__1K4NM",button:"image_file_input_button__3E8sw",grey:"image_file_input_grey__68AiQ",pink:"image_file_input_pink__1V0O7",loading:"image_file_input_loading__3OwEa",spin:"image_file_input_spin__1K71y"}},24:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",makerBlack:"black",header:"header_header__v9FKw",logo:"header_logo__1X7aW",title:"header_title__1DXxp",logout:"header_logout__1MXam"}},28:function(e,t,a){e.exports={makerGreen:"#385461",preview:"preview_preview__3lr-V",title:"preview_title__3zLS1",cards:"preview_cards__1KzyC"}},33:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",footer:"footer_footer__1lZIc",title:"footer_title__pkoUs"}},36:function(e,t,a){e.exports={makerGreen:"#385461",makerLightGrey:"#e8e7e6",editor:"editor_editor__1nHIK",title:"editor_title__21REx"}},37:function(e,t,a){e.exports={mediaQuery:"62rem",makerWhite:"white",maker:"maker_maker__1Jsum",container:"maker_container__25Mis"}},41:function(e,t,a){e.exports={makerGrey:"#626262",app:"app_app__cewju"}},43:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",button:"button_button__3_GL1"}},48:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(2),c=a.n(r),i=a(40),o=a.n(i),l=(a(48),a(41)),s=a.n(l),u=a(25),d=a(5),m=a(33),j=a.n(m),f=a(1),p=Object(r.memo)((function(){return Object(f.jsx)("footer",{className:j.a.footer,children:Object(f.jsx)("p",{className:j.a.title,children:"Save and connect your people"})})})),b=a(24),_=a.n(b),h=Object(r.memo)((function(e){var t=e.onLogout;return Object(f.jsxs)("header",{className:_.a.header,children:[t&&Object(f.jsx)("button",{className:_.a.logout,onClick:t,children:"Logout"}),Object(f.jsx)("img",{className:_.a.logo,src:"/images/logo.png",alt:"logo"}),Object(f.jsx)("h1",{className:_.a.title,children:"Business Card Maker"})]})})),O=a(18),x=a.n(O),g=function(e){var t=e.authService,a=Object(d.f)(),n=function(e){a.push({pathname:"/maker",state:{id:e}})},c=function(e){t.login(e.currentTarget.textContent).then((function(e){return n(e.user.uid)}))};return Object(r.useEffect)((function(){t.onAuthChange((function(e){e&&n(e.id)}))})),Object(f.jsxs)("section",{className:x.a.login,children:[Object(f.jsx)(h,{}),Object(f.jsxs)("section",{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsxs)("ul",{className:x.a.ul,children:[Object(f.jsx)("li",{className:x.a.li,children:Object(f.jsx)("button",{className:x.a.button,onClick:c,children:"Google"})}),Object(f.jsx)("li",{className:x.a.li,children:Object(f.jsx)("button",{className:x.a.button,onClick:c,children:"Github"})})]})]}),Object(f.jsx)(p,{})]})},v=a(15),k=a(43),N=a.n(k),y=Object(r.memo)((function(e){var t=e.name,a=e.onClick;return Object(f.jsx)("button",{className:N.a.button,onClick:a,children:t})})),C=a(13),w=a.n(C),R=Object(r.memo)((function(e){var t=e.FileInput,a=e.onAdd,n=Object(r.useRef)(),c=Object(r.useRef)(),i=Object(r.useRef)(),o=Object(r.useRef)(),l=Object(r.useRef)(),s=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useState)({fileName:null,fileURL:null}),m=Object(v.a)(d,2),j=m[0],p=m[1];return Object(f.jsxs)("form",{ref:n,className:w.a.form,children:[Object(f.jsx)("input",{ref:c,className:w.a.input,type:"text",name:"name",placeholder:"Name"}),Object(f.jsx)("input",{ref:i,className:w.a.input,type:"text",name:"company",placeholder:"Company"}),Object(f.jsxs)("select",{ref:o,className:w.a.select,name:"theme",placeholder:"Theme",children:[Object(f.jsx)("option",{placeholder:"light",children:"light"}),Object(f.jsx)("option",{placeholder:"dark",children:"dark"}),Object(f.jsx)("option",{placeholder:"colorful",children:"colorful"})]}),Object(f.jsx)("input",{ref:l,className:w.a.input,type:"text",name:"title",placeholder:"Title"}),Object(f.jsx)("input",{ref:s,className:w.a.input,type:"text",name:"email",placeholder:"Email"}),Object(f.jsx)("textarea",{ref:u,className:w.a.textarea,name:"message",placeholder:"Message"}),Object(f.jsx)("div",{className:w.a.fileInput,children:Object(f.jsx)(t,{name:j.fileName,onFileChange:function(e){console.log(e),p({fileName:e.name,fileURL:e.url})}})}),Object(f.jsx)(y,{name:"Add",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:c.current.value||"",company:i.current.value||"",theme:o.current.value,title:l.current.value||"",email:s.current.value||"",message:u.current.value||"",fileName:j.fileName||"",fileURL:j.fileURL||""};n.current.reset(),p({fileName:null,fileURL:null}),a(t)}})]})})),I=a(26),F=a(14),L=a.n(F),G=function(e){var t=e.FileInput,a=e.card,c=e.updateCard,i=e.deleteCard,o=Object(r.useRef)(),l=Object(r.useRef)(),s=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useRef)(),m=Object(r.useRef)(),j=a.name,p=a.company,b=a.title,_=a.email,h=a.message,O=a.theme,x=a.fileName,g=function(e){null!==e.currentTarget&&(e.preventDefault(),c(Object(n.a)(Object(n.a)({},a),{},Object(I.a)({},e.currentTarget.name,e.currentTarget.value))))};return Object(f.jsxs)("form",{className:L.a.form,children:[Object(f.jsx)("input",{ref:o,className:L.a.input,type:"text",name:"name",value:j,onChange:g}),Object(f.jsx)("input",{ref:l,className:L.a.input,type:"text",name:"company",value:p,onChange:g}),Object(f.jsxs)("select",{ref:s,className:L.a.select,name:"theme",value:O,onChange:g,children:[Object(f.jsx)("option",{value:"light",children:"light"}),Object(f.jsx)("option",{value:"dark",children:"dark"}),Object(f.jsx)("option",{value:"colorful",children:"colorful"})]}),Object(f.jsx)("input",{ref:u,className:L.a.input,type:"text",name:"title",value:b,onChange:g}),Object(f.jsx)("input",{ref:d,className:L.a.input,type:"text",name:"email",value:_,onChange:g}),Object(f.jsx)("textarea",{ref:m,className:L.a.textarea,name:"message",value:h,onChange:g}),Object(f.jsx)("div",{className:L.a.fileInput,children:Object(f.jsx)(t,{name:x,onFileChange:function(e){c(Object(n.a)(Object(n.a)({},a),{},{fileName:e.name,fileURL:e.url}))}})}),Object(f.jsx)(y,{name:"Delete",onClick:function(){i(a)}})]})},S=a(36),A=a.n(S),U=function(e){var t=e.FileInput,a=e.cards,n=e.addCard,r=e.updateCard,c=e.deleteCard;return Object(f.jsxs)("section",{className:A.a.editor,children:[Object(f.jsx)("h1",{className:A.a.title,children:"Card Maker"}),Object.keys(a).map((function(e){return Object(f.jsx)(G,{FileInput:t,card:a[e],updateCard:r,deleteCard:c},e)})),Object(f.jsx)(R,{FileInput:t,onAdd:n})]})},W=a(10),E=a.n(W);function P(e){switch(e){case"dark":return E.a.dark;case"light":return E.a.light;case"colorful":return E.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var z=Object(r.memo)((function(e){var t=e.card,a=t.name,n=t.company,r=t.title,c=t.email,i=t.message,o=t.theme,l=t.fileURL||"/images/default_logo.png";return Object(f.jsxs)("li",{className:"".concat(E.a.card," ").concat(P(o)),children:[Object(f.jsx)("img",{className:E.a.img,src:l,alt:"profile"}),Object(f.jsxs)("div",{className:E.a.info,children:[Object(f.jsx)("h1",{className:E.a.name,children:a}),Object(f.jsx)("p",{className:E.a.company,children:n}),Object(f.jsx)("p",{className:E.a.title,children:r}),Object(f.jsx)("p",{className:E.a.email,children:c}),Object(f.jsx)("p",{className:E.a.message,children:i})]})]})})),M=a(28),T=a.n(M),B=function(e){var t=e.cards;return Object(f.jsxs)("section",{className:T.a.preview,children:[Object(f.jsx)("h1",{className:T.a.title,children:"Card Preview"}),Object(f.jsx)("ul",{className:T.a.cards,children:Object.keys(t).map((function(e){return Object(f.jsx)(z,{card:t[e]},e)}))})]})},D=a(37),K=a.n(D),X=function(e){var t,a=e.FileInput,c=e.authService,i=e.cardRepository,o=Object(d.f)(),l=null===o||void 0===o||null===(t=o.location)||void 0===t?void 0:t.state,s=Object(r.useState)({}),u=Object(v.a)(s,2),m=u[0],j=u[1],b=Object(r.useState)(l&&l.id),_=Object(v.a)(b,2),O=_[0],x=_[1],g=Object(r.useCallback)((function(){c.logout()}),[c]);Object(r.useEffect)((function(){if(O){var e=i.syncCards(O,(function(e){j(e)}));return function(){return e()}}}),[O,i]),Object(r.useEffect)((function(){c.onAuthChange((function(e){e?x(e.uid):o.push("/")}))}),[c,O,o]);var k=function(e){j((function(t){var a=Object(n.a)({},t);return a[e.id]=e,a})),i.saveCard(O,e)};return Object(f.jsxs)("section",{className:K.a.maker,children:[Object(f.jsx)(h,{onLogout:g}),Object(f.jsxs)("div",{className:K.a.container,children:[Object(f.jsx)(U,{FileInput:a,cards:m,addCard:k,updateCard:k,deleteCard:function(e){j((function(t){var a=Object(n.a)({},t);return delete a[e.id],a})),i.removeCard(O,e)}}),Object(f.jsx)(B,{cards:m})]}),Object(f.jsx)(p,{})]})};var Q=function(e){var t=e.FileInput,a=e.authService,n=e.cardRepository;return Object(f.jsx)("div",{className:s.a.app,children:Object(f.jsx)(u.a,{children:Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{exact:!0,path:"/",children:Object(f.jsx)(g,{authService:a})}),Object(f.jsx)(d.a,{path:"/maker",children:Object(f.jsx)(X,{FileInput:t,authService:a,cardRepository:n})})]})})})},q=a(20),J=a(21),V=a(29),H=(a(54),a(56),V.a.initializeApp({apiKey:"AIzaSyAFSrXXRLlPdeg_p9mFxhyKXSF1djkpTzk",authDomain:"business-card-maker-dd951.firebaseapp.com",databaseURL:"https://business-card-maker-dd951-default-rtdb.firebaseio.com",projectId:"business-card-maker-dd951"})),Z=H.auth(),Y=H.database(),$=new V.a.auth.GoogleAuthProvider,ee=new V.a.auth.GithubAuthProvider,te=function(){function e(){Object(q.a)(this,e)}return Object(J.a)(e,[{key:"login",value:function(e){var t=this.getProvider(e);return Z.signInWithPopup(t)}},{key:"logout",value:function(){Z.signOut()}},{key:"onAuthChange",value:function(e){Z.onAuthStateChanged((function(t){e(t)}))}},{key:"getProvider",value:function(e){switch(e){case"Google":return $;case"Github":return ee;default:throw new Error("not supported provider: ".concat(e))}}}]),e}(),ae=a(22),ne=a.n(ae),re=a(27),ce=function(){function e(){Object(q.a)(this,e)}return Object(J.a)(e,[{key:"upload",value:function(){var e=Object(re.a)(ne.a.mark((function e(t){var a,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset","pdzaoz52"),e.next=5,fetch("https://api.cloudinary.com/v1_1/drqni4rhj/upload",{method:"POST",body:a});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),ie=a(19),oe=a.n(ie),le=Object(r.memo)((function(e){var t=e.imageUploader,a=e.name,n=e.onFileChange,c=Object(r.useState)(!1),i=Object(v.a)(c,2),o=i[0],l=i[1],s=Object(r.useRef)(),u=function(){var e=Object(re.a)(ne.a.mark((function e(a){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,t.upload(a.target.files[0]);case 3:r=e.sent,l(!1),n({name:r.original_filename,url:r.url});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:oe.a.container,children:[Object(f.jsx)("input",{ref:s,className:oe.a.input,type:"file",accept:"image/*",name:"file",onChange:u}),!o&&Object(f.jsx)("button",{className:"".concat(oe.a.button," ").concat(a?oe.a.pink:oe.a.grey),onClick:function(e){e.preventDefault(),s.current.click()},children:a||"No file"}),o&&Object(f.jsx)("div",{className:oe.a.loading})]})})),se=function(){function e(){Object(q.a)(this,e)}return Object(J.a)(e,[{key:"syncCards",value:function(e,t){var a=Y.ref("".concat(e,"/cards"));return a.on("value",(function(e){var a=e.val();a&&t(a)})),function(){return a.off()}}},{key:"saveCard",value:function(e,t){Y.ref("".concat(e,"/cards/").concat(t.id)).set(t)}},{key:"removeCard",value:function(e,t){Y.ref("".concat(e,"/cards/").concat(t.id)).remove()}}]),e}(),ue=new te,de=new se,me=new ce,je=Object(r.memo)((function(e){return Object(f.jsx)(le,Object(n.a)(Object(n.a)({},e),{},{imageUploader:me}))}));o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Q,{authService:ue,FileInput:je,cardRepository:de})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.886cfb02.chunk.js.map