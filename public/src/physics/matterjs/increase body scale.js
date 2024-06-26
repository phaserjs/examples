class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('blue', 'assets/sprites/columns-blue.png');
    }

    create ()
    {
        this.scale = 1.1;
        this.matter.world.setBounds().disableGravity();

        //  By default it will create a rectangular body the size of the texture
        const rect = this.matter.add.image(200, 50, 'blue');

        //  Just make the body move around and bounce
        rect.setVelocity(3, 1);
        rect.setAngularVelocity(0.01);
        rect.setBounce(1);
        rect.setFriction(0, 0, 0);

        rect.setInteractive();

        rect.on('pointerup', () =>
        {

            rect.setScale(this.scale);

            this.scale += 0.1;

            rect.setVelocity(Phaser.Math.Between(-4, 4), Phaser.Math.Between(-2, 2));

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
