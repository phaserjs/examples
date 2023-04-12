class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('balls', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    }

    create ()
    {
        this.input.on('pointermove', function (pointer)
        {

            this.add.image(pointer.x, pointer.y, 'balls', Phaser.Math.Between(0, 5));

        }, this);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
