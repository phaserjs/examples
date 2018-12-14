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

    var multiplyVector = new Phaser.Math.Vector2(1.2, 1.2);

    this.input.on('pointermove', function(pointer) {
        multiplyVector.set(1.01 + pointer.x / 800, 1.01 + pointer.y / 600);
        redraw();
    });

    redraw();

    function redraw()
    {
        graphics.clear();

        var vec = new Phaser.Math.Vector2(8, 6);

        while(vec.x < 800 && vec.y < 600)
        {
            graphics.fillPointShape(vec, 20);

            vec.multiply(multiplyVector);
        }
    }
}
