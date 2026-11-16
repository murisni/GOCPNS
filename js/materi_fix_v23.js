/* v23: materi baru yang menggantikan materi lama untuk subtopik yang sama harus tetap menampilkan gambar/diagram bawaan. */
(function(){
  var M=window.MATERI||[];
  var hasImg=function(m){return (m.sections||[]).some(function(s){return /<img /.test(s.html||'')})};
  var imgs=function(m){var h=(m.sections||[]).map(function(s){return s.html||''}).join('');return (h.match(/img\/[a-z0-9\-]+\.png/g)||[]).join('|')};
  M.slice().forEach(function(old){
    if(!old.subs||!hasImg(old)) return;
    var oi=M.indexOf(old);
    M.forEach(function(nw,ni){
      if(nw===old||!nw.subs||nw.group!==old.group||ni>oi) return;
      var share=nw.subs.some(function(s){return old.subs.some(function(o){return o.toLowerCase().indexOf(s.toLowerCase())>-1||s.toLowerCase().indexOf(o.toLowerCase())>-1})});
      if(!share) return;
      var have=imgs(nw);
      var add=(old.sections||[]).filter(function(s){var m=(s.html||'').match(/img\/[a-z0-9\-]+\.png/g);return m&&m.some(function(x){return have.indexOf(x)<0})});
      if(add.length){nw.sections=(nw.sections||[]).slice(0,1).concat(add.map(function(s){return {title:s.title,html:s.html}}),(nw.sections||[]).slice(1))}
    });
  });
})();
