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

        this.x = this.tweens.addCounter({
            from: 0,
            to: 0.01,
            duration: 4000,
            yoyo: true,
            repeat: -1,
            ease: 'sine.in'
        });

        this.y = this.tweens.addCounter({
            from: 0,
            to: 0.01,
            duration: 9000,
            yoyo: true,
            repeat: -1,
            ease: 'sine.out'
        });
    }

    update ()
    {
        this.plane.uvScroll(this.x.getValue(), this.y.getValue());
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
