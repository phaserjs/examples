var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

    var ctx = new AudioContext();

    var explosionEffect = {
        frequency: 16,
        decay: 1,
        type: 'sawtooth',
        dissonance: 50
    };

    new Phaser.Sound.Dynamic.FX(ctx, explosionEffect);

    window.addEventListener('mousedown', function () {

        new Phaser.Sound.Dynamic.FX(ctx, explosionEffect);

    }, false);

}
