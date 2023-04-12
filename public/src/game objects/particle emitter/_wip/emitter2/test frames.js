class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('bubbles', 'assets/particles/bubbles.png', 'assets/particles/bubbles.json');
    }

    create ()
    {
        const emitter = this.add.particles(100, 100, 'bubbles', {
            frame: [ 'bluebubble', 'redbubble', 'greenbubble', 'silverbubble' ],
            lifespan: 5000,
            angle: { min: -30, max: 30 },
            speed: 150,
            frequency: 200
        });

        // this.add.particles2('bubbles', {
        //     frame: 'bluebubble',
        //     x: 300,
        //     y: 100,
        //     lifespan: 5000,
        //     angle: { min: -30, max: 30 },
        //     speed: 150,
        //     frequency: 200
        // });

        this.add.particles(300, 400, 'bubbles', {
            frame: { frames: [ 'bluebubble', 'redbubble' ], cycle: true, quantity: 4 },
            lifespan: 5000,
            angle: { min: -30, max: 30 },
            speed: 150,
            frequency: 200
        });

        window.emma = emitter;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
