var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#4d4d4d',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: false,
            gravity: {
                y: 0
            },
            debug: {}
        }
    },
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    this.matter.world.setBounds();

    //  First, we'll create a few static bodies
    var body1 = this.matter.add.rectangle(250, 50, 200, 32, { isStatic: true });

    this.matter.add.polygon(600, 100, 3, 40, { isStatic: true });
    this.matter.add.polygon(100, 500, 8, 50, { isStatic: true });
    this.matter.add.rectangle(750, 200, 16, 180, { isStatic: true });

    //  Now a body that shows off internal edges + convex hulls
    var star = '50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38';

    this.matter.add.fromVertices(700, 500, star, { restitution: 0.9 }, true);

    //  Finally some random dynamic bodies

    for (var i = 0; i < 12; i++)
    {
        var x = Phaser.Math.Between(100, 700);
        var y = Phaser.Math.Between(100, 500);

        if (Math.random() < 0.5)
        {
            var sides = Phaser.Math.Between(3, 14);
            var radius = Phaser.Math.Between(8, 50);

            this.matter.add.polygon(x, y, sides, radius, { restitution: 0.9 });
        }
        else
        {
            var width = Phaser.Math.Between(16, 128);
            var height = Phaser.Math.Between(8, 64);

            this.matter.add.rectangle(x, y, width, height, { restitution: 0.9 });
        }
    }

    console.log(body1);

    this.input.on('pointerdown', function (pointer) {

        console.log(this.matter.getBodiesBelowPoint(pointer.x, pointer.y));

    }, this);

    this.input.on('pointermove', function (pointer) {

        if (this.matter.containsPoint(body1, pointer.x, pointer.y))
        {
            body1.render.fillColor = 0xff0000;
            body1.render.strokeColor = 0xffff00;
        }
        else
        {
            body1.render.fillColor = this.matter.world.debugConfig.staticFillColor;
            body1.render.strokeColor = this.matter.world.debugConfig.staticStrokeColor;
        }

    }, this);
}
