var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 650,
    height: 450,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.audio('boden', [
        'assets/audio/bodenstaendig_2000_in_rock_4bit.mp3',
        'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg'
    ]);
}

function create ()
{
    this.game.sound.add('boden', {
        mute: false,
        volume: 0.5,
        rate: 2,
        detune: -100
    }).play();

    var boden = this.game.sound.add('boden');
    boden.mute = true;
    boden.volume = 1;
    boden.play({
        rate: 1.5,
        detune: 0
    });

    this.game.sound.mute = false;
    this.game.sound.volume = 0.8;
    this.game.sound.rate = 0.5;
    this.game.sound.detune = 200;

}
