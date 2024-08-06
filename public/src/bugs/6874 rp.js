class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/spookysky.jpg');
    }

    create ()
    {
        const img = this.add.image(400, 300, 'bg');

        img.setScale(1).setDisplaySize(800,600);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    roundPixels: true,
    backgroundColor: '#00ff00',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);