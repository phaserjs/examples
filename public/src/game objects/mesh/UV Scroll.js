var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};
var mesh0;
var time = 0;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('image0', 'assets/pics/checker.png');
}

function create ()
{
    mesh0 = this.make.mesh({
        key: 'image0',
        x: 0,
        y: 0,
        vertices: [
        /*  X   |   Y  */
        /* ----------- */
            0, 0,
            0, 600,
            800, 600,
            800, 0
        ],
        uv: [
        /*  U   |   V  */
        /* ----------- */
            0,      0,
            0,      1,
            1,      1,
            1,      0
        ],
        indices: [0, 1, 2, 0, 2, 3],
        colors: [0x000000, 0xFFFFFF, 0xFFFFFF, 0x000000]
    });
}

function update ()
{   
    var factorX = 0.01;
    var factorY = 0.01;

    mesh0.uv[1] += Math.sin(time) * factorX;
    mesh0.uv[7] += Math.sin(time) * factorX;
    mesh0.uv[2] += Math.cos(time) * factorX;
    mesh0.uv[3] += Math.sin(time) * factorY;
    mesh0.uv[4] += Math.cos(time) * factorX;
    mesh0.uv[5] += Math.sin(time) * factorY;

    time += 0.01;
}
