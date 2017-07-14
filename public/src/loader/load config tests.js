var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //  --------------
    //  Image Examples
    //  --------------

    //  Original image loader signature:
    //  this.load.image(key, url, xhrSettings)

    this.load.image('bunny', 'assets/sprites/bunny.png');

    //  Object based
    this.load.image({ key: 'bunny', texture: 'assets/sprites/bunny.png' });

    //  Allows for arrays of objects
    this.load.image([
        { key: 'bunny', texture: 'assets/sprites/bunny.png' },
        { key: 'atari', texture: 'assets/sprites/atari400.png' },
        { key: 'logo', texture: 'assets/sprites/phaser2.png' }
    ]);

    //  Object based including XHR Settings
    this.load.image({
        key: 'bunny',
        texture: 'assets/sprites/bunny.png',
        xhr: {
            user: 'root',
            password: 'th3G1bs0n',
            timeout: 30,
            header: 'Content-Type',
            headerValue: 'text/xml'
        }
    });

    //  Auto-filename based on key:

    //  Will load bunny.png from the defined path, because '.png' is the default extension.
    this.load.image({ key: 'bunny' });

    //  Will load bunny.jpg from the defined path, because of the 'ext' property.
    this.load.image({ key: 'bunny', ext: 'jpg' });

    //  ----------------------
    //  Texture Atlas Examples
    //  ----------------------

    //  Original atlas loader signature:
    //  this.load.atlas(key, textureURL, atlasURL, textureXhrSettings, atlasXhrSettings)

    this.load.atlas('level1', 'assets/level1/items.png', 'assets/level1/items.json');

    //  Object based
    this.load.atlas({ key: 'level1', texture: 'assets/level1/items.png', data: 'assets/level1/items.json' });



}

function create ()
{
}
