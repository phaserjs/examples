class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('guide', 'assets/tests/dungeon-perspective.jpg');
        this.load.image('stone', 'assets/normal-maps/stones.png');
    }

    create ()
    {
        this.add.image(512, 384, 'guide');

        const plane = this.add.plane(400, 300, 'stone');

        //  768 / 2 = 384
        plane.setPerspective(1024, 768, 100);

        // plane.panX(-0.5);
        // plane.panZ(3);

        plane.modelPosition.z = -4;
        // plane.modelRotation.y = 0.9740152595401139;
        // plane.viewPosition.x = 0.5071007593120702;
        // plane.viewPosition.y = 0.1707169930611639;
        // plane.viewPosition.z = -2.3400234219701788;

        // plane.modelScale.x = 2.2;
        plane.modelScale.y = 2;

        window.plane = plane;

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
                // plane.modelRotation.x += pointer.velocity.y * (rotateRate / 600);
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



        // this.addWall(-0.75, 3, 1.2);
        // window.plane = this.addWall(-0.75, 4, 1.2);
        // this.addWall(0.75, 3, -1.2);
    }

    addWall (x, z, rotateY)
    {
        const plane = this.add.plane(400, 300, 'stone');

        plane.panX(x);
        plane.panZ(z);
        plane.modelRotation.y = rotateY;

        return plane;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
