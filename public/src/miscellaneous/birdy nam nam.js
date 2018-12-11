var loaderSceneConfig = {
    key: 'loader',
    active: true,
    preload: bootLoader,
    create: bootCreate
};

var demoSceneConfig = {
    key: 'demo',
    active: false,
    visible: false,
    preload: preload,
    create: create
};

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 640,
    height: 338,
    scene: [ loaderSceneConfig, demoSceneConfig ]
};

var track;
var bird;
var egg = 0;
var chick1;
var chick2;
var chick3;

var game = new Phaser.Game(config);

function bootLoader ()
{
    this.load.image('loader', 'assets/demoscene/birdy-nam-nam-loader.png');
}

function bootCreate ()
{
    this.add.image(0, 0, 'loader').setOrigin(0);

    this.scene.launch('demo');
}

function preload ()
{
    this.load.audio('jungle', [ 'assets/audio/jungle.ogg', 'assets/audio/jungle.mp3' ]);
    this.load.animation('birdyAnims', 'assets/demoscene/birdy.json');
    this.load.image('bg1', 'assets/demoscene/birdy-nam-nam-bg1.png');
    this.load.image('bg2', 'assets/demoscene/birdy-nam-nam-bg2.png');
    this.load.atlas('birdy', 'assets/demoscene/budbrain.png', 'assets/demoscene/budbrain.json');
}

function create ()
{
    this.sound.pauseOnBlur = false;

    track = this.sound.add('jungle');

    this.add.image(0, 0, 'bg1').setOrigin(0);

    this.anims.create({
        key: 'lay',
        frames: this.anims.generateFrameNames('birdy', { prefix: 'lay', start: 0, end: 19 }),
        frameRate: 28,
        delay: 1,
        onComplete: dropEgg,
        callbackScope: this
    });

    bird = this.add.sprite(328, 152, 'birdy', 'lay0').setOrigin(0).setDepth(10);

    track.once('play', function ()
    {
        bird.anims.delayedPlay(1.5, 'lay');
    });

    track.play();
}

function dropEgg ()
{
    var smallEgg = this.add.image(bird.x + 116, 228, 'birdy', 'egg-small').setOrigin(0);

    this.tweens.add({
        targets: smallEgg,
        y: 288,
        ease: 'Linear',
        delay: 500,
        duration: 200,
        onComplete: moveBird,
        callbackScope: this
    });

    egg++;
}

function moveBird ()
{
    if (egg < 3)
    {
        bird.x -= 124;

        bird.play('lay');
    }
    else
    {
        //  Ready for scene 2
        this.time.addEvent({ delay: 800, callback: changeScene, callbackScope: this });
    }
}

function changeScene ()
{
    this.children.removeAll();

    this.add.image(0, 0, 'bg2').setOrigin(0);

    chick1 = this.add.sprite(100, 72, 'birdy', 'hatch1').setOrigin(0);
    chick2 = this.add.sprite(260, 72, 'birdy', 'hatch1').setOrigin(0);
    chick3 = this.add.sprite(420, 72, 'birdy', 'hatch1').setOrigin(0);

    chick1.anims.delayedPlay(1.2, 'hatch');
    chick2.anims.delayedPlay(2.2, 'hatch');
    chick3.anims.delayedPlay(3.2, 'hatch');

    this.time.addEvent({ delay: 5500, callback: checkDisOut, callbackScope: this });
}

function checkDisOut ()
{
    chick1.anims.play('lookRight');
    chick2.anims.play('checkDisOut');
    chick3.anims.play('lookLeft');
}
