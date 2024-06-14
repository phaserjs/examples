class ParticlesSquare extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('knight', 'assets/animations/knight.png', 'assets/animations/knight.json');
    }

    create ()
    {
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNames('knight', { prefix: 'idle/frame', start: 0, end: 5, zeroPad: 4 }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNames('knight', { prefix: 'attack_A/frame', start: 0, end: 13, zeroPad: 4 }),
            frameRate: 8,
            repeat: -1
        });

        var sprite = this.add.sprite(300, 300, 'knight', 'idle/frame0000')
        var plane = this.add.plane(500, 300, 'knight', 'idle/frame0000', 79, 63)

        this.debug = this.add.graphics();
        plane.setDebug(this.debug);

        this.input.on('pointerdown', function ()
        {
            sprite.play('attack');
            plane.play('attack');
        })
    }

    update ()
    {
        this.debug.clear();
        this.debug.lineStyle(1, 0x00ff00, 0.5);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: ParticlesSquare
};

const game = new Phaser.Game(config);
