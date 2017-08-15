var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var image;
var lights;
var light = null;
var game = new Phaser.Game(config);
var colorIdx = 0;
var colors = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 1]
];

function preload ()
{
    this.load.image('mainImg', 'assets/sprites/phaser2.png');
    this.load.image('normImg', 'assets/normal-maps/phaser2_n.png');
}
var camera;
var hmove = false;
var vmove = false;
var zmove = false;
var moveX = 0.0;
var moveY = 0.0;
var moveZ = 0.0;
var uiPos = Math.pow(2, 30);
var text;
function addLight(x, y, radius)
{
    var color = colors[colorIdx];
    colorIdx = (colorIdx + 1) % colors.length;
    if (light)
    {
        light.scrollFactorX = 1;
        light.scrollFactorY = 1;
        light.x += camera.scrollX;
        light.y += camera.scrollY;
    }

    light = lights.addLight(x, y, 0.1, radius, color[0], color[1], color[2], 1.0);
    if (light != null)
    {
        light.scrollFactorX = 0;
        light.scrollFactorY = 0;
        if (text)
            text.setText('Current Light Count: ' + lights.getLightCount());
    }
}
function create ()
{
    var space = 4096;
    var uiCam = this.cameras.add(0, 0, 800, 600);
    camera = this.cameras.main;
    lights = this.add.lightLayer();

    uiCam.scrollX = uiPos;
    uiCam.scrollY = uiPos;

    for (var i = 0; i < 4000; ++i)
    {
        var logo = this.add.image(-(space / 2) + Math.random() * space, -(space / 2) + Math.random() * space, 'mainImg');
        logo.setScale(Math.random());
        lights.addSprite(logo, this.textures.get('normImg'));
    }

    for (var i = 0; i < ((lights.getMaxLights())|0); ++i)
    {
        addLight(-(space / 2) + Math.random() * space, -(space / 2) + Math.random() * space, 100 + Math.random() * 400);
    }

    lights.setAmbientLightColor(0.0, 0.0, 0.1);

    this.input.events.on('POINTER_MOVE_EVENT', function (event) {
        if (light !== null)
        {
            light.x = event.x;
            light.y = event.y;
        }
    });
    this.input.events.on('POINTER_DOWN_EVENT', function (event) {
        addLight(event.x, event.y);
    });

    this.input.events.on('KEY_DOWN_EVENT', function (event) {
        var speed = 5;

        if (event.data.code === 'KeyQ')
        {
            moveZ = -0.01;
            zmove = true;
        }
        else if (event.data.code === 'KeyE')
        {
            moveZ = 0.01;
            zmove = true;
        }

        if (event.data.code === 'KeyZ')
        {
            if (light)
                light.radius += 10;
        }
        else if (event.data.code === 'KeyX')
        {
            if (light)
                light.radius -= 10;
        }

        if (event.data.code === 'KeyA')
        {
            moveX = -speed;
            hmove = true;
        }
        else if (event.data.code === 'KeyD')
        {
            moveX = speed;
            hmove = true;
        }

        if (event.data.code === 'KeyW')
        {
            moveY = -speed;
            vmove = true;
        }
        else if (event.data.code === 'KeyS')
        {
           moveY = speed;
           vmove = true;
        }
    });

    this.input.events.on('KEY_UP_EVENT', function (event) {
        var speed = 5;

        if (event.data.code === 'KeyQ' || event.data.code === 'KeyE')
        {
            zmove = false;
        }

        if (event.data.code === 'KeyA' || event.data.code === 'KeyD')
        {
            hmove = false;
        }

        if (event.data.code === 'KeyW' || event.data.code === 'KeyS')
        {
            vmove = false;
        }
    });
    var text0;
    if (lights.isDeferred())
    {
        text0 = this.add.text(uiPos, uiPos, 'Use WASD to scroll camera and mouse button to add lights\nDeferred Renderer enabled\nMax light count is ' + lights.getMaxLights(), { font: '14px Courier', fill: '#00ff00' });
    }
    else
    {
        text0 = this.add.text(uiPos, uiPos, 'Use WASD to scroll camera and mouse button to add lights\nForward Renderer enabled\nMax light count is ' + lights.getMaxLights(), { font: '14px Courier', fill: '#00ff00' });
    }
    //text0.scrollFactorX = 0;
    //text0.scrollFactorY = 0;
    text =  this.add.text(uiPos, uiPos + 50, 'Current Active Light Count: ' + lights.getLightCount(), { font: '14px Courier', fill: '#ffff00' });
    //text.scrollFactorX = 0;
    //text.scrollFactorY = 0;

}
var t = 0.0;
function update()
{
    var i = 0;
    lights.forEachLight(function (light) {
        light.x += Math.cos(t + i) * 10;
        light.y -= Math.sin(t + i) * 10;
        t += 0.0001;
        i += 1;
    });
    camera.scrollX += moveX;
    camera.scrollY += moveY;
    camera.zoom += moveZ;

    if (!hmove)
        moveX *= 0.9;
    
    if (!vmove)
        moveY *= 0.9;
    
    if (!zmove)
        moveZ *= 0.9;
}
