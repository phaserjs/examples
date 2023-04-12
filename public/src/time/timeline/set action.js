class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('timeline', 'assets/atlas/timeline.png', 'assets/atlas/timeline.json');
        this.load.image('bg', 'assets/skies/spookysky.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const bat = this.add.sprite(400, 300, 'timeline', 'bat');

        const timeline = this.add.timeline([
            {
                at: 2000,
                target: bat,
                set: {
                    alpha: 0.2
                }
            },
            {
                at: 4000,
                target: bat,
                set: {
                    alpha: 1,
                    scaleX: 2,
                    scaleY: 2
                }
            },
            {
                at: 6000,
                target: bat,
                set: {
                    tint: 0xff0000,
                    angle: 22
                }
            }
        ]);

        timeline.play();
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
