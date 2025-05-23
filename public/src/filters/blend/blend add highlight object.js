class Example extends Phaser.Scene
{
    image;

    preload ()
    {
        this.load.image('bg', 'assets/pics/shadow-of-the-beast2-karamoon.png');
        this.load.atlas('diamond', 'assets/animations/diamond.png', 'assets/animations/diamond.json');
    }

    create ()
    {
        this.add.image(640, 360, 'bg')
        .setDisplaySize(1280, 720);

        this.anims.create({
            key: 'diamond',
            frames: this.anims.generateFrameNames('diamond', { prefix: 'diamond_', end: 15, zeroPad: 4 }),
            repeat: -1
        });

        const updaters = [];

        // Create an off-screen sprite to render the diamond animation to a texture.
        const diamond = this.make.sprite({
            key: 'diamond'
        });
        diamond.play('diamond');

        // Render diamond to a texture so we can use it easily.
        const renderDiamond = this.add.renderTexture(640, 128, 64, 64);
        renderDiamond.saveTexture('diamondOut');

        // Update the render texture.
        this.updateRenderDiamond = () => {
            renderDiamond.clear();
            renderDiamond.draw(diamond, diamond.width / 2, diamond.height);
            renderDiamond.render();

            updaters.forEach(fn => fn());
        };

        // Create a blend filter.
        renderDiamond.enableFilters();
        const blend = renderDiamond.filters.internal.addBlend('diamondOut', Phaser.BlendModes.ADD, 0);

        // Tween the blend amount.
        this.tweens.add({
            targets: blend,
            amount: 2,
            duration: 1000,
            yoyo: true,
            repeat: -1
        });

        // Create a function to add a blended diamond using the same texture.
        const addBlendedDiamond = (x, y, color) => {
            const diamond = this.add.sprite(x, y, 'diamondOut');
            diamond.enableFilters();
            const newBlend = diamond.filters.internal.addBlend('diamondOut', Phaser.BlendModes.ADD, 0, color);

            // Update the blend abount based on the first box.
            updaters.push(() => {
                newBlend.amount = blend.amount;
            });
        };

        // Accentuate just the red channel.
        addBlendedDiamond(340, 512, [1, 0, 0, 1]);

        // Invert the blue channel, and accentuate the red, to create an orange gem.
        addBlendedDiamond(940, 512, [1, 0, -1, 1]);

        // Add more un-blended diamonds.
        this.add.sprite(540, 192, 'diamond').play('diamond');
        this.add.sprite(740, 192, 'diamond').play('diamond');

        this.add.sprite(340, 512 - 64, 'diamond').play('diamond');
        this.add.sprite(340 + 96, 512 + 64, 'diamond').play('diamond');

        this.add.sprite(940, 512 - 64, 'diamond').play('diamond');
        this.add.sprite(940 - 96, 512 + 64, 'diamond').play('diamond');
    }

    update ()
    {
        this.updateRenderDiamond();
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 1280,
    height: 720,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
