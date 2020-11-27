class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.scenePlugin('Camera3DPlugin', 'plugins/camera3d.min.js', 'Camera3DPlugin', 'cameras3d');

        this.load.image('ball', 'assets/sprites/aqua_ball.png');
        this.load.image('ball2', 'assets/sprites/yellow_ball.png');
        this.isPosition = true;
    }

    create ()
    {
        const graphics = this.add.graphics();

        this.camera = this.cameras3d.add(85).setZ(350).setPixelScale(16);

        var sprites = this.camera.createMultiple(400, 'ball');

        this.camera.randomSphere(200, sprites);

        sprites = this.camera.createMultiple(200, 'ball2');
        this.camera.randomSphere(80, sprites);

        //  Our rotation matrix
        this.transform = new Phaser.Math.Matrix4();
        this.transform.rotateX(0.01);
        this.transform.rotateY(0.02);

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

    updateCamControls() {
        if (this.cursors.left.isDown)
        {
            if (this.isPosition)
            {
                this.camera.x += 4;
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
                this.camera.x -= 4;
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
                    this.camera.y -= 4;
                }
                else
                {
                    this.camera.rotate(0.01, this.zAxis);
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
                    this.camera.rotate(0.01, this.yAxis);
                }
            }
        }
        else if (this.cursors.down.isDown)
        {
            if (this.cursors.shift.isDown)
            {
                if (this.isPosition)
                {
                    this.camera.y += 4;
                }
                else
                {
                    this.camera.rotate(-0.01, zAxis);
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
                    this.camera.rotate(-0.01, yAxis);
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
    pixelArt: true,
    scene: [ Example ]
};

const game = new Phaser.Game(config);
