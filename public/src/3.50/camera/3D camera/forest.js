class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.scenePlugin('Camera3DPlugin', 'plugins/camera3d.min.js', 'Camera3DPlugin', 'cameras3d');

        this.load.image('bg', 'assets/tests/camera3d/bg.png');
        this.load.image('horizon', 'assets/tests/camera3d/horizon-wide.png');
        this.load.image('tree', 'assets/tests/camera3d/tree.png');
    }

    create ()
    {
        const sky = this.add.image(400, 250, 'bg').setDepth(-5000);
        const horizon = this.add.image(400, 300, 'horizon').setDepth(-4000);

        this.camera = this.cameras3d.add(20, 800, 600).setPosition(1500, -70, 10000);

        for (let z = 0; z < 32; z++)
        {
            for (let x = 0; x < 32; x++)
            {
                const xDiff = Phaser.Math.Between(-40, 40);
                const zDiff = Phaser.Math.Between(-60, 60);

                const bx = (x * 100) + xDiff;
                const bz = (z * 300) + zDiff;

                this.camera.create(bx, 0, bz, 'tree');
            }
        }

        this.cursors = this.input.keyboard.createCursorKeys();

        this.text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            this.camera.x -= 4;
        }
        else if (this.cursors.right.isDown)
        {
            this.camera.x += 4;
        }

        if (this.cursors.up.isDown)
        {
            if (this.cursors.shift.isDown)
            {
                this.camera.y = Phaser.Math.Clamp(this.camera.y - 4, -200, 30);
            }
            else
            {
                this.camera.z -= 16;
            }
        }
        else if (this.cursors.down.isDown)
        {
            if (this.cursors.shift.isDown)
            {
                this.camera.y = Phaser.Math.Clamp(this.camera.y + 4, -200, 30);
            }
            else
            {
                this.camera.z += 16;
            }
        }

        this.text.setText([
            'camera.x: ' + this.camera.x,
            'camera.y: ' + this.camera.y,
            'camera.z: ' + this.camera.z
        ]);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#72dea3',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
