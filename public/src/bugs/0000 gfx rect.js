class Demo extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    create ()
    {
        const g = this.add.graphics();

        g.fillRect(0, 0, 400, 300);

        const g2 = this.add.graphics();

        g2.fillRect(400, 0, 400, 300);

        this.add.rectangle(400, 300, 64, 64, 0xff0000);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    backgroundColor: '#00007d',
    scene: Demo
};

const game = new Phaser.Game(config);
