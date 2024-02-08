class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/wtf.png');
        this.load.obj('skull', 'assets/obj/skull.obj');
        this.load.image('powerups', 'assets/obj/powerups.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const mesh = this.add.mesh(400, 300, 'powerups');

        mesh.addVerticesFromObj('skull', 0.1);

        mesh.panZ(7);
        mesh.modelRotation.y += 0.5;

        mesh.setInteractive({ draggable: true });

        mesh.on('drag', (pointer, dragX, dragY) => mesh.setPosition(dragX, dragY));
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000022',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
