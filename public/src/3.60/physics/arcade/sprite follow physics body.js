class Example extends Phaser.Scene
{
    block;
    flower;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('flower', 'assets/sprites/flower-exo.png');
    }

    create ()
    {
        this.block = this.physics.add.image(400, 100, 'block')
            .setVelocity(100, 200)
            .setBounce(1, 1)
            .setCollideWorldBounds(true);

        this.flower = this.add.image(0, 0, 'flower');
    }

    update ()
    {
        Phaser.Display.Bounds.SetCenterX(this.flower, this.block.body.center.x);
        Phaser.Display.Bounds.SetBottom(this.flower, this.block.body.top);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: { debug: true }
    },
    scene: Example
};

const game = new Phaser.Game(config);




