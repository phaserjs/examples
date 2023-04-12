class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
    }

    create ()
    {
        this.createCards();

        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {

            gameObject.destroy();

        });
    }

    createCards ()
    {
        const frames = this.textures.get('cards').getFrameNames();

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);
            const s = Phaser.Math.FloatBetween(0.5, 1);

            this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames)).setScale(s).setInteractive();
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
