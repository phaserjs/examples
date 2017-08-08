var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('brick', 'assets/normal-maps/brick.jpg');
    this.load.image('brickMap', 'assets/normal-maps/brick_n.png');
    this.load.image('light', 'assets/normal-maps/light.png');
}

function create ()
{
    window.scene = this;

    var lights = this.add.lightLayer();

    var pic = this.add.image(400, 300, 'brick');

    lights.addSprite(pic, this.textures.get('brickMap'));

    // addLight: function (x, y, z, r, g, b, attenuation)

    light = lights.addLight(100, 100, 0.1, 1, 1, 1, 1.0);

    var ls = this.add.image(100, 100, 'light');

    this.sys.displayList.bringToTop(ls);

    this.tweens.add({
        targets: [ light, ls ],
        x: { value: 700, ease: 'Sine.easeInOut', duration: 4000, yoyo: true, repeat: -1 },
        y: { value: 500, ease: 'Sine.easeInOut', duration: 2000, yoyo: true, repeat: -1 }
    });

    this.tweens.add({
        targets: light,
        r: { value: 0, ease: 'Sine.easeInOut', duration: 8000, yoyo: true, repeat: -1 }
    });

}
