let bunny;

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        bunny = this.add.sprite(-150, 300, 'bunny');
    }

    update ()
    {
        bunny.x += 2;

        if (bunny.x > 950)
        {
            bunny.x = -150;
        }
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
