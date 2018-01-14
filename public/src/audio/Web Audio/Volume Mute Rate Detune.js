/**
 * @author    Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 *
 * Images by Walter Newton (http://walternewton.tumblr.com/post/58684376490/like-a-train-in-the-night)
 * Music by Classical 8 Bit (http://classical8bit.tumblr.com/) / CC BY
 */

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    pixelArt: true
};

var horseFrames = [];
for(var i=0; i<12; i++)
{
    horseFrames.push({
        key: 'horse'+ ('0'+i).slice(-2),
        frame: '__BASE'
    });
}

var game = new Phaser.Game(config);

function preload ()
{
    // Loading horse animation
    for(var i=0; i<horseFrames.length; i++)
    {
        this.load.image(horseFrames[i].key, 'assets/animations/horse/frame_' + ('0'+i).slice(-2) + '_delay-0.05s.png');
    }

    // Loading music
    this.load.audio('left', [
        'assets/audio/Rossini - William Tell Overture (8 Bits Version)/left.ogg',
        'assets/audio/Rossini - William Tell Overture (8 Bits Version)/left.mp3'
    ]);
    this.load.audio('right', [
        'assets/audio/Rossini - William Tell Overture (8 Bits Version)/right.ogg',
        'assets/audio/Rossini - William Tell Overture (8 Bits Version)/right.mp3'
    ]);
}

var horseLeft;
var horseRight;
var soundLeft;
var soundRight;

function create ()
{
    this.anims.create({
        key: 'horse',
        frames: horseFrames,
        frameRate: 20,
        repeat: -1
    });

    horseLeft = this.add.sprite(200, 300, 'horse00');
    horseLeft.setScale(400/480);
    horseLeft.play('horse');

    horseRight = this.add.sprite(600, 300, 'horse00');
    horseRight.setScale(400/480);
    horseRight.play('horse');

    soundLeft = this.game.sound.add('left');
    soundLeft.play({
        loop: true
    });

    soundRight = this.game.sound.add('right');
    soundLeft.play({
        loop: true
    });


    var gui = new dat.GUI();

    var sm = gui.addFolder('Sound Manager');
    sm.add(this.game.sound, 'mute').listen();
    sm.add(this.game.sound, 'volume', 0, 1).listen();
    sm.add(this.game.sound, 'rate', 0.5, 2).listen();
    sm.add(this.game.sound, 'detune', -1200, 1200).step(50).listen();
    sm.open();

    var sl = gui.addFolder('Left');
    sl.add(soundLeft, 'mute').listen();
    sl.add(soundLeft, 'volume', 0, 1).listen();
    sl.add(soundLeft, 'rate', 0.5, 2).listen();
    sl.add(soundLeft, 'detune', -1200, 1200).step(50).listen();
    sl.open();

    var sr = gui.addFolder('Right');
    sr.add(soundRight, 'mute').listen();
    sr.add(soundRight, 'volume', 0, 1).listen();
    sr.add(soundRight, 'rate', 0.5, 2).listen();
    sr.add(soundRight, 'detune', -1200, 1200).step(50).listen();
    sr.open();
}

function update ()
{
    horseLeft.anims.timeScale(soundLeft.totalRate);
    horseRight.anims.timeScale(soundRight.totalRate);

    horseLeft.setAlpha(this.game.sound.volume * soundLeft.volume);
    horseRight.setAlpha(this.game.sound.volume * soundRight.volume);

    horseLeft.visible = !this.game.sound.mute && !soundLeft.mute;
    horseRight.visible = !this.game.sound.mute && !soundRight.mute;
}
