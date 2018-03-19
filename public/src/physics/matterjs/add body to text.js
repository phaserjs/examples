var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('platform', 'assets/sprites/platform.png');
}

function create ()
{
    var text = this.add.text(200, 10, 'Phaser 3', { font: '32px Arial', fill: '#00ff00' });

    var matterText = this.matter.add.gameObject(text);

    this.matter.add.image(400, 550, 'platform', null, { isStatic: true });
}
