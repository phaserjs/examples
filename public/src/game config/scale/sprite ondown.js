var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    resolution: window.devicePixelRatio,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
}

function create ()
{
    this.cameras.main.setBackgroundColor('#8989dd').setZoom(2);

    var sprite = this.add.sprite(400, 300, 'eye').setInteractive();

    sprite.on('pointermove', function () {

        this.setTint(Math.random() * 16000000);

    })
}
