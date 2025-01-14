class Example extends Phaser.Scene
{
    create ()
    {
        this.objToTween1 = this.add.circle(this.scale.width / 4, this.scale.height / 2, 50, 0xff0000);

        const persistTweenWithoutCompleteDelay = this.add.tween({ targets: this.objToTween1, duration: 500, props: { scale: 0 }, yoyo: true, persist: true });

        persistTweenWithoutCompleteDelay.on(Phaser.Tweens.Events.TWEEN_COMPLETE, () =>
        {
            this.time.delayedCall(500, () =>
            {
                persistTweenWithoutCompleteDelay.play();
            });
        });

        this.objToTween2 = this.add.circle(this.scale.width / 4 * 3, this.scale.height / 2, 50, 0xff0000);

        const persistTweenWithCompleteDelay = this.add.tween({ targets: this.objToTween2, duration: 500, props: { scale: 0 }, yoyo: true, persist: true, completeDelay: 500 });

        persistTweenWithCompleteDelay.on(Phaser.Tweens.Events.TWEEN_COMPLETE, () =>
        {
            this.time.delayedCall(500, () =>
            {
                persistTweenWithCompleteDelay.play();
            });
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
