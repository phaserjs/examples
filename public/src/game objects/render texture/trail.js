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
var trail;
var player;

var dist;

function preload() 
{
    this.load.image('dude', 'assets/sprites/phaser-dude.png');
}

function create() 
{
    rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 }).setOrigin(0, 0);

    trail = this.add.image(0, 0, 'dude').setOrigin(0.5, 0.5);

    player = this.add.image(256, 256, 'dude');
    player.setOrigin(0.5, 0.5);

    tween = this.tweens.add({
        targets: trail,
        x: player.x,
        y: player.y,
        ease: 'Sine.easeInOut',
        duration: 50000,
        loop: true
    });
}

function update()
{
    player.x = this.input.x;
    player.y = this.input.y;

    dist = Phaser.Math.Distance.Between(trail.x, trail.y, player.x, player.y);

    tween.timeScale = dist / 100;

    tween.updateTo('x', player.x, true);
    tween.updateTo('y', player.y, true);

    draw();
}

function draw()
{
    rt.save();

    rt.globalAlpha = 100 / (dist + 0.01);
    rt.globalTint = dist | 0xff0000;

    rt.translate(trail.x, trail.y);
    rt.draw(trail.texture, trail.frame, -trail.width / 2, -trail.height / 2);
    rt.restore();
}
