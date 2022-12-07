class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pixel', 'assets/sprites/16x16.png');
    }

    create ()
    {
        const image1 = this.add.image(300, 300, 'pixel').setAlpha(1);
        const image2 = this.add.image(400, 300, 'pixel').setAlpha(0.75);
        const image3 = this.add.image(500, 300, 'pixel').setAlpha(0.5);

        console.log(image1.alpha);
        console.log(image2.alpha);
        console.log(image3.alpha);
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
