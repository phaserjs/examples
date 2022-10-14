class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/deepblue.png');
        this.load.spritesheet('sotb', 'assets/animations/sotb-64x112x11.png', { frameWidth: 64, frameHeight: 112 });
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('sotb'),
            frameRate: 16,
            repeat: -1
        });

        const sprites = [];

        for (var i = 0; i < 60; i++)
        {
            sprites.push(this.add.sprite(0, 0, 'sotb').play('walk'));
        }

        //  The sprites are 64x112 in size

        //  Let's lay them out in a grid 12 sprites wide, by as many tall as we have sprites in the array for

        Phaser.Actions.GridAlign(sprites, {
            width: 12,
            cellWidth: 64,
            cellHeight: 120,
            x: 16,
            y: 4
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
