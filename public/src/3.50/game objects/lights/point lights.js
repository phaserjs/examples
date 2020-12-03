var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    backgroundColor: '#000000',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var land;
var text;
var cursors;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setPath('assets/normal-maps/');

    this.load.image('gem1');
    this.load.image('gem2');
    this.load.image('gem3');
    this.load.image('gem4');
    this.load.image('gem5');
    this.load.image('gem6');
    this.load.image('gem7');
    this.load.image('gem8');
    this.load.image('gem9');

    this.load.image('stones', [ 'stones.png', 'stones_n.png' ]);
}

function create ()
{
    this.cameras.main.removeBounds();

    land = this.add.tileSprite(400, 300, 800, 600, 'stones');

    land.setPipeline('Light2D');
    land.setScrollFactor(0, 0);
    land.tileScaleX = 0.5;
    land.tileScaleY = 0.5;

    this.lights.enable();
    this.lights.setAmbientColor(0x666666);

    var spotlight = this.lights.addLight(400, 300, 128).setIntensity(3);

    this.input.on('pointermove', function (pointer) {

        spotlight.x = pointer.worldX;
        spotlight.y = pointer.worldY;

    });

    this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY) {

        if (deltaY < 0)
        {
            this.cameras.main.zoom += 0.1;
        }
        else if (deltaY > 0)
        {
            this.cameras.main.zoom -= 0.1;
        }

        var w = 800 * (1 / this.cameras.main.zoom);
        var h = 600 * (1 / this.cameras.main.zoom);

        land.setSize(w, h);
        land.dirty = true;

    });

    text = this.add.text(10, 10, '').setDepth(1).setScrollFactor(0, 0);

    cursors = this.input.keyboard.createCursorKeys();

    var lightsLayer = this.add.layer();
    var gemsLayer = this.add.layer();

    var circ = new Phaser.Geom.Circle(400, 300, 400);

    var rings = [
        {
            radius: 300,
            points: 10,
            color: 0xff22ff,
            frame: 'gem2'
        },
        {
            radius: 500,
            points: 15,
            color: 0x61cd6b,
            frame: 'gem3'
        },
        {
            radius: 700,
            points: 20,
            color: 0xc7860f,
            frame: 'gem4'
        },
        {
            radius: 900,
            points: 25,
            color: 0xeae90a,
            frame: 'gem5'
        },
        {
            radius: 1100,
            points: 30,
            color: 0xd61837,
            frame: 'gem7'
        },
        {
            radius: 1300,
            points: 35,
            color: 0x42b3ee,
            frame: 'gem1'
        },
        {
            radius: 1500,
            points: 40,
            color: 0x9a5baa,
            frame: 'gem6'
        },
        {
            radius: 1700,
            points: 45,
            color: 0x65a0b3,
            frame: 'gem8'
        },
        {
            radius: 1900,
            points: 50,
            color: 0x0771d2,
            frame: 'gem9'
        }
    ];

    for (var i = 0; i < rings.length; i++)
    {
        var ring = rings[i];

        circ.setTo(400, 300, ring.radius);

        points = Phaser.Geom.Circle.GetPoints(circ, ring.points);

        points.forEach(point => {

            lightsLayer.add(this.add.pointlight(point.x, point.y, ring.color, 128, 0.25, 0.1));

            gemsLayer.add(this.add.image(point.x, point.y, ring.frame));

        });
    }

    this.tweens.add({ targets: lightsLayer.list, radius: 96, yoyo: true, duration: 1500, repeat: -1, ease: 'Sine.inOut' });
}

function update ()
{
    text.setText([
        'Cursors to move',
        'Point Lights: 270'
    ]);

    var speed = 6;

    if (cursors.left.isDown)
    {
        this.cameras.main.scrollX -= speed;
        land.tilePositionX -= speed * 2;
    }
    else if (cursors.right.isDown)
    {
        this.cameras.main.scrollX += speed;
        land.tilePositionX += speed * 2;
    }

    if (cursors.up.isDown)
    {
        this.cameras.main.scrollY -= speed;
        land.tilePositionY -= speed * 2;
    }
    else if (cursors.down.isDown)
    {
        this.cameras.main.scrollY += speed;
        land.tilePositionY += speed * 2;
    }
}
