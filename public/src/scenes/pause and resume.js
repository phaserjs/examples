class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA' });

        this.pic;
    }

    preload ()
    {
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    }

    create ()
    {
        this.pic = this.add.image(400, 300, 'arrow').setOrigin(0, 0.5);

        this.input.once('pointerup', function ()
        {

            this.scene.pause();
            this.scene.launch('sceneB');

        }, this);

        this.events.on('pause', () =>
        {
            console.log('Scene A paused');
        });

        this.events.on('resume', () =>
        {
            console.log('Scene A resumed');
        });
    }

    update (time, delta)
    {
        this.pic.rotation += 0.01;
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB' });
    }

    preload ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
    }

    create ()
    {
        this.add.image(400, 300, 'face').setAlpha(0.5);

        this.input.once('pointerdown', function ()
        {

            this.scene.resume('sceneA');

        }, this);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB ]
};

const game = new Phaser.Game(config);
