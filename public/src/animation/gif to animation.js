var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var group;

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
    this.anims.create({ key: 'swish', frames: this.anims.generateFrameNames('sao', { start: 0, end: 50 }), repeat: -1 });

    group = this.add.group();

    group.createMultiple({ key: 'sao', repeat: 10, setXY: { x: 400, y: 300 }, setAlpha: { value: 0, step: 0.05 } });

    group.playAnimation('swish');

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
    var children = group.getChildren();

    Phaser.Actions.Rotate(children, data.r, data.s);
    Phaser.Actions.SetScale(children, data.sx, data.sx, data.s, data.s);
    Phaser.Actions.SetXY(children, data.x, data.y, data.s, data.s);
}
