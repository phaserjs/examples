class Example extends Phaser.Scene
{
    constructor()
    {
        super({
            pack: {
                files: [
                    { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/spine4.1/SpinePluginDebug.js', sceneKey: 'spine1' }
                ]
            },
            key: "example"
        });
    }

    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser.png');
        this.load.atlas('atlas', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');

        this.load.setPath('assets/spine/4.1/demos/');

        this.load.spine('set1', 'demos.json', [ 'atlas1.atlas', 'atlas2.atlas', 'heroes.atlas' ], true);
    }

    create ()
    {
        // this.cameras.main.setBackgroundColor(0xffffff);
        this.add.image(300,300, "atlas", "frame");
        this.testSpine = this.add.spine(400, 500, 'set1.alien').setScale(0.5);

        this.time.delayedCall(2000, () => 
        {
            // this.testSpine.destroy();
            this.scene.start("test");
        });
    }
}

class Test extends Phaser.Scene
{
    constructor()
    {
        super({
            pack: {
                files: [
                    { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/spine4.1/SpinePluginDebug.js', sceneKey: 'spine2' }
                ]
            },
            key: "test"
        });
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x111111);
        
        this.add.image(300,300, "atlas", "frame");
        this.testSpine2 = this.add.spine(400, 500, 'set1.spineboy', 'idle', true);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'phaser-example',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Example, Test ]
};

const game = new Phaser.Game(config);