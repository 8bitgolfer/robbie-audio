(() => {
 const menu = document.querySelector('[data-menu]');
 const nav = document.querySelector('.nav-links');
 if(menu && nav){ menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));}); document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}});}
 const search = document.querySelector('[data-search]');
 const filters = [...document.querySelectorAll('[data-filter]')];
 const cards = [...document.querySelectorAll('[data-product]')];
 const noResults = document.querySelector('[data-no-results]');
 let category = 'all';
 function update(){const q=(search?.value || '').trim().toLowerCase(); let visible=0;cards.forEach(card=>{const matchCategory=category==='all' || card.dataset.category===category;const matchQuery=(card.dataset.search || card.textContent).toLowerCase().includes(q);const show=matchCategory&&matchQuery;card.classList.toggle('hidden',!show);if(show)visible++;});if(noResults)noResults.style.display=visible?'none':'block';}
 search?.addEventListener('input',update);
 filters.forEach(f=>f.addEventListener('click',()=>{category=f.dataset.filter;filters.forEach(x=>{x.classList.toggle('active',x===f);x.setAttribute('aria-pressed',String(x===f));});update();}));
 document.querySelectorAll('.accordion button').forEach(button=>button.addEventListener('click',()=>{const parent=button.closest('.accordion');const expanded=parent.classList.toggle('open');button.setAttribute('aria-expanded',String(expanded));button.querySelector('span').textContent=expanded?'−':'+';}));
 document.querySelectorAll('canvas[data-wave]').forEach(canvas=>{
  const draw=()=>{const w=Math.max(240,canvas.clientWidth),h=Math.max(180,canvas.clientHeight);const dpr=Math.min(window.devicePixelRatio || 1,2);canvas.width=w*dpr;canvas.height=h*dpr;const c=canvas.getContext('2d');c.scale(dpr,dpr);c.clearRect(0,0,w,h);
   const line=c.createLinearGradient(0,0,w,0);line.addColorStop(0,'#6944c9');line.addColorStop(.5,'#e48ac1');line.addColorStop(1,'#fb9964');
   c.strokeStyle='#322537';c.lineWidth=1;for(let i=0;i<8;i++){const y=(i+1)*h/9;c.beginPath();c.moveTo(0,y);c.lineTo(w,y);c.stroke();}
   c.strokeStyle=line;c.lineWidth=3;c.shadowBlur=20;c.shadowColor='#b451db';c.beginPath();for(let x=0;x<w;x++){const t=x/w;const env=.12+.65*Math.exp(-Math.pow((t-.57)/.28,2));const osc=Math.sin(t*110*Math.PI)*.58+Math.sin(t*38*Math.PI)*.25+Math.sin(t*201*Math.PI)*.14;const y=h*.59-osc*env*h*.35;if(x===0)c.moveTo(x,y);else c.lineTo(x,y);}c.stroke();c.shadowBlur=0;
   c.fillStyle='#ecaffb';c.font='700 11px DM Sans, sans-serif';c.fillText('SATURATION / WAVESHAPING',22,h-22);
  };draw();let handle;window.addEventListener('resize',()=>{cancelAnimationFrame(handle);handle=requestAnimationFrame(draw);});
 });
})();
