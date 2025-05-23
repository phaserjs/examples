class Example extends Phaser.Scene
{
    create ()
    {
        const dudeData = [
            '.......3.....',
            '......333....',
            '....5343335..',
            '...332333333.',
            '..33333333333',
            '..37773337773',
            '..38587778583',
            '..38588888583',
            '..37888888873',
            '...333333333.',
            '.F....5556...',
            '3E34.6757.6..',
            '.E.55.666.5..',
            '......777.5..',
            '.....6..7....',
            '.....7..7....'
        ];

        this.textures.generate('dude', { data: dudeData, pixelWidth: 4, pixelHeight: 4 });

        this.add.image(400, 300, 'dude').setScale(8).setAlpha(0.4);

        //  Add a bunch of images that all use the same texture
        for (var i = 0; i < 12; i++)
        {
            this.launch(i);
        }
    }

    launch (i)
    {
        const image = this.add.image(48 + i * 64, 32, 'dude');
        this.tweens.add({
            targets: image,
            y: 550,
            delay: i * 100,
            ease: "Power1",
            repeat: -1,
            yoyo: true
        });

    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
