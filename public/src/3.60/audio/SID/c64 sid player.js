class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('title1', 'assets/tests/c64/thrust.png');
        this.load.image('title2', 'assets/tests/c64/cybernoid.png');
        this.load.image('title3', 'assets/tests/c64/robocop.png');
        this.load.image('title4', 'assets/tests/c64/cybernoid2.png');
        this.load.image('title5', 'assets/tests/c64/warhawk.png');
        this.load.image('title6', 'assets/tests/c64/stormlord.png');
        this.load.image('title7', 'assets/tests/c64/zoids.png');

        this.load.binary('tune1', 'assets/audio/sid/thrust.sid');
        this.load.binary('tune2', 'assets/audio/sid/cybernoid.sid');
        this.load.binary('tune3', 'assets/audio/sid/robocop.sid');
        this.load.binary('tune4', 'assets/audio/sid/cybernoid2.sid');
        this.load.binary('tune5', 'assets/audio/sid/warhawk.sid');
        this.load.binary('tune6', 'assets/audio/sid/stormlord.sid');
        this.load.binary('tune7', 'assets/audio/sid/zoids.sid');

        this.load.plugin('SIDPlayerPlugin', 'assets/audio/sid/SIDPlayerPluginES5.js', true);
        this.load.script('jsSID', 'assets/audio/sid/jsSID.js');
    }

    create ()
    {
        this.currenTune = 1;

        let tune = 1;

        this.title = this.add.image(400, 350, `title${tune}`);

        this.add.text(400, 570, 'Click to change Tune. Left / Right cursor changes Sub-Tune', { font: '16px Courier', fill: '#ffffff' }).setShadow(1, 1).setOrigin(0.5, 0);

        const text = this.add.text(10, 10, 'SID Player', { font: '16px Courier', fill: '#ffffff' }).setShadow(1, 1);

        const SIDplayer = this.plugins.get('SIDPlayerPlugin');

        let sidData = this.cache.binary.get(`tune${tune}`);

        SIDplayer.loadLocal(sidData);

        SIDplayer.setmodel(6581);

        let i = 0;
        let max = SIDplayer.getsubtunes();

        this.updateText(tune, text, SIDplayer, i);

        this.input.keyboard.on('keyup-LEFT', () =>
        {
            if (i > 0)
            {
                i--;

                SIDplayer.loadLocal(sidData, i);

                this.updateText(tune, text, SIDplayer, i);
            }
        });

        this.input.keyboard.on('keyup-RIGHT', () =>
        {
            if (i < max)
            {
                i++;

                SIDplayer.loadLocal(sidData, i);

                this.updateText(tune, text, SIDplayer, i);
            }
        });

        this.input.on('pointerdown', () =>
        {
            if (tune < 7)
            {
                tune++;
            }
            else
            {
                tune = 1;
            }

            sidData = this.cache.binary.get(`tune${tune}`);

            SIDplayer.loadLocal(sidData);

            i = 0;
            max = SIDplayer.getsubtunes();

            this.updateText(tune, text, SIDplayer, i);

        });
    }

    updateText (tune, text, SIDplayer, i)
    {
        const title = SIDplayer.gettitle().replace(/\0/g, '');
        const author = SIDplayer.getauthor().replace(/\0/g, '');
        const info = SIDplayer.getinfo().replace(/\0/g, '');

        text.setText([
            'Title: ' + title,
            'Author: ' + author,
            'Info: ' + info,
            'Current Sub-Tune: ' + i,
            'Total Sub-Tunes: ' + SIDplayer.getsubtunes(),
            'Pref. Model: ' + SIDplayer.getprefmodel(),
            'Playtime: ' + SIDplayer.getplaytime(),
            'Playback Model: ' + SIDplayer.getmodel()
        ]);

        if (this.currenTune !== tune)
        {
            this.currenTune = tune;

            this.title.setTexture(`title${tune}`);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#3c39a9',
    scene: Example
};

const game = new Phaser.Game(config);
