import{r as i,j as s}from"./jsx-runtime.685d9b64.js";import{r as R}from"./index.7bf82474.js";import{C as o,K as W,U as $,o as h,S as b}from"./index.6f3c1917.js";import{B as p}from"./index.bd340bff.js";import{s as w}from"./index.5860e364.js";import"./iframe.6471845c.js";import"./index.956f484f.js";import"./index.761f1df6.js";import"./variants.a7afcbc3.js";import"./index.84b507f7.js";import"./index.bca766f4.js";import"./index.f71e8c63.js";import"./index.14740593.js";import"./index.611a4c98.js";import"./index.67d15871.js";import"./index.47d77aa6.js";import"./index.90f63978.js";var e=(t=>(t.USER="user",t.SYSTEM="system",t))(e||{});const u=w("div",{position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:10,[`& ${p.Container}`]:{color:"$white"},[`& ${o.Container}`]:{height:800},[`& ${o.Dialog}`]:{flex:1},[`
    & > ${p.Container},
    & > ${o.Container}
  `]:{position:"absolute",right:"$6",bottom:"$6"}}),n=({assistant:t})=>{const[C,m]=i.exports.useState(!1),[f,d]=i.exports.useState(!1),[c,y]=i.exports.useState([]),x=()=>m(!0),l=()=>m(!1),_=()=>d(!0),E=()=>{l(),d(!1)},O=r=>y([...c,{type:e.USER,message:r},{type:e.SYSTEM,image:t.image,timestamp:new Date().toISOString(),messages:[{type:"text",text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quisquam corrupti harum et, quos seq."}]}]);return R.exports.createPortal(s(u,{children:C?s(o,{title:t.name,description:t.description,image:t.image,isRunning:f,onStart:_,onEnd:E,onSend:O,onMinimize:l,children:c.map((r,g)=>W(r).with({type:e.USER},a=>i.exports.createElement($,{...h(a,["type"]),key:g})).with({type:e.SYSTEM},a=>i.exports.createElement(b,{...h(a,["type"]),key:g})).exhaustive())}):s(p,{svg:"launch",onClick:x})}),document.body)},S=Object.assign(n,{Turn:e,Container:u});try{n.displayName="ChatWidget",n.__docgenInfo={description:"",displayName:"ChatWidget",props:{assistant:{defaultValue:null,description:"",name:"assistant",required:!0,type:{name:"{ name: string; description: string; image: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/views/ChatWidget/index.tsx#ChatWidget"]={docgenInfo:n.__docgenInfo,name:"ChatWidget",path:"src/views/ChatWidget/index.tsx#ChatWidget"})}catch{}const G={title:"Views/ChatWidget",component:S,args:{assistant:{name:"Assistant Name",image:"https://source.unsplash.com/random/72x72",description:"Voiceflow's virtual assistant is here to help."}}},T=t=>s(S,{...t}),v=T.bind({});v.args={};export{v as Default,G as default};
//# sourceMappingURL=ChatWidget.story.602315ae.js.map
