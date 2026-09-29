const {createElement:h}=React; const {createRoot}=ReactDOM;
const stories=[
 {tag:"COMMUNITY NOTICE",date:"29 September 2026",title:"GQNews is building a clearer home for Gqeberha updates",text:"This is the first GQNews community update. Future stories will be independently written, dated and sourced before publication.",feature:true},
 {tag:"WHAT TO SUBMIT",date:"Community desk",title:"Events, public notices and practical local information",text:"Send the who, what, where and when — plus a contact person or source. A useful local detail beats a vague press release every time."},
 {tag:"EDITORIAL PROMISE",date:"GQNews standard",title:"Sources, corrections and clear labels matter",text:"We label notices, opinion and reporting clearly. If we make a material factual mistake, we correct it openly."}
];
function Card({story}){return h("article",{className:"story "+(story.feature?"feature":"")},h("p",{className:"tag"},story.tag),h("p",{className:"date"},story.date),h("h3",null,story.title),h("p",null,story.text),h("a",{href:"editorial-policy.html"},"Our publishing standards →"))}
createRoot(document.getElementById("article-grid")).render(h(React.Fragment,null,...stories.map((s,i)=>h(Card,{key:i,story:s}))));