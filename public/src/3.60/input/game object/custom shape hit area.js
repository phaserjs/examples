class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('ball', 'assets/sprites/spikedball.png');
    }

    create ()
    {
        const shape = new Phaser.Geom.Circle(48, 48, 48);

        const ball1 = this.add.image(200, 300, 'ball').setInteractive(shape, this.handler);
        const ball2 = this.add.image(400, 300, 'ball').setInteractive(shape, this.handler);
        const ball3 = this.add.image(600, 300, 'ball').setInteractive(shape, this.handler);

        ball1.on('pointerdown', function ()
        {
            this.setTint(Math.random() * 16000000);
        });

        ball2.on('pointerdown', function ()
        {
            this.setTint(Math.random() * 16000000);
        });

        ball3.on('pointerdown', function ()
        {
            this.setTint(Math.random() * 16000000);
        });
    }

    handler (shape, x, y, gameObject)
    {
        if (shape.radius > 0 && x >= shape.left && x <= shape.right && y >= shape.top && y <= shape.bottom)
        {
            const dx = (shape.x - x) * (shape.x - x);
            const dy = (shape.y - y) * (shape.y - y);

            return (dx + dy) <= (shape.radius * shape.radius);
        }
        else
        {
            return false;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
