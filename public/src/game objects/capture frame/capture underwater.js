class Example extends Phaser.Scene
{
    bubbles = [];
    distortionConfig1 = {
        tileRotation: 1
    };
    distortionConfig2 = {
        tileRotation: -1,
        alpha: 0.5
    };
    redrawDistortion;

    preload ()
    {
        this.load.image('bubble', 'assets/particles/bubble.png');
        this.load.image('background', 'assets/sprites/blur-bg.png');
        this.load.image('phaserlogo', 'assets/sprites/phaser2.png');
        this.load.image('alien-metal-n', 'assets/textures/alien-metal-n.jpg');
    }

    create ()
    {
        this.cameras.main.setForceComposite(true);

        const width = this.renderer.width;
        const height = this.renderer.height;

        const bg = this.add.image(width / 2, height / 2, 'background');

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(0, width);
            const y = Phaser.Math.Between(0, height);

            const bubble = this.add.image(x, y, 'bubble')
                .setScale(0.5 + Math.random())
                .setBlendMode(Phaser.BlendModes.ADD);

            this.bubbles.push(bubble);
        }

        // Capture previous elements to texture.
        const captureFrame = this.add.captureFrame('capture');

        // Render a distortion texture.
        const distortion = this.add.renderTexture(width / 2, height / 2, width, height)
            .setVisible(false)
            .saveTexture('distortion')
        this.redrawDistortion = (time, delta) =>
        {
            this.distortionConfig1.tilePositionX = time * 0.1;
            this.distortionConfig2.tilePositionX = time * 0.1;
            distortion
                .clear()
                .repeat('alien-metal-n', undefined, undefined, undefined, undefined, undefined, this.distortionConfig1)
                .repeat('alien-metal-n', undefined, undefined, undefined, undefined, undefined, this.distortionConfig2)
                .render();
        };

        // Render the capture frame and distortion texture.
        const waterDistortion = this.add.image(width / 2, height / 2, 'capture');
        waterDistortion.enableFilters();
        waterDistortion.filters.internal.addDisplacement('distortion', 0.03, 0.03);

        // Add a logo to the scene.
        const logo = this.add.image(width / 2, height / 2, 'phaserlogo');
        logo.enableFilters();
        logo.filters.internal.addGlow();
    }

    update (time, delta)
    {
        this.redrawDistortion(time, delta);

        this.bubbles.forEach(bubble =>
        {
            bubble.scaleY = (Math.sin(bubble.scaleX * (time + bubble.x * 1234) / 256) * 0.1 + 0.9) * bubble.scaleX;
            bubble.y -= 0.1 * delta * bubble.scaleY;

            if (bubble.y < -bubble.height)
            {
                bubble.y = this.renderer.height + bubble.height;
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#2d2d2d',
    width: 1280,
    height: 720,
    scene: Example
};

const game = new Phaser.Game(config);
