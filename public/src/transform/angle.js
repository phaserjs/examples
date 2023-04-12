class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('grid', 'assets/pics/debug-grid-1920x1920.png');
        this.load.image('arrow', 'assets/sprites/arrow.png');
    }

    create ()
    {
        //  Angle uses degrees instead of radians

        for (let a = 0; a <= 360; a += 45)
        {
            const frame = this.add.image(40 + a * 2, 300, 'arrow').setAngle(a);

            //  You can also do: frame.angle = degrees;
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
