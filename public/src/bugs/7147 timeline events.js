class Example extends Phaser.Scene
{

    create ()
    {
        const timeline = this.add.timeline();

        for (let i = 0; i < 50; i++)
        {
            timeline.add({
                at: i * 20,
                once: true, // comment out to get to fin
                run: () => console.log(i * 20)
            });
        }

        // timeline.add({
        //     at: 1000,
        //     run: () => console.log('fin')
        // });

        timeline.play();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d66',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
