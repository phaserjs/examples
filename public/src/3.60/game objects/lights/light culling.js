class Example extends Phaser.Scene
{
    cursors;
    text;
    land;

    preload ()
    {
        this.load.setPath('assets/normal-maps/');

        this.load.image('gem1');
        this.load.image('gem2');
        this.load.image('gem3');
        this.load.image('gem4');
        this.load.image('gem5');
        this.load.image('gem6');
        this.load.image('gem7');
        this.load.image('gem8');
        this.load.image('gem9');

        this.load.image('stones', [ 'stones.png', 'stones_n.png' ]);
    }

    create ()
    {
        this.cameras.main.removeBounds();

        this.land = this.add.tileSprite(400, 300, 800, 600, 'stones');

        this.land.setPipeline('Light2D');
        this.land.setScrollFactor(0, 0);
        this.land.tileScaleX = 0.5;
        this.land.tileScaleY = 0.5;

        this.lights.enable();
        this.lights.setAmbientColor(0x555555);

        const spotlight = this.lights.addLight(400, 300, 128).setIntensity(3);

        this.input.on('pointermove', pointer =>
        {

            spotlight.x = pointer.worldX;
            spotlight.y = pointer.worldY;

        });

        this.text = this.add.text(10, 10, '').setDepth(1).setScrollFactor(0, 0);

        this.cursors = this.input.keyboard.createCursorKeys();

        const circ = new Phaser.Geom.Circle(400, 300, 400);
        let points = Phaser.Geom.Circle.GetPoints(circ, 12);

        for (let i = 0; i < points.length; i++)
        {
            const x = points[i].x;
            const y = points[i].y;

            this.add.image(x, y, 'gem2');

            this.lights.addLight(x, y, 128, 0xff22ff, 6);
        }

        circ.setTo(400, 300, 700);
        points = Phaser.Geom.Circle.GetPoints(circ, 20);

        for (let i = 0; i < points.length; i++)
        {
            const x = points[i].x;
            const y = points[i].y;

            this.add.image(x, y, 'gem3');

            this.lights.addLight(x, y, 128, 0x22ffff, 6);
        }

        circ.setTo(400, 300, 1000);
        points = Phaser.Geom.Circle.GetPoints(circ, 26);

        for (let i = 0; i < points.length; i++)
        {
            const x = points[i].x;
            const y = points[i].y;

            this.add.image(x, y, 'gem4');

            this.lights.addLight(x, y, 128, 0xffff22, 6);
        }
    }

    update ()
    {
        this.text.setText([
            'Cursors to move',
            `Visible Lights: ${this.lights.visibleLights}`
        ]);

        const speed = 6;

        if (this.cursors.left.isDown)
        {
            this.cameras.main.scrollX -= speed;
            this.land.tilePositionX -= speed * 2;
        }
        else if (this.cursors.right.isDown)
        {
            this.cameras.main.scrollX += speed;
            this.land.tilePositionX += speed * 2;
        }

        if (this.cursors.up.isDown)
        {
            this.cameras.main.scrollY -= speed;
            this.land.tilePositionY -= speed * 2;
        }
        else if (this.cursors.down.isDown)
        {
            this.cameras.main.scrollY += speed;
            this.land.tilePositionY += speed * 2;
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    backgroundColor: '#000000',
    scene: Example
};

const game = new Phaser.Game(config);
