import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const{useParameter:c,addons:l,useEffect:d,useMemo:L}=__STORYBOOK_MODULE_PREVIEW_API__;var A=Object.defineProperty,p=(e,t)=>{for(var r in t)A(e,r,{get:t[r],enumerable:!0})},R={};p(R,{initializeThemeState:()=>n,pluckThemeFromContext:()=>i,useThemeParameters:()=>T});var m="themes",S=`storybook/${m}`,D="theme",M={},O={REGISTER_THEMES:`${S}/REGISTER_THEMES`};function i({globals:e}){return e[D]||""}function T(){return c(m,M)}function n(e,t){l.getChannel().emit(O.REGISTER_THEMES,{defaultTheme:t,themes:e})}var f="html",v="data-theme",P=({themes:e,defaultTheme:t,parentSelector:r=f,attributeName:_=v})=>(n(Object.keys(e),t),(s,h)=>{let{themeOverride:a}=T(),o=i(h);return d(()=>{let E=document.querySelector(r),u=a||o||t;E&&E.setAttribute(_,e[u])},[a,o]),s()});const k={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}},g=[P({themes:{light:"light",dark:"dark"},defaultTheme:"light",attributeName:"data-mode"})];export{g as decorators,k as default};
