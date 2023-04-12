class Example extends Phaser.Scene
{
    iter = 0;
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
            blendMode: 'ADD'
        }).setVisible(false);
        this.bitmaptext = this.add.bitmapText(0, 0, 'desyrel', 'PHASER 3\nRender Texture').setVisible(false);

        this.graphics = this.add.graphics().setVisible(false);

        this.graphics.fillStyle(0xffff00, 1);

        this.graphics.slice(400, 300, 200, Phaser.Math.DegToRad(340), Phaser.Math.DegToRad(20), true);

        this.graphics.fillPath();

        this.tilesprite = this.add.tileSprite(400, 300, 250, 250, 'mushroom').setVisible(false);

        this.blitter = this.add.blitter(0, 0, 'atari').setVisible(false);

        this.blitter.create(0, 0);

        this.rt = this.add.renderTexture(400, 300, 800, 600);
    }

    update ()
    {
        this.rt.camera.rotation -= 0.01;

        this.rt.clear();

        this.rt.beginDraw();

        this.rt.batchDraw(this.graphics, 0, 0);
        this.rt.batchDraw(this.bob, 200, 200);
        this.rt.batchDraw(this.tilesprite, 200, 200);
        this.rt.batchDraw(this.blitter, 0, 0);
        this.rt.batchDraw(this.text, 100, 100);
        this.rt.batchDraw(this.bob, 300, 300);
        this.rt.batchDraw(this.bob, 400, 400);
        this.rt.batchDraw(this.text, 300, 200);
        this.rt.batchDraw(this.particles, 300, 0);
        this.rt.batchDraw(this.bitmaptext, 200, 100);

        this.rt.endDraw();

        this.tilesprite.tilePositionX = Math.cos(-this.iter) * 400;
        this.tilesprite.tilePositionY = Math.sin(-this.iter) * 400;

        this.iter += 0.01;
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
