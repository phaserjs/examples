class Boot extends Phaser.Scene
{
    preload ()
    {
        this.load.image('flower', 'assets/sprites/flower-exo.png');
    }

    update ()
    {
        this.scene
            .run('fpsTest1')
            .run('fpsTest2')
            .run('fpsTest3')
            .run('fpsTest4')
            .remove();
    }
}

class FpsTest extends Phaser.Scene
{
    graphics;
    sprite;
    startFrame;
    startTime;
    text;

    create ()
    {
        this.startFrame = this.game.getFrame();
        this.startTime = this.game.getTime();
        this.sprite = this.physics.add.image(100, 225, 'flower').setVelocityX(100);
        this.graphics = this.add.graphics().fillStyle(0xffff00, 0.5);
        this.text = this.add.text(20, 20, '', { font: '14px monospace' });
    }

    update ()
    {
        this.graphics.fillPointShape(this.sprite.body, 1);

        this.text.setText(`
steps per second: ${this.physics.world.fps}
steps last frame: ${this.physics.world.stepsLastFrame}

sprite.x: ${this.sprite.x.toFixed(3)}
sprite.body.deltaX(): ${this.sprite.body.deltaX().toFixed(3)}
sprite.body.deltaXFinal(): ${this.sprite.body.deltaXFinal().toFixed(3)}

frames elapsed: ${this.game.getFrame() - this.startFrame}
time elapsed: ${(this.game.getTime() - this.startTime).toFixed(3)} ms`);

        if (this.sprite.x >= 300)
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
        arcade: { debug: false }
    },
    scene: [
        new Boot({
            key: 'boot'
        }),
        new FpsTest({
            key: 'fpsTest1',
            physics: { arcade: { fps: 30 } },
            cameras: [ { x: 0, y: 0, width: 400, height: 300 } ]
        }),
        new FpsTest({
            key: 'fpsTest2',
            physics: { arcade: { fps: 60 } },
            cameras: [ { x: 400, y: 0, width: 400, height: 300 } ]
        }),
        new FpsTest({
            key: 'fpsTest3',
            physics: { arcade: { fps: 144 } },
            cameras: [ { x: 0, y: 300, width: 400, height: 300 } ]
        }),
        new FpsTest({
            key: 'fpsTest4',
            physics: { arcade: { fps: 300 } },
            cameras: [ { x: 400, y: 300, width: 400, height: 300 } ]
        })
    ]
};

const game = new Phaser.Game(config);
