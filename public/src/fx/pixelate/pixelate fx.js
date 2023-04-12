class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('phaserlogo', 'assets/sprites/phaser2.png');
    }

    create ()
    {
        const phaserLogoImg = this.add.image(this.scale.width / 2, this.scale.height / 2 - 50, 'phaserlogo');
        const fxPixelated = phaserLogoImg.preFX.addPixelate(-1);

        // Text to show the current build target
        const shape = this.add.rectangle(this.sys.scale.width / 2, this.sys.scale.height / 2 + 160, this.sys.scale.width, 30, 0x000000, 0.8);
        const textDebug = this.add.text(this.sys.scale.width / 2, this.sys.scale.height / 2 + 160, `Pixel Amount:-1.00`, {fontSize: 25}).setOrigin(.5);


        // Loop to change the pixel amount
        this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.tweens.addCounter({
                    from: -1,
                    to: 10,
                    duration: 2000,
                    yoyo: true,
                    repeat: -1,
                    onUpdate: (value) => {
                        fxPixelated.amount = value.getValue();
                        textDebug.setText(`Pixel Amount:${fxPixelated.amount.toFixed(2).padStart(5, " ")}`);
                    }
                })
            }
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
