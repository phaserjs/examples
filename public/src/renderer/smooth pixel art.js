class Example extends Phaser.Scene
{
    image;

    preload ()
    {
        this.load.image('einstein', 'assets/pics/ra-einstein.png');
    }

    create ()
    {
        this.image = this.add.image(400, 300, 'einstein');
    }

    update ()
    {
        this.image.rotation += 0.01;
        this.cameras.main.zoom = (2 + Math.sin(this.image.rotation)) * 2;
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example,

    // Enable the following to see aliased pixel art:
    // pixelArt: true,

    // Enable the following to see anti-aliased pixel art:
    smoothPixelArt: true
};

const game = new Phaser.Game(config);
