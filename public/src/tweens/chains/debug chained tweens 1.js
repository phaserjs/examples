class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const image = this.add.image(100, 100, 'block');

        this.text = this.add.text(16, 16).setFontSize(16).setColor('#ffffff');

        this.tween = this.tweens.chain({
            targets: image,
            persist: true,
            tweens: [
                {
                    x: 600,
                    ease: 'Linear',
                    duration: 1000,
                },
                {
                    y: 500,
                    ease: 'Linear',
                    duration: 500
                },
                {
                    x: 100,
                    ease: 'Linear',
                    duration: 1000
                },
                {
                    y: 100,
                    ease: 'Linear',
                    duration: 500
                },
            ]
        });
    }

    update ()
    {
        const t = this.tween;

        this.text.setText([
            `Duration: ${t.currentTween.duration}`,
            `Start Delay: ${t.currentTween.startDelay}`,
            `Elapsed: ${t.currentTween.elapsed}`,
            `Progress: ${t.currentTween.progress}`,
            `State: ${t.state}`
        ]);
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
