class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/tests/grave/background.png');
        this.load.image('fog', 'assets/tests/grave/fog.png');
        this.load.image('stones', ['assets/normal-maps/stones.png', 'assets/normal-maps/stones_n.png']);
        this.load.image('ghost', 'assets/sprites/ghost1.png');
    }

    create ()
    {
        this.lights.enable();
        this.lights.setAmbientColor(0x808080);

        var spotlight = this.lights.addLight(400, 300, 280).setIntensity(3);

        this.input.on('pointermove', function (pointer) {

            spotlight.x = pointer.x;
            spotlight.y = pointer.y;

        });

        this.add.image(400, 76, 'bg').setScale(0.8);

        const plane = this.add.plane(400, 300, 'stones');

        plane.uvScale(4, 4);
        plane.rotateX = -70;
        plane.viewPosition.z = 1.25;
        plane.setPipeline('Light2D');

        this.add.image(400, 160, 'fog').setScale(0.7);

        const ghost = this.add.image(1000, 200, 'ghost');

        ghost.setAlpha(0.5);
        ghost.setBlendMode('SCREEN');

        this.tweens.add({
            targets: ghost,
            x: -200,
            duration: 4000,
            repeat: -1,
            delay: 2000,
            hold: 2000
        });

        this.tweens.add({
            targets: ghost,
            y: 400,
            yoyo: true,
            repeat: -1,
            duration: 1500,
            ease: 'sine.inout'
        });
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
