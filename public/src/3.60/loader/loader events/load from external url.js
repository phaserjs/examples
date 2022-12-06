class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setPath('assets/pics/');
        this.load.image('taikodrummaster', 'taikodrummaster.jpg');
        this.load.image('sukasuka-chtholly', 'http://labs.phaser.io/assets/pics/sukasuka-chtholly.png');
    }

    create ()
    {
        this.add.image(400, 300, 'taikodrummaster');
        this.add.image(400, 300, 'sukasuka-chtholly');
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
