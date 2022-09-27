import{a as j,j as m,r as B,F as He}from"./jsx-runtime.dbfc5ac5.js";import{A as z}from"./index.4f4838b2.js";import{s as M,f as je,c as mt,a as ht}from"./theme.5982d854.js";import{B as X}from"./index.71c1de01.js";import{C as yt}from"./index.a787279f.js";import{I as gt,c as ke}from"./index.b764bf14.js";import{I as _e}from"./index.45f9cca8.js";import{L as St}from"./index.c9b869f6.js";import{c as Ve}from"./iframe.1c5e2e4d.js";import{C as $t}from"./index.9e6c8a1f.js";import{C as vt}from"./index.120aa995.js";import{I as _t}from"./index.b31eb432.js";import{M as ye}from"./index.c23b4f63.js";import{T as J}from"./index.e236a03f.js";import{T as xt}from"./index.3abe9ec3.js";import{T as Ye}from"./index.68d80b84.js";const Fe={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},be=M("h2",{...Fe,width:"100%",margin:0,typo:{size:20,weight:"$2",height:"$2"},color:"$black"}),Ue=M("p",{margin:0,typo:{},color:"$darkGrey"}),ze=M("div",{display:"flex",flexDirection:"column",alignItems:"center",padding:"48px 32px",textAlign:"center",[`& ${z.Container}`]:{marginBottom:"$4"},[`& ${be}`]:{marginBottom:8}}),Ct=({name:e,description:t,image:r})=>j(ze,{children:[m(z,{size:"large",image:r}),m(be,{children:e}),m(Ue,{children:t})]}),wt=Object.assign(Ct,{Container:ze,Title:be,Description:Ue});try{AssistantInfo.displayName="AssistantInfo",AssistantInfo.__docgenInfo={description:"",displayName:"AssistantInfo",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AssistantInfo/index.tsx#AssistantInfo"]={docgenInfo:AssistantInfo.__docgenInfo,name:"AssistantInfo",path:"src/components/AssistantInfo/index.tsx#AssistantInfo"})}catch{}const Ke=M("footer",{padding:"$3 $4 0 $4",borderRadius:"$1",[`& ${gt.Container}`]:{flex:1},[`& ${X.Base}`]:{width:"100%"},variants:{withShadow:{true:{boxShadow:"0 12px 48px $shadow16"}}}}),We=M("aside",{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px 0 $3 0",typo:{size:12,height:"17px"},color:"$darkGrey","& a":{marginLeft:"0.5ch",textDecoration:"none",color:"$primary","&:focus":{outline:0}}}),ie=({hasEnded:e,onStart:t,onSend:r})=>{const[n,s]=B.exports.useState("");return j(Ke,{withShadow:!e,children:[e?m(X,{onClick:t,children:"Start New Chat"}):m(yt,{value:n,placeholder:"Message\u2026",autoFocus:!0,onValueChange:s,onSend:()=>{!n||(r==null||r(n),s(""))}}),j(We,{children:["Conversation \u26A1\uFE0F by",m("a",{target:"_blank",href:"https://voiceflow.com",rel:"noreferrer",children:"Voiceflow"})]})]})},Ge=Object.assign(ie,{Container:Ke,Watermark:We});try{ie.displayName="Footer",ie.__docgenInfo={description:"",displayName:"Footer",props:{hasEnded:{defaultValue:null,description:"",name:"hasEnded",required:!1,type:{name:"boolean | undefined"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"((message: string) => void) | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Footer/index.tsx#Footer"]={docgenInfo:ie.__docgenInfo,name:"Footer",path:"src/components/Footer/index.tsx#Footer"})}catch{}const Ae=M("h1",{...Fe,typo:{size:17,weight:"$2",height:"$2"},color:"rgba(255,255,255,0.95)"}),Je=M("button",{display:"flex",justifyContent:"center",alignItems:"center",height:32,width:32,marginLeft:8,border:0,borderRadius:6,padding:0,background:"none",trans:["background-color"],"&:focus":{outline:0},"&:hover":{cursor:"pointer",backgroundColor:"rgba(255,255,255,0.16)",[`& ${_e.Frame}`]:{color:"$white"}},[`& ${_e.Frame}`]:{height:"$xxs",width:"$xxs",color:"rgba(255,255,255,0.8)",trans:["color"]}}),Xe=M("header",{display:"flex",flexShrink:0,alignItems:"center",height:"$lg",padding:"0 $4 0 $5",backgroundColor:"$primary",boxShadow:"0 1px 2px $shadow16",[`& ${z.Container}`]:{height:32,width:32},[`& ${Ae}`]:{flex:1,marginLeft:14}}),se=({title:e,image:t,actions:r=[]})=>j(Xe,{children:[m(z,{image:t}),m(Ae,{children:e}),r.map(({svg:n,onClick:s},c)=>m(Je,{onClick:s,children:m(_e,{svg:n})},c))]}),Ze=Object.assign(se,{Container:Xe,Title:Ae,Button:Je});try{se.displayName="Header",se.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"HeaderActionProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Header/index.tsx#Header"]={docgenInfo:se.__docgenInfo,name:"Header",path:"src/components/Header/index.tsx#Header"})}catch{}const Qe=M("div",{padding:"$4 $4 $3 $4",borderRadius:"$1",backgroundColor:"$white",boxShadow:"0 12px 48px 4px $shadow12",[`& ${X.Base}`]:{width:"100%",marginTop:"$1","&:first-of-type":{marginTop:0}}}),ue=({accept:e,cancel:t})=>j(Qe,{children:[m(X.Primary,{tabIndex:-1,...e,children:e.label}),m(X,{type:"subtle",tabIndex:-1,...t,children:t.label})]}),ce=Object.assign(ue,{Container:Qe});try{ue.displayName="Prompt",ue.__docgenInfo={description:"",displayName:"Prompt",props:{accept:{defaultValue:null,description:"",name:"accept",required:!0,type:{name:"PromptOptionProps"}},cancel:{defaultValue:null,description:"",name:"cancel",required:!0,type:{name:"PromptOptionProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Prompt/index.tsx#Prompt"]={docgenInfo:ue.__docgenInfo,name:"Prompt",path:"src/components/Prompt/index.tsx#Prompt"})}catch{}const Oe=B.exports.createContext({scrollToBottom:()=>{}}),{Consumer:Se}=Oe,le=({target:e,children:t})=>{const r=B.exports.useCallback(()=>{requestAnimationFrame(()=>{const s=e.current;if(!s)return;const{scrollTop:c,scrollHeight:g,clientHeight:C}=s,A=g-C;A!==c&&s.scrollTo({top:A})})},[]),n=B.exports.useMemo(()=>({scrollToBottom:r}),[r]);return m(Oe.Provider,{value:n,children:t})};try{Se.displayName="AutoScrollConsumer",Se.__docgenInfo={description:"",displayName:"AutoScrollConsumer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/contexts/AutoScrollContext.tsx#AutoScrollConsumer"]={docgenInfo:Se.__docgenInfo,name:"AutoScrollConsumer",path:"src/contexts/AutoScrollContext.tsx#AutoScrollConsumer"})}catch{}try{le.displayName="AutoScrollProvider",le.__docgenInfo={description:"",displayName:"AutoScrollProvider",props:{target:{defaultValue:null,description:"",name:"target",required:!0,type:{name:"RefObject<T>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/contexts/AutoScrollContext.tsx#AutoScrollProvider"]={docgenInfo:le.__docgenInfo,name:"AutoScrollProvider",path:"src/contexts/AutoScrollContext.tsx#AutoScrollProvider"})}catch{}var bt={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(Ve,function(){return function(r,n,s){r=r||{};var c=n.prototype,g={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function C(S,O,_,q){return c.fromToBase(S,O,_,q)}s.en.relativeTime=g,c.fromToBase=function(S,O,_,q,T){for(var u,$,l,E=_.$locale().relativeTime||g,y=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],b=y.length,I=0;I<b;I+=1){var v=y[I];v.d&&(u=q?s(S).diff(_,v.d,!0):_.diff(S,v.d,!0));var D=(r.rounding||Math.round)(Math.abs(u));if(l=u>0,D<=v.r||!v.r){D<=1&&I>0&&(v=y[I-1]);var K=E[v.l];T&&(D=T(""+D)),$=typeof K=="string"?K.replace("%d",D):K(D,O,v.l,l);break}}if(O)return $;var Y=l?E.future:E.past;return typeof Y=="function"?Y($):Y.replace("%s",$)},c.to=function(S,O){return C(S,O,this,!0)},c.from=function(S,O){return C(S,O,this)};var A=function(S){return S.$u?s.utc():s()};c.toNow=function(S){return this.to(A(this),S)},c.fromNow=function(S){return this.from(A(this),S)}}})})(bt);var et={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(Ve,function(){var r=1e3,n=6e4,s=36e5,c="millisecond",g="second",C="minute",A="hour",S="day",O="week",_="month",q="quarter",T="year",u="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},b=function(h,i,o){var d=String(h);return!d||d.length>=i?h:""+Array(i+1-d.length).join(o)+h},I={s:b,z:function(h){var i=-h.utcOffset(),o=Math.abs(i),d=Math.floor(o/60),a=o%60;return(i<=0?"+":"-")+b(d,2,"0")+":"+b(a,2,"0")},m:function h(i,o){if(i.date()<o.date())return-h(o,i);var d=12*(o.year()-i.year())+(o.month()-i.month()),a=i.clone().add(d,_),f=o-a<0,p=i.clone().add(d+(f?-1:1),_);return+(-(d+(o-a)/(f?a-p:p-a))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:_,y:T,w:O,d:S,D:u,h:A,m:C,s:g,ms:c,Q:q}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},v="en",D={};D[v]=y;var K=function(h){return h instanceof oe},Y=function h(i,o,d){var a;if(!i)return v;if(typeof i=="string"){var f=i.toLowerCase();D[f]&&(a=f),o&&(D[f]=o,a=f);var p=i.split("-");if(!a&&p.length>1)return h(p[0])}else{var x=i.name;D[x]=i,a=x}return!d&&a&&(v=a),a||!d&&v},P=function(h,i){if(K(h))return h.clone();var o=typeof i=="object"?i:{};return o.date=h,o.args=arguments,new oe(o)},w=I;w.l=Y,w.i=K,w.w=function(h,i){return P(h,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var oe=function(){function h(o){this.$L=Y(o.locale,null,!0),this.parse(o)}var i=h.prototype;return i.parse=function(o){this.$d=function(d){var a=d.date,f=d.utc;if(a===null)return new Date(NaN);if(w.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var p=a.match(l);if(p){var x=p[2]-1||0,L=(p[7]||"0").substring(0,3);return f?new Date(Date.UTC(p[1],x,p[3]||1,p[4]||0,p[5]||0,p[6]||0,L)):new Date(p[1],x,p[3]||1,p[4]||0,p[5]||0,p[6]||0,L)}}return new Date(a)}(o),this.$x=o.x||{},this.init()},i.init=function(){var o=this.$d;this.$y=o.getFullYear(),this.$M=o.getMonth(),this.$D=o.getDate(),this.$W=o.getDay(),this.$H=o.getHours(),this.$m=o.getMinutes(),this.$s=o.getSeconds(),this.$ms=o.getMilliseconds()},i.$utils=function(){return w},i.isValid=function(){return this.$d.toString()!==$},i.isSame=function(o,d){var a=P(o);return this.startOf(d)<=a&&a<=this.endOf(d)},i.isAfter=function(o,d){return P(o)<this.startOf(d)},i.isBefore=function(o,d){return this.endOf(d)<P(o)},i.$g=function(o,d,a){return w.u(o)?this[d]:this.set(a,o)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(o,d){var a=this,f=!!w.u(d)||d,p=w.p(o),x=function(Z,H){var U=w.w(a.$u?Date.UTC(a.$y,H,Z):new Date(a.$y,H,Z),a);return f?U:U.endOf(S)},L=function(Z,H){return w.w(a.toDate()[Z].apply(a.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(H)),a)},R=this.$W,N=this.$M,F=this.$D,V="set"+(this.$u?"UTC":"");switch(p){case T:return f?x(1,0):x(31,11);case _:return f?x(1,N):x(0,N+1);case O:var ee=this.$locale().weekStart||0,te=(R<ee?R+7:R)-ee;return x(f?F-te:F+(6-te),N);case S:case u:return L(V+"Hours",0);case A:return L(V+"Minutes",1);case C:return L(V+"Seconds",2);case g:return L(V+"Milliseconds",3);default:return this.clone()}},i.endOf=function(o){return this.startOf(o,!1)},i.$set=function(o,d){var a,f=w.p(o),p="set"+(this.$u?"UTC":""),x=(a={},a[S]=p+"Date",a[u]=p+"Date",a[_]=p+"Month",a[T]=p+"FullYear",a[A]=p+"Hours",a[C]=p+"Minutes",a[g]=p+"Seconds",a[c]=p+"Milliseconds",a)[f],L=f===S?this.$D+(d-this.$W):d;if(f===_||f===T){var R=this.clone().set(u,1);R.$d[x](L),R.init(),this.$d=R.set(u,Math.min(this.$D,R.daysInMonth())).$d}else x&&this.$d[x](L);return this.init(),this},i.set=function(o,d){return this.clone().$set(o,d)},i.get=function(o){return this[w.p(o)]()},i.add=function(o,d){var a,f=this;o=Number(o);var p=w.p(d),x=function(N){var F=P(f);return w.w(F.date(F.date()+Math.round(N*o)),f)};if(p===_)return this.set(_,this.$M+o);if(p===T)return this.set(T,this.$y+o);if(p===S)return x(1);if(p===O)return x(7);var L=(a={},a[C]=n,a[A]=s,a[g]=r,a)[p]||1,R=this.$d.getTime()+o*L;return w.w(R,this)},i.subtract=function(o,d){return this.add(-1*o,d)},i.format=function(o){var d=this,a=this.$locale();if(!this.isValid())return a.invalidDate||$;var f=o||"YYYY-MM-DDTHH:mm:ssZ",p=w.z(this),x=this.$H,L=this.$m,R=this.$M,N=a.weekdays,F=a.months,V=function(H,U,ge,ae){return H&&(H[U]||H(d,f))||ge[U].slice(0,ae)},ee=function(H){return w.s(x%12||12,H,"0")},te=a.meridiem||function(H,U,ge){var ae=H<12?"AM":"PM";return ge?ae.toLowerCase():ae},Z={YY:String(this.$y).slice(-2),YYYY:this.$y,M:R+1,MM:w.s(R+1,2,"0"),MMM:V(a.monthsShort,R,F,3),MMMM:V(F,R),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:V(a.weekdaysMin,this.$W,N,2),ddd:V(a.weekdaysShort,this.$W,N,3),dddd:N[this.$W],H:String(x),HH:w.s(x,2,"0"),h:ee(1),hh:ee(2),a:te(x,L,!0),A:te(x,L,!1),m:String(L),mm:w.s(L,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:p};return f.replace(E,function(H,U){return U||Z[H]||p.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(o,d,a){var f,p=w.p(d),x=P(o),L=(x.utcOffset()-this.utcOffset())*n,R=this-x,N=w.m(this,x);return N=(f={},f[T]=N/12,f[_]=N,f[q]=N/3,f[O]=(R-L)/6048e5,f[S]=(R-L)/864e5,f[A]=R/s,f[C]=R/n,f[g]=R/r,f)[p]||R,a?N:w.a(N)},i.daysInMonth=function(){return this.endOf(_).$D},i.$locale=function(){return D[this.$L]},i.locale=function(o,d){if(!o)return this.$L;var a=this.clone(),f=Y(o,d,!0);return f&&(a.$L=f),a},i.clone=function(){return w.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},h}(),Me=oe.prototype;return P.prototype=Me,[["$ms",c],["$s",g],["$m",C],["$H",A],["$W",S],["$M",_],["$y",T],["$D",u]].forEach(function(h){Me[h[1]]=function(i){return this.$g(i,h[0],h[1])}}),P.extend=function(h,i){return h.$i||(h(i,oe,P),h.$i=!0),P},P.locale=Y,P.isDayjs=K,P.unix=function(h){return P(1e3*h)},P.en=D[v],P.Ls=D,P.p={},P})})(et);const Le=et.exports,At=e=>B.exports.useMemo(()=>{if(!e)return null;const t=Le(e),r=Le();switch(!0){case r.isSame(t,"day"):return"Today";case r.subtract(1,"day").isSame(t,"day"):return"Yesterday";default:return t.fromNow()}},[e]);var Ot=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,s=t.length,c;n<s;n++)(c||!(n in t))&&(c||(c=Array.prototype.slice.call(t,0,n)),c[n]=t[n]);return e.concat(c||Array.prototype.slice.call(t))};function Tt(e,t,r){var n=e.length-t.length,s=Array.from(t);if(n===0)return e.apply(void 0,s);if(n===1){var c=function(g){return e.apply(void 0,Ot([g],s,!1))};return(r||e.lazy)&&(c.lazy=r||e.lazy,c.lazyArgs=t),c}throw new Error("Wrong number of arguments")}var Et=function(){};function De(){return Tt(It,arguments)}function It(e,t){var r=new Set(t);return Object.entries(e).reduce(function(n,s){var c=s[0],g=s[1];return r.has(c)||(n[c]=g),n},{})}const xe=Symbol("@ts-pattern/matcher"),Pe="@ts-pattern/anonymous-select-key",Ne=e=>Boolean(e&&typeof e=="object"),$e=e=>e&&!!e[xe],re=(e,t,r)=>{if(Ne(e)){if($e(e)){const n=e[xe](),{matched:s,selections:c}=n.match(t);return s&&c&&Object.keys(c).forEach(g=>r(g,c[g])),s}if(!Ne(t))return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.every((n,s)=>re(n,t[s],r));if(e instanceof Map)return t instanceof Map&&Array.from(e.keys()).every(n=>re(e.get(n),t.get(n),r));if(e instanceof Set){if(!(t instanceof Set))return!1;if(e.size===0)return t.size===0;if(e.size===1){const[n]=Array.from(e.values());return $e(n)?Array.from(t.values()).every(s=>re(n,s,r)):t.has(n)}return Array.from(e.values()).every(n=>t.has(n))}return Object.keys(e).every(n=>{const s=e[n];return(n in t||$e(c=s)&&c[xe]().matcherType==="optional")&&re(s,t[n],r);var c})}return Object.is(t,e)},tt=e=>new ne(e,[]);class ne{constructor(t,r){this.value=void 0,this.cases=void 0,this.value=t,this.cases=r}with(...t){const r=t[t.length-1],n=[t[0]],s=[];return t.length===3&&typeof t[1]=="function"?(n.push(t[0]),s.push(t[1])):t.length>2&&n.push(...t.slice(1,t.length-1)),new ne(this.value,this.cases.concat([{match:c=>{let g={};const C=Boolean(n.some(A=>re(A,c,(S,O)=>{g[S]=O}))&&s.every(A=>A(c)));return{matched:C,value:C&&Object.keys(g).length?Pe in g?g[Pe]:g:c}},handler:r}]))}when(t,r){return new ne(this.value,this.cases.concat([{match:n=>({matched:Boolean(t(n)),value:n}),handler:r}]))}otherwise(t){return new ne(this.value,this.cases.concat([{match:r=>({matched:!0,value:r}),handler:t}])).run()}exhaustive(){return this.run()}run(){let t,r=this.value;for(let n=0;n<this.cases.length;n++){const s=this.cases[n],c=s.match(this.value);if(c.matched){r=c.value,t=s.handler;break}}if(!t){let n;try{n=JSON.stringify(this.value)}catch{n=this.value}throw new Error(`Pattern matching error: no pattern matches value ${n}`)}return t(r,this.value)}}const rt=(e=[])=>{const{scrollToBottom:t}=B.exports.useContext(Oe);B.exports.useLayoutEffect(()=>{t()},e)};var nt={exports:{}};/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var Rt=Mt;function Mt(e){if(!e)throw new TypeError("argument namespace is required");function t(r){}return t._file=void 0,t._ignored=!0,t._namespace=e,t._traced=!1,t._warned=Object.create(null),t.function=Lt,t.property=Dt,t}function Lt(e,t){if(typeof e!="function")throw new TypeError("argument fn must be a function");return e}function Dt(e,t,r){if(!e||typeof e!="object"&&typeof e!="function")throw new TypeError("argument obj must be object");var n=Object.getOwnPropertyDescriptor(e,t);if(!n)throw new TypeError("must call property on owner object");if(!n.configurable)throw new TypeError("property must be configurable")}var Pt=Object.setPrototypeOf||({__proto__:[]}instanceof Array?Nt:Bt);function Nt(e,t){return e.__proto__=t,e}function Bt(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(e,r)||(e[r]=t[r]);return e}const qt={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"};/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */var Te=qt,Ht=k;k.message=Te;k.code=jt(Te);k.codes=kt(Te);k.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0};k.empty={204:!0,205:!0,304:!0};k.retry={502:!0,503:!0,504:!0};function jt(e){var t={};return Object.keys(e).forEach(function(n){var s=e[n],c=Number(n);t[s.toLowerCase()]=c}),t}function kt(e){return Object.keys(e).map(function(r){return Number(r)})}function Vt(e){var t=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(k.code,t))throw new Error('invalid status message: "'+e+'"');return k.code[t]}function Be(e){if(!Object.prototype.hasOwnProperty.call(k.message,e))throw new Error("invalid status code: "+e);return k.message[e]}function k(e){if(typeof e=="number")return Be(e);if(typeof e!="string")throw new TypeError("code must be a number or string");var t=parseInt(e,10);return isNaN(t)?Vt(e):Be(t)}var Ce={exports:{}};typeof Object.create=="function"?Ce.exports=function(t,r){r&&(t.super_=r,t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:Ce.exports=function(t,r){if(r){t.super_=r;var n=function(){};n.prototype=r.prototype,t.prototype=new n,t.prototype.constructor=t}};/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */var Yt=Ft;function Ft(e){return e.split(" ").map(function(t){return t.slice(0,1).toUpperCase()+t.slice(1)}).join("").replace(/[^ _0-9a-z]/gi,"")}/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */(function(e){Rt("http-errors");var t=Pt,r=Ht,n=Ce.exports,s=Yt;e.exports=g,e.exports.HttpError=C(),e.exports.isHttpError=S(e.exports.HttpError),q(e.exports,r.codes,e.exports.HttpError);function c(u){return Number(String(u).charAt(0)+"00")}function g(){for(var u,$,l=500,E={},y=0;y<arguments.length;y++){var b=arguments[y],I=typeof b;if(I==="object"&&b instanceof Error)u=b,l=u.status||u.statusCode||l;else if(I==="number"&&y===0)l=b;else if(I==="string")$=b;else if(I==="object")E=b;else throw new TypeError("argument #"+(y+1)+" unsupported type "+I)}(typeof l!="number"||!r.message[l]&&(l<400||l>=600))&&(l=500);var v=g[l]||g[c(l)];u||(u=v?new v($):new Error($||r.message[l]),Error.captureStackTrace(u,g)),(!v||!(u instanceof v)||u.status!==l)&&(u.expose=l<500,u.status=u.statusCode=l);for(var D in E)D!=="status"&&D!=="statusCode"&&(u[D]=E[D]);return u}function C(){function u(){throw new TypeError("cannot construct abstract class")}return n(u,Error),u}function A(u,$,l){var E=T($);function y(b){var I=b!=null?b:r.message[l],v=new Error(I);return Error.captureStackTrace(v,y),t(v,y.prototype),Object.defineProperty(v,"message",{enumerable:!0,configurable:!0,value:I,writable:!0}),Object.defineProperty(v,"name",{enumerable:!1,configurable:!0,value:E,writable:!0}),v}return n(y,u),_(y,E),y.prototype.status=l,y.prototype.statusCode=l,y.prototype.expose=!0,y}function S(u){return function(l){return!l||typeof l!="object"?!1:l instanceof u?!0:l instanceof Error&&typeof l.expose=="boolean"&&typeof l.statusCode=="number"&&l.status===l.statusCode}}function O(u,$,l){var E=T($);function y(b){var I=b!=null?b:r.message[l],v=new Error(I);return Error.captureStackTrace(v,y),t(v,y.prototype),Object.defineProperty(v,"message",{enumerable:!0,configurable:!0,value:I,writable:!0}),Object.defineProperty(v,"name",{enumerable:!1,configurable:!0,value:E,writable:!0}),v}return n(y,u),_(y,E),y.prototype.status=l,y.prototype.statusCode=l,y.prototype.expose=!1,y}function _(u,$){var l=Object.getOwnPropertyDescriptor(u,"name");l&&l.configurable&&(l.value=$,Object.defineProperty(u,"name",l))}function q(u,$,l){$.forEach(function(y){var b,I=s(r.message[y]);switch(c(y)){case 400:b=A(l,I,y);break;case 500:b=O(l,I,y);break}b&&(u[y]=b,u[I]=b)})}function T(u){return u.substr(-5)!=="Error"?u+"Error":u}})(nt);const dr=nt.exports;var G=(e=>(e.TEXT="text",e.IMAGE="image",e.CARD="card",e.CAROUSEL="carousel",e))(G||{});const Ut={type:"indicator"},zt={type:"actions"},Kt=(e,t)=>B.exports.useMemo(()=>{const r=e.flatMap(s=>[Ut,{type:"message",message:s}]),n=t?[zt]:[];return[...r,...n]},[]),Wt=({messages:e,messageDelay:t,isAnimated:r,hasActions:n,onAnimationEnd:s})=>{const c=r&&e.length,[g,C]=B.exports.useState(!1),[A,S]=B.exports.useState(!c),[O,_]=B.exports.useState(c?[]:e),q=Kt(e,n);return B.exports.useEffect(()=>{if(!c)return;const T=[...q];let u;const $=E=>{u=setTimeout(()=>{E()},t/2)},l=()=>{const E=T.shift();!E||tt(E).with({type:"message"},({message:y})=>{C(!1),_(b=>[...b,y]),$(l),T.length||s()}).with({type:"indicator"},()=>{C(!0),$(l)}).with({type:"actions"},()=>{C(!1),S(!0),s()}).exhaustive()};return l(),()=>{clearTimeout(u)}},[]),{showIndicator:g,showActions:A,visibleMessages:O}},ot=M("div",{display:"flex",flexWrap:"wrap",marginBottom:"$5",padding:"0 $5 0 34px",[`& ${X.Base}`]:{height:"unset",paddingTop:7,paddingBottom:7,marginTop:8,marginRight:8,whiteSpace:"normal",textAlign:"start"}}),Ee=M("div",{display:"flex",[`& ${z.Container}`]:{visibility:"hidden",alignSelf:"flex-end",margin:"0 8px 4px 0"},[`& ${J.Container}`]:{alignSelf:"center",whiteSpace:"nowrap",marginLeft:8,opacity:"0%",trans:["opacity"]},[`&:hover ${J.Container}`]:{opacity:"100%"},variants:{withImage:{true:{[`& ${z.Container}`]:{visibility:"visible"}}},scrollable:{true:{overflowX:"scroll",flexShrink:0,[`& ${J.Container}`]:{marginRight:"2.5px"}}},center:{true:{alignItems:"center"}}}}),at=M("div",{display:"flex",flexDirection:"column",flexShrink:0,[`& ${ye.Container}`]:{marginBottom:"$1",maxWidth:248,"&:last-of-type":{marginBottom:0}}}),de=({image:e})=>j(Ee,{withImage:!0,center:!0,children:[m(z,{image:e}),m(xt,{})]}),it=de;try{de.displayName="Indicator",de.__docgenInfo={description:"",displayName:"Indicator",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/Indicator.tsx#Indicator"]={docgenInfo:de.__docgenInfo,name:"Indicator",path:"src/components/SystemResponse/Indicator.tsx#Indicator"})}catch{}const pe=({image:e,timestamp:t,messages:r,messageDelay:n,actions:s=[],isLive:c=!1,onAnimationEnd:g=Et})=>{const[C,A]=B.exports.useState(!c),{showIndicator:S,showActions:O,visibleMessages:_}=Wt({messages:r,messageDelay:n,isAnimated:c,hasActions:!!s.length,onAnimationEnd:g}),q=()=>A(!0);return rt([S,O,_.length]),r.length?j(He,{children:[_.map((T,u)=>j(Ee,{withImage:!S&&u===_.length-1,scrollable:T.type===G.CAROUSEL,children:[m(z,{image:e}),m(at,{children:tt(T).with({type:G.TEXT},({text:$})=>m(ye,{from:"system",children:$},u)).with({type:G.IMAGE},({url:$})=>m(_t,{image:$})).with({type:G.CARD},$=>m($t,{...De($,["type"])})).with({type:G.CAROUSEL},$=>m(vt,{...De($,["type"])})).otherwise(()=>null)}),m(J,{value:t})]},u)),O&&!C&&m(ot,{children:s.map(({label:T,onClick:u},$)=>m(X,{variant:"secondary",onClick:ke(u,q),children:T},$))}),S&&m(it,{image:e})]}):null},W=Object.assign(pe,{Message:G,Container:Ee,List:at,Actions:ot,Indicator:it});try{pe.displayName="SystemResponse",pe.__docgenInfo={description:"",displayName:"SystemResponse",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"Date"}},messages:{defaultValue:null,description:"",name:"messages",required:!0,type:{name:"MessageProps[]"}},messageDelay:{defaultValue:null,description:"",name:"messageDelay",required:!0,type:{name:"number"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"ResponseActionProps[]"}},isLive:{defaultValue:null,description:"",name:"isLive",required:!1,type:{name:"boolean"}},onAnimationEnd:{defaultValue:{value:"R.noop"},description:"",name:"onAnimationEnd",required:!1,type:{name:"VoidFunction"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/index.tsx#SystemResponse"]={docgenInfo:pe.__docgenInfo,name:"SystemResponse",path:"src/components/SystemResponse/index.tsx#SystemResponse"})}catch{}const st=M("aside",{typo:{size:"12px",height:"17px"},color:"$darkGrey",marginTop:"$2"}),ut=M("div",{display:"flex",flexDirection:"column",flexShrink:0,alignItems:"flex-end",[`& ${ye.Container}`]:{maxWidth:282},[`& > ${Ye.Container}`]:{marginTop:"$1"}}),ct=M("div",{display:"flex",width:"100%",alignItems:"center",[`& ${J.Container}`]:{flexGrow:1,marginRight:8,textAlign:"end",opacity:"0%",trans:["opacity"]},[`&:hover ${J.Container}`]:{opacity:"100%"}}),fe=({message:e,timestamp:t,debug:r})=>{var n,s;return rt(),j(ut,{children:[j(ct,{children:[m(J,{value:t}),m(ye,{from:"user",children:e})]}),r&&j(He,{children:[m(st,{children:r.message}),r.reason&&m(Ye,{label:(n=r.action)==null?void 0:n.label,onClick:(s=r.action)==null?void 0:s.onClick,orientation:"right",children:r.reason})]})]})},Q=Object.assign(fe,{Container:ut,Debug:st,Row:ct});try{fe.displayName="UserResponse",fe.__docgenInfo={description:"",displayName:"UserResponse",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"Date"}},debug:{defaultValue:null,description:"",name:"debug",required:!1,type:{name:"DebugResponseProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/UserResponse/index.tsx#UserResponse"]={docgenInfo:fe.__docgenInfo,name:"UserResponse",path:"src/components/UserResponse/index.tsx#UserResponse"})}catch{}const ve=10,qe=16,lt=(e,t)=>({opacity:0,transform:`translateY(${qe}px)`,animation:[je,ht(qe)].map(r=>`${r} ${e}ms ease-out ${t}ms forwards`).join(", ")}),he=M("div",{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:0,backgroundColor:"$shadow12"}),we=M("article",{position:"relative",display:"flex",flexDirection:"column",width:380,borderRadius:"$2",overflow:"hidden",backgroundColor:"$white",boxShadow:"0 2px 48px rgba(19,33,68,0.12), 0 0 0 1px $shadow4",[`& ${Ze.Container}`]:{animation:`${je} 500ms ease-out`},[`& ${Ge.Container}`]:{...lt(300,300)},[`& ${he}`]:{opacity:0,pointerEvents:"none",trans:["opacity"]},[`& ${ce.Container}`]:{position:"absolute",bottom:0,width:"100%",boxSizing:"border-box",paddingBottom:`calc($3 + ${ve}px)`,transition:`transform 320ms cubic-bezier(0.45, 1.29, 0.64, 1), ${mt(["box-shadow"],300)}`,transform:`translateY(calc(100% + ${ve}px))`},variants:{withPrompt:{true:{[`& ${he}`]:{opacity:1,pointerEvents:"auto"},[`& ${ce.Container}`]:{transform:`translateY(${ve}px)`}},false:{[`& ${ce.Container}`]:{boxShadow:"none"}}}}}),dt={display:"flex",justifyContent:"center",typo:{size:12},color:"$darkGrey"},Ie=M("div",{...dt}),Re=M("span",{...dt,paddingBottom:"$3"}),pt=M("main",{display:"flex",flexDirection:"column",height:"100%",overflowY:"scroll",overflowX:"hidden",paddingBottom:"$3",[`
    & ${Q.Container},
    & ${W.List},
    & ${W.Actions},
    & ${Re}
  `]:{...lt(400,150)},[`
    & > ${Q.Container},
    & > ${W.Container}
  `]:{padding:"0 $5"},[`& > ${W.Actions}`]:{padding:"0 $5 0 54px"},[`& ${W.Container}`]:{marginBottom:"$1","&:last-of-type":{marginBottom:0}},[`& ${Q.Container} + ${Q.Container}`]:{marginTop:"$1"},[`
    & ${W.Container} + ${Q.Container},
    & ${Q.Container} + ${W.Container}
  `]:{marginTop:"$5"},[`& ${Ie}`]:{marginTop:"$3",marginBottom:8}}),ft=M("div",{flexGrow:1}),me=({hasEnded:e,title:t,image:r,description:n,startTime:s,isLoading:c,onMinimize:g,onEnd:C,onStart:A,onSend:S,children:O})=>{const _=At(s),q=B.exports.useRef(null),[T,u]=B.exports.useState(!1),$=E=>{e?C==null||C(E):u(!0)},l=()=>u(!1);return c?m(we,{children:m(St,{})}):j(we,{withPrompt:T,children:[m(Ze,{title:t,image:r,actions:[{svg:"minus",onClick:g},{svg:"close",onClick:$}]}),m(pt,{ref:q,children:j(le,{target:q,children:[m(wt,{name:t,image:r,description:n}),m(ft,{}),!!_&&m(Re,{children:_}),O,e&&m(Ie,{children:"You have ended the chat"})]})}),m(Ge,{hasEnded:e,onStart:A,onSend:S}),m(he,{}),m(ce,{accept:{label:"End Chat",type:"warn",onClick:ke(C,l)},cancel:{label:"Cancel",onClick:l}})]})},pr=Object.assign(B.exports.memo(me),{Container:we,Dialog:pt,Overlay:he,Spacer:ft,Status:Ie,Timestamp:Re});try{me.displayName="Chat",me.__docgenInfo={description:"",displayName:"Chat",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},startTime:{defaultValue:null,description:"",name:"startTime",required:!1,type:{name:"Nullish<Date>"}},onMinimize:{defaultValue:null,description:"",name:"onMinimize",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"HeaderActionProps[]"}},hasEnded:{defaultValue:null,description:"",name:"hasEnded",required:!1,type:{name:"boolean | undefined"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"((message: string) => void) | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Chat/index.tsx#Chat"]={docgenInfo:me.__docgenInfo,name:"Chat",path:"src/components/Chat/index.tsx#Chat"})}catch{}export{wt as A,pr as C,Ge as F,Ze as H,tt as K,ce as P,W as S,Q as U,dr as c,De as o};
//# sourceMappingURL=index.43053e2e.js.map
