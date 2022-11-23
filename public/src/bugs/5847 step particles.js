class Demo extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create()
    {
        let follow = this.add.rectangle(0, 100, 400, 20, 0xff0000);

        this.add.tween({
            targets: follow,
            duration: 10000,
            x: this.scale.width,
            yoyo: true,
            repeat: -1
        });

        var stepConfig = {
            frame: 'blue',
            x: { start: -160, end: 200, steps: 8 },
            y: 10,
            speedY: 200,
            lifespan: 4000,
            scale: 0.5,
            quantity: 8,
            frequency: 250,
        }

        this.add.particles('flares').createEmitter(stepConfig).startFollow(follow);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: Demo
};

const game = new Phaser.Game(config);
