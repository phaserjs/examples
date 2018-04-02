var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    },
    width: 800,
    height: 600
};

var game = new Phaser.Game(config);

var rt;
var blast;
var nuke;

function preload() 
{
    this.load.image('fire', 'assets/particles/muzzleflash3.png');
    this.load.image('smoke', 'assets/particles/smoke-puff.png');
}

function create() 
{
    rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 }).setOrigin(0, 0);

    blast = this.add.follower(null, 50, 350, 'smoke');

    nuke = this.tweens.add({
        targets: blast,
        scaleX: 8,
        scaleY: 8,
        alpha: 0,
        duration: 1000,
        ease: "Bounce.easeIn",
        onComplete: function () { rt.clear(); blast.alpha = 0 },
        paused: true
    });

    nuke.setCallback('onUpdate', draw, [], this);

    this.input.on('pointerdown', function (pointer)
    {

        explode(pointer.x, pointer.y);

    }, this);
}

function explode(x, y) 
{
    blast.x = x;
    blast.y = y;
    blast.setScale(0.5);
    blast.alpha = 1;

    var curve = new Phaser.Curves.Spline([200, 500, 600, 500, 625, 475, 200, 500, 400, 500, 400, 250]);

    blast.setPath(curve);
    blast.startFollow(200);

    nuke.play();
}

function draw() 
{
    rt.save();

    var crot = Math.cos(blast.rotation + Math.random() * 2);
    var srot = Math.sin(blast.rotation + Math.random() * 2);

    var rand = Math.random() * 2;

    var sx = blast.scaleX + rand;
    var sy = blast.scaleY + rand;

    if (Math.random() < 0.8)
    {
        blast.setTexture('fire');
    } else
    {
        blast.setTexture('smoke');
    }

    rt.currentMatrix = [crot * sx, srot, -srot, crot * sy, blast.x, blast.y];

    rt.setAlpha(blast.alpha);
    rt.draw(blast.texture, blast.frame, -blast.width / 2, -blast.height / 2);
    rt.restore();
}