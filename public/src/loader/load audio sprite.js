var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.audioSprite('kyobi', 'assets/audio/kyobi/kyobi.json', [
        'assets/audio/kyobi/kyobi.ogg',
        'assets/audio/kyobi/kyobi.mp3',
        'assets/audio/kyobi/kyobi.m4a'
    ]);
}

function create ()
{
    var music = this.sound.addAudioSprite('kyobi');

    // music.play('title');
    // music.play('gameOver');
    music.play('nextLevel');

    // text.setText('Playing Dafunk - Hardcore Power (We Believe In Goa - Remix)');
}
