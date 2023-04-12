class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('taikodrummaster', 'assets/pics/taikodrummaster.jpg');

        this.load.image('sukasuka-chtholly', 'assets/pics/sukasuka-chtholly.png');

        this.load.on('filecomplete-image-taikodrummaster', this.addImage, this);
    }

    addImage (key, file)
    {
        this.add.image(400, 300, key);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
