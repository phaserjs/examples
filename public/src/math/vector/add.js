var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

    var vec = new Phaser.Math.Vector2(0, 300);
    var angleVec = new Phaser.Math.Vector2(20);

    for(var angle = 0; vec.x < 800; angle += Math.PI / 18) {

        graphics.fillPointShape(vec, 20);

        angleVec.y =  Math.cos(angle) * 40;

        vec.add(angleVec);
    }
}
