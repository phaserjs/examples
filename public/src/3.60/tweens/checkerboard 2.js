class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/tweens/space.png');
        this.load.image('block', 'assets/sprites/50x50.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const blocks = this.add.group({ key: 'block', repeat: 107, setScale: { x: 0.3, y: 0.3 } });

        Phaser.Actions.GridAlign(blocks.getChildren(), {
            width: 12,
            height: 9,
            cellWidth: 60,
            cellHeight: 60,
            x: 40,
            y: 30
        });

        let i = 0;

        blocks.children.iterate(child => {

            this.tweens.add({
                targets: child,
                scale: 1,
                ease: 'sine.inout',
                duration: 300,
                delay: i * 50,
                repeat: -1,
                yoyo: true,
                repeatDelay: 500
            });

            i++;

            if (i % 12 === 0)
            {
                i = 0;
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
