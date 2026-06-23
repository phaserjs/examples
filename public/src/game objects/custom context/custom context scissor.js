class Example extends Phaser.Scene
{
    donut;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('grid', 'assets/skies/grid.png');
        this.load.image('starfield', 'assets/skies/starfield.png');
        this.load.image('donut', 'assets/sprites/donut.png');
    }

    create ()
    {
        this.add.image(400, 600, 'grid').setOrigin(0.5, 1);

        this.donut = this.add.image(400, 500, 'donut').setScale(2).setOrigin(0.5, 1);

        // Nested custom contexts.
        // Outer context sets the scissor rectangle to omit the top part, affecting the starfield.
        // Inner context sets it back to the full image, allowing the donut to escape to the top.
        // Note that cameras also use scissor to define their draw area!
        // You can break the rules of cameras in this way.
        const customContext = this.add.customcontext(0, 0,
            [
                this.add.image(400, 250, 'starfield'),
                this.add.customcontext(0, 0,
                    this.donut,
                    (drawingContext) => {
                        drawingContext.setScissorBox(0, 0, 800, 600);
                    }
                )
            ],
            (drawingContext) => {
                drawingContext.setScissorBox(0, 250, 800, 350);
            }
        );
    }

    update (time, delta)
    {
        this.donut.setScale(3 + Math.sin(time / 1000))
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
