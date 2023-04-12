class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('buttonBG', 'assets/sprites/button-bg.png');
        this.load.image('buttonText', 'assets/sprites/button-text.png');
    }

    create ()
    {
        const bg = this.add.image(0, 0, 'buttonBG');
        const text = this.add.image(0, 0, 'buttonText');

        const container = this.add.container(400, 300, [ bg, text ]);

        container.setSize(bg.width, bg.height);

        container.setInteractive();

        this.input.setDraggable(container);

        container.on('pointerover', () =>
        {

            bg.setTint(0x44ff44);

        });

        container.on('pointerout', () =>
        {

            bg.clearTint();

        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
