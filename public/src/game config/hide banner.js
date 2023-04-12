class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/baal-loader.png');
    }

    create ()
    {
        this.add.image(400, 300, 'pic');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example,

    //  Open the Dev Tools and notice how there is no banner printed
    //  when the game loads. Change this value to 'true' to see the
    //  default banner.
    banner: false
};

const game = new Phaser.Game(config);
