class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('pic1', 'assets/pics/robot-ai.jpg');
        this.load.image('pic2', 'assets/pics/baal-ai.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'pic1');

        const sprite = this.add.image(400, 300, 'pic2');

        const fx = sprite.preFX.addWipe(0.1, 0, 0);

        const text = this.add.text(10, 10, 'Click to randomize wipe width\nfx.wipeWidth: 0.1');

        this.input.on('pointerdown', () => {

            fx.wipeWidth = Math.random();

            text.setText([
                'Click to randomize wipe width',
                'fx.wipeWidth: ' + fx.wipeWidth
            ]);

        });

        this.tweens.add({
            targets: fx,
            progress: 1,
            repeatDelay: 1000,
            hold: 1000,
            yoyo: true,
            repeat: -1,
            duration: 2500
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
