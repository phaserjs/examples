class Example extends Phaser.Scene
{
    player;
    fireFX;
    fireball;
    rt;

    preload ()
    {
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
        this.load.image('fire', 'assets/particles/muzzleflash3.png');
    }

    create ()
    {
        this.rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 });

        this.player = this.add.image(100, 300, 'dude');

        this.fireball = this.add.follower(null, 50, 350, 'fire');

        this.fireFX = this.tweens.add({
            targets: this.fireball,
            scaleX: 3,
            scaleY: 3,
            alpha: 0,
            duration: 300,
            ease: 'Cubic.easeOut',
            onComplete: function () { this.rt.clear(); this.fireball.alpha = 0; },
            paused: true
        });

        this.fireFX.setCallback('onUpdate', this.draw, [], this);

        this.input.on('pointerdown', pointer =>
        {
            this.generate(pointer.x, pointer.y);
        }, this);
    }

    generate (x, y)
    {
        this.fireball.setPosition(this.player.x, this.player.y).setScale(0.5).setAlpha(1);

        const curve = new Phaser.Curves.Line(new Phaser.Math.Vector2(this.player.x, this.player.y), new Phaser.Math.Vector2(x, y));

        this.fireball.setPath(curve);
        this.fireball.startFollow(300);

        this.fireFX.restart();
    }

    draw ()
    {
        this.rt.draw(this.fireball);
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
