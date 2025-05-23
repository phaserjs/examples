class Example extends Phaser.Scene
{
    timelines = []
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.atlas('timeline', 'https://labs.phaser.io/assets/atlas/timeline.png', 'https://labs.phaser.io/assets/atlas/timeline.json');
    }

    create ()
    {
        const timeline = this.createTimeline();
        timeline.play()
        setTimeout(() => {if (timeline.isPlaying()) timeline.destroy()},100)
        setTimeout(() => {if (timeline.isPlaying()) timeline.destroy()},2300) // this causes the error

    }

    createTimeline(){
        
        return this.add.timeline([
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