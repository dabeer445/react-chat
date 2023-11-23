import{a as I,j as c,r as _,F as ce,R as Bt}from"./jsx-runtime.05933d23.js";import{A as K}from"./index.ab2a4870.js";import{t as Y,C as P,s as S,f as Dt,a as Qe,c as Lt}from"./animation.7d1fc948.js";import{B as W}from"./index.a041c720.js";import{C as Nt}from"./index.897dca89.js";import{I as Vt,c as Yt}from"./index.16392465.js";import{I as j,S as We}from"./index.cae1c549.js";import{L as et}from"./index.b53f56aa.js";import{A as Pt,C as Le,a as Ht,F as pe,R as tt,S as Ft,M as Q,b as qt}from"./index.0992fa74.js";import{c as nt}from"./iframe.8a8cce3b.js";import{T as Ut}from"./index.25ca499e.js";import{M as Ne}from"./index.7792cc74.js";import{T as ee}from"./index.dfa09fb4.js";import{r as jt}from"./index.577e057f.js";import{I as Kt}from"./index.06d50962.js";import{D as Wt}from"./index.6905aefb.js";import"./index.484a71f2.js";import{T as rt}from"./index.a99e3335.js";const ot={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},Ve=Y(P.ASSISTANT_INFO),Ye=S(Ve("h2","title"),{...ot,width:"100%",margin:0,typo:{size:20,weight:"$2",height:"$3"},color:"$black"}),at=S(Ve("p","description"),{display:"-webkit-box",margin:0,typo:{},color:"$darkGrey","-webkit-line-clamp":2,"-webkit-box-orient":"vertical",overflow:"hidden",wordBreak:"break-word"}),st=S(Ve("div"),{display:"flex",flexDirection:"column",alignItems:"center",padding:"48px 32px",textAlign:"center",[`& ${K.Container}`]:{marginBottom:"$4"},[`& ${Ye}`]:{marginBottom:8}}),fe=({title:e,description:t,avatar:r})=>I(st,{children:[c(K,{size:"large",avatar:r}),c(Ye,{children:e}),c(at,{children:t})]}),it=Object.assign(fe,{Container:st,Title:Ye,Description:at});try{fe.displayName="AssistantInfo",fe.__docgenInfo={description:`This component displays introductory information about the assistant.
It will act as a placeholder before the conversation has started.`,displayName:"AssistantInfo",props:{title:{defaultValue:null,description:"The title of the assistant.",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"A short description of the assistant to help frame the conversation.",name:"description",required:!0,type:{name:"string"}},avatar:{defaultValue:null,description:"An image URL that identifies the assistant, such as a brand icon.",name:"avatar",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AssistantInfo/index.tsx#AssistantInfo"]={docgenInfo:fe.__docgenInfo,name:"AssistantInfo",path:"src/components/AssistantInfo/index.tsx#AssistantInfo"})}catch{}const lt=Y(P.FOOTER),ct=S(lt("footer"),{padding:"$3 $4 $4 $4",borderRadius:"$1",[`& ${Vt.Container}`]:{flex:1},[`& ${W.Container}`]:{width:"100%"},variants:{withShadow:{true:{boxShadow:"0 12px 48px $shadow16"}},withWatermark:{true:{paddingBottom:"0"}}}}),dt=S(lt("aside","watermark"),{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px 0 $3 0",typo:{size:12,height:"17px"},color:"$darkGrey","& a":{marginLeft:"0.5ch",textDecoration:"none",color:"$blue","&:focus":{outline:0}}}),me=({withWatermark:e,hasEnded:t,onStart:r,onSend:n})=>{const[l,s]=_.exports.useState("");return I(ct,{withShadow:!!t,withWatermark:e,children:[t?c(W,{onClick:r,children:"Start New Chat"}):c(Nt,{value:l,placeholder:"Message\u2026",autoFocus:!0,onValueChange:s,onSend:()=>{!l||(n==null||n(l),s(""))}}),e&&I(dt,{children:["Assistant \u26A1\uFE0F by",c("a",{target:"_blank",href:"https://voiceflow.com",rel:"noreferrer",children:"Voiceflow"})]})]})},ut=Object.assign(me,{Container:ct,Watermark:dt});try{me.displayName="Footer",me.__docgenInfo={description:"Footer for the chat widget; displays input controls or a prompt to restart the conversation.",displayName:"Footer",props:{withWatermark:{defaultValue:null,description:"If true, shows a watermark indicating that the conversation is powered by Voiceflow.",name:"withWatermark",required:!0,type:{name:"boolean"}},hasEnded:{defaultValue:null,description:`If true, shows a prompt to start a new chat by calling the {@link onStart} handler.
If false, renders controls for the user to write a response.`,name:"hasEnded",required:!1,type:{name:"boolean"}},onStart:{defaultValue:null,description:"A callback to start a new conversation.",name:"onStart",required:!1,type:{name:"() => Promise<void>"}},onSend:{defaultValue:null,description:"A callback to submit a user response.",name:"onSend",required:!1,type:{name:"(message: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Footer/index.tsx#Footer"]={docgenInfo:me.__docgenInfo,name:"Footer",path:"src/components/Footer/index.tsx#Footer"})}catch{}const Pe=Y(P.HEADER),He=S(Pe("h1","title"),{...ot,typo:{size:17,weight:"$2",height:"$2"},color:"rgba(255,255,255,0.95)"}),pt=S(Pe(W.Reset,"button"),{display:"flex",justifyContent:"center",alignItems:"center",height:32,width:32,marginLeft:8,borderRadius:6,background:"none",trans:["background-color"],"&:hover":{backgroundColor:"rgba(255,255,255,0.16)",[`& ${j.Frame}`]:{color:"$white"}},[`& ${j.Frame}`]:{height:"$xxs",width:"$xxs",color:"rgba(255,255,255,0.8)",trans:["color"]}}),ht=S(Pe("header"),{display:"flex",flexShrink:0,alignItems:"center",height:"$lg",padding:"0 $4 0 $5",backgroundColor:"$primary",boxShadow:"0 1px 2px $shadow16",[`& ${K.Container}`]:{height:32,width:32},[`& ${He}`]:{flex:1,margin:"0 0 0 14px"}}),ge=({title:e,image:t,actions:r=[]})=>I(ht,{children:[c(K,{avatar:t}),c(He,{children:e}),r.map(({svg:n,onClick:l},s)=>c(pt,{onClick:l,children:c(j,{svg:n})},s))]}),ft=Object.assign(ge,{Container:ht,Title:He,Button:pt});try{ge.displayName="Header",ge.__docgenInfo={description:"Header for the chat widget with image, title and controls.",displayName:"Header",props:{title:{defaultValue:null,description:"The name of your assistant or title of the conversation.",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"An image URL that will be rendered as a small {@link Avatar}.",name:"image",required:!0,type:{name:"string"}},actions:{defaultValue:{value:"[]"},description:"A list of actions that will appear as icon buttons.",name:"actions",required:!1,type:{name:"HeaderActionProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Header/index.tsx#Header"]={docgenInfo:ge.__docgenInfo,name:"Header",path:"src/components/Header/index.tsx#Header"})}catch{}const zt=Y(P.PROMPT),mt=S(zt("div"),{padding:"$4 $4 $3 $4",borderRadius:"$1",backgroundColor:"$white",boxShadow:"0 12px 48px 4px $shadow12",[`& ${W.Container}`]:{width:"100%",marginTop:"$1","&:first-of-type":{marginTop:0}}}),ye=({accept:e,cancel:t})=>I(mt,{children:[c(W.Primary,{tabIndex:-1,...e,children:e.label}),c(W,{type:"subtle",tabIndex:-1,...t,children:t.label})]}),$e=Object.assign(ye,{Container:mt});try{ye.displayName="Prompt",ye.__docgenInfo={description:"A popup that prompts the user with cancel and accept actions.",displayName:"Prompt",props:{accept:{defaultValue:null,description:'Configuration for the "accept" action.',name:"accept",required:!0,type:{name:"PromptOptionProps"}},cancel:{defaultValue:null,description:'Configuration for the "cancel" action.',name:"cancel",required:!0,type:{name:"PromptOptionProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Prompt/index.tsx#Prompt"]={docgenInfo:ye.__docgenInfo,name:"Prompt",path:"src/components/Prompt/index.tsx#Prompt"})}catch{}var Gt=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,l=t.length,s;n<l;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))};function Jt(e,t,r){var n=e.length-t.length,l=Array.from(t);if(n===0)return e.apply(void 0,l);if(n===1){var s=function(d){return e.apply(void 0,Gt([d],l,!1))};return(r||e.lazy)&&(s.lazy=r||e.lazy,s.lazyArgs=t),s}throw new Error("Wrong number of arguments")}function ze(){return Jt(Xt,arguments)}function Xt(e,t){var r=new Set(t);return Object.entries(e).reduce(function(n,l){var s=l[0],d=l[1];return r.has(s)||(n[s]=d),n},{})}var gt={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(nt,function(){var r=1e3,n=6e4,l=36e5,s="millisecond",d="second",x="minute",g="hour",u="day",y="week",$="month",C="quarter",b="year",A="date",E="Invalid Date",L=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,H={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},G=function(m,i,o){var p=String(m);return!p||p.length>=i?m:""+Array(i+1-p.length).join(o)+m},J={s:G,z:function(m){var i=-m.utcOffset(),o=Math.abs(i),p=Math.floor(o/60),a=o%60;return(i<=0?"+":"-")+G(p,2,"0")+":"+G(a,2,"0")},m:function m(i,o){if(i.date()<o.date())return-m(o,i);var p=12*(o.year()-i.year())+(o.month()-i.month()),a=i.clone().add(p,$),f=o-a<0,h=i.clone().add(p+(f?-1:1),$);return+(-(p+(o-a)/(f?a-h:h-a))||0)},a:function(m){return m<0?Math.ceil(m)||0:Math.floor(m)},p:function(m){return{M:$,y:b,w:y,d:u,D:A,h:g,m:x,s:d,ms:s,Q:C}[m]||String(m||"").toLowerCase().replace(/s$/,"")},u:function(m){return m===void 0}},k="en",B={};B[k]=H;var X=function(m){return m instanceof de},F=function m(i,o,p){var a;if(!i)return k;if(typeof i=="string"){var f=i.toLowerCase();B[f]&&(a=f),o&&(B[f]=o,a=f);var h=i.split("-");if(!a&&h.length>1)return m(h[0])}else{var v=i.name;B[v]=i,a=v}return!p&&a&&(k=a),a||!p&&k},R=function(m,i){if(X(m))return m.clone();var o=typeof i=="object"?i:{};return o.date=m,o.args=arguments,new de(o)},w=J;w.l=F,w.i=X,w.w=function(m,i){return R(m,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var de=function(){function m(o){this.$L=F(o.locale,null,!0),this.parse(o)}var i=m.prototype;return i.parse=function(o){this.$d=function(p){var a=p.date,f=p.utc;if(a===null)return new Date(NaN);if(w.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var h=a.match(L);if(h){var v=h[2]-1||0,O=(h[7]||"0").substring(0,3);return f?new Date(Date.UTC(h[1],v,h[3]||1,h[4]||0,h[5]||0,h[6]||0,O)):new Date(h[1],v,h[3]||1,h[4]||0,h[5]||0,h[6]||0,O)}}return new Date(a)}(o),this.$x=o.x||{},this.init()},i.init=function(){var o=this.$d;this.$y=o.getFullYear(),this.$M=o.getMonth(),this.$D=o.getDate(),this.$W=o.getDay(),this.$H=o.getHours(),this.$m=o.getMinutes(),this.$s=o.getSeconds(),this.$ms=o.getMilliseconds()},i.$utils=function(){return w},i.isValid=function(){return this.$d.toString()!==E},i.isSame=function(o,p){var a=R(o);return this.startOf(p)<=a&&a<=this.endOf(p)},i.isAfter=function(o,p){return R(o)<this.startOf(p)},i.isBefore=function(o,p){return this.endOf(p)<R(o)},i.$g=function(o,p,a){return w.u(o)?this[p]:this.set(a,o)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(o,p){var a=this,f=!!w.u(p)||p,h=w.p(o),v=function(te,D){var U=w.w(a.$u?Date.UTC(a.$y,D,te):new Date(a.$y,D,te),a);return f?U:U.endOf(u)},O=function(te,D){return w.w(a.toDate()[te].apply(a.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(D)),a)},T=this.$W,M=this.$M,q=this.$D,N="set"+(this.$u?"UTC":"");switch(h){case b:return f?v(1,0):v(31,11);case $:return f?v(1,M):v(0,M+1);case y:var oe=this.$locale().weekStart||0,ae=(T<oe?T+7:T)-oe;return v(f?q-ae:q+(6-ae),M);case u:case A:return O(N+"Hours",0);case g:return O(N+"Minutes",1);case x:return O(N+"Seconds",2);case d:return O(N+"Milliseconds",3);default:return this.clone()}},i.endOf=function(o){return this.startOf(o,!1)},i.$set=function(o,p){var a,f=w.p(o),h="set"+(this.$u?"UTC":""),v=(a={},a[u]=h+"Date",a[A]=h+"Date",a[$]=h+"Month",a[b]=h+"FullYear",a[g]=h+"Hours",a[x]=h+"Minutes",a[d]=h+"Seconds",a[s]=h+"Milliseconds",a)[f],O=f===u?this.$D+(p-this.$W):p;if(f===$||f===b){var T=this.clone().set(A,1);T.$d[v](O),T.init(),this.$d=T.set(A,Math.min(this.$D,T.daysInMonth())).$d}else v&&this.$d[v](O);return this.init(),this},i.set=function(o,p){return this.clone().$set(o,p)},i.get=function(o){return this[w.p(o)]()},i.add=function(o,p){var a,f=this;o=Number(o);var h=w.p(p),v=function(M){var q=R(f);return w.w(q.date(q.date()+Math.round(M*o)),f)};if(h===$)return this.set($,this.$M+o);if(h===b)return this.set(b,this.$y+o);if(h===u)return v(1);if(h===y)return v(7);var O=(a={},a[x]=n,a[g]=l,a[d]=r,a)[h]||1,T=this.$d.getTime()+o*O;return w.w(T,this)},i.subtract=function(o,p){return this.add(-1*o,p)},i.format=function(o){var p=this,a=this.$locale();if(!this.isValid())return a.invalidDate||E;var f=o||"YYYY-MM-DDTHH:mm:ssZ",h=w.z(this),v=this.$H,O=this.$m,T=this.$M,M=a.weekdays,q=a.months,N=function(D,U,Ie,ue){return D&&(D[U]||D(p,f))||Ie[U].slice(0,ue)},oe=function(D){return w.s(v%12||12,D,"0")},ae=a.meridiem||function(D,U,Ie){var ue=D<12?"AM":"PM";return Ie?ue.toLowerCase():ue},te={YY:String(this.$y).slice(-2),YYYY:this.$y,M:T+1,MM:w.s(T+1,2,"0"),MMM:N(a.monthsShort,T,q,3),MMMM:N(q,T),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:N(a.weekdaysMin,this.$W,M,2),ddd:N(a.weekdaysShort,this.$W,M,3),dddd:M[this.$W],H:String(v),HH:w.s(v,2,"0"),h:oe(1),hh:oe(2),a:ae(v,O,!0),A:ae(v,O,!1),m:String(O),mm:w.s(O,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:h};return f.replace(z,function(D,U){return U||te[D]||h.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(o,p,a){var f,h=w.p(p),v=R(o),O=(v.utcOffset()-this.utcOffset())*n,T=this-v,M=w.m(this,v);return M=(f={},f[b]=M/12,f[$]=M,f[C]=M/3,f[y]=(T-O)/6048e5,f[u]=(T-O)/864e5,f[g]=T/l,f[x]=T/n,f[d]=T/r,f)[h]||T,a?M:w.a(M)},i.daysInMonth=function(){return this.endOf($).$D},i.$locale=function(){return B[this.$L]},i.locale=function(o,p){if(!o)return this.$L;var a=this.clone(),f=F(o,p,!0);return f&&(a.$L=f),a},i.clone=function(){return w.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},m}(),Ke=de.prototype;return R.prototype=Ke,[["$ms",s],["$s",d],["$m",x],["$H",g],["$W",u],["$M",$],["$y",b],["$D",A]].forEach(function(m){Ke[m[1]]=function(i){return this.$g(i,m[0],m[1])}}),R.extend=function(m,i){return m.$i||(m(i,de,R),m.$i=!0),R},R.locale=F,R.isDayjs=X,R.unix=function(m){return R(1e3*m)},R.en=B[k],R.Ls=B,R.p={},R})})(gt);const Me=gt.exports;var yt={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(nt,function(){return function(r,n,l){r=r||{};var s=n.prototype,d={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function x(u,y,$,C){return s.fromToBase(u,y,$,C)}l.en.relativeTime=d,s.fromToBase=function(u,y,$,C,b){for(var A,E,L,z=$.$locale().relativeTime||d,H=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],G=H.length,J=0;J<G;J+=1){var k=H[J];k.d&&(A=C?l(u).diff($,k.d,!0):$.diff(u,k.d,!0));var B=(r.rounding||Math.round)(Math.abs(A));if(L=A>0,B<=k.r||!k.r){B<=1&&J>0&&(k=H[J-1]);var X=z[k.l];b&&(B=b(""+B)),E=typeof X=="string"?X.replace("%d",B):X(B,y,k.l,L);break}}if(y)return E;var F=L?z.future:z.past;return typeof F=="function"?F(E):F.replace("%s",E)},s.to=function(u,y){return x(u,y,this,!0)},s.from=function(u,y){return x(u,y,this)};var g=function(u){return u.$u?l.utc():l()};s.toNow=function(u){return this.to(g(this),u)},s.fromNow=function(u){return this.from(g(this),u)}}})})(yt);const Zt=yt.exports;Me.extend(Zt);const Qt=e=>_.exports.useMemo(()=>{if(!e)return null;const t=Me(e),r=Me();switch(!0){case r.isSame(t,"day"):return"Today";case r.subtract(1,"day").isSame(t,"day"):return"Yesterday";default:return t.fromNow()}},[e]),$t=(e=[])=>{const{scrollToBottom:t}=_.exports.useContext(Pt);_.exports.useLayoutEffect(()=>{t()},e)},en=(e,t=[])=>{const r=_.exports.useRef(!1);_.exports.useEffect(()=>{if(r.current)return e();r.current=!0},t)},ke=Symbol("@ts-pattern/matcher"),Ge="@ts-pattern/anonymous-select-key",Je=e=>Boolean(e&&typeof e=="object"),Re=e=>e&&!!e[ke],se=(e,t,r)=>{if(Je(e)){if(Re(e)){const n=e[ke](),{matched:l,selections:s}=n.match(t);return l&&s&&Object.keys(s).forEach(d=>r(d,s[d])),l}if(!Je(t))return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.every((n,l)=>se(n,t[l],r));if(e instanceof Map)return t instanceof Map&&Array.from(e.keys()).every(n=>se(e.get(n),t.get(n),r));if(e instanceof Set){if(!(t instanceof Set))return!1;if(e.size===0)return t.size===0;if(e.size===1){const[n]=Array.from(e.values());return Re(n)?Array.from(t.values()).every(l=>se(n,l,r)):t.has(n)}return Array.from(e.values()).every(n=>t.has(n))}return Object.keys(e).every(n=>{const l=e[n];return(n in t||Re(s=l)&&s[ke]().matcherType==="optional")&&se(l,t[n],r);var s})}return Object.is(t,e)},St=e=>new ie(e,[]);class ie{constructor(t,r){this.value=void 0,this.cases=void 0,this.value=t,this.cases=r}with(...t){const r=t[t.length-1],n=[t[0]],l=[];return t.length===3&&typeof t[1]=="function"?(n.push(t[0]),l.push(t[1])):t.length>2&&n.push(...t.slice(1,t.length-1)),new ie(this.value,this.cases.concat([{match:s=>{let d={};const x=Boolean(n.some(g=>se(g,s,(u,y)=>{d[u]=y}))&&l.every(g=>g(s)));return{matched:x,value:x&&Object.keys(d).length?Ge in d?d[Ge]:d:s}},handler:r}]))}when(t,r){return new ie(this.value,this.cases.concat([{match:n=>({matched:Boolean(t(n)),value:n}),handler:r}]))}otherwise(t){return new ie(this.value,this.cases.concat([{match:r=>({matched:!0,value:r}),handler:t}])).run()}exhaustive(){return this.run()}run(){let t,r=this.value;for(let n=0;n<this.cases.length;n++){const l=this.cases[n],s=l.match(this.value);if(s.matched){r=s.value,t=l.handler;break}}if(!t){let n;try{n=JSON.stringify(this.value)}catch{n=this.value}throw new Error(`Pattern matching error: no pattern matches value ${n}`)}return t(r,this.value)}}const Be=1e3,tn=(e=Be)=>({type:"indicator",messageDelay:e}),nn=({messages:e,isLast:t})=>{const r=_.exports.useRef(t&&!!e.length),[n,l]=_.exports.useState(!r.current),[s,d]=_.exports.useState(r.current),[x,g]=_.exports.useState(r.current?[]:e),u=_.exports.useCallback(()=>{l(!0),d(!1)},[]);return _.exports.useEffect(()=>{if(!r)return;const y=e.flatMap(A=>[tn(A.delay),{type:"message",message:A}]);let $;const C=(A,E)=>{if(E===0){A();return}$=setTimeout(()=>{A()},E)},b=()=>{if(!r.current)return;const A=y.shift();if(!A){u();return}St(A).with({type:"message"},({message:E})=>{d(!1),g(L=>[...L,E]),C(b,Be)}).with({type:"indicator"},({messageDelay:E=Be})=>{d(!0),C(b,E)}).exhaustive()};return b(),()=>{clearTimeout($)}},[]),en(()=>{t||(r.current=!1,u(),g(e))},[t]),{complete:n,showIndicator:s,visibleMessages:x}},ne=Y(P.SYSTEM_RESPONSE),xt=S(ne("div","actions"),{display:"flex",flexWrap:"wrap",marginBottom:8,padding:"0 $5 0 54px",[`& ${W.Container}`]:{height:"unset",paddingTop:7,paddingBottom:7,marginTop:8,marginRight:8,whiteSpace:"normal",textAlign:"start"}}),vt=S(ne("span","controls"),{position:"relative"}),Fe=S(ne("div"),{display:"flex",[`& ${K.Container}`]:{visibility:"hidden",alignSelf:"flex-end",margin:"0 8px 4px 0"},[`& ${ee.Container}`]:{alignSelf:"center",whiteSpace:"nowrap",marginLeft:8,opacity:"0%",trans:["opacity"]},[`&:hover ${ee.Container}`]:{opacity:"100%"},variants:{withImage:{true:{[`& ${K.Container}`]:{visibility:"visible"}}},scrollable:{true:{overflowX:"scroll",flexShrink:0,scrollbarWidth:"none","-ms-overflow-style":"none",["&::-webkit-scrollbar"]:{display:"none"}}},center:{true:{alignItems:"center"}}}}),rn=S(ne(Fe,"message")),on=S(ne(Fe,"indicator")),_t=S(ne("div","list"),{display:"flex",flexDirection:"column",flexShrink:0,[`& ${Ne.Container}`]:{marginBottom:"$1",maxWidth:248,"&:last-of-type":{marginBottom:0}}}),Se=({avatar:e})=>I(on,{withImage:!0,center:!0,children:[c(K,{avatar:e}),c(Ut,{})]}),Ct=Se;try{Se.displayName="Indicator",Se.__docgenInfo={description:"",displayName:"Indicator",props:{avatar:{defaultValue:null,description:"",name:"avatar",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/Indicator.tsx#Indicator"]={docgenInfo:Se.__docgenInfo,name:"Indicator",path:"src/components/SystemResponse/Indicator.tsx#Indicator"})}catch{}const he=42,Te=12,wt=Y(P.CAROUSEL),an=S(wt("span","button"),{position:"absolute",zIndex:1,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"$round",trans:["background-color","box-shadow","opacity"],height:he,width:he,cursor:"pointer",backgroundColor:"$white",color:"$black",boxShadow:"0 1px 3px 1px $shadow1, 0 0 0 1px $shadow3, 0 2px 4px -3px $shadow12, 0 5px 8px -8px $shadow12",border:"none",[`& ${j.Frame}`]:{height:"$xxs",width:"$xxs",color:"rgba(0,0,0,0.6)",trans:["color"]},["&:hover"]:{boxShadow:"0 1px 4px 1px $shadow4, 0 0 0 1px $shadow4, 0 2px 4px -3px $shadow12, 0 5px 8px -8px $shadow12"},["&:active"]:{boxShadow:"0 1px 4px 1px $shadow8, 0 0 0 1px $shadow4, 0 2px 4px -3px $shadow12, 0 5px 8px -8px $shadow12"},[`
      &:hover ${j.Frame},
      &:active ${j.Frame}
    `]:{color:"rgba(0,0,0,0.8)"},variants:{visible:{true:{opacity:1,pointerEvents:"auto"},false:{opacity:0,pointerEvents:"none"}},alignment:{left:{left:48-he/2},right:{right:70-he/2,[`& ${j.Frame}`]:{transform:"scaleX(-1)"}}}}}),bt=S(wt("div"),{display:"flex",whiteSpace:"nowrap",[`& ${Le.Container}`]:{height:"fit-content",flexShrink:0,marginLeft:Te,"&:first-of-type":{marginLeft:0}}}),le=_.exports.forwardRef(({onClick:e,alignment:t,visible:r,containerEl:n},l)=>c(an,{ref:l,alignment:t,visible:r,css:{transform:`translateY(calc(${n.clientHeight/2}px - 50%))`},onClick:e,children:c(j,{svg:"largeArrowLeft"})}));try{le.displayName="CarouselButton",le.__docgenInfo={description:"A button used to scroll to the previous or next Card in a Carousel.",displayName:"CarouselButton",props:{alignment:{defaultValue:null,description:"The end of the container where the button will be rendered.",name:"alignment",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},visible:{defaultValue:null,description:"If true then the button will be visible, otherwise hidden.",name:"visible",required:!0,type:{name:"boolean"}},containerEl:{defaultValue:null,description:"The buttons will be centered vertically based on the height of this element.",name:"containerEl",required:!0,type:{name:"HTMLElement"}},onClick:{defaultValue:null,description:"A click handler for the button.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Carousel/CarouselButton.tsx#CarouselButton"]={docgenInfo:le.__docgenInfo,name:"CarouselButton",path:"src/components/Carousel/CarouselButton.tsx#CarouselButton"})}catch{}const qe=Ht+2,At=qe/3,sn=qe+Te+At,be=qe+Te,Xe=(e,t)=>()=>{const r=e==null?void 0:e.current;if(!r)return;const n=t(r);r.scrollTo({left:n&&n*be,behavior:"smooth"})},ln=(e,t,r)=>{const[n,l]=_.exports.useState(!1),[s,d]=_.exports.useState(!1),x=_.exports.useRef(null),g=_.exports.useRef(null),u=r.length>1;return _.exports.useEffect(()=>{!(t!=null&&t.current)||!u||d(!0)},[]),_.exports.useEffect(()=>{const y=e==null?void 0:e.current;if(!y||!u)return;const $=be*r.length-Te,C=()=>{const{scrollLeft:b}=y;l(b>=At),d(b<=$-sn)};return y.addEventListener("scroll",C),()=>{y.removeEventListener("scroll",C)}},[]),{previousButtonRef:x,nextButtonRef:g,showPreviousButton:n,showNextButton:s}},xe=({cards:e,containerRef:t,controlsRef:r})=>{const{previousButtonRef:n,nextButtonRef:l,showPreviousButton:s,showNextButton:d}=ln(t,r,e),x=t==null?void 0:t.current,g=r==null?void 0:r.current,u=x&&g,y=Xe(t,C=>Math.ceil(C.scrollLeft/be)-1),$=Xe(t,C=>Math.floor(C.scrollLeft/be)+1);return I(ce,{children:[c(bt,{children:e.map((C,b)=>_.exports.createElement(Le,{...C,key:b}))}),u&&jt.exports.createPortal(I(ce,{children:[c(le,{ref:n,alignment:"left",visible:s,containerEl:x,onClick:y}),c(le,{ref:l,alignment:"right",visible:d,containerEl:x,onClick:$})]}),g)]})},cn=Object.assign(xe,{Container:bt});try{xe.displayName="Carousel",xe.__docgenInfo={description:"A carousel of {@link Card} components that can be scrolled natively or with buttons.",displayName:"Carousel",props:{cards:{defaultValue:null,description:"A list of props objects which will be passed to {@link Card} components.",name:"cards",required:!0,type:{name:"CardProps[]"}},containerRef:{defaultValue:null,description:"A reference to the HTML element of a parent horizontal scrolling container.",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},controlsRef:{defaultValue:null,description:"A reference to an HTML element to anchor the carousel controls.",name:"controlsRef",required:!1,type:{name:"RefObject<HTMLSpanElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Carousel/index.tsx#Carousel"]={docgenInfo:xe.__docgenInfo,name:"Carousel",path:"src/components/Carousel/index.tsx#Carousel"})}catch{}const Oe=Y(P.FEEDBACK),dn=S(Oe("div"),{display:"inline-flex",alignItems:"center",boxSizing:"border-box",marginTop:"8.5px"}),un=S(Oe("div","description"),{color:"$darkGrey",marginRight:4,lineHeight:17,typo:{size:12}}),pn=S(Oe("div","buttons"),{display:"flex",gap:4}),Ze=S(Oe("button","button"),{display:"inline-flex",backgroundColor:"transparent",border:0,borderRadius:"$round",width:24,height:24,padding:0,margin:0,cursor:"pointer",variants:{active:{false:{color:"rgb(115 115 118 / 85%)","&:hover":{color:"rgb(115 115 118 / 100%)"}},true:{color:"$white",backgroundColor:"$primary"}},orientation:{positive:{transform:"none"},negative:{transform:"rotate(180deg)"}}},defaultVariants:{active:!1,orientation:"positive"}}),hn=({question:e="Was this helpful?",onClick:t,...r})=>{const[n,l]=Bt.useState(null),s=d=>{d!==n&&(t(d),l(d))};return I(dn,{...r,children:[c(un,{children:e}),I(pn,{children:[c(Ze,{orientation:"positive",active:n===pe.POSITIVE,onClick:()=>s(pe.POSITIVE),children:c(We,{width:"24px",height:"24px"})}),c(Ze,{orientation:"negative",active:n===pe.NEGATIVE,onClick:()=>s(pe.NEGATIVE),children:c(We,{width:"24px",height:"24px"})})]})]})},fn=()=>{const e=_.exports.useContext(tt);return _.exports.useEffect(()=>{e.setStatus(Ft.ENDED)},[]),null};try{end.displayName="end",end.__docgenInfo={description:"",displayName:"end",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/state/end.tsx#end"]={docgenInfo:end.__docgenInfo,name:"end",path:"src/components/SystemResponse/state/end.tsx#end"})}catch{}const ve=({avatar:e,feedback:t,timestamp:r,message:n,withImage:l,children:s})=>{const d=_.exports.useRef(null),x=_.exports.useRef(null);return!s&&(n==null?void 0:n.type)===Q.END?c(fn,{}):I(ce,{children:[c(vt,{ref:x}),I(rn,{ref:d,withImage:l,scrollable:(n==null?void 0:n.type)===Q.CAROUSEL,children:[c(K,{avatar:e}),I(_t,{children:[s!=null?s:St(n).with({type:Q.TEXT},({text:g})=>c(Wt,{text:g})).with({type:Q.IMAGE},({url:g})=>c(Kt,{image:g})).with({type:Q.CARD},g=>c(Le,{...ze(g,["type"])})).with({type:Q.CAROUSEL},g=>c(cn,{...ze(g,["type"]),containerRef:d,controlsRef:x})).otherwise(()=>null),t&&c(hn,{...t})]}),c(ee,{value:r})]})]})},Tt=ve;try{ve.displayName="SystemMessage",ve.__docgenInfo={description:"",displayName:"SystemMessage",props:{avatar:{defaultValue:null,description:"An image URL for an avatar to associate this message with.",name:"avatar",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"A unix timestamp indicating when this message was sent.",name:"timestamp",required:!0,type:{name:"number"}},message:{defaultValue:null,description:"A single message to render with a {@link Message } component.",name:"message",required:!1,type:{name:"MessageProps"}},withImage:{defaultValue:null,description:"If true, renders an avatar next to the message.",name:"withImage",required:!0,type:{name:"boolean"}},feedback:{defaultValue:{value:"false"},description:"If provided, will display {@link Feedback} component.",name:"feedback",required:!1,type:{name:"FeedbackProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/SystemMessage.tsx#SystemMessage"]={docgenInfo:ve.__docgenInfo,name:"SystemMessage",path:"src/components/SystemResponse/SystemMessage.tsx#SystemMessage"})}catch{}const _e=({feedback:e,avatar:t,timestamp:r,messages:n,actions:l=[],isLast:s,Message:d=Tt})=>{const x=_.exports.useContext(tt),{showIndicator:g,visibleMessages:u,complete:y}=nn({messages:n,isLast:s});return $t([g,y,u.length]),!n.length&&!l.length?null:I(ce,{children:[u.map(($,C)=>c(d,{message:$,withImage:!g&&C===u.length-1,feedback:y&&!g&&C===u.length-1?e:void 0,avatar:t,timestamp:r},C)),s&&y&&!!l.length&&c(xt,{children:l.map(({request:$,name:C},b)=>c(W,{variant:"secondary",onClick:()=>x==null?void 0:x.interact($,C),children:C},b))}),g&&c(Ct,{avatar:t})]})},V=Object.assign(_e,{Message:Q,Container:Fe,Controls:vt,List:_t,Actions:xt,Indicator:Ct,SystemMessage:Tt});try{_e.displayName="SystemResponse",_e.__docgenInfo={description:"A dynamic component capable of displaying all standard system responses.",displayName:"SystemResponse",props:{avatar:{defaultValue:null,description:"An image URL for an avatar to associate the messages with.",name:"avatar",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"A unix timestamp indicating when the messages were sent.",name:"timestamp",required:!0,type:{name:"number"}},messages:{defaultValue:null,description:"A list of messages that will be rendered as {@link SystemMessage} components.",name:"messages",required:!0,type:{name:"MessageProps[]"}},actions:{defaultValue:{value:"[]"},description:"A list of actions that will be rendered as buttons.",name:"actions",required:!1,type:{name:"ResponseActionProps[]"}},isLast:{defaultValue:null,description:`If true, allows actions to appear after this message.
Only the last system message in a row can show actions.`,name:"isLast",required:!1,type:{name:"boolean"}},feedback:{defaultValue:{value:"false"},description:"If provided, will display {@link Feedback} component under the last message.",name:"feedback",required:!1,type:{name:"FeedbackProps"}},Message:{defaultValue:null,description:"Override the rendering of individual messages.",name:"Message",required:!1,type:{name:"ComponentType<SystemMessageProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/index.tsx#SystemResponse"]={docgenInfo:_e.__docgenInfo,name:"SystemResponse",path:"src/components/SystemResponse/index.tsx#SystemResponse"})}catch{}const Ue=Y(P.USER_RESPONSE),Ot=S(Ue("aside","debug"),{typo:{size:"12px",height:"17px"},color:"$darkGrey",marginTop:"$2"}),It=S(Ue("div"),{display:"flex",flexDirection:"column",flexShrink:0,alignItems:"flex-end",[`& ${Ne.Container}`]:{maxWidth:282},[`& > ${rt.Container}`]:{marginTop:"$1"}}),Rt=S(Ue("div","row"),{display:"flex",width:"100%",alignItems:"center",[`& ${ee.Container}`]:{flexGrow:1,marginRight:8,textAlign:"end",opacity:"0%",trans:["opacity"]},[`&:hover ${ee.Container}`]:{opacity:"100%"}}),Ce=({message:e,timestamp:t,debug:r})=>{var n,l;return $t(),I(It,{children:[I(Rt,{children:[c(ee,{value:t}),c(Ne,{from:"user",children:e})]}),r&&I(ce,{children:[c(Ot,{children:r.message}),r.reason&&c(rt,{label:(n=r.action)==null?void 0:n.label,onClick:(l=r.action)==null?void 0:l.onClick,orientation:"right",children:r.reason})]})]})},Z=Object.assign(Ce,{Container:It,Debug:Ot,Row:Rt});try{Ce.displayName="UserResponse",Ce.__docgenInfo={description:"A user-sent text response.",displayName:"UserResponse",props:{message:{defaultValue:null,description:"The message text to display.",name:"message",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"A unix timestamp indicating when this response was sent.",name:"timestamp",required:!0,type:{name:"number"}},debug:{defaultValue:null,description:'If provided, adds a caption and optional "debug" message with an action.',name:"debug",required:!1,type:{name:"DebugResponseProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/UserResponse/index.tsx#UserResponse"]={docgenInfo:Ce.__docgenInfo,name:"UserResponse",path:"src/components/UserResponse/index.tsx#UserResponse"})}catch{}const Ee=10,re=Y(P.CHAT),Ae=S(re("div","overlay"),{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"$shadow12"}),De=S(re("article"),{position:"relative",display:"flex",overflow:"hidden",flexDirection:"column",backgroundColor:"$white",[`& > ${et}`]:{margin:"auto"},[`& ${ft.Container}`]:{animation:`${Dt} 150ms ease forwards`},[`& ${ut.Container}`]:{...Qe({duration:300,delay:300})},[`& ${Ae}`]:{opacity:0,pointerEvents:"none",trans:["opacity"]},[`& ${$e.Container}`]:{position:"absolute",bottom:0,width:"100%",boxSizing:"border-box",paddingBottom:`calc($3 + ${Ee}px)`,transition:`transform 320ms cubic-bezier(0.45, 1.29, 0.64, 1), ${Lt(["box-shadow"],300)}`,transform:`translateY(calc(100% + ${Ee}px))`},variants:{withPrompt:{true:{[`& ${Ae}`]:{opacity:1,zIndex:2,pointerEvents:"auto"},[`& ${$e.Container}`]:{zIndex:3,transform:`translateY(${Ee}px)`}},false:{[`& ${$e.Container}`]:{boxShadow:"none"}}}}}),Et={display:"flex",justifyContent:"center",typo:{size:12},color:"$darkGrey"},je=S(re("div","status"),{...Et}),mn=S(re("span","session-time"),{...Et,paddingBottom:"$3"}),Mt=S(re("main","dialog"),{display:"flex",flexDirection:"column",height:"100%",overflowY:"scroll",overflowX:"hidden",paddingBottom:"$3",[`
    & ${Z.Container},
    & ${V.List},
    & ${V.Actions},
    & ${it.Container}
  `]:{...Qe({duration:150,delay:0})},[`
    & > ${Z.Container},
    & > ${V.Container}
  `]:{padding:"0 $5"},[`& > ${V.Actions}`]:{padding:"0 $5 0 54px"},[`& ${V.Container}`]:{marginBottom:"$1","&:last-of-type":{marginBottom:0}},[`& ${Z.Container} + ${Z.Container}`]:{marginTop:"$1"},[`
    & ${V.Container} + ${Z.Container},
    & ${V.Actions} + ${Z.Container},
    & ${Z.Container} + ${V.Controls} + ${V.Container}
  `]:{marginTop:"$5"},[`& ${ee.Container}`]:{width:50},[`& ${je}`]:{marginTop:"$3",marginBottom:8}}),kt=S(re("div","spacer"),{flexGrow:1}),we=({hasEnded:e,title:t,image:r,avatar:n,description:l,startTime:s,isLoading:d,withWatermark:x,onMinimize:g,onEnd:u,onStart:y,onSend:$,children:C})=>{const b=Qt(s),A=_.exports.useRef(null),[E,L]=_.exports.useState(!1),z=G=>{e?u==null||u(G):L(!0)},H=()=>L(!1);return d?c(De,{children:c(et,{})}):I(De,{withPrompt:E,children:[c(ft,{title:t,image:r,actions:[{svg:"minus",onClick:g},{svg:"close",onClick:z}]}),c(Mt,{ref:A,children:I(qt,{target:A,children:[c(it,{title:t,avatar:n,description:l}),c(kt,{}),!!b&&c(mn,{children:b}),C,e&&c(je,{children:"You have ended the chat"})]})}),c(ut,{withWatermark:x,hasEnded:e,onStart:y,onSend:$}),c(Ae,{}),c($e,{accept:{label:"End Chat",type:"warn",onClick:Yt(u,H)},cancel:{label:"Cancel",onClick:H}})]})},Bn=Object.assign(_.exports.memo(we),{Container:De,Dialog:Mt,Overlay:Ae,Spacer:kt,Status:je});try{we.displayName="Chat",we.__docgenInfo={description:"A full chat dialog with header, footer, overlay and auto-scrolling content.",displayName:"Chat",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Chat/index.tsx#Chat"]={docgenInfo:we.__docgenInfo,name:"Chat",path:"src/components/Chat/index.tsx#Chat"})}catch{}export{it as A,Bn as C,ut as F,ft as H,St as K,$e as P,V as S,Z as U,cn as a,ze as o};
//# sourceMappingURL=index.69638fe2.js.map