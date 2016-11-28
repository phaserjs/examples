var config = {
    width: 800,
    height: 600,
    resolution: 1,
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    },
    callbacks: {
        preBoot: function () { console.log('I get called before all of the Game systems are created, but after Device is available')},
        postBoot: function () { console.log('I get called after all of the Game systems are running, immediately before raf starts')}
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image('logo', 'assets/sprites/phaser.png');

}

var blitter;

function create() {

    blitter = this.add.blitter();

    var bob = blitter.create(100, 100, 'logo');

    console.log(bob);

}
