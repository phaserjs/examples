var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var layer;

var data = {
    r: -0.05,
    s: -0.0012,
    sx: 0.25,
    x: 400,
    y: 100
};

function preload ()
{
    this.load.path = 'assets/animations/';

    this.load.multiatlas('sao', 1);
}

function create ()
{
    this.anims.create('swish', { frames: this.anims.generateFrameNames('sao', { start: 0, end: 50 }), repeat: -1 });

    layer = this.add.layer();

    layer.createMultiple({ key: 'sao', repeat: 10, setXY: { x: 400, y: 300 }, setAlpha: { value: 0, step: 0.05 } });

    layer.playAnimation('swish');

    TweenMax.to(data, 3, {
        r: 0.05,
        s: 0.0012,
        sx: 2.5,
        ease: Sine.easeInOut,
        repeat: -1,
        yoyo: true
    });

    TweenMax.to(data, 4, {
        y: 400,
        ease: Sine.easeInOut,
        repeat: -1,
        yoyo: true
    });

}

function update ()
{
    layer.rotate(data.r, data.s);
    layer.setScale(data.sx, data.sx, data.s, data.s);
    layer.setXY(data.x, data.y, data.s, data.s);
}
