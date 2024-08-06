class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/spookysky.jpg');
    }

    create ()
    {
        const img = this.add.image(window.innerWidth/2,window.innerHeight/2, 'bg');

        img.setScale(1).setDisplaySize(window.innerWidth,window.innerHeight);
    }
}

const config = {
    type: Phaser.WEBGL,
    roundPixels: true,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    backgroundColor: '#00ff00',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);