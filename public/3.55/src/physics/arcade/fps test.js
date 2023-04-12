class Example extends Phaser.Scene
{
    source;
    debug;
    complete = false;
    start = 0;
    end = 0;

    preload ()
    {
        this.load.image('flower', 'assets/sprites/flower-exo.png');
    }

    create ()
    {
        // this.physics.world.setFPS(30);
        // this.physics.world.setFPS(60);
        this.physics.world.setFPS(120);

        this.source = this.physics.add.image(0, 300, 'flower');

        this.input.on('pointerdown', (pointer) =>
        {

            this.start = pointer.time;

            this.source.body.setVelocityX(100);

        });

        this.debug = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    }

    update (time)
    {
        if (!this.complete)
        {
            this.end = time;
        }

        this.debug.setText([
            `Duration: ${ (this.complete) ? (this.end - this.start) : 0}`,
            'ETA: 2000'
        ]);

        if (this.source.x >= 200 && this.source.body.velocity.x > 0)
        {
            this.complete = true;
            this.source.body.setVelocityX(0);
        }
    }

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade'
    },
    scene: Example
};

const game = new Phaser.Game(config);
