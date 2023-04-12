$(document).ready(function () {

    var loc = window.location;
    var remote = (loc && loc.hostname && loc.hostname.indexOf('labs.phaser.io') !== -1);
    // var remote = true;

    var filename = getQueryString('src');
    var phaserVersion1 = getQueryString('v1', (remote) ? versions[1].val : 'dev');
    var phaserVersion2 = getQueryString('v2', (remote) ? versions[1].val : 'dev');

    if (filename.substr(-3) === '.js')
    {
        //  Prepare the links and Feedback form before we run the example
        var parts = filename.split('\\');
        parts.pop();
        parts.shift();
        backURL = parts.join('/') + '/';

        document.title = document.title.concat(' :: ' + filename);

        $('#backlink').attr('href', 'index.html?dir=' + backURL);
        $('#viewlink').attr('href', 'view.html?src=' + filename);
        // $('#runlink').attr('href', 'compare.html?src=' + filename);

        if (remote)
        {
            $('#labslink').hide();
        }
        else
        {
            $('#labslink').on('click', function () {

                var labsURL = encodeURI('https://labs.phaser.io/compare.html?src=' + filename + '&v1=' + phaserVersion1 + '&v2=' + phaserVersion2);

                $('#clippy').attr('value', labsURL);
                $('#clippy').focus();
                $('#clippy').select();
                var result = document.execCommand('copy');

            });
        }

        var selected1 = false;
        var selected2 = false;

        var versionlist1 = $('<select>').prop('id', 'changeversion1');
        var versionlist2 = $('<select>').prop('id', 'changeversion2');

        $('#versionlist1').append(versionlist1);
        $('#versionlist2').append(versionlist2);

        versionlist1.on('change', function () {

            phaserVersion1 = this.value;

            console.clear();

            $('#phaserGame1').attr('src', 'view-iframe.html?src=' + filename + '&v=' + phaserVersion1);
            $('#phaserGame2').attr('src', 'view-iframe.html?src=' + filename + '&v=' + phaserVersion2);

            $('#runlink').attr('href', 'compare.html?src=' + filename + '&v1=' + phaserVersion1 + '&v2=' + phaserVersion2);
            $('#label1').text('Phaser ' + phaserVersion1);
            $('#label2').text('Phaser ' + phaserVersion2);

        });

        versionlist2.on('change', function () {

            phaserVersion2 = this.value;

            console.clear();

            $('#phaserGame1').attr('src', 'view-iframe.html?src=' + filename + '&v=' + phaserVersion1);
            $('#phaserGame2').attr('src', 'view-iframe.html?src=' + filename + '&v=' + phaserVersion2);

            $('#runlink').attr('href', 'compare.html?src=' + filename + '&v1=' + phaserVersion1 + '&v2=' + phaserVersion2);
            $('#label1').text('Phaser ' + phaserVersion1);
            $('#label2').text('Phaser ' + phaserVersion2);

        });

        versions.forEach(function(item) {

            if (item.val === phaserVersion1)
            {
                versionlist1.append($("<option>").prop('value', item.val).prop('selected', true).text(item.text));
                selected1 = true;
            }
            else
            {
                versionlist1.append($("<option>").prop('value', item.val).text(item.text));
            }

            if (item.val === phaserVersion2)
            {
                versionlist2.append($("<option>").prop('value', item.val).prop('selected', true).text(item.text));
                selected2 = true;
            }
            else
            {
                versionlist2.append($("<option>").prop('value', item.val).text(item.text));
            }

        });

        if (!selected1)
        {
            versionlist1.append($("<option>").prop('value', phaserVersion1).prop('selected', true).text('Custom: ' + phaserVersion1));
        }

        if (!selected2)
        {
            versionlist2.append($("<option>").prop('value', phaserVersion2).prop('selected', true).text('Custom: ' + phaserVersion2));
        }

        $('#runlink').on('click', function () {

            document.location.href = 'compare.html?src=' + filename + '&v1=' + phaserVersion1 + '&v2=' + phaserVersion2;

        });

        //  Load Phaser

        $('#phaserGame1').attr('src', 'view-iframe.html?src=' + filename + '&v=' + phaserVersion1);
        $('#phaserGame2').attr('src', 'view-iframe.html?src=' + filename + '&v=' + phaserVersion2);
        $('#label1').text('Phaser ' + phaserVersion1);
        $('#label2').text('Phaser ' + phaserVersion2);

        $('#loading').hide();
        $('#nav').show();
    }

});
