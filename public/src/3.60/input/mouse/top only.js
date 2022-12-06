class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        const sprite1 = this.add.sprite(400, 300, 'eye').setInteractive();
        const sprite2 = this.add.sprite(450, 350, 'eye').setInteractive();

        sprite1.name = 'bob';
        sprite2.name = 'ben';

        this.input.topOnly = true;

        this.input.on('gameobjectover', (pointer, gameObject) =>
        {

            gameObject.setTint(0x00ff00);

        });

        this.input.on('gameobjectout', (pointer, gameObject) =>
        {

            if (gameObject.input.isDown)
            {
                gameObject.setTint(0xff0000);
            }
            else
            {
                gameObject.clearTint();
            }

        });

        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {

            gameObject.setTint(0xff0000);

        });

        this.input.on('gameobjectup', (pointer, gameObject) =>
        {

            if (gameObject.input.isOver)
            {
                gameObject.setTint(0x00ff00);
            }
            else
            {
                gameObject.clearTint();
            }

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
