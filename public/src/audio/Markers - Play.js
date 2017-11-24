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
    this.load.image('title', 'assets/pics/catastrophi.png');

    this.load.spritesheet('button', 'assets/ui/flixel-button.png', { frameWidth: 80, frameHeight: 20 });

    this.load.bitmapFont('nokia', 'assets/fonts/bitmap/nokia16black.png', 'assets/fonts/bitmap/nokia16black.xml');

    this.load.audio('sfx', [
        'assets/audio/SoundEffects/fx_mixdown.ogg',
        'assets/audio/SoundEffects/fx_mixdown.mp3'
    ]);
}

var markers = [{
    name: 'alien death',
    start: 1,
    duration: 1.0,
    config: {}
}, {
    name: 'boss hit',
    start: 3,
    duration: 0.5,
    config: {}
}, {
    name: 'escape',
    start: 4,
    duration: 3.2,
    config: {}
}, {
    name: 'meow',
    start: 8,
    duration: 0.5,
    config: {}
}, {
    name: 'numkey',
    start: 9,
    duration: 0.1,
    config: {}
}, {
    name: 'ping',
    start: 10,
    duration: 1.0,
    config: {}
}, {
    name: 'death',
    start: 12,
    duration: 4.2,
    config: {}
}, {
    name: 'shot',
    start: 17,
    duration: 1.0,
    config: {}
}, {
    name: 'squit',
    start: 19,
    duration: 0.3
}];

function create ()
{
    this.add.image(400, 300, 'title');

    var sounds = {};

    for (var i=0; i < markers.length; i++)
    {
        var marker = markers[i];

        var sound = this.game.sound.add('sfx');

        sound.addMarker(marker);

        sounds[marker.name] = sound;

        makeButton.bind(this)(marker.name, 680, 115 + i*40);
    }

    this.input.events.on('GAME_OBJECT_OVER_EVENT', function (event)
    {
        setButtonFrame(event.gameObject, 0);
    });
    this.input.events.on('GAME_OBJECT_OUT_EVENT', function (event)
    {
        setButtonFrame(event.gameObject, 1);
    });
    this.input.events.on('GAME_OBJECT_DOWN_EVENT', function (event)
    {
        var markerName = event.gameObject.name;

        sounds[markerName].play(markerName);

        setButtonFrame(event.gameObject, 2);
    });
    this.input.events.on('GAME_OBJECT_UP_EVENT', function (event)
    {
        setButtonFrame(event.gameObject, 0);
    });
}

function makeButton(name, x, y)
{
    var button = this.add.image(x, y, 'button', 0).setInteractive();
    button.name = name;
    button.scaleX = 2;
    button.scaleY = 1.5;

    var text = this.add.bitmapText(x - 40, y - 8, 'nokia', name, 16);
    text.x += (button.width - text.width) / 2;
}

function setButtonFrame(button, frame)
{
    button.frame = button.scene.textures.getFrame('button', frame);
}
