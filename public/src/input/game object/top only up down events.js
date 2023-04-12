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
            const s = this.add.sprite(100 + i * 30, 100 + i * 30, 'eye').setInteractive().setName('eye ' + i);

            s.on('pointerdown', () =>
            {
                console.log(s.name, s.x, s.y);

            });
        }

        //  If you disable topOnly it will fire events for all objects the pointer is over
        //  regardless of their place on the display list
        this.input.setTopOnly(false);

        //  Events

        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {
            // console.log(gameObject.name, gameObject.x, gameObject.y);

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
