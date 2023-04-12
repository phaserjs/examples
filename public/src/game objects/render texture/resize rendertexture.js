class Example extends Phaser.Scene
{
    blitter;
    tilesprite;
    quad;
    graphics;
    bitmaptext;
    particles;
    bunny;
    text;
    bob;
    rt;

    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
        this.load.image('pic', 'assets/pics/baal-loader.png');
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
        this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
        this.load.image('image', 'assets/pics/sure-shot-by-made.png');
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
        this.load.image('atari', 'assets/sprites/atari130xe.png');
    }

    create ()
    {
        this.bunny = this.textures.getFrame('bunny');
        this.text = this.add.text(0, 0, 'phaser 3?').setVisible(false);
        this.bob = this.add.image(0, 0, 'bunny').setName('bob').setVisible(false);

        this.particles = this.add.particles(200, 300, 'flares', {
            frame: 'blue',
            lifespan: 2000,
            speed: { min: 400, max: 600 },
            angle: 330,
            gravityY: 300,
            scale: { start: 0.4, end: 0 },
            quantity: 2,
            blendMode: 'ADD',
            advance: 1000
        }).setVisible(false);

        this.bitmaptext = this.add.bitmapText(0, 0, 'desyrel', 'PHASER 3\nRender Texture').setVisible(false);

        this.graphics = this.add.graphics().setVisible(false);

        this.graphics.fillStyle(0xffff00, 1);

        this.graphics.slice(400, 300, 200, Phaser.Math.DegToRad(340), Phaser.Math.DegToRad(20), true);

        this.graphics.fillPath();

        const vertices = [
            -1, 1,
            1, 1,
            -1, -1,
            1, -1
        ];
        const uvs = [
            0, 0,
            1, 0,
            0, 1,
            1, 1
        ];
        const indicies = [ 0, 2, 1, 2, 3, 1 ];
        const mesh = this.add.mesh(400, 300, 'image').setVisible(false);
        mesh.addVertices(vertices, uvs, indicies);
        mesh.panZ(7);

        this.tilesprite = this.add.tileSprite(400, 300, 250, 250, 'mushroom').setVisible(false);

        this.blitter = this.add.blitter(0, 0, 'atari').setVisible(false);

        this.blitter.create(0, 0);

        this.rt = this.add.renderTexture(400, 300, 800, 600);

        this.rt.draw(this.graphics, 0, 0);
        this.rt.draw(this.bob, 200, 200);
        this.rt.draw(mesh, 200, 200);
        this.rt.draw(this.tilesprite, 200, 200);
        this.rt.draw(this.blitter, 0, 0);
        this.rt.draw(this.text, 100, 100);
        this.rt.draw(this.bob, 300, 300);
        this.rt.draw(this.bob, 400, 400);
        this.rt.draw(this.text, 300, 200);
        this.rt.draw(this.particles, 300, 100);
        this.rt.draw(this.bitmaptext, 200, 100);

        this.input.on('pointerdown', () =>
        {
            this.rt.resize(400, 300);

            this.rt.draw(this.graphics, 0, 0);
            this.rt.draw(this.bob, 200, 200);
            this.rt.draw(mesh, 200, 200);
            this.rt.draw(this.tilesprite, 200, 200);
            this.rt.draw(this.blitter, 0, 0);
            this.rt.draw(this.text, 100, 100);
            this.rt.draw(this.bob, 300, 300);
            this.rt.draw(this.bob, 400, 400);
            this.rt.draw(this.text, 300, 200);
            this.rt.draw(this.particles, 300, 100);
            this.rt.draw(this.bitmaptext, 200, 100);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
