var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var rt;
var player;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('dude', 'assets/sprites/phaser-dude.png');
}

function create ()
{
    rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 }).setOrigin(0, 0);

    player = this.add.image(256, 256, 'dude');

    // this.input.once('pointerdown', function () {

    //  Press R to resize and clear the Render Texture
    this.input.keyboard.once('keydown_R', function (event) {

        rt.resize(400, 300);

    });
}

function update ()
{
    player.x = this.input.x;
    player.y = this.input.y;

    draw();
}

function draw () 
{
    rt.save();
    rt.translate(player.x, player.y);
    rt.draw(player.texture, player.frame, -player.width / 2, -player.height / 2);
    rt.restore();
}
