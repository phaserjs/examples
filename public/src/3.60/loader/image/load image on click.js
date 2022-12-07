class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('buttonBG', 'assets/sprites/button-bg.png');
        this.load.image('buttonText', 'assets/sprites/button-text.png');
    }

    create ()
    {
        const bg = this.add.image(0, 0, 'buttonBG').setInteractive();
        const text = this.add.image(0, 0, 'buttonText');

        const container = this.add.container(400, 300, [ bg, text ]);

        bg.once('pointerup', this.loadImage, this);
    }

    loadImage ()
    {
        this.load.once('complete', this.addSprites, this);

        this.load.image('pic', 'assets/pics/turkey-1985086.jpg');
        this.load.image('titan', 'assets/pics/titan-mech.png');

        this.load.start();
    }

    addSprites ()
    {
        this.add.image(400, 300, 'pic');
        this.add.image(400, 300, 'titan');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
