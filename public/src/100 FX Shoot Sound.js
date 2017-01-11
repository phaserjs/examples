var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

    var ctx = new AudioContext();

    var shootEffect = {
        frequency: 1046.5,
        decay: 0.3,
        type: 'sawtooth',
        pan: -0.8,
        pitchBend: 1200,
        dissonance: 25,
        echo: {
            delay: 0.2,
            feedback: 0.2,
            filter: 2000
        }
    };

    new Phaser.Sound.Dynamic.FX(ctx, shootEffect);

    window.addEventListener('mousedown', function () {

        new Phaser.Sound.Dynamic.FX(ctx, shootEffect);

    }, false);

}
