import{b as i}from"./variants.547f112b.js";import{s as a}from"./theme.9c2e6479.js";var r=(o=>(o.PRIMARY="primary",o.SECONDARY="secondary",o))(r||{});const t=a("button",{display:"flex",justifyContent:"center",alignItems:"center",border:0,padding:"0 14px",borderRadius:"$1",typo:{weight:"$2"},whiteSpace:"nowrap",overflowWrap:"anywhere","&:focus":{outline:0},"&:hover":{cursor:"pointer"}}),n=a(t,{height:"$md",color:"$white",trans:["background-color"],variants:{type:{info:{backgroundColor:"$primary","&:hover":{backgroundColor:"$darkPrimary"}},warn:{backgroundColor:"$warn","&:hover":{backgroundColor:"$darkWarn"}},subtle:{color:"$black",backgroundColor:"inherit",trans:["color"],"&:hover":{color:"#000"}}}},defaultVariants:{type:"info"}}),e=a(t,{height:"$sm",border:"1px solid rgba(61,130,226,0.45)",color:"$primary",backgroundColor:"$white",boxShadow:"0 1px 2px $shadow2",trans:["border-color"],"&:hover":{borderColor:"$primary"}}),s={[r.PRIMARY]:n,[r.SECONDARY]:e},c=i(s,r.PRIMARY),b=Object.assign(c,{Variant:r,Base:t,Primary:n,Secondary:e});export{b as B};
//# sourceMappingURL=index.5651cac5.js.map