class Example extends Phaser.Scene
{
    bubbles = [];
    rt;

    preload ()
    {
        this.load.image('bubble', 'assets/particles/bubble.png');
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {
        this.rt = this.make.renderTexture({ width: 100, height: 100 }, false);

        this.rt.draw('bubble', 0, 0);
        this.rt.draw('dude', 20, 14);

        const t = this.rt.saveTexture('bubbleboy');

        for (let i = 0; i < 100; i++)
        {
            const b = this.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), 'bubbleboy');

            this.bubbles.push(b);
        }

        this.input.on('pointerup', () =>
        {

            this.rt.setSize(50, 50);

            this.rt.draw('bubble', 0, 0);
            this.rt.draw('dude', 20, 14);

        }, this);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
