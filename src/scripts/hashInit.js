(function(){
  var hash = window.location.hash;
  if(hash && hash != '#'){
    console.log('initHash');
    console.log('[href="' + hash + '"]');
    var link = document.querySelector('[href="' + hash + '"]');
    if(link){
      console.log('clicking link');
      link.click();
    }
  }
})();
