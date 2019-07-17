var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#cdcdcd',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        pack: {
            files: [
                { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/SpinePlugin.js', sceneKey: 'spine' }
            ]
        }
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setPath('assets/spine/coin');

    this.load.spine('coin', 'coin-pro.json', 'coin.atlas');
}

function create ()
{
    var b = this.add.spine(400, 200, 'coin', 'animation', true).setScale(1);

    this.physics.add.existing(b);

    b.body.setVelocity(100, 200);
    b.body.setBounce(1, 1);
    b.body.setCollideWorldBounds(true);

    b.setScale(0.25);
}
