class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('eyes', 'assets/sprites/eyes.png');
        this.load.image('orb', 'assets/particles/green-orb.png');
    }

    create ()
    {
        const graphics = this.add.graphics();

        const path = new Phaser.Curves.Path(0, 300);

        for (let i = 0; i < 8; i++)
        {
            // xRadius, yRadius, startAngle, endAngle, clockwise, rotation
            if (i % 2 === 0)
            {
                path.ellipseTo(50, 80, 180, 360, true, 0);
            }
            else
            {
                path.ellipseTo(50, 80, 180, 360, false, 0);
            }
        }

        graphics.lineStyle(1, 0xffffff, 1);

        path.draw(graphics);

        for (let i = 0; i < 20; i++)
        {
            let follower;
            if (i === 0)
            {
                follower = this.add.follower(path, 100, 100 + (30 * i), 'eyes').setDepth(50);
            }
            else
            {
                follower = this.add.follower(path, 100, 100 + (30 * i), 'orb');
                follower.setBlendMode(Phaser.BlendModes.ADD);
                follower.setScale(0.5);
            }

            follower.startFollow({
                duration: 4000,
                positionOnPath: true,
                repeat: -1,
                ease: 'Linear',
                delay: i * 70
            });
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
