class TestPlugin extends Phaser.Plugin {

    constructor (game)
    {
        super('TestPlugin', game);

        this.active = false;

        this.image;
    }

    addImage (image)
    {
        this.image = image;
        this.active = true;
    }

    //  Called every Game.step by the PluginManager.
    step (time, delta)
    {
        this.image.x--;

        if (this.image.x < 0)
        {
            this.image.x = 800;
        }
    }

}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    _plugins: {
        install: [
            TestPlugin
        ]
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('elephant', 'assets/sprites/elephant.png');
}

function create ()
{
    var image = this.add.image(800, 300, 'elephant');

    //  The first argument is the unique key the plugin will use internally
    //  The second is the plugin class (not an instance of it, the actual class)
    // var p = this.plugins.add('TestPlugin', TestPlugin);

    // p.addImage(image);
}
