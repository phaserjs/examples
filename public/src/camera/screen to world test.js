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

var text;
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

var IntersectGameObject = function (point, gameObjectArray, camera)
{
    var output = [];
    var length = gameObjectArray.length;
    var tpoint = camera.transformPoint(point);
    var culled = camera.cull(gameObjectArray);
    var culledLength = culled.length;
    var scrollX = camera.scrollX;
    var scrollY = camera.scrollY;
    var cameraW = camera.width;
    var cameraH = camera.height;

    text.setText('Visible: ' + culledLength + ' / ' + length);

    // Testing Culling
    for (var i = 0; i < length; ++i)
    {
        var object = gameObjectArray[i];
        object.visible = false;
    }


    for (var i = 0; i < culledLength; ++i)
    {
        var object = culled[i];
        
        // Just testing culling
        object.visible = true;

        var objectW = object.width;
        var objectH = object.height;
        var objectX = (object.x - (scrollX * object.scrollFactorX)) - (objectW * object.originX);
        var objectY = (object.y - (scrollY * object.scrollFactorY)) - (objectH * object.originY);

        if (point.x >= objectX && point.y >= objectY &&
            point.x <= objectX + objectW && point.y <= objectY + objectH)
        {
            output.push(object);    
        }
    }

    return output;
};

function create ()
{
    for (var i = 0; i < 10000; ++i)
    {
        gameObjects.push(this.add.image(-10000 + Math.random() * 20000, -10000 + Math.random() * 20000, 'image'));
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

    text = this.add.bitmapText(0, 0, 'nokia16', "Visible: 0/0");
    text.scrollFactorX = 0;
    text.scrollFactorY = 0;
    this.input.events.on('KEY_DOWN_EVENT', function (event) {
        if (event.data.code === 'ArrowUp')
        {
            cameraScroll.y = -500;
            cameraScroll.dampY = 1;
        }
        else if (event.data.code === 'ArrowDown')
        {
            cameraScroll.y = 500;
            cameraScroll.dampY = 1;
        }

        if (event.data.code === 'ArrowLeft')
        {
            cameraScroll.x = -500;
            cameraScroll.dampX = 1;
        }
        else if (event.data.code === 'ArrowRight')
        {
            cameraScroll.x = 500;
            cameraScroll.dampX = 1;
        }
    });   

    this.input.events.on('KEY_UP_EVENT', function (event) {
        if (event.data.code === 'ArrowUp' || event.data.code === 'ArrowDown')
        {
            cameraScroll.dampY = 0.9;
        }

        if (event.data.code === 'ArrowLeft' || event.data.code === 'ArrowRight')
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

    var objects = IntersectGameObject(mouse, gameObjects, this.cameras.main);

    if (objects.length > 0)
    {
        selection.lineStyle(5.0, 0xFF0000, 1.0);

        var length = objects.length;
        for (var i = 0; i < length; ++i)
        {
            var object = objects[i];
            selection.strokeRect(object.x - (object.width * object.originX), object.y - (object.height * object.originY), object.width, object.height);
        }
    }
}
