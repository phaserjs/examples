class Example extends Phaser.Scene
{
    seed = 1419463258969;

    create ()
    {
        console.log(`RNG: ${Phaser.Math.RND.state()}`);

        const text = this.add.text(80, 80, '', { font: '16px Courier', fill: '#ffffff' });

        //  Every time you reload the page you should get the same values back again
        //  because the RNG was seeded in the Game Config with the same seed value.
        //  Adjust the seed for different results. Remove it for random results.

        const shuffleTest = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];

        this.input.on('pointerdown', () => {

            text.setText([
                'RNG',
                '---',
                `Seed: ${this.seed}`,
                '',
                `Between 0 and 50: ${Phaser.Math.RND.between(0, 50)}`,
                `Between 0 and 1: ${Phaser.Math.RND.realInRange(0, 1)}`,
                `Normal: ${Phaser.Math.RND.normal()}`,
                `UUID: ${Phaser.Math.RND.uuid()}`,
                `Angle: ${Phaser.Math.RND.angle()}`,
                `Shuffle: ${Phaser.Math.RND.shuffle(shuffleTest).join(' ')}`
            ]);

            console.log(`RNG: ${Phaser.Math.RND.state()}`);

        });

        text.setText([
            'RNG',
            '---',
            `Seed: ${this.seed}`,
            '',
            `Between 0 and 50: ${Phaser.Math.RND.between(0, 50)}`,
            `Between 0 and 1: ${Phaser.Math.RND.realInRange(0, 1)}`,
            `Normal: ${Phaser.Math.RND.normal()}`,
            `UUID: ${Phaser.Math.RND.uuid()}`,
            `Angle: ${Phaser.Math.RND.angle()}`,
            `Shuffle: ${Phaser.Math.RND.shuffle(shuffleTest).join(' ')}`
        ]);

        console.log(`RNG: ${Phaser.Math.RND.state()}`);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    seed: '!rnd,1,0.2889960983302444,0.9171234022360295,0.7489350214600563',
    scene: Example
};

const game = new Phaser.Game(config);
