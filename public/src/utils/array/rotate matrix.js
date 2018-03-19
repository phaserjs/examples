var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var matrix = [
        [ 1, 1, 1, 1, 1, 1 ],
        [ 2, 0, 0, 0, 0, 4 ],
        [ 2, 0, 1, 2, 0, 4 ],
        [ 2, 0, 3, 4, 0, 4 ],
        [ 2, 0, 0, 0, 0, 4 ],
        [ 3, 3, 3, 3, 3, 3 ]
    ];

    console.log(Phaser.Utils.Array.Matrix.MatrixToString(matrix));

    matrix = Phaser.Utils.Array.Matrix.RotateRight(matrix);

    console.log('\n');
    console.log(Phaser.Utils.Array.Matrix.MatrixToString(matrix));
}
