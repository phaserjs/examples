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

        this.add.text(10, 10, 'Click to add a sprite after 1 second', { font: '16px Courier', fill: '#ffffff' }).setDepth(1000);

        const timeline = this.add.timeline();

        timeline.play();

        this.input.on('pointerdown', () => {

            timeline.add({
                in: 1000,
                once: true,
                run: () => {
                    const x = Phaser.Math.Between(100, 700);
                    const y = Phaser.Math.Between(100, 500);
                    this.add.sprite(x, y, 'timeline', 'pumpkin')
                }
            })

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
