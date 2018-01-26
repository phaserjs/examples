var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    physics: {
        default: 'impact',
        impact: {
            gravity: 100,
            setBounds: true,
            maxVelocity: 500
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
    this.load.atlas('megaset', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');
}

function create ()
{
    var particles = this.add.particles('megaset');

    var sprite = this.impact.add.image(300, 300, 'megaset', 'gem').setActive().setVelocity(300, 200).setBounce(1);

    var sprite2 = this.impact.add.image(200, 200, 'megaset', 'ilkke').setPassive().setVelocity(-300, -200).setBounce(1);

    particles.createEmitter({
        frame: 'yellow_ball',
        speed: 100,
        gravity: { x: 0, y: 200 },
        scale: { start: 0.1, end: 1 },
        follow: sprite
    });

    //  You can also follow a sprite like this (rather than setting it in the config)

    var emitter = particles.createEmitter({
        frame: 'red_ball',
        speed: 100,
        gravity: { x: 0, y: 200 },
        scale: { start: 0.1, end: 1 },
    });

    emitter.startFollow(sprite2);


}
