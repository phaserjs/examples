class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('timeline', 'assets/atlas/timeline.png', 'assets/atlas/timeline.json');
        this.load.image('bg', 'assets/skies/spookysky.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.text(10, 10, 'Click to start the Timeline', { font: '16px Courier', fill: '#ffffff' });

        const timeline = this.add.timeline([
            {
                at: 1000,
                tween: {
                    targets: this.add.sprite(400, 700, 'timeline', 'tombstone'),
                    y: 400,
                    duration: 3000,
                    ease: 'Power2'
                }
            },
            {
                at: 2000,
                run: () => { this.add.sprite(400, 200, 'timeline', 'spider').setScale(1.5) }
            },
        ]);

        this.input.once('pointerdown', () => {

            timeline.play();

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#020286',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
