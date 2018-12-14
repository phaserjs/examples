var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var graphics;
var vec;
var vec2;
var text;

var angle = 0;

function create ()
{
    graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x2266aa } });

    vec = new Phaser.Math.Vector2(250, 0);
    vec2 = new Phaser.Math.Vector2(250, 0);

    text = this.add.text(30, 30, '');

    this.input.on('pointermove', function (pointer) {

        vec2.setFromObject(pointer);

        // center on screen
        vec2.x -= 400;
        vec2.y -= 300;
    });
}

function update ()
{
    graphics.clear();

    angle += 0.005;

    // vector starting at 0/0
    vec.setToPolar(angle, 250);

    // drawn from the center (as if center was 0/0)
    graphics.lineBetween(400, 300, 400 + vec.x, 300 + vec.y);

    graphics.lineStyle(2, 0x00aa00);
    graphics.lineBetween(400, 300, 400 + vec2.x, 300 + vec2.y);

    var dotProduct = vec.dot(vec2);

    var area = vec.length() * vec2.length();

    var angleBetween = Math.acos(dotProduct / area);

    // only used to determine arc direction
    var cross = vec.cross(vec2);

    graphics.lineStyle(2, 0xaa0000);
    graphics.beginPath();
    graphics.arc(400, 300, 100, angle, angle + (cross < 0 ? -angleBetween : angleBetween));
    graphics.strokePath();

    text.setText([
        'Dot product: ' + dotProduct,
        'Normalized dot product: ' + dotProduct / area,
        'Angle between vectors: ' + Phaser.Math.RadToDeg(angleBetween),
        'Pointer is ' + (dotProduct > 0 ? 'in front of' : 'behind') + ' the blue vector direction'
    ].join('\n'));
}
