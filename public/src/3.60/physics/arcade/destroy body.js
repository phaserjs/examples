class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const block = this.physics.add.image(400, 100, 'block');

        block.setVelocity(100, 200);
        block.setBounce(0.9);
        block.setCollideWorldBounds(true);

        block.setInteractive();

        const text = this.add.text(10, 10, 'Clicks: 5', { font: '16px Courier', fill: '#00ff00' });

        let i = 5;

        this.input.on('pointerdown', function ClickNuke ()
        {

            i--;

            text.setText(`Clicks: ${i}`);

            if (i === 0)
            {
                block.destroy();

                this.input.off('pointerdown', ClickNuke);
            }
            else
            {
                block.setVelocity(Phaser.Math.Between(-300, 300), -600);
            }

        }, this);
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
            debug: true,
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
