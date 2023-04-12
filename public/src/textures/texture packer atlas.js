class Example extends Phaser.Scene
{
    disk;
    atari;

    preload ()
    {
        this.load.path = 'assets/atlas/';

        this.load.atlas('sprites', 'tp3test.png', 'tp3test.json');
    }

    create ()
    {
        //  Include .png until 'Trim filenames' works

        //  This one has a custom pivot point:
        this.atari = this.add.image(150, 100, 'sprites', 'atari130xe.png');

        //  Default pivot point
        this.add.image(200, 300, 'sprites', 'elephant.png');
        this.add.image(500, 200, 'sprites', 'exocet_spaceman.png');

        //  This one has a custom pivot point:
        this.disk = this.add.image(300, 300, 'sprites', 'copy-that-floppy.png');
    }

    update ()
    {
        this.atari.rotation += 0.01;
        this.disk.rotation += 0.01;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
