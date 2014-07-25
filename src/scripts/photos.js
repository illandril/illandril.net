(function() {
    var returnedExif = false;
    var getEXIFDisplay = function(exif, name, prettyName, transform) {
        var value = EXIF.getTag(exif, name);
        if (value == null) {
            return document.createComment('No ' + name + ' EXIF value');
        }
        var container = document.createElement('tr');

        var nameElem = document.createElement('td');
        nameElem.className = 'name';
        nameElem.appendChild(document.createTextNode(prettyName));
        container.appendChild(nameElem);

        if (transform) {
            value = transform(value);
        }
        var valueElem = document.createElement('td');
        valueElem.className = 'value';
        valueElem.appendChild(document.createTextNode(value));
        container.appendChild(valueElem);

        returnedExif = true;
        return container;
    };
    var showEXIF = function(image) {
        var exifDisplay = image.parentNode.parentNode.querySelector('.exif');
        EXIF.getData(image, function() {
            returnedExif = false;
            var exifTable = document.createElement('table');
            exifTable.appendChild(getEXIFDisplay(this, 'DateTimeOriginal', 'Date taken', function(value) {
                var split = value.split(' ');
                var dateSplit = split[0].split(':');
                var timeSplit = split[1].split(':');
                var dateString = new Date(dateSplit[0], dateSplit[1], dateSplit[2]).toLocaleDateString();
                var hour = parseInt(timeSplit[0], 10);
                var ampm = 'am';
                if (hour > 12) {
                    hour = hour - 12;
                    ampm = 'pm';
                }
                var timeString = hour + ':' + timeSplit[1] + ampm;
                return dateString + ' ' + timeString;
            }));
            exifTable.appendChild(getEXIFDisplay(this, 'Model', 'Camera'));
            exifTable.appendChild(getEXIFDisplay(this, 'ExposureTime', 'Exposure', function(value) {
                var vf = parseFloat(value);
                if (vf < 1) {
                    value = '1/' + (1 / vf);
                }
                return value + 's';
            }));
            exifTable.appendChild(getEXIFDisplay(this, 'FNumber', 'F Number', function(value) {
                return 'f/' + value;
            }));
            exifTable.appendChild(getEXIFDisplay(this, 'ISOSpeedRatings', 'ISO'));
            exifTable.appendChild(getEXIFDisplay(this, 'FocalLength', 'Focal Length', function(value) {
                return value + 'mm';
            }));
            exifTable.appendChild(getEXIFDisplay(this, 'Flash', 'Flash', function(value) {
                return value.indexOf('Flash fired') == -1 ? 'Not Used' : 'Used';
            }));
            if (!returnedExif) {
                exifDisplay.innerHTML = '';
            } else {
                exifDisplay.appendChild(exifTable);
            }
        });
    };
    var lastPopup = null;
    window.showPhotoPopup = function(gridElem) {
        var popup = gridElem.nextSibling;
        lastPopup = popup;
        addCSSClass(popup, 'active');
        var img = popup.querySelector('img');
        img.style.maxHeight = (popup.offsetHeight - 16) + 'px';
    };
    window.hidePhotoPopup = function(closeLink) {
        lastPopup = null;
        var popup = closeLink;
        while (popup.className.indexOf('photoPopup') == -1) {
            popup = popup.parentNode;
        }
        removeCSSClass(popup, 'active');
    };
    document.onkeyup = function(e) {
        if (e.keyCode == 27 && lastPopup) {
            window.location.hash = '';
        }
    };
    onPageLoad(function() {
        var exifables = document.querySelectorAll('.photoPopup img');
        var nExifables = exifables.length;
        for (var i = 0; i < nExifables; i++) {
            if (exifables[i].complete) {
                showEXIF(exifables[i]);
            } else {
                exifables[i].onload = function() {
                    showEXIF(this);
                };
            }
        }
    });

})();
