class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient8.png');
        this.load.image('master', 'assets/sprites/master.png');
        this.load.image('bubble', 'assets/particles/bubble.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const graphics = this.add.graphics();

        const path = new Phaser.Curves.Path(50, 500);

        path.splineTo([ 164, 446, 274, 542, 412, 457, 522, 541, 664, 464 ]);
        path.lineTo(700, 300);
        path.lineTo(600, 350);
        path.ellipseTo(200, 100, 100, 250, false, 0);
        path.cubicBezierTo(222, 119, 308, 107, 208, 368);
        path.ellipseTo(60, 60, 0, 360, true);

        graphics.lineStyle(2, 0xffffff, 0.5);

        path.draw(graphics);

        const position = path.getPoint(0);

        const master = this.physics.add.image(position.x, position.y, 'master');

        master.setDirectControl();
        master.setImmovable();

        this.counter = this.tweens.addCounter({
            from: 0,
            to: 1,
            ease: 'linear',
            duration: 8000,
            repeat: -1,
            yoyo: true,
            onUpdate: tween =>
            {
                const position = path.getPoint(tween.getValue());

                master.setPosition(position.x, position.y);
            }
        });

        const bubbles = [];

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(-1500, 0);

            const bubble = this.physics.add.image(x, y, 'bubble');

            bubble.setScale(0.5);
            bubble.setBounce(1);
            bubble.setDrag(5);
            bubble.setVelocityX(Phaser.Math.Between(-80, 80));
            bubble.setVelocityY(Phaser.Math.Between(10, 50));
            bubble.setMaxVelocity(700, 700);
            bubble.setCollideWorldBounds(true);

            bubbles.push(bubble);
        }

        this.physics.world.setBounds(0, -1500, 800, 2100);

        this.physics.add.collider(master, bubbles);
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
            gravity: { y: 50 },
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
