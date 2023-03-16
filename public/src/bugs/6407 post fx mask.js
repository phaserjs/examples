class Demo extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('pic', 'assets/pics/neotokyo-ai.jpg');
        this.load.image('logo', 'assets/sprites/phaser2.png');
        this.load.image('card', 'assets/pics/slug.png');
    }

    create ()
    {
        const m1 = this.make.graphics();
        m1.fillCircle(200, 300, 200);
        m1.fillCircle(600, 300, 200);
        const mask1 = m1.createGeometryMask();

        const a = this.add.image(400, 300, 'pic');
        const b = this.add.image(600, 300, 'logo');
        const c = this.add.image(200, 300, 'card');

        a.setMask(mask1);

        // const area1 = this.textures.addDynamicTexture('area1', 128, 128);
        // area1.fill(0x00ff00);
        // area1.drawFrame('card');
        // this.add.sprite(650, 100, 'area1');

        // a.preFX.addPixelate(4);
        // a.preFX.addBarrel(4);
        // a.postFX.addBarrel(4.0);
        // b.preFX.addBarrel(0.5);
        // b.postFX.addBarrel(0.5);
        // b.postFX.addPixelate(4);
        // c.postFX.addBarrel(0.5);
        // c.preFX.addBarrel(0.5);

        //  pre + pre + cam post = works
        //  post + pre + cam post = pre invisible
        //  pre + post + cam post = cam post fails
        //  post + pre + post + cam post = everything fails after first post (but cam post works)

        const m = this.make.graphics();
        // m.fillRectShape(new Phaser.Geom.Rectangle(50, 150, 700, 300));
        m.fillCircle(400, 300, 300);
        const mask = m.createGeometryMask();

        //  depth buffer true + camera mask and camera postFX = normal sprites work, postfx ones invisible
        //  depth buffer false + camera mask and camera postFX = mask ignored, fx works
        //  depth buffer false + sprite mask and sprite postFX = works
        //  depth buffer false + camera mask and sprite postFX = works
        //  depth buffer false + sprite mask and camera postFX = mask ignored, fx works
        //  depth buffer true + sprite mask and camera postFX = all works
        //  depth buffer true + sprite mask and sprite postFX = sprite invisible
        //  depth buffer true + camera mask and sprite postFX = sprite invisible
        //  depth buffer true + sprite postFX, camera empty = sprite works

        // mask.invertAlpha = true;

        this.cameras.main.setMask(mask);
        // this.cameras.main.postFX.addPixelate(4);
        // this.cameras.main.postFX.addGradient();
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: Demo
};

const game = new Phaser.Game(config);
