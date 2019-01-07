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

    this.tweens.add({
        targets: data,
        duration: 3000,
        ease: 'Sine.easeInOut',
        yoyo: true,
        repeat: -1,
        props: {
            r: {
                value: 0.05
            },
            s: {
                value: 0.0012
            },
            sx: {
                value: 2.5
            },
            y: {
                value: 400,
                duration: 4000
            }
        }
    });
}

function update ()
{
    var children = group.getChildren();

    Phaser.Actions.Rotate(children, data.r, data.s);
    Phaser.Actions.SetScale(children, data.sx, data.sx, data.s, data.s);
    Phaser.Actions.SetXY(children, data.x, data.y, data.s, data.s);
}
