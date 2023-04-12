class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('timeline', 'assets/atlas/timeline.png', 'assets/atlas/timeline.json');
        this.load.image('bg', 'assets/skies/spookysky.jpg');
        this.load.audio('growl1', [ 'assets/audio/monsters/growl1.ogg', 'assets/audio/monsters/growl1.mp3' ]);
        this.load.audio('growl2', [ 'assets/audio/monsters/growl5.ogg', 'assets/audio/monsters/growl5.mp3' ]);
        this.load.audio('growl3', [ 'assets/audio/monsters/growl10.ogg', 'assets/audio/monsters/growl10.mp3' ]);
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.text(10, 10, 'Click to Start', { font: '16px Courier', fill: '#ffffff' });

        const timeline = this.add.timeline([
            {
                at: 2000,
                sound: 'growl1',
                run: () => { this.add.sprite(200, 300, 'timeline', 'bat') }
            },
            {
                at: 4000,
                sound: 'growl2',
                run: () => { this.add.sprite(400, 300, 'timeline', 'spider') }
            },
            {
                at: 6000,
                sound: 'growl3',
                run: () => { this.add.sprite(600, 300, 'timeline', 'zombie') }
            }
        ]);

        this.input.once('pointerdown', () => timeline.play());
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
