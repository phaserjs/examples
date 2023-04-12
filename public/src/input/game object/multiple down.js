class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
    }

    create ()
    {
        this.createCards2();

        this.input.on('pointerdown', function (pointer)
        {

            console.log(this.game.getFrame(), 'pd', pointer.x, pointer.y);

            this.add.rectangle(pointer.x - 4, pointer.y - 4, 8, 8, 0xff00ff);

        }, this);

        this.input.on('pointerup', function (pointer)
        {

            this.add.rectangle(pointer.x - 4, pointer.y - 4, 8, 8, 0x00ff00);

        }, this);

        this.input.on('gameobjectdown', function (pointer, gameObject)
        {

            if (gameObject.alpha === 1)
            {
                this.tweens.add({
                    targets: gameObject,
                    alpha: 0,
                    scaleX: 0,
                    scaleY: 0
                });

                gameObject.disableInteractive();
            }

        }, this);

        this.input.on('gameobjectup', function (pointer, gameObject)
        {

            if (gameObject.alpha === 1)
            {
                this.tweens.add({
                    targets: gameObject,
                    alpha: 0,
                    scaleX: 0,
                    scaleY: 0
                });

                gameObject.disableInteractive();
            }

        }, this);
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

    createCards2 ()
    {
        const frames = this.textures.get('cards').getFrameNames();

        for (let y = 0; y < 8; y++)
        {
            for (let x = 0; x < 15; x++)
            {
                this.add.image(x * 56, y * 75, 'cards', Phaser.Math.RND.pick(frames)).setScale(0.4).setOrigin(0).setInteractive();
            }
        }
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
