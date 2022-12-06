class Example extends Phaser.Scene
{
    group;
    sprite;

    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        this.sprite = this.physics.add.image(400, 300, 'mushroom');

        this.group = this.physics.add.group({
            key: 'ball',
            frameQuantity: 30,
            immovable: true
        });

        Phaser.Actions.PlaceOnRectangle(this.group.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));

        this.sprite.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true).setGravityY(200);
    }

    update ()
    {
        this.physics.world.collide(this.sprite, this.group);
    }
}

const config = {
    type: Phaser.WEBGL,
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
