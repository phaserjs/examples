class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('timeline', 'assets/atlas/timeline.png', 'assets/atlas/timeline.json');
    }

    create ()
    {
        const timeline = this.add.timeline([
            {
                at: 1000,
                tween: {
                    targets: this.add.sprite(400, 700, 'timeline', 'tombstone'),
                    y: 400,
                    duration: 1000,
                    ease: 'Power2'
                }
            }
        ]);

        timeline.play();

        setTimeout(() => { if (timeline.isPlaying()) timeline.destroy() }, 100)
        setTimeout(() =>
        {
            console.log('2300')
            if (timeline.isPlaying())
            {
                timeline.destroy()
            }
        }, 2300) // this causes the error
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
