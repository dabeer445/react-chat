import{S as a,C as i}from"./index.6f3c1917.js";import{j as o}from"./jsx-runtime.685d9b64.js";import"./index.956f484f.js";import"./index.5860e364.js";import"./index.761f1df6.js";import"./variants.a7afcbc3.js";import"./index.84b507f7.js";import"./index.bd340bff.js";import"./index.f71e8c63.js";import"./index.bca766f4.js";import"./index.14740593.js";import"./index.611a4c98.js";import"./index.67d15871.js";import"./index.47d77aa6.js";import"./index.90f63978.js";import"./iframe.6471845c.js";const e="https://source.unsplash.com/random/248x150",s={type:"text",value:"Lorem ipsum dolor sit amet consectetur"},r={type:"card",title:"Card Message",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:e},M={title:"Components/Chat/SystemResponse",component:a,args:{timestamp:new Date().toISOString(),image:"https://source.unsplash.com/random/26x26"},argTypes:{timestamp:{control:{type:"date"}}}},t=m=>o(i.Container,{children:o(i.Dialog,{css:{padding:"64px 0",display:"flex",flexDirection:"column",justifyContent:"center"},children:o(a,{...m})})}),n=t.bind({});n.args={messages:[s]};const l=t.bind({});l.args={messages:[s,s,s]};const p=t.bind({});p.args={...n.args,actions:[{label:"Button One"},{label:"Button Two"},{label:"Button Three"}]};const c=t.bind({});c.args={messages:[r]};const d=t.bind({});d.args={messages:[{...r,actions:[{label:"First Button"},{label:"Second Button"},{label:"Third Button"}]}]};const u=t.bind({});u.args={messages:[{type:"carousel",cards:[{title:"First Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:e},{title:"Second Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",image:e,actions:[{label:"First Button"},{label:"Second Button"}]},{title:"Third Card",description:"Lorem ipsum dolor sit amet",image:e,actions:[{label:"First Button"},{label:"Second Button"},{label:"Third Button"}]}]}]};export{d as ActionableCard,p as ActionableText,c as Card,u as Carousel,l as MultipleText,n as SingleText,M as default};
//# sourceMappingURL=SystemResponse.story.6066f368.js.map
