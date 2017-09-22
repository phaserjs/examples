var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('spark0', 'assets/particles/blue.png');
    this.load.image('spark1', 'assets/particles/red.png');
}

function create ()
{
    var emitter0 = this.add.emitter(400, 300, 'spark0');
    var emitter1 = this.add.emitter(400, 300, 'spark1');
    emitter0.setSpeed(-800, 800);
    emitter0.setEmitAngle(0, 360);
    emitter0.setScale(0.5, 0);
    emitter0.setBlendMode(Phaser.BlendModes.SCREEN);
    emitter0.enabled = false;
    emitter0.life = 0.6;
    emitter0.gravityY = 800;
    emitter1.setSpeed(-800, 800);
    emitter1.setEmitAngle(0, 360);
    emitter1.setScale(0.3, 0);
    emitter1.setBlendMode(Phaser.BlendModes.SCREEN);
    emitter1.enabled = false;
    emitter1.life = 0.3;
    emitter1.gravityY = 800;

    this.input.events.on('MOUSE_DOWN_EVENT', function (event) {
        emitter0.x = event.x;
        emitter0.y = event.y;
        emitter1.x = event.x;
        emitter1.y = event.y;
        emitter0.explode();
        emitter1.explode();
    });

}

function update ()
{
}

