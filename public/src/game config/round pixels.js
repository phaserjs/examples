class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/baal-loader.png');
    }

    create ()
    {
        this.add.image(450.5, 350.8, 'pic');
    }
}

// this.pixelArt = GetValue(config, 'pixelArt', false);
// this.autoResize = GetValue(config, 'autoResize', false);
// this.roundPixels = GetValue(config, 'roundPixels', false);
// this.transparent = GetValue(config, 'transparent', false);
// this.clearBeforeRender = GetValue(config, 'clearBeforeRender', true);


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    roundPixels: true,
    backgroundColor: '#ffff00',
    scene: Example
};

const game = new Phaser.Game(config);
