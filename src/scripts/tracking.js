(function(){
    var trackify = function(link) {
        var event = link.getAttribute('data-trk');
        var id = link.getAttribute('data-id');
        link.removeAttribute('data-trk');
        link.removeAttribute('data-id');
        link.addEventListener('click', function() {
            window['ga']('send', 'event', event, 'click', id);
        }, false);
    };
    
    onPageLoad(function() {
        var links = document.querySelectorAll('[data-trk]');
        var nLinks = links.length;
        for (var li = 0; li < nLinks; li++) {
            
            trackify(links[li]);
        }
    });
})();
