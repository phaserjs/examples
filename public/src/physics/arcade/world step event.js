class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('flower', 'assets/sprites/flower-exo.png');
    }

    create ()
    {
        const target = this.add.image(100, 300, 'flower').setAlpha(0.5);

        const source = this.physics.add.image(100, 300, 'flower');

        this.add.text(10, 20, 'Click to set target', { fill: 'yellow' });

        const text = this.add.text(10, 40, '', { fill: 'aqua' });

        this.input.on('pointerdown', (pointer) =>
        {
            target.copyPosition(pointer);

            // Move at 200 px/s:
            this.physics.moveToObject(source, target, 200);
        });

        this.physics.world.on('worldstep', (delta) =>
        {
            // Tolerance is half the per-step distance
            const tolerance = 100 * delta;
            const distance = Phaser.Math.Distance.BetweenPoints(source.body.center, target);
            const dx = source.body.deltaX();
            const dy = source.body.deltaY();

            text.setText(`
Delta Time:  ${delta} s
Distance:    ${distance} px
Tolerance:   ${tolerance} px
Body Delta:  ${Math.hypot(dx, dy)} px
Body Speed:  ${source.body.speed} px/s`
            );

            if (source.body.speed > 0 && distance <= tolerance)
            {
                source.body.stop();
                // source.body.reset(target.x, target.y);
            }
        });
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
            debug: false,
            fps: 500,
            timeScale: 1
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
