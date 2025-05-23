class Example extends Phaser.Scene
{
    create ()
    {
        const t1 = this.add.isobox(150, 500, 200, 400, 0x00b9f2, 0x016fce, 0x028fdf);

        const t2 = this.add.isobox(400, 500, 200, 400, 0xffe31f, 0xf2a022, 0xf8d80b);

        const t3 = this.add.isobox(640, 500, 100, 100, 0x8dcb0e, 0x3f8403, 0x63a505);

        this.tweens.add({
            targets: t3,
            height: 300,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        this.tweens.add({
            targets: [ t1, t2, t3 ],
            projection: 30,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    scene: Example
};

const game = new Phaser.Game(config);
