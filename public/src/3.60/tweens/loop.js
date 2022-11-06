class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/tweens/grass.png');
        this.load.image('van', 'assets/tweens/icecreamvan.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const van = this.add.image(100, 100, 'van');

        const text = this.add.text(500, 20, 'Tween Loop: 4').setFontSize(32).setShadow(2, 2);

        //  This Tween changes 2 properties (x and y) over its duration.
        //  It is set to loop 4 times, which means it will replay the entire Tween.
        this.tweens.add({
            targets: van,
            x: 700,
            y: 500,
            duration: 2000,
            loop: 4,
            onLoop: (tween) => {
                text.setText('Tween Loop: ' + tween.loopCounter)
            }
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
