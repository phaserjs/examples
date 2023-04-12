class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setPath('assets/input');
        this.load.image([ 'p', 'h', 'a', 's', 'e', 'r' ]);
    }

    create ()
    {
        this.input.addPointer(6);

        const p = this.add.image(0, 0, 'p').setInteractive();
        const h = this.add.image(0, 0, 'h').setInteractive();
        const a = this.add.image(0, 0, 'a').setInteractive();
        const s = this.add.image(0, 0, 's').setInteractive();
        const e = this.add.image(0, 0, 'e').setInteractive();
        const r = this.add.image(0, 0, 'r').setInteractive();

        Phaser.Actions.GridAlign([ p, h, a, s, e, r ], {
            width: 6,
            cellWidth: 132,
            cellHeight: 200,
            x: 68,
            y: 300
        });

        const text = this.add.text(10, 10, `${Phaser.VERSION} + v3`, { font: '16px Courier', fill: '#000000' });

        this.input.on('pointermove', function (pointer)
        {

            text.setText(this.input._over[pointer.id].length);

        }, this);

        this.input.on('gameobjectover', (pointer, gameObject) =>
        {

            gameObject.setTintFill(0x00ff00, 0x00ff00, 0xff0000, 0xff0000);

        });

        this.input.on('gameobjectout', (pointer, gameObject) =>
        {

            gameObject.clearTint();

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    scene: Example
};

const game = new Phaser.Game(config);
