class Example extends Phaser.Scene
{
    create ()
    {
        this.add.text(10, 10, 'Click to reverse the array matrix columns', { font: '16px Courier', fill: '#ffffff' });

        const text = this.add.text(200, 200, '', { font: '32px Courier', fill: '#00ff00' });

        let matrix = [
            [ 1, 1, 1, 1, 1, 1 ],
            [ 2, 0, 0, 0, 0, 4 ],
            [ 2, 0, 1, 2, 0, 4 ],
            [ 2, 0, 3, 4, 0, 4 ],
            [ 2, 0, 0, 0, 0, 4 ],
            [ 3, 3, 3, 3, 3, 3 ]
        ];

        text.setText(Phaser.Utils.Array.Matrix.MatrixToString(matrix));

        this.input.on('pointerup', () =>
        {

            matrix = Phaser.Utils.Array.Matrix.ReverseColumns(matrix);

            text.setText(Phaser.Utils.Array.Matrix.MatrixToString(matrix));

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
