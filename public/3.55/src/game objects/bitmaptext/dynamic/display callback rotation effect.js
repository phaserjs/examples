var scale = { r: -Math.PI };
//  data = { index: index, charCode: charCode, x: x, y: y, scaleX: scaleX, scaleY: scaleY }

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v355');
        this.load.bitmapFont('ice', 'assets/fonts/bitmap/iceicebaby.png', 'assets/fonts/bitmap/iceicebaby.xml');
        this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-smooth.png', 'assets/fonts/bitmap/atari-smooth.xml');
        this.load.bitmapFont('gothic', 'assets/fonts/bitmap/gothic.png', 'assets/fonts/bitmap/gothic.xml');
        this.load.bitmapFont('hyper', 'assets/fonts/bitmap/hyperdrive.png', 'assets/fonts/bitmap/hyperdrive.xml');
    }

    create ()
    {
        // var text = this.add.bitmapText(60, 200, 'hyper', 'Hello World!', 128);
        // var text = this.add.bitmapText(60, 200, 'atari', 'Hello\nWorld!', 128);
        const text = this.add.dynamicBitmapText(60, 60, 'gothic', 'Hello\nWorld!', 128);
        text.setDisplayCallback(this.textCallback);

        const text2 = this.add.dynamicBitmapText(560, 60, 'ice', 'Hello\nWorld!', 128);
        text2.setDisplayCallback(this.textCallback);

        const text3 = this.add.dynamicBitmapText(100, 460, 'hyper', 'Terminator', 200);
        text3.setDisplayCallback(this.textCallback);

        this.tweens.add({
            targets: scale,
            duration: 2000,
            r: Math.PI,
            ease: 'Linear',
            repeat: -1
        });
    }

    textCallback (data)
    {
        data.rotation = scale.r;
        // data.rotation = Phaser.Math.Between(-0.02, 0.02);
        // data.rotation = 1.570;

        return data;
    }

}
const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
