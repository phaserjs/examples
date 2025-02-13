class Example extends Phaser.Scene
{
    create() {
        this.objToTween = this.add.circle(this.scale.width / 2,this.scale.height / 2,50,0xff0000);
    
        const chain = this.tweens.chain({
          tweens: [
            { targets: this.objToTween, duration: 500, props: { alpha: 0 } },
            { targets: this.objToTween, duration: 500, props: { alpha: 1 } },
            { targets: this.objToTween, duration: 500, props: { alpha: 0 } },
            { targets: this.objToTween, duration: 500, props: { alpha: 1 } },
          ],
          onStart: () => console.log('chain start!')
        });
    
        chain.on(Phaser.Tweens.Events.TWEEN_START, () => console.log('added on start listener')); // I assume this should work
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
