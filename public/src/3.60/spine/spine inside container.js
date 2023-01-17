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

        this.load.setPath('assets/spine/3.8/coin');

        this.load.spine('coin', 'coin-pro.json', 'coin-pro.atlas');
    }

    create ()
    {
        this.add.image(0, 0, 'logo').setOrigin(0);

        const spineBoy = this.add.spine(0, 0, 'boy', 'walk', true).setScale(0.5);
        const coin = this.add.spine(0, 0, 'coin', 'rotate', true).setScale(0.3);

        const container = this.add.spineContainer(400, 300, [ spineBoy, coin ]);

        this.tweens.add({
            targets: container,
            angle: 360,
            duration: 6000,
            repeat: -1
        });

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            acceleration: 0.06,
            drag: 0.0005,
            maxSpeed: 1.0
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
    backgroundColor: '#2d2d66',
    scene: Example
};

const game = new Phaser.Game(config);
