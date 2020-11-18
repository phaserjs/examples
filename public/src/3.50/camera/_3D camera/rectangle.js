class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.scenePlugin('Camera3DPlugin', 'plugins/camera3d.min.js', 'Camera3DPlugin', 'cameras3d');
        this.load.image('particle', 'assets/sprites/mushroom2.png');
        this.isPosition = true;
    }

    create ()
    {
        this.graphics = this.add.graphics();

        this.camera = this.cameras3d.add(85).setZ(300).setPixelScale(128);

        var sprites = this.camera.createRect({ x: 4, y: 4, z: 16 }, { x: 48, y: 48, z: 32 }, 'particle');

        //  Our rotation matrix
        this.transform = new Phaser.Math.Matrix4().rotateX(-0.01).rotateY(-0.02).rotateZ(0.01);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

        this.xAxis = new Phaser.Math.Vector3(1, 0, 0);
        this.yAxis = new Phaser.Math.Vector3(0, 1, 0);
        this.zAxis = new Phaser.Math.Vector3(0, 0, 1);
    }

    update ()
    {
        this.camera.transformChildren(this.transform);
        this.updateCamControls();
    }

    updateCamControls ()
    {
        if (this.cursors.left.isDown)
        {
            if (this.isPosition)
            {
                this.camera.x -= 4;
            }
            else
            {
                this.camera.rotate(0.01, this.xAxis);
            }
        }
        else if (this.cursors.right.isDown)
        {
            if (this.isPosition)
            {
                this.camera.x += 4;
            }
            else
            {
                this.camera.rotate(-0.01, this.xAxis);
            }
        }

        if (this.cursors.up.isDown)
        {
            if (this.cursors.shift.isDown)
            {
                if (this.isPosition)
                {
                    this.camera.y += 4;
                }
                else
                {
                    this.camera.rotate(0.01, yAxis);
                }
            }
            else
            {
                if (this.isPosition)
                {
                    this.camera.z += 4;
                }
                else
                {
                    this.camera.rotate(0.01, zAxis);
                }
            }
        }
        else if (this.cursors.down.isDown)
        {
            if (this.cursors.shift.isDown)
            {
                if (this.isPosition)
                {
                    this.camera.y -= 4;
                }
                else
                {
                    this.camera.rotate(-0.01, yAxis);
                }
            }
            else
            {
                if (this.isPosition)
                {
                    this.camera.z -= 4;
                }
                else
                {
                    this.camera.rotate(-0.01, zAxis);
                }
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
    scene: [ Example ]
};
const game = new Phaser.Game(config);
