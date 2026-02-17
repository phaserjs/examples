class Example extends Phaser.Scene
{
    image;

    preload ()
    {
        this.load.image('pic', 'assets/pics/the-end-by-iloe-and-made.jpg');
        this.load.image('phaser-logo', 'assets/sprites/phaser.png');
    }

    create ()
    {
        const image = this.add.image(640, 360, 'pic')
        .setScale(2);

        const text = this.add.text(160, 650, 'AddEffectBloom', { font: '32px Arial', fill: '#88ffff' })
        .setOrigin(0.5)
        .setScrollFactor(0);

        const phaserLogo = this.add.image(1120, 650, 'phaser-logo')
        .setScrollFactor(0);

        const { parallelFilters } = Phaser.Actions.AddEffectBloom(
            this.cameras.main,
            { blendAmount: 2 }
        );

        this.tweens.add({
            targets: parallelFilters.blend,
            amount: 0,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
    }

    update (time, _delta)
    {
        this.cameras.main.setScroll(
            512 * Math.cos(time / 5000),
            512 * Math.sin(time / 5000)
        );
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 1280,
    height: 720,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
