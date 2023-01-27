class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/space4.png');
        this.load.image('texture', 'assets/tests/pipeline/pudding.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        //  For NPOT textures (like our pudding texture) you cannot uvScale
        //  them, because WebGL1 doesn't support this. So instead we can
        //  create a Plane that is 8x8 cells in size and tile the texture
        //  across each cell (the last 3 parameters)
        const plane = this.add.plane(400, 300, 'texture', null, 8, 8, true);

        plane.setViewHeight(512);

        plane.modelRotation.x = -0.59;
        plane.modelRotation.y = 0.707;
        plane.viewPosition.z = 2.209;

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
