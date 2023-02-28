class Block extends Phaser.GameObjects.Sprite
{
    constructor (scene, x, y)
    {
        super(scene, x, y, 'block');

        this.setScale(0.9);

        this.preFX.setPadding(32);

        this.barrel = this.preFX.addBarrel(0.75);

        this.amount = 1;
        this.allowClick = true;

        this.setInteractive();

        this.on('pointerdown', () => this.clicked());

        this.startTween(this.amount);
    }

    startTween (amount)
    {
        this.barrel.amount = 0.75;

        this.pulseTween = this.scene.tweens.add({
            targets: this.barrel,
            amount,
            yoyo: true,
            duration: 600 - (amount * 100),
            loop: -1,
            ease: 'sine.inout'
        });
    }

    clicked ()
    {
        if (this.amount < 2 && this.allowClick)
        {
            this.pulseTween.stop();

            this.allowClick = false;

            this.scene.tweens.add({
                targets: this.barrel,
                amount: 0.3,
                duration: 100,
                yoyo: true,
                ease: 'sine.out',
                onComplete: () => this.tweenStop()
            });
        }
    }

    tweenStop ()
    {
        this.amount += 0.25;

        this.startTween(this.amount);

        this.allowClick = true;
    }

}

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block-slime.png');
    }

    create ()
    {
        for (let y = 0; y < 2; y++)
        {
            for (let x = 0; x < 3; x++)
            {
                this.add.existing(new Block(this, 144 + x * 256, 180 + y * 256));
            }
        }

        this.add.text(10, 16, 'Click the Blocks');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#47255b',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
