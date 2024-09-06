var scene = null;
var add = false;
var blitter;
var idx = 1;
var frame = 'veg01';
var numbers = [];

var text;
var tween;

class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload()
    {
        this.load.atlas('atlas', 'assets/tests/fruit/veg.png', 'assets/tests/fruit/veg.json');
    }

    launch(i)
    {
        idx++;

        if (idx === 38)
        {
            idx = 1;
        }

        if (idx < 10)
        {
            frame = 'veg0' + idx.toString();
        }
        else
        {
            frame = 'veg' + idx.toString();
        }

        var bob = blitter.create(i * 32, 0, frame);

        scene.tweens.add({
            targets: bob,
            y: 650,
            delay: Math.random() * 2,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true
        });
    }

    create()
    {
        scene = this;

        numbers.push(this.add.image(0 * 48, 720, 'atlas', '0').setOrigin(0));
        numbers.push(this.add.image(1 * 48, 720, 'atlas', '0').setOrigin(0));
        numbers.push(this.add.image(2 * 48, 720, 'atlas', '0').setOrigin(0));
        numbers.push(this.add.image(3 * 48, 720, 'atlas', '0').setOrigin(0));
        numbers.push(this.add.image(4 * 48, 720, 'atlas', '0').setOrigin(0));
        numbers.push(this.add.image(5 * 48, 720, 'atlas', '0').setOrigin(0));

        blitter = this.add.blitter(0, 0, 'atlas');

        this.updateDigits();

        this.input.on('pointerdown', function ()
        {

            add = true;

        });

        this.input.on('pointerup', function ()
        {

            add = false;

        });
    }

    update()
    {
        if (add)
        {
            for (var i = 0; i < 256; ++i)
            {
                this.launch(i);
            }

            this.updateDigits();
        }
    }

    updateDigits()
    {
        var len = Phaser.Utils.String.Pad(blitter.children.length.toString(), 6, '0', 1);

        numbers[0].setFrame(len[0]);
        numbers[1].setFrame(len[1]);
        numbers[2].setFrame(len[2]);
        numbers[3].setFrame(len[3]);
        numbers[4].setFrame(len[4]);
        numbers[5].setFrame(len[5]);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);