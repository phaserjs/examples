class Example extends Phaser.Scene
{
    noise;

    create()
    {
        const { width, height } = this.scale;

        // Render a noise texture with internal repetition.
        this.noise = this.add.noisecell2d({
            noiseCells: [ 8, 4 ],
            noiseWrap: [ 2, 2 ] // Wrap every 2 cells in X and Y, relative to noiseCells.
        }, 0, 0, 512, 256).setRenderToTexture('noise');

        // Render several images to show the texture tiles.
        // This happens with any integer cells:wrap ratio.
        this.add.image(width / 2 - 256, height / 2 - 128, 'noise');
        this.add.image(width / 2 + 256, height / 2 - 128, 'noise').setTint(0xff8844);
        this.add.image(width / 2 - 256, height / 2 + 128, 'noise').setTint(0x44ff88);
        this.add.image(width / 2, height / 2 + 256, 'noise').setTint(0x8844ff).setOrigin(0,1).setRotation(0.1);
    }

    update (time)
    {
        const t = time / 5000;
        this.noise.noiseOffset[0] = Math.cos(t);
        this.noise.noiseOffset[1] = Math.sin(t);
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
