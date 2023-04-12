class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.bitmapFont('desyrel-pink', 'assets/fonts/bitmap/desyrel-pink.png', 'assets/fonts/bitmap/desyrel-pink.xml');
    }

    create ()
    {
        const bitmaptext1 = this.add.bitmapText(400, 300, 'desyrel-pink', 'Excepteur sint occaecat\ncupidatat non proident').setOrigin(0.5);

        const fx1 = bitmaptext1.postFX.addGlow(0xffffff, 0, 0, false, 0.1, 24);

        this.tweens.add({
            targets: fx1,
            outerStrength: 4,
            yoyo: true,
            loop: -1,
            ease: 'sine.inout'
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
