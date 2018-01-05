/**
 * @author    Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 */

var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: updatePauseResumeButton
    },
    pixelArt: true
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bg', 'assets/pics/cougar-dragonsun.png');

    this.load.spritesheet('button', 'assets/ui/flixel-button.png', { frameWidth: 80, frameHeight: 20 });

    this.load.bitmapFont('nokia', 'assets/fonts/bitmap/nokia16black.png', 'assets/fonts/bitmap/nokia16black.xml');

    this.load.audio('sfx', [
        'assets/audio/SoundEffects/magical_horror_audiosprite.ogg',
        'assets/audio/SoundEffects/magical_horror_audiosprite.mp3'
    ]);
}

var markers = [
    { name: 'charm', start: 0, duration: 2.7, config: {} },
    { name: 'curse', start: 4, duration: 2.9, config: {} },
    { name: 'fireball', start: 8, duration: 5.2, config: {} },
    { name: 'spell', start: 14, duration: 4.7, config: {} },
    { name: 'soundscape', start: 20, duration: 18.8, config: {} }
];

var fx;

function create ()
{
    var bg = this.add.image(400, 300, 'bg');
    bg.setScale(800/bg.width, 600/bg.height);

    fx = this.game.sound.add('sfx');

    for (var i=0; i < markers.length; i++)
    {
        var marker = markers[i];

        fx.addMarker(marker);

        makeButton.bind(this)(marker.name, 680, 115 + i*40);
    }

    makePauseResumeButton.bind(this)();


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
        var button = event.gameObject;

        if (button.name === 'pause')
        {
            if (fx.isPaused)
            {
                fx.resume();
            }
            else if (fx.isPlaying)
            {
                fx.pause();
            }
            else
            {
                setButtonFrame(button, 0);
                return;
            }

            setButtonFrame(button, 2);
        }
        else
        {
            fx.play(button.name);
            setButtonFrame(button, 2);
        }
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
    button.setScale(2, 1.5);

    var text = this.add.bitmapText(x - 40, y - 8, 'nokia', name, 16);
    text.x += (button.width - text.width) / 2;
}

var pauseResumeButton;
var pauseResumeButtonText;

function makePauseResumeButton()
{
    pauseResumeButton = this.add.image(680, 395, 'button', 1).setInteractive();
    pauseResumeButton.name = 'pause';
    pauseResumeButton.setScale(2, 1.5);

    pauseResumeButtonText = this.add.bitmapText(640, 387, 'nokia', '', 16);
}

function updatePauseResumeButton()
{
    if(fx.isPaused)
    {
        pauseResumeButtonText.text = 'resume';
    }
    else if (fx.isPlaying)
    {
        pauseResumeButtonText.text = 'pause';
    }
    else
    {
        pauseResumeButtonText.text = 'stopped';
    }

    pauseResumeButtonText.x = 640 + (pauseResumeButton.width - pauseResumeButtonText.width) / 2;
}

function setButtonFrame(button, frame)
{
    button.frame = button.scene.textures.getFrame('button', frame);
}
