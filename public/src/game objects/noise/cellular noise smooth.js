class Example extends Phaser.Scene
{
    create()
    {
        const { width, height } = this.scale;

        this.add.noisecell2d({
            noiseCells: [ 8, 9 ],
            noiseColorStart: 0xffcc66,
            noiseColorEnd: 0x442288
        }, width / 4, height / 2, width / 2, height);

        this.add.noisecell2d({
            noiseCells: [ 8, 9 ],
            noiseColorStart: 0xccff66,
            noiseColorEnd: 0x662266,
            noiseSmoothing: 2,
            noiseMode: 2 // Render cells with smooth intersections.
        }, width * 3 / 4, height / 2, width / 2, height);
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
