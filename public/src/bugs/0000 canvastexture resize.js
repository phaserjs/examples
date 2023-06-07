class Demo extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.spritesheet('swatch', 'assets/swatches/deluxe-paint-swatch.png', { frameWidth: 512, frameHeight: 16 });
    }

    create ()
    {
        const ct = this.textures.createCanvas('ct1', 3, 1);

        const sprite = this.add.sprite(400, 300, 'ct1');

        let width = 16;
        let height = 16;

        ct.setSize(width, height);

        ct.drawFrame('swatch', 1);

        this.input.on('pointerdown', () => {

            width += 16;
            // height += 16;

            ct.setSize(width, height);
            sprite.setSize(width, height);

            ct.update();
            ct.refresh();

            console.log(ct.width, ct.height);

            ct.drawFrame('swatch', 1);

            console.log(sprite.width, sprite.height);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: Demo
};

const game = new Phaser.Game(config);
