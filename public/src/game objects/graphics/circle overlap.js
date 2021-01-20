let t = 0;
let graphics1;
let graphics2;

class Example extends Phaser.Scene
{
    update ()
    {
      t += 0.1;

      graphics1.x += Math.sin(t) * 2;
      graphics1.y += Math.cos(t) * 2;

      graphics2.x += Math.sin(t) * 3;
      graphics2.y += Math.cos(t) * 3;
    }

    create ()
    {
      graphics2 = this.add.graphics({x: -16, y: 0}).lineStyle(28, 0x00ffff, 0.8);
      graphics1 = this.add.graphics().lineStyle(28, 0x0000ff, 0.8);

      //  Create the circles

      let radius1 = 64;
      let radius2 = 32;

      for (let i = 0; i < 8; i++)
      {
          graphics1.strokeCircle(400, 300, radius1);
          graphics2.strokeCircle(400, 300, radius2);

          radius1 += 64;
          radius2 += 64;
        }
    }
}

const config = {
  width: 800,
  height: 600,
  type: Phaser.CANVAS,
  parent: 'phaser-example',
  scene: [ Example ]
};

const game = new Phaser.Game(config);
