class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/sky2.png');
        this.load.atlas('blocks', 'assets/sprites/blocks.png', 'assets/sprites/blocks.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.text(16, 16, 'The Sprite will lock to drag direction').setFontSize(24).setShadow(1, 1);

        const block = this.add.sprite(400, 300, 'blocks', 'yellowmonster');

        block.setInteractive({ draggable: true });

        //  The pointer has to move this distance before it's considered as a drag
        this.input.dragDistanceThreshold = 8;

        let dragDirection = null;

        this.input.on('dragstart', () => {

            dragDirection = null;

        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {

            if (!dragDirection)
            {
                if (Math.abs(pointer.velocity.x) > Math.abs(pointer.velocity.y))
                {
                    dragDirection = 'horizontal';
                }
                else
                {
                    dragDirection = 'vertical';
                }
            }

            if (dragDirection  === 'horizontal')
            {
                gameObject.x = dragX;
            }
            else if (dragDirection === 'vertical')
            {
                gameObject.y = dragY;
            }

        });

        this.input.on('dragend', () => {

            dragDirection = null;

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
