class Example extends Phaser.Scene
{

    constructor()
    {
        super({ key: "Example" });
    }

    preload ()
    {
        this.load.image("earth", "assets/pics/ayu.png");
    }

    create ()
    {
        this.earth = this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, "earth");

        this.text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#ffffff' });

        this.scale.on('resize', this.resize, this);
    }

    resize (gameSize, baseSize, displaySize, previousWidth, previousHeight)
    {
        const width = gameSize.width;
        const height = gameSize.height;

        this.cameras.resize(width, height);
    }

    update (time)
    {

        // cover window size
        const w = this.scale.width;
        const h = this.scale.height;

        this.earth.setPosition(w * 0.5, h * 0.5);
        this.earth.setDisplaySize(w, h);

        this.text.setText([
            `width: ${this.scale.width}`,
            `height: ${this.scale.height}`,
            `parentSize.width: ${this.scale.parentSize.width}`,
            `parentSize.height: ${this.scale.parentSize.height}`,
        ]);
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scale: {
        // mode: Phaser.Scale.RESIZE,
        mode: Phaser.Scale.ScaleModes.RESIZE,
        // autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: Example
};

const game = new Phaser.Game(config);