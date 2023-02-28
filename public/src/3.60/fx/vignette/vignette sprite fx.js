class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('pic', 'assets/pics/robot-ai.jpg');
    }

    create ()
    {
        const sprite = this.add.image(400, 300, 'pic');

        const fx = sprite.preFX.addVignette();

        this.add.text(10, 10, 'Click to toggle vignette on/off').setResolution(window.devicePixelRatio);

        this.input.on('pointerdown', () => {

            fx.active = !fx.active;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
