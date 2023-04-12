class Example extends Phaser.Scene
{
    numbers = [];
    frame = 'veg01';
    idx = 1;
    blitter;

    preload ()
    {
        this.load.atlas('atlas', 'assets/tests/fruit/veg.png', 'assets/tests/fruit/veg.json');
    }

    create ()
    {
        this.numbers.push(this.add.image(32 + 0 * 50, 742, 'atlas', '0'));
        this.numbers.push(this.add.image(32 + 1 * 50, 742, 'atlas', '0'));
        this.numbers.push(this.add.image(32 + 2 * 50, 742, 'atlas', '0'));
        this.numbers.push(this.add.image(32 + 3 * 50, 742, 'atlas', '0'));
        this.numbers.push(this.add.image(32 + 4 * 50, 742, 'atlas', '0'));
        this.numbers.push(this.add.image(32 + 5 * 50, 742, 'atlas', '0'));

        this.blitter = this.add.blitter(0, 0, 'atlas');

        for (let i = 0; i < 32; i++)
        {
            this.launch(i);
        }
        
        this.updateDigits();
    }

    update ()
    {
        if (this.input.activePointer.isDown)
        {
            for (let i = 0; i < 32; i++)
            {
                this.launch(i);
            }

            this.updateDigits();
        }
    }

    launch (i)
    {
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

        const bob = this.blitter.create(i * 32, 0, this.frame);

        this.tweens.add({
            targets: bob,
            duration: 2000,
            y: 650,
            delay: Math.random() * 2,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true
        });
    }

    updateDigits ()
    {
        const len = Phaser.Utils.String.Pad(this.blitter.children.list.length.toString(), 6, '0', 1);

        this.numbers[0].setFrame(len[0]);
        this.numbers[1].setFrame(len[1]);
        this.numbers[2].setFrame(len[2]);
        this.numbers[3].setFrame(len[3]);
        this.numbers[4].setFrame(len[4]);
        this.numbers[5].setFrame(len[5]);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
