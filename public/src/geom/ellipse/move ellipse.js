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
    var ellipse = new Phaser.Geom.Ellipse(400, 300, 300, 100);

    var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 } }).strokeEllipseShape(ellipse, 64);

    this.input.events.on('POINTER_MOVE_EVENT', function (event) {
    
        ellipse.x = event.x;
        ellipse.y = event.y;

        //  Redraw it
        graphics.clear();
        graphics.strokeEllipseShape(ellipse, 64);
    
    });
}
