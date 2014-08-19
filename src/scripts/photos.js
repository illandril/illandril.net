(function() {
    var returnedExif = false;
    var getEXIFDisplay = function(exif, name, prettyName, transform) {
        var value = EXIF.getTag(exif, name);
        if (value == null) {
            return document.createComment('No ' + name + ' EXIF value');
        }
        return getEXIFNameValuePair(prettyName, value, transform);
    };
    var getEXIFNameValuePair = function(prettyName, value, transform) {
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
        if ( value instanceof Node ) {
            valueElem.appendChild(value);
        } else {
            valueElem.appendChild(document.createTextNode(value));
        }
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
            exifTable.appendChild(getEXIFDisplay(this, 'Location', 'Flash', function(value) {
                return value.indexOf('Flash fired') == -1 ? 'Not Used' : 'Used';
            }));
            var lat = EXIF.getTag(this, 'GPSLatitude');
            var latD = EXIF.getTag(this, 'GPSLatitudeRef') || 'N';
            var lon = EXIF.getTag(this, 'GPSLongitude');
            var lonD = EXIF.getTag(this, 'GPSLongitudeRef') || 'W';
            if (lat != null && lat.length == 3 && lon != null && lon.length == 3) {
                
                var lats = lat[0] + '° ' + lat[1] + '\' ' + (Math.round(lat[2] * 100) / 100) + '" ' + latD;
                var late = document.createElement('span');
                late.className = 'lat';
                late.appendChild(document.createTextNode(lats));
                
                var lons = lon[0] + '° ' + lon[1] + '\' ' + (Math.round(lon[2] * 100) / 100) + '" ' + lonD;
                var lone = document.createElement('span');
                lone.className = 'lon';
                lone.appendChild(document.createTextNode(lons));
                
                var gpsa = document.createElement('a');
                gpsa.className = 'gps';
                gpsa.target = '_blank';
                gpsa.href = 'https://maps.google.com?q=' + encodeURIComponent(lats + ', ' + lons);
                gpsa.appendChild(late);
                gpsa.appendChild(document.createTextNode(', '));
                gpsa.appendChild(lone);
                exifTable.appendChild(getEXIFNameValuePair('Location', gpsa));
            }
            if (!returnedExif) {
                exifDisplay.innerHTML = '';
            } else {
                exifDisplay.appendChild(exifTable);
            }
        });
    };
    var lastPopup = null;
    window.showPhotoPopup = function(gridElem) {
        if(lastPopup) {
            hidePhotoPopup(lastPopup);
        }
        var popup = gridElem.nextSibling;
        lastPopup = popup;
        addCSSClass(popup, 'active');
        var img = popup.querySelector('img');
        img.style.maxHeight = (popup.offsetHeight - 52) + 'px';
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
