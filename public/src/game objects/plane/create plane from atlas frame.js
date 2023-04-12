class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient13.png');

        this.load.atlas('megaset', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.plane = this.add.plane(400, 300, 'megaset', 'phaser2');

        this.plane.setViewHeight(512);

        this.r = 0;
    }

    update ()
    {
        this.plane.rotateX = this.r;

        this.r += 1;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a440a',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
