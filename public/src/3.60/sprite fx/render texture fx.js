class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('lolly', 'assets/sprites/lollipop.png');
        this.load.image('coffee', 'assets/sprites/coffee.png');
        this.load.image('ghost', 'assets/sprites/ghost1.png');
        this.load.image('planet', 'assets/sprites/planet1.png');
        this.load.image('logo', 'assets/sprites/phaser2.png');
        this.load.image('debug', 'assets/pics/checker.png');
        this.load.image('sky', 'assets/skies/fire.png');
        this.load.image('noise', 'assets/tests/noisesmall.png');
    }

    create ()
    {
        const logo = this.add.image(0, 0, 'logo');

        logo.preFX.addBokeh();

        const rt = this.add.renderTexture(400, 300, 800, 600);

        rt.draw(logo, 100, 100);
        rt.draw(logo, 300, 300);
        rt.draw(logo, 500, 500);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000044',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
