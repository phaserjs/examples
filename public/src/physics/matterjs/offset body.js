class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('triangle', 'assets/sprites/triangle.png');
        this.load.image('platform', 'assets/sprites/platform.png');
    }

    create ()
    {
        const shapes = {
            triangle: [
                [ {x: 99,y: 79}, {x: 77,y: 118}, {x: 124,y: 118} ]
            ]
        };

        const triangle = this.matter.add.sprite(400, 100, 'triangle', null, {
            shape: { type: 'fromVerts', verts: shapes.triangle },
            render: { sprite: { xOffset: 0.30, yOffset: 0.15 } }
        });

        triangle.setAngle(16);
        triangle.setBounce(0.9);

        this.matter.add.image(400, 550, 'platform', null, { isStatic: true });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 0.6 },
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
