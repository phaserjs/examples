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
        this.atari = this.physics.add.image(400, 300, 'atari');
        this.atari.body.setAllowGravity(false);
        this.atari.body.setImmovable(true);

        this.block = this.physics.add.image(0, 0, 'block');
        this.block.setVelocity(200, 200);
        this.block.setBounce(1, 1);
        this.block.setCollideWorldBounds(true);

        this.graphics = this.add.graphics();

        this.text = this.add.text(0, 0, '-');

        // During a Body vs. Body collision or overlap both become 'touching'.
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
                Phaser.Utils.Objects.Pick(this.block.body, [ 'blocked', 'touching', 'embedded' ]),
                null,
                2
            )
        ]);
    }

    draw (gameObject)
    {
        this.graphics.lineStyle(5, 0xffff00, 0.8);

        this.drawEdges(gameObject.body, gameObject.body.touching);

        this.graphics.lineStyle(5, 0xff0000, 0.8);

        this.drawEdges(gameObject.body, gameObject.body.blocked);
    }

    drawEdges (body, edges)
    {
        if (edges.left)
        {
            this.graphics.lineBetween(body.left, body.top, body.left, body.bottom);
        }

        if (edges.up)
        {
            this.graphics.lineBetween(body.left, body.top, body.right, body.top);
        }

        if (edges.right)
        {
            this.graphics.lineBetween(body.right, body.top, body.right, body.bottom);
        }

        if (edges.down)
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
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
