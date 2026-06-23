class Example extends Phaser.Scene
{
    ellipse1;
    ellipse2;
    image;
    outerStencil;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('space', 'assets/skies/deep-space.jpg');
        this.load.image('gradient', 'assets/skies/gradient2.png');
    }

    create ()
    {
        this.add.image(400, 300, 'space').setScale(800 / 512);

        this.ellipse1 = this.add.ellipse(400, 300, 200, 200, 0xffffff);
        this.ellipse2 = this.add.ellipse(400, 300, 300, 300, 0xffffff);

        // Create a stencil which blocks a small ellipse.
        const stencil1 = this.add.stencil(0, 0, this.ellipse1);

        // Create another stencil containing the first stencil.
        // The first stencil affects the large ellipse,
        // creating a ring which is drawn to the canvas stencil.
        // This is done automatically using framebuffer compositing.
        // Be careful when putting stencils inside stencils! You have to think through the logic.
        this.outerStencil = this.add.stencil(0, 0, [ stencil1, this.ellipse2 ], { stencilInvert: true });

        this.image = this.add.image(400, 300, 'gradient');

        // Uncomment this in a dev build of Phaser to see the framebuffers being drawn.
        // setTimeout(() => this.renderer.captureFrame(false, true), 100 );
    }

    update (time, delta)
    {
        this.image.rotation += 0.01;

        this.outerStencil.setPosition(100 * Math.sin(time / 1000), 100 * Math.sin(time / 876));

        this.ellipse1.setSize(
            200 + 8 * Math.sin(time / 345),
            200 + 8 * Math.sin(time / 987)
        );
        this.ellipse2.setSize(
            300 + 8 * Math.sin(time / 456),
            300 + 8 * Math.sin(time / 678)
        );
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
