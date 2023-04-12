class Demo extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        this.eye = this.add.image(Phaser.Math.Between(0, 800), Phaser.Math.Between(0, 600), 'eye');
    }

    update ()
    {
        this.eye.rotation += 0.02;
    }
}

class Controller extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'controller' });
    }

    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        let clone = 0;
        this.time.addEvent({ delay: 1000, callback: function () {

            this.scene.add('demo' + clone, Demo, true);
            clone++;

        }, callbackScope: this, repeat: 99 });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ Controller ]
};

const game = new Phaser.Game(config);
