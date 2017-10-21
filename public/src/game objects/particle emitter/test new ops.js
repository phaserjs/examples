var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bg', 'assets/ui/undersea-bg.png');
    this.load.spritesheet('fish', 'assets/sprites/fish-136x80.png', { frameWidth: 136, frameHeight: 80 });
}

function create ()
{
    this.add.image(400, 300, 'bg');

    var particles = this.add.particles('fish');

    var emitter = particles.createEmitter({
        frame: 0,
        x: { start: 100, end: 400, randomStart: true },
        y: 300,
        gravityY: [ 10, 20, 30, 40, 50 ],
        active: false
    });

    window.emitter = emitter;

    console.log(emitter);
}
