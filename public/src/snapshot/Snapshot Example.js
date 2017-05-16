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
var isKeyDown = false;
var game = new Phaser.Game(config);

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
            game.renderer.snapshot(function (image) {
                image.style.width = '160px';
                image.style.height = '120px';
                image.style.paddingLeft = '2px';
                snapHistory.push(image);
                console.log('snap!');
                document.body.appendChild(image);
            });
            isKeyDown = true;
        }
    };
    window.onkeyup = function (e)
    {
        if (e.keyCode === 32)
        {
            isKeyDown = false;
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