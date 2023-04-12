class Example extends Phaser.Scene
{
    bubbles = [];
    rt;

    preload ()
    {
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {
        this.rt = this.add.renderTexture(40, 40, 80, 80);

        const circle = this.add.circle(0, 0, 40, 0x6666ff).setAlpha(0.5).setVisible(false);

        this.rt.draw(circle, 40, 40);
        this.rt.draw('dude', 24, 20);

        this.rt.saveTexture('bubbleboy');

        for (let i = 0; i < 50; i++)
        {
            const b = this.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), 'bubbleboy');

            this.bubbles.push(b);
        }

        this.input.on('pointerup', () =>
        {
            game.destroy(true);
        });
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
