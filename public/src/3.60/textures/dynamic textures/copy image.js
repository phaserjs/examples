class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('card', 'assets/pics/slug.png');
    }

    create ()
    {
        //  card image is 256 x 256 in size
        const area1 = this.textures.addDynamicTexture('area1', 128, 128);
        const area2 = this.textures.addDynamicTexture('area2', 128, 128);
        const area3 = this.textures.addDynamicTexture('area3', 128, 128);
        const area4 = this.textures.addDynamicTexture('area4', 128, 128);

        area1.fill(0x00ff00);
        area2.fill(0x00ff00);
        area3.fill(0x00ff00);
        area4.fill(0x00ff00);

        area1.drawFrame('card');
        area2.drawFrame('card');
        area3.drawFrame('card');
        area4.drawFrame('card');

        this.add.sprite(100, 100, 'area1').setOrigin(0);
        this.add.sprite(100 + 129, 100, 'area2').setOrigin(0);
        this.add.sprite(100, 100 + 129, 'area3').setOrigin(0);
        this.add.sprite(100 + 129, 100 + 129, 'area4').setOrigin(0);

        this.add.sprite(400, 100, 'card').setOrigin(0);
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
