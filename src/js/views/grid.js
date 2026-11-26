  /* Grilla de una categoría: fotos en su formato original, alineadas por fila */
  function showGrid(){
    clearTimers(); state.view='grid';
    var list = P.filter(function(p){return p.cat===state.cat;});
    var body = list.length ? list.map(function(p){
      return '<div class="card" role="button" tabindex="0" data-id="'+p.id+'" style="--ar:'+AR[p.cover]+'" aria-label="'+t('open')+' '+esc(g(p,'title'))+'"><span class="ph"><img src="'+IMG[p.cover]+'" alt="'+esc(g(p,'title'))+'"><span class="more">'+t('more')+'</span></span><h2>'+esc(g(p,'title'))+'</h2><p>'+esc(g(p,'sub'))+'</p></div>';
    }).join('') : '<div class="empty">'+esc(cl(state.cat))+'<small>'+t('catsoon')+'</small></div>';
    view.innerHTML = '<button class="back" type="button" data-back="cats">'+t('back')+'</button><div class="grid">'+body+'</div>';
    top();
  }
