var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var image;
var text;
var timedEvent;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create ()
{
    image = this.add.image(400, 300, 'einstein');

    text = this.add.text(32, 32);

    timedEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, repeat: 9 });

    this.input.events.on('MOUSE_DOWN_EVENT', function (event) {

        if (timedEvent.paused)
        {
            timedEvent.resume();
        }
        else
        {
            timedEvent.pause();
        }

    });
}

function update ()
{
    text.setText('Event.progress: ' + timedEvent.getProgress().toString().substr(0, 4) + '\nEvent.repeatCount: ' + timedEvent.repeatCount + '\nPaused?: ' + timedEvent.paused);
}

function onEvent ()
{
    image.scaleX *= 0.95;
    image.scaleY *= 0.95;
    image.rotation += 0.04;
}
