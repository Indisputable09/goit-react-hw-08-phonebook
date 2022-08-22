"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[778],{6778:function(n,e,r){r.r(e),r.d(e,{default:function(){return jn}});var t,a,i,o,s,c,u,d,l,m,p,x,f,h,g,b,v,Z,j=r(2634),y=r(4165),w=r(5861),k=r(885),P=r(2506),C=r(1475),N=r(5562),S=r(1194),A=r(168),z=r(6444),L=(0,z.ZP)(P.l0)(t||(t=(0,A.Z)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n"]))),q=z.ZP.label(a||(a=(0,A.Z)(["\n  font-size: 25px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n"]))),E=(0,z.ZP)(P.gN)(i||(i=(0,A.Z)(["\n  width: 100%;\n  height: 35px;\n  padding: 10px;\n  outline: none;\n  border: none;\n  border-radius: 10px;\n\n  :focus {\n    border: 1px solid orange;\n  }\n"]))),F=z.ZP.button(o||(o=(0,A.Z)(["\n  /* width: 200px; */\n  padding: 15px 50px;\n  border-radius: 5px;\n  border: none;\n  background-color: #fff;\n  transition: all 250ms linear;\n\n  :hover,\n  :focus {\n    background-color: ",";\n    transform: scale(0.9);\n  }\n"])),(function(n){return n.theme.colors.orangered})),T=(0,z.ZP)(F)(s||(s=(0,A.Z)(["\n  position: absolute;\n  top: 2%;\n  right: 2%;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* border-radius: 50%; */\n"]))),B=(0,z.ZP)(F)(c||(c=(0,A.Z)(["\n  font-weight: 700;\n  margin-top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n\n  border-radius: 10px;\n  background-color: #45f5e6;\n  border: none;\n  transition: all 250ms linear;\n\n  :hover,\n  :focus {\n    transform: scale(1.1);\n  }\n"]))),_=(0,z.ZP)(F)(u||(u=(0,A.Z)(["\n  font-weight: 700;\n  margin-top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n\n  padding: 20px 70px;\n\n  border-radius: 10px;\n  background-color: #45f5e6;\n  transition: all 250ms linear;\n"]))),D=r(4903),I=r(1830),J=r.n(I),V=r(8174),Y=r(184),G="^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",U="This field is required",M=(0,C.Ry)().shape({name:(0,C.Z_)().required(U).matches(G,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:(0,C.Z_)().required(U).matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),R=function(n){var e=n.name;return(0,Y.jsx)(P.Bc,{name:e,render:function(n){return N.Notify.failure(n)}})},$=function(){var n=(0,D.Tn)(),e=(0,k.Z)(n,2),r=e[0],t=e[1],a=t.data,i=t.isLoading,o=(0,D.wY)().data,s=function(){var n=(0,w.Z)((0,y.Z)().mark((function n(e){var t,i,s,c,u;return(0,y.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,e.preventDefault(),t=e.target.name.value,i=e.target.number.value,s=o.find((function(n){return n.name===t})),c=o.find((function(n){return n.number===i})),u={name:t,number:i},!s){n.next=10;break}return J().fire({title:"Error!",text:"Sorry, ".concat(t," is already in your contacts"),icon:"error",confirmButtonText:"Got it"}),n.abrupt("return");case 10:if(!c){n.next=13;break}return J().fire({title:"Error!",text:"Sorry, ".concat(i," is already in your contacts"),icon:"error",confirmButtonText:"Got it"}),n.abrupt("return");case 13:return n.next=15,r(u);case 15:console.log("~ data",a),V.Am.success("Contact added successfully!"),e.target.reset(),n.next=24;break;case 20:n.prev=20,n.t0=n.catch(0),console.log(n.t0),V.Am.error("Something went wrong. Try again.");case 24:case"end":return n.stop()}}),n,null,[[0,20]])})));return function(e){return n.apply(this,arguments)}}();return(0,Y.jsx)(P.J9,{initialValues:{name:"",number:""},validationSchema:M,children:(0,Y.jsxs)(L,{onSubmit:s,children:[(0,Y.jsx)(q,{htmlFor:"name",children:"Name"}),(0,Y.jsx)(E,{id:"name",type:"text",name:"name",pattern:G,placeholder:"Name",required:!0}),(0,Y.jsx)(R,{name:"name"}),(0,Y.jsx)(q,{htmlFor:"number",children:"Number"}),(0,Y.jsx)(E,{id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Number",required:!0}),(0,Y.jsx)(R,{name:"number"}),(0,Y.jsx)(B,{type:"submit",children:i?(0,Y.jsx)(S.Z,{}):"Add contact"})]})})},H=z.ZP.ul(d||(d=(0,A.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));\n  grid-template-rows: auto;\n  gap: 20px;\n  margin: 0;\n  padding: 20px;\n"]))),K=z.ZP.li(l||(l=(0,A.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: space-between;\n"]))),O=r(2134),Q=r(5048),W=z.ZP.p(m||(m=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 5px;\n"]))),X=z.ZP.div(p||(p=(0,A.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),nn=function(n){var e=n.type,r=void 0===e?"button":e,t=n.children,a=n.isDeleting,i=n.click;return(0,Y.jsx)(F,{type:r,onClick:i,disabled:a,children:t})},en=r(2791),rn=r(4164),tn=z.ZP.div(x||(x=(0,A.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 1200;\n"]))),an=z.ZP.div(f||(f=(0,A.Z)(["\n  position: relative;\n  background-color: #fff;\n  border-radius: 5px;\n  width: 600px;\n  height: 300px;\n"]))),on=document.querySelector("#modal-root"),sn=function(n){var e=n.onClose,r=n.children;(0,en.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n),document.body.style.overflow="unset"}}),[e]);return(0,rn.createPortal)((0,Y.jsx)(tn,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,Y.jsx)(an,{children:r})}),on)},cn=(0,z.ZP)(P.l0)(h||(h=(0,A.Z)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n"]))),un=z.ZP.label(g||(g=(0,A.Z)(["\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n"]))),dn=(0,z.ZP)(P.gN)(b||(b=(0,A.Z)(["\n  width: 100%;\n  height: 35px;\n  padding: 10px;\n  outline: orange;\n  border: 1px solid orange;\n  border-radius: 10px;\n  :focus {\n    border: 2px solid orange;\n  }\n"]))),ln=function(n){var e=n.onSubmit,r=n.isUpdaiting,t=(0,Q.v9)((function(n){return n.modal.name})),a=(0,Q.v9)((function(n){return n.modal.number})),i=(0,Q.v9)((function(n){return n.modal.id})),o=function(){var n=(0,w.Z)((0,y.Z)().mark((function n(r,t){return(0,y.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e({name:r.name,number:r.number,id:i});case 2:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}();return(0,Y.jsx)(P.J9,{initialValues:{name:t,number:a},validationSchema:M,onSubmit:o,children:function(n){var e=n.values;return(0,Y.jsxs)(cn,{children:[(0,Y.jsx)(un,{htmlFor:"contactName",children:"Name"}),(0,Y.jsx)(dn,{id:"contactName",type:"text",name:"name",pattern:G,autoComplete:"off",placeholder:"Name",required:!0}),(0,Y.jsx)(R,{name:"name"}),(0,Y.jsx)(un,{htmlFor:"phone",children:"Number"}),(0,Y.jsx)(dn,{id:"phone",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Number",autoComplete:"off",required:!0}),(0,Y.jsx)(R,{name:"number"}),(0,Y.jsx)(_,{type:"submit",disabled:e.name===t&&e.number===a,children:r?(0,Y.jsx)(S.Z,{}):"Edit"})]})}})},mn=r(6546),pn=function(n){var e=n.name,r=n.number,t=n.id,a=(0,D.Nt)(),i=(0,k.Z)(a,2),o=i[0],s=i[1].isLoading,c=(0,D.wv)(),u=(0,k.Z)(c,2),d=u[0],l=u[1].isLoading,m=(0,Q.v9)(mn.tx),p=(0,Q.I0)(),x=function(){p((0,mn.VJ)({name:e,number:r,id:t}))},f=function(){var n=(0,w.Z)((0,y.Z)().mark((function n(){return(0,y.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o(t);case 3:V.Am.success("Contact deleted successfully!"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),V.Am.error("Something went wrong. Try again.");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,w.Z)((0,y.Z)().mark((function n(e){return(0,y.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log("~ fields",e),n.next=4,d(e);case 4:p((0,mn.VJ)()),V.Am.success("Contact edited successfully!"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(W,{children:[e,": ",(0,Y.jsx)("span",{children:r})]}),(0,Y.jsxs)(X,{children:[(0,Y.jsx)(nn,{click:function(){return x()},children:"Edit"}),(0,Y.jsx)(nn,{click:f,isDeleting:s,children:s?(0,Y.jsx)(S.Z,{}):"Delete"})]}),m&&(0,Y.jsxs)(sn,{onClose:x,children:[(0,Y.jsx)(T,{onClick:x,children:(0,Y.jsx)(O.SV5,{size:20})}),(0,Y.jsx)(ln,{onSubmit:h,isUpdaiting:l})]})]})},xn=r(6895),fn=function(){var n=(0,D.wY)().data,e=(0,Q.v9)(xn.B8),r=function(){var r=e.toLocaleLowerCase();if(n)return n.filter((function(n){return n.name.toLocaleLowerCase().includes(r)||n.number.toString().includes(r)}))}();if(r)return(0,Y.jsx)(H,{children:r.sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){var e=n.id,r=n.name,t=n.number;return(0,Y.jsx)(K,{name:r,children:(0,Y.jsx)(pn,{name:r,number:t,id:e})},e)}))})},hn=z.ZP.input(v||(v=(0,A.Z)(["\n  width: 200px;\n  height: 40px;\n  border-radius: 10px;\n  border: none;\n  margin: 20px 0;\n  padding: 10px;\n\n  :focus {\n    outline: 1px solid orange;\n  }\n"]))),gn=function(){var n=(0,Q.I0)(),e=(0,Q.v9)(xn.B8);return(0,Y.jsx)(hn,{type:"text",onChange:function(e){var r=e.target.value;n((0,xn.sP)(r))},value:e,placeholder:"Search..."})},bn=z.ZP.h2(Z||(Z=(0,A.Z)(["\n  font-size: 40px;\n  margin-top: 10px;\n"]))),vn=function(n){var e=n.title,r=n.children;return(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)("div",{children:[(0,Y.jsx)(bn,{children:e}),r]})})},Zn=r(3535),jn=function(){var n=(0,Q.v9)(Zn.um.getIsLoggedIn),e=(0,D.wY)({skip:!n}).data;return console.log("~ contacts",e),e?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)("div",{children:[(0,Y.jsx)(j.Dx,{children:"Phonebook"}),(0,Y.jsx)($,{})]}),(0,Y.jsxs)(vn,{title:"Contacts",children:[(0,Y.jsx)(gn,{}),(0,Y.jsx)(fn,{})]})]}):(0,Y.jsx)(j.lI,{children:(0,Y.jsx)(S.Z,{size:50})})}}}]);
//# sourceMappingURL=778.87dcc64a.chunk.js.map