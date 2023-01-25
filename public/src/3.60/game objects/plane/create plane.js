class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient13.png');
        this.load.image('test1', 'assets/sprites/128x128-v2.png');
        this.load.image('test2', 'assets/sprites/poo.png');
        this.load.image('test3', 'assets/sprites/sonic_havok_sanity.png');
        this.load.image('test4', 'assets/sprites/p2.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'bg').setFlip(false, true);

        const g = this.add.graphics();

        // const plane = this.add.plane(400, 300);

        // const plane = this.add.plane(400, 300, 'test3');

        const plane = this.add.plane(400, 300).createCheckerboard();

        const marker = this.add.image(400+200, 300, 'test3');

        const b = marker.getBounds();

        g.lineStyle(1, 0x00ff00);
        g.lineBetween(0, b.top, 800, b.top);
        g.lineBetween(0, b.bottom, 800, b.bottom);

        // this.add.image(700, 300, 'plane');

        window.plane = plane;
        this.plane = plane;

        const rotateRate = 1;
        const panRate = 1;
        const zoomRate = 4;

        this.input.on('pointermove', pointer => {

            if (!pointer.isDown)
            {
                return;
            }

            if (!pointer.event.shiftKey)
            {
                plane.modelRotation.y += pointer.velocity.x * (rotateRate / 800);
                plane.modelRotation.x += pointer.velocity.y * (rotateRate / 600);
            }
            else
            {
                plane.panX(pointer.velocity.x * (panRate / 800));
                plane.panY(pointer.velocity.y * (panRate / 600));
            }

        });

        this.input.on('wheel', (pointer, over, deltaX, deltaY, deltaZ) => {

            plane.panZ(deltaY * (zoomRate / 600));

        });
    }

    update ()
    {
        // this.plane.uvScroll(0.01, 0.01);
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
