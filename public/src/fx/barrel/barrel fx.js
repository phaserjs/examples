class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.audio('heartbeat', 'assets/audio/heartbeat.mp3');
        this.load.image('heart', 'assets/games/card-memory-game/ui/heart.png');
    }

    create ()
    {
        // Description
        this.add.text(10, 10, 'Barrel FX', { font: '16px Courier', fill: '#00ff00' });

        const fx = this.add.image(this.sys.scale.width / 2, this.sys.scale.height / 2, 'heart');
        fx.setScale(9);

        this.image = fx;

        // const fx2 = fx.postFX.addBloom(0xff0000, 1, 1, 1, 6, 4);
        const barrel = fx.preFX.addBarrel(1);
        // barrel.amount = 2;
        this.add.tween({
            duration: 400,
            repeatDelay: 1000,
            targets: barrel,
            ease: Phaser.Math.Easing.Elastic.InOut,
            amount: 1.2,
            yoyo: true,
            repeat: -1,
            onRepeat: () => {
                this.sound.play("heartbeat");
            },
            onStart: () => {
                this.sound.play("heartbeat");
                this.add.tween({
                    duration: 400,
                    repeatDelay: 1000,
                    targets: fx,
                    ease: (value) => Math.round(value),
                    scale: 10,
                    yoyo: true,
                    repeat: -1
                })
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    backgroundColor: '#000022',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
