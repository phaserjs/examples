class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('platform', 'assets/sprites/platform.png');
    }

    create ()
    {
        this.matter.add.image(325, -100, 'block');
        this.matter.add.image(400, 300, 'block');
        this.matter.add.image(450, 50, 'block');

        const platform = this.matter.add.image(400, 550, 'platform', null, { isStatic: true });

        console.log(platform);

        this.input.once('pointerup', () =>
        {

            platform.destroy();

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter'
    },
    scene: Example
};

const game = new Phaser.Game(config);
