import{S as B,o as fe,m as ue,n as P,q as oe,j as E,r as O,g,v as L,w as le,x as ce,y as ee,z as de,A as H,B as F,C as re,D as ne,E as W,F as _e,G as ve,H as pe,I as V,p as he,b as me,c as te,J as ae,K as Z,L as q,M as ie,N as ge,u as k,a as U,O as be,P as z,Q as ye,d as j,R as we,T as Ee,U as Pe,V as Se,W as Re,X as Te,Y as Ie,Z as Oe,_ as A}from"./operations-DzxbD0fu.js";const Ge="5.1.3",Ne="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ne);const De=1,Ae=2,Le=4,Me=8,Ce=16,Fe=1,Ve=2,m=Symbol();function I(e,r=null,n){if(typeof e!="object"||e===null||B in e)return e;const s=ce(e);if(s!==fe&&s!==ue)return e;var a=new Map,i=ee(e),_=P(0);i&&a.set("length",P(e.length));var d;return new Proxy(e,{defineProperty(o,t,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&oe();var l=a.get(t);return l===void 0?(l=P(u.value),a.set(t,l)):E(l,I(u.value,d)),!0},deleteProperty(o,t){var u=a.get(t);if(u===void 0)t in o&&a.set(t,P(m));else{if(i&&typeof t=="string"){var l=a.get("length"),f=Number(t);Number.isInteger(f)&&f<l.v&&E(l,f)}E(u,m),J(_)}return!0},get(o,t,u){var v;if(t===B)return e;var l=a.get(t),f=t in o;if(l===void 0&&(!f||(v=O(o,t))!=null&&v.writable)&&(l=P(I(f?o[t]:m,d)),a.set(t,l)),l!==void 0){var c=g(l);return c===m?void 0:c}return Reflect.get(o,t,u)},getOwnPropertyDescriptor(o,t){var u=Reflect.getOwnPropertyDescriptor(o,t);if(u&&"value"in u){var l=a.get(t);l&&(u.value=g(l))}else if(u===void 0){var f=a.get(t),c=f==null?void 0:f.v;if(f!==void 0&&c!==m)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return u},has(o,t){var c;if(t===B)return!0;var u=a.get(t),l=u!==void 0&&u.v!==m||Reflect.has(o,t);if(u!==void 0||L!==null&&(!l||(c=O(o,t))!=null&&c.writable)){u===void 0&&(u=P(l?I(o[t],d):m),a.set(t,u));var f=g(u);if(f===m)return!1}return l},set(o,t,u,l){var y;var f=a.get(t),c=t in o;if(i&&t==="length")for(var v=u;v<f.v;v+=1){var p=a.get(v+"");p!==void 0?E(p,m):v in o&&(p=P(m),a.set(v+"",p))}f===void 0?(!c||(y=O(o,t))!=null&&y.writable)&&(f=P(void 0),E(f,I(u,d)),a.set(t,f)):(c=f.v!==m,E(f,I(u,d)));var w=Reflect.getOwnPropertyDescriptor(o,t);if(w!=null&&w.set&&w.set.call(l,u),!c){if(i&&typeof t=="string"){var S=a.get("length"),b=Number(t);Number.isInteger(b)&&b>=S.v&&E(S,b+1)}J(_)}return!0},ownKeys(o){g(_);var t=Reflect.ownKeys(o).filter(f=>{var c=a.get(f);return c===void 0||c.v!==m});for(var[u,l]of a)l.v!==m&&!(u in o)&&t.push(u);return t},setPrototypeOf(){le()}})}function J(e,r=1){E(e,e.v+r)}const se=new Set,K=new Set;function He(e){for(var r=0;r<e.length;r++)se.add(e[r]);for(var n of K)n(e)}function M(e){var b;var r=this,n=r.ownerDocument,s=e.type,a=((b=e.composedPath)==null?void 0:b.call(e))||[],i=a[0]||e.target,_=0,d=e.__root;if(d){var o=a.indexOf(d);if(o!==-1&&(r===document||r===window)){e.__root=r;return}var t=a.indexOf(r);if(t===-1)return;o<=t&&(_=o)}if(i=a[_]||e.target,i!==r){de(e,"currentTarget",{configurable:!0,get(){return i||n}});var u=re,l=L;H(null),F(null);try{for(var f,c=[];i!==null;){var v=i.assignedSlot||i.parentNode||i.host||null;try{var p=i["__"+s];if(p!==void 0&&!i.disabled)if(ee(p)){var[w,...S]=p;w.apply(i,[e,...S])}else p.call(i,e)}catch(y){f?c.push(y):f=y}if(e.cancelBubble||v===r||v===null)break;i=v}if(f){for(let y of c)queueMicrotask(()=>{throw y});throw f}}finally{e.__root=r,delete e.currentTarget,H(u),F(l)}}}function xe(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function Y(e,r){var n=L;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=r)}function We(e,r){var n=(r&Fe)!==0,s=(r&Ve)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=xe(i?e:"<!>"+e),n||(a=W(a)));var _=s?document.importNode(a,!0):a.cloneNode(!0);if(n){var d=W(_),o=_.lastChild;Y(d,o)}else Y(_,_);return _}}function Ze(){var e=document.createDocumentFragment(),r=document.createComment(""),n=ne();return e.append(r,n),Y(r,n),e}function ke(e,r){e!==null&&e.before(r)}const Be=["touchstart","touchmove"];function qe(e){return Be.includes(e)}function ze(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function Je(e,r){return Ue(e,r)}const T=new Map;function Ue(e,{target:r,anchor:n,props:s={},events:a,context:i,intro:_=!0}){_e();var d=new Set,o=l=>{for(var f=0;f<l.length;f++){var c=l[f];if(!d.has(c)){d.add(c);var v=qe(c);r.addEventListener(c,M,{passive:v});var p=T.get(c);p===void 0?(document.addEventListener(c,M,{passive:v}),T.set(c,1)):T.set(c,p+1)}}};o(ve(se)),K.add(o);var t=void 0,u=pe(()=>{var l=n??r.appendChild(ne());return V(()=>{if(i){he({});var f=te;f.c=i}a&&(s.$$events=a),t=e(l,s)||{},i&&me()}),()=>{var v;for(var f of d){r.removeEventListener(f,M);var c=T.get(f);--c===0?(document.removeEventListener(f,M),T.delete(f)):T.set(f,c)}K.delete(o),$.delete(t),l!==n&&((v=l.parentNode)==null||v.removeChild(l))}});return $.set(t,u),t}let $=new WeakMap;function Qe(e){const r=$.get(e);r&&r()}function Xe(e,r,n,s=null,a=!1){var i=e,_=null,d=null,o=null,t=a?ie:0;ae(()=>{o!==(o=!!r())&&(o?(_?Z(_):_=V(()=>n(i)),d&&q(d,()=>{d=null})):(d?Z(d):s&&(d=V(()=>s(i))),_&&q(_,()=>{_=null})))},t)}function er(e,r,n){var s=e,a,i;ae(()=>{a!==(a=r())&&(i&&(q(i),i=null),a&&(i=V(()=>n(s,a))))},ie)}function rr(e=!1){const r=te,n=r.l.u;if(!n)return;let s=()=>ye(r.s);if(e){let a=0,i={};const _=j(()=>{let d=!1;const o=r.s;for(const t in o)o[t]!==i[t]&&(i[t]=o[t],d=!0);return d&&a++,a});s=()=>g(_)}n.b.length&&ge(()=>{Q(r,s),z(n.b)}),k(()=>{const a=U(()=>n.m.map(be));return()=>{for(const i of a)typeof i=="function"&&i()}}),n.a.length&&k(()=>{Q(r,s),z(n.a)})}function Q(e,r){if(e.l.s)for(const n of e.l.s)g(n);r()}let C=!1;function je(e){var r=C;try{return C=!1,[e(),C]}finally{C=r}}const Ke={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function nr(e,r,n){return new Proxy({props:e,exclude:r},Ke)}const Ye={get(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(A(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},set(e,r,n){let s=e.props.length;for(;s--;){let a=e.props[s];A(a)&&(a=a());const i=O(a,r);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(A(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s){const a=O(s,r);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,r){for(let n of e.props)if(A(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){A(n)&&(n=n());for(const s in n)r.includes(s)||r.push(s)}return r}};function tr(...e){return new Proxy({props:e},Ye)}function X(e){for(var r=L,n=L;r!==null&&!(r.f&(Se|Re));)r=r.parent;try{return F(r),e()}finally{F(n)}}function ar(e,r,n,s){var G;var a=(n&De)!==0,i=(n&Ae)!==0,_=(n&Me)!==0,d=(n&Ce)!==0,o=!1,t;_?[t,o]=je(()=>e[r]):t=e[r];var u=(G=O(e,r))==null?void 0:G.set,l=s,f=!0,c=!1,v=()=>(c=!0,f&&(f=!1,d?l=U(s):l=s),l);t===void 0&&s!==void 0&&(u&&i&&we(),t=v(),u&&u(t));var p;if(i)p=()=>{var h=e[r];return h===void 0?v():(f=!0,c=!1,h)};else{var w=X(()=>(a?j:Te)(()=>e[r]));w.f|=Ee,p=()=>{var h=g(w);return h!==void 0&&(l=void 0),h===void 0?l:h}}if(!(n&Le))return p;if(u){var S=e.$$legacy;return function(h,R){return arguments.length>0?((!i||!R||S||o)&&u(R?p():h),h):p()}}var b=!1,y=!1,x=Oe(t),N=X(()=>j(()=>{var h=p(),R=g(x),D=re;return b||h===void 0&&D.f&Ie?(b=!1,y=!0,R):(y=!1,x.v=h)}));return a||(N.equals=Pe),function(h,R){if(arguments.length>0){const D=R?g(N):i&&_?I(h):h;return N.equals(D)||(b=!0,E(x,D),c&&l!==void 0&&(l=D),U(()=>g(N))),h}return g(N)}}export{Ge as V,ke as a,Xe as b,I as c,He as d,Ze as e,er as f,tr as g,rr as i,Je as m,ar as p,nr as r,ze as s,We as t,Qe as u};