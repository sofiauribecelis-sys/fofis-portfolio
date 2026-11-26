  var RENDERS={neos:1,oficina:1,blacknova:1};
  P.forEach(function(p){ if(!p.gals){ p.desc=p.text||[]; p.text=[]; var e=EN[p.id]; if(e && e.text && !e.desc) e.desc=e.text; p.gals=[{k:RENDERS[p.id]?'renders':'plain',ids:p.gal}]; p.fit=true; p.fitbg=RENDERS[p.id]?'#111':'var(--card)'; } });
  function g(p,k){ if(L==='en'){ var e=EN[p.id]; if(e && e[k]!==undefined) return e[k]; } return p[k]; }
  function gl(p){ if(L!=='en') return p.lines; return p.lines.map(function(l){ return l.replace(/^Modelado/,'Modeling').replace(/^Planos/,'Drawings').replace(/^Renderizado/,'Rendering').replace(/^Posproducción/,'Post-production').replace(/ e /g,' and ').replace(/ y /g,' and '); }); }
  function cr(c){ return L==='en' ? c.replace('Proyecto de Designlab by Schaller.','Designlab by Schaller project.').replace('Fotografía:','Photography:') : c; }

