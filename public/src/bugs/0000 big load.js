class Demo extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        for (let i = 0; i < 10000; i++)
        {
            this.load.image(`block${i}`, 'https://labs.phaser.io/assets/sprites/128x128-v2.png');
        }
    }

    create ()
    {
        this.add.sprite(200, 300, 'block0');
        this.add.sprite(400, 300, 'block5000');
        this.add.sprite(600, 300, 'block9999');
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: Demo
};

const game = new Phaser.Game(config);
