"use strict";(self.webpackChunkrasilabs=self.webpackChunkrasilabs||[]).push([[400],{6175:(e,t,r)=>{r.d(t,{mg:()=>a});r(6446),r(1637),r(1036),r(579);const a={EMAIL_REGEX:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,PASSWORD_REGEX:/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,MOBILE_NUMBER_REGEX:/^\d{10}$/,NUMBER_ONLY_REGEX:/^[0-9]+$/,DECIMAL_ALLOW_REGEX:/^\d*\.?\d*$/,ONLY_TWO_DECIMAL_ALLOW_REGEX:/^(?:\d*\.\d{1,2}|\d+)$/,type:{MANDATORY:0,REGEX:1,CHARACTERCOUNT:2},validate:(e,t)=>{function r(e,t){return t&&""!==t?{isValid:!0,error:{isValid:!0,message:""}}:{isValid:!1,error:{isValid:!1,message:e.message}}}function i(e,t){return t&&t.length!==e.CharacterCout?{isValid:!1,error:{isValid:!1,message:e.message}}:{isValid:!0,error:{isValid:!0,message:""}}}function s(e,t){return e.regex&&!e.regex.test(t)?{isValid:!1,error:{isValid:!1,message:e.message}}:{isValid:!0,error:{isValid:!0,message:""}}}const l=Object.keys(t),n={};let o,c=!0;return l.forEach((l=>{const d=e[l],A=t[l];for(const e of d)if(e.type===a.type.MANDATORY?o=r(e,A):e.type===a.type.CHARACTERCOUNT?o=i(e,A):e.type===a.type.REGEX&&(o=s(e,A)),n[l]=o.error,c=c&&o.isValid,!o.isValid)break})),n.isValid=c,n}}},5377:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var a=r(5043),i=r(3540);const s=r.p+"static/media/scooterImg.f7285fbaa60c60780bad.png";var l=r(8003),n=r(8811),o=r(5416),c=r(5336),d=r(6421),A=r(3216),m=r(3003),u=r(9141),g=r(6175),y=r(579);const E={number:[{message:"Please enter Mobile number",type:g.mg.type.MANDATORY},{message:"Please enter a valid Mobile Number",type:g.mg.type.REGEX,regex:g.mg.MOBILE_NUMBER_REGEX}]},h=()=>{var e;const t=(0,A.Zp)(),r=(0,m.wA)(),[h,f]=(0,a.useState)(""),[p,T]=(0,a.useState)(!1),[N,b]=(0,a.useState)(!1),[R,j]=(0,a.useState)(!1);(0,a.useEffect)((()=>{if(!localStorage.getItem("hasSeenSplash")){j(!0),localStorage.setItem("hasSeenSplash","true");const e=setTimeout((()=>{j(!1)}),3e3);return()=>clearTimeout(e)}}),[]);const x=()=>g.mg.validate(E,{number:h}),J=async()=>{if(N)return;b(!0),T(!0);const e=x();if(e.isValid){var a;console.log("Calling API with number:",h);const e=await r((0,u.J)({number:h,userType:"rider"}));console.log("API response:",e.payload.data);const i=null===(a=e.payload.data)||void 0===a?void 0:a.session;localStorage.setItem("session",i),t("/auth/otp-varification/".concat(h))}else console.log("Validation failed:",e);b(!1)},I=x();return R?(0,y.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"white"},children:(0,y.jsx)("img",{src:i,alt:"Logo"})}):(0,y.jsxs)(l.A,{size:"xxl",children:[(0,y.jsxs)(l.A,{size:"l",children:[(0,y.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem 0 2rem 0"},children:(0,y.jsx)("img",{src:i,alt:"Logo"})}),(0,y.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,y.jsx)("img",{src:s,style:{height:"16rem",width:"16rem"}})})]}),(0,y.jsxs)(l.A,{size:"m",children:[(0,y.jsxs)("div",{style:{fontSize:"2.3rem",fontWeight:"bold",width:"20rem",margin:"0 auto"},children:["Hello, ",(0,y.jsx)("br",{}),(0,y.jsx)("span",{style:{color:"#0972D3"},children:"Promode Delivery Partner!"})]}),(0,y.jsxs)(l.A,{size:"s",children:[(0,y.jsx)("form",{onSubmit:e=>{e.preventDefault(),J()},children:(0,y.jsxs)("div",{style:{display:"flex",flexFlow:"column",gap:"0.8rem",justifyContent:"center",alignItems:"center",margin:"0 auto"},children:[(0,y.jsx)("div",{style:{width:"20rem"},children:(0,y.jsx)(n.A,{errorText:p&&!I.isValid&&(0,y.jsx)(y.Fragment,{children:null===I||void 0===I||null===(e=I.number)||void 0===e?void 0:e.message}),children:(0,y.jsx)(o.A,{autoFocus:!0,value:h,type:"number",onChange:e=>f(e.detail.value),placeholder:"Enter Your Mobile Number"})})}),(0,y.jsx)("div",{style:{width:"20rem"},children:(0,y.jsx)(c.A,{onClick:J,variant:"primary",fullWidth:!0,children:"Sign In"})})]})}),(0,y.jsxs)(d.A,{textAlign:"center",variant:"p",children:[(0,y.jsx)("span",{style:{color:"gray"},children:"Don\u2019t have an account? "}),(0,y.jsx)("span",{className:"blue pointer",onClick:()=>t("/auth/register"),children:"Register"})]})]})]})]})}},3540:e=>{e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=400.a2fded3f.chunk.js.map