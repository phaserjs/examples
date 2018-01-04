var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
}

function create ()
{
    for (var i = 0; i < 14; i++)
    {
        this.add.sprite(100 + i * 30, 100 + i * 30, 'eye').setInteractive();
    }

    //  If you disable topOnly it will fire events for all objects the pointer is over
    //  regardless of their place on the display list
    this.input.setTopOnly(true);

    //  Events

    this.input.events.on('GAME_OBJECT_OVER_EVENT', function (event) {

        event.gameObject.setTint(0xff0000);

    });

    this.input.events.on('GAME_OBJECT_OUT_EVENT', function (event) {

        event.gameObject.clearTint();

    });

    var text = this.add.text(10, 10, 'Input.topOnly: true', { font: '16px Courier', fill: '#00ff00' });

    this.input.events.on('POINTER_DOWN_EVENT', function (event) {
    
        if (this.input.topOnly)
        {
            this.input.setTopOnly(false);
            text.setText('Input.topOnly: false');
        }
        else
        {
            this.input.setTopOnly(true);
            text.setText('Input.topOnly: true');
        }

    
    }, 0, this);
}
