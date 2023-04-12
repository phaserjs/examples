class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('background', 'assets/sprites/blur-bg.png');
        this.load.image('phaserlogo', 'assets/sprites/phaser2.png');
    }

    create ()
    {

        const centerPosition = {
            x: this.sys.scale.width / 2,
            y: this.sys.scale.height / 2
        }

        const background = this.add.image(centerPosition.x, centerPosition.y, 'background').setScale(.5);
        background.postFX.addBlur(0, 0, 0, 1, 0xffffff);

        // this.scene.start('FXPixelated');
        const blurryImage = this.image = this.add.image(centerPosition.x - 20, centerPosition.y - 100, 'phaserlogo');
        const imageLogo = this.add.image(centerPosition.x + 20, centerPosition.y, 'phaserlogo');
        const fx = blurryImage.preFX.addBlur(0, 0, 0, 1, 0xffffff);
        const fxImageLogo = imageLogo.preFX.addBlur(0, 0, 0, 0, 0xffffff);
        // this.time.addEvent({
        //     delay: 1000,
        //     callback: () => {

        this.tweens.addCounter({
            from: 0,
            to: 1,
            duration: 3000,
            yoyo: true,
            repeat: -1,
            onUpdate: (tween) => {
                const value = tween.getValue();
                fxImageLogo.strength = Math.round(value);
                fx.strength = Math.round(1 - value);
            }
        });

        // move with mouse pointer in X axis like parallax
        this.input.on('pointermove', (pointer) => {
            // Normalize the pointer position to 0 - 1 range
            const x = pointer.x / this.sys.game.scale.width;
            const y = pointer.y / this.sys.game.scale.height;

            // Move the image like a 3D sticker
            blurryImage.x = Phaser.Math.Linear(centerPosition.x - 100, centerPosition.x + 100, x);
            imageLogo.x = Phaser.Math.Linear(centerPosition.x + 100, centerPosition.x - 100, x);

            // Move in y axis like a 3D sticker
            blurryImage.y = Phaser.Math.Linear(centerPosition.y - 100, centerPosition.y + 100, y);
            imageLogo.y = Phaser.Math.Linear(centerPosition.y + 100, centerPosition.y - 100, y);
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    backgroundColor: '#000022',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
