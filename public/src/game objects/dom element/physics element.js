class Example extends Phaser.Scene
{
    group;
    element;

    preload ()
    {
        this.load.html('smalldiv', 'assets/text/smallDiv.html');
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        this.element = this.add.dom(400, 300).createFromCache('smalldiv');

        this.physics.add.existing(this.element, false);

        this.group = this.physics.add.group({
            key: 'ball',
            frameQuantity: 30,
            immovable: true
        });

        Phaser.Actions.PlaceOnRectangle(this.group.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));

        this.element.body.setOffset(-(this.element.displayWidth / 2), -(this.element.displayHeight / 2));
        this.element.body.setVelocity(100, 200);
        this.element.body.setBounce(1, 1);
        this.element.body.setCollideWorldBounds(true);
    }

    update ()
    {
        this.physics.world.collide(this.element, this.group);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    dom: {
        createContainer: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
