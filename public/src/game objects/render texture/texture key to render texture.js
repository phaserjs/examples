class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bubble', 'assets/particles/bubble.png');
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {
        const rt = this.add.renderTexture(400, 300, 64, 64);

        rt.draw('bubble');
        rt.draw('dude', 18, 14);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
