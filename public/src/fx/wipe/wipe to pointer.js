class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('pic1', 'assets/pics/robot-ai.jpg');
        this.load.image('pic2', 'assets/pics/baal-ai.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'pic1');

        const sprite = this.add.image(400, 300, 'pic2');

        const fx = sprite.preFX.addWipe(0.01, 0, 0);

        this.input.on('pointermove', pointer => {

            fx.progress = pointer.worldX / 800;

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
