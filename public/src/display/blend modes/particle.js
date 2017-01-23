var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var sprites = [];

function between (min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function preload() {

    this.load.image('bg', 'assets/skies/space1.png');
    this.load.image('particle', 'assets/particles/yellow.png');
    this.load.image('logo', 'assets/sprites/phaser2.png');

}

function create() {

    this.add.image(0, 0, 'bg');

    //  Create the sprites
    for (var i = 0; i < 300; i++)
    {
        var x = between(-64, 800);
        var y = between(-64, 600);

        var image = this.add.image(x, y, 'particle');

        image.blendMode = 1;

        sprites.push({ s: image, r: 2 + Math.random() * 6 });
    }

    var logo = this.add.image(350, 300, 'logo');

    logo.anchor = 0.5;

}

function update() {

    for (var i = 0; i < sprites.length; i++)
    {
        var sprite = sprites[i].s;

        sprite.y -= sprites[i].r;

        if (sprite.y < -256)
        {
            sprite.y = 700;
        }
    }

}
