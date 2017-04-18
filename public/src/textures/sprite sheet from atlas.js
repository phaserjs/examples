var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.path = 'assets/atlas/';

    this.load.atlas('megaset', 'megaset-3.png', 'megaset-3.json');
}

function create ()
{
    //  create a sprite sheet from a frame embedded in a texture atlas
    //  'boom' is the unique local name we'll give the sprite sheet
    //  'megaset' is the key of the texture atlas that contains the sprite sheet
    //  'explosion' is the name of the frame within the texture atlas
    //  The rest of the values are the sprite sheet frame sizes and offsets

    var t = this.textures.addSpriteSheetFromAtlas('boom', { atlas: 'megaset', frame: 'explosion', frameWidth: 64, frameHeight: 64, endFrame: 23 });

    console.log(t);

    //  There is a new texture available called 'boom', which we can assign to game objects:

    // var config = {
    //     frames: this.anims.generateFrameNumbers('boom', { start: 0, end: 23, first: 23 }),
    //     framerate: 20
    // };

    // this.anims.create('explode', config);

    // this.add.sprite(400, 300).play('explode');
}
