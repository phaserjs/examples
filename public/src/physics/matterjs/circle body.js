class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('red', 'assets/sprites/columns-red.png');
    }

    create ()
    {
        this.matter.world.setBounds().disableGravity();

        const circ = this.matter.add.image(200, 50, 'red');

        //  Change the body to a Circle with a radius of 48px
        circ.setBody({
            type: 'circle',
            radius: 48
        });

        //  Just make the body move around and bounce
        circ.setVelocity(6, 3);
        circ.setAngularVelocity(0.01);
        circ.setBounce(1);
        circ.setFriction(0, 0, 0);
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
