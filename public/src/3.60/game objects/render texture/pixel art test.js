class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom16x16.png');
    }

    create ()
    {
        const rt = this.add.renderTexture(0, 0, 800, 600).setOrigin(0);

        const mushroom = this.add.image(400, 300, 'mushroom').setScale(8);

        rt.draw(mushroom, 200, 200);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
