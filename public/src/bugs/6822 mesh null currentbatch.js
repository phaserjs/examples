class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setPath('https://labs.phaser.io/assets/obj/racing/');
        this.load.obj('roadStart', 'roadStartPositions.obj', 'roadStartPositions.mtl');
    }

    create ()
    {
        this.add.rectangle(50, 50, 50, 50, 0xff0000, 0.25).setPipeline('Light2D');

        const track = this.add.mesh(400, 300);

        track.setPipeline('Light2D');

        const rot90 = Phaser.Math.DegToRad(90);
        const rot180 = Phaser.Math.DegToRad(180);

        track.addVerticesFromObj('roadStart', 1, 0, 0, 0, rot90, rot180);

        track.setRotation(Math.random());
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a440a',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);