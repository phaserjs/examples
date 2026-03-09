class Example extends Phaser.Scene
{
    create()
    {
        const { width, height } = this.scale;

        this.add.noise({}, width * 1 / 8, height / 2, width / 4, height);
        this.add.noise({ noisePower: 0.1 }, width * 3 / 8, height / 2, width / 4, height);
        this.add.noise({ noisePower: 2 }, width * 5 / 8, height / 2, width / 4, height);
        this.add.noise({ noisePower: 32 }, width * 7 / 8, height / 2, width / 4, height);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1280,
    height: 720,
    scene: Example
};

const game = new Phaser.Game(config);
