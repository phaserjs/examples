class Example extends Phaser.Scene
{
    preload ()
    {

        this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });

    }

    create ()
    {

        this.add.image(0, 0, 'diamonds', 0);
        this.add.image(64, 0, 'diamonds', 1);
        this.add.image(128, 0, 'diamonds', 2);
        this.add.image(32, 32, 'diamonds', 3);
        this.add.image(96, 32, 'diamonds', 4);

    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
