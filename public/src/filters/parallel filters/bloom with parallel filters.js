class Example extends Phaser.Scene
{
    image;

    preload ()
    {
        this.load.image('phaser-logo', 'assets/sprites/phaser3-logo-x2.png');
    }

    create ()
    {
        const image = this.add.image(640, 360, 'phaser-logo');

        const text = this.add.text(640, 500, 'Bloom with Parallel Filters', { font: '32px Arial', fill: '#88ffff' }).setOrigin(0.5);

        const parallelFilters = this.cameras.main.filters.internal.addParallelFilters();
        parallelFilters.top.addThreshold(0.5, 1);
        parallelFilters.top.addBlur();
        parallelFilters.blend.blendMode = Phaser.BlendModes.ADD;
        parallelFilters.blend.amount = 0;

        this.tweens.add({
            targets: parallelFilters.blend,
            amount: 2,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
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
