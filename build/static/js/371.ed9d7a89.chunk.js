"use strict";(self.webpackChunkrasilabs=self.webpackChunkrasilabs||[]).push([[371],{2371:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var i=a(5043),n=a(4712),s=a(8003),r=a(6326),o=a(9250),c=a(4911),d=a(8328),l=a(8906),u=a(3714),_=a(1054),m=a(4323),b=a(9892),f=a(5595),w=a(2795),h=a(7629),g=a(8659),p=a(2103),v=a(951),x=a(4769),k=a(9084),A=a(8171),E=a(4301),y=a(9909),N=a(8809);const C={alert:"awsui_alert_mx3cw_obq0g_97","awsui-motion-fade-in":"awsui_awsui-motion-fade-in_mx3cw_obq0g_1",root:"awsui_root_mx3cw_obq0g_123",hidden:"awsui_hidden_mx3cw_obq0g_161","with-dismiss":"awsui_with-dismiss_mx3cw_obq0g_211","with-action":"awsui_with-action_mx3cw_obq0g_211","breakpoint-default":"awsui_breakpoint-default_mx3cw_obq0g_217",header:"awsui_header_mx3cw_obq0g_224",action:"awsui_action_mx3cw_obq0g_228","action-slot":"awsui_action-slot_mx3cw_obq0g_233","action-button":"awsui_action-button_mx3cw_obq0g_234","alert-focus-wrapper":"awsui_alert-focus-wrapper_mx3cw_obq0g_238",text:"awsui_text_mx3cw_obq0g_267",icon:"awsui_icon_mx3cw_obq0g_274",message:"awsui_message_mx3cw_obq0g_277","icon-size-medium":"awsui_icon-size-medium_mx3cw_obq0g_285","icon-size-big":"awsui_icon-size-big_mx3cw_obq0g_288","icon-size-normal":"awsui_icon-size-normal_mx3cw_obq0g_291",content:"awsui_content_mx3cw_obq0g_295",dismiss:"awsui_dismiss_mx3cw_obq0g_299","dismiss-button":"awsui_dismiss-button_mx3cw_obq0g_304","type-error":"awsui_type-error_mx3cw_obq0g_308","type-warning":"awsui_type-warning_mx3cw_obq0g_316","type-success":"awsui_type-success_mx3cw_obq0g_324","type-info":"awsui_type-info_mx3cw_obq0g_332"},S={error:"status-negative",warning:"status-warning",success:"status-positive",info:"status-info"},q=(0,y.W)(E.pM.alert.onActionRegistered),R=i.forwardRef(((e,t)=>{var{type:a,statusIconAriaLabel:n,visible:s=!0,dismissible:o,dismissAriaLabel:c,children:u,header:_,buttonText:E,action:y,onDismiss:R,onButtonClick:I,__internalRootRef:O=null}=e,B=(0,r.Tt)(e,["type","statusIconAriaLabel","visible","dismissible","dismissAriaLabel","children","header","buttonText","action","onDismiss","onButtonClick","__internalRootRef"]);const L=(0,l.C)(B),z=(0,f.pI)("alert"),D=(0,i.useRef)(null);(0,x.A)(t,D);const[M,j]=(0,v.j)(["xs"]),V=(0,k.S)(j,O),P=(0,A.P)()?"normal":_&&u?"big":"normal",{discoveredActions:T,headerRef:U,contentRef:W}=q(a),Y=Boolean(y||E||T.length),H={[d.B$]:a};return i.createElement("div",Object.assign({},L,H,{"aria-hidden":!s,className:(0,m.A)(C.root,{[C.hidden]:!s},L.className),ref:V}),i.createElement(g.C.Provider,{value:{defaultVariant:"primary"}},i.createElement(h.Ay,{contextName:"alert"},i.createElement("div",{className:(0,m.A)(C.alert,C["type-".concat(a)],C["icon-size-".concat(P)],Y&&C["with-action"],o&&C["with-dismiss"],C["breakpoint-".concat(M)])},i.createElement("div",{className:C["alert-focus-wrapper"],tabIndex:-1,ref:D},i.createElement("div",{className:(0,m.A)(C.icon,C.text),role:"img","aria-label":n},i.createElement(w.A,{name:S[a],size:P})),i.createElement("div",{className:(0,m.A)(C.message,C.text)},_&&i.createElement("div",{className:C.header,ref:U},_),i.createElement("div",{className:C.content,ref:W},u))),i.createElement(N.P,{className:C.action,testUtilClasses:{actionSlot:C["action-slot"],actionButton:C["action-button"]},action:y,discoveredActions:T,buttonText:E,onButtonClick:()=>(0,p.KV)(I)}),o&&i.createElement("div",{className:C.dismiss},i.createElement(b.Q,{className:C["dismiss-button"],variant:"icon",iconName:"close",formAction:"none",ariaLabel:z("dismissAriaLabel",c),onClick:()=>(0,p.KV)(R)}))))))})),I=i.forwardRef(((e,t)=>{var{type:a="info",visible:n=!0}=e,s=(0,r.Tt)(e,["type","visible"]);const _=(0,l.G)(s),m=(0,u.A)("Alert",{props:{type:a,visible:n,dismissible:s.dismissible}},_),{funnelIdentifier:b,funnelInteractionId:f,funnelErrorContext:w,submissionAttempt:h,funnelState:g,errorCount:p}=(0,c.oZ)(),{stepNumber:v,stepNameSelector:x,stepIdentifier:k}=(0,c.IU)(),{subStepSelector:A,subStepNameSelector:E,subStepIdentifier:y,subStepErrorContext:N}=(0,c.M$)();return(0,i.useEffect)((()=>{var e,t,i;if(f&&n&&"error"===a&&"complete"!==g.current){const a=(0,d.rh)(x),n=(0,d.rh)(E);p.current++;return(null!==(i=null===(t=null===(e=m.__internalRootRef.current)||void 0===e?void 0:e.getBoundingClientRect())||void 0===t?void 0:t.width)&&void 0!==i?i:0)>0&&(A?o.A2.funnelSubStepError({funnelInteractionId:f,funnelIdentifier:b,stepIdentifier:k,subStepSelector:A,subStepName:n,subStepNameSelector:E,stepNumber:v,stepName:a,stepNameSelector:x,subStepAllSelector:(0,d.V4)(),subStepIdentifier:y,subStepErrorContext:N}):o.A2.funnelError({funnelIdentifier:b,funnelInteractionId:f,funnelErrorContext:w})),()=>{p.current--}}}),[f,n,h,p]),i.createElement(R,Object.assign({type:a,visible:n},s,m,{ref:t}))}));(0,_.o)(I,"Alert");const O=I;var B=a(579);const L=()=>(0,B.jsx)(n.A,{disableOverlap:!0,children:(0,B.jsx)(s.A,{size:"s",direction:"vertical",children:[{id:54764,date:"30-08-2024",time:"11:30 AM",message:"You have received a new Order ID"},{id:54764,date:"30-08-2024",time:"11:30 AM",message:"You have received a new Order ID"},{id:54764,date:"30-08-2024",time:"11:30 AM",message:"You have received a new Order ID"},{id:54764,date:"30-08-2024",time:"11:30 AM",message:"You have received a new Order ID"}].map(((e,t)=>(0,B.jsx)(O,{type:"info",header:"".concat(e.message," (").concat(e.id,")"),dismissible:!0,onDismiss:()=>console.log("Dismissed notification ".concat(e.id)),children:"".concat(e.date," (").concat(e.time,")")},t)))})})},8809:(e,t,a)=>{a.d(t,{P:()=>o});var i=a(5043),n=a(4323),s=a(9892);const r={root:"awsui_root_37gf8_14wux_9"};function o(e){let{className:t,testUtilClasses:a,action:o,discoveredActions:c,buttonText:d,onButtonClick:l}=e;const u=function(e,t,a,n){return!t&&a&&(t=i.createElement(s.A,{className:e.actionButton,onClick:n,formAction:"none"},a)),t?i.createElement("div",{className:e.actionSlot},t):null}(a,o,d,l);return u||0!==c.length?i.createElement("div",{className:(0,n.A)(r.root,t)},u,c):null}},4712:(e,t,a)=>{a.d(t,{A:()=>v});var i=a(5043),n=a(3714),s=a(1054),r=a(6326),o=a(4323),c=a(9016),d=a(187),l=a(8906),u=a(8649),_=a(3052);var m=a(9084),b=a(8171),f=a(2669);const w={layout:"awsui_layout_5gtk3_1hkx1_97",background:"awsui_background_5gtk3_1hkx1_111","is-overlap-disabled":"awsui_is-overlap-disabled_5gtk3_1hkx1_116","header-background":"awsui_header-background_5gtk3_1hkx1_119",notifications:"awsui_notifications_5gtk3_1hkx1_123",breadcrumbs:"awsui_breadcrumbs_5gtk3_1hkx1_128","default-padding":"awsui_default-padding_5gtk3_1hkx1_133","header-wrapper":"awsui_header-wrapper_5gtk3_1hkx1_137","with-divider":"awsui_with-divider_5gtk3_1hkx1_142",content:"awsui_content_5gtk3_1hkx1_145","has-header":"awsui_has-header_5gtk3_1hkx1_149","is-visual-refresh":"awsui_is-visual-refresh_5gtk3_1hkx1_156","has-default-background":"awsui_has-default-background_5gtk3_1hkx1_156","has-notifications":"awsui_has-notifications_5gtk3_1hkx1_160"},h={header:"awsui_header_64tge_1scxg_5","secondary-header":"awsui_secondary-header_64tge_1scxg_9",notifications:"awsui_notifications_64tge_1scxg_13",breadcrumbs:"awsui_breadcrumbs_64tge_1scxg_17"},g=8947848.525;function p(e){var{children:t,disableOverlap:a,header:n,headerVariant:s="default",headerBackgroundStyle:p,__internalRootRef:v,maxContentWidth:x=Number.MAX_VALUE,breadcrumbs:k,notifications:A,defaultPadding:E,secondaryHeader:y}=e,N=(0,r.Tt)(e,["children","disableOverlap","header","headerVariant","headerBackgroundStyle","__internalRootRef","maxContentWidth","breadcrumbs","notifications","defaultPadding","secondaryHeader"]);const C=(0,i.useRef)(null),S=(0,m.S)(C,v),q=(0,l.C)(N),R=(0,b.P)(),I=(0,c.go)(C),O=function(e){var t;const a=null!==(t=null===e||void 0===e?void 0:e.disabled)&&void 0!==t&&t,n=(0,i.useContext)(_.U),s=(0,i.useRef)(null),r=(0,i.useCallback)((()=>s.current),[s]),o=(0,i.useCallback)((e=>{a||n(e.contentBoxHeight)}),[a,n]);return(0,c.wY)(r,o),(0,i.useLayoutEffect)((function(){return()=>{a||n(0)}}),[a,n]),s}(),B=!t||a,L="high-contrast"===s&&R?f.H:"";return i.createElement("div",Object.assign({},q,{className:(0,o.A)(q.className,w.layout,{[w["is-overlap-disabled"]]:B,[w["is-visual-refresh"]]:R,[w["has-header"]]:!!n,[w["default-padding"]]:!!E,[w["has-notifications"]]:!!A}),style:{[u.A.contentLayoutMaxContentWidth]:x<Number.MAX_VALUE?"".concat(x,"px"):"".concat(g,"px")},ref:S}),i.createElement("div",{className:(0,o.A)(w.background,{[w["has-default-background"]]:!p},L),ref:O},p&&i.createElement("div",{className:w["header-background"],style:{background:"function"===typeof p?p(I):p}})),A&&i.createElement("div",{className:(0,o.A)(w.notifications,h.notifications,L)},A),k&&i.createElement("div",{className:(0,o.A)(w.breadcrumbs,h.breadcrumbs,L)},k),n&&!y&&i.createElement("div",{className:(0,o.A)(w["header-wrapper"],h.header,L,{[w["with-divider"]]:"divider"===s})},n),n&&y&&i.createElement("div",{className:(0,o.A)(w["header-wrapper"],{[w["with-divider"]]:"divider"===s})},i.createElement(d.A,{gridDefinition:[{colspan:{default:12,xs:9}},{colspan:{default:12,xs:3}}]},i.createElement("div",{className:(0,o.A)(h.header,L)},n),i.createElement("div",{className:h["secondary-header"]},y))),i.createElement("div",{className:(0,o.A)(w.content,{[w["with-divider"]]:"divider"===s})},t))}function v(e){const t=(0,n.A)("ContentLayout",{props:{disableOverlap:e.disableOverlap}});return i.createElement(p,Object.assign({},e,t))}(0,s.o)(v,"ContentLayout")},9909:(e,t,a)=>{a.d(t,{W:()=>s});var i=a(5043),n=a(7906);function s(e){return function(t){const[a,s]=(0,i.useState)([]),r=(0,i.useRef)(null),o=(0,i.useRef)(null);return(0,i.useEffect)((()=>e((e=>{s(e.map((e=>function(e,t){return e?i.createElement(n.v,{key:e.id+"-"+t.type,mountContent:a=>e.mountContent(a,t),unmountContent:t=>e.unmountContent(t)}):null}(e,{type:t,headerRef:r,contentRef:o}))))}))),[t]),{discoveredActions:a,headerRef:r,contentRef:o}}}}}]);
//# sourceMappingURL=371.ed9d7a89.chunk.js.map