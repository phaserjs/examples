class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/tweens/space.png');
        this.load.image('ufo1', 'assets/tweens/ufo1.png');
        this.load.image('ufo2', 'assets/tweens/ufo2.png');
        this.load.image('ufo3', 'assets/tweens/ufo3.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');
        this.add.text(20, 20, 'Quintic Ease').setFontSize(32).setShadow(2, 2);

        this.add.text(750, 70, 'Quint.in').setShadow(2, 2).setOrigin(1, 0);
        this.add.text(750, 255, 'Quint.out').setShadow(2, 2).setOrigin(1, 0);
        this.add.text(750, 440, 'Quint.inOut').setShadow(2, 2).setOrigin(1, 0);

        const ufo1 = this.add.image(100, 140, 'ufo1');
        const ufo2 = this.add.image(100, 325, 'ufo2');
        const ufo3 = this.add.image(100, 510, 'ufo3');

        this.tweens.add({
            targets: ufo1,
            x: 700,
            duration: 2000,
            repeat: -1,
            hold: 500,
            repeatDelay: 500,
            ease: 'quint.in'
        });

        this.tweens.add({
            targets: ufo2,
            x: 700,
            duration: 2000,
            repeat: -1,
            hold: 500,
            repeatDelay: 500,
            ease: 'quint.out'
        });

        this.tweens.add({
            targets: ufo3,
            x: 700,
            duration: 2000,
            repeat: -1,
            hold: 500,
            repeatDelay: 500,
            ease: 'quint.inout'
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
