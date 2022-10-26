class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('sky', 'assets/skies/pixelsky.png');
        this.load.spritesheet('blocks', 'assets/sprites/heartstar32.png', { frameWidth: 32, frameHeight: 32 });
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        //  Create a series of sprites, with a block as the 'head'

        let head;
        const snake = [];

        for (let i = 0; i < 12; i++)
        {
            const part = this.add.image(64 + i * 32, 128, 'blocks', 1);

            part.setOrigin(0, 0);

            if (i === 11)
            {
                part.setFrame(0);

                head = part;
            }

            snake.push(part);
        }

        //  0 = left
        //  1 = right
        //  2 = up
        //  3 = down
        let direction = 3;
        let distance = Phaser.Math.Between(4, 8);

        //  Create a movement timer - every 100ms we'll move the 'snake'

        this.time.addEvent({ delay: 100, loop: true, callback: () => {

            let x = head.x;
            let y = head.y;

            if (direction === 0)
            {
                x = Phaser.Math.Wrap(x - 32, 0, 800);
            }
            else if (direction === 1)
            {
                x = Phaser.Math.Wrap(x + 32, 0, 800);
            }
            else if (direction === 2)
            {
                y = Phaser.Math.Wrap(y - 32, 0, 576);
            }
            else if (direction === 3)
            {
                y = Phaser.Math.Wrap(y + 32, 0, 576);
            }

            Phaser.Actions.ShiftPosition(snake, x, y);

            distance--;

            if (distance === 0)
            {
                if (direction <= 1)
                {
                    direction = Phaser.Math.Between(2, 3);
                }
                else
                {
                    direction = Phaser.Math.Between(0, 1);
                }

                distance = Phaser.Math.Between(4, 12);
            }

        }});
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
