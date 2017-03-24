var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#ababab',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var d = 0;
var skelly;

var directions = {
    w: 0,
    nw: 32,
    n: 64,
    ne: 96,
    e: 128,
    se: 160,
    s: 192,
    sw: 224
};

var anims = {
    idle: {
        startFrame: 0,
        endFrame: 4,
        speed: 0.2
    },
    walk: {
        startFrame: 4,
        endFrame: 12,
        speed: 0.15
    },
    attack: {
        startFrame: 12,
        endFrame: 20,
        speed: 0.1
    },
    die: {
        startFrame: 20,
        endFrame: 28,
        speed: 0.2
    },
    shoot: {
        startFrame: 28,
        endFrame: 32,
        speed: 0.1
    }
};

var anim = anims.walk;
var direction = directions.s;

var f = anim.startFrame;

function preload ()
{
    this.load.json('map', 'assets/tests/iso/isometric-grass-and-water.json');
    this.load.spritesheet('tiles', 'assets/tests/iso/isometric-grass-and-water.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('skeleton', 'assets/tests/iso/skeleton8.png', { frameWidth: 128, frameHeight: 128 });
    this.load.image('house', 'assets/tests/iso/rem_0002.png');
}

function create ()
{
    //  Parse the data out of the map
    var data = this.cache.json.get('map');

    var tilewidth = data.tilewidth / 2;
    var tileheight = data.tileheight / 2;

    var layer = data.layers[0].data;

    var mapwidth = data.layers[0].width;
    var mapheight = data.layers[0].height;

    var centerX = mapwidth * tilewidth;
    var centerY = 16;

    var i = 0;

    for (var y = 0; y < mapheight; y++)
    {
        for (var x = 0; x < mapwidth; x++)
        {
            id = layer[i] - 1;

            var tx = (x - y) * tilewidth;
            var ty = (x + y) * tileheight;

            var tile = this.add.image(centerX + tx, centerY + ty, 'tiles', id);

            tile.z = centerY + ty;

            i++;
        }
    }

    var house = this.add.image(240, 370, 'house');
    house.z = house.y + 86;

    skelly = this.add.image(300, 310, 'skeleton', direction + f);
    skelly.z = 16;

    TweenMax.delayedCall(anim.speed, changeFrame, [], this);

    this.cameras.main.setSize(1600, 600);
}

function changeFrame ()
{
    f++;

    if (f === anim.endFrame)
    {
        f = anim.startFrame;
    }

    skelly.frame = skelly.texture.get(direction + f);

    TweenMax.delayedCall(anim.speed, changeFrame, [], this);
}

function update ()
{
    // skelly.x += 0.2;
    skelly.y += 0.1;

    skelly.z = skelly.y + 64;

    return;

    if (d)
    {
        this.cameras.main.scrollX--;

        if (this.cameras.main.scrollX <= 0)
        {
            d = 0;
        }
    }
    else
    {
        this.cameras.main.scrollX++;

        if (this.cameras.main.scrollX >= 800)
        {
            d = 1;
        }
    }
}

