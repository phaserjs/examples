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
    }

    create ()
    {
        this.camera = this.cameras3d.add(55).setPosition(0, -50, 200).setPixelScale(32);
        this.camera.createRect({ x: 8, y: 1, z: 8 }, 32, 'ball');

        this.cursors = this.input.keyboard.createCursorKeys();

        this.text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    }

    update ()
    {
        var obj = this.camera;

        if (this.cursors.left.isDown)
        {
            obj.x -= 4;
        }
        else if (this.cursors.right.isDown)
        {
            obj.x += 4;
        }

        if (this.cursors.up.isDown)
        {
            if (this.cursors.shift.isDown)
            {
                obj.y -= 4;
            }
            else
            {
                obj.z -= 4;
            }
        }
        else if (this.cursors.down.isDown)
        {
            if (this.cursors.shift.isDown)
            {
                obj.y += 4;
            }
            else
            {
                obj.z += 4;
            }
        }

        this.camera.update();

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
