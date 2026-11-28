  /* Página de las 3 categorías, con carrusel vertical automático de proyectos */
  var CATFIRST={Arquitectura:'macarena'};
  function showCats(){
    clearTimers(); state.view='cats'; $('hdr').classList.add('ctr'); view.classList.add('mid');
    view.innerHTML = '<div class="cats">'+CATS.map(function(c){
      var ps = P.filter(function(p){return p.cat===c;});
      if(CATFIRST[c]) ps.sort(function(a,b){ return (b.id===CATFIRST[c]) - (a.id===CATFIRST[c]); });
      var imgs = ps.map(function(p){ return '<img src="'+IMG[p.cover]+'" alt="">'; });
      if(imgs.length>1) imgs.push(imgs[0]);
      return '<div class="cat" role="button" tabindex="0" data-cat="'+esc(c)+'" aria-label="'+t('open')+' '+esc(cl(c))+'"><div class="sq'+(ps.length?'':' empty')+'">'+(imgs.length?'<div class="vt">'+imgs.join('')+'</div>':'<span class="soon">'+t('soon')+'</span>')+'</div><span class="nm">'+esc(cl(c))+'</span></div>';
    }).join('')+'</div>';
    Array.prototype.forEach.call(view.querySelectorAll('.sq'),function(sq,n){
      var vt = sq.querySelector('.vt'); if(!vt) return;
      var total = vt.children.length; if(total<2 || reduce) return;
      var i = 0;
      function go(){
        i++; vt.style.transition='transform .9s cubic-bezier(.6,0,.2,1)'; vt.style.transform='translateY(-'+(i*100/total)+'%)';
        if(i===total-1){ setTimeout(function(){ vt.style.transition='none'; vt.style.transform='translateY(0)'; i=0; }, 950); }
      }
      setTimeout(function(){ timers.push(setInterval(go, 2800)); }, n*700);
    });
    top();
  }
