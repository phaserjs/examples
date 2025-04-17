class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bg1', 'assets/skies/deepblue.png');
        this.load.image('bg2', 'assets/skies/wtf.png');
        this.load.image('splat', 'assets/pics/splat1.png');
        this.load.image('circle', 'assets/pics/mask.png');
        this.load.image('atari', 'assets/sprites/atari130xe.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg1');

        const container = this.add.container(400, 300);

        const bg = this.add.image(0, 0, 'bg2');

        const child1 = this.add.image(-120, 0, 'atari');
        const child2 = this.add.image(120, 0, 'atari');

        const splat = this.make.image({ x: 400, y: 300, key: 'splat', add: false });
        const circle = this.make.image({ x: 300, y: 300, key: 'circle', add: false });

        container.add([ bg, child1, child2 ]);

        container.enableFilters();
        container.filters.external.addMask(splat);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
