class Menu extends Phaser.Scene
{
    constructor ()
    {
        super('menu');
    }

    create ()
    {
        this.add.text(10, 10, 'Press 1, 2 or 3', { font: '16px Courier', fill: '#00ff00' });

        this.input.keyboard.once('keyup-ONE', function ()
        {

            this.scene.start('demo', { id: 0, image: 'acryl-bladerunner.png' });

        }, this);

        this.input.keyboard.once('keyup-TWO', function ()
        {

            this.scene.start('demo', { id: 1, image: 'babar-phaleon-coco.png' });

        }, this);

        this.input.keyboard.once('keyup-THREE', function ()
        {

            this.scene.start('demo', { id: 2, image: 'babar-pym-wait.png' });

        }, this);

        this.events.on('shutdown', this.shutdown, this);
    }

    shutdown ()
    {
        //  We need to clear keyboard events, or they'll stack up when the Menu is re-run
        this.input.keyboard.shutdown();
    }
}

class Demo extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'demo' });
    }

    init (data)
    {
        console.log('init', data);

        this.imageID = data.id;
        this.imageFile = data.image;
    }

    preload ()
    {
        this.load.image(`pic${this.imageID}`, `assets/pics/${this.imageFile}`);
    }

    create ()
    {
        this.add.text(10, 10, 'Click to Return', { font: '16px Courier', fill: '#00ff00' });

        this.add.image(400, 300, `pic${this.imageID}`).setScale(2);

        this.input.once('pointerup', function ()
        {

            this.scene.start('menu');

        }, this);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d8d',
    pixelArt: true,
    parent: 'phaser-example',
    scene: [ Menu, Demo ]
};

const game = new Phaser.Game(config);
