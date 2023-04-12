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

        this.load.spine('boy', 'spineboy-pro.json', 'spineboy-pro.atlas', true);
    }

    create ()
    {
        this.add.image(0, 0, 'logo').setOrigin(0);

        const spineBoy3 = this.add.spine(650, 300, 'boy', 'death', true);

        spineBoy3.setScale(0.4).setFlipX(true);

        const spineBoy2 = this.add.spine(100, 300, 'boy', 'shoot', true);

        spineBoy2.setScale(0.4);

        const spineBoy = this.add.spine(350, 600, 'boy', 'run', true);

        spineBoy.setScale(0.7);

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            acceleration: 0.5,
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
    backgroundColor: '#2d2d2d',
    scene: Example
};

const game = new Phaser.Game(config);
