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
        this.add.sprite(400, 300, 'face').setAlpha(0.2);

        this.input.once('pointerdown', function ()
        {

            console.log('From SceneA to SceneB');

            this.scene.start('sceneB');

        }, this);
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
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    }

    create ()
    {
        this.arrow = this.add.sprite(400, 300, 'arrow').setOrigin(0, 0.5);

        this.input.once('pointerdown', function (event)
        {

            console.log('From SceneB to SceneC');

            this.scene.start('sceneC');

        }, this);
    }

    update (time, delta)
    {
        this.arrow.rotation += 0.01;
    }
}

class SceneC extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneC' });
    }

    preload ()
    {
        this.load.image('mech', 'assets/pics/titan-mech.png');
    }

    create ()
    {
        this.add.sprite(Phaser.Math.Between(0, 800), 300, 'mech');

        this.input.once('pointerdown', function (event)
        {

            console.log('From SceneC to SceneA');

            this.scene.start('sceneA');

        }, this);
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
