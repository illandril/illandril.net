// Console shim
if (!console) {
    console = {
        assert: function() {},
        clear: function() {},
        count: function() {},
        debug: function() {},
        dir: function() {},
        error: function() {},
        info: function() {},
        log: function() {},
        table: function() {},
        trace: function() {},
        warn: function() {}
    };
}

// Paul Irish requestAnimFrame shim
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || function(callback) {
               window.setTimeout(callback, 1000 / 60);
           };
})();
