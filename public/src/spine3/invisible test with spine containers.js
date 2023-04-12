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
        let base = this.add.spineContainer();

        for (let i = 0; i < 32; i++)
        {
            let obj = this.add.spine(i * 64, 100, 'boy', 'idle', true).setScale(0.25);

            if (i % 2 === 0)
            {
                obj.setVisible(false);
            }

            base.add(obj);
        }

        let base2 = this.add.spineContainer();

        for (let i = 0; i < 32; i++)
        {
            let obj = this.add.spine(i * 64, 300, 'boy', 'walk', true).setScale(0.25);

            if (i % 2 === 0)
            {
                obj.setVisible(false);
            }

            base2.add(obj);
        }

        let base3 = this.add.spineContainer();

        for (let i = 0; i < 32; i++)
        {
            let obj = this.add.spine(i * 64, 500, 'boy', 'run', true).setScale(0.25);

            if (i % 2 === 0)
            {
                obj.setVisible(false);
            }

            base3.add(obj);
        }

        let base4 = this.add.spineContainer();

        for (let i = 0; i < 32; i++)
        {
            let obj = this.add.spine(i * 64, 700, 'boy', 'jump', true).setScale(0.25);

            if (i % 2 === 0)
            {
                obj.setVisible(false);
            }

            base4.add(obj);
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
