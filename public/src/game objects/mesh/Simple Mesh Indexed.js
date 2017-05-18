var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};
var image0;
var image1;
var image2;
var mesh0;
var mesh1;
var mesh2;
var time = 0;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('image0', 'assets/pics/1984-nocooper-space.png');
    this.load.image('image1', 'assets/pics/acryl-bladerunner.png');
    this.load.image('image2', 'assets/pics/acryl-bobablast.png');
}

function create ()
{
    image0 = this.add.image(800, 600, 'image0');
    image1 = this.add.image(800, 600, 'image1');
    image2 = this.add.image(800, 600, 'image2');
    image0.setOrigin(1, 1);
    image1.setOrigin(2, 1);
    image2.setOrigin(3, 1);
    
    mesh0 = this.make.mesh({
        key: 'image0',
        x: 400,
        y: 250,
        vertices: [
        /*  X   |   Y  */
        /* ----------- */
            -150, -150,
            -300, 150,
            300, 150,
            150, -150
        ],
        uv: [
        /*  U   |   V  */
        /* ----------- */
            0,      0,
            0,      1,
            1,      1,
            1,      0
        ],
        indices: [0, 1, 2, 0, 2, 3]
    });

    mesh1 = this.make.mesh({
        key: 'image1',
        x: 80,
        y: 250,
        vertices: [
        /*  X   |   Y  */
        /* ----------- */
            -150, -150,
            -350, 150,
            -5, 150,
            150, -150
        ],
        uv: [
        /*  U   |   V  */
        /* ----------- */
            0,      0,
            0,      1,
            1,      1,
            1,      0
        ],
        indices: [0, 1, 2, 0, 2, 3]
    });

    mesh2 = this.make.mesh({
        key: 'image2',
        x: 720,
        y: 250,
        vertices: [
        /*  X   |   Y  */
        /* ----------- */
            -150, -150,
            5, 150,
            350, 150,
            150, -150
        ],
        uv: [
        /*  U   |   V  */
        /* ----------- */
            0,      0,
            0,      1,
            1,      1,
            1,      0
        ],
        indices: [0, 1, 2, 0, 2, 3]
    });

}

function update ()
{   
    var factorX = 20 * 0.1;
    var factorY = 5 * 0.1;

    mesh0.vertices[2] += Math.cos(time) * factorX;
    mesh0.vertices[3] += Math.sin(time) * factorY;
    mesh0.vertices[4] += Math.cos(time) * factorX;
    mesh0.vertices[5] += Math.sin(time) * factorY;

    mesh1.vertices[2] += Math.cos(time) * factorX;
    mesh1.vertices[3] += Math.sin(time) * factorY;
    mesh1.vertices[4] += Math.cos(time) * factorX;
    mesh1.vertices[5] += Math.sin(time) * factorY;

    mesh2.vertices[2] += Math.cos(time) * factorX;
    mesh2.vertices[3] += Math.sin(time) * factorY;
    mesh2.vertices[4] += Math.cos(time) * factorX;
    mesh2.vertices[5] += Math.sin(time) * factorY;

    image0.x -= Math.cos(time) * factorX;
    image1.x -= Math.cos(time) * factorX;
    image2.x -= Math.cos(time) * factorX;

    time += 0.01;
}
