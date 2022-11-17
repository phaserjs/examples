class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('mushroom', 'assets/particles/glass.png');
    }

    create ()
    {
        this.add.image(200, 300, 'mushroom').setPipeline("Light2D");
        this.add.image(400, 300, 'mushroom').setTint(0xff00ff).setPipeline("Light2D");
        this.add.image(600, 300, 'mushroom').setTintFill(0xff00ff).setPipeline("Light2D");

        this.lights.enable()
        this.lights.setAmbientColor("#0x999999")

        this.lights.addLight(200, 300, 1000, undefined, 2)
        this.lights.addLight(400, 300, 1000, undefined, 2)
        this.lights.addLight(600, 300, 1000, undefined, 2)
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
