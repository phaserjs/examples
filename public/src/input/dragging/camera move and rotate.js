class Example extends Phaser.Scene
{
    controls;
    cards;

    preload ()
    {
        this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
    }

    create ()
    {
        //  Create a stack of random cards
        this.cards = this.add.group();

        const frames = this.textures.get('cards').getFrameNames();

        for (let i = 0; i < 200; i++)
        {
            const x = Phaser.Math.Between(0, 2048);
            const y = Phaser.Math.Between(0, 1200);

            const image = this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames));

            image.setInteractive();

            image.setScale(Phaser.Math.FloatBetween(0.25, 1.0));

            image.setScrollFactor(image.scaleX);

            image.setDepth(image.scrollFactorX);

            image.setAngle(Phaser.Math.Between(0, 359));

            this.input.setDraggable(image);

            this.cards.add(image);
        }

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            acceleration: 0.04,
            drag: 0.0005,
            maxSpeed: 0.7
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

        this.cameras.main.setBounds(0, 0, 2048, 1200);
    }

    update (time, delta)
    {
        this.controls.update(delta);

        Phaser.Actions.Rotate(this.cards.getChildren(), 0.01);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
