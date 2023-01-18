class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
        this.load.image('ball', 'assets/sprites/blue_ball.png');
        this.load.image('sky', 'assets/skies/cavern2.png');
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        const block = this.physics.add.image(100, 500, 'block');

        block.body.immovable = true;
        block.body.allowGravity = false;

        const dude = this.physics.add.image(100, 0, 'dude');

        const balls = this.physics.add.group({
            key: 'ball',
            frameQuantity: 192,
            gridAlign: { width: 16, height: 12, cellWidth: 50, cellHeight: 50, position: Phaser.Display.Align.CENTER },
            allowGravity: false
        });

        this.tweens.chain({
            targets: block.body.velocity,
            loop: -1,
            tweens: [
                { x:    0, y: -200, duration: 2000, ease: 'Stepped' },
                { x:    0, y:    0, duration: 1000, ease: 'Stepped' },
                { x:  150, y:  100, duration: 4000, ease: 'Stepped' },
                { x:    0, y: -200, duration: 2000, ease: 'Stepped' },
                { x:    0, y:    0, duration: 1000, ease: 'Stepped' },
                { x: -150, y:  100, duration: 4000, ease: 'Stepped' }
            ]
        });

        this.physics.add.collider(block, dude);
        this.physics.add.collider(block, balls);
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
            gravity: { y: 600 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
