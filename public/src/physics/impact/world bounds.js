var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        system: 'impact',
        gravity: 100,
        maxVelocityX: 500,
        maxVelocityY: 500
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('gem', 'assets/sprites/gem.png');
}

function create ()
{
    //  Calling this with no arguments will set the bounds to match the game config width/height
    this.physics.world.setBounds();

    //  If you don't set the body as active it won't collide with the world bounds
    this.physics.add.image(300, 300, 'gem').setActive().setVelocity(300, 200).setBounce(1);
}
