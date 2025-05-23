class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('ayu', 'assets/pics/ayu.png');
    }

    create ()
    {
        this.scale.resize(800, 600);

        const sprite = this.add.sprite(400, 300, 'ayu');

        const rt = this.make.renderTexture({x: 0, y: 0, width: 800, height: 600, add: false}).setOrigin(0.0);

        const mask = new Phaser.Display.Masks.BitmapMask(this, rt);

        console.log(this.renderer);

        rt.fill(0x000000, 1);

        this.input.on('pointerdown', pointer => {
            sprite.setMask(mask);
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 200,
    height: 150,
    backgroundColor: '#0a440a',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);