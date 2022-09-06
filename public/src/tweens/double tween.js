class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.image = this.add.image(100, 300, 'block');

        this.debug = this.add.graphics();

        this.debug.fillStyle(0xffffff);

        this.tweens.add({
            targets: this.image,
            x: 700,
            yoyo: true,
            ease: 'Sine.inOut',
            duration: 1000,
            repeat: -1
        });

        this.tweens.add({
            targets: this.image,
            y: 50,
            // yoyo: true,
            ease: 'Linear',
            duration: 500,
            // delay: 500,
            repeat: -1,
            repeatDelay: 500
        });

        // this.tweens.add({
        //     targets: this.image,
        //     y: 550,
        //     // yoyo: true,
        //     ease: 'Linear',
        //     duration: 500,
        //     repeat: -1,
        //     delay: 500,
        //     repeatDelay: 1000
        // });
    }

    update ()
    {
        this.debug.fillRect(this.image.x, this.image.y, 2, 2);
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
