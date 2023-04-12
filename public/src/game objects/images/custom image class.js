class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('contra', 'assets/pics/contra3.png');
    }

    create ()
    {
        this.children.add(new EnemyRobot(this, 264, 250));
        this.children.add(new EnemyRobot(this, 464, 350));
        this.children.add(new EnemyRobot(this, 664, 450));
    }
}

class EnemyRobot extends Phaser.GameObjects.Image
{
    constructor (scene, x, y)
    {
        super(scene);

        this.setTexture('contra');
        this.setPosition(x, y);
        this.setScale(2);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
