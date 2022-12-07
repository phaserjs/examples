class Boot extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'boot', active: true });
    }

    preload ()
    {
        this.load.image('atari1', 'assets/sprites/atari400.png');
        this.load.image('atari2', 'assets/sprites/atari1200xl.png');
    }

    create ()
    {
        this.scene.start('sceneA');
        this.scene.launch('sceneB');
    }
}

class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA' });
    }

    create ()
    {
        const image = this.add.sprite(200, 300, 'atari1').setInteractive();

        this.input.setDraggable(image);

        image.on('dragstart', function (pointer)
        {

            this.setTint(0xff0000);

        });

        image.on('drag', function (pointer, dragX, dragY)
        {

            this.x = dragX;
            this.y = dragY;

        });

        image.on('dragend', function (pointer)
        {

            this.clearTint();

        });
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB' });
    }

    create ()
    {
        const image = this.add.sprite(600, 300, 'atari2').setInteractive();

        this.input.setDraggable(image);

        image.on('dragstart', function (pointer)
        {

            this.setTint(0xff0000);

        });

        image.on('drag', function (pointer, dragX, dragY)
        {

            this.x = dragX;
            this.y = dragY;

        });

        image.on('dragend', function (pointer)
        {

            this.clearTint();

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [ Boot, SceneA, SceneB ]
};

const game = new Phaser.Game(config);
