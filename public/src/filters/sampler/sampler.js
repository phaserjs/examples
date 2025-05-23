class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('card2', 'assets/pics/card2.png');
    }

    create ()
    {
        const card = this.add.image(640, 360, 'card2');

        // Add filters to the card.
        card.enableFilters();

        // Pixelate the card.
        const pixelate = card.filters.internal.addPixelate(30);

        // Sample the card at the center and update the background color.
        card.filters.internal.addSampler((color) => {
            this.game.renderer.config.backgroundColor = color;
        }, { x: 142, y: 200 });

        // Blur the card. The sampler is unaffected.
        const blur = card.filters.internal.addBlur(0, 2, 2, 2);
        blur.setPaddingOverride(null);

        this.tweens.add({
            targets: pixelate,
            amount: -1,
            duration: 10000,
            yoyo: true,
            loop: -1
        });

        this.tweens.add({
            targets: blur,
            strength: 0,
            duration: 10000,
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
