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
        this.sprite = this.physics.add.image(400, 300, 'mushroom')
            .setVelocity(100, 200)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .setGravityY(200);

        this.group = this.physics.add.staticGroup({
            key: 'ball',
            frameQuantity: 30
        });

        Phaser.Actions.PlaceOnRectangle(this.group.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));

        this.group.refresh();

        this.physics.add.overlap(this.sprite, this.group);
    }

    update ()
    {
        this.sprite.body.debugBodyColor = this.sprite.body.touching.none ? 0x0099ff : 0xff9900;
    }
}

const config = {
    type: Phaser.AUTO,
    antialias: false,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {debug: true}
    },
    scene: Example
};

const game = new Phaser.Game(config);
