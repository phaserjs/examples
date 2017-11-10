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
    // TODO play the actual sound
    console.log(this.game.cache.audio.get('boden'));
}
