class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.spritesheet('cards', 'assets/sprites/cards80x112.png', { frameWidth: 80, frameHeight: 112 });
    }

    create ()
    {
        const card1 = this.add.sprite(200, 300, 'cards', 1).setInteractive();
        const card2 = this.add.sprite(300, 300, 'cards', 2).setInteractive();
        const card3 = this.add.sprite(400, 300, 'cards', 3).setInteractive();
        const card4 = this.add.sprite(500, 300, 'cards', 4).setInteractive();
        const card5 = this.add.sprite(600, 300, 'cards', 5).setInteractive();

        this.input.setDraggable([ card1, card2, card3, card4, card5 ]);

        let index = 0;

        this.input.on('dragstart', (pointer, gameObject) => {

            index = this.children.getIndex(gameObject);

            this.children.bringToTop(gameObject);

        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        this.input.on('dragend', (pointer, gameObject) => {

            this.children.moveTo(gameObject, index);

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
