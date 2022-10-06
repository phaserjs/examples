class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.x = 200;
        this.y = 16;
    }

    preload ()
    {
        for (let i = 1; i <= 32; i++)
        {
            this.load.image(`pixel${i}`, `assets/tests/pixels/${i}.png`);
        }
    }

    create ()
    {
        let total = this.addSprites();

        const debug = this.add.text(16, 16, `Sprites: ${total}`).setDepth(1);

        this.input.on('pointerdown', () => {

            total += this.addSprites();

            debug.setText([
                `Sprites: ${total}`
            ]);

        });
    }

    addSprites (qty = 32)
    {
        for (let i = 1; i <= qty; i++)
        {
            this.add.image(this.x, this.y, `pixel${i}`).setOrigin(0);

            this.x += 2;

            if (this.x >= 712)
            {
                this.x = 200;
                this.y += 4;
            }
        }

        return qty;
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
