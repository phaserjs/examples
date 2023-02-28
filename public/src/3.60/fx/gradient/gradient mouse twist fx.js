class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bubble', 'assets/pics/bubble-off.png');
    }

    create ()
    {
        const bg = this.add.image(400, 300, '__WHITE');

        this.add.image(0, 600, 'bubble').setOrigin(0, 1);

        this.add.text(780, 565, 'Click and Drag    [R] to randomize colors').setOrigin(1, 0);

        bg.setDisplaySize(800, 600);

        const gradient = bg.preFX.addGradient(0xec008c, 0x15da30);

        this.input.on('pointerdown', pointer => {

            gradient.fromX = pointer.worldX / 800;
            gradient.fromY = pointer.worldY / 600;

        });

        this.input.on('pointermove', pointer => {

            if (pointer.isDown)
            {
                gradient.toX = pointer.worldX / 800;
                gradient.toY = pointer.worldY / 600;
            }

        });

        const colors = Phaser.Display.Color.HSVColorWheel();

        this.input.keyboard.on('keydown-R', () => {

            const color1 = Phaser.Utils.Array.GetRandom(colors);
            const color2 = Phaser.Utils.Array.GetRandom(colors);

            gradient.color1 = color1.color;
            gradient.color2 = color2.color;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
