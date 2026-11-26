  var SKILLS = [
    {g:'Dibujo y modelado', r:[['AutoCAD',5],['Revit',4],['Rhinoceros',5],['SketchUp',5]]},
    {g:'Renderizado', r:[['D5',4],['Enscape',3],['Lumion',4.5]]},
    {g:'Adobe Creative Suite', r:[['Illustrator',5],['InDesign',3.5],['Photoshop',5],['Premiere Pro',3.5]]}
  ];
  var STAR_D = 'M12 1 L14.6 9 L23 10.6 L14.9 13.8 L12.8 23 L9.6 14.7 L1 12.2 L9.3 9.4 Z';
  function star(v){
    var s = '<span class="st"><svg class="o" viewBox="0 0 24 24"><path d="'+STAR_D+'"/></svg>';
    if(v>=1) s += '<svg class="f" viewBox="0 0 24 24"><path d="'+STAR_D+'"/></svg>';
    else if(v>=.5) s += '<svg class="f half" viewBox="0 0 24 24"><path d="'+STAR_D+'"/></svg>';
    return s+'</span>';
  }
  function skillsHTML(){
    var grid = '<div class="skgrid">'+SKILLS.map(function(g){
      return '<div><h3>'+esc(T[L].grp[g.g]||g.g)+'</h3><ul>'+g.r.map(function(r){
        var n=r[1], st='';
        for(var i=0;i<5;i++) st+=star(Math.max(0,Math.min(1,n-i)));
        return '<li aria-label="'+esc(r[0])+', '+n+' '+t('of')+' 5"><span>'+esc(r[0])+'</span><span class="stars" aria-hidden="true">'+st+'</span></li>';
      }).join('')+'</ul></div>';
    }).join('')+'</div>';
    return '<div class="skills"><button class="skbtn" type="button" aria-expanded="false" aria-controls="skp"><span>Skills</span><i aria-hidden="true"></i></button><div class="skpanel" id="skp"><div class="skin">'+grid+'</div></div></div>';
  }
  function showAbout(){
    clearTimers(); state.view='about';
    view.innerHTML = '<button class="back" type="button" data-back="cats">'+t('back')+'</button><section class="about"><div class="picwrap"><img src="'+IMG.retrato+'" alt="Sofia Uribe"></div><div class="txt"><h1>'+t('about')+'</h1>'
      +t('ab1')
      +t('ab2')
      +'<dl><dt>'+t('studies')+'</dt><dd>'+t('studiesv')+'</dd>'
      +'<dt>'+t('now')+'</dt><dd>'+t('nowv')+'</dd>'
      +'<dt>'+t('contact')+'</dt><dd><a href="mailto:'+MAIL+'">'+MAIL+'</a></dd></dl>'+skillsHTML()+'</div></section>';
    top();
  }

