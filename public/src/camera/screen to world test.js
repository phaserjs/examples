var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: '#fafafa',
    width: 800,
    height: 600
};

var mouse = {x: 0, y: 0};
var selection = null;
var cameraScroll = {x: 0, y: 0, dampX: 0, dampY: 0};
var gameObjects = [];
var game = new Phaser.Game(config);
var cameras = [];

function preload ()
{
    this.load.bitmapFont('nokia16', 'assets/fonts/bitmap/nokia16.png', 'assets/fonts/bitmap/nokia16.xml');
    this.load.image('image', 'assets/sprites/block.png');
}

function create ()
{
    for (var i = 0; i < 5000; ++i)
    {
        var intensity = 255;

        var obj = this.add.image(-5000 + Math.random() * 10000, -5000 + Math.random() * 10000, 'image');

        obj.setScale(0.2 + Math.random() * 0.8);
        obj.setRotation(Math.random() * 360);
        obj.setScrollFactor(obj.scaleX);
        obj.setZ(obj.scrollFactorX);
        obj.setOrigin(-2 + Math.random() * 4, -2 + Math.random() * 4);
        obj.setHitArea(new Phaser.Geom.Rectangle(0 - (95 * obj.originX), 0 - (95 * obj.originY), 95, 95), Phaser.Geom.Rectangle.Contains);

        intensity *= obj.scrollFactorX;
        obj.tint = ((intensity & 0x0ff) << 16) | ((intensity & 0x0ff) << 8) | (intensity & 0x0ff);
        gameObjects.push(obj);
    }


    this.input.events.on('MOUSE_MOVE_EVENT', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    selection = this.add.graphics(0, 0);
    selection.scrollFactorX = 0;
    selection.scrollFactorY = 0;
    selection.z = 1000;

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

    this.cameras.main.zoom = 0.5;
    this.cameras.main.x = 1;
    this.cameras.main.y = 1;
    this.cameras.main.setSize(398, 298);

    cameras.push(this.cameras.main);
    this.cameras.main.setBackgroundColor('#1a1e1a')
    {
        let camera = this.cameras.add(401, 1, 398, 298);
        camera.setBackgroundColor('#1a1a1e');
        cameras.push(camera);
    }

    {
        let camera = this.cameras.add(1, 301, 398, 298);
        camera.setBackgroundColor('#1e1a1a');
        camera.zoom = 2;
        cameras.push(camera);
    }

    {
        let camera = this.cameras.add(401, 301, 398, 298);
        camera.setBackgroundColor('#1e1e1a');
        camera.rotation = 45 * Math.PI / 180;
        camera.zoom = 0.5;
        cameras.push(camera);
    }

}

function update (time, delta)
{
    for (var i = 0; i < gameObjects.length; ++i)
    {
        gameObjects[i].scaleX = gameObjects[i].scaleY = gameObjects[i].z;
        gameObjects[i].clearTint();
        gameObjects[i].rotation += 0.01;
        gameObjects[i].flipX = false;
    }

    for (var i = 0; i < cameras.length; ++i)
    {
        cameras[i].scrollX += cameraScroll.x * (delta / 1000);
        cameras[i].scrollY += cameraScroll.y * (delta / 1000);

        var objects = this.input.pointScreenToWorldHitTest(gameObjects, mouse.x, mouse.y, cameras[i]);

        if (objects && objects.length > 0)
        {
            var length = objects.length;
            for (var j = 0; j < length; ++j)
            {
                var object = objects[j];
                object.setTint(0xff0000);
                object.flipX = true;
            }
        }

        if (i == 3)
        {
            cameras[i].rotation += 0.01;
        }
    }
    
    cameraScroll.x *= cameraScroll.dampX;
    cameraScroll.y *= cameraScroll.dampY;

}
