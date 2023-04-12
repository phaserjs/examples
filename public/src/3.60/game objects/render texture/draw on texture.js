class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brush', 'assets/sprites/brush3.png');
    }

    create ()
    {
        const rt = this.add.renderTexture(64, 64, 128, 128).setInteractive().setDepth(1001);

        this.add.graphics().fillStyle(0x000000).lineStyle(1, 0xffffff).fillRect(0, 0, 128, 128).strokeRect(0, 0, 128, 128).setDepth(1000);

        this.add.text(136, 8, '<- draw in here\n   press SPACE to clear');

        const hsv = Phaser.Display.Color.HSVColorWheel();

        let i = 0;

        this.input.keyboard.on('keydown_SPACE', () =>
        {

            rt.clear();

        });

        rt.on('pointerdown', function (pointer)
        {

            this.draw('brush', pointer.x - 8, pointer.y - 8, 1, hsv[i].color);

        });

        rt.on('pointermove', function (pointer)
        {

            if (pointer.isDown)
            {
                this.draw('brush', pointer.x - 8, pointer.y - 8, 1, hsv[i].color);

                i = Phaser.Math.Wrap(i + 1, 0, 360);
            }

        });

        const tt = rt.saveTexture('doodle');

        const blocks = this.add.group({ key: 'doodle', repeat: 48, setScale: { x: 0.2, y: 0.1 } });

        Phaser.Actions.GridAlign(blocks.getChildren(), {
            width: 8,
            height: 6,
            cellWidth: 128,
            cellHeight: 128
        });

        blocks.children.iterate(function (child)
        {
            this.tweens.add({
                targets: child,
                scaleX: 1,
                scaleY: 1,
                ease: 'Sine.easeInOut',
                duration: 400,
                delay: i * 50,
                repeat: -1,
                yoyo: true
            });

            i++;

            if (i % 14 === 0)
            {
                i = 0;
            }

        }, this);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 768,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
