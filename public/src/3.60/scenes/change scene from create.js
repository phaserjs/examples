class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA' });
    }

    preload ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    }

    create ()
    {
        console.log('SceneA');

        this.scene.start('sceneB');
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
        console.log('SceneB');

        this.scene.start('sceneC');
    }
}

class SceneC extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneC' });
    }

    create ()
    {
        console.log('SceneC');

        this.scene.start('sceneD');
    }
}

class SceneD extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneD' });
    }

    create ()
    {
        console.log('SceneD');

        this.scene.start('sceneE');
    }
}

class SceneE extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneE' });
    }

    create ()
    {
        console.log('SceneE');

        this.add.image(400, 300, 'face');
        this.arrow = this.add.sprite(400, 300, 'arrow').setOrigin(0, 0.5);
    }

    update (time, delta)
    {
        this.arrow.rotation += 0.01;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ SceneA, SceneB, SceneC, SceneD, SceneE ]
};

const game = new Phaser.Game(config);
