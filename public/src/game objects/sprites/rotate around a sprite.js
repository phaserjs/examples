class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
      this.load.image('ballRed', 'assets/demoscene/ball.png');
      this.load.image('ballBlue', 'assets/demoscene/blue_ball.png');
      this.load.image('ballSmall', 'assets/demoscene/ball-tlb.png');
    }

    create ()
    {
      ball1 = this.add.sprite(400, 300, 'ballRed');
      ball2 = this.add.sprite(400, 300, 'ballBlue');
      ball3 = this.add.sprite(400, 300, 'ballSmall');
    }

    update()
    {
      ball2.setPosition(400, 300);
      ball3.setPosition(400, 300);

      Phaser.Math.RotateAroundDistance(ball2, ball1.x, ball1.y, angle1, distance1);
      Phaser.Math.RotateAroundDistance(ball3, ball2.x, ball2.y, angle2, distance2);

      angle1 = Phaser.Math.Angle.Wrap(angle1 + 0.02);
      angle2 = Phaser.Math.Angle.Wrap(angle2 + 0.03);
    }
}

let ball1;
let ball2;
let ball3;

let angle1 = 0;
let distance1 = 200;

let angle2 = 0;
let distance2 = 80;

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: [ Example]
};

const game = new Phaser.Game(config);

}

function update ()
{
    //  Reset the position so the rotation gets the correct _new_ position
    ball2.setPosition(400, 300);
    ball3.setPosition(400, 300);

    Phaser.Math.RotateAroundDistance(ball2, ball1.x, ball1.y, angle1, distance1);
    Phaser.Math.RotateAroundDistance(ball3, ball2.x, ball2.y, angle2, distance2);

    angle1 = Phaser.Math.Angle.Wrap(angle1 + 0.02);
    angle2 = Phaser.Math.Angle.Wrap(angle2 + 0.03);
}
