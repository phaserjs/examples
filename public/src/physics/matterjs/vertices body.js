var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('orange', 'assets/sprites/columns-orange.png');
}

function create ()
{
    // this.matter.world.setBounds().disableGravity();
    this.matter.world.disableGravity();

    var arrow = this.matter.world.fromPath('40 0 40 20 100 20 100 80 40 80 40 100 0 50');
    var chevron = this.matter.world.fromPath('100 0 75 50 100 100 25 100 0 50 25 0');
    var star = this.matter.world.fromPath('50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38');
    var horseShoe = this.matter.world.fromPath('35 7 19 17 14 38 14 58 25 79 45 85 65 84 65 66 46 67 34 59 30 44 33 29 45 23 66 23 66 7 53 7');

    // var poly = this.matter.add.image(200, 150, 'orange');
    var poly = this.matter.add.image(200, 150, 'orange', null, { shape: { type: 'fromVerts', verts: chevron }});

    // poly.setBody({
    //     type: 'fromVerts',
    //     verts: chevron
    // });

    poly.alpha = 0.1;

    //  Just make the body move around and bounce
    // poly.setVelocity(6, 3);
    // poly.setAngularVelocity(0.01);
    poly.setBounce(1);
    poly.setFriction(0, 0, 0);
}
