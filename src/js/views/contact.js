  function showContact(){
    clearTimers(); state.view='contact';
    view.innerHTML = '<button class="back" type="button" data-back="cats">'+t('back')+'</button><section class="contact"><h1>'+t('contact')+'</h1>'
      +'<p class="lead">'+t('clead')+'</p>'
      +'<a class="mail" href="mailto:'+MAIL+'">'+MAIL+'</a>'
      +'<div class="cform"><label>'+t('cname')+'<input id="cn" type="text" autocomplete="name"></label>'
      +'<label>'+t('cmail')+'<input id="ce" type="email" autocomplete="email"></label>'
      +'<label>'+t('cmsg')+'<textarea id="cm" rows="5"></textarea></label>'
      +'<a class="send" id="cs" href="mailto:'+MAIL+'" target="_blank" rel="noopener">'+t('send')+'</a></div></section>';
    var n=$('cn'), e=$('ce'), m=$('cm'), s=$('cs');
    function upd(){
      var body = (m.value||'') + '\n\n' + (n.value?(t('bname')+n.value):'') + (e.value?('\n'+t('bmail')+e.value):'');
      s.href = 'mailto:'+MAIL+'?subject='+encodeURIComponent(t('subj'))+'&body='+encodeURIComponent(body.trim());
    }
    [n,e,m].forEach(function(x){ x.addEventListener('input',upd); });
    top();
  }

