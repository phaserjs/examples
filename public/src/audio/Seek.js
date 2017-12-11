var config = {
    type: Phaser.WEBGL,
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

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bg', 'assets/animations/nyan/bg.png');

    this.load.image('rainbow', 'assets/animations/nyan/rainbow.png');

    this.load.spritesheet('cat', 'assets/animations/nyan/cat/cat.png', { frameWidth: 97, frameHeight: 59 });

    this.load.audio('CatAstroPhi', [
        'assets/audio/CatAstroPhi_shmup_normal.ogg',
        'assets/audio/CatAstroPhi_shmup_normal.mp3'
    ]);
}

var cat;
var catAstroPhi;
var rainbowMask;

function create () {

    catAstroPhi = this.game.sound.add('CatAstroPhi');

    var gui = new dat.GUI();

    var sm = gui.addFolder('CatAstroPhi Sound');
    sm.add(catAstroPhi, 'seek', 0, catAstroPhi.duration).step(0.01).listen();
    sm.add(catAstroPhi, 'rate', 0.5, 2).listen();
    sm.add(catAstroPhi, 'detune', -1200, 1200).step(50).listen();
    sm.add(catAstroPhi, 'play');
    sm.add(catAstroPhi, 'pause');
    sm.add(catAstroPhi, 'resume');
    sm.add(catAstroPhi, 'stop');
    sm.open();

    catAstroPhi.play({
        seek: 3.000
    });

    // play() method call above has same effect as
    // two lines below but it is done in only one command

    // catAstroPhi.play();
    // catAstroPhi.seek = 3.000;

    var bg = this.add.image(400, 300, 'bg');

    rainbowMask = this.make.graphics();

    var rainbow = this.add.image(400, 300, 'rainbow');
    rainbow.mask = new Phaser.Display.Masks.GeometryMask(this, rainbowMask);

    this.anims.create({
        key: 'cat',
        frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 6, first: 0 }),
        frameRate: 15,
        repeat: -1
    });

    cat = this.add.sprite(0, 300, 'cat');
    cat.play('cat');
}

function update ()
{
    cat.x = cat.width/2 + (catAstroPhi.seek / catAstroPhi.duration) * (800 - cat.width);

    rainbowMask.clear();
    rainbowMask.fillRect(0, 0, cat.x - 15, 600);

    if(!catAstroPhi.isPlaying && cat.anims.isPlaying)
    {
        cat.anims.pause();
    }
    else if (catAstroPhi.isPlaying && !cat.anims.isPlaying)
    {
        cat.anims.resume();
    }

    cat.anims.timeScale(catAstroPhi.totalRate);
}
