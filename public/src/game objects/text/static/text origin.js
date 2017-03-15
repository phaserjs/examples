var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: {
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var text;
var i = 0;

function create() 
{
    var graphics = this.add.graphics();

    text = this.add.text(400, 300, 'Phaser 3 - 0', { font: '64px Arial', fill: '#ffff00' });

    //  Draw grid lines

    graphics.lineStyle(2, 0x00ff00, 0.5);

    graphics.beginPath();

    graphics.moveTo(400, 0);
    graphics.lineTo(400, 600);

    graphics.moveTo(0, 300);
    graphics.lineTo(800, 300);

    graphics.strokePath();

    graphics.closePath();
}

function update ()
{
    i++;
    text.setText('Phaser 3 - ' + i.toString());
    text.rotation += 0.01;
}