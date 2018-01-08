var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#9e0b0f',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('makoto', 'assets/pics/makoto.png');
}

function create ()
{
    var style = { font: '16px Courier', fill: '#ffffff' };

    this.add.text(10, 10, 'Interact with the Sprite', style);

    this.add.sprite(400, 300, 'makoto').setInteractive();

    var overText = this.add.text(10, 50, 'OVER: false', style);
    var downText = this.add.text(10, 70, 'DOWN: false', style);
    var upText = this.add.text(10, 90, 'UP: false', style);
    var outText = this.add.text(10, 110, 'OUT: false', style);

    this.input.events.on('GAME_OBJECT_OVER_EVENT', function (event) {

        console.log('over');
        overText.setText('OVER: true');
        outText.setText('OUT: false');

    });

    this.input.events.on('GAME_OBJECT_OUT_EVENT', function (event) {

        console.log('out');
        outText.setText('OUT: true');
        overText.setText('OVER: false');

    });

    this.input.events.on('GAME_OBJECT_DOWN_EVENT', function (event) {

        console.log('down');
        downText.setText('DOWN: true');
        upText.setText('UP: false');

    });

    this.input.events.on('GAME_OBJECT_UP_EVENT', function (event) {

        console.log('up');
        upText.setText('UP: true');
        downText.setText('DOWN: false');

    });
}
