class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        this.add.sprite(300, 200, 'eye').setInteractive();
        this.add.sprite(400, 300, 'eye').setInteractive();
        this.add.sprite(500, 400, 'eye').setInteractive();

        //  Events

        this.input.on('pointerover', (event, gameObjects) =>
        {

            gameObjects[0].setTint(0xff0000);

        });

        this.input.on('pointerout', (event, gameObjects) =>
        {

            gameObjects[0].clearTint();

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
