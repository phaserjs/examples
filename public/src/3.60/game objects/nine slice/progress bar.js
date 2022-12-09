class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('ui', 'assets/ui/nine-slice.png', 'assets/ui/nine-slice.json');
    }

    create ()
    {
        const bar1 = this.add.nineslice(400, 200, 'ui', 'ButtonOrange');
        const fill1 = this.add.nineslice(286, 198, 'ui', 'ButtonOrangeFill1', 13, 39, 6, 6);

        fill1.setOrigin(0, 0.5);

        const bar2 = this.add.nineslice(400, 400, 'ui', 'ButtonOrange');
        const fill2 = this.add.nineslice(286, 398, 'ui', 'ButtonOrangeFill2', 13, 39, 6, 6);

        fill2.setOrigin(0, 0.5);

        this.tweens.add({
            targets: fill1,
            width: 228,
            duration: 3000,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1,
        });

        this.tweens.add({
            targets: fill2,
            width: 228,
            duration: 2000,
            ease: 'bounce.out',
            yoyo: true,
            repeat: -1,
            hold: 1000
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#00746b',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
