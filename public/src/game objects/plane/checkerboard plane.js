class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
    }

    create ()
    {
        const plane = this.add.plane(400, 390);

        plane.createCheckerboard();
        plane.setGridSize(16, 16);
        plane.uvScale(6, 6);
        plane.setViewHeight(512);
        plane.viewPosition.z = 1.6;
        plane.rotateX = 285;
        plane.setScale(1.25);

        const plane2 = this.add.plane(400, 155);

        plane2.createCheckerboard(0xdd4132, 0x931030);
        plane2.setGridSize(16, 16);
        plane2.uvScale(8, 8);
        plane2.setViewHeight(512);
        plane2.viewPosition.z = 1.6;
        plane2.rotateX = 74;
        plane2.setScale(1.25);

        this.add.image(700, 250, 'sonic');

        this.plane = plane;
        this.plane2 = plane2;

        this.x = this.tweens.addCounter({
            from: -0.04,
            to: 0.04,
            duration: 4000,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inout'
        });
    }

    update ()
    {
        this.plane.uvScroll(0, -0.04);
        this.plane2.uvScroll(this.x.getValue(), -0.04);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
