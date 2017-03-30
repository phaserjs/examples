var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    state: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 } });

    var triangle = new Phaser.Geom.Triangle.BuildRight(300, 360, 300, 300);

    var angle = { value: 0 };

    graphics.strokeTriangleShape(triangle);

    TweenMax.to(angle, 10, {
        value: 0.04,
        ease: Linear.easeNone,
        repeat: -1,
        yoyo: true,
        onUpdate: function () {
            Phaser.Geom.Triangle.Rotate(triangle, angle.value);
            graphics.clear();
            graphics.strokeTriangleShape(triangle);
        },
        onUpdateScope: this
    });

}
