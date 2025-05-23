// const fx = myGameObject.postFx.addColorMatrix();
// scene.tweens.addCounter({
//     from: 0,
//     to: 1,
//     duration: 100,
//     onUpdate: (tween) => fx.brightness(tween.getValue()),
//     onComplete: () => obj.postFX.remove(fx), // `fx as any` would work just fine
// });

class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('egg', 'assets/sprites/bombstar.png');
    }

    create ()
    {
        this.add.sprite(200, 300, 'egg');

        const bomb = this.add.sprite(600, 300, 'egg');

        const fx = bomb.postFX.addColorMatrix();

        const tween = this.tweens.addCounter({
            from: 0,
            to: 360,
            duration: 1000,
            // loop: -1,
            onUpdate: () =>
            {
                fx.hue(tween.getValue());
            },
            onComplete: () => bomb.postFX.remove(fx)
        });
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
