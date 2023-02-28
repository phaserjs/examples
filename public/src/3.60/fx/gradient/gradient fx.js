class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('touhou', 'assets/pics/touhou1.png');
    }

    create ()
    {
        const bg = this.add.image(400, 300, '__WHITE');

        bg.setDisplaySize(800, 600);

        const gradient = bg.preFX.addGradient();

        gradient.size = 16;
        gradient.color1 = 0x00ff00;
        gradient.color2 = 0x0000ff;

        const sprite = this.add.image(400, 300, 'touhou');

        sprite.preFX.addPixelate();
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
