  var L='es'; try{ var sv=localStorage.getItem('lang'); if(sv==='en'||sv==='es') L=sv; }catch(e){}
  function t(k){ return T[L][k]; }
  function cl(c){ return T[L].cats[c]||c; }
