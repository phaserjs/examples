class Example extends Phaser.Scene
{
    group;
    sprite;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        this.sprite = this.physics.add.image(400, 300, 'mushroom');

        this.group = this.physics.add.staticGroup({
            key: 'ball',
            frameQuantity: 30
        });

        Phaser.Actions.PlaceOnRectangle(this.group.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));

        //  We need to call this because placeOnRectangle has changed the coordinates of all the children
        //  If we don't call it, the static physics bodies won't be updated to reflect them
        this.group.refresh();

        this.sprite.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true).setGravityY(200);

        this.physics.add.collider(this.sprite, this.group);
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
