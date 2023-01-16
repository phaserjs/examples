class Example extends Phaser.Scene
{
    constructor()
    {
        super({ key: 'test', active: false });
    }

    init (data)
    {
        this.png = data.image;
    }

    preload ()
    {
        this.load.image('mech', 'assets/pics/' + this.png);
    }

    create (data)
    {
        this.add.image(data.x, data.y, 'mech');
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
game.scene.start('test', { image: 'titan-mech.png', x: 400, y: 300 });
