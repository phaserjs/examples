var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 768,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.glsl('bundle', 'http://192.168.0.100/100-phaser3-snippets/public/assets/shaders/bundle.glsl.js');
}

function create ()
{
    //  Here we create our shader. It has a size of 128 x 128.
    var shader = this.add.shader('Raster Sky', 0, 0, 128, 128);

    //  Now we tell it to render to a texture, instead of on the display list.
    //  The string given here is the key that is used when saving it to the Texture Manager:

    shader.setRenderToTexture('wibble');

    var blocks = this.add.group({ key: 'wibble', repeat: 62, setScale: { x: 0.3, y: 0.3 } });

    Phaser.Actions.GridAlign(blocks.getChildren(), {
        width: 9,
        height: 7,
        cellWidth: 128,
        cellHeight: 128,
        x: 0,
        y: 0
    });

    var i = 0;

    blocks.children.iterate(function (child) {

        this.tweens.add({
            targets: child,
            scaleX: 1.2,
            scaleY: 1.2,
            ease: 'Sine.easeInOut',
            duration: 400,
            delay: i * 50,
            repeat: -1,
            yoyo: true
        });

        i++;

        if (i % 10 === 0)
        {
            i = 0;
        }

    }, this);
}
