class Example extends Phaser.Scene {

    preload() {
        this.load.image('bg', 'assets/pics/debug-grid-1920x1920.png');
        this.load.image('square', 'assets/sprites/32x32-white.png');
    }

    create() {

        this.add.image(0, 0, 'bg').setOrigin(0);

        let fx = false;

        for (let x = 2; x < 8; x += 2) {
            for (let y = 2; y < 8; y += 2) {

                const s = this.add.image(32 * x, 32 * y, 'square').setOrigin(0);

                if (fx)
                {
                    const gradient = s.preFX.addGradient();
                    gradient.color1 = 0x00ff00;
                    gradient.color2 = 0x0000ff;
                }

                fx = !fx;
            }
        }

        // this.cameras.main.roundPixels = false;

        this.tweens.add({
            targets: this.cameras.main,
            scrollX: 50,
            scrollY: 50,
            duration: 5000,
            yoyo: true,
            repeat: -1,
        });
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);