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

        //  The first even will start at a random time between 1 and 3 seconds
        //  All events after that will start 1 second after the previous one

        const timeline = this.add.timeline([
            {
                at: Phaser.Math.Between(1000, 3000),
                run: () => { this.add.sprite(100, 300, 'timeline', 'bat') }
            },
            {
                from: 1000,
                run: () => { this.add.sprite(200, 300, 'timeline', 'zombie') }
            },
            {
                from: 1000,
                run: () => { this.add.sprite(300, 300, 'timeline', 'spider') }
            },
            {
                from: 1000,
                run: () => { this.add.sprite(400, 300, 'timeline', 'pumpkin') }
            },
            {
                from: 1000,
                run: () => { this.add.sprite(500, 300, 'timeline', 'spider') }
            },
            {
                from: 1000,
                run: () => { this.add.sprite(600, 300, 'timeline', 'zombie') }
            },
            {
                from: 1000,
                run: () => { this.add.sprite(700, 300, 'timeline', 'bat') }
            }
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
