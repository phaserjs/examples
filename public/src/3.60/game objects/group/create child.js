class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('phaser', 'assets/sprites/phaser2.png');
    }

    create ()
    {
        const group = this.add.group();

        //  Create a Sprite via the group.

        //  The Sprite is added to the Scene display list, and to the group, at the same time.

        group.create(400, 300, 'phaser');

        //  The above is a short-cut for:
        //  var sprite = this.add.sprite(400, 300, 'phaser');
        //  group.add(sprite);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
