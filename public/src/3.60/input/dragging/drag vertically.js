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

        this.add.text(16, 16, 'Drag the Sprites vertically').setFontSize(24).setShadow(1, 1);

        const block1 = this.add.sprite(200, 300, 'blocks', 'redmonster');
        const block2 = this.add.sprite(400, 300, 'blocks', 'bomb');
        const block3 = this.add.sprite(600, 300, 'blocks', 'tallspikes');

        block1.setInteractive({ draggable: true });
        block2.setInteractive({ draggable: true });
        block3.setInteractive({ draggable: true });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {

            //  By clamping dragY we can keep it within
            //  whatever bounds we need
            dragY = Phaser.Math.Clamp(dragY, 100, 500);

            //  By only applying the dragY we can limit the drag
            //  to be vertical only
            gameObject.y = dragY;

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
