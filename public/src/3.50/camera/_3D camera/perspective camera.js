class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.scenePlugin('Camera3DPlugin', 'plugins/camera3d.min.js', 'Camera3DPlugin', 'cameras3d');

        this.load.image('block', 'assets/sprites/128x128-v2.png');
    }

    create ()
    {
        //  Camera at 0x0x200 and looking at 0x0x0
        this.camera = this.cameras3d.add(85).setPosition(0, 0, 200);

        //  Create a few images to check the perspective with
        this.image = this.camera.create(0, 0, 0, 'block');

        this.camera.create(-150, 0, -100, 'block');
        this.camera.create(300, -100, -200, 'block');

        this.cursors = this.input.keyboard.createCursorKeys();

        this.text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    }

    update ()
    {
        var obj = this.camera;
        // var obj = image;

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
            'camera.z: ' + this.camera.z,
            '',
            'image.x: ' + this.image.position.x,
            'image.y: ' + this.image.position.y,
            'image.z: ' + this.image.position.z
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
