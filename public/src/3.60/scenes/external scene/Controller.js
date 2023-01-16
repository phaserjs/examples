class Controller extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'controller' });
    }

    preload ()
    {
        this.load.script('demo', 'src/scenes/external scene/Demo.js');
    }

    create ()
    {
        var clone = 0;

        this.time.addEvent({ delay: 2000, callback: function () {

            this.scene.add('demo' + clone, Demo, true);
            clone++;

        }, callbackScope: this, repeat: 2 });
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
