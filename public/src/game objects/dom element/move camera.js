var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    dom: {
        createContainer: true
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var controls;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create ()
{
    //  Create a bunch of random divs all over the place
    for (var i = 0; i < 300; i++)
    {
        var div = document.createElement('div');

        var r1 = Phaser.Math.Between(0, 255);
        var g1 = Phaser.Math.Between(0, 255);
        var b1 = Phaser.Math.Between(0, 255);

        var r2 = Phaser.Math.Between(0, 255);
        var g2 = Phaser.Math.Between(0, 255);
        var b2 = Phaser.Math.Between(0, 255);

        var rgba1 = 'rgba(' + r1 + ',' + b1 + ',' + g1 + ',1) 0%,';
        var rgba2 = 'rgba(' + r2 + ',' + b2 + ',' + g2 + ',1) 100%';

        div.style = 'background: linear-gradient(180deg, ' + rgba1 + rgba2 + '); font: 48px Arial; font-weight: bold';
        div.innerText = '<div>';

        var x = Phaser.Math.Between(0, 4000);
        var y = Phaser.Math.Between(0, 4000);

        this.add.dom(x, y, div);
    }

    this.cameras.main.setBounds(0, 0, 4000, 4000);


    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
        zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
        acceleration: 0.06,
        drag: 0.0005,
        maxSpeed: 1.0
    };

    controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
}

function update (time, delta)
{
    controls.update(delta);
}
