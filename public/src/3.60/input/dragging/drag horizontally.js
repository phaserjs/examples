class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient8.png');
        this.load.atlas('blocks', 'assets/sprites/blocks.png', 'assets/sprites/blocks.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.text(16, 16, 'Drag the Sprites horizontally').setFontSize(24).setShadow(1, 1);

        const block1 = this.add.sprite(400, 150, 'blocks', 'metal');
        const block2 = this.add.sprite(400, 300, 'blocks', 'platform');
        const block3 = this.add.sprite(400, 450, 'blocks', 'wooden');

        block1.setInteractive({ draggable: true });
        block2.setInteractive({ draggable: true });
        block3.setInteractive({ draggable: true });

        this.input.on('drag', (pointer, gameObject, dragX) => {

            //  By clamping dragX we can keep it within
            //  whatever bounds we need
            dragX = Phaser.Math.Clamp(dragX, 100, 700);

            //  By only applying the dragX we can limit the drag
            //  to be horizontal only
            gameObject.x = dragX;

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
