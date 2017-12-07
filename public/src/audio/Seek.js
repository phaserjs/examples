var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    },
    pixelArt: true
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.audio('CatAstroPhi', [
        'assets/audio/CatAstroPhi_shmup_normal.ogg',
        'assets/audio/CatAstroPhi_shmup_normal.mp3'
    ]);
}

function create () {

    var catAstroPhi = this.game.sound.add('CatAstroPhi');

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
}
