/* global colors, Phaser */

class Example extends Phaser.Scene
{

  preload ()
  {
    this.load.image('mySprite', 'https://labs.phaser.io/assets/particles/red.png');
  }

  create ()
  {
    // const sprite = this.add.image(400, 300, 'mySprite');

    // this.tweens.chain({
    //   delay: 1,
    //   tweens: [
    //     {
    //       targets: sprite,
    //       x: 500
    //     }
    //   ]
    // });

    this.objToTween = this.add.circle(this.scale.width / 2, this.scale.height / 2, 50, 0xff0000);

    const chain = this.tweens.chain({
      delay: 1,
      tweens: [
        { targets: this.objToTween, duration: 500, props: { alpha: 0 } },
        { targets: this.objToTween, duration: 500, props: { alpha: 1 } },
        { targets: this.objToTween, duration: 500, props: { alpha: 0 } },
        { targets: this.objToTween, duration: 500, props: { alpha: 1 } },
      ],
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: Example
};

new Phaser.Game(config);
