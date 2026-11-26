  /* Página de las 3 categorías, con imágenes que pasan */
  var CATCOVER={Arquitectura:'macarena'};
  function showCats(){
    clearTimers(); state.view='cats'; $('hdr').classList.add('ctr'); view.classList.add('mid');
    view.innerHTML = '<div class="cats">'+CATS.map(function(c){
      var ps = P.filter(function(p){return p.cat===c;});
      var cp = CATCOVER[c] ? ps.filter(function(p){return p.id===CATCOVER[c];}) : ps;
      var imgs = cp.map(function(p){ return '<img src="'+IMG[p.cover]+'" alt="" '+'>'; }).join('');
      return '<div class="cat" role="button" tabindex="0" data-cat="'+esc(c)+'" aria-label="'+t('open')+' '+esc(cl(c))+'"><div class="sq'+(ps.length?'':' empty')+'">'+imgs+(ps.length?'':'<span class="soon">'+t('soon')+'</span>')+'</div><span class="nm">'+esc(cl(c))+'</span></div>';
    }).join('')+'</div>';
    Array.prototype.forEach.call(view.querySelectorAll('.sq'),function(sq){
      var im = sq.querySelectorAll('img'); if(!im.length) return;
      var i = 0; im[0].className='on';
      if(im.length>1 && !reduce){ timers.push(setInterval(function(){ im[i].className=''; i=(i+1)%im.length; im[i].className='on'; }, 2600)); }
    });
    top();
  }

