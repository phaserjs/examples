class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brick', [ 'assets/normal-maps/brick.jpg', 'assets/normal-maps/brick_n.png' ]);
        this.load.image('phaser', 'assets/sprites/phaser2.png');
    }

    create ()
    {
        const brick = this.add.sprite(0, 0, 'brick');
        brick.setOrigin(0, 0);
        brick.setPipeline('Light2D');

        this.light = this.lights.addLight(0, 0, 200).setScrollFactor(0).setIntensity(2);

        this.lights.enable().setAmbientColor(0x555555);

        this.input.on('pointermove', pointer =>
        {

            this.light.x = pointer.x;
            this.light.y = pointer.y;

        });

        this.input.on('pointerdown', pointer =>
        {

            if (this.lights.active)
            {
                this.lights.disable();
            }
            else
            {
                this.lights.enable();
            }

        });

        this.add.image(300, 400, 'phaser').setPipeline('Light2D');

        this.lights.addLight(0, 100, 100).setColor(0xff0000).setIntensity(3.0);
        this.lights.addLight(0, 200, 100).setColor(0x00ff00).setIntensity(3.0);
        this.lights.addLight(0, 300, 100).setColor(0x0000ff).setIntensity(3.0);
        this.lights.addLight(0, 400, 100).setColor(0xffff00).setIntensity(3.0);

        this.offsets = [ Math.random() + 1 - 2, Math.random() + 1 - 2, Math.random() + 1 - 2, Math.random() + 1 - 2 ];

        this.time = 0;
    }

    update ()
    {
        let index = 0;

        this.lights.lights.forEach(currLight =>
        {
            if (this.light !== currLight)
            {
                currLight.x = 400 + Math.sin(this.offsets[index]) * 1000;
                this.offsets[index] += 0.02;
                index += 1;
            }
        });

        this.cameras.main.scrollX = Math.sin(this.time) * 400;

        this.time += 0.01;
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
