class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.path = 'assets/animations/aseprite/';

        this.load.aseprite('paladin', 'paladin.png', 'paladin.json');
    }

    create ()
    {
        // const tags = this.anims.createFromAseprite('paladin');
        // console.log(tags);

        const step = this.anims.createFromAseprite('paladin', 'step');
        const delay = this.anims.createFromAseprite('paladin', 'Delay');
        const release = this.anims.createFromAseprite('paladin', 'release');

        console.log(step);
        console.log(delay);
        console.log(release);

        const sprite = this.add.sprite(500, 300).play({ key: 'step', repeat: -1 }).setScale(6);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
