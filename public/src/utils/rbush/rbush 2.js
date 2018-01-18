var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        render: render
    }
};

var result;
var boxX = 0;
var boxY = 0;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('phaser', 'assets/sprites/diamond.png');
}

function create ()
{
    var tree = Phaser.Structs.RTree();

    var w = this.sys.textures.getFrame('phaser').width;
    var h = this.sys.textures.getFrame('phaser').height;

    for (var i = 0; i < 1000; i++)
    {
        var x = Phaser.Math.Between(0, 2000);
        var y = Phaser.Math.Between(0, 2000);

        var sprite = this.add.image(x, y, 'phaser').setOrigin(0);

        tree.insert({
            minX: x,
            minY: y,
            maxX: x + w,
            maxY: y + h,
            sprite: sprite,
            w: w,
            h: h
        });
    }

    result = tree.search({
        minX: 0,
        minY: 0,
        maxX: 256,
        maxY: 256
    });

    this.input.on('pointermove', function (pointer) {

        if (pointer.x < 800 && pointer.y < 600)
        {
            boxX = pointer.x;
            boxY = pointer.y;

            result = tree.search({
                minX: boxX,
                minY: boxY,
                maxX: boxX + 256,
                maxY: boxY + 256
            });
        }

    });
}

function render ()
{
    var ctx = this.sys.game.context;

    ctx.strokeStyle = 'rgba(255,255,255,1)';
    ctx.lineWidth = 2;
    ctx.strokeRect(boxX, boxY, 256, 256);

    ctx.fillStyle = 'rgba(255,0,0,0.5)';

    result.forEach(function(s) {

        ctx.fillRect(s.minX, s.minY, s.w, s.h);

    });
}
