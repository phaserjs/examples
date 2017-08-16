var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    pixelArt: true,
    physics: {
        system: 'impact',
        gravity: 50,
        maxVelocityX: 800,
        maxVelocityY: 800,
        debug: true
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
    this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
}

function create ()
{
    var wallThickness = 64;
    var sides = (wallThickness * 2) + 96;
    var worldBounds = new Phaser.Geom.Rectangle(0, 0, (800 * 16), (600 * 16));
    var spriteBounds = Phaser.Geom.Rectangle.Inflate(Phaser.Geom.Rectangle.Clone(worldBounds), -sides, -sides);

    this.anims.create({ key: 'diamond', frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }), repeat: -1 });
    this.anims.create({ key: 'prism', frames: this.anims.generateFrameNames('gems', { prefix: 'prism_', end: 6, zeroPad: 4 }), repeat: -1 });
    this.anims.create({ key: 'ruby', frames: this.anims.generateFrameNames('gems', { prefix: 'ruby_', end: 6, zeroPad: 4 }), repeat: -1 });
    this.anims.create({ key: 'square', frames: this.anims.generateFrameNames('gems', { prefix: 'square_', end: 14, zeroPad: 4 }), repeat: -1 });

    //  Create loads of random sprites

    var anims = [ 'diamond', 'prism', 'ruby', 'square' ];

    for (var i = 0; i < 1000; i++)
    {
        var pos = Phaser.Geom.Rectangle.Random(spriteBounds);

        var block = this.physics.add.sprite(pos.x, pos.y, 'gems');

        block.setActive().setAvsB().setBounce(1);

        block.setVelocity(Phaser.Math.Between(200, 400), Phaser.Math.Between(200, 400));

        if (Math.random() > 0.5)
        {
            block.vel.x *= -1;
        }
        else
        {
            block.vel.y *= -1;
        }

        block.play(Phaser.Math.RND.pick(anims));
    }

    //  ceiling
    this.physics.add.body(0, 0, worldBounds.width, wallThickness).setFixed().setGravity(0);

    //  floor
    this.physics.add.body(0, worldBounds.height - wallThickness, worldBounds.width, wallThickness).setFixed().setGravity(0);

    //  walls
    this.physics.add.body(0, wallThickness, wallThickness, worldBounds.height - (wallThickness * 2)).setFixed().setGravity(0);
    this.physics.add.body(worldBounds.right - wallThickness, wallThickness, wallThickness, worldBounds.height - (wallThickness * 2)).setFixed().setGravity(0);

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
        maxSpeed: 10.0
    };

    controls = this.cameras.addSmoothedKeyControl(controlConfig);

    this.cameras.main.setBounds(0, 0, worldBounds.width, worldBounds.height);

    this.add.text(0, 0, 'Use Cursors to scroll camera.\nQ / E to zoom in and out', { font: '18px Courier', fill: '#00ff00' });
}

function update (time, delta)
{
    controls.update(delta);
}
