class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('melon', 'assets/sprites/watermelon.png');
        this.load.image('yune', 'assets/sprites/yune.png');
        this.load.image('star', 'assets/sprites/star.png');
        this.load.image('128', 'assets/sprites/atari400.png');
    }

    create ()
    {
        // const pipeline = this.renderer.pipelines.getPostPipeline('GlowFX');
        // const pipeline = 'GlowFX';
        // const pipeline = 'ShadowFX';
        // const pipeline = 'PixelateFX';
        // const pipeline = 'VignetteFX';
        const pipeline = 'ShineFX';

        const melon = this.add.image(100, 300, 'melon');
        const yune = this.add.image(400, 300, 'yune');
        const grid = this.add.image(400, 300, '128');
        const star = this.add.image(700, 300, 'star');

        const c = this.add.container(0, 0);
        c.add([ melon, yune, grid, star ]);
        c.setPostPipeline(pipeline);

        // melon.setPostPipeline(pipeline);
        // yune.setPostPipeline(pipeline);
        // grid.setPostPipeline(pipeline);
        // star.setPostPipeline(pipeline);

        this.tweens.add({
            targets: star,
            angle: 360,
            duration: 2500,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
