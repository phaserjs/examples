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

    var text = this.add.text(10, 10, 'Click the sprite', { font: '16px Courier', fill: '#000000' });

    this.input.on('pointerdown', function () {

        text.setText('');

    });

    sprite.on('pointerdown', function () {

        text.setText('Clicked Sprite');

    });
}
