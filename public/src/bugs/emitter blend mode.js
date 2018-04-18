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
    this.load.image('image0', 'assets/pics/ra-einstein.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.spritesheet('veg', 'assets/sprites/fruitnveg64wh37.png', { frameWidth: 64, frameHeight: 64 });
}

function create ()
{
    this.add.tileSprite(0, 0, 800, 600, 'image0').setOrigin(0);

    this.add.image(100, 100, 'mushroom');
    this.add.image(700, 100, 'mushroom');

    // var particles = this.add.particles('flares');
    var particles = this.add.particles('veg');

    var emitter = particles.createEmitter({
        active: false,
        frame: 0,
        x: 200,
        y: 300,
        lifespan: 2000,
        speed: { min: 400, max: 600 },
        angle: 330,
        gravityY: 300,
        scale: { start: 0.4, end: 0 },
        quantity: 2,
        blendMode: 'SCREEN'
    });

    //  Comment out 'blendMode' in the emitter (_blendMode) and the bug doesn't happen

    this.input.once('pointerdown', function (event) {
    
        emitter.active = true;
    
    }, this);

    this.add.image(400, 300, 'logo');

    this.add.image(100, 500, 'mushroom');
    this.add.image(700, 500, 'mushroom');
}
