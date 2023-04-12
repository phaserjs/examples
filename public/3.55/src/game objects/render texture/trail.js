class Example extends Phaser.Scene
{
    rt;
    trail;
    player;
    tween;

    preload ()
    {
        this.load.image('bubble', 'assets/particles/bubble.png');
    }

    create ()
    {
        this.rt = this.add.renderTexture(0, 0, 800, 600).setOrigin(0, 0);

        this.trail = this.add.image(400, 300, 'bubble').setVisible(false);

        this.player = this.add.image(400, 300, 'bubble');

        this.tween = this.tweens.add({
            targets: this.trail,
            x: this.player.x,
            y: this.player.y,
            ease: 'Sine.easeInOut',
            duration: 50000,
            repeat: -1
        });
    }

    update ()
    {
        this.player.x = this.input.x;
        this.player.y = this.input.y;

        const dist = Phaser.Math.Distance.Between(this.trail.x, this.trail.y, this.player.x, this.player.y);

        this.tween.timeScale = dist / 100;

        this.tween.updateTo('x', this.player.x, true);
        this.tween.updateTo('y', this.player.y, true);

        this.trail.setAlpha(100 / (dist + 0.001));
        this.trail.setTint(dist | 0xff0000);

        this.rt.draw(this.trail);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
