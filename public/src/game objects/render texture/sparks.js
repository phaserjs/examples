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
    rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 });

    player = this.add.sprite(256, 256, 'dude');
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
    rt.clear();
    rt.globalAlpha = Math.random();
    rt.globalTint = ((0.5 + Math.random()) * 0xFFFFFF << 0);

    for (i = 0; i < 5; i++)
    {
        var rot = Math.floor((Math.random() * Math.PI * 2) + 1);
        var dist = 75 + Math.floor((Math.random() * 50) + 1);

        rt.draw(player.texture, player.frame, player.x + dist * Math.cos(rot), player.y + dist * Math.sin(rot));
        rt.restore();
    }
}
