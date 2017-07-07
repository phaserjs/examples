var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    },
    width: 800,
    height: 600
};

var mouse = {x: 0, y: 0};
var selection = null;
var cameraScroll = {x: 0, y: 0, dampX: 0, dampY: 0};
var gameObjects = [];
var game = new Phaser.Game(config);

function preload ()
{
    this.load.bitmapFont('nokia16', 'assets/fonts/bitmap/nokia16.png', 'assets/fonts/bitmap/nokia16.xml');
    this.load.image('image', 'assets/sprites/phaser1.png');
}

function create ()
{
    for (var i = 0; i < 10000; ++i)
    {
        var intensity = 255;
        var obj = this.add.image(-10000 + Math.random() * 20000, -10000 + Math.random() * 20000, 'image');
        obj.scaleX = obj.scaleY = 0.2 + Math.random() * 0.8;
        obj.rotation = Math.random() * 360;
        obj.scrollFactorX = obj.scrollFactorY = obj.scaleX;
        obj.z = obj.scrollFactorX;
        intensity *= obj.scrollFactorX;
        obj.tint = ((intensity & 0x0ff) << 16) | ((intensity & 0x0ff) << 8) | (intensity & 0x0ff);
        gameObjects.push(obj);
    }


    this.add.graphics(0, 0).
            fillStyle(0xFF0000, 1.0).
            fillRect(-2.5 + 400, -2.5 + 300, 5, 5).
            setScrollFactor(0, 0);

    this.input.events.on('MOUSE_MOVE_EVENT', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    selection = this.add.graphics(0, 0);
    selection.scrollFactorX = 0;
    selection.scrollFactorY = 0;
    selection.z = 10000;

    this.input.events.on('KEY_DOWN_EVENT', function (event) {
        if (event.data.code === 'ArrowUp' || event.data.code === 'KeyW')
        {
            cameraScroll.y = -500;
            cameraScroll.dampY = 1;
        }
        else if (event.data.code === 'ArrowDown' || event.data.code === 'KeyS')
        {
            cameraScroll.y = 500;
            cameraScroll.dampY = 1;
        }

        if (event.data.code === 'ArrowLeft' || event.data.code === 'KeyA')
        {
            cameraScroll.x = -500;
            cameraScroll.dampX = 1;
        }
        else if (event.data.code === 'ArrowRight' || event.data.code === 'KeyD')
        {
            cameraScroll.x = 500;
            cameraScroll.dampX = 1;
        }
    });   

    this.input.events.on('KEY_UP_EVENT', function (event) {
        if (event.data.code === 'ArrowUp' || event.data.code === 'ArrowDown' || event.data.code === 'KeyW' || event.data.code === 'KeyS')
        {
            cameraScroll.dampY = 0.9;
        }

        if (event.data.code === 'ArrowLeft' || event.data.code === 'ArrowRight' || event.data.code === 'KeyA' || event.data.code === 'KeyD')
        {
            cameraScroll.dampX = 0.9;
        }
    });   

}

function update (time, delta)
{
    selection.clear();
    this.cameras.main.scrollX += cameraScroll.x * (delta / 1000);
    this.cameras.main.scrollY += cameraScroll.y * (delta / 1000);
    
    cameraScroll.x *= cameraScroll.dampX;
    cameraScroll.y *= cameraScroll.dampY;

    var objects = this.input.pointScreenToWorldHitTest(gameObjects, mouse.x, mouse.y, this.cameras.main);

    if (objects.length > 0)
    {
        selection.lineStyle(5.0, 0xFF0000, 1.0);

        var length = objects.length;
        for (var i = 0; i < length; ++i)
        {
            var object = objects[i];
            selection.save();
            selection.translate(object.x - (this.cameras.main.scrollX * object.scrollFactorX), object.y - (this.cameras.main.scrollY * object.scrollFactorY));
            selection.rotate(object.rotation);
            selection.scale(object.scaleX, object.scaleY);
            selection.strokeRect(-object.displayOriginX,-object.displayOriginY, object.width, object.height);
            selection.restore();
        }
    }
}
