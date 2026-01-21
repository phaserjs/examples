class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('gradient24', "assets/skies/gradient24.png");
        this.load.image('phaser2', 'assets/sprites/phaser2.png');
    }

    create ()
    {
        this.add.image(400, 300, "gradient24");

        this.sprite = this.add.image(400, 400, "phaser2");
        this.sprite.enableFilters();
        this.glow = this.sprite.filters.internal.addGlow();
        this.glow.setPaddingOverride(null); // Add auto-padding.

        this.add.text(400, 100, "Read me in the cameras", {
            fontSize: 64,
            fontFamily: "Sans-serif",
            color: "#7f00ff",
        }).setOrigin(0.5, 0.5);

        // Capture the current render stage.
        this.cameras.main.setForceComposite(true);
        this.add.captureFrame("capture");
        console.log(this);

        // Display the captured scene.
        // Note, the texture will be the same size as the game,
        // so the "screens" are scaled down here.
        // To capture a different size, you can use the renderTexture method.
        this.camera1 = this.add.image(120, 120, "capture").setScale(0.25).setRotation(-0.1);
        this.camera2 = this.add.image(400, 100, "capture").setScale(0.25);
        this.camera3 = this.add.image(680, 120, "capture").setScale(0.25).setRotation(0.1);

        this.camera1.enableFilters().filters.external.addBlocky(16);
        this.camera2.enableFilters().filters.external.addGlow();
        this.camera3.enableFilters().filters.external.addShadow();
    }

    update (time)
    {
        this.sprite.rotation = Math.sin(time / 1000) * 0.1;
        this.glow.scale = 2 + 2 * Math.sin(time / 123);
        this.camera1.rotation = -0.1 + Math.sin(time / 917) * 0.05;
        this.camera3.scale = 0.25 + Math.sin(time / 1111) * 0.1;
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
