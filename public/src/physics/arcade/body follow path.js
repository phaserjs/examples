class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        // const path = this.createLoopPath();
        const path = this.createZigZagPath();

        const graphics = this.add.graphics({
            fillStyle: { color: 0xffff00, alpha: 0.6 },
            lineStyle: { width: 2, color: 0x0000ff, alpha: 0.6 }
        });

        const start = path.getStartPoint();
        const distance = path.getLength();
        const duration = 20000;
        const speed = distance / duration;
        const speedSec = 1000 * speed;
        const tSpeed = 1 / duration;
        const tSpeedSec = 1000 * tSpeed;

        let t = 0;

        console.log('distance (px)', distance);
        console.log('time (ms)', duration);
        console.log('speed (px/ms)', speed);
        console.log('speed (px/s)', speedSec);
        console.log('speed (t/ms)', tSpeed);
        console.log('speed (t/s)', tSpeedSec);

        const block = this.physics.add.image(start.x, start.y, 'block')
            .setImmovable(true)
            .setAlpha(0.5);

        const lemming = this.physics.add.image(block.x, block.y - 128, 'lemming')
            .setGravityY(30000);

        this.physics.add.collider(block, lemming);

        this.physics.world.on('worldstep', (delta) =>
        {
            t += delta * tSpeedSec;

            if (t > 1)
            {
                t -= 1;
                block.body.reset(start.x, start.y);
                graphics.clear();
                path.draw(graphics);
            }

            path.getTangent(t, block.body.velocity);
            block.body.velocity.scale(speedSec);
            block.setRotation(block.body.velocity.angle());
            graphics.fillPointShape(block.body.center, 2);
        });
    }

    createLoopPath ()
    {
        const path = new Phaser.Curves.Path(50, 500);

        path.splineTo([ 164, 446, 274, 542, 412, 457, 522, 541, 664, 464 ]);
        path.lineTo(700, 300);
        path.lineTo(600, 350);
        path.ellipseTo(200, 100, 100, 250, false, 0);
        path.cubicBezierTo(222, 119, 308, 107, 208, 368);
        path.ellipseTo(60, 60, 0, 360, true);

        return path;
    }

    createZigZagPath ()
    {
        const path = new Phaser.Curves.Path(100, -50);

        path.lineTo(100, 50);

        const max = 8;
        const h = 500 / max;

        for (let i = 0; i < max; i++)
        {
            if (i % 2 === 0)
            {
                path.lineTo(700, 50 + h * (i + 1));
            }
            else
            {
                path.lineTo(100, 50 + h * (i + 1));
            }
        }

        path.lineTo(100, 650);

        return path;
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
            fps: 60,
            timeScale: 1
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
