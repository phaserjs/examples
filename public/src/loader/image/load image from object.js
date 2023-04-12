class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image({
            key: 'taikodrummaster',
            url: 'assets/pics/taikodrummaster.jpg'
        });
    }

    create ()
    {
        this.add.image(400, 300, 'taikodrummaster');
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
