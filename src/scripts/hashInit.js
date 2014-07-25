(function() {
    var hashInit = function() {
        var hash = window.location.hash;
        if (hash == null || hash == '') {
            hash = '#';
        }
        console.log('initHash - ' + hash);
        var links = document.querySelectorAll('[href="' + hash + '"]');
        if (links) {
            var nlinks = links.length;
            for (var i = 0; i < nlinks; i++) {
                console.log('clicking link');
                links[i].onclick && links[i].onclick();
            }
        }
    };
    window.addEventListener("hashchange", hashInit, false);
    onPageLoad(hashInit);
})();
