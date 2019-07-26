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

    this.load.spine('coin', 'coin-pro.json', 'coin-pma.atlas', true);

    // this.load.setPath('assets/spine/demos/');

    // this.load.spine('set1', 'demos.json', [ 'atlas1.atlas', 'atlas2.atlas', 'heroes.atlas' ], true);
}

function create ()
{
    // var b = this.add.spine(400, 500, 'set1.alien').setScale(0.5);
    // var b = this.add.spine(400, 500, 'set1.armorgirl').setScale(0.2);
    // var b = this.add.spine(400, 500, 'set1.dragon').setScale(0.5);
    // var b = this.add.spine(600, 750, 'set1.greengirl').setScale(0.8);
    // var b = this.add.spine(400, 500, 'set1.heroes').setSkinByName('Assassin');
    // var b = this.add.spine(400, 700, 'set1.orangegirl').setScale(1);
    // var b = this.add.spine(400, 500, 'set1.raptor').setScale(0.6);
    // var b = this.add.spine(400, 500, 'set1.spineboy').setScale(0.5);
    // var b = this.add.spine(400, 500, 'set1.stretchyman').setScale(0.4);
    // var b = this.add.spine(400, 500, 'set1.tank').setScale(0.1);
    // var b = this.add.spine(400, 500, 'set1.vine').setScale(0.5);


    var b = this.add.spine(400, 200, 'coin').setScale(1);

    // b.drawDebug = true;

    b.setInteractive();

    this.input.enableDebug(b, 0xff00ff);

    // this.physics.add.existing(b);

    // b.body.setVelocity(100, 200);
    // b.body.setBounce(1, 1);
    // b.body.setCollideWorldBounds(true);

    // b.setScale(0.25);
}
