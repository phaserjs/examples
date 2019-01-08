var config = {
    type: Phaser.AUTO,
    backgroundColor: '#2dab2d',
    scale: {
        mode: Phaser.DOM.CONTAIN,
        width: 800,
        height: 600,
        min: {
            width: 800,
            height: 600
        },
        max: {
            width: 1600,
            height: 1200
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
    this.game.canvas.style.backgroundColor = 'red';

    this.load.image('pic', 'assets/pics/zero-two.png');
}

function create ()
{
    this.add.image(0, 0, 'pic').setOrigin(0);

    // var a = new Phaser.Structs.Size(800, 600, true, false);

    var a = new Phaser.Structs.Size(800, 600, true, true);

    console.log(a.toString());

    a.setMin(400, 300);
    // a.setMax(1600, 1200);

    a.setMax(1000, 1200);

    // a.setAspectRatioLock(true);

    // a.setWidth(2000);
    // a.setHeight(768);
    // a.setSize(1024, 768);

    a.setHeight(1500);

    console.log(a.toString());

    // console.log(a.toString());


}
