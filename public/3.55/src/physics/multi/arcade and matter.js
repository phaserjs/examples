class Example extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'Example',
            physics: {
                arcade: {
                    debug: true,
                    gravity: { y: 200 }
                },
                matter: {
                    debug: true,
                    gravity: { y: 0.5 }
                }
            }
        });
    }

    preload ()
    {
        this.load.image('fuji', 'assets/sprites/fuji.png');
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('platform', 'assets/sprites/platform.png');
    }

    create ()
    {
        //  Matter JS:
        this.matter.add.image(400, -100, 'block');
        this.matter.add.image(360, -600, 'block');
        this.matter.add.image(420, -900, 'block');

        this.matter.add.image(400, 550, 'platform', null, { isStatic: true });

        //  Arcade Physics:
        const block = this.physics.add.image(400, 100, 'fuji');

        block.setVelocity(100, 200);
        block.setBounce(1, 1);
        block.setCollideWorldBounds(true);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
