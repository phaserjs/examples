class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const i = this.add.rectangle(500, 500, 100, 100, 0xff0000);

        // doing it this way doesn't cause the error
        // this.add.tween({ targets: i, duration: 1000, props: { scale: 0.5 }, onComplete: () => this.tweens.killTweensOf(i) });

        // doing it this way does cause the error
        // this.add.tween({ targets: i, duration: 1000, props: { scale: 0.5 } }).once(Phaser.Tweens.Events.TWEEN_COMPLETE, () => this.tweens.killTweensOf(i));
        this.add.tween({ targets: i, duration: 1000, props: { scale: 0.5 } }).once(Phaser.Tweens.Events.TWEEN_COMPLETE, () => this.tweens.killAll());
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
