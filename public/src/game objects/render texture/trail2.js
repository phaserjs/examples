var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    width: 800,
    height: 600
};

var game = new Phaser.Game(config);

var rt;
var player;

function preload() 
{
    this.load.image('dude', 'assets/sprites/phaser-dude.png');
}

function create() 
{
    rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 }).setOrigin(0, 0);

    player = this.add.image(256, 256, 'dude');
    player.setOrigin(0.5, 0.5);
}

function update()
{
    player.x = this.input.x;
    player.y = this.input.y;

    draw();
}

function draw() 
{
    rt.save();
    rt.translate(player.x, player.y);
    rt.draw(player.texture, player.frame, -player.width / 2, -player.height / 2);
    rt.restore();
}
