class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient13.png');
        this.load.atlas('rocket', 'assets/animations/rocket.png', 'assets/animations/rocket.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');
        this.add.text(16, 16, 'Drag the Rocket').setFontSize(24).setShadow(1, 1);

        this.anims.create({ key: 'trail', frames: this.anims.generateFrameNames('rocket', { prefix: 'trail_', start: 0, end: 12, zeroPad: 2 }), repeat: -1 });

        const container = this.add.container(400, 300);

        //  A container must have a size in order to receive input
        container.setSize(120, 80);
        container.setInteractive({ draggable: true });

        const trail = this.add.sprite(-125, 0).play('trail');
        const rocket = this.add.sprite(0, 0, 'rocket', 'rocket');

        container.add([ trail, rocket ]);

        container.on('drag', (pointer, dragX, dragY) => container.setPosition(dragX, dragY));
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
