class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('chunk', 'assets/sprites/chunk.png');
    }

    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa6622 } });

        const polygon = new Phaser.Geom.Polygon([ 200, 150, 400, 300, 600, 150, 750, 300, 600, 450, 200, 450, 50, 300 ]);

        const { left, top, width, height } = Phaser.Geom.Polygon.GetAABB(polygon);

        const boundingBox = this.add.zone(left, top, width, height).setOrigin(0, 0);

        // Static body
        this.physics.add.existing(boundingBox, true);

        const chunks = this.physics.add.group({
            key: 'chunk',
            quantity: 240,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            velocityX: 50,
            velocityY: 50
        });

        Phaser.Actions.RandomRectangle(chunks.getChildren(), { x: 0, y: 0, width: 800, height: 100 });

        this.physics.add.overlap(
            boundingBox,
            chunks,
            null,
            function process (bbox, chunk)
            {
                return Phaser.Geom.Polygon.ContainsPoint(polygon, chunk);
            }
        );

        graphics.fillStyle(0xffffff, 0.2);
        graphics.fillPoints(polygon.points, true);
    }

    update ()
    {
        for (const body of this.physics.world.bodies.getArray())
        {
            body.debugBodyColor = body.touching.none ? 0x00ff00 : 0xff0000;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            debugShowVelocity: false,
            gravity: { y: 100 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
