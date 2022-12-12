class Example extends Phaser.Scene
{
    block;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.block = this.physics.add.image(0, 0, 'block').setVelocity(150, 150);
    }

    update ()
    {
        this.physics.world.wrap(this.block, 48);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade'
    },
    scene: Example
};

const game = new Phaser.Game(config);
