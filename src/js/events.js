  document.addEventListener('click',function(e){ var b=e.target.closest && e.target.closest('[data-lang]'); if(b) setLang(b.getAttribute('data-lang')); });
  applyStatic();
  $('enter').addEventListener('click',function(){ enter(true); });
  $('logo').addEventListener('click',showCats);
  $('open').addEventListener('click',openMenu);
  $('close').addEventListener('click',closeMenu);
  document.addEventListener('keydown',function(e){ if(e.key==='Escape' && !menu.hidden) closeMenu(); });
  menuList.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b) return;
    if(b.getAttribute('data-go')==='about'){ closeMenu(); showAbout(); return; }
    if(b.getAttribute('data-go')==='contact'){ closeMenu(); showContact(); return; }
    state.cat=b.getAttribute('data-cat'); closeMenu(); showGrid();
  });
  view.addEventListener('click',function(e){
    var sk=e.target.closest('.skbtn');
    if(sk){ var box=sk.parentNode, open=!box.classList.contains('open'); box.classList.toggle('open',open); sk.setAttribute('aria-expanded',open?'true':'false');
      if(open){ setTimeout(function(){ var pn=$('skp'); if(pn && pn.scrollIntoView) pn.scrollIntoView({block:'nearest',behavior:reduce?'auto':'smooth'}); },480); }
      return; }
        var sl=e.target.closest('.sl'); if(sl){ stepSlide(+sl.getAttribute('data-sl'),+sl.getAttribute('data-g')); return; }
    var stg=e.target.closest('.stage'); if(stg){ stepSlide(1,+stg.getAttribute('data-g')); return; }
    var s=e.target.closest('.cat'); if(s){ state.cat=s.getAttribute('data-cat'); showGrid(); return; }
    var c=e.target.closest('.card'); if(c){ showProject(c.getAttribute('data-id')); return; }
    var bk=e.target.closest('[data-back]'); if(bk){ if(bk.getAttribute('data-back')==='grid') showGrid(); else showCats(); }
  });
  view.addEventListener('keydown',function(e){ var c=e.target.closest && e.target.closest('.card'); if(c && (e.key==='Enter'||e.key===' ')){ e.preventDefault(); showProject(c.getAttribute('data-id')); return; } var q=e.target.closest && e.target.closest('.cat'); if(q && (e.key==='Enter'||e.key===' ')){ e.preventDefault(); state.cat=q.getAttribute('data-cat'); showGrid(); } });
  document.addEventListener('keydown',function(e){ if(e.key==='ArrowRight') stepSlide(1); else if(e.key==='ArrowLeft') stepSlide(-1); });
  var tx=null, tg=0;
  view.addEventListener('touchstart',function(e){ var sg=e.target.closest('.stage'); tx=sg?e.touches[0].clientX:null; tg=sg?+sg.getAttribute('data-g'):0; },{passive:true});
  view.addEventListener('touchend',function(e){ if(tx===null) return; var dx=e.changedTouches[0].clientX-tx; tx=null; if(Math.abs(dx)>40){ e.preventDefault(); stepSlide(dx<0?1:-1,tg); } });
  if(location.hash==='#trabajo') enter(false);
