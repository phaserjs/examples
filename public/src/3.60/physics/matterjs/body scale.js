class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('blue', 'assets/sprites/columns-blue.png');
    }

    create ()
    {
        this.matter.world.setBounds().disableGravity();

        //  By default it will create a rectangular body the size of the texture
        const rect = this.matter.add.image(200, 50, 'blue');

        //  Just make the body move around and bounce
        rect.setVelocity(3, 1);
        rect.setAngularVelocity(0.01);
        rect.setBounce(1);
        rect.setFriction(0, 0, 0);

        rect.setInteractive();

        rect.once('pointerup', () =>
        {

            rect.setScale(2);

        });
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
