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
var moveX = 0.0;
var moveY = 0.0;
var text;
function addLight(x, y)
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

    light = lights.addLight(x, y, 0.1, color[0], color[1], color[2], 1.0, 1);
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
    camera = this.cameras.main;
    lights = this.add.lightLayer();

    for (var i = 0; i < 1000; ++i)
    {
        var logo = this.add.image(-(space / 2) + Math.random() * space, -(space / 2) + Math.random() * space, 'mainImg');
        logo.setScale(Math.random());
        lights.addSprite(logo, this.textures.get('normImg'));
    }

    space *= 3;

    for (var i = 0; i < ((10 / 2)|0) - 1; ++i)
    {
        addLight(-(space / 2) + Math.random() * space, -(space / 2) + Math.random() * space);
    }

    lights.setAmbientLightColor(0.0, 0.0, 0.1);

    addLight(400, 300);

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
        text0 = this.add.text(0, 0, 'Use WASD to scroll camera and mouse button to add lights\nDeferred Renderer enabled\nMax light count is ' + lights.getMaxLights(), { font: '14px Courier', fill: '#00ff00' });
    }
    else
    {
        text0 = this.add.text(0, 0, 'Use WASD to scroll camera and mouse button to add lights\nForward Renderer enabled\nMax light count is ' + lights.getMaxLights(), { font: '14px Courier', fill: '#00ff00' });
    }

    text0.scrollFactorX = 0;
    text0.scrollFactorY = 0;

    text = this.add.text(0, 50, 'Current Active Light Count: ' + lights.getLightCount(), { font: '14px Courier', fill: '#ffff00' });
    text.scrollFactorX = 0;
    text.scrollFactorY = 0;
}

function update()
{
    camera.scrollX += moveX;
    camera.scrollY += moveY;

    if (!hmove)
        moveX *= 0.9;
    
    if (!vmove)
        moveY *= 0.9;
}
