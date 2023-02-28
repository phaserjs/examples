class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('egg', 'assets/sprites/dragonegg.png');
    }

    create ()
    {
        this.add.sprite(200, 300, 'egg');

        const egg = this.add.sprite(600, 300, 'egg');

        const fx = egg.preFX.addColorMatrix();

        this.add.text(10, 10, 'Click to change ColorMatrix function');

        const text = this.add.text(400, 550, 'Default').setOrigin(0.5, 0.5);

        let effect = 0;

        this.input.on('pointerdown', () => {

            effect++;

            if (effect === 18)
            {
                effect = 0;
            }

            if (effect === 0)
            {
                text.setText('Default');
                fx.reset();
            }
            else if (effect === 1)
            {
                text.setText('brightness(1.2)');
                fx.brightness(1.2);
            }
            else if (effect === 2)
            {
                text.setText('saturate(2.5)');
                fx.saturate(2.5);
            }
            else if (effect === 3)
            {
                text.setText('hue(40)');
                fx.hue(40);
            }
            else if (effect === 4)
            {
                text.setText('grayscale(1)');
                fx.grayscale(1);
            }
            else if (effect === 5)
            {
                text.setText('night()');
                fx.night();
            }
            else if (effect === 6)
            {
                text.setText('contrast(1)');
                fx.contrast(1);
            }
            else if (effect === 7)
            {
                text.setText('negative()');
                fx.negative();
            }
            else if (effect === 8)
            {
                text.setText('blackWhite()');
                fx.blackWhite();
            }
            else if (effect === 9)
            {
                text.setText('lsd()');
                fx.lsd();
            }
            else if (effect === 10)
            {
                text.setText('desaturateLuminance()');
                fx.desaturateLuminance();
            }
            else if (effect === 11)
            {
                text.setText('sepia()');
                fx.sepia();
            }
            else if (effect === 12)
            {
                text.setText('brown()');
                fx.brown();
            }
            else if (effect === 13)
            {
                text.setText('vintagePinhole()');
                fx.vintagePinhole();
            }
            else if (effect === 14)
            {
                text.setText('kodachrome()');
                fx.kodachrome();
            }
            else if (effect === 15)
            {
                text.setText('technicolor()');
                fx.technicolor();
            }
            else if (effect === 16)
            {
                text.setText('polaroid()');
                fx.polaroid();
            }
            else if (effect === 17)
            {
                text.setText('shiftToBGR()');
                fx.shiftToBGR();
            }

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d66',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
