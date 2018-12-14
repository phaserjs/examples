var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{

    var graphics = this.add.graphics({ lineStyle: { width: 3, color: 0x2266aa } });

    var vector = new Phaser.Math.Vector2(250, 0);

    var text = this.add.text(50, 50, '');

    this.input.on('pointermove', function (pointer) {

        //set relative to center
        vector.x = pointer.x - 400;
        vector.y = pointer.y - 300;

        redraw();
    });

    redraw();

    function redraw()
    {
        graphics.clear();

        // normalized vector will always have a magnitude of 1
        vector.normalize();

        text.setText('Normalized vector: ' + vector.x + '/' + vector.y);

        // we can multiply it with desired length to get desired magnitude
        vector.x *= 200
        vector.y *= 200;

        // this will always draw a line that's 200 px long
        graphics.lineBetween(400, 300, 400 + vector.x, 300 + vector.y);
    }
}
