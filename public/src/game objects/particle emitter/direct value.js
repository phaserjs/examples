class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('star', 'assets/demoscene/star3.png');
    }

    create ()
    {
        this.add.particles(400, 200, 'star', {
            speed: 100,
            lifespan: 3000,
            gravityY: 200
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
