class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('platform', 'assets/sprites/platform.png');
    }

    create ()
    {
        const Bodies = Phaser.Physics.Matter.Matter.Bodies;

        const rectA = Bodies.rectangle(0, 0, 200, 24);
        const rectB = Bodies.rectangle(0, 0, 24, 200);
        const circleA = Bodies.circle(-100, 0, 24);
        const circleB = Bodies.circle(100, 0, 24);
        const circleC = Bodies.circle(0, -100, 24);
        const circleD = Bodies.circle(0, 100, 24);

        const compoundBody = Phaser.Physics.Matter.Matter.Body.create({
            parts: [ rectA, rectB, circleA, circleB, circleC, circleD ]
        });

        const block = this.matter.add.image(150, 0, 'block');

        block.setExistingBody(compoundBody);

        block.setFrictionAir(0.001).setBounce(0.9);

        //  A floor to land on
        this.matter.add.image(350, 450, 'platform', null, { isStatic: true }).setScale(2, 0.5).setAngle(8);
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
            debug: true,
            gravity: {
                y: 0.3
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
