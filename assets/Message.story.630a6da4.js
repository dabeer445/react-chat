import{M as t}from"./index.76876762.js";import{j as o}from"./jsx-runtime.b86b4a7d.js";import"./variants.552c05fd.js";import"./animation.e934a63f.js";import"./iframe.98425f0c.js";import"./top-caret.4d15cc47.js";const d={title:"Core/Message",component:t,argTypes:{variant:{options:Object.values(t.Variant),control:{type:"radio"},defaultValue:t.Variant.CHAT},from:{if:{arg:"variant",eq:t.Variant.CHAT},options:["system","user"],control:{type:"radio"},defaultValue:"system"},orientation:{if:{arg:"variant",eq:t.Variant.DEBUG},options:["left","right"],control:{type:"radio"},defaultValue:"left"}},args:{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}},a=i=>o(t,{...i}),r=a.bind({});r.args={variant:t.Variant.CHAT,from:"system"};const s=a.bind({});s.args={...r.args,from:"user"};const e=a.bind({});e.args={variant:t.Variant.DEBUG,orientation:"left"};const n=a.bind({});n.args={...e.args,orientation:"right"};export{e as DebugLeft,n as DebugRight,r as SystemChat,s as UserChat,d as default};
//# sourceMappingURL=Message.story.630a6da4.js.map