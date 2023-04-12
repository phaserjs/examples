class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('sky', 'assets/skies/seablue.png');
        this.load.image('clouds', 'assets/skies/seaclouds.png');
        this.load.image('waves', 'assets/skies/waves.png');
        this.load.atlas('assets', 'assets/atlas/tweenparts.png', 'assets/atlas/tweenparts.json');
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        const clouds = this.add.tileSprite(400, 300, 800, 600, 'clouds');

        const fish1 = this.add.image(0, 700, 'assets', 'fishing_134_t');
        const fish2 = this.add.image(800, 700, 'assets', 'fishing_128_t');

        const waves = this.add.tileSprite(400, 400, 800, 600, 'waves');

        this.tweens.add({
            targets: clouds,
            tilePositionX: 800,
            duration: 9000,
            ease: 'linear',
            repeat: -1,
        });

        this.tweens.add({
            targets: waves,
            tilePositionY: 100,
            duration: 2000,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1,
            onUpdate: () => {
                waves.tilePositionX += 4
            }
        });

        fish2.setFlipX(true);

        this.tweens.chain({
            tweens: [
                {
                    targets: fish1,
                    x: 400,
                    y: 200,
                    angle: 40,
                    duration: 1000,
                    ease: 'sine.out'
                },
                {
                    targets: fish1,
                    x: 800,
                    y: 700,
                    angle: 80,
                    duration: 1000,
                    ease: 'sine.in'
                },
                {
                    targets: fish2,
                    x: 400,
                    y: 200,
                    angle: -30,
                    duration: 1000,
                    ease: 'sine.out'
                },
                {
                    targets: fish2,
                    x: 0,
                    y: 700,
                    angle: -60,
                    duration: 1000,
                    ease: 'sine.in'
                },
            ],
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
