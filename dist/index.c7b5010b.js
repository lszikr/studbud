!function(){class e{constructor(e,t){this.links=e,this.pages=t,this.currentPage=null}getLinks(){console.log(this.links)}setPage(e){this.currentPage=e,console.log(this.currentPage),this.links.forEach((t=>{t.classList.remove("active"),this.getHash(t)===e&&t.classList.add("active")})),this.pages.forEach((e=>{e.style.display="none"})),document.getElementById(e).style.display="block"}getHash(e){return e.href.split("#")[1]}}const t=document.getElementById("taskform");document.querySelector("#taskform > button");var n=document.getElementById("taskInput"),i=document.getElementById("tasklist"),r=document.getElementById("dueDateInput"),c=document.getElementById("completionTimeInput"),o=document.getElementById("estimatedTimeInput"),l=document.getElementById("priorityInput");t.addEventListener("submit",(function(e){e.preventDefault();let u=n.value,d=r.value,m=c.value;!function(e,n,r,c,o,l){let u=(new Date).getFullYear(),d={id:Date.now(),taskDescription:e,dueDate:n,dateCreated:u,estimatedTime:r,completionTime:o,priorityRating:c,estimatedTime:r,completionStatus:l};s.push(d),console.log(s),function(e){a();let n=document.createElement("li");n.setAttribute("data-id",e.id),n.innerHTML="<p>"+e.taskDescription+"</p>",i.appendChild(n);let r=document.createElement("button"),c=document.createTextNode("Delete Task");r.appendChild(c),n.appendChild(r),r.addEventListener("click",(function(e){e.preventDefault(),console.log(s);let t=e.target.parentElement.getAttribute("data-id");console.log(t);let i=s.findIndex((e=>e.id===Number(t)));!function(e,t){t>-1&&e.splice(t,1)}(s,i),a(),n.remove()})),t.reset()}(d)}(u,d,o.value,l.options[l.selectedIndex].value,m,!1)}));var s=[];function a(){s.length>0?document.getElementById("emptyList").style.display="none":document.getElementById("emptyList").style.display="block"}var u=document.getElementsByClassName("stopwatch");[].forEach.call(u,(function(e){var t=0,n=0,i=(new Date).getTime(),r=e.querySelector("button.start"),c=e.querySelector("button.stop"),o=e.querySelector("button.reset"),l=e.querySelector("span.minutes"),s=e.querySelector("span.seconds"),a=e.querySelector("span.centiseconds");function u(e){return("00"+e).substr(-2)}function d(){var e=(new Date).getTime();t+=e-i;var n=new Date(t);l.innerHTML=u(n.getMinutes()),s.innerHTML=u(n.getSeconds()),a.innerHTML=u(Math.floor(n.getMilliseconds()/10)),i=e}function m(){clearInterval(n),n=0}r.addEventListener("click",(function(){n||(i=(new Date).getTime(),n=setInterval(d,1))})),c.addEventListener("click",m),o.addEventListener("click",(function(){m(),t=0,l.innerHTML=s.innerHTML=a.innerHTML=u(0)}))}));const d=document.querySelector(".music-container"),m=document.querySelector("#play"),y=document.querySelector("#prev"),g=document.querySelector("#next"),p=document.querySelector("#audio"),v=document.querySelector(".progress"),T=(document.querySelector(".progress-container"),document.querySelector("#title")),f=document.querySelector("#cover"),E=["joy","relax","meditation"];let L=2;function x(e){T.innerText=e,p.src=`music/${e}.mp3`,f.src=`images/${e}.jpg`}function I(){d.classList.add("play"),m.querySelector("i.fas").classList.remove("fa-play"),m.querySelector("i.fas").classList.add("fa-pause")}x(E[L]),m.addEventListener("click",(()=>{d.classList.contains("play")?(d.classList.remove("play"),m.querySelector("i.fas").classList.add("fa-play"),m.querySelector("i.fas").classList.remove("fa-pause")):I()})),y.addEventListener("click",(function(){L--,L<0&&(L=E.length-1),x(E[L]),I()})),g.addEventListener("click",(function(){L++,L>E.length-1&&(L=0),x(E[L]),I()})),p.addEventListener("timeupdate",(function(e){const{duration:t,currentTime:n}=e.srcElement,i=n/t*100;v.style.width=`${i}`}));var h,k=document.getElementById("start"),S=document.getElementById("reset"),q=document.getElementById("stop"),B=document.getElementById("w_minutes"),b=document.getElementById("w_seconds"),D=document.getElementById("b_minutes"),w=document.getElementById("b_seconds");function H(){0!=b.innerText?b.innerText--:0!=B.innerText&&0==b.innerText&&(b.innerText=59,B.innerText--),0==B.innerText&&0==b.innerText&&(0!=w.innerText?w.innerText--:0!=D.innerText&&0==w.innerText&&(w.innerText=59,D.innerText--)),0==B.innerText&&0==b.innerText&&0==D.innerText&&0==w.innerHTML&&(B.innerText,b.innerText,D.innerText,w.innerText,document.getElementById("counter").innerText++)}function M(){clearInterval(h)}k.addEventListener("click",(function(){void 0===h?h=setInterval(H,1e3):alert("Timer is already running")})),S.addEventListener("click",(function(){B.innerText=25,b.innerText="00",D.innerText=5,w.innerText="00",document.getElementById("counter").innerText=0,M(),h=void 0})),q.addEventListener("click",(function(){M(),h=void 0}));var A=new e(document.querySelectorAll(".top-nav > ul > li > a"),document.querySelectorAll(".page-container"));A.getLinks(),A.links.forEach((function(e){e.addEventListener("click",(function(){let t=A.getHash(e);A.setPage(t)}))}));var P=new e(document.querySelectorAll(".sub-nav > ul > li > a"),document.querySelectorAll(".sub-page-container"));P.links.forEach((e=>{e.addEventListener("click",(function(){let t=P.getHash(e);P.setPage(t)}))}))}();
//# sourceMappingURL=index.c7b5010b.js.map
