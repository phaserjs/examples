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
var ball1;
var fireblast;

function preload()
{
    this.load.image('dude', 'assets/sprites/phaser-dude.png');
    this.load.image('fire', 'assets/particles/muzzleflash3.png');
}

function create()
{
    rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 }).setOrigin(0, 0);

    player = this.add.image(100, 300, 'dude');

    ball1 = this.add.follower(null, 50, 350, 'fire');

    fireblast = this.tweens.add({
        targets: ball1,
        scaleX: 3,
        scaleY: 3,        
        alpha: 0,
        duration: 300,
        ease: "Cubic.easeInOut",
        onComplete: function () { rt.clear(); ball1.alpha = 0 },
        paused: true
    });

    fireblast.setCallback('onUpdate', draw, [], this);

    this.input.on('pointerdown', function (pointer)
    {
        generate(pointer.x, pointer.y);
    }, this);
}

function generate(x, y)
{
    ball1.x = player.x;
    ball1.y = player.y;
    ball1.setScale(0.5);
    ball1.alpha = 1;

    curve = new Phaser.Curves.Line(new Phaser.Math.Vector2(player.x, player.y), new Phaser.Math.Vector2(x, y));

    ball1.setPath(curve);
    ball1.startFollow(300);
    
    fireblast.play();    
}

function draw()
{
    rt.save();

    var crot = Math.cos(ball1.rotation + Math.random());
    var srot = Math.sin(ball1.rotation + Math.random());

    var sx = ball1.scaleX + Math.random();
    var sy = ball1.scaleY + Math.random();

    rt.currentMatrix = [crot * sx, srot, -srot, crot * sy, ball1.x, ball1.y];

    rt.alpha = ball1.alpha;
    rt.draw(ball1.texture, ball1.frame, -ball1.width / 2, -ball1.height / 2);
    rt.restore();
}