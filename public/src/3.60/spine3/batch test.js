class Example extends Phaser.Scene
{
    controls;

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
        this.load.image('logo', 'assets/sprites/phaser.png');

        this.load.setPath('assets/spine/3.8/spineboy');

        this.load.spine('boy', 'spineboy-ess.json', 'spineboy-ess.atlas', false);
    }

    create ()
    {
        const anims = [ 'death', 'idle', 'jump', 'run', 'walk' ];

        for (let i = 0; i < 128; i++)
        {
            const s = Phaser.Math.FloatBetween(0.1, 0.5);
            const x = Phaser.Math.Between(150, 750 * 6);
            const y = Phaser.Math.Between(200, 600);

            this.add.spine(x, y, 'boy', Phaser.Utils.Array.GetRandom(anims), true).setScale(s).setName(`s${i}`);
        }

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            acceleration: 0.35,
            drag: 0.01,
            maxSpeed: 1.2
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
    }

    update (time, delta)
    {
        this.controls.update(delta);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#cdcdcd',
    scene: Example
};

const game = new Phaser.Game(config);
