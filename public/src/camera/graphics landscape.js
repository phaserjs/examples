var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var worldWidth = 800 * 4;

function preload ()
{
    this.load.image('clown', 'assets/sprites/clown.png');
}

function create ()
{
    this.cameras.main.setSize(worldWidth, 600);

    // var miniCam = this.cameras.add(0, 0, 600, 200);
    // miniCam.zoom = 0.1;

    var landscape = this.add.graphics();

    // landscape.lineStyle(2, 0x00ff00, 1);
    landscape.fillStyle(0x00ff00, 1);

    landscape.beginPath();

    //  Draw a random 'landscape'

    var maxY = 600;
    var minY = 350;

    var x = 0;
    var y = maxY;
    var range = 0;

    var up = true;

    landscape.moveTo(0, maxY);

    do
    {
        //  How large is this 'side' of the mountain?
        range = Phaser.Math.Between(20, 100);

        if (up)
        {
            y = Phaser.Math.Between(y, minY);
            up = false;
        }
        else
        {
            y = Phaser.Math.Between(y, maxY);
            up = true;
        }

        landscape.lineTo(x + range, y);

        x += range;

    } while (x < worldWidth - 100);

    landscape.lineTo(worldWidth, maxY);

    landscape.strokePath();
    // landscape.fillPath();

    landscape.closePath();
}

function update()
{
    this.cameras.main.scrollX++;
}
