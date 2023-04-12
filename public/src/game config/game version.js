class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/baal-loader.png');
    }

    create ()
    {
        this.add.image(400, 300, 'pic');

        const text = this.add.text(80, 550, '', { font: '16px Courier', fill: '#ffffff' });

        text.setText([
            `Game Title: ${game.config.gameTitle}`,
            `Version: ${game.config.gameVersion}`
        ]);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example,

    //  Open the Dev Tools
    //  The version of your game appears after the title in the banner
    title: 'Shock and Awesome',
    version: '1.2b'
};

const game = new Phaser.Game(config);
