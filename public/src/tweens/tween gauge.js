class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('gauge', 'assets/tweens/gauge.png');
        this.load.image('middle', 'assets/tweens/needle-middle.png');
        this.load.image('needle', 'assets/tweens/needle.png');
    }

    create ()
    {
        this.add.image(400, 300, 'gauge');

        const needle = this.add.image(400, 300, 'needle').setOrigin(0.70, 0.32);

        this.add.image(400, 300, 'middle').setOrigin(0.70, 0.32);

        //  Our need ranges from 5 degrees to 260 degrees (to align with the RPM gauge)
        needle.setAngle(5);

        this.tweens.add({
            targets: needle,
            angle: '+=255',
            duration: 3000,
            ease: 'Sine.inOut',
            yoyo: true,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
