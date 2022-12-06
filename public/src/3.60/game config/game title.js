class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/baal-loader.png');
    }

    create ()
    {
        this.add.image(400, 300, 'pic');

        this.add.text(80, 560, `Game Title: ${game.config.gameTitle}`, { font: '16px Courier', fill: '#ffffff' });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example,

    //  Open the Dev Tools
    //  The title of your game will appear in the banner text
    title: 'Shock and Awesome'
};

const game = new Phaser.Game(config);
