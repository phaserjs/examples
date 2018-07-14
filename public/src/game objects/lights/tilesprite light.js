var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);

var brick;
var offsets = [];
var light;
var time = 0.0;
var tween;

function preload ()
{
    this.load.image('brick', ['assets/normal-maps/brick.jpg', 'assets/normal-maps/brick_n.png']);
}

function create ()
{
    brick = this.add.tileSprite(400, 300, 800, 600, 'brick');
    brick.setPipeline('Light2D');

    light = this.lights.addLight(0, 0, 200).setScrollFactor(0.0);

    this.lights.enable().setAmbientColor(0x555555);

    this.input.on('pointermove', function (pointer) {

        light.x = pointer.x;
        light.y = pointer.y;

    });

    this.lights.addLight(0, 100, 100).setColor(0xff0000).setIntensity(3.0);
    this.lights.addLight(0, 200, 100).setColor(0x00ff00).setIntensity(3.0);
    this.lights.addLight(0, 300, 100).setColor(0x0000ff).setIntensity(3.0);
    this.lights.addLight(0, 400, 100).setColor(0xffff00).setIntensity(3.0);

    offsets = [ 0.1, 0.3, 0.5, 0.7 ];

    tween = this.tweens.addCounter({
        from: 1,
        to: 2,
        duration: 5000,
        ease: 'Sine.easeInOut',
        yoyo: true,
        repeat: -1
    });
}

function update()
{
    var index = 0;

    this.lights.forEachLight(function (currLight) {
        if (light !== currLight)
        {
            currLight.x = 400 + Math.sin(offsets[index]) * 1000;
            offsets[index] += 0.02;
            index += 1;
        }
    });

    brick.tilePositionX = Math.cos(time) * 1000;
    brick.tilePositionY = Math.sin(time) * 500;

    brick.tileScaleX = tween.getValue();
    brick.tileScaleY = tween.getValue();

    time += 0.01;
}
