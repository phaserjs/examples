class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom-32x32.png');
    }

    create ()
    {
        const test = this.add.tileSprite(400, 300, 32 * 14, 32 * 8, 'mushroom');

        test.setAngle(20).setScale(0.5);

        console.log(test);
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
