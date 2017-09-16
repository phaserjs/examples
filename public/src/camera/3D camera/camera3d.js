var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var graphics;
var camera;
var points;
var balls;
var tmp;
var transform;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ball', 'assets/sprites/aqua_ball.png');
}

function create ()
{
    graphics = this.add.graphics();

    //setup a camera with 85 degree FOV
    camera = new Phaser.Cameras.PerspectiveCamera(80 * Math.PI / 180, 800, 600);

    //move the camera back and update its matrices
    // camera.position.x = 100;
    // camera.position.y = 0;
    camera.z = 600;
    // camera.update();

    //random spherical particles
    createRandomParticles.call(this, 100, 400);

    //a vector which we will re-use
    tmp = new Phaser.Math.Vector4();

    //creates a new identity matrix
    transform = new Phaser.Math.Matrix4();
}

function update ()
{
    // graphics.clear();
    // graphics.fillStyle(0xffffff, 1);

    for (var i = 0; i < points.length; i++)
    {
        var p = points[i];

        //rotate the transformation matrix around the Y axis a little..
        transform.rotateX(-0.00001);
        transform.rotateY(-0.00001);

        //now let's transform the 3D position by our transformation matrix
        //this will give us a new position that has been slightly rotated by
        //our matrix.

        // tmp.x = p.x;
        // tmp.y = p.y;
        // tmp.z = p.z;

        // tmp.transformMat4(transform);

        tmp.set(p).transformMat4(transform);

        //project the 3D point into 2D space
        camera.project(tmp, tmp);

        //draw the particle with a fixed size
        var size = 16;

        balls[i].x = tmp.x - size / 2;
        balls[i].y = tmp.y - size / 2;
        balls[i].depth = tmp.z;

        //  Let's assume the distance range is -100 to 100
        // balls[i].setScale(Phaser.Math.Percent(tmp.z, -100, 100));

        // graphics.fillRect(tmp.x-size/2, tmp.y-size/2, size, size);
    }
}

//a utility to create particles randomly in a spherical area
// r - radius
// n - number of points
function createRandomParticles (r, n)
{
    balls = [];
    points = [];

    for (var i = 0; i < n; i++)
    {
        var v = new Phaser.Math.Vector3().random(r);

        points.push(v);

        var image = this.add.image(v.x, v.y, 'ball').setZ(v.z);

        balls.push(image);
    }
}
