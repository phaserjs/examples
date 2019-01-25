var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('wheel', 'assets/pics/uv-grid-diag.png');
}

function create ()
{
    this.add.image(0, 0, 'wheel').setOrigin(0);

    var g = this.add.graphics();

    this.input.on('pointerdown', function (pointer) {

        this.game.renderer.getPixel(pointer.x, pointer.y, function (pixel)
        {
            console.log(pixel);

            var c = new Phaser.Display.Color(pixel[0], pixel[1], pixel[2]);

            g.clear();
            g.fillStyle(c.color);
            g.fillRect(200, 200, 128, 128);

        });

    }, this);
}
