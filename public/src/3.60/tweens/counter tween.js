class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/pixelsky.png');
        this.load.atlas('ui', 'assets/ui/nine-slice.png', 'assets/ui/nine-slice.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.nineslice(400, 200, 'ui', 'RedButtonSml', 640, 98, 64, 64, 48, 48);

        const score = this.add.text(400, 200, 'Score: 0', { font: '64px Courier', fill: '#ffffff' }).setOrigin(0.5, 0.5);

        const button = this.add.nineslice(400, 500, 'ui', 'GreenButtonSml', 300, 98, 64, 64, 48, 48);

        this.add.text(400, 500, 'Add 500 to Score', { font: '24px Arial', fill: '#ffffff' }).setOrigin(0.5, 0.5);

        button.setInteractive();

        let currentScore = 0;
        let newScore = 500;

        let updateTween = this.tweens.addCounter({
            from: currentScore,
            to: newScore,
            duration: 2000,
            ease: 'linear',
            onUpdate: tween =>
            {
                const value = Math.round(tween.getValue());
                score.setText(`Score: ${value}`);
            }
        });

        button.on('pointerdown', () => {

            currentScore = newScore;
            newScore += 500;

            if (updateTween.isPlaying())
            {
                //  The tween is already running, so we'll update the end value with resetting it
                updateTween.updateTo('value', newScore);
            }
            else
            {
                //  The tween has finished, so create a new one
                updateTween = this.tweens.addCounter({
                    from: currentScore,
                    to: newScore,
                    duration: 2000,
                    ease: 'linear',
                    onUpdate: tween =>
                    {
                        const value = Math.round(tween.getValue());
                        score.setText(`Score: ${value}`);
                    }
                });
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
