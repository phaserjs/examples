class Example2 extends Phaser.Scene
{
    constructor ()
    {
        super('example2');
    }

    create ()
    {
        this.add.text(10, 10, 'Layer 2', { font: '16px Courier', fill: '#00ff00' });

        this.input.once('pointerdown', () => {

            this.scene.start('example1');

        });
    }
}

class Example extends Phaser.Scene
{
    constructor ()
    {
        super('example1');
    }

    preload ()
    {
        this.load.image('spaceman', 'assets/sprites/exocet_spaceman.png');
    }

    create ()
    {
        this.add.text(10, 10, 'Scene 1', { font: '16px Courier', fill: '#00ff00' });

        this.add.sprite(400, 300, 'spaceman');

        const bob = this.add.container();

        bob.add(this.add.sprite(500, 400, 'spaceman'));
        bob.add(this.add.sprite(550, 500, 'spaceman'));

        const spaceman = this.add.sprite(150, 300, 'spaceman');

        const layer = this.add.layer();

        layer.add([ spaceman ]);

        this.input.once('pointerdown', () => {

            this.scene.start('example2');

        });

        console.log(this.children);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    parent: 'phaser-example',
    scene: [ Example, Example2 ]
};

const game = new Phaser.Game(config);
