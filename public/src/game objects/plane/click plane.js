class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient13.png');

        this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const frames = this.textures.get('cards').getFrameNames();

        //  Create random cards, with random rotations

        this.cards = [];

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            const card = this.add.plane(x, y, 'cards', Phaser.Utils.Array.GetRandom(frames));

            card.rotateX = Phaser.Math.Between(0, 360);
            card.rotateZ = Phaser.Math.Between(0, 360);
            card.rotateY = Phaser.Math.Between(0, 360);

            card.setInteractive();

            card.on('pointerdown', () => {

                card.setTint(0x00ff00);

            });

            this.cards.unshift(card);
        }
    }

    update ()
    {
        this.cards.forEach(card => {

            card.rotateX += 0.2;
            card.rotateY += 0.3;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a440a',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
