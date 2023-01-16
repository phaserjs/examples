class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.image('platform', 'assets/particles/platform.png');
        this.load.image('pipe', 'assets/particles/pipe.png');
        this.load.image('slime', 'assets/particles/slime.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.image(-100, 0, 'platform').setOrigin(0, 0);
        this.add.image(412, 0, 'platform').setOrigin(0, 0);

        //  This emitter will randomly emit a particle from one of the x coordinates in the given array
        //  which just so happen to align perfectly with the pipe sprites we positioned below
        this.add.particles(0, 150, 'slime', {
            x: [ 62, 162, 262, 538, 638, 738 ],
            lifespan: 2500,
            gravityY: 200,
            frequency: 80,
            scale: { min: 0.6, max: 1.1 },
            blendMode: 'ADD'
        });

        this.add.image(30, 10, 'pipe').setOrigin(0, 0);
        this.add.image(130, 10, 'pipe').setOrigin(0, 0);
        this.add.image(230, 10, 'pipe').setOrigin(0, 0);

        this.add.image(506, 10, 'pipe').setOrigin(0, 0);
        this.add.image(606, 10, 'pipe').setOrigin(0, 0);
        this.add.image(706, 10, 'pipe').setOrigin(0, 0);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
