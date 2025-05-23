class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('logo', 'assets/sprites/phaser2.png');
    }

    create ()
    {
        this.logo = this.add.image(200, 200, 'logo');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame,
    scale: {
        mode: Phaser.Scale.RESIZE
    }
};

const game = new Phaser.Game(config);
