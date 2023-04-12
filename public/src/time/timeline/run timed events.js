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

        const timeline = this.add.timeline([
            {
                at: 2000,
                run: () => { this.add.sprite(200, 300, 'timeline', 'bat') }
            },
            {
                at: 4000,
                run: () => { this.add.sprite(400, 300, 'timeline', 'zombie') }
            },
            {
                at: 6000,
                run: () => { this.add.sprite(600, 300, 'timeline', 'spider') }
            },
        ]);

        timeline.play();
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
