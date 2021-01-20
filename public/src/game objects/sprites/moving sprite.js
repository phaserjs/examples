class Example extends Phaser.Scene
{
    constructor()
    {
        super();
        this.bunny = undefined;
    }

    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        this.bunny = this.add.sprite(-150, 300, 'bunny');
    }

    update ()
    {
        this.bunny.x += 2;

        if (this.bunny.x > 950)
        {
            this.bunny.x = -150;
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
