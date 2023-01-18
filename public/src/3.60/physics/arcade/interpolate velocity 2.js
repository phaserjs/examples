class Example extends Phaser.Scene
{
    distanceText;
    source;
    target;

    preload ()
    {
        this.load.image('flower', 'assets/sprites/flower-exo.png');
        this.load.image('cursor', 'assets/sprites/drawcursor.png');
    }

    create ()
    {
        this.target = this.add.image(0, 0, 'flower').setAlpha(0);

        this.source = this.physics.add.image(100, 300, 'flower');

        this.distanceText = this.add.text(10, 10, 'Click to set target', { fill: 'lime' });

        this.input.on('pointerdown', (pointer) =>
        {
            this.target.copyPosition(pointer).setAlpha(0.5);

            this.physics.moveToObject(this.source, this.target, 200);
        });
    }

    update ()
    {
        const distance = Phaser.Math.Distance.BetweenPoints(this.source.body.center, this.target);

        this.distanceText.setText(`Distance: ${distance.toFixed(3)} Speed: ${this.source.body.speed.toFixed(3)}`);

        if (this.source.body.speed > 0)
        {
            // Set a maximum velocity toward the target
            this.physics.moveToObject(this.source, this.target, 200);

            // Interpolate velocity toward (0, 0), starting at 10px away
            this.source.body.velocity.lerp(
                Phaser.Math.Vector2.ZERO,
                Phaser.Math.Clamp(1 - distance / 10, 0, 1)
            );
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
