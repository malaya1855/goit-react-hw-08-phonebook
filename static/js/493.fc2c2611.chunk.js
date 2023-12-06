"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493,415,315,418],{7590:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});t(4457),t(6099),t(6207);var r,a,i,o,s,l,c,d,x,u=t(9434),p=t(3634),m=t(9631),h=function(n){return n.contacts.items},f=function(n){return n.contacts.isLoading},g=function(n){return n.contacts.error},b=function(n){return n.filter},j=t(7750),Z=t(8022),v=t(9259),w=t(5264),y=t(2791),C=t(697),S=t(3329),k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:300,bgcolor:"#f5f5fa",borderRadius:"50px",boxShadow:"0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%)",p:4},P=function(n){var e=n.onClose,t=(0,u.v9)(h),r=(0,u.I0)();return(0,S.jsxs)(C.Z,{sx:k,children:[(0,S.jsx)(A,{children:"Add new contact"}),(0,S.jsxs)(z,{onSubmit:function(n){n.preventDefault();var a=n.currentTarget.elements,i={name:a.name.value.trim(),number:a.number.value};n.target.reset(),t.find((function(n){return n.name.toLowerCase()===i.name.toLowerCase()}))?w.Notify.warning("".concat(i.name," is already in your contacts")):(r((0,p.uK)(i)),w.Notify.success("Contact is saved"),e())},children:[(0,S.jsx)("label",{htmlFor:"name",children:(0,S.jsx)(F,{type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,S.jsx)("label",{htmlFor:"number",children:(0,S.jsx)(F,{as:m.v,type:"tel",name:"number",mask:"+39 999-9999999",placeholder:"Phone number",required:!0})}),(0,S.jsx)(Z.Z,{type:"sybmit",sx:{marginLeft:"auto",marginRight:"auto",width:"45px",color:"rgb(72, 76, 122)",boxShadow:"0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%)",transition:"all 0.2s ease-out"},children:(0,S.jsx)(v.Z,{component:j.Z,sx:{fontSize:"20px",color:"rgb(72, 76, 122)"}})})]})]})},I=t(168),W=t(225),z=W.Z.form(r||(r=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: stretch;\n"]))),F=W.Z.input(a||(a=(0,I.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  border: 0;\n  border-radius: 4px;\n  padding-left: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n\n  box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%),\n    0 1px 3px 0 rgb(93 100 148 / 20%);\n  transition: all 0.2s ease-out;\n  background-image: linear-gradient(180deg, #fff, #f5f5fa);\n  :focus {\n    box-shadow: 0 8px 22px 0 rgb(37 44 97 / 15%),\n      0 4px 6px 0 rgb(93 100 148 / 20%);\n  }\n  :focus-visible {\n    outline: none;\n  }\n  ::placeholder {\n    color: rgb(72, 76, 122);\n  }\n"]))),A=W.Z.h2(i||(i=(0,I.Z)(["\n  text-align: center;\n  font-size: 22px;\n  color: rgb(72, 76, 122);\n"]))),D=t(5861),T=t(4687),L=t.n(T),N=t(9836),q=t(3382),U=t(3994),E=t(9281),_=t(6890),R=t(5855),V=t(5527),B=t(7247),K=t(1328),M={fontWeight:"700"},Y=function(){var n=(0,u.v9)(h),e=(0,u.v9)(b),t=(0,u.I0)(),r=e?e.toLowerCase():"",a=n.filter((function(n){return n.name.toLowerCase().includes(r)}));return(0,y.useEffect)((function(){t((0,p.yF)())}),[t,e]),0===a.length?(0,S.jsx)("p",{children:"No matched contacts in your phone book"}):(0,S.jsx)(E.Z,{component:V.Z,sx:{marginTop:"20px"},children:(0,S.jsxs)(N.Z,{sx:{width:"100%"},"aria-label":"simple table",children:[(0,S.jsx)(_.Z,{sx:{fontWeight:"700"},children:(0,S.jsxs)(R.Z,{children:[(0,S.jsx)(U.Z,{sx:M,children:"Contact name"}),(0,S.jsx)(U.Z,{sx:M,align:"center",children:"Phone Number"}),(0,S.jsx)(U.Z,{sx:M,align:"center",children:"Delete contact"})]})}),(0,S.jsx)(q.Z,{children:a.map((function(n){var e=n.name.split(" ").map((function(n){return n.replace(n[0],n[0].toUpperCase())})).join(" ");return(0,S.jsxs)(R.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,S.jsx)(U.Z,{component:"th",scope:"row",children:e}),(0,S.jsx)(U.Z,{align:"center",children:n.number}),(0,S.jsx)(U.Z,{align:"center",children:(0,S.jsx)(Z.Z,{type:"button",id:n.id,sx:{width:"45px",color:"rgb(72, 76, 122)"},onClick:function(){return function(n){var e=function(){var e=(0,D.Z)(L().mark((function e(){return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t((0,p.GK)(n));case 2:t((0,p.yF)());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();K.Confirm.show("Delete contact","Are you sure you want to delete the contact?","Yes","Cancel",e,(function(){}))}(n.id)},children:(0,S.jsx)(v.Z,{component:B.Z,sx:{fontSize:"20px",color:"rgb(72, 76, 122)"}})})})]},e)}))})]})})},G=t(739),J=function(){var n=(0,u.v9)(b),e=(0,u.I0)();return(0,S.jsx)("label",{htmlFor:"name",children:(0,S.jsx)($,{type:"text",name:"name",placeholder:"Find contacts by name",value:n,onChange:function(n){var t=n.currentTarget.value;e((0,G.Zf)(t))}})})},$=W.Z.input(o||(o=(0,I.Z)(["\n  box-sizing: border-box;\n  width: 200px;\n  border: 0;\n  border-radius: 4px;\n  padding-left: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n\n  box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%),\n    0 1px 3px 0 rgb(93 100 148 / 20%);\n  transition: all 0.2s ease-out;\n  background-image: linear-gradient(180deg, #fff, #f5f5fa);\n  :focus {\n    box-shadow: 0 8px 22px 0 rgb(37 44 97 / 15%),\n      0 4px 6px 0 rgb(93 100 148 / 20%);\n  }\n  :focus-visible {\n    outline: none;\n  }\n  ::placeholder {\n    color: rgb(72, 76, 122);\n  }\n"]))),H=(t(4475),t(1636),t(7760)),O=t(9439),Q=t(237),X=function(){var n=(0,y.useState)(!1),e=(0,O.Z)(n,2),t=e[0],r=e[1],a=function(){return r(!1)};return(0,S.jsxs)(tn,{children:[(0,S.jsx)(Z.Z,{onClick:function(){return r(!0)},type:"sybmit",sx:{marginLeft:"auto",marginRight:"auto",width:"45px",color:"rgb(72, 76, 122)",boxShadow:"0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%)",transition:"all 0.2s ease-out"},children:(0,S.jsx)(v.Z,{component:j.Z,sx:{fontSize:"20px",color:"rgb(72, 76, 122)"}})}),(0,S.jsx)(Q.Z,{open:t,onClose:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,S.jsx)("div",{children:(0,S.jsx)(P,{onClose:a})})})]})},nn=W.Z.div(s||(s=(0,I.Z)(["\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  padding: 30px 20px;\n  background-color: #f5f5fa;\n  border-radius: 50px;\n"]))),en=(W.Z.div(l||(l=(0,I.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: start;\n  justify-content: space-between;\n"]))),W.Z.h1(c||(c=(0,I.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n  margin-top: 0;\n  color: rgb(72, 76, 122);\n"])))),tn=W.Z.div(d||(d=(0,I.Z)(["\n  text-align: center;\n"]))),rn=W.Z.div(x||(x=(0,I.Z)(["\n  text-align: center;\n  width: 100%;\n"]))),an=(t(5415),t(2418),t(4315),t(1980),{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%"});function on(){var n=(0,u.I0)(),e=(0,u.v9)(f),t=(0,u.v9)(g),r=(0,u.v9)(h);return(0,y.useEffect)((function(){n((0,p.yF)())}),[n]),(0,S.jsx)(nn,{children:(0,S.jsxs)(rn,{children:[(0,S.jsx)(en,{children:"My Contacts"}),e&&(0,S.jsx)(H.Y,{}),t&&(0,S.jsx)("p",{children:t.message}),0===r.length?!e&&(0,S.jsxs)(C.Z,{sx:an,children:[(0,S.jsx)(X,{}),(0,S.jsx)("p",{children:"No saved contacts"})]}):(0,S.jsxs)("div",{children:[(0,S.jsxs)(C.Z,{sx:an,children:[(0,S.jsx)(X,{}),(0,S.jsx)(J,{})]}),(0,S.jsx)(Y,{})]})]})})}},5415:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r=t(697),a=t(1087),i=t(1689),o=t(3329);function s(){var n=(0,i.a)().isLoggedIn;return(0,o.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",marginTop:"150px"},children:[(0,o.jsx)("h1",{children:"Welcome to your Phone Book"}),n?(0,o.jsxs)("p",{children:["Visit your ",(0,o.jsx)(a.rU,{to:"./contacts",children:"Contacts Page"})]}):(0,o.jsxs)("p",{children:["To start, please ",(0,o.jsx)(a.rU,{to:"./login",children:"sign in"})," or",(0,o.jsx)(a.rU,{to:"./register",children:" create new account."})]})]})}},2418:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});t(2791);var r=t(3044),a=t(8022),i=t(4708),o=t(232),s=t(533),l=t(1889),c=t(697),d=t(403),x=t(890),u=t(1614),p=t(9434),m=t(9273),h=t(3329);function f(){var n=(0,p.I0)();return(0,h.jsxs)(u.Z,{component:"main",maxWidth:"xs",children:[(0,h.jsx)(i.ZP,{}),(0,h.jsxs)(c.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,h.jsx)(r.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,h.jsx)(d.Z,{})}),(0,h.jsx)(x.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,h.jsxs)(c.Z,{component:"form",onSubmit:function(e){e.preventDefault();var t=e.currentTarget;n((0,m.Ib)({email:t.elements.email.value,password:t.elements.password.value})),t.reset()},noValidate:!0,sx:{mt:1},children:[(0,h.jsx)(o.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,h.jsx)(o.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,h.jsx)(a.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),(0,h.jsx)(l.ZP,{item:!0,children:(0,h.jsx)(s.Z,{href:"./register",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})}},4315:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});t(2791);var r=t(3044),a=t(8022),i=t(4708),o=t(232),s=t(533),l=t(1889),c=t(697),d=t(403),x=t(890),u=t(1614),p=t(9434),m=t(9273),h=t(3329);function f(){var n=(0,p.I0)();return(0,h.jsxs)(u.Z,{component:"main",maxWidth:"xs",children:[(0,h.jsx)(i.ZP,{}),(0,h.jsxs)(c.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,h.jsx)(r.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,h.jsx)(d.Z,{})}),(0,h.jsx)(x.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,h.jsxs)(c.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;n((0,m.z2)({name:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value})),t.reset()},sx:{mt:3},children:[(0,h.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,h.jsx)(l.ZP,{item:!0,xs:12,children:(0,h.jsx)(o.Z,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"First Name",autoFocus:!0})}),(0,h.jsx)(l.ZP,{item:!0,xs:12,children:(0,h.jsx)(o.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,h.jsx)(l.ZP,{item:!0,xs:12,children:(0,h.jsx)(o.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,h.jsx)(a.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,h.jsx)(l.ZP,{container:!0,justifyContent:"flex-end",children:(0,h.jsx)(l.ZP,{item:!0,children:(0,h.jsx)(s.Z,{href:"./login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}}}]);
//# sourceMappingURL=493.fc2c2611.chunk.js.map