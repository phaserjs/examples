class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA' });
    }

    create ()
    {
        const sceneB = this.scene.get('sceneB');

        this.input.on('pointerup', function ()
        {

            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);
            const frame = sceneB.getImage();

            this.add.image(x, y, frame);

        }, this);

        this.add.text(10, 10, 'Click to get image', { font: '16px Courier', fill: '#00ff00' }).setDepth(1000);
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB', active: true });

        this.frames;
    }

    preload ()
    {
        this.load.setPath('assets/sprites/');

        this.load.image('amiga-cursor');
        this.load.image('aqua_ball');
        this.load.image('asuna_by_vali233');
        this.load.image('atari130xe');
        this.load.image('atari400');
    }

    create ()
    {
        this.frames = [ 'amiga-cursor', 'aqua_ball', 'asuna_by_vali233', 'atari130xe', 'atari400' ];
    }

    getImage ()
    {
        return Phaser.Math.RND.pick(this.frames);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB ]
};

const game = new Phaser.Game(config);
