class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
        this.load.image('logo', 'assets/sprites/phaser2.png');
        this.load.image('space', 'assets/skies/space.jpg');
    }

    create ()
    {
        const textures = this.textures;

        this.add.image(400, 300, 'space');

        const logo = this.add.image(400, 300, 'logo');

        const origin = logo.getTopLeft();

        const logoSource = {
            getRandomPoint: function (vec)
            {
                let x;
                let y;
                let pixel;
                do
                {
                    x = Phaser.Math.Between(0, logo.width - 1);
                    y = Phaser.Math.Between(0, logo.height - 1);
                    pixel = textures.getPixel(x, y, 'logo');
                } while (pixel.alpha < 255);

                return vec.setTo(x + origin.x, y + origin.y);
            }
        };

        const particles = this.add.particles('flares');

        particles.createEmitter({
            x: 0,
            y: 0,
            lifespan: 1000,
            gravityY: 10,
            scale: { start: 0, end: 0.25, ease: 'Quad.easeOut' },
            alpha: { start: 1, end: 0, ease: 'Quad.easeIn' },
            blendMode: 'ADD',
            emitZone: { type: 'random', source: logoSource }
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
