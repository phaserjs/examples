class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.scenePlugin('Camera3DPlugin', 'plugins/camera3d.min.js', 'Camera3DPlugin', 'cameras3d');
        this.load.spritesheet('strip', 'assets/sprites/stripes800x32-v2.png', { frameWidth: 800, frameHeight: 32 });
        this.speed = 3;
    }

    create ()
    {
        this.camera = this.cameras3d.add(80).setPosition(0, -40, 300).setPixelScale(48);

        this.road = this.camera.createRect({ x: 1, y: 1, z: 32 }, 24, 'strip', 0);

        this.startZ = this.road[0].z;

        for (var i = 0; i < this.road.length; i++)
        {
            var segment = this.road[i];

            // segment.adjustScaleX = false;

            if (i % 2 === 1)
            {
                segment.gameObject.setFrame(1);
            }
        }

        this.cursors = this.input.keyboard.createCursorKeys();

        this.text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    }

    update ()
    {
        //  Scroll the road
        for (var i = 0; i < this.road.length; i++)
        {
            var segment = this.road[i];

            segment.z += this.speed;

            if (segment.z > (this.camera.z + 32))
            {
                segment.z = this.startZ;
            }
        }

        var obj = this.camera;
        if (this.cursors.up.isDown)
        {
            obj.y -= 4;
        }
        else if (this.cursors.down.isDown)
        {
            obj.y += 4;
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
    backgroundColor: '#4848f8',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
