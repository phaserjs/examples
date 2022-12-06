class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('orange', 'assets/sprites/columns-orange.png');
    }

    create ()
    {
        this.matter.world.setBounds().disableGravity();

        const poly = this.matter.add.image(200, 50, 'orange');

        poly.setBody({
            type: 'polygon',
            sides: 6,
            radius: 64
        });

        //  Just make the body move around and bounce
        poly.setVelocity(6, 3);
        poly.setAngularVelocity(0.01);
        poly.setBounce(1);
        poly.setFriction(0, 0, 0);
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
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
