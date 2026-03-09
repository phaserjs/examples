class Example extends Phaser.Scene
{
    noise2D;
    noise3D;
    noise4D;

    create()
    {
        const { width, height } = this.scale;

        this.noise2D = this.add.noisecell2d({ noiseCells: [ 5, 9] }, width * 1 / 6, height / 2, width / 3, height);
        this.noise3D = this.add.noisecell3d({ noiseCells: [ 5, 9, 4 ] }, width * 3 / 6, height / 2, width / 3, height);
        this.noise4D = this.add.noisecell4d({ noiseCells: [ 5, 9, 4, 4 ] }, width * 5 / 6, height / 2, width / 3, height);

        this.add.text(10, 10, '2D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width / 3 + 10, 10, '3D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width * 2 / 3 + 10, 10, '4D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
    }

    update (time)
    {
        const v = Math.cos(time / 1000) * 0.5 + 0.5;

        this.noise2D.noiseVariation = [ v, v ];
        this.noise3D.noiseVariation = [ v, v, v ];
        this.noise4D.noiseVariation = [ v, v, v, v ];
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
