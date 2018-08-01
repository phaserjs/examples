var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        create: create,
        update: update
    }
};

var rt;
var graphics;

var game = new Phaser.Game(config);

function create ()
{
    graphics = this.add.graphics();
    graphics.setVisible(false);
    graphics.fillStyle(0xffff00, 1);
    graphics.fillRect(0, 0, 300, 300);
    // graphics.slice(400, 300, 200, Phaser.Math.DegToRad(340), Phaser.Math.DegToRad(20), true);
    // graphics.fillPath();

    rt = this.add.renderTexture(200, 200, 800, 600);
    rt.draw(graphics, 0, 0);
}

function update ()
{
    rt.camera.rotation -= 0.01;

    rt.clear();

    rt.draw(graphics, 0, 0);
}
