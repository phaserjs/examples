class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('atari', 'assets/sprites/atari130xe.png');
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        const atari = this.physics.add.image(200, 400, 'atari').setImmovable(true);

        //  In this example the new collision box is smaller than the original sprite

        //  220x104 original size, 110x52 new size, the 'true' argument means "center it on the gameobject"
        atari.setSize(110, 52, true);

        //  And this sprite will collide with it
        const mushroom1 = this.physics.add.image(700, 350, 'mushroom');
        const mushroom2 = this.physics.add.image(200, 50, 'mushroom');

        mushroom1.setVelocity(-100, 0);
        mushroom2.setVelocity(0, 100);

        this.physics.add.collider(atari, [ mushroom1, mushroom2 ]);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
