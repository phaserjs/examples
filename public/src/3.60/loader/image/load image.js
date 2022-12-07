class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('taikodrummaster', 'assets/pics/taikodrummaster.jpg');
        this.load.image('sukasuka-chtholly', 'assets/pics/sukasuka-chtholly.png');

        // this.load.path = 'assets/pics/';

        // this.load.image([
        //     { key: 'sukasuka-chtholly' },
        //     { key: 'taikodrummaster', extension: 'jpg' }
        // ]);

        // this.load.image('taikodrummaster', 'assets/pics/taikodrummaster.jpg');

        // this.load.image({ key: 'taikodrummaster', file: 'assets/pics/taikodrummaster.jpg' });

        // this.load.image({ key: 'taikodrummaster', file: 'assets/pics/taikodrummaster.jpg' });

        // this.load.image({ key: 'sukasuka-chtholly' });

        //  Default extension is png, so specify a new one:
        // this.load.image({ key: 'taikodrummaster', extension: 'jpg' });
    }

    create ()
    {
        this.add.image(400, 300, 'taikodrummaster');
        this.add.image(400, 500, 'sukasuka-chtholly');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
