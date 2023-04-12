class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/tweens/space.png');
        this.load.image('ufo', 'assets/tweens/ufo2.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');
        this.add.text(20, 20, 'Linear Ease').setFontSize(32).setShadow(2, 2);

        const ufo = this.add.image(100, 300, 'ufo');

        this.tweens.add({
            targets: ufo,
            x: 700,
            duration: 2000,
            repeat: -1,
            hold: 500,
            repeatDelay: 500,
            ease: 'linear'
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
