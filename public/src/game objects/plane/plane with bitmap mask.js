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
        this.load.image('splat', 'assets/pics/splat1.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg').setFlip(false, true);

        const splat = this.make.image({ x: 400, y: 300, key: 'splat', add: false });

        const mask = new Phaser.Display.Masks.BitmapMask(this, splat);

        const plane = this.add.plane(400, 300, 'pic');

        plane.setMask(mask);

        this.add.text(10, 10, 'Click and drag to rotate the plane + wheel to zoom', { font: '16px Courier', fill: '#ffffff' });

        plane.setViewHeight(512);

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
