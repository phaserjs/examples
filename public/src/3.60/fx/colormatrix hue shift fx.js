class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('egg', 'assets/sprites/bombstar.png');
    }

    create ()
    {
        this.add.sprite(200, 300, 'egg');

        const bomb = this.add.sprite(600, 300, 'egg');

        const fx = bomb.preFX.addColorMatrix();

        const tween = this.tweens.addCounter({
            from: 0,
            to: 360,
            duration: 3000,
            loop: -1,
            onUpdate: () => {
                fx.hue(tween.getValue());
            }
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
