class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('ball', 'https://labs.phaser.io/assets/sprites/pangball.png');
    }

    create ()
    {
        this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

        for (let i = 0; i < 64; i++)
        {
            const ball = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'ball');
            ball.setCircle();
            ball.setFriction(0.005);
            ball.setBounce(1);
        }

let p = false;
     this.input.keyboard.on("keydown-SPACE", (event) => {

      p = !p;

      if (! p) {
        this.matter.resume();
      } else {
        this.matter.pause();
      }
    });
    this.input.keyboard.addCapture("SPACE");
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true
            
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);