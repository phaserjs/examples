class Example extends Phaser.Scene
{
    text;
    graphics;
    block;
    atari;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('flower', 'assets/sprites/flower-exo.png');
        this.load.image('atari', 'assets/sprites/atari800.png');
    }

    create ()
    {
        this.atari = this.physics.add.staticImage(400, 300, 'atari');

        this.block = this.physics.add.image(0, 0, 'block');
        this.block.setVelocity(200, 200);
        this.block.setBounce(1, 1);
        this.block.setCollideWorldBounds(true);

        this.graphics = this.add.graphics();

        this.text = this.add.text(0, 0, '-');

        // During a Body vs. Static Body collision or overlap the Body becomes 'blocked' (and also 'touching').
        // It's easier to see during an overlap:
        this.physics.add.overlap(this.atari, this.block);
    }

    update ()
    {
        this.graphics.clear();

        this.draw(this.atari);
        this.draw(this.block);

        this.text.setText([
            'Box:',
            '',
            JSON.stringify(
                Phaser.Utils.Objects.Pick(this.block.body, [
                    'blocked',
                    'touching',
                    'embedded'
                ]),
                null,
                2
            )
        ]);
    }

    draw (gameObject)
    {
        this.graphics.lineStyle(5, 0xffff00, 0.8);

        this.drawFaces(gameObject.body, gameObject.body.touching);

        this.graphics.lineStyle(5, 0xff0000, 0.8);

        this.drawFaces(gameObject.body, gameObject.body.blocked);
    }

    drawFaces (body, faces)
    {
        if (faces.left)
        {
            this.graphics.lineBetween(body.left, body.top, body.left, body.bottom);
        }

        if (faces.up)
        {
            this.graphics.lineBetween(body.left, body.top, body.right, body.top);
        }

        if (faces.right)
        {
            this.graphics.lineBetween(body.right, body.top, body.right, body.bottom);
        }

        if (faces.down)
        {
            this.graphics.lineBetween(body.left, body.bottom, body.right, body.bottom);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
