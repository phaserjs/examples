var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('megaset', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');
}

function create ()
{
    var sprite = this.add.sprite(400, 300, 'megaset', 'mask-test2').setInteractive({ pixelPerfect: true });

    sprite.alpha = 0.6;

    sprite.on('pointerover', function () {

        sprite.alpha = 1;

    });

    sprite.on('pointerout', function () {

        sprite.alpha = 0.6;

    });
}
