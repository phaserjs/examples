$(document).ready(function () {

    var loc = window.location;
    var remote = (loc && loc.hostname && loc.hostname.indexOf('labs.phaser.io') !== -1);
    // var remote = true;

    var versions = [
        { val : 'dev', text: 'Dev Build' },
        { val : 'phaser-core', text: 'Core Build' },
        { val : '3.11.0', text: '3.11.0' },
        { val : '3.10.1', text: '3.10.1' },
        { val : '3.10.0', text: '3.10.0' },
        { val : '3.9.0', text: '3.9.0' },
        { val : '3.8.0', text: '3.8.0' },
        { val : '3.7.1', text: '3.7.1' },
        { val : '3.6.0', text: '3.6.0' },
        { val : '3.5.1', text: '3.5.1' },
        { val : '3.5.0', text: '3.5.0' },
        { val : '3.4.0', text: '3.4.0' },
        { val : '3.3.0', text: '3.3.0' },
        { val : '3.2.1', text: '3.2.1' },
        { val : '3.2.0', text: '3.2.0' },
        { val : '3.1.2', text: '3.1.2' },
        { val : '3.1.1', text: '3.1.1' },
        { val : '3.1.0', text: '3.1.0' },
        { val : '3.0.0', text: '3.0.0' }
    ];

    var filename = getQueryString('src');
    var phaserVersion = getQueryString('v', (remote) ? versions[2].val : 'dev');
    var phaserVersionJS = phaserVersion + '.js';
    var currentPage = loc.pathname.substr(loc.pathname.lastIndexOf('/') + 1);

    if (filename.substr(-3) === '.js')
    {
        //  Prepare the links and Feedback form before we run the example
        var parts = filename.split('\\');
        parts.pop();
        parts.shift();
        backURL = parts.join('/') + '/';

        document.title = document.title.concat(' :: ' + filename);

        $('#editlink').attr('href', 'edit.html?src=' + filename);
        $('#iframelink').attr('href', 'iframe.html?src=' + filename);
        $('#csslink').attr('href', 'css.html?src=' + filename);
        $('#viewlink').attr('href', 'view.html?src=' + filename);
        $('#backlink').attr('href', 'index.html?dir=' + backURL);
        $('#fblink').attr('href', 'fbinstant.html?src=' + filename);

        /*
        if (remote)
        {
            $('#labslink').hide();
        }
        else
        {
            $('#labslink').on('click', function () {

                var labsURL = encodeURI('http://labs.phaser.io/view.html?src=' + filename);

                navigator.clipboard.writeText(labsURL)
                .then(() => {
                    console.log(labsURL);
                })
                .catch(err => {
                    // This can happen if the user denies clipboard permissions:
                    console.error('Could not copy text: ', err);
                });

            });
        }
        */

        var versionlist = $('<select>').prop('id', 'changeversion').appendTo('#nav');

        versionlist.on('change', function () {

            document.location.href = currentPage + '?src=' + filename + '&v=' + this.value;

        });

        var selected = false;

        versions.forEach(function(item) {

            if (item.val === phaserVersion)
            {
                versionlist.append($("<option>").prop('value', item.val).prop('selected', true).text(item.text));
                selected = true;
            }
            else
            {
                versionlist.append($("<option>").prop('value', item.val).text(item.text));
            }

        });

        if (!selected)
        {
            versionlist.append($("<option>").prop('value', phaserVersion).prop('selected', true).text('Custom: ' + phaserVersion));
        }

        //  Load Phaser

        if (currentPage === 'iframe.html')
        {
            $('#phaserGame').attr('src', 'view-iframe.html?src=' + filename);
            $('#loading').hide();
            $('#nav').show();
        }
        else
        {
            var phaserScript = document.createElement('script');

            phaserScript.type = 'text/javascript';
            phaserScript.async = true;

            phaserScript.onload = function ()
            {
                //  Inject the example source
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.src = decodeURI(filename).split('\\').join('/');
                document.body.appendChild(s);

                $('#loading').hide();
                $('#nav').show();
            };

            if (remote && phaserVersion !== 'dev' && selected)
            {
                // <script src="//cdn.jsdelivr.net/npm/phaser@3.7.1/dist/phaser.min.js">
                phaserScript.src = '//cdn.jsdelivr.net/npm/phaser@' + phaserVersion + '/dist/phaser.min.js';
            }
            else
            {
                phaserScript.src = './build/' + phaserVersionJS;
            }

            document.body.appendChild(phaserScript);
        }
    }

});
