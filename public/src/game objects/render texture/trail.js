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

var game = new Phaser.Game(config);

var rt;
var trail;
var bubble;
var tween;

function preload ()
{
    this.load.image('bubble', 'assets/particles/bubble.png');
}

function create ()
{
    rt = this.add.renderTexture(0, 0, 800, 600);

    trail = this.add.image(400, 300, 'bubble');

    bubble = this.add.image(400, 300, 'bubble');

    tween = this.tweens.add({
        targets: trail,
        x: bubble.x,
        y: bubble.y,
        ease: 'Sine.easeInOut',
        duration: 50000,
        repeat: -1
    });
}

function update ()
{
    bubble.setPosition(this.input.x, this.input.y);

    var dist = Phaser.Math.Distance.Between(trail.x, trail.y, bubble.x, bubble.y);

    tween.timeScale = dist / 100;

    tween.updateTo('x', bubble.x, true);
    tween.updateTo('y', bubble.y, true);

    trail.setAlpha(100 / (dist + 0.001)).setTint(dist | 0xff0000);

    rt.draw(trail);
}
