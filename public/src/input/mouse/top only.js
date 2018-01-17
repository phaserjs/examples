var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
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
    var sprite1 = this.add.sprite(400, 300, 'eye').setInteractive();
    var sprite2 = this.add.sprite(450, 350, 'eye').setInteractive();

    sprite1.name = 'bob';
    sprite2.name = 'ben';

    this.input.topOnly = true;

    this.input.events.on('POINTER_OVER_EVENT', function (event) {

        console.log('OVER', event.gameObject.name);

        event.gameObject.setTint(0x00ff00);

    });

    this.input.events.on('POINTER_OUT_EVENT', function (event) {

        console.log('OUT', event.gameObject.name);

        if (event.gameObject.input.isDown)
        {
            event.gameObject.setTint(0xff0000);
        }
        else
        {
            event.gameObject.clearTint();
        }

    });

    this.input.on('pointerdown', function (event) {

        if (event.gameObject)
        {
            console.log('DOWN', event.gameObject.name);

            event.gameObject.setTint(0xff0000);
        }

    });

    this.input.on('pointerup', function () {

        if (sprite1.input.isOver)
        {
            sprite1.setTint(0x00ff00);
        }
        else
        {
            sprite1.clearTint();
        }

        if (sprite2.input.isOver)
        {
            sprite2.setTint(0x00ff00);
        }
        else
        {
            sprite2.clearTint();
        }

    });
}
