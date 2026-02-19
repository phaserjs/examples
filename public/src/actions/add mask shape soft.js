class Example extends Phaser.Scene
{
    cougar;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('cougar', 'assets/pics/cougar-ihsf.png');
    }

    create ()
    {
        const cougar = this.add.image(400, 300, 'cougar');
        this.cougar = cougar;

        Phaser.Actions.AddMaskShape(cougar, {
            useInternal: true,
            blurRadius: 8,
            padding: 64
        });
    }

    update (time)
    {
        this.cougar.setPosition(
            400 + 16 * Math.cos(time / 100),
            300 + 8 * Math.sin(time / 78.7)
        )
        .setScale(1 + 0.02 * Math.sin(time / 45.9))
        .setRotation(0.1 * Math.cos(time / 89));
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
