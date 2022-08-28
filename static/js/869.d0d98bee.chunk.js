"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[869],{4869:function(n,e,r){r.r(e),r.d(e,{default:function(){return kn}});var t,a,i,o,u,s,c,d,l,m,p,f,h,x,g=r(3085),b=r(1194),v=r(4165),j=r(5861),Z=r(885),w=r(2506),y=r(5562),k=r(1830),P=r.n(k),C=r(5985),S=r(168),N=r(7691),z=(0,N.ZP)(w.l0)(t||(t=(0,S.Z)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  margin-left: ",";\n  margin-right: ",";\n"])),(function(n){return n.theme.space[9]}),(function(n){return n.theme.space[9]})),A=N.ZP.label(a||(a=(0,S.Z)(["\n  font-size: ",";\n  margin-top: ","px;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]})),L=(0,N.ZP)(w.gN)(i||(i=(0,S.Z)(["\n  width: 100%;\n  height: ","px;\n  padding: ","px;\n  outline: ",";\n  border: ",";\n  border-radius: ",";\n\n  :focus {\n    border: ",";\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.borders.normal})),F=r(3660),q=r(4903),E=r(4929),I="^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",B="This field is required",V=(0,E.Ry)().shape({name:(0,E.Z_)().required(B).matches(I,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:(0,E.Z_)().required(B).matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),_=r(8820),M=r(184),T=function(){return(0,M.jsx)(_.vM4,{size:25,fill:"white"})},J=function(n){var e=n.name;return(0,M.jsx)(w.Bc,{name:e,render:function(n){return y.Notify.failure(n)}})},Y=function(){var n=(0,q.Tn)(),e=(0,Z.Z)(n,2),r=e[0],t=e[1].isLoading,a=(0,q.wY)().data,i=function(){var n=(0,j.Z)((0,v.Z)().mark((function n(e){var t,i,o,u,s;return(0,v.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,e.preventDefault(),t=e.target.name.value,i=e.target.number.value,o=a.find((function(n){return n.name===t})),u=a.find((function(n){return n.number===i})),s={name:t,number:i},!o){n.next=10;break}return P().fire({title:"Error!",text:"Sorry, ".concat(t," is already in your contacts"),icon:"error",confirmButtonText:"Got it"}),n.abrupt("return");case 10:if(!u){n.next=13;break}return P().fire({title:"Error!",text:"Sorry, ".concat(i," is already in your contacts"),icon:"error",confirmButtonText:"Got it"}),n.abrupt("return");case 13:return n.next=15,r(s);case 15:C.Am.success("Contact added successfully!"),e.target.reset(),n.next=23;break;case 19:n.prev=19,n.t0=n.catch(0),console.log(n.t0),C.Am.error("Something went wrong. Please, try again.");case 23:case"end":return n.stop()}}),n,null,[[0,19]])})));return function(e){return n.apply(this,arguments)}}();return(0,M.jsx)(w.J9,{initialValues:{name:"",number:""},validationSchema:V,children:(0,M.jsxs)(z,{onSubmit:i,children:[(0,M.jsx)(A,{htmlFor:"name",children:"Name"}),(0,M.jsx)(L,{id:"name",type:"text",name:"name",pattern:I,placeholder:"Name",required:!0}),(0,M.jsx)(J,{name:"name"}),(0,M.jsx)(A,{htmlFor:"number",children:"Number"}),(0,M.jsx)(L,{id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Number",required:!0}),(0,M.jsx)(J,{name:"number"}),(0,M.jsx)(F.HS,{type:"submit",children:t?(0,M.jsx)(b.Z,{}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(T,{}),(0,M.jsx)("p",{children:"Add Contact"})]})})]})})},D=r(5048),G=N.ZP.ul(o||(o=(0,S.Z)(["\n  display: grid;\n  grid-template-columns: repeat(1, minmax(420px, 1fr));\n  grid-template-rows: auto;\n  gap: ","px;\n  margin: ","px;\n  padding: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]})),H=N.ZP.li(u||(u=(0,S.Z)(["\n  display: flex;\n  gap: ","px;\n  justify-content: space-between;\n"])),(function(n){return n.theme.space[3]})),U=N.ZP.p(s||(s=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]})),R=N.ZP.div(c||(c=(0,S.Z)(["\n  display: flex;\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]})),$=r(5581),K=function(n){return n.modal.showModal},O=function(n){return n.modal.name},Q=function(n){return n.modal.number},W=function(n){return n.modal.id},X=r(2791),nn=r(4164),en=N.ZP.div(d||(d=(0,S.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 1200;\n"]))),rn=N.ZP.div(l||(l=(0,S.Z)(["\n  position: relative;\n  background-color: #fff;\n  border-radius: 5px;\n  width: 600px;\n  height: 300px;\n"]))),tn=document.querySelector("#modal-root"),an=function(n){var e=n.onClose,r=n.children;(0,X.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n),document.body.style.overflow="unset"}}),[e]);return(0,nn.createPortal)((0,M.jsx)(en,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,M.jsx)(rn,{children:r})}),tn)},on=(0,N.ZP)(w.l0)(m||(m=(0,S.Z)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n"]))),un=N.ZP.label(p||(p=(0,S.Z)(["\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n"]))),sn=(0,N.ZP)(w.gN)(f||(f=(0,S.Z)(["\n  width: 100%;\n  height: 35px;\n  padding: 10px;\n  outline: orange;\n  border: 1px solid orange;\n  border-radius: 10px;\n  :focus {\n    border: 2px solid orange;\n  }\n"]))),cn=function(n){var e=n.onSubmit,r=n.isUpdaiting,t=(0,D.v9)(O),a=(0,D.v9)(Q),i=(0,D.v9)(W),o=function(){var n=(0,j.Z)((0,v.Z)().mark((function n(r,t){var a,o;return(0,v.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.name,o=r.number,n.next=3,e({name:a,number:o,id:i});case 3:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}();return(0,M.jsx)(w.J9,{initialValues:{name:t,number:a},validationSchema:V,onSubmit:o,children:function(n){var e=n.values;return(0,M.jsxs)(on,{children:[(0,M.jsx)(un,{htmlFor:"contactName",children:"Name"}),(0,M.jsx)(sn,{id:"contactName",type:"text",name:"name",pattern:I,autoComplete:"off",placeholder:"Name",required:!0}),(0,M.jsx)(J,{name:"name"}),(0,M.jsx)(un,{htmlFor:"phone",children:"Number"}),(0,M.jsx)(sn,{id:"phone",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Number",autoComplete:"off",required:!0}),(0,M.jsx)(J,{name:"number"}),(0,M.jsx)(F.w6,{type:"submit",disabled:e.name===t&&e.number===a,children:r?(0,M.jsx)(b.Z,{}):"Edit"})]})}})},dn=function(n){var e=n.handleShowModal,r=(0,q.wv)(),t=(0,Z.Z)(r,2),a=t[0],i=t[1].isLoading,o=(0,D.I0)(),u=function(){var n=(0,j.Z)((0,v.Z)().mark((function n(e){return(0,v.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a(e);case 3:o((0,$.V)()),C.Am.success("Contact edited successfully!"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),C.Am.error("Something went wrong. Please, try again.");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(an,{onClose:e,children:[(0,M.jsx)(F.PZ,{onClick:e,children:(0,M.jsx)(_.SV5,{size:20})}),(0,M.jsx)(cn,{onSubmit:u,isUpdaiting:i})]})})},ln=r(5716),mn=r(5788),pn=function(){var n=(0,ln.Z)("(min-width: 900px)");return(0,M.jsx)(mn.ZH,{size:n?24:20})},fn=function(){var n=(0,ln.Z)("(min-width: 900px)");return(0,M.jsx)(mn.VL,{size:n?24:20})},hn=function(n){var e=n.name,r=n.number,t=n.id,a=(0,q.Nt)(),i=(0,Z.Z)(a,2),o=i[0],u=i[1].isLoading,s=(0,D.v9)(K),c=(0,D.I0)(),d=function(){c((0,$.V)({name:e,number:r,id:t}))},l=function(){var n=(0,j.Z)((0,v.Z)().mark((function n(){return(0,v.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o(t);case 3:C.Am.success("Contact deleted successfully!"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),C.Am.error("Something went wrong. Please, try again.");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}();return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(U,{children:[e,": ",(0,M.jsx)("span",{children:r})]}),(0,M.jsxs)(R,{children:[(0,M.jsx)(F.Id,{onClick:d,children:(0,M.jsx)(fn,{})}),(0,M.jsx)(F.Id,{onClick:l,disabled:u,children:u?(0,M.jsx)(b.Z,{}):(0,M.jsx)(pn,{})})]}),s&&(0,M.jsx)(dn,{handleShowModal:d})]})},xn=r(6895),gn=function(){var n=(0,q.wY)().data,e=(0,D.v9)(xn.B8),r=function(){var r=e.toLocaleLowerCase();if(n)return n.filter((function(n){return n.name.toLocaleLowerCase().includes(r)||n.number.toString().includes(r)}))}();if(r)return(0,M.jsx)(G,{children:r.sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){var e=n.id,r=n.name,t=n.number;return(0,M.jsx)(H,{name:r,children:(0,M.jsx)(hn,{name:r,number:t,id:e})},e)}))})},bn=N.ZP.input(h||(h=(0,S.Z)(["\n  max-width: ","px;\n  height: ","px;\n  border-radius: ",";\n  border: ",";\n  margin: ","px ","px;\n  padding: ","px;\n\n  :focus {\n    outline: ",";\n  }\n"])),(function(n){return n.theme.space[8]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.borders.normal})),vn=function(){var n=(0,D.I0)(),e=(0,D.v9)(xn.B8);return(0,M.jsx)(bn,{type:"text",onChange:function(e){var r=e.target.value;n((0,xn.sP)(r))},value:e,placeholder:"Search..."})},jn=N.ZP.h2(x||(x=(0,S.Z)(["\n  font-size: 40px;\n  margin-top: 10px;\n"]))),Zn=function(n){var e=n.title,r=n.children;return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)("div",{children:[(0,M.jsx)(jn,{children:e}),r]})})},wn=function(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("div",{children:[(0,M.jsx)(g.Dx,{children:"Phonebook"}),(0,M.jsx)(Y,{})]}),(0,M.jsxs)(Zn,{title:"Contacts",children:[(0,M.jsx)(vn,{}),(0,M.jsx)(gn,{})]})]})},yn=r(3535),kn=function(){var n=(0,D.v9)(yn.um.getIsLoggedIn),e=(0,q.wY)(),r=e.data,t=e.refetch;return(0,X.useEffect)((function(){n&&t()}),[n,t]),r?(0,M.jsx)(wn,{}):(0,M.jsx)(g.lI,{children:(0,M.jsx)(b.Z,{size:50})})}}}]);
//# sourceMappingURL=869.d0d98bee.chunk.js.map