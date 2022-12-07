class Example extends Phaser.Scene
{
    cropHeight;
    cropWidth;
    py;
    px;
    offset;
    graphics;
    bob;

    preload ()
    {
        this.load.atlas('sea', 'assets/animations/seacreatures_json.png', 'assets/animations/seacreatures_json.json');
    }

    create ()
    {
        this.anims.create({ key: 'stingray', frames: this.anims.generateFrameNames('sea', { prefix: 'stingray', end: 23, zeroPad: 4 }), repeat: -1 });

        this.add.sprite(400, 300, 'sea').setAlpha(0.3).play('stingray');

        this.bob = this.add.sprite(400, 300, 'sea').play('stingray');

        this.graphics = this.add.graphics();

        this.cropWidth = 64;
        this.cropHeight = 64;
        this.px = 0;
        this.py = 0;

        this.bob.setCrop(0, 0, this.cropWidth, this.cropHeight);

        this.offset = this.bob.getTopLeft();

        this.input.on('pointermove', pointer =>
        {

            this.px = pointer.x - this.offset.x;
            this.py = pointer.y - this.offset.y;

        });
    }

    update ()
    {
        this.bob.setCrop(
            this.px - this.cropWidth / 2,
            this.py - this.cropHeight / 2,
            this.cropWidth,
            this.cropHeight
        );

        this.graphics.clear();
        this.graphics.lineStyle(1, 0x00ff00);
        this.graphics.strokeRect(this.offset.x + this.bob._crop.x, this.offset.y + this.bob._crop.y, this.bob._crop.width, this.bob._crop.height);
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
