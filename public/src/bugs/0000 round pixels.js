class Demo extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('truck', 'assets/sprites/astorm-truck.png');
        this.load.image('bik', 'assets/sprites/bikkuriman.png');
        this.load.image('squad', 'assets/sprites/bsquadron1.png');
        this.load.image('spider', 'assets/pics/spider.png');
        this.load.image('case', 'assets/pics/case.jpg');
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }

    create ()
    {
        // this.add.image(400, 300, 'case');
        // this.add.image(200.5, 200.8, 'spider');
        // this.add.text(200.2, 400.9, 'Round Pixels', { fontFamily: 'Arial', fontSize: 96, color: '#ffffff' });
        // this.add.rectangle(500.3, 200.8, 101, 100, 0x00ff00).setOrigin(0);

        /*
        WebFont.load({
            google: {
                families: [ 'VT323' ]
            },
            active: () =>
            {
                // this.add.text(200, 400, 'The face of the\nmoon was in\nshadow.', { fontFamily: 'VT323', fontSize: 32, color: '#ffffff' });
                this.add.text(200, 400, 'phaser with round pixels', { fontFamily: 'VT323', fontSize: 32, color: '#ffffff' });
            }
        });
        */

        this.add.sprite(400, 100, 'truck');
        this.add.sprite(400, 200.4, 'truck');
        this.add.sprite(400.4, 300, 'truck');
        this.add.sprite(400.4, 400.4, 'truck');

        this.add.sprite(200, 100, 'bik');
        this.add.sprite(200, 200.4, 'bik');
        this.add.sprite(200.4, 300, 'bik');
        this.add.sprite(200, 400.4, 'bik');

        this.add.sprite(600, 80, 'squad').setScale(2);
        this.add.sprite(600, 200.4, 'squad').setScale(2);
        this.add.sprite(600.4, 320, 'squad').setScale(2);
        this.add.sprite(600.4, 440.4, 'squad').setScale(2);

        this.add.rectangle(0, 500, 800, 100, 0x00ff00).setOrigin(0).setAlpha(0.2);

        this.input.on('pointerdown', pointer => {

            if (pointer.y > 500)
            {
                this.cameras.main.roundPixels = !this.cameras.main.roundPixels;

                console.log('camera roundPixels', this.cameras.main.roundPixels);
            }

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    // pixelArt: false,
    backgroundColor: '#00007d',
    scene: Demo
};

const game = new Phaser.Game(config);
