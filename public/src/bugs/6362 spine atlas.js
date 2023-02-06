class Example extends Phaser.Scene
{
    constructor ()
    {
        super({
            pack: {
                files: [
                    { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/3.8.95/SpinePluginDebug.js', sceneKey: 'spine' }
                ]
            }
        });
    }

    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser2.png');

        this.load.setPath('assets/spine/3.8/demos/');

        this.load.spine('set1', 'demos.json', [ 'atlas1.atlas' ], true);
    }

    create ()
    {
        this.add.image(32, 32, 'logo').setOrigin(0);

        this.input.once('pointerdown', () => {

            this.make.spine({
                x: 600,
                y: 600,
                key: 'set1.spineboy'
            }, true);

        });

        window.setTimeout(() => {

            this.make.spine({
                x: 400,
                y: 600,
                key: 'set1.spineboy'
            }, false);

        }, 1000);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: Example
};

const game = new Phaser.Game(config);
