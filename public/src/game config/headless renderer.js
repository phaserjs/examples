class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/baal-loader.png');
    }

    create ()
    {
        const pic = this.add.image(400, 300, 'pic');

        this.tweens.add({
            targets: pic,
            angle: 360,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.HEADLESS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
