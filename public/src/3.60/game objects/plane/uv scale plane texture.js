class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient13.png');

        this.load.image('texture', 'assets/sprites/p2.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.plane = this.add.plane(400, 300, 'texture');

        this.plane.setViewHeight(512);

        this.scale = this.tweens.addCounter({
            from: 1,
            to: 6,
            duration: 5000,
            yoyo: true,
            repeat: -1
        });
    }

    update ()
    {
        const s = this.scale.getValue();

        this.plane.uvScale(s, s);
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
