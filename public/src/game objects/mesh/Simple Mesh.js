var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var mesh;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create ()
{
    mesh = this.make.mesh({
        key: 'einstein',
        x: 400,
        y: 300,
        vertices: [
        /*  X   |   Y  */
        /* ----------- */
            0,      0, 
            0,      100,
            100,    100,
            0,      0,
            100,    0,
            100,    100
        ],
        uv: [
        /*  U   |   V  */
        /* ----------- */
            0,      0,
            0,      1,
            1,      1,
            0,      0,
            1,      0,
            1,      1
        ]
    });
}
