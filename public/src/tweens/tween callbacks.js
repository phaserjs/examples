class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/space4.png');
        this.load.image('planet1', 'assets/sprites/planet1.png');
        this.load.image('planet2', 'assets/sprites/planet2.png');
        this.load.image('planet3', 'assets/sprites/planet3.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const planet = this.add.image(400, 300, 'planet3');

        planet.setScale(0.2);

        const text = this.add.text(16, 16, 'Tween Callbacks').setFontSize(16).setColor('#ffffff');

        const tween = this.tweens.add({
            targets: planet,
            scaleX: 1,
            scaleY: 1,
            ease: 'Power1',
            duration: 3000,
            paused: true,
            onActive: () => {
                text.appendText('onActive - click to start');
            },
            onStart: () => {
                text.appendText('onStart');
            },
            onComplete: () => {
                text.appendText('onComplete');
            },
        });

        console.log(tween);

        this.input.once('pointerdown', () => {
            tween.play();
        });
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
