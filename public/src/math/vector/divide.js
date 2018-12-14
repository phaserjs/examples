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
    var graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

    var vec = new Phaser.Math.Vector2(1.2, 1.2);

    this.input.on('pointermove', function(pointer) {
        vec.setTo(1.01 + pointer.x / 800, 1.01 + pointer.y / 600);
        redraw();
    });

    redraw();

    function redraw()
    {
        graphics.clear();

        var screenVector = new Phaser.Math.Vector2(800, 600);

        while(screenVector.x > 10 || screenVector.y > 10)
        {
            graphics.fillPointShape(screenVector, 20);

            screenVector.divide(vec);
        }
    }
}
