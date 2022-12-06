class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        for (let i = 0; i < 14; i++)
        {
            this.add.sprite(100 + i * 30, 100 + i * 30, 'eye').setInteractive();
        }

        //  If you disable topOnly it will fire events for all objects the pointer is over
        //  regardless of their place on the display list
        this.input.setTopOnly(false);

        //  Events

        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {

            gameObject.setTint(0x00ff00);

        });

        this.input.on('gameobjectout', (pointer, gameObject) =>
        {

            gameObject.clearTint();

        });

        this.input.on('gameobjectup', (pointer, gameObject) =>
        {

            gameObject.clearTint();

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
