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

        this.load.spine('boy', 'spineboy-ess.json', 'spineboy-ess.atlas', true);
    }

    create ()
    {
        this.add.image(0, 0, 'logo').setOrigin(0);

        // this.spine.skeletonRenderer.debugRendering = true;
        // this.spine.skeletonRenderer.triangleRendering = true;
        // var spineBoy = this.add.spine(600, 550, 'boy', 'run', true);

        const spineBoy = this.add.spine(400, 550, 'boy', 'idle', true);

        // spineBoy.drawDebug = true;

        // spineBoy.setScale(0.5);
        // spineBoy.setAngle(45);

        const spineBoy2 = this.add.spine(200, 550, 'boy', 'shoot', true).setScale(-0.5, 0.5);

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
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d66',
    scene: Example
};

const game = new Phaser.Game(config);
