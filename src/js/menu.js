  function buildMenu(){
    menuList.innerHTML = CATS.map(function(c){ return '<li><button type="button" data-cat="'+esc(c)+'">'+esc(cl(c))+'</button></li>'; }).join('')
      +'<li><button type="button" data-go="about">'+t('about')+'</button></li><li><button type="button" data-go="contact">'+t('contact')+'</button></li>';
  }
  function openMenu(){ buildMenu(); menu.hidden=false; $('open').setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; $('close').focus(); }
  function closeMenu(){ menu.hidden=true; $('open').setAttribute('aria-expanded','false'); document.body.style.overflow=''; $('open').focus(); }

  function enter(animate){
    site.hidden=false; showCats(); history.replaceState(null,'','#trabajo');
    if(!animate || reduce || !intro.animate){ intro.hidden=true; return; }
    var ease='cubic-bezier(.6,0,.3,1)', dur=1400;
    document.body.style.overflow='hidden';
    intro.style.cssText='position:fixed;inset:0;z-index:35;background:var(--bg);';
    site.animate([{transform:'translateY(100vh)'},{transform:'translateY(0)'}],{duration:dur,easing:ease});
    var svg=intro.querySelector('svg'), btn=$('enter');
    if(svg) svg.animate([{transform:'translateY(0)'},{transform:'translateY(-14vh)'}],{duration:dur,easing:ease,fill:'forwards'});
    if(btn) btn.animate([{opacity:1},{opacity:0}],{duration:dur*.5,easing:'ease-out',fill:'forwards'});
    var a=intro.animate([{transform:'translateY(0)'},{transform:'translateY(-100%)'}],{duration:dur,easing:ease,fill:'forwards'});
    a.onfinish=function(){ intro.hidden=true; intro.style.cssText=''; document.body.style.overflow=''; window.scrollTo(0,0); };
  }

