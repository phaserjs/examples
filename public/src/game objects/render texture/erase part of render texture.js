var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
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
    // this.load.image('test', 'assets/sprites/mask1.png');
    this.load.image('test', 'assets/sprites/brush1.png');
    this.load.image('soil', 'assets/textures/soil.png');
    this.load.image('tiles', 'assets/textures/tiles.jpg');
}

function create ()
{
    // this.add.image(0, 0, 'tiles').setOrigin(0);

    var rt = this.add.renderTexture(0, 0, 1400, 1200);

    for (var y = 0; y < 4; y++)
    {
        for (var x = 0; x < 4; x++)
        {
            rt.draw('soil', x * 512, y * 512);
        }
    }

    var brush = this.make.image({ key: 'test' }, false);

    var gl = this.sys.game.renderer.gl;

    var sfactor = gl.ZERO;
    var dfactor = gl.ONE_MINUS_SRC_ALPHA;
    var equation = gl.FUNC_ADD;

    var newMode = [ sfactor, dfactor ];

    var renderer = this.sys.game.renderer;

    var modeIndex = renderer.addBlendMode(newMode, equation);

    brush.setBlendMode(modeIndex);

    rt.draw(brush, 100, 100);
    rt.draw(brush, 300, 100);

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        acceleration: 0.06,
        drag: 0.0005,
        maxSpeed: 1.0
    };

    controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

    // this.add.text(10, 10, 'Cursors to move', { font: '16px Courier', fill: '#ffffff' }).setScrollFactor(0);
}

function update (time, delta)
{
    controls.update(delta);
}
