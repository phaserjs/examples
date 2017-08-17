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
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    //  Calling this with no arguments will set the bounds to match the game config width/height
    this.physics.world.setBounds();

    //  Create a Text object
    var text = this.add.text(0, 0, 'Phaser 3', { font: '64px Arial', fill: '#00ff00' });

    //  If you don't set the body as active it won't collide with the world bounds
    //  Set the Game Object we just created as being bound to this physics body
    this.physics.add.body(300, 300).setGameObject(text).setActive().setVelocity(300, 200).setBounce(1);
}
