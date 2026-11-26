  var $ = function(id){ return document.getElementById(id); };
  var intro=$('intro'), site=$('site'), view=$('view'), menu=$('menu'), menuList=$('menuList');
  var state={cat:'Arquitectura'}, timers=[];
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function clearTimers(){ timers.forEach(clearInterval); timers=[]; $('hdr').classList.remove('ctr'); view.classList.remove('mid'); }
  function top(){ window.scrollTo(0,0); }

  $('introImg').setAttribute('href', IMG.portada);

