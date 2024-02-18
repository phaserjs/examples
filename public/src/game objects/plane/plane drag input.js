class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient13.png');
        this.load.image('pic', 'assets/pics/goblin.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const plane = this.add.plane(400, 300, 'pic');
        plane.setViewHeight(512);
        plane.setInteractive({ useHandCursor: true, draggable: true });
        plane.modelRotation = { x: 1, y: 1, z: 1 };

        plane.on('drag', (pointer, dragX, dragY) => plane.setPosition(dragX, dragY));
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a440a',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
