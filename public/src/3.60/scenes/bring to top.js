class DemoA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'demoA', active: true });
    }

    preload ()
    {
        this.load.image('picA', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        this.add.image(400, 300, 'picA');

        this.input.once('pointerdown', function ()
        {

            this.scene.bringToTop();

        }, this);
    }
}

class DemoB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'demoB', active: true });
    }

    preload ()
    {
        this.load.image('picB', 'assets/pics/sukasuka-chtholly.png');
    }

    create ()
    {
        this.add.image(400, 500, 'picB');
    }
}

class DemoC extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'demoC', active: true });
    }

    preload ()
    {
        this.load.image('picC', 'assets/pics/titan-mech.png');
    }

    create ()
    {
        this.add.image(300, 300, 'picC');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ DemoA, DemoB, DemoC ]
};

const game = new Phaser.Game(config);
