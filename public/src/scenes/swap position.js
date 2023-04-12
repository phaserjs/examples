class Background extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'background', active: true });
    }

    preload ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
    }

    create ()
    {
        this.face = this.add.image(-10, 300, 'face');
    }
}

class Demo extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'demo', active: true });
    }

    preload ()
    {
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    }

    create ()
    {
        this.arrow = this.add.image(400, 300, 'arrow').setOrigin(0, 0.5);

        this.input.once('pointerdown', function ()
        {

            this.scene.swapPosition('background');

        }, this);
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
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ Background, Demo ]
};

const game = new Phaser.Game(config);
