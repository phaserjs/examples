class Background extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'background', active: true });

        this.image;
    }

    preload ()
    {
        this.load.image('einstein', 'assets/pics/ra-einstein.png');
    }

    create ()
    {
        this.image = this.add.image(200, 150, 'einstein');

        this.cameras.main.setSize(400, 300);

        this.cameras.add(400, 0, 400, 300);
        this.cameras.add(0, 300, 400, 300);
        this.cameras.add(400, 300, 400, 300);
    }

    update ()
    {
        this.image.rotation += 0.01;
    }
}

class Demo extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'demo', active: true });
    }

    preload ()
    {
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    }

    create ()
    {
        this.arrow = this.add.image(400, 300, 'arrow').setOrigin(0, 0.5);
    }

    update (time, delta)
    {
        this.arrow.rotation += 0.01;
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ Background, Demo ]
};

const game = new Phaser.Game(config);
