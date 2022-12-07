class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA', active: true });

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

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB', active: true });
    }

    preload ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
    }

    create ()
    {
        const img = this.add.image(400, 300, 'face');

        this.tweens.add({
            targets: img,
            alpha: 0,
            yoyo: true,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ SceneB, SceneA ]
};

const game = new Phaser.Game(config);
