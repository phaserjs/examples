var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() 
{
    this.load.bitmapFont('ice', 'assets/fonts/bitmap/iceicebaby.png', 'assets/fonts/bitmap/iceicebaby.xml');
    this.load.image('iceMap', 'assets/normal-maps/iceicebaby_n.png');
}

function create() 
{
    var lights = this.add.lightLayer();

    var text = this.add.bitmapText(0, 0, 'ice', 'Terminator', 128);

    lights.addSprite(text, this.textures.get('iceMap'));

    light = lights.addLight(100, 100, 0.1, 1, 1, 1, 1.0);

    this.tweens.add({
        targets: light,
        x: { value: 700, ease: 'Sine.easeInOut', duration: 4000, yoyo: true, repeat: -1 },
        y: { value: 500, ease: 'Sine.easeInOut', duration: 2000, yoyo: true, repeat: -1 }
    });

    this.tweens.add({
        targets: light,
        r: { value: 0, ease: 'Sine.easeInOut', duration: 8000, yoyo: true, repeat: -1 },
        b: { value: 0.5, ease: 'Sine.easeInOut', duration: 8000, yoyo: true, repeat: -1 }
    });
}
