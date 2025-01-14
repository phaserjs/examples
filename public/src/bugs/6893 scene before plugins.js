class TestPlugin extends Phaser.Plugins.BasePlugin
{

    constructor(pluginManager)
    {
        super(pluginManager);
    }

    wibble ()
    {
        console.log('hello');
    }

}

class Example extends Phaser.Scene
{
    constructor()
    {
        super({
            key: "example"
        });
    }

    preload ()
    {
        this.load.image('elephant', 'assets/sprites/elephant.png');
    }

    create ()
    {
        console.log('create');
        this.test.wibble();
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'phaser-example',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Example ],
    plugins: {
        global: [
            { key: 'TestPlugin', plugin: TestPlugin, start: false, mapping: 'test' }
        ]
    },
};

var game = new Phaser.Game(config);