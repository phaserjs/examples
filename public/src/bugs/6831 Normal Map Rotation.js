class Example extends Phaser.Scene
{
    preload ()
    {
        for (let i = 0; i < 8; i++)
        {
            this.load.image('skull' + i, [ 'assets/tests/lights/skull.png', 'assets/tests/lights/skull-n.png' ]);
        }
    }

    create ()
    {
        this.centreX = 400;
        this.centreY = 300;
        this.centreRotation = 0;

        this.skulls = [];
        this.turretMountPoints = {
            1: { x: -100, y: -200 },
            2: { x: 100, y: -200 },
            3: { x: -100, y: -100 },
            4: { x: 100, y: -100 },
            5: { x: -100, y: 50 },
            6: { x: 100, y: 50 },
            7: { x: -100, y: 0 },
            8: { x: 100, y: 0 },
        };

        for (let i = 0; i < 8; i++)
        {
            // const randomX = Phaser.Math.Between(1, 9) * 0.1;
            // const randomY = Phaser.Math.Between(2, 8) * 0.1;
            // const randomAngle = Phaser.Math.Between(0, 180);
            const texture = 'skull' + i;
            const skull = this.add.sprite(this.centreX, this.centreY, 'skull0')
                .setPipeline('Light2D');

            // console.log(skull.getPipelineName());
            this.skulls.push(skull);
        }

        // var lightManager = this.sys.lights;

        this.lights.enable();
        this.lights.setAmbientColor(0x808080);

        // const spotlight = this.lights.addLight(400, 300, 280).setIntensity(3);
        const spotlight = this.lights.addLight(500, -500, 10000, "0xffffff", 3);

        // this.input.on('pointermove', pointer =>
        // {

        //     spotlight.x = pointer.x;
        //     spotlight.y = pointer.y;

        // });
    }

    update ()
    {
        if (this.skulls.length === 0) return;

        for (let index = 0; index < this.skulls.length; index++)
        {
            const offset = this.turretMountPoints[ index + 1 ];
            const skull = this.skulls[ index ];

            const rotatedX =
                this.centreX +
                offset.x * Math.cos(this.centreRotation) -
                offset.y * Math.sin(this.centreRotation);
            const rotatedY =
                this.centreY +
                offset.x * Math.sin(this.centreRotation) +
                offset.y * Math.cos(this.centreRotation);


            const pointer = this.input.mousePointer;
            const dx = pointer.worldX - skull.x;
            const dy = pointer.worldY - skull.y;

            const angle = Math.atan2(dy, dx); // ANGLE IN RADS

            // Finally we set the rotation of the turret to point at mouse
            skull.setPosition(rotatedX, rotatedY);
            skull.setRotation(angle + Math.PI / 2);
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
