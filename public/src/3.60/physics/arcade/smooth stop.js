class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('flower', 'assets/sprites/flower-exo.png');
        this.load.image('cursor', 'assets/sprites/drawcursor.png');
    }

    create ()
    {
        this.target = this.add.image(0, 0, 'flower').setAlpha(0.4);

        this.source = this.physics.add.image(100, 300, 'flower');

        this.distanceText = this.add.text(10, 10, 'Click to set target', { fill: 'lime' });

        this.input.on('pointerdown', (pointer) =>
        {
            this.target.copyPosition(pointer).setVisible(true);

            this.physics.moveToObject(this.source, this.target, 200);
        });
    }

    update ()
    {
        const distance = Phaser.Math.Distance.BetweenPoints(this.source.body.center, this.target);

        this.distanceText.setText(`Distance: ${distance.toFixed(3)} Speed: ${this.source.body.speed.toFixed(3)}`);

        if (this.source.body.speed > 0)
        {
            // Set a maximum velocity
            this.physics.moveToObject(this.source, this.target, 200);

            // Scale down based on distance, starting from 20px away
            this.source.body.velocity.scale(
                Phaser.Math.SmoothStep(distance, 0, 20)
            );

            if (distance < 1)
            {
                // Close enough
                this.source.body.reset(this.target.x, this.target.y);

                this.source.body.debugBodyColor = 0xff0000;
            }
            else
            {
                this.source.body.debugBodyColor = 0xffff00;
            }
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
