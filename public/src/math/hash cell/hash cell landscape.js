class Example extends Phaser.Scene
{
    acc = 0;
    dist = 0;
    rows = [];
    ship;

    preload ()
    {
        this.load.image('asteroid1', 'assets/games/asteroids/asteroid1.png');
        this.load.image('asteroid2', 'assets/games/asteroids/asteroid2.png');
        this.load.image('asteroid3', 'assets/games/asteroids/asteroid3.png');
        this.load.image('ship', 'assets/games/asteroids/ship.png');
    }

    create()
    {
        this.ship = this.add.image(640, 500, 'ship').setRotation(-Math.PI / 2).setDepth(100);

        for (let y = 0; y < this.scale.height + 128; y += 8)
        {
            this.update(0, 16.7);
        }
    }

    update (time, delta)
    {
        const { width, height } = this.scale;
        const d = delta / 2;
        this.acc += d;
        this.dist += d;

        this.ship.setPosition(
            640 + 64 * Math.cos(this.dist / 500),
            500 + 64 * Math.sin(this.dist / 487)
        );

        // Advance landscape.
        const color = new Phaser.Display.Color();
        for (const row of this.rows)
        {
            if (row[0].y > height + 128)
            {
                for (const asteroid of row)
                {
                    asteroid.destroy();
                }
                this.rows = this.rows.filter(r => r !== row);
            }
            for (const asteroid of row)
            {
                asteroid.y += d;
                color.gray((asteroid.landscapeTint + 0.75 - 0.35 * asteroid.depth * 8 / height) * 255);
                asteroid.setTint(color.color);
            }
        }

        const configA = {
            noiseCells: [ 4, 3, 4, 4 ],
            noiseWrap: [ 4, 9, 4, 4 ],
            noiseIterations: 3
        };

        if (this.acc > 8)
        {
            this.acc -= 8;

            for (const row of this.rows)
            {
                for (const asteroid of row)
                {
                    asteroid.depth++;
                }
            }

            const row = [];
            this.rows.push(row);
            for (let x = 0; x <= width; x += 32)
            {
                const rotation = Phaser.Math.Hash(x + this.dist - 1) * Math.PI * 2;
                const dy = Phaser.Math.HashCell([x / width, this.dist / height, 0, 0], configA);
                const asteroidNumber = Math.ceil(Phaser.Math.Hash(x + this.dist - 2) * 3);
                color.gray(255 * (0.5 + dy * 0.5));

                const asteroid = this.add.image(
                    x,
                    dy * -128 - 64,
                    `asteroid${asteroidNumber}`
                )
                .setScale(2)
                .setRotation(rotation)
                .setTintMode(Phaser.TintModes.HARD_LIGHT);
                asteroid.landscapeTint = dy * 0.25;
                row.push(asteroid);
            }
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
