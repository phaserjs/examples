class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('touhou', 'assets/pics/touhou2.png');
    }

    create ()
    {
        const bg = this.add.image(400, 300, '__WHITE');

        bg.setDisplaySize(800, 600);

        const gradient = bg.preFX.addGradient(0x0000ff, 0x00ff00, 0);

        gradient.size = 10;

        this.add.text(10, 10, '[R] to randomize colors\n[S] to randomize chunks').setResolution(window.devicePixelRatio);

        const chunks = this.add.text(790, 10, 'FX.size: 10').setResolution(window.devicePixelRatio).setOrigin(1, 0);

        const colors = Phaser.Display.Color.HSVColorWheel();

        this.input.keyboard.on('keydown-R', () => {

            const index1 = Phaser.Math.Between(0, 360);
            const index2 = Phaser.Math.Wrap(index1 + 180, 0, 360);

            gradient.color1 = colors[index1].color;
            gradient.color2 = colors[index2].color;

        });

        this.input.keyboard.on('keydown-S', () => {

            gradient.size = Phaser.Math.Between(2, 22);

            chunks.setText(`FX.size: ${gradient.size}`);

        });

        this.add.image(800, 600, 'touhou').setOrigin(1, 1);
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
