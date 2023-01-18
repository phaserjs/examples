class Boot extends Phaser.Scene
{
    preload ()
    {
        this.load.image('flower', 'assets/sprites/flower-exo.png');
    }

    update ()
    {
        this.scene.run('fixed step').run('variable step').remove();
    }
}

class FpsTest extends Phaser.Scene
{
    debug;
    sprite;
    startFrame;
    startTime;
    text;

    create ()
    {
        this.startFrame = this.game.getFrame();

        this.startTime = this.game.getTime();

        this.sprite = this.physics.add.image(100, 225, 'flower').setVelocityX(300);

        this.debug = this.add.graphics().fillStyle(0xffff00, 0.5);

        this.text = this.add.text(20, 20);
    }

    update ()
    {
        this.text.setText(`
fixed step: ${this.physics.world.fixedStep}

sprite.x: ${this.sprite.x.toFixed(3)}
sprite.body.deltaX(): ${this.sprite.body.deltaX().toFixed(3)}

frames elapsed: ${this.game.getFrame() - this.startFrame}
time elapsed: ${this.game.getTime() - this.startTime} ms`);

        this.debug.fillPointShape(this.sprite.body, 2);

        if (this.sprite.x >= 700)
        {
            this.scene.pause();
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: { debug: true }
    },
    scene: [
        new Boot({
            key: 'boot'
        }),
        new FpsTest({
            key: 'fixed step',
            physics: { arcade: { fixedStep: true } },
            cameras: [ { x: 0, y: 0, width: 800, height: 300 } ]
        }),
        new FpsTest({
            key: 'variable step',
            physics: { arcade: { fixedStep: false } },
            cameras: [ { x: 0, y: 300, width: 800, height: 300 } ]
        })
    ]
};

const game = new Phaser.Game(config);
