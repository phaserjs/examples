class Example extends Phaser.Scene
{
    text;
    gfx;
    flower;
    block3;
    block2;
    block1;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('flower', 'assets/sprites/flower-exo.png');
        this.load.image('atari', 'assets/sprites/atari800.png');
    }

    create ()
    {
        this.block1 = this.physics.add.image(400, 150, 'block');
        this.block2 = this.physics.add.image(400, 300, 'block');
        this.block3 = this.physics.add.staticImage(400, 450, 'block');
        this.flower = this.physics.add.image(400, 100, 'flower');

        this.block1.body.setImmovable(true);

        this.block2.body.setImmovable(true);

        // Will cause `blocked` (last).
        this.flower.setCollideWorldBounds(true);

        this.gfx = this.add.graphics();

        this.text = this.add.text(0, 0, '-');

        this.physics.add.collider(this.flower, [
            this.block1,
            this.block2,
            this.block3
        ]);

        this.time.delayedCall(2000, () =>
        {
            this.block1.disableBody(true, true);
            this.flower.setGravity(0, 600);
        });

        this.time.delayedCall(4000, () =>
        {
            this.block2.disableBody(true, true);
        });

        this.time.delayedCall(6000, () =>
        {
            this.block3.disableBody(true, true);
        });
    }

    update ()
    {
        this.gfx.clear();
        this.gfx.lineStyle(1, 0x666666);
        this.gfx.strokeRectShape(this.physics.world.bounds);

        this.draw(this.block1);
        this.draw(this.block2);
        this.draw(this.block3);
        this.draw(this.flower);

        this.text.setText([
            'Flower:',
            '',
            JSON.stringify(
                Phaser.Utils.Objects.Pick(
                    this.flower.body,
                    [ 'blocked', 'touching', 'embedded' ]
                ),
                null,
                2
            )
        ]);
    }

    draw (obj)
    {
        if (!obj.active) { return; }

        const body = obj.body;

        this.gfx.lineStyle(11, 0xffff00, 0.5);

        this.drawFaces(body, body.touching);

        this.gfx.lineStyle(11, 0xff0000, 0.5);

        this.drawFaces(body, body.blocked);

        if (body.embedded)
        {
            this.gfx.lineStyle(5, 0x00ccff, 0.5);
            this.gfx.lineBetween(body.left, body.top, body.right, body.bottom);
            this.gfx.lineBetween(body.left, body.bottom, body.right, body.top);
        }
    }

    drawFaces (body, faces)
    {
        if (faces.left)
        {
            this.gfx.lineBetween(body.left, body.top, body.left, body.bottom);
        }

        if (faces.up)
        {
            this.gfx.lineBetween(body.left, body.top, body.right, body.top);
        }

        if (faces.right)
        {
            this.gfx.lineBetween(body.right, body.top, body.right, body.bottom);
        }

        if (faces.down)
        {
            this.gfx.lineBetween(body.left, body.bottom, body.right, body.bottom);
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
            x: 200, y: 50, width: 400, height: 500
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
