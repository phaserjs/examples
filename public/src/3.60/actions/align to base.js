class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setPath('assets/sprites');

        this.load.image('image1', 'advanced_wars_tank.png');
        this.load.image('image2', 'amiga-cursor.png');
        this.load.image('image3', 'apple.png');
        this.load.image('image4', 'asuna_by_vali233.png');
        this.load.image('image5', 'beball1.png');
        this.load.image('image6', 'flectrum.png');
        this.load.image('image7', 'brain.png');
        this.load.image('image8', 'budbrain_chick.png');
        this.load.image('image9', 'carrot.png');
        this.load.image('image10', 'clown.png');
        this.load.image('image11', 'blue_ball.png');
        this.load.image('image12', 'flower-exo.png');
        this.load.image('image13', 'mushroom-32x32.png');
        this.load.image('image14', 'orange-cat1.png');
        this.load.image('image15', 'phaser-dude.png');
    }

    create ()
    {
        this.add.rectangle(0, 500, 800, 100, 0x9d2d9d).setOrigin(0, 0);

        const sprites = [];

        for (let i = 1; i < 15; i++)
        {
            sprites.push(this.add.sprite(150, 493, `image${i}`));
        }

        //  Align all of the sprites against the first one, using RIGHT_BOTTOM
        Phaser.Actions.AlignTo(sprites, Phaser.Display.Align.RIGHT_BOTTOM);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
