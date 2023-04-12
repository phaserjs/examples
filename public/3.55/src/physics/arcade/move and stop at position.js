class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('flower', 'assets/sprites/flower-exo.png');
        this.load.image('cursor', 'assets/sprites/drawcursor.png');
    }

    create ()
    {
        this.source = this.physics.add.image(100, 300, 'flower');

        this.target = new Phaser.Math.Vector2();

        const cursor = this.add.image(0, 0, 'cursor').setVisible(false);

        this.distanceText = this.add.text(10, 10, 'Click to set target', { fill: '#00ff00' });

        this.input.on('pointerdown', (pointer) =>
        {
            this.target.x = pointer.x;
            this.target.y = pointer.y;

            // Move at 200 px/s:
            this.physics.moveToObject(this.source, this.target, 200);

            cursor.copyPosition(this.target).setVisible(true);
        });
    }

    update ()
    {
        //  4 is our distance tolerance, i.e. how close the source can get to the target
        //  before it is considered as being there. The faster it moves, the more tolerance is required.
        const tolerance = 4;

        // const tolerance = 200 * 1.5 / this.game.loop.targetFps;

        const distance = Phaser.Math.Distance.BetweenPoints(this.source, this.target);

        if (this.source.body.speed > 0)
        {
            this.distanceText.setText(`Distance: ${distance}`);

            if (distance < tolerance)
            {
                this.source.body.reset(this.target.x, this.target.y);
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
        default: 'arcade'
    },
    scene: Example
};

const game = new Phaser.Game(config);
