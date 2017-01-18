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

    var jumpEffect = {
        frequency: 523.25,
        attack: 0.05,
        decay: 0.2,
        type: 'sine',
        volume: 3,
        pan: 0.8,
        pitchBend: 600,
        reverse: true,
        random: 100
    };

    new Phaser.Sound.Dynamic.FX(ctx, jumpEffect);

    window.addEventListener('mousedown', function () {

        new Phaser.Sound.Dynamic.FX(ctx, jumpEffect);

    }, false);

}
