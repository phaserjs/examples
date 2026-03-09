class Example extends Phaser.Scene
{
    color = new Phaser.Display.Color();
    noiseConfigX = {
        noiseCells: [ 16, 9, 4 ],
        noiseSeed: [ 2, 3, 4 ]
    };
    noiseConfigY = { ...this.noiseConfigX, noiseSeed: [ 5, 6, 7 ] };
    rectangles = [];

    create()
    {
        const { width, height } = this.scale;

        // Increase step to 16 or 32 to decrease count if performance is unacceptable.
        const step = 8;

        for (let y = 0; y <= height; y += step)
        {
            for (let x = 0; x <= width; x += step)
            {
                const vector = [ x / width, y / height ];
                const rectangle = this.add.rectangle(x, y, 4, 4, 0xff0000);
                rectangle.baseVector = [ x, y ];
                rectangle.noiseVector = vector;
                this.rectangles.push(rectangle);
            }
        }
    }

    update(time)
    {
        // Update pre-existing configs,
        // because creating many objects is expensive.
        this.noiseConfigX.noiseFlow = time / 1000;
        this.noiseConfigY.noiseFlow = time / 1000;
        const noiseConfigX = this.noiseConfigX;
        const noiseConfigY = this.noiseConfigY;
        const color = this.color;

        const { width, height } = this.scale;

        for (const rectangle of this.rectangles)
        {
            const vector = rectangle.noiseVector;
            const hashX = Phaser.Math.HashSimplex(vector, noiseConfigX);
            const hashY = Phaser.Math.HashSimplex(vector, noiseConfigY);

            rectangle.x = rectangle.baseVector[0] + hashX * 8;
            rectangle.y = rectangle.baseVector[1] + hashY * 8;

            color.setGLTo(
                hashX / 2 + (rectangle.baseVector[0] / width) - (rectangle.baseVector[1] / height / 2),
                (rectangle.baseVector[1] / height) - (rectangle.baseVector[0] / width / 2),
                0.5 + hashY / 2
            );
            rectangle.setFillStyle(color.color);
        }
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
