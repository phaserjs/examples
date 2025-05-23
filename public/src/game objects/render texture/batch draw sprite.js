class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('brush', 'assets/sprites/apple.png');
    }

    create ()
    {
        const rt = this.add.renderTexture(400, 300, 800, 600);

        const brush = this.add.image(0, 0, 'brush');

        for (let i = 0; i < 512; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            rt.draw(brush, x, y);
        }

        rt.render();
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
