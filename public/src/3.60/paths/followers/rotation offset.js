class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        const curve = new Phaser.Curves.Line(new Phaser.Math.Vector2(100, 100), new Phaser.Math.Vector2(600, 400));

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0xffffff, 0.5);

        curve.draw(graphics);

        const lemming = this.add.follower(curve, 100, 100, 'lemming');

        lemming.startFollow({
            duration: 5000,
            yoyo: true,
            repeat: -1,
            rotateToPath: true,
            rotationOffset: 90
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
