var config = {
    width: 800,
    height: 600,
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var graphics = this.add.graphics();

    graphics.fillStyle(0x00ff00, 1);

    graphics.fillRect(0, 300, 800, 64);

    this.tweens.add({
        targets: graphics,
        scaleX: 0,
        duration: 20000,
        ease: 'Linear',
        repeat: -1
    });
}
