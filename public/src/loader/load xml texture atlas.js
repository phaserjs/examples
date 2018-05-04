var config = {
    type: Phaser.AUTO,
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
    this.load.xml('round', 'assets/atlas/round.xml');
    this.load.image('round', 'assets/atlas/round.png');
}

function create ()
{
    var image = this.textures.get('round').getSourceImage();
    var data = this.cache.xml.get('round');

    console.log(data.getElementsByTagName('TextureAtlas'));
    return;

    var atlasTexture = this.textures.addAtlasStarlingXML('newAtlas', image, data);

    var frames = atlasTexture.getFrameNames();

    for (var i = 0; i < frames.length; i++)
    {
        var x = Phaser.Math.Between(0, 800);
        var y = Phaser.Math.Between(0, 600);

        this.add.image(x, y, 'newAtlas', frames[i]);
    }
}
