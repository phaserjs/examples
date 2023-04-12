class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/pixelsky.png');
        this.load.image('cat', 'assets/tweens/fairytail.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const cat = this.add.image(-200, 300, 'cat');

        //  The `flipX: true` in the Tween config will force the cat Image
        //  to be horizontally flipped when the Tween yoyos or repeats
        this.tweens.add({
            targets: cat,
            x: 1000,
            flipX: true,
            yoyo: true,
            duration: 3000,
            repeat: -1
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
