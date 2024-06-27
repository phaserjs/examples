class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('banner', 'assets/atlas/banners.png', 'assets/atlas/banners.json');
        this.load.image('bubble', 'assets/particles/bubble.png');
        this.load.image('birdie', 'assets/pics/birdy.png');
    }

    create ()
    {
        const graphics = this.add.graphics();
        graphics.lineStyle(1, 0xff0000);

        const scale = 0.2;
        const birdie1 = this.add.sprite(0, 0, 'birdie')
            .setScale(scale)
            .setOrigin(0, 0);

        const glowController = birdie1.preFX.addGlow(0xffff00, 4, 0, false, 0.1, 32);
        // const blurController = birdie1.preFX.addBlur();
        // const barrelController = birdie1.preFX.addBarrel(2);
        // const bloomController = birdie1.preFX.addBloom(0xffffff, 1, 1, 2, 1.2);
        // const cmController = birdie1.preFX.addColorMatrix().night();
        // const displacementController = birdie1.preFX.addDisplacement('distort', -0.03, -0.03);
        // const gradientController = birdie1.preFX.addGradient(0x0000ff, 0x00ff00, 0);
        // const pixelateController = birdie1.preFX.addPixelate(5);
        // const shadowController = birdie1.preFX.addShadow(0, 0, 0.006, 2, 0x999999, 10);
        // const vignetteController = birdie1.preFX.addVignette(0.5, 0.5, 0.3, 0.5);
        // const shineController = birdie1.postFX.addShine(1, .2, 5);
        // console.log(glowController);
        
        const texture1 = this.textures.addDynamicTexture("birdie_glow1", 800, 600); //500, 334
        texture1.draw(birdie1, 0, 0);

        const texture2 = this.textures.addDynamicTexture("birdie_glow2", birdie1.width * scale, birdie1.height * scale);
        texture2.stamp('birdie_glow1', null, 400, 300);

        const clone1 = this.add.sprite(100, 100, "birdie_glow1").setOrigin(0);
        const bounds1 = clone1.getBounds();
        graphics.strokeRectShape(bounds1);

        const clone2 = this.add.sprite(400, 300, "birdie_glow2")
        const bounds2 = clone2.getBounds();
        graphics.strokeRectShape(bounds2);

        birdie1.destroy();
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    background: '#2d2d2d',
    scene: Example
};

const game = new Phaser.Game(config);
