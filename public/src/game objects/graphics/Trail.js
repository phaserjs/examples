var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        create: create
        ,update: update
    },
    width: 800,
    height: 600
};
var Point = function (x, y, time) {
    this.x = x;
    this.y = y;
    this.time = time;
};

var normalizeValue = function (value, min, max) {
    return (value - min) / (max - min);
};

var linearInterpolation = function (norm, min, max) {
    return (max - min) * norm + min;
};
var trail;
var points = [];
var head = {x: 0, y: 0};
var game = new Phaser.Game(config);

function create() {
    trail = this.add.graphics(0, 0);
}

function update() {
    if (points.length > 1) {
        trail.clear();
        trail.lineStyle(1, 0xFF0000, 1.0);
        trail.beginPath();
        trail.moveWidthTo(points[0].x, points[0].y, 0);
        for (var index = 1; index < points.length; ++index)
        {
            var point = points[index];
            trail.lineWidthTo(point.x, point.y, linearInterpolation(index / points.length, 0, 20));
        }
        trail.strokePath();
        trail.closePath();
    
        for (var index = 0; index < points.length; ++index)
        {
            var point = points[index];
           
            point.time -= 0.5;
            if (point.time <= 0)
            {
                points.splice(index, 1);
                index -= 1;
            }
        }
    }
}

game.canvas.onmousemove = function (evt) {
    head.x = evt.clientX;
    head.y = evt.clientY;

    points.push(new Point(head.x, head.y, 4.0));
};