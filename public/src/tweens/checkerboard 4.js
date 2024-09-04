class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/pics/skull-and-bones.jpg');
        this.load.image('block', 'assets/sprites/50x50-black.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const blocks = this.add.group({ key: 'block', repeat: 191 });

        Phaser.Actions.GridAlign(blocks.getChildren(), {
            width: 16,
            cellWidth: 50,
            cellHeight: 50,
            x: 0,
            y: 0
        });

        var _this = this;

        let i = 0;

        blocks.children.iterate(child =>
        {

            this.tweens.add({
                targets: child,
                scaleX: 0,
                scaleY: 0,
                alpha: 0,
                y: '+=64',
                angle: 180,
                ease: 'Power3',
                duration: 1000,
                yoyo: true,
                delay: 1000 + (i * 100),
                hold: 1500,
            });

            i++;

            //  Change the value 32 for different results
            if (i % 16 === 0)
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