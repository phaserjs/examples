class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('blue', 'assets/particles/blue.png');
    }

    create ()
    {
        this.matter.world.setBounds(0, 0, 800, 550);

        for (let i = 0; i < 256; i++)
        {
            const particle = this.matter.add.image(
                Phaser.Math.Between(0, 800),
                Phaser.Math.Between(0, 400),
                'blue', null,
                { shape: { type: 'polygon', radius: 18 }, ignorePointer: true }
            );

            particle.setScale(0.8);
            particle.setBlendMode('ADD');
            particle.setFriction(0.005);
            particle.setBounce(0.8);
            particle.setMass(1);
        }

        this.matter.add.image(400, 0, 'block').setBounce(0.8).setMass(60);

        this.matter.add.mouseSpring();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    physics: {
        default: 'matter'
    },
    scene: Example
};

const game = new Phaser.Game(config);
