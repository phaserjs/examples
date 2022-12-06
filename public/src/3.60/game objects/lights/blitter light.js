class Example extends Phaser.Scene
{
    iter = 0;
    numbers = [];
    frame = 'veg01';
    idx = 1;
    gravity = 0.5;
    blitter;

    preload ()
    {
        this.load.image('bg', [ 'assets/textures/gold.png', 'assets/textures/gold-n.png' ]);

        this.load.atlas({
            key: 'atlas',
            textureURL: 'assets/tests/fruit/veg2.png',
            normalMap: 'assets/tests/fruit/veg2-n.png',
            atlasURL: 'assets/tests/fruit/veg2.json'
        });
    }

    create ()
    {
        this.lights.enable();
        this.lights.setAmbientColor(0x808080);

        this.add.sprite(400, 300, 'bg').setPipeline('Light2D').setAlpha(0.5);

        this.blitter = this.add.blitter(0, 0, 'atlas').setPipeline('Light2D');

        for (let i = 0; i < 32; i++)
        {
            this.launch();
        }

        const light = this.lights.addLight(400, 300, 400);

        this.input.on('pointermove', pointer =>
        {

            light.x = pointer.x;
            light.y = pointer.y;

        });
    }

    update ()
    {
        if (this.input.activePointer.isDown)
        {
            for (let i = 0; i < 8; i++)
            {
                this.launch();
            }
        }

        for (let index = 0, length = this.blitter.children.list.length; index < length; ++index)
        {
            const bob = this.blitter.children.list[index];

            bob.data.vy += this.gravity;

            bob.y += bob.data.vy;
            bob.x += bob.data.vx;

            if (bob.x > 780)
            {
                bob.x = 780;
                bob.data.vx *= -bob.data.bounce;
            }
            else if (bob.x < 0)
            {
                bob.x = 0;
                bob.data.vx *= -bob.data.bounce;
            }

            if (bob.y > 568)
            {
                bob.y = 568;
                bob.data.vy *= -bob.data.bounce;
            }
        }
    }

    launch ()
    {
        //  Max of 1000 lit objects
        if (this.blitter.children.list.length >= 1000)
        {
            return;
        }

        this.idx++;

        if (this.idx === 38)
        {
            this.idx = 1;
        }

        if (this.idx < 10)
        {
            this.frame = `veg0${this.idx.toString()}`;
        }
        else
        {
            this.frame = `veg${this.idx.toString()}`;
        }

        const bob = this.blitter.create(0, 0, this.frame);

        bob.data.vx = Math.random() * 6;
        bob.data.vy = Math.random() * 2;
        bob.data.bounce = 1;
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
