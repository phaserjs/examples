class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('arrow', 'assets/sprites/arrow.png');
    }

    create ()
    {
        this.add.text(10, 10, 'Click to arrows to translate the array matrix', { font: '16px Courier', fill: '#ffffff' });

        const left = this.add.image(96, 384, 'arrow').setAngle(-180).setInteractive();
        const right = this.add.image(1024 - 96, 384, 'arrow').setInteractive();
        const up = this.add.image(512, 96, 'arrow').setAngle(-90).setInteractive();
        const down = this.add.image(512, 768 - 96, 'arrow').setAngle(90).setInteractive();

        const text = this.add.text(260, 200, '', { font: '32px Courier', fill: '#00ff00' });

        let matrix = [
            [ 1, 1, 1, 1, 1, 1, 1 ],
            [ 4, 5, 5, 5, 5, 5, 2 ],
            [ 4, 8, 8, 8, 8, 6, 2 ],
            [ 4, 8, 9, 0, 9, 6, 2 ],
            [ 4, 8, 9, 9, 9, 6, 2 ],
            [ 4, 7, 7, 7, 7, 7, 2 ],
            [ 3, 3, 3, 3, 3, 3, 3 ]
        ];

        text.setText(Phaser.Utils.Array.Matrix.MatrixToString(matrix));

        left.on('pointerup', () =>
        {

            matrix = Phaser.Utils.Array.Matrix.Translate(matrix, -1, 0);

            text.setText(Phaser.Utils.Array.Matrix.MatrixToString(matrix));

        });

        right.on('pointerup', () =>
        {

            matrix = Phaser.Utils.Array.Matrix.Translate(matrix, 1, 0);

            text.setText(Phaser.Utils.Array.Matrix.MatrixToString(matrix));

        });

        up.on('pointerup', () =>
        {

            matrix = Phaser.Utils.Array.Matrix.Translate(matrix, 0, -1);

            text.setText(Phaser.Utils.Array.Matrix.MatrixToString(matrix));

        });

        down.on('pointerup', () =>
        {

            matrix = Phaser.Utils.Array.Matrix.Translate(matrix, 0, 1);

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
