class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        const image1 = this.add.sprite(200, 300, 'eye').setInteractive();
        const image2 = this.add.sprite(400, 300, 'eye').setInteractive();
        const image3 = this.add.sprite(600, 300, 'eye').setInteractive();

        this.input.setDraggable([ image1, image2, image3 ]);

        image1.setScrollFactor(1);
        image2.setScrollFactor(0.7);
        image3.setScrollFactor(0.5);

        this.input.on('gameobjectover', (pointer, gameObject) =>
        {

            gameObject.setTint(0x00ff00);

        });

        this.input.on('gameobjectout', (pointer, gameObject) =>
        {

            gameObject.clearTint();

        });

        this.input.on('dragstart', (pointer, gameObject) =>
        {

            gameObject.setTint(0xff0000);

        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        this.input.on('dragend', (pointer, gameObject) =>
        {

            gameObject.clearTint();

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
