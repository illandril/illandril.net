(function() {
    var pageInitActions = [];
    window.onPageLoad = function(fn) {
        fn();
        pageInitActions.push(fn);
    };

    window.addCSSClass = function(elem, cssClass) {
        elem.className = elem.className + ' ' + cssClass;
    };

    window.removeCSSClass = function(elem, cssClass) {
        var newClasses = [];
        var oldClasses = elem.className.split(' ');
        var nOldClasses = oldClasses.length;
        for (var i = 0; i < nOldClasses; i++) {
            if (oldClasses[i] !== '' && oldClasses[i] != cssClass) {
                newClasses.push(oldClasses[i]);
            }
        }
        elem.className = newClasses.join(' ');
    };

    var afterClassUpdate = function(fn) {
        // Firefox (at least) doesn't like really fast class changes on new elements. 60ms seems to work reliably without being noticeable.
        setTimeout(fn, 60);
    };

    var currentIndex = -1;

    var resetLinks = function() {
        var nav = document.querySelector('nav');
        removeCSSClass(nav, 'c0');
        removeCSSClass(nav, 'c1');
        removeCSSClass(nav, 'c2');
        var links = document.querySelectorAll('nav a');
        var nLinks = links.length;

        for (var li = 0; li < nLinks; ++li) {
            var link = links[li];
            link.navIndex = li;
            if (link.href == window.location.href) {
                addCSSClass(link, 'current');
                currentIndex = li;
            } else {
                removeCSSClass(link, 'current');
            }
        }
        if (currentIndex >= 0) {
            addCSSClass(nav, 'c' + currentIndex);
        }
    };

    var getState = function(href) {
        var state = null;
        if (href.lastIndexOf('/') == (href.length - 1)) {
            state = -1;
        } else {
            var links = document.querySelectorAll('nav a');
            var nLinks = links.length;
            for (var li = 0; li < nLinks; ++li) {
                if (links[li].href == window.location.href) {
                    state = li;
                    break;
                }
            }
            if (state === null) {
                state = 'fs';
            }
        }
    };

    var getText = function(elem) {
        return elem === null ? null : (elem.textContent || elem.innerText || null);
    };

    var updatePage = function(uri) {
        trackView();

        var activePage = document.querySelector('main .active x-page');
        var title = getText(activePage.querySelector('x-title')) || 'Joe Spandrusyszyn\'s Portfolio';
        document.title = title;

        var description = getText(activePage.querySelector('x-description')) || 'Joe Spandrusyszyn\'s Portfolio';
        document.querySelector('meta[name="description"]').content = description;

        var backBar = document.querySelector('.backbar');
        var nav = document.querySelector('nav');

        var backURL = getText(activePage.querySelector('x-backURL'));
        if (backURL !== null && backURL.length > 0) {
            var backTitle = getText(activePage.querySelector('x-backTitle')) || title;
            backBar.querySelector('a').href = backURL;
            backBar.querySelector('span').innerHTML = '';
            backBar.querySelector('span').appendChild(document.createTextNode(backTitle));

            addCSSClass(nav, 'back');
        } else {
            removeCSSClass(nav, 'back');
        }

        resetLinks();
        window.refreshSocials();
        var nPageInitActions = pageInitActions.length;
        for (var i = 0; i < nPageInitActions; i++) {
            pageInitActions[i]();
        }
    };

    var snackbar = function(message, actionText, action) {
        var bar = document.createElement('div');
        bar.className = 'snackbar';

        var txt = document.createElement('span');
        txt.className = 'msg';
        txt.appendChild(document.createTextNode(message));

        bar.appendChild(txt);

        if (action) {
            var btn = document.createElement('span');
            btn.className = 'btn';
            btn.onclick = action;
            btn.appendChild(document.createTextNode(actionText));
            bar.appendChild(btn);
        }
        document.body.appendChild(bar);
        afterClassUpdate(function() {
            addCSSClass(bar, 'active');
            setTimeout(function() {
                removeCSSClass(bar, 'active');
                setTimeout(function() {
                    document.body.removeChild(bar);
                }, 1000);
            }, 6000);
        });
    };

    if (window.history.pushState) {
        var currentHref = window.location.href;
        var hasPushed = false;
        var currentState = getState(window.location.href);
        var forFOF = false;

        var afterContentTransition = function(fn) {
            setTimeout(fn, 1000);
        };

        var scrollToTop = function() {
            var top = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            if (top !== 0) {
                window.requestAnimFrame(scrollToTop);
                window.scrollTo(0, (top * (3 / 4)) - 2);
            }
        };

        var fetch = function(href, callback, skipPush, state) {
            console.log('fetch-' + href);
            var url = href;
            if (url.charAt(url.length - 1) == '/') {
                url = '/index.html';
            }
            url = url.replace('.html', '.part.html');
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true /* async */ );
            xhr.onload = function() {
                if (xhr.status == 200) {
                    callback(xhr.responseText);
                    currentHref = href;
                    updatePage(href);
                } else {
                    snackbar('The page could not be loaded.', 'Notify', function() {
                        window.open('mailto:webmaster@illandril.net?subject=Broken Link&body=The following URL didn\'t load: ' + encodeURIComponent(href));
                    });
                    trackEvent('badstatus', xhr.status, href);
                    if (!skipPush) {
                        forFOF = true;
                        window.history.back();
                    } else {
                        currentHref = href;
                        updatePage(href);
                    }
                }
            };

            xhr.onerror = function() {
                snackbar('The page could not be loaded.', 'Notify', function() {
                    window.open('mailto:webmaster@illandril.net?subject=Broken Link&body=The following URL didn\'t load: ' + encodeURIComponent(href));
                });
                trackEvent('error', 'xhr', href);
                if (!skipPush) {
                    forFOF = true;
                    window.history.back();
                } else {
                    currentHref = href;
                    updatePage(href);
                }
            };

            xhr.send();
            currentState = state;
            if (!skipPush) {
                hasPushed = true;
                window.history.pushState(state, null, href);
            }
        };

        var clearOldMains = function() {
            var main = document.querySelector('main');
            var extraOld = document.querySelectorAll('main > div:not(.active)');
            if (extraOld) {
                var nOld = extraOld.length;
                for (var i = 0; i < nOld; i++) {
                    main.removeChild(extraOld[i]);
                }
            }
        };

        var newActiveMain = function(content) {
            clearOldMains();
            var newContent = document.createElement('div');
            var newContentInner = document.createElement('div');
            newContentInner.innerHTML = content;
            newContent.appendChild(newContentInner);
            newContent.className = 'active';
            return newContent;
        };

        var loadFS = function(href, skipPush) {
            if (href == currentHref) {
                console.log('skip loadFS - no URL change');
                return;
            }
            console.log('loadFS-' + href);
            fetch(href, function(responseText) {
                var main = document.querySelector('main');
                var newContent = newActiveMain(responseText);
                var oldContent = document.querySelector('main > div');
                addCSSClass(newContent, 'fs');
                addCSSClass(newContent, 'right');
                addCSSClass(newContent, 'z1');
                removeCSSClass(oldContent, 'active');
                main.appendChild(newContent);
                afterClassUpdate(function() {
                    removeCSSClass(newContent, 'right');
                    afterContentTransition(function() {
                        if (main.contains(oldContent)) {
                            main.removeChild(oldContent);
                        }
                    });
                });
                scrollToTop();
            }, skipPush, 'fs');
        };

        var loadNFS = function(href, skipPush) {
            if (href == currentHref) {
                console.log('skip loadNFS - no URL change');
                return;
            }
            console.log('loadNFS-' + href);
            fetch(href, function(responseText) {
                var main = document.querySelector('main');
                var newContent = newActiveMain(responseText);
                var oldContent = document.querySelector('main > div');
                removeCSSClass(oldContent, 'active');
                addCSSClass(oldContent, 'right');
                main.appendChild(newContent);
                afterContentTransition(function() {
                    if (main.contains(oldContent)) {
                        main.removeChild(oldContent);
                    }
                });
                scrollToTop();
            }, skipPush, getState(href));
        };

        var loadBack = function(href, newState) {
            if (forFOF) {
                // Nothing to load for 404/error window.history.back changes
                forFOF = false;
                return;
            }
            console.log('loadBack-' + href);
            if (currentState == 'fs') {
                loadNFS(href, true);
            } else {
                if (newState == 'fs') {
                    loadFS(href, true);
                } else {
                    load(href, newState, true);
                }
            }
        };

        var load = function(href, index, skipLoad) {
            if (href == currentHref) {
                console.log('skip load - no URL change');
                return;
            }
            console.log('load-' + href);
            if (typeof(index) != 'number') {
                if (href.indexOf('.html') == -1) {
                    index = -1;
                } else {
                    index = 99;
                }
            }
            var toRight = currentIndex > index;
            currentIndex = index;
            fetch(href, function(responseText) {
                var main = document.querySelector('main');
                var newContent = newActiveMain(responseText);
                var oldContent = document.querySelector('main > div');
                removeCSSClass(oldContent, 'active');
                var newContentSide = toRight ? 'left' : 'right';
                addCSSClass(newContent, newContentSide);
                main.appendChild(newContent);
                afterClassUpdate(function() {
                    addCSSClass(oldContent, toRight ? 'right' : 'left');
                    removeCSSClass(newContent, newContentSide);
                    afterContentTransition(function() {
                        if (main.contains(oldContent)) {
                            main.removeChild(oldContent);
                        }
                    });
                });
            }, skipLoad, index);
        };

        var historify = function(link) {
            if (link.target !== '') {
                // Don't historify links that open in other windows
                return;
            }
            if (link.getAttribute('data-fs') == 'y') {
                link.onclick = function(e) {
                    loadFS(link.href);
                    return false;
                };
            } else if (link.getAttribute('data-cfs') == 'y') {
                link.onclick = function() {
                    loadNFS(link.href);
                    return false;
                };
            } else {
                link.onclick = function() {
                    load(link.href, link.navIndex);
                    return false;
                };
            }
        };

        var mainReset = resetLinks;
        resetLinks = function() {
            mainReset();
            var links = document.querySelectorAll('a[href^="/"]');
            var nLinks = links.length;
            for (var li = 0; li < nLinks; li++) {
                historify(links[li]);
            }
        };

        window.addEventListener("popstate", function(e) {
            console.log('popstate');
            console.dir(e);
            if (hasPushed) {
                var href = location.href;
                if (href.indexOf('#') !== -1) {
                    href = href.substring(0, href.indexOf('#'));
                }
                console.log('popstate - hasPushed - ' + href);
                loadBack(href, e.state);
            }
        });
    }

    updatePage(location.pathname);
})();
