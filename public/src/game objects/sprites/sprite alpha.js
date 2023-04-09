class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        const bunny = this.add.sprite(400, 300, 'bunny');

        bunny.alpha = 0.5;
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
