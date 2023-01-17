class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.image('platform', 'assets/particles/platform.png');
        this.load.image('slime', 'assets/particles/slime.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        //  Picks a random value between the first and second array elements
        this.add.particles(0, 0, 'slime', {
            x: { random: [ 80, 720 ] },
            lifespan: 2500,
            gravityY: 200,
            frequency: 80,
            scale: { min: 0.6, max: 1.1 },
            blendMode: 'ADD'
        });

        this.add.image(-100, 0, 'platform').setOrigin(0, 0);
        this.add.image(412, 0, 'platform').setOrigin(0, 0);
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
