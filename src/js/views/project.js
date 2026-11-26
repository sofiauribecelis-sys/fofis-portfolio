  var POS={mm19:'50% 25%'};
  function fit(k,p){ if(p&&p.fit){ var r=AR[k]/1.7778; return (r>=0.86&&r<=1.16)?'':'object-fit:contain;background:'+p.fitbg+';'; } return AR[k]<1.2?'object-fit:contain;background:#111;':''; }
  function slideHTML(p,gi){
    var G=p.gals[gi], n=G.ids.length, idx=state.sis[gi], k=G.ids[idx];
    var ar='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4 L17 12 L9 20" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
    return '<div class="slider"><div class="stage" data-g="'+gi+'"><img style="'+fit(k,p)+'object-position:'+(POS[k]||'50% 50%')+'" src="'+IMG[k]+'" alt="'+esc(g(p,'title'))+', '+(G.k==='plain'?t('image'):t('g_'+G.k))+' '+(idx+1)+'"></div>'
      +(n>1?'<button class="sl prev" type="button" data-g="'+gi+'" data-sl="-1" aria-label="'+t('prev')+'">'+ar+'</button><button class="sl next" type="button" data-g="'+gi+'" data-sl="1" aria-label="'+t('next')+'">'+ar+'</button>':'')
      +'<div class="meta"><div class="lft"><span class="cap">'+(G.caps?esc(G.caps[L][idx]):'')+'</span>'+((gi===p.gals.length-1&&p.credit)?'<span class="crin">'+esc(cr(p.credit))+'</span>':'')+'</div><span class="cnt">'+(idx+1)+' / '+n+'</span></div></div>';
  }
  function galHTML(p){
    if(!p.gals){
      return '<div class="shots">'+p.gal.map(function(k,i){ return '<img style="--ar:'+AR[k]+'" src="'+IMG[k]+'" alt="'+esc(g(p,'title'))+', '+t('image')+' '+(i+1)+'">'; }).join('')+'</div>';
    }
    return p.gals.map(function(G,gi){ return '<section class="galsec'+(G.k==='built'?' rt':'')+'">'+(G.k==='plain'?'':'<h2 class="gt">'+esc(t('g_'+G.k))+'</h2>')+'<div id="sl'+gi+'">'+slideHTML(p,gi)+'</div></section>'; }).join('');
  }
  function renderGal(p,gi){ var box=$('sl'+gi); if(box) box.innerHTML=slideHTML(p,gi); }
  function nearGroup(){
    var best=0,bd=1e9,c=window.innerHeight/2;
    Array.prototype.forEach.call(document.querySelectorAll('.galsec'),function(el,i){ var r=el.getBoundingClientRect(), d=Math.abs((r.top+r.bottom)/2-c); if(d<bd){bd=d;best=i;} });
    return best;
  }
  function stepSlide(d,gi){
    var p=P.filter(function(x){return x.id===state.pid;})[0]; if(!p||state.view!=='project'||!p.gals) return;
    if(gi===undefined) gi=nearGroup();
    var n=p.gals[gi].ids.length; state.sis[gi]=(state.sis[gi]+d+n)%n; renderGal(p,gi);
  }
  function showProject(id){
    clearTimers();
    var p = P.filter(function(x){return x.id===id;})[0]; if(!p) return;
    if(state.pid!==id || state.view!=='project'){ state.sis=[0,0,0]; }
    state.view='project'; state.pid=id;
    var wide=!!p.desc; if(!state.sis) state.sis=[0,0,0];
    var roleP='<p><strong>'+t('role')+'</strong> '+esc(g(p,'role'))+'</p>';
    var toggle='';
    view.innerHTML = '<button class="back" type="button" data-back="grid">'+t('back')+'</button><article class="proj'+(wide?' wide':'')+'"><div class="head"><div class="hd">'
      +(p.tag?'<span class="tag">'+esc(g(p,'tag'))+'.</span>':'')+'<h1>'+esc(g(p,'title'))+'</h1>'
      +(g(p,'loc')?'<p class="loc">'+esc(g(p,'loc'))+'</p>':'')+(g(p,'by')?'<p class="by">'+esc(g(p,'by'))+'</p>':'')
      +(g(p,'desc')?'<div class="desc">'+g(p,'desc').map(function(x){return '<p>'+esc(x).replace(/[A-ZÁÉÍÓÚÑ]{4,}/g,'<em>$&</em>')+'</p>';}).join('')+roleP+(p.link?'<p><a href="'+p.link+'" target="_blank" rel="noopener">'+t('behance')+'</a></p>':'')+'</div>':'')+(p.lines&&p.lines.length?'<ul class="lines'+(wide?' sm':'')+'">'+gl(p).map(function(l){return '<li>'+esc(l)+'</li>';}).join('')+'</ul>':'')
      +'</div>'+(wide?'':'<div class="copy">'
      +(g(p,'text')||[]).map(function(x){return '<p>'+esc(x)+'</p>';}).join('')
      +roleP
      +(p.link?'<p><a href="'+p.link+'" target="_blank" rel="noopener">'+t('behance')+'</a></p>':'')
      +'</div>')+'</div>'+toggle+'<div id="gal">'+galHTML(p)+'</div>'+((p.credit&&!p.gals)?'<p class="credit">'+esc(cr(p.credit))+'</p>':'')+'</article>';
    top();
  }
