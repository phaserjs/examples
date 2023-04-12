class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        const path1 = new Phaser.Curves.Path(50, 100).splineTo([ 164, 46, 274, 142, 412, 57, 522, 141, 664, 64 ]);
        const path2 = new Phaser.Curves.Path(100, 200).lineTo(500, 300);
        const path3 = new Phaser.Curves.Path(400, 400).circleTo(100);

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0xffffff, 1);

        path1.draw(graphics, 128);
        path2.draw(graphics, 128);
        path3.draw(graphics, 128);

        let current = 0;

        const lemming = this.add.follower(path1, 0, 0, 'lemming');

        lemming.startFollow({
            positionOnPath: true,
            duration: 3000,
            yoyo: true,
            repeat: -1,
            rotateToPath: true,
            verticalAdjust: true
        });

        this.input.on('pointerdown', () =>
        {

            current++;

            if (current === 3)
            {
                current = 0;
            }

            if (current === 0)
            {
                lemming.setPath(path1);
            }
            else if (current === 1)
            {
                lemming.setPath(path2);
            }
            else
            {
                lemming.setPath(path3);
            }

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
