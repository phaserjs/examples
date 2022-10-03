class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
        this.load.image('phaser', 'assets/sprites/phaser2.png');
        this.load.image('checker', 'assets/pics/checker.png');
    }

    create ()
    {
        this.add.image(400, 300, 'checker');

        const bunny = this.add.image(400, 300, 'bunny');

        const phaser = this.make.sprite({
            x: 400,
            y: 300,
            key: 'phaser',
            add: false
        });

        bunny.mask = new Phaser.Display.Masks.BitmapMask(phaser);

        this.input.on('pointermove', (pointer) => {

            phaser.x = pointer.x;
            phaser.y = pointer.y;

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
