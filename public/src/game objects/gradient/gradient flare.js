class Example extends Phaser.Scene
{
    gradient;

    preload ()
    {
        this.load.image('zod', 'assets/pics/zod4.png');
    }

    create ()
    {
        const zod = this.add.image(400, 300, 'zod');
        Phaser.Actions.FitToRegion(zod, 1);

        this.gradient = this.add.gradient({
            repeatMode: 1, // TRUNCATE
            start: { x: 0.5, y: 0.5 },
            shape: { x: 0.5, y: 0 },
            shapeMode: 2, // RADIAL
            bands: [
                {
                    colorStart: [ 0.5, 1, 1, 0 ],
                    colorEnd: [ 1, 1, 1, 1 ],
                    interpolation: 4,
                    start: 0.2,
                    end: 0.4
                },
                {
                    colorStart: [ 1, 1, 1, 1 ],
                    colorEnd: [ 1, 0.7, 0.3, 0 ],
                    interpolation: 3,
                    start: 0.4,
                    end: 0.8
                },
                {
                    colorStart: [ 0, 0, 0, 0 ],
                    colorEnd: [ 0, 0, 0, 0 ],
                    start: 0.8,
                    end: 1
                }
            ]
        }, 335, 215, 400, 400);
    }

    update (time)
    {
        this.gradient.offset = 0.03 * Math.sin(time / 1000);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
