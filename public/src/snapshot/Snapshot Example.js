var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        create: create,
        update: update
    }
};

var div = document.createElement('div');
div.innerHTML = 'PRESS SPACE TO TAKE SNAPSHOT<br>';
document.body.appendChild(div);


var snapHistory = [];
var graphics;
var graphicsPath = [];
var isMouseDown = false;
var shouldSnap = false;
var isKeyDown = false;
var game = new Phaser.Game(config);


function saveWebGL(canvas)
{
    var gl = canvas.getContext('experimental-webgl');
    var pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
    gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var imageData;
    canvas.width = gl.drawingBufferWidth;
    canvas.height = gl.drawingBufferHeight;

    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    for (var y = 0; y <  canvas.height; y += 1)
    {
        for (var x = 0; x < canvas.width; x += 1)
        {
            var si = ((canvas.height - y) * canvas.width + x) * 4;
            var di = (y * canvas.width + x) * 4;
            data[di + 0] = pixels[si + 0];
            data[di + 1] = pixels[si + 1];
            data[di + 2] = pixels[si + 2];
            data[di + 3] = pixels[si + 3];
        }
    }
    ctx.putImageData(imageData, 0, 0);

    var image = saveCanvas(canvas);

    return image;
}

function saveCanvas(canvas)
{
    var src = canvas.toDataURL();
    var image =  new Image();
    image.src = src;
    document.body.appendChild(image);
    return image;
}

function saveImage(canvas)
{
    if (game.renderer.type === Phaser.CANVAS)
    {
        return saveCanvas(canvas);
    }
    else
    {
        return saveWebGL(canvas);
    }
}

function beginPath(x, y) 
{
    isMouseDown = true;
    graphics.clear();
    graphicsPath.length = 0;
}

function addPath(x, y)
{
    if (isMouseDown)
    {
        graphicsPath.push({x: x, y: y});
    }
}

function endPath(x, y)
{
    if (isMouseDown)
    {
        isMouseDown = false;
    }
}

function create ()
{
    var canvas = this.game.canvas;
    graphics = this.add.graphics({x: 0, y: 0});

    this.game.canvas.onmousedown = function (e) {
        var mouseX = e.clientX - canvas.offsetLeft;
        var mouseY = e.clientY - canvas.offsetTop;
        beginPath(mouseX, mouseY);
    };
    this.game.canvas.onmouseup = function (e) {
        var mouseX = e.clientX - canvas.offsetLeft;
        var mouseY = e.clientY - canvas.offsetTop;
        endPath(mouseX, mouseY);
    };
    this.game.canvas.onmousemove = function (e) {
        var mouseX = e.clientX - canvas.offsetLeft;
        var mouseY = e.clientY - canvas.offsetTop;
        addPath(mouseX, mouseY);
    };
    window.onkeydown = function (e)
    {
        if (e.keyCode === 32 && !isKeyDown)
        {
            isKeyDown = true;
            shouldSnap = true;
        }
    };
    window.onkeyup = function (e)
    {
        if (e.keyCode === 32)
        {
            isKeyDown = false;
            shouldSnap = false;
        }
    };

    this.game.renderer.onFrameComplete = function () {
        if (shouldSnap)
        {
            var canvas = this.game.canvas;
            var img = saveImage(canvas);
            img.style.width = '160px';
            img.style.height = '120px';
            img.style.paddingLeft = '2px';
            snapHistory.push(img);
            shouldSnap = false;
            console.log('snap!');
        }
    };
}

function update ()
{
    var length = graphicsPath.length;

    graphics.clear();
    graphics.lineStyle(2.0, 0xFFFF00, 1.0);
    graphics.beginPath();
    for (var i = 0; i < length; ++i)
    {
        var node = graphicsPath[i];

        if (i !== 0)
        {
            graphics.lineTo(node.x, node.y);
        }
        else
        {
            graphics.moveTo(node.x, node.y);
        }
    }
    graphics.strokePath();
    graphics.closePath();

    
}