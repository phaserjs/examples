var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var map;
var marker;
var cursors;
var mouseX = 0;
var mouseY = 0;
var collisionMap;
var player;
var shiftKey = false;
var mouseDown = false;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/skies/lightblue.png');
    this.load.image('tiles', 'assets/tilemaps/tiles/drawtiles1.png');
    this.load.image('cursor', 'assets/sprites/drawcursor.png');

    this.load.spritesheet('dude', 'assets/sprites/dude.png', { frameWidth: 32, frameHeight: 48 });

    this.load.bitmapFont('nokia16', 'assets/fonts/bitmap/nokia16.png', 'assets/fonts/bitmap/nokia16.xml');
}

function create ()
{
    //  Our map is going to be 3 screens wide by 2 screens tall (so 2400 x 1184 = 75 x 37 tiles + a bottom layer)

    //  We will fill the data so there is a floor and walls already in place, but nothing more.

    var collisionMap = [];
    var mapData = [];
    var mapWidth = 75;
    var mapHeight = 38;

    for (var y = 0; y < mapHeight; y++)
    {
        //  Build a CollisionMap compatible array from the data
        collisionMap[y] = [];

        for (var x = 0; x < mapWidth; x++)
        {
            if (x === 0 || x === mapWidth - 1 || y === 0 || y === mapHeight - 1 || y === mapHeight - 2)
            {
                mapData.push(1);
                collisionMap[y][x] = 1;
            }
            else
            {
                mapData.push(0);
                collisionMap[y][x] = 0;
            }
        }
    }

    var mapConfig = {
        map: {
            data: mapData,
            width: mapWidth,
            height: mapHeight,
        },
        tile: {
            width: 32,
            height: 32,
            texture: 'tiles',
            border: 1
        }
    };

    //  Add our sky
    this.add.image(0, 0, 'sky').setOrigin(0).setScrollFactor(0, 1);

    //  Add our tilemap
    map = this.make.tilemap(mapConfig);

    //  Our sprite
    player = this.add.sprite(0, 0, 'dude', 4).setOrigin(0, 0.15);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    //  Add the cursor
    marker = this.add.image(0, 0, 'cursor').setOrigin(0);

    //  The Physics World
    world = new Phaser.Physics.Impact.World(800);

    world.collisionMap = new Phaser.Physics.Impact.CollisionMap(32, collisionMap);

    body = world.create(300, 800, 32, 40);
    body.setMaxVelocity(400, 500);
    body.friction.x = 400;
    body.friction.y = 0;

    body.accelGround = 1200;
    body.accelAir = 400;
    body.jumpSpeed = 500;

    //  Cameras
    this.cameras.main.startFollow(body.pos, true);
    this.cameras.main.setBounds(0, 0, mapWidth * 32, mapHeight * 32);

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    this.input.events.on('MOUSE_MOVE_EVENT', function (event) {

        mouseX = event.x;
        mouseY = event.y;

    }); 

    this.input.events.on('MOUSE_DOWN_EVENT', function (event) {

        mouseDown = true;
        shiftKey = event.data.shiftKey;

    });

    this.input.events.on('MOUSE_UP_EVENT', function (event) {

        mouseDown = false;

    });

    var text = this.add.bitmapText(64, 64, 'nokia16', "Left Click: Draw\n+ Shift: Erase\nCursors: Run\nUp: Jump");
    text.setScrollFactor(0);

    // graphics = this.add.graphics();
}

function update (time, delta)
{
    //  Get current tile

    var tx = Phaser.Math.Snap.Floor(mouseX + this.cameras.main.scrollX, 32) / 32;
    var ty = Phaser.Math.Snap.Floor(mouseY + this.cameras.main.scrollY, 32) / 32;

    currentTile = map.getTileAt(tx, ty);

    marker.x = tx * 32;
    marker.y = ty * 32;

    if (mouseDown && currentTile && currentTile.id !== 1)
    {
        if (shiftKey)
        {
            //  Remove tile
            currentTile.setId(0);
            world.collisionMap.data[ty][tx] = 0;
        }
        else
        {
            //  Add tile
            currentTile.setId(2);
            world.collisionMap.data[ty][tx] = 1;
        }
    }

    //  Physics update
    var accel = body.standing ? body.accelGround : body.accelAir;

    if (cursors.left.isDown)
    {
        body.setAccelerationX(-accel);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        body.setAccelerationX(accel);

        player.anims.play('right', true);
    }
    else
    {
        body.setAccelerationX(0);
    }

    if (body.vel.x === 0)
    {
        player.anims.play('turn');
    }

    if (cursors.up.isDown && body.standing)
    {
        body.setVelocityY(-body.jumpSpeed);
    }

    world.update(time, delta);

    player.x = body.pos.x;
    player.y = body.pos.y;

    // graphics.clear();
    // graphics.lineStyle(1, 0xffff00, 1);
    // graphics.strokeRect(body.pos.x, body.pos.y, body.size.x, body.size.y);
}
