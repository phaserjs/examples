class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('wheel', 'assets/pics/large-color-wheel.png');
    }

    create ()
    {
        const texture = this.textures.addDynamicTexture('wheelTexture', 800, 600)

        //  Draw the color wheel to our texture
        texture.stamp('wheel', null, 400, 300);

        //  Now add the finished texture to a Sprite
        this.add.sprite(400, 300, 'wheelTexture');

        //  Add a Rectangle so we can show the color we've grabbed
        const rect = this.add.rectangle(10, 10, 128, 128, 0xffffff).setOrigin(0, 0);

        const callback = (color) => {

            rect.setFillStyle(color.color);

        };

        this.input.on('pointerdown', pointer => {

            texture.snapshotPixel(pointer.worldX, pointer.worldY, callback);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d6d',
    scene: Example
};

const game = new Phaser.Game(config);
