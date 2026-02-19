class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('lulu', 'assets/pics/shocktroopers-lulu2.png');
    }

    create ()
    {
        const setWhite = this.add.image(64, 64, 'lulu')
        .setScale(1/4)
        .setInteractive({ pixelPerfect: true })
        .setTintFill(Phaser.TintModes.FILL);

        const setBlack = this.add.image(64, 64 * 2, 'lulu')
        .setScale(1/4)
        .setInteractive({ pixelPerfect: true })
        .setTintFill(Phaser.TintModes.FILL)
        .setTint(0x000000);

        const setHot = this.add.image(64, 64 * 3, 'lulu')
        .setScale(1/4)
        .setInteractive({ pixelPerfect: true })
        .setTintFill(Phaser.TintModes.FILL)
        .setTint(0xffcc88, 0xffcc88, 0xcc4444, 0xcc4444);

        const setRGB = this.add.image(64, 64 * 4, 'lulu')
        .setScale(1/4)
        .setInteractive({ pixelPerfect: true })
        .setTintFill(Phaser.TintModes.FILL)
        .setTint(0xffffff, 0xff0000, 0x00ff00, 0x0000ff);

        const setMultiply = this.add.text(64, 64 * 5, 'MULTIPLY')
        .setInteractive();

        const setFill = this.add.text(64, 64 * 5.5, 'FILL')
        .setInteractive();

        const setAdd = this.add.text(64, 64 * 6, 'ADD')
        .setInteractive();

        const setScreen = this.add.text(64, 64 * 6.5, 'SCREEN')
        .setInteractive();

        const setOverlay = this.add.text(64, 64 * 7, 'OVERLAY')
        .setInteractive();

        const setHardLight = this.add.text(64, 64 * 7.5, 'HARD_LIGHT')
        .setInteractive();

        const texts = [ setMultiply, setFill, setAdd, setScreen, setOverlay, setHardLight ];

        const demo = this.add.image(500, 320, 'lulu')
        .setScale(3);

        setWhite.on('pointerdown', () => {
            demo.setTint(0xffffff);
        });
        setBlack.on('pointerdown', () => {
            demo.setTint(0x000000);
        });
        setHot.on('pointerdown', () => {
            demo.setTint(0xffcc88, 0xffcc88, 0xcc4444, 0xcc4444);
        });
        setRGB.on('pointerdown', () => {
            demo.setTint(0xffffff, 0xff0000, 0x00ff00, 0x0000ff);
        });
        setMultiply.on('pointerdown', function () {
            texts.forEach(text => text.clearTint());
            this.setTint(0xffff00);
            demo.setTintFill(Phaser.TintModes.MULTIPLY);
        });
        setFill.on('pointerdown', function () {
            texts.forEach(text => text.clearTint());
            this.setTint(0xffff00);
            demo.setTintFill(Phaser.TintModes.FILL);
        });
        setAdd.on('pointerdown', function () {
            texts.forEach(text => text.clearTint());
            this.setTint(0xffff00);
            demo.setTintFill(Phaser.TintModes.ADD);
        });
        setScreen.on('pointerdown', function () {
            texts.forEach(text => text.clearTint());
            this.setTint(0xffff00);
            demo.setTintFill(Phaser.TintModes.SCREEN);
        });
        setOverlay.on('pointerdown', function () {
            texts.forEach(text => text.clearTint());
            this.setTint(0xffff00);
            demo.setTintFill(Phaser.TintModes.OVERLAY);
        });
        setHardLight.on('pointerdown', function () {
            texts.forEach(text => text.clearTint());
            this.setTint(0xffff00);
            demo.setTintFill(Phaser.TintModes.HARD_LIGHT);
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#222288',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
