class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('zombie', 'assets/animations/zombie.png', 'assets/animations/zombie.json');
    }

    create ()
    {
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('zombie', { prefix: 'walk_', end: 8, zeroPad: 3 }),
            repeat: -1,
            frameRate: 8,
            repeatDelay: 1000,
            delay: 3000,
            showBeforeDelay: true
        });

        this.anims.create({ key: 'death', frames: this.anims.generateFrameNames('zombie', { prefix: 'Death_', end: 5, zeroPad: 3 }), frameRate: 12 });

        const rob = this.add.sprite(400, 560, 'zombie').setOrigin(0.5, 1).play('walk');

        this.input.once('pointerdown', function () {
            rob.play('death');
        }, this);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [ Example ]
};

const game = new Phaser.Game(config);
