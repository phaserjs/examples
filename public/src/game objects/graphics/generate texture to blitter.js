class Example extends Phaser.Scene
{
    iter = 0;
    numbers = [];
    digits;
    frame = 'veg01';
    idx = 1;
    gravity = 0.5;
    bobs = [];
    blitter;
    add = false;
    scene = null;

    preload ()
    {

        this.load.atlas('atlas', 'assets/tests/fruit/veg.png', 'assets/tests/fruit/veg.json');

    }

    create ()
    {

        const starGraphics = this.make.graphics({x: 0, y: 0, add: false});
        const scale = 1;
        this.drawStar(starGraphics, 25, 25, 5, 25, 12, 0xFFFF00, 0xFF0000);
        starGraphics.generateTexture('starGraphics', 50, 50);

        this.scene = this;

        this.numbers.push(this.add.image(30 + 0 * 48, 720, 'atlas', '0'));
        this.numbers.push(this.add.image(30 + 1 * 48, 720, 'atlas', '0'));
        this.numbers.push(this.add.image(30 + 2 * 48, 720, 'atlas', '0'));
        this.numbers.push(this.add.image(30 + 3 * 48, 720, 'atlas', '0'));
        this.numbers.push(this.add.image(30 + 4 * 48, 720, 'atlas', '0'));
        this.numbers.push(this.add.image(30 + 5 * 48, 720, 'atlas', '0'));
        this.numbers.push(this.add.image(30 + 6 * 48, 720, 'atlas', '0'));

        this.blitter = this.add.blitter(0, 0, 'starGraphics');

        for (let i = 0; i < 100; ++i)
        {
            this.launch();
        }

        this.updateDigits();

    }

    update ()
    {

        if (this.add)
        {
            for (let i = 0; i < 250; ++i)
            {
                this.launch();

                if (this.blitter.children.length === 2000)
                {
                    //  Create a new blitter object, as they can only hold 10k bobs each
                    this.blitter = this.add.blitter(0, 0, 'starGraphics');
                }
            }

            this.updateDigits();
        }

        for (let index = 0, length = this.bobs.length; index < length; ++index)
        {
            const bob = this.bobs[index];
            bob.data.vy += this.gravity;

            bob.y += bob.data.vy;
            bob.x += bob.data.vx;

            if (bob.x > 1024)
            {
                bob.x = 1024;
                bob.data.vx *= -bob.data.bounce;
            }
            else if (bob.x < 0)
            {
                bob.x = 0;
                bob.data.vx *= -bob.data.bounce;
            }

            if (bob.y > 650)
            {
                bob.y = 650;
                bob.data.vy *= -bob.data.bounce;
            }
        }
    }

    launch ()
    {

        this.idx++;

        if (this.idx === 38)
        {
            this.idx = 1;
        }

        const bob = this.blitter.create(0, 0);

        bob.data.vx = Math.random() * 10;
        bob.data.vy = Math.random() * 10;
        bob.data.bounce = 0.8 + (Math.random() * 0.3);

        this.bobs.push(bob);

    }

    updateDigits ()
    {
        const len = Phaser.Utils.String.Pad(this.bobs.length.toString(), 7, '0', 1);

        this.numbers[0].frame = this.scene.textures.getFrame('atlas', len[0]);
        this.numbers[1].frame = this.scene.textures.getFrame('atlas', len[1]);
        this.numbers[2].frame = this.scene.textures.getFrame('atlas', len[2]);
        this.numbers[3].frame = this.scene.textures.getFrame('atlas', len[3]);
        this.numbers[4].frame = this.scene.textures.getFrame('atlas', len[4]);
        this.numbers[5].frame = this.scene.textures.getFrame('atlas', len[5]);
        this.numbers[6].frame = this.scene.textures.getFrame('atlas', len[6]);
    }

    drawStar (graphics, cx, cy, spikes, outerRadius, innerRadius, color, lineColor)
    {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;
        graphics.lineStyle(2, lineColor, 1.0);
        graphics.fillStyle(color, 1.0);
        graphics.beginPath();
        graphics.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++)
        {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            graphics.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            graphics.lineTo(x, y);
            rot += step;
        }
        graphics.lineTo(cx, cy - outerRadius);
        graphics.closePath();
        graphics.fillPath();
        graphics.strokePath();
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);

window.onmousedown = () =>
{
    this.add = true;
};

window.onmouseup = () =>
{
    this.add = false;
};
