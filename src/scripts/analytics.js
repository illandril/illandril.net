(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
window['ga']('create', 'UA-52492365-3', 'auto');

var trackEvent = function(category, action, label) {
  console.log('trackEvent-' + category + ',' + action + ',' + label);
  window['ga']('send', 'event', category, action, label);
};

var trackView = function() {
  var page = window.location.pathname + window.location.search + window.location.hash;
  console.log('trackView-' + page);
  window['ga']('send', 'pageview', page);
  trackEvent('page', page);
};
