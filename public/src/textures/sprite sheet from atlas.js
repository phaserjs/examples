var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.path = 'assets/atlas/';

    this.load.multiatlas('megaset', 3);

}

var monster;
var f = 0;

function create() {

    //  create a sprite sheet from a frame embedded in a texture atlas
    //  'boom' is the unique local name we'll give the sprite sheet
    //  'megaset' is the key of the texture atlas that contains the sprite sheet
    //  'explosion' is the name of the frame within the texture atlas
    //  The rest of the values are the sprite sheet frame sizes and offsets

    this.textures.addSpriteSheetFromAtlas('boom', 'megaset', 'explosion', { frameWidth: 64, frameHeight: 64, endFrame: 22 });

    //  There is a new texture available called 'boom', which we can assign to game objects:

    monster = this.add.image(0, 0, 'boom', 0);

}

function update() {

    f++;

    if (f === monster.texture.frameTotal)
    {
        f = 0;
    }

    monster.frame = monster.texture.get(f);

}
