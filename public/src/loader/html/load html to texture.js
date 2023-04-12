class Example extends Phaser.Scene
{
    image;

    preload ()
    {
        this.load.htmlTexture('test1', 'assets/html/test1.html', 512, 512);
    }

    create ()
    {
        this.image = this.add.image(400, 300, 'test1').setOrigin(0);
    }

    update ()
    {
        this.image.rotation += 0.01;
    }
}

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
