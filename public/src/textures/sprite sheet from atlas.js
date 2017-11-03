var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.path = 'assets/atlas/trimsheet/';

    this.load.atlas('testanims', 'trimsheet.png', 'trimsheet.json');

    this.load.image('debug', 'trimsheet.png');
}

function create ()
{
    //  create a sprite sheet from a frame embedded in a texture atlas
    //  'boom' is the unique local name we'll give the sprite sheet
    //  'megaset' is the key of the texture atlas that contains the sprite sheet
    //  'explosion' is the name of the frame within the texture atlas
    //  The rest of the values are the sprite sheet frame sizes and offsets

    var t1 = this.textures.addSpriteSheetFromAtlas(
        'boom1',
        {
            atlas: 'testanims',
            frame: 'boomtest-notrim',
            frameWidth: 64,
            frameHeight: 64,
            endFrame: 23
        });

    console.log(t1);

    var cd = this.textures.createCanvas('dbg', 1536, 328);

    var t2 = this.textures.addSpriteSheetFromAtlas(
        'boom2',
        {
            atlas: 'testanims',
            frame: 'boomtest',
            frameWidth: 64,
            frameHeight: 64,
            endFrame: 23
        });

    console.log(t2);

    /*
    var canvas = cd.getSourceImage();
    var ctx = canvas.getContext('2d');

    window.ctx = ctx;

    var i = 0;

    for (var key in t2.frames)
    {
        var frame = t2.frames[key];

        //  Draw it to the debug canvas
        // ctx.fillStyle = '#00ff00';
        // ctx.fillRect(frame.cutX, frame.cutY, 1, 1);

        // ctx.fillStyle = '#0000ff';
        // ctx.fillRect(frame.cutX + frame.cutWidth, frame.cutY + frame.cutHeight, 1, 1);

        console.log(frame.cutX, frame.cutY, frame.cutWidth, frame.cutHeight);

        ctx.fillStyle = 'rgba(255,0,255,0.2)';
        ctx.strokeStyle = 'rgba(0,255,0,1)';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(frame.cutX + (frame.cutWidth - 2) + 0.5, frame.cutY + 0.5);
        ctx.lineTo(frame.cutX + 0.5, frame.cutY + 0.5);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(frame.cutX + 0.5, frame.cutY + 0.5);
        ctx.lineTo(frame.cutX + 0.5, frame.cutY + (frame.cutHeight - 2) + 0.5);
        ctx.stroke();
        ctx.closePath();

        i++;

        if (i === 10)
        {
            // break;
        }
    }

    this.add.image(100, 300, 'debug');
    this.add.image(100, 300, 'dbg');
    */


    //  There is a new texture available called 'boom1', which we can assign to game objects:

    var config1 = {
        key: 'explode1',
        frames: this.anims.generateFrameNumbers('boom1', { start: 0, end: 23, first: 23 }),
        frameRate: 2,
        repeat: -1
    };

    var config2 = {
        key: 'explode2',
        frames: this.anims.generateFrameNumbers('boom2', { start: 0, end: 23, first: 23 }),
        frameRate: 2,
        repeat: -1
    };

    this.anims.create(config1);
    this.anims.create(config2);

    this.add.sprite(300, 300).play('explode1');
    this.add.sprite(400, 300).play('explode2');
}
