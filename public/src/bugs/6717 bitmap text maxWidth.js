class Example extends Phaser.Scene
{

    preload ()
    {
        this.load.bitmapFont('ice', 'https://raw.githubusercontent.com/monteiz/phaser-3-example/main/title.png', 'https://raw.githubusercontent.com/monteiz/phaser-3-example/main/title.fnt');
    }
    
    create ()
    {
        const text = this.add.dynamicBitmapText(10, 100, 'ice', 'YOU CAN WIN');

        text.scale = 0.2;
    }

}

const config = {
    type: Phaser.CANVAS,
    // type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
