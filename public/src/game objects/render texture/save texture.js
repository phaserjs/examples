class Example extends Phaser.Scene
{
    rt;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bubble', 'assets/particles/bubble.png');
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {
        this.rt = this.make.renderTexture({ width: 100, height: 100 }, false);

        this.rt.draw('bubble', 50, 50);
        this.rt.draw('dude', 50, 50);
        this.rt.render();

        const t = this.rt.saveTexture('bubbleboy');

        for (let i = 0; i < 100; i++)
        {
            this.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), 'bubbleboy');
        }
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
