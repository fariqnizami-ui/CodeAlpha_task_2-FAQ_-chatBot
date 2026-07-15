const faqs=[
["What is AI?","Artificial Intelligence (AI) enables computers to perform tasks that normally require human intelligence."],
["What is Machine Learning?","Machine Learning is a branch of AI where systems learn from data."],
["What is Deep Learning?","Deep Learning uses multi-layer neural networks."],
["What is NLP?","Natural Language Processing helps computers understand human language."],
["What is Python?","Python is a simple, high-level programming language."],
["What is Java?","Java is an object-oriented programming language."],
["What is HTML?","HTML structures web pages."],
["What is CSS?","CSS styles web pages."],
["What is JavaScript?","JavaScript adds interactivity to web pages."],
["What is GitHub?","GitHub is a platform for hosting Git repositories."],
["What is Streamlit?","Streamlit builds Python web apps for data science."],
["What is Data Science?","Data Science extracts insights from data."],
["What is ChatGPT?","ChatGPT is an AI conversational assistant."],
["What is Prompt Engineering?","Prompt Engineering is designing effective AI prompts."],
["What is Neural Network?","A Neural Network is a model inspired by the brain."],
["What is Computer Vision?","Computer Vision enables machines to understand images."],
["What is TensorFlow?","TensorFlow is an ML framework by Google."],
["What is PyTorch?","PyTorch is an open-source deep learning framework."],
["What is SQL?","SQL is used to manage relational databases."],
["What is Cloud Computing?","Cloud Computing delivers computing services over the internet."]
];
const stop=["what","is","the","a","an","about","tell","me","explain","does","do","of","to"];
const box=document.getElementById("chatBox");
const input=document.getElementById("userInput");
function add(sender,text){
 let d=document.createElement("div");
 d.className="msg "+sender;
 d.innerHTML='<div class="bubble">'+text+"</div>";
 box.appendChild(d); box.scrollTop=box.scrollHeight;
}
function norm(t){
 return t.toLowerCase().replace(/[^\w\s]/g,"").split(/\s+/).filter(x=>x&&!stop.includes(x));
}
function cosine(a,b){
 const vocab=[...new Set([...a,...b])];
 let va=[],vb=[];
 vocab.forEach(w=>{va.push(a.filter(x=>x==w).length);vb.push(b.filter(x=>x==w).length);});
 let dot=0,ma=0,mb=0;
 for(let i=0;i<va.length;i++){dot+=va[i]*vb[i];ma+=va[i]*va[i];mb+=vb[i]*vb[i];}
 if(!ma||!mb)return 0;
 return dot/(Math.sqrt(ma)*Math.sqrt(mb));
}
function reply(q){
 const qt=norm(q);
 let best=0,ans=null;
 faqs.forEach(f=>{
   const s=cosine(qt,norm(f[0]));
   if(s>best){best=s;ans=f[1];}
 });
 return best>0.2?ans:"Sorry, I don't have an answer for that question. Please ask one of the supported AI or programming questions.";
}
function send(){
 const q=input.value.trim();
 if(!q)return;
 add("user",q);
 input.value="";
 const t=document.createElement("div");
 t.className="typing";
 t.textContent="Bot is typing...";
 box.appendChild(t); box.scrollTop=box.scrollHeight;
 setTimeout(()=>{t.remove();add("bot",reply(q));},500);
}
document.getElementById("sendBtn").onclick=send;
input.addEventListener("keydown",e=>{if(e.key==="Enter")send();});
document.getElementById("clearBtn").onclick=()=>{box.innerHTML="";welcome();};
document.querySelectorAll(".suggestion").forEach(b=>b.onclick=()=>{input.value=b.textContent;send();});
function welcome(){add("bot","Welcome! Ask me any AI or programming FAQ.");}
welcome();
