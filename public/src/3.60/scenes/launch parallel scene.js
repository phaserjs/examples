class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA' });
    }

    preload ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
    }

    create ()
    {
        this.add.image(400, 300, 'face').setAlpha(0.2);

        const _this = this;

        this.input.once('pointerdown', function ()
        {

            this.scene.launch('sceneB');
            this.scene.launch('sceneC');

        }, this);
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB' });

        this.pic;
    }

    preload ()
    {
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    }

    create ()
    {
        this.pic = this.add.image(400, 300, 'arrow').setOrigin(0, 0.5);
    }

    update (time, delta)
    {
        this.pic.rotation += 0.01;
    }
}

class SceneC extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneC' });

        this.pic;
    }

    preload ()
    {
        this.load.image('mech', 'assets/pics/titan-mech.png');
    }

    create ()
    {
        this.pic = this.add.image(Phaser.Math.Between(300, 600), 300, 'mech');
    }

    update (time, delta)
    {
        this.pic.rotation -= 0.02;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB, SceneC ]
};

const game = new Phaser.Game(config);
