class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/deepblue.png');
        this.load.image('target', 'assets/sprites/brush1.png');
        this.load.spritesheet('blocks', 'assets/sprites/heartstar.png', { frameWidth: 64, frameHeight: 64 });
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.text(16, 16, 'Snap to Grid on Drag').setFontSize(24).setShadow(1, 1);

        //  Create some 'drop zones'
        this.add.image(640, 192, 'target').setOrigin(0, 0);
        this.add.image(640, 320, 'target').setOrigin(0, 0);
        this.add.image(640, 448, 'target').setOrigin(0, 0);

        //  The blocks we can drag
        const block1 = this.add.sprite(64, 192, 'blocks', 1).setOrigin(0, 0);
        const block2 = this.add.sprite(64, 320, 'blocks', 1).setOrigin(0, 0);
        const block3 = this.add.sprite(64, 448, 'blocks', 1).setOrigin(0, 0);

        block1.setInteractive({ draggable: true });
        block2.setInteractive({ draggable: true });
        block3.setInteractive({ draggable: true });

        let over1 = false;
        let over2 = false;
        let over3 = false;

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {

            //  This will snap our drag to a 64x64 grid

            dragX = Phaser.Math.Snap.To(dragX, 64);
            dragY = Phaser.Math.Snap.To(dragY, 64);

            gameObject.setPosition(dragX, dragY);

        });

        //  The following code just checks to see if the gameObject is over
        //  a zone when the drag ends and if so, we change frame and disable it

        this.input.on('dragend', (pointer, gameObject) => {

            const x = gameObject.x;
            const y = gameObject.y;

            if (x === 640 && y === 192 && !over1)
            {
                over1 = true;
                gameObject.setFrame(0);
                gameObject.disableInteractive();
            }
            else if (x === 640 && y === 320 && !over2)
            {
                over2 = true;
                gameObject.setFrame(0);
                gameObject.disableInteractive();
            }
            else if (x === 640 && y === 448 && !over3)
            {
                over3 = true;
                gameObject.setFrame(0);
                gameObject.disableInteractive();
            }

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
