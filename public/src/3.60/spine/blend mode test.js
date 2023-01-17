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
        this.load.setPath('assets/spine/3.8/spineboy');

        this.load.spine('boy', 'spineboy-ess.json', 'spineboy-ess.atlas', false);
    }

    create ()
    {
        // this.add.spine(0, 600, 'boy', 'shoot', true).setScale(0.25);
        // this.add.spine(200, 600, 'boy', 'shoot', true).setScale(0.25);
        // this.add.spine(400, 600, 'boy', 'shoot', true).setScale(0.25);
        // this.add.spine(600, 600, 'boy', 'shoot', true).setScale(0.25);

        let base = this.add.spineContainer();

        for (let i = 0; i < 4; i++)
        {
            let obj = this.add.spine(i * 200, 600, 'boy', 'shoot', true).setScale(0.25);

            base.add(obj);
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
