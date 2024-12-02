"use strict";(self.webpackChunkrasilabs=self.webpackChunkrasilabs||[]).push([[809],{6809:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var n=i(5043),r=i(6421),o=i(8003),a=i(2521),d=i(5336),s=i(2671),l=i(3091),c=i(6326),u=i(3714),m=i(1054),h=i(2009);function p(e){var{type:t="success",wrapText:i=!0}=e,r=(0,c.Tt)(e,["type","wrapText"]);const o=(0,u.A)("StatusIndicator",{props:{colorOverride:r.colorOverride,type:t,wrapText:i}});return n.createElement(h.A,Object.assign({type:t,wrapText:i},r,o))}(0,m.o)(p,"StatusIndicator");var v=i(4521),_=i(3003),f=i(3216),x=i(9272),g=i(579);const b=()=>{var e,t,i,c,u,m,h;const{runsheetId:b,orderId:w,photoUrl:y}=(0,f.g)(),k=(0,_.wA)(),A=(0,f.Zp)(),[j,C]=(0,n.useState)(!1),E=(0,_.d4)((e=>{var t;return null===(t=e.runsheet.runsheetDetail)||void 0===t?void 0:t.data})),I=null===E||void 0===E||null===(e=E.orders)||void 0===e?void 0:e.find((e=>e.id===w));return(0,n.useEffect)((()=>{if(!E||E.id!==b){var e;const t=null===(e=localStorage.getItem("id"))||void 0===e?void 0:e.replace(/['"]+/g,"");t&&k((0,x.w6)({riderId:t,runsheetId:b}))}}),[k,E,b]),I?(0,g.jsx)("div",{style:{height:"100vh"},children:(0,g.jsxs)(o.A,{size:"m",children:[(0,g.jsx)(a.A,{variant:"h2",children:(0,g.jsxs)(o.A,{size:"xs",direction:"horizontal",alignItems:"center",children:[(0,g.jsx)(d.A,{onClick:()=>A(-2),iconName:"arrow-left",variant:"icon"}),(0,g.jsx)("span",{className:"header_underline",children:" Captured Verified "})]})}),(0,g.jsxs)(s.A,{header:(0,g.jsxs)(o.A,{alignItems:"center",direction:"horizontal",size:"xs",children:[(0,g.jsx)(r.A,{variant:"h3",children:(0,g.jsx)("span",{style:{color:"#0972D3"},children:I.customerName})}),(0,g.jsx)(l.A,{children:null===(t=I.paymentDetails)||void 0===t?void 0:t.method})]}),footer:(0,g.jsx)("div",{style:{display:"flex",margin:"0 auto",width:"80%"},children:I.customerNumber?(0,g.jsx)("a",{href:"tel:+91".concat(String(I.customerNumber)),style:{width:"100%"},children:(0,g.jsx)(d.A,{fullWidth:!0,variant:"primary",iconName:"call",children:"Call"})}):(0,g.jsx)("p",{children:"No contact number available"})}),children:[null===(i=I.address)||void 0===i?void 0:i.address,", ",null===(c=I.address)||void 0===c?void 0:c.zipCode]}),(0,g.jsxs)(o.A,{size:"xs",direction:"horizontal",alignItems:"center",children:[(0,g.jsx)(r.A,{variant:"h4",children:"Items list "}),(0,g.jsxs)(r.A,{children:[" (",(null===(u=I.items)||void 0===u?void 0:u.length)||0," Items)"]})]}),(0,g.jsx)(s.A,{header:(0,g.jsxs)(a.A,{variant:"h4",children:["Order ID : ",w]}),footer:(0,g.jsx)("div",{className:"flex jcc",children:(0,g.jsx)(p,{children:"Verified!"})}),children:(0,g.jsxs)(o.A,{direction:"horizontal",size:"xs",children:["Amount to be Collected:"," ",(0,g.jsxs)(r.A,{variant:"strong",children:["\u20b9 ",I.totalPrice,"/-"]})]})}),(0,g.jsx)("div",{style:{display:"flex",margin:"0 auto",width:"80%",position:"absolute",right:30,bottom:"16%",left:30},children:"cash"===(null===(m=I.paymentDetails)||void 0===m?void 0:m.method)?(0,g.jsx)(d.A,{onClick:()=>A("/app/home/runsheet/".concat(b,"/customer-details/order/").concat(w,"/captured-verified/").concat(encodeURIComponent(y),"/payment")),variant:"primary",fullWidth:!0,children:"Collect Amount"}):"prepaid"===(null===(h=I.paymentDetails)||void 0===h?void 0:h.method)?(0,g.jsx)(d.A,{onClick:()=>C(!0),variant:"primary",fullWidth:!0,children:"Delivered Order"}):null}),(0,g.jsx)(v.A,{onDismiss:()=>C(!1),visible:j,footer:(0,g.jsx)(r.A,{float:"right",children:(0,g.jsxs)(o.A,{direction:"horizontal",size:"xs",children:[(0,g.jsx)(d.A,{variant:"link",onClick:()=>C(!1),children:"Cancel"}),(0,g.jsx)(d.A,{variant:"primary",onClick:()=>{C(!1),A("/app/home/runsheet/".concat(b,"/customer-details/order/").concat(I.id,"/delivered"))},children:"Ok"})]})}),header:"Delivered Confirmation",children:"Are you sure you want to mark this order as delivered?"})]})}):(0,g.jsx)(r.A,{variant:"h3",children:"Order not found"})}},2671:(e,t,i)=>{i.d(t,{A:()=>m});var n=i(6326),r=i(5043),o=i(6734),a=i(1756),d=i(8906),s=i(3714),l=i(1054),c=i(359),u=i(529);function m(e){var{variant:t="default",disableHeaderPaddings:i=!1,disableContentPaddings:l=!1,fitHeight:m=!1}=e,h=(0,n.Tt)(e,["variant","disableHeaderPaddings","disableContentPaddings","fitHeight"]);const p=(0,d.G)(h),v=(0,s.A)("Container",{props:{disableContentPaddings:l,disableHeaderPaddings:i,fitHeight:m,variant:t}},p),_=(0,c.e)(h);return r.createElement(a.NW,{subStepIdentifier:null===p||void 0===p?void 0:p.instanceIdentifier,subStepErrorContext:null===p||void 0===p?void 0:p.errorContext},r.createElement(u.f,Object.assign({variant:t,disableContentPaddings:l,disableHeaderPaddings:i,fitHeight:m},h,_,v,(0,o.MV)({component:{name:"awsui.Container",label:{root:"self"}}}))))}(0,l.o)(m,"Container")},455:(e,t,i)=>{i.d(t,{o:()=>n});const n=function(e){let t;return()=>(void 0===t&&(t=e()),t)}((()=>{if("undefined"===typeof document)return{width:0,height:0};const e=document.createElement("div");e.style.overflow="scroll",e.style.height="100px",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",e.style.left="-9999px",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{width:t,height:i}}))},4521:(e,t,i)=>{i.d(t,{A:()=>T});var n=i(6326),r=i(5043),o=i(3714),a=i(1054),d=i(4323),s=i(1e3),l=i(9892),c=i(7008),u=i(5595),m=i(8344),h=i(4911),p=i(8906),v=i(3735),_=i(5117),f=i(1966),x=i(6323),g=i(6176),b=i(1752),w=i(7235),y=i(8659),k=i(7161);const A=e=>{let{children:t}=e;return r.createElement(x.k.Provider,{value:{onClick:()=>{}}},r.createElement(g.U.Provider,{value:{assignId:()=>{}}},r.createElement(b.w.Provider,{value:{}},r.createElement(w._.Provider,{value:""},r.createElement(y.C.Provider,{value:y.J},r.createElement(k.f$.Provider,{value:k.Jh},t))))))};var j=i(2103),C=i(951);var E=i(9084),I=i(8172),P=i(8171),N=i(2011),z=i(455);const R={dialog:"awsui_dialog_1d2i7_xpcku_109","modal-slide-up":"awsui_modal-slide-up_1d2i7_xpcku_1","awsui-motion-fade-in-0":"awsui_awsui-motion-fade-in-0_1d2i7_xpcku_1",refresh:"awsui_refresh_1d2i7_xpcku_132","awsui-motion-scale-popup":"awsui_awsui-motion-scale-popup_1d2i7_xpcku_1",root:"awsui_root_1d2i7_xpcku_165","awsui-motion-fade-in":"awsui_awsui-motion-fade-in_1d2i7_xpcku_1",hidden:"awsui_hidden_1d2i7_xpcku_249","focus-lock":"awsui_focus-lock_1d2i7_xpcku_253",small:"awsui_small_1d2i7_xpcku_273",medium:"awsui_medium_1d2i7_xpcku_276",large:"awsui_large_1d2i7_xpcku_279",max:"awsui_max_1d2i7_xpcku_282","breakpoint-xs":"awsui_breakpoint-xs_1d2i7_xpcku_282",container:"awsui_container_1d2i7_xpcku_288",content:"awsui_content_1d2i7_xpcku_332","no-paddings":"awsui_no-paddings_1d2i7_xpcku_337",header:"awsui_header_1d2i7_xpcku_342","header--text":"awsui_header--text_1d2i7_xpcku_354",footer:"awsui_footer_1d2i7_xpcku_358","footer--stuck":"awsui_footer--stuck_1d2i7_xpcku_367","dismiss-control":"awsui_dismiss-control_1d2i7_xpcku_379","modal-open":"awsui_modal-open_1d2i7_xpcku_383"};let D;function O(){!function(){if(document.body.clientWidth<window.innerWidth){D=document.body.style.paddingRight;const e=parseInt(window.getComputedStyle(document.body).paddingRight,10)+(0,z.o)().width;document.body.style.paddingRight=e+"px"}}(),document.body.classList.add(R["modal-open"])}function H(){document.body.classList.remove(R["modal-open"]),function(){D?document.body.style.setProperty("padding-right",D):document.body.style.removeProperty("padding-right");D=void 0}()}function S(e){var{modalRoot:t,getModalRoot:i,removeModalRoot:o}=e,a=(0,n.Tt)(e,["modalRoot","getModalRoot","removeModalRoot"]);return r.createElement(_.A,{container:t,getContainer:i,removeContainer:o},r.createElement(M,Object.assign({},a)))}function M(e){var t,{size:i,visible:o,header:a,children:_,footer:x,disableContentPaddings:g,onDismiss:b,__internalRootRef:w=null}=e,y=(0,n.Tt)(e,["size","visible","header","children","footer","disableContentPaddings","onDismiss","__internalRootRef"]);const k=(0,I.Y)(),z="".concat(y.id||k,"-header"),D=(0,r.useRef)(null),[S,M]=(0,C.j)(["xs"]),T=(0,u.pI)("modal")("closeAriaLabel",y.closeAriaLabel),W=(0,r.useRef)(null),L=(0,E.S)(M,W,w),V=(0,P.P)(),B=(0,p.C)(y);(0,r.useEffect)((()=>()=>{H()}),[]),(0,r.useEffect)((()=>{o?O():H()}),[o]),(0,r.useEffect)((()=>{o&&W.current&&(W.current.scrollTop=0)}),[o]);const U=e=>(0,j.KV)(b,{reason:e}),{ref:F,isIntersecting:J}=function(){const e=(0,r.useRef)(null),[t,i]=(0,r.useState)(!1);return{ref:(0,r.useCallback)((t=>{"undefined"!==typeof IntersectionObserver&&(e.current&&e.current.disconnect(),t&&(e.current=new IntersectionObserver((e=>{let[t]=e;return i(t.isIntersecting)})),e.current.observe(t)))}),[]),isIntersecting:t}}(),[K,Q]=(0,s.x)((e=>e.borderBoxHeight)),{subStepRef:$}=(0,h.M$)();return r.createElement(m.QW.Provider,{value:".".concat(R["header--text"])},r.createElement(A,null,r.createElement(f.V.Provider,{value:{isInModal:!0}},r.createElement("div",Object.assign({},B,{className:(0,d.A)(R.root,{[R.hidden]:!o},B.className,V&&R.refresh),role:"dialog","aria-modal":!0,"aria-labelledby":z,onMouseDown:e=>{D.current=e.target},onClick:e=>{const t=W.current,i=D.current;e.target===t&&i===t&&U("overlay")},ref:L,style:K?{scrollPaddingBottom:K}:void 0,"data-awsui-referrer-id":null===(t=$.current)||void 0===t?void 0:t.id}),r.createElement(v.A,{disabled:!o,autoFocus:!0,restoreFocus:!0,className:R["focus-lock"]},r.createElement("div",{className:(0,d.A)(R.dialog,R[i],R["breakpoint-".concat(S)],V&&R.refresh),onKeyDown:e=>{e.keyCode===N.D.escape&&U("keyboard")}},r.createElement("div",{className:R.container},r.createElement("div",{className:R.header},r.createElement(c.A,{variant:"h2",__disableActionsWrapping:!0,actions:r.createElement(l.Q,{ariaLabel:T,className:R["dismiss-control"],variant:"modal-dismiss",iconName:"close",formAction:"none",onClick:()=>U("closeButton")})},r.createElement("span",{id:z,className:R["header--text"]},a))),r.createElement("div",{className:(0,d.A)(R.content,{[R["no-paddings"]]:g})},_,r.createElement("div",{ref:F})),x&&r.createElement("div",{ref:Q,className:(0,d.A)(R.footer,J&&R["footer--stuck"])},x))))))))}function T(e){var{size:t="medium"}=e,i=(0,n.Tt)(e,["size"]);const a=(0,o.A)("Modal",{props:{size:t,disableContentPaddings:i.disableContentPaddings}});return r.createElement(S,Object.assign({size:t},i,a))}(0,a.o)(T,"Modal")}}]);
//# sourceMappingURL=809.2611e5a8.chunk.js.map