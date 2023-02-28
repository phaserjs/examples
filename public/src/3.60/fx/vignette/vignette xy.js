class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('pic', 'assets/pics/anime-arcade-ai.jpg');
    }

    create ()
    {
        const sprite = this.add.image(400, 300, 'pic');

        this.add.text(10, 10, 'Mouse to move vignette. Mouse wheel to adjust radius');

        const fx = sprite.preFX.addVignette();

        fx.radius = 0.3;
        fx.strength = 0.425;

        sprite.setInteractive();

        sprite.on('pointermove', (pointer, x, y) => {

            fx.x = x / 512;
            fx.y = y / 512;

        });

        sprite.on('wheel', (pointer, x, y) => {

            fx.radius += y * -0.001;

            fx.radius = Phaser.Math.Clamp(fx.radius, 0, 1);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
