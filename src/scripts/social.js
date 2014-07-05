(function() {
    'use strict';
    var Site = function(url, linkTitle, icon) {
        this.url = url;
        this.linkTitle = linkTitle;
        this.icon = icon;
    };

    Site.prototype.getURL = function() {
        return this.url.replace("%URL%", encodeURIComponent(window.location)).replace("%TITLE%", encodeURIComponent(document.title));
    };

    var sites = [
        new Site('https://plus.google.com/share?url=%URL%', 'Share', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB94GHhceHuxBtboAAAMYSURBVEjHvZRbTFRXFIa/fc4ZzjAzAs2IXGZKUbCxlngrprFXk9ImXqJJX0j70D7V+NCHxktNTFqDl9i0SoO2NJEHYgk0jdKWNEa8Q2JaSGgzJE1jIqYBBEbJGWY4gA7D2ceH0RntTCUD2vW0dva//3X591rwlE0A/L1xZa2UuJ8ksSK5vPx8748aAFJ+oAjF+yQDSFXcAe4HAGyh4ql8FeeKl3D4SlH0bBSnnvJwqrcHo6keYVsAqAV+fDXHGL/QRrj1ZApeA3AuXz2waMcBb7S/j8muK0wP3CB303vopWUATA/1c/evP5kOjhD+pSlBDiAcCo5CP2pOXtpKNADf4YZI+MwpjBNfghAAmJ3nKP68juyKNWQVPctowxHuBrrjomWixQPHPNeaII+nHeX2t4fAlqAo5G/fA4qSsRYJDWbGjJTLmZFBpgLduFavI6vQj17+AjORCL6aYwmMrcQpcqq24n75zYdal11JcXGyAnVBbtoMJro6ktkU+uZegb54KbHhgRRAbHgw4VuRENatmwxsfzdJ4C/huW9OM36xDaOxLvlNET2PaOBZv+nx/3pqgmjftcwH7oHjrnwF54trUgC5b28FIHSqEXtyYu4tQigUfVaL8cMJpv64ikDD/VoVntffIdzWTOTnprQEdkwSC97EGg//9y4a/GL3Re9Hn76lenJSAGM/NRH6/njmqwJRV3E28IkGYHa0rzI7z6MsyAOXC//+ehwFxUjLwmipz3i40moAIM0wMjiE5l0Uv1RV3BVr57dVU5smmAx0JY4Fe7/C88aGOQdIiCycbrLKluHIL8QKDiUzyNIp2FGDXvY8xsnjIGVGAVSAgy2nqxdu21XkXLIUoWrEgoOYv11By3sm0S7nshXoJeWY3ZcR0p6V2EZ01/cF2zWA6D83XLe+3ocMhx4BmZd+ZeGHH5O35X0QAve69XirtxFq/i4zDUKNtfn/JgcQ0sJorGP40E7kdDQ+eJursYU6D5HT2J2eq4w2HI0/yHahul2Ziiz6JXbksUECv+vAdcsMq5ZpFtnCVmaZNIP/w+4BsRcImLx9/LsAAAAASUVORK5CYII='),
        new Site('https://www.facebook.com/sharer/sharer.php?s=100&p[url]=%URL%&p[title]=%TITLE%', 'Share', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB94GHhceNDf6fGwAAAERSURBVEjHY2CgMWBkYGBgsIiY2cf4n4mbmgYzMf7dd3RFxkoWiC1McYyMDMLUtOAfI8t3BgaGlUy0DqKhbwELKYpdLBQZTHSlGIT4ORkOnHzAsO3wHepZ4GqtzFCVZg3n3374hro+MNGRYGBgYGB48+Ebw5SlpxkePvlAXQu42VkZGBgYGO4+fsdw8NRD6kbylFpPBmMdKQYGBgYGfTUJhqXdgQyBrhrUs0BchJuBgx3iWQ52FgYpMV6GX7/+Us+C7KbtDGeuPmNgYGBguHj9BUNUyTqGvcfvUS8OXr39yvDzxx8GBgYGhh+//zI8f/1lBOXkEVQW1Uw6MBoHtIyD//8fMjAyfqRqnfz/71sGegAAaB5Jh/q9WqQAAAAASUVORK5CYII='),
        new Site('https://twitter.com/intent/tweet?url=%URL%&via=illandril&text=%TITLE%', 'Tweet', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB94GHhceO6dFYf0AAAFqSURBVEjH7ZXLLkNRFIa/vc9RQRDXRiMxEFISIiYlYmIihhIDDLyEkQcw5DlIRKQPYFADSmekFbekaBzpTc9Bq3VsAwkR914kEmu4/qz9r3/tf+0NJQ4BML24uWijVRX1YGWvL80OLusAypYzUtJQ3Na1NLAsSz2if4LSEDjKwKF9r1T/DPR01BI4TmE/vOTG+puZGHCilMAXjHOeSLO+Fwclfq5gtK+JufF2XPXlAFSWSyYGnGhSomuCkZ5G3K4aNCHyU7B9ZDI51ML8lJvd0xQxM4cmX/fkDRivFP6IwO2qeNoZAb1ttW9w+0FhXGXyv+Q1f5S4dfchHjqzuLcLcFE4eouVeV+/UuANXBZmUyVgwXvMzknyDba6ZXBwcZu/TQWK4a56PJ11dLdWP+fNmywrfgNfMFnYHigEG6EEMTOH/zAJQpCwsuxHrr+c+7ddpBAEI9cQ+X/s/jKBDiCkCCtIFffTJ85vxCOL4nfh7ShmUgAAAABJRU5ErkJggg=='),
        new Site('mailto:?subject=%TITLE%&body=Check out this site: %URL%', 'Email', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB94GHhccDC3OpnAAAAJmSURBVEjHtZa/SytBEIC/3dtwSopgsLzXvJAiYiPYpDBtwF4wpYV/gC9obys8rKzEQhAsLDR/gEWQSLDSwtI0LwixMKnU+7mvMHesSV6ewjmw3MHOzTczO7NzYnt72wZ+ADbpigv8UYAD/AZ+AiIl4xroAL/U0PMCUEoZIABbGUZFioBYhIrf5ubmWF9fRylFFEXvu+LzPK01lmXR6/W4uLjAdV0AEsDm5ib5fJ4wDBFCoLVGa/1fiKkjhMBxHDzP4/z8HAAZK87MzPD29sZgMEgiiKIoAU1a8T7Ay8sLj4+PeJ6H4ziJA9L0RGvN1dUVx8fHvL6+Ytv2mCFTH8C2bXq9HoeHh9ze3mJZFlLKcYAQgkwmQ7lc5unpib29Pa6vr7FtG8uyElAMk1KilOLs7IyDgwNyuRyVSiWJPhY1GkE+n2dnZ4dWq0Wj0eD+/p61tTWy2SymM91ul9PTUwaDARsbGxSLxTHjHwCmhGHIysoKi4uLHB0dsb+/z+rqKqVSCc/zuLm5odlssrCwwNbWFplMhiAI3lNipGciQAiBEALf98nlctTrddrtNpeXl9zd3dHv95mdnaVWq7G0tITv+4RhOGZ4agSxJ3HJlstlCoUC7XabYrHI8vIy2WwW13WT8/iXqGk1LqUkiiKCIGB+fp5qtYpSCq01vu9PTMmXAGY3h2GIUuoDfJr+lwHmh9O6e7RfJGnfbsMimdho3yFylD4a4mdvUvNs+v3+OODk5CSp6SAIvrTMb56fn2k0GuOH3Ol02N3dTT1FajjeMJ5pjUwArYbT/8GYo2kOfVcBXaD+Tb8t3b8XGk87kGmZtgAAAABJRU5ErkJggg==')];
        //new Site('https://flattr.com/submit/auto?user_id=illandril&url=%URL%&title=%TITLE%', 'Flattr Me')];

    var addSocial = function(target, site) {
        var btn = document.createElement('span');
        btn.className = 'btn flat-btn';
        if (site.icon) {
            btn.className = 'btn flat-btn btn-icon';
            btn.style.backgroundImage = 'url(' + site.icon + ')';
        }
        btn.innerHTML = site.linkTitle;
        btn.title = site.linkTitle;
        btn.onclick = function() {
            window.open(site.getURL());
        };
        target.appendChild(btn);
        target.className = target.className + ' sbd';
    };

    var addSocials = function(target) {
        var nSites = sites.length;
        for (var i = 0; i < nSites; i++) {
            addSocial(target, sites[i]);
        }
    };

    window.refreshSocials = function() {
        var targets = document.querySelectorAll('.social-btns:not(.sbd)');
        var nTargets = targets.length;
        for (var i = 0; i < nTargets; i++) {
            addSocials(targets[i]);
        }
    };
})();
