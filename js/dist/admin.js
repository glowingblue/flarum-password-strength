(()=>{var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const o=flarum.core.compat["common/app"];var r=e.n(o);const n=flarum.core.compat["common/helpers/icon"];var l=e.n(n),a="glowingblue-password-strength",s=r().translator.trans.bind(r().translator),i=a+".admin.settings";r().initializers.add(a,(function(){r().extensionData.for(a).registerSetting((function(){return m("div",{className:"Form-group"},m("label",{className:"psHeading"},s(i+".colorOptions")),m("div",{className:"helpText psHelpText"},l()("fas fa-exclamation-circle"),m("span",null,s(i+".colorHelp"))))})).registerSetting({setting:a+".weakColor",type:"text",label:s(i+".weakColor")}).registerSetting({setting:a+".mediumColor",type:"text",label:s(i+".mediumColor")}).registerSetting({setting:a+".strongColor",type:"text",label:s(i+".strongColor")}).registerSetting((function(){return m("div",{className:"Form-group"},m("label",{className:"psHeading"},s(i+".otherOptions")))})).registerSetting({setting:a+".enableInputColor",type:"boolean",label:s(i+".enableInputColor")}).registerSetting({setting:a+".enableInputBorderColor",type:"boolean",label:s(i+".enableInputBorderColor")}).registerSetting({setting:a+".enablePasswordToggle",type:"boolean",label:s(i+".enablePasswordToggle")})}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map