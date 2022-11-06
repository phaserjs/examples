class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/tweens/grass.png');
        this.load.image('road', 'assets/tweens/track.png');
        this.load.image('car', 'assets/tweens/f1car.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');
        this.add.image(400, 300, 'road');

        const car = this.add.image(270, 1000, 'car');

        //  The `flipY: true` in the Tween config will force the Image
        //  to be vertically flipped when the Tween yoyos or repeats
        this.tweens.add({
            targets: car,
            y: -400,
            flipY: true,
            yoyo: true,
            duration: 2000,
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
