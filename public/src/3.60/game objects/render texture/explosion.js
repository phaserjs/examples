class Example extends Phaser.Scene
{
    nukeFX;
    blast;
    rt;

    preload ()
    {
        this.load.image('fire', 'assets/particles/muzzleflash3.png');
        this.load.image('smoke', 'assets/particles/smoke-puff.png');
    }

    create ()
    {
        this.rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 });

        this.blast = this.add.follower(null, 50, 350, 'smoke');

        const curve = new Phaser.Curves.Spline([ 200, 500, 600, 500, 625, 475, 200, 500, 400, 500, 400, 250 ]);

        this.blast.setPath(curve);

        this.nukeFX = this.tweens.add({
            targets: this.blast,
            scaleX: 8,
            scaleY: 8,
            alpha: 0,
            duration: 1500,
            ease: 'Bounce.easeInOut',
            complete: function ()
            {
                console.log('Complete');
                this.rt.clear(); this.blast.alpha = 0;
            },
            paused: true
        });
        this.nukeFX.pause();
        this.nukeFX.setCallback('update', this.draw, [], this);

        this.input.on('pointerdown', pointer =>
        {
            this.detonate(pointer.x, pointer.y);
        }, this);
    }

    detonate (x, y)
    {
        this.blast.setPosition(x, y).setScale(1).setAlpha(1);

        this.blast.startFollow(200);
        this.nukeFX.restart();
    }

    draw ()
    {
        this.blast.setRotation(Math.random() * 4 - 2);

        this.blast.setTexture(Math.random() < 0.8 ? 'fire' : 'smoke');

        this.rt.draw(this.blast);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example,
    width: 800,
    height: 600
};

const game = new Phaser.Game(config);
