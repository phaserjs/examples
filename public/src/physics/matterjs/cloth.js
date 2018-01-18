var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            debugBodyColor: 0xffffff
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

    this.matter.add.mouseSpring();

    var group = this.matter.world.nextGroup(true);

    var particleOptions = { friction: 0.00001, collisionFilter: { group: group }, render: { visible: false }};
    var constraintOptions = { stiffness: 0.06 };

    // softBody: function (x, y, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions)

    var cloth = this.matter.add.softBody(200, 200, 20, 12, 5, 5, false, 8, particleOptions, constraintOptions);

    for (var i = 0; i < 20; i++)
    {
        cloth.bodies[i].isStatic = true;
    }

    this.matter.add.circle(300, 500, 80, { isStatic: true });
    this.matter.add.rectangle(500, 480, 80, 80, { isStatic: true });
    this.matter.add.rectangle(400, 609, 800, 50, { isStatic: true });
}
