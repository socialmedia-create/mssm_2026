document.addEventListener("DOMContentLoaded",()=>{
 const processInstagram=()=>{if(window.instgrm?.Embeds)window.instgrm.Embeds.process()};
 processInstagram();
 window.addEventListener("load",processInstagram);
 const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".navlinks");
 if(menu)menu.addEventListener("click",()=>nav?.classList.toggle("open"));
 document.querySelectorAll(".navlinks>a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));
 document.querySelectorAll(".dropbtn").forEach(btn=>btn.addEventListener("click",e=>{if(innerWidth<=1000){e.preventDefault();btn.parentElement.classList.toggle("open")}}));
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));
 document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
 const modal=document.getElementById("eventModal");
 const open=()=>{if(!modal)return;modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"};
 const close=()=>{if(!modal)return;modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""};
 document.querySelectorAll("[data-open-event]").forEach(x=>x.addEventListener("click",open));document.querySelectorAll("[data-close-event]").forEach(x=>x.addEventListener("click",close));modal?.addEventListener("click",e=>{if(e.target===modal)close()});document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});

});

document.addEventListener("DOMContentLoaded",()=>{
 document.querySelectorAll(".dropbtn").forEach(btn=>{
   btn.addEventListener("click",()=>{
     const open=btn.parentElement.classList.contains("open");
     btn.setAttribute("aria-expanded",String(!open));
   });
 });
 document.addEventListener("click",e=>{
   document.querySelectorAll(".dropdown.open").forEach(d=>{
     if(!d.contains(e.target)){d.classList.remove("open");d.querySelector(".dropbtn")?.setAttribute("aria-expanded","false")}
   });
 });
 document.querySelectorAll(".navlinks a").forEach(a=>a.addEventListener("click",()=>{
   document.querySelector(".navlinks")?.classList.remove("open");
 }));
 const search=document.querySelector("[data-faculty-search]"), filter=document.querySelector("[data-faculty-filter]");
 const cards=[...document.querySelectorAll("[data-faculty-card]")];
 const apply=()=>{
   const q=(search?.value||"").toLowerCase().trim(), f=(filter?.value||"").toLowerCase();
   cards.forEach(c=>{const text=c.textContent.toLowerCase(), dept=(c.dataset.department||"").toLowerCase(); c.style.display=(!q||text.includes(q))&&(!f||dept===f)?"":"none"});
 };
 search?.addEventListener("input",apply); filter?.addEventListener("change",apply);
 document.querySelectorAll("[data-counter]").forEach(el=>{
   const target=parseInt(el.dataset.counter,10); if(!Number.isFinite(target))return;
   const obs=new IntersectionObserver(es=>es.forEach(x=>{
     if(!x.isIntersecting)return;
     let n=0; const step=Math.max(1,Math.ceil(target/40));
     const tick=()=>{n=Math.min(target,n+step);el.textContent=n.toLocaleString();if(n<target)requestAnimationFrame(tick)};
     tick();obs.unobserve(el);
   }),{threshold:.6});obs.observe(el);
 });
});
