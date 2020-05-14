var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    backgroundColor: '#7d7d7d',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('mummy', 'assets/animations/mummy37x45.png', { frameWidth: 37, frameHeight: 45 });
}

function create ()
{
    var orig = this.textures.get('mummy');
    var origSrc = orig.getSourceImage();
    var mod = this.textures.createCanvas('mummyCanvas', origSrc.width, origSrc.height);
    var modCtx = mod.getContext();

    // Background fill
    modCtx.fillStyle = 'magenta';
    modCtx.fillRect(0, 0, mod.width, mod.height);

    // Copy all of the original texture
    mod.draw(0, 0, origSrc);

    modCtx.fillStyle = 'lime';
    modCtx.font = 'caption';
    modCtx.textBaseline = 'top';

    for (var frameName in orig.getFrameNames(false))
    {
        var frame = orig.frames[frameName];

        // Label the frame
        modCtx.fillText(frame.name, frame.cutX, frame.cutY);

        // Add an identical frame to the new texture
        mod.add(frame.name, frame.sourceIndex, frame.cutX, frame.cutY, frame.width, frame.height);
    }

    // Now we can use it as a spritesheet

    console.log('frames', mod.frames);

    //  Compare: ('__BASE' is the entire texture)
    this.add.image(32, 32, 'mummy', '__BASE').setOrigin(0);
    this.add.image(32, 96, 'mummyCanvas', '__BASE').setOrigin(0);

    this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('mummyCanvas'),
        frameRate: 6,
        yoyo: true,
        repeat: -1
    });

    this.add.sprite(400, 300, 'mummy').setScale(4).play('walk');
}

