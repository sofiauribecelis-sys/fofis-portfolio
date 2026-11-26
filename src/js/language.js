  function renderLang(){
    Array.prototype.forEach.call(document.querySelectorAll('.lang'),function(el){
      el.innerHTML='<button type="button" data-lang="es" aria-pressed="'+(L==='es')+'" aria-label="Español" lang="es">ES</button><span aria-hidden="true">/</span><button type="button" data-lang="en" aria-pressed="'+(L==='en')+'" aria-label="English" lang="en">EN</button>';
    });
  }
  function applyStatic(){
    document.documentElement.lang=L; document.title=t('title');
    var rl=document.querySelector('.rl'); if(rl) rl.textContent=t('rl');
    $('enter').textContent=t('enter'); intro.setAttribute('aria-label',t('intro'));
    var sv=intro.querySelector('svg'); if(sv) sv.setAttribute('aria-label',t('svg'));
    document.querySelector('.logo .t').textContent=t('rl'); $('logo').setAttribute('aria-label',t('logo'));
    $('open').setAttribute('aria-label',t('menuopen')); $('close').textContent=t('close'); $('close').setAttribute('aria-label',t('menuclose')); menu.setAttribute('aria-label',t('menu'));
    renderLang();
  }
  function setLang(l){
    if(l===L) return; L=l; try{ localStorage.setItem('lang',l); }catch(e){}
    var y=window.scrollY, sk=document.querySelector('.skills.open'), fv=$('cn')?[$('cn').value,$('ce').value,$('cm').value]:null;
    applyStatic();
    if(!site.hidden){
      var v=state.view;
      if(v==='project') showProject(state.pid); else if(v==='grid') showGrid(); else if(v==='about') showAbout(); else if(v==='contact') showContact(); else showCats();
      if(sk){ var b=document.querySelector('.skills'); if(b){ b.classList.add('open'); b.querySelector('.skbtn').setAttribute('aria-expanded','true'); } }
      if(fv && $('cn')){ $('cn').value=fv[0]; $('ce').value=fv[1]; $('cm').value=fv[2]; $('cm').dispatchEvent(new Event('input')); }
      window.scrollTo(0,y);
    }
    if(!menu.hidden) buildMenu();
  }
