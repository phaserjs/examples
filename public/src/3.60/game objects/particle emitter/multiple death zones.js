class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const rect1 = new Phaser.Geom.Rectangle(100, 50, 100, 100);
        const rect2 = new Phaser.Geom.Rectangle(200, 350, 400, 200);
        const rect3 = new Phaser.Geom.Rectangle(550, 150, 200, 100);

        const emitter = this.add.particles(400, 100, 'flares', {
            frame: [ 'red', 'green', 'blue' ],
            speed: 300,
            gravityY: 400,
            lifespan: 4000,
            scale: 0.4,
            blendMode: 'ADD',
            deathZone: [ rect1, rect2, rect3 ]
        });

        this.input.on('pointerdown', pointer => {

            emitter.setPosition(pointer.worldX, pointer.worldY);

        });

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0x00ff00, 1);

        graphics.strokeRectShape(rect1);
        graphics.strokeRectShape(rect2);
        graphics.strokeRectShape(rect3);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
