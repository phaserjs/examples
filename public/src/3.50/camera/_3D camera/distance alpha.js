class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.scenePlugin('Camera3DPlugin', 'plugins/camera3d.min.js', 'Camera3DPlugin', 'cameras3d');
        this.load.image('tree', 'assets/tests/camera3d/tree.png');
    }

    create ()
    {
        this.camera = this.cameras3d.add(80, 800, 600).setPosition(0, 0, 400);

        this.sprite = this.camera.create(0, 0, 0, 'tree');

        this.cursors = this.input.keyboard.createCursorKeys();

        this.text = this.add.text(10, 10, '', { font: '16px Courier', color: '#000000' });
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
                this.camera.y -= 4;
            }
            else
            {
                this.camera.z += 16;
            }
        }
        else if (this.cursors.down.isDown)
        {
            if (this.cursors.shift.isDown)
            {
                this.camera.y += 4;
            }
            else
            {
                this.camera.z -= 16;
            }
        }

        //  1000 to 600 = alpha 0 to 1

        this.sprite.gameObject.alpha = 1 - Phaser.Math.Percent(this.camera.z, 600, 1000);

        this.text.setText([
            'a: ' + this.sprite.gameObject.alpha,
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
