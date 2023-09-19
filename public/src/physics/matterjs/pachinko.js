class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('ball', 'assets/sprites/red_ball.png');
    }

    create ()
    {
        this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, false);

        //  Create our Collision categories. One for the pins, one for the balls and one for the bucket

        const pinsCategory = this.matter.world.nextCategory();
        const ballsCategory = this.matter.world.nextCategory();
        const bucketCategory = this.matter.world.nextCategory();

        //  Create a basic pachinko board layout

        let startY = 150;

        for (let y = 0; y < 8; y++)
        {
            let startX = 50;
            let max = 23;

            if (y % 2 === 0)
            {
                startX = 50 + 16;
                max = 22;
            }

            for (let x = 0; x < max; x++)
            {
                const pin = this.matter.add.circle(startX + x * 32, startY + y, 3, {
                    isStatic: true,
                    restitution: 1,

                });

                pin.collisionFilter.category = pinsCategory;
                pin.collisionFilter.mask = ballsCategory;
            }

            startY += 38;
        }

        //  Our bucket to collect the balls in
        const bucket = this.add.rectangle(200, 550, 200, 32, 0xffffff);

        this.matter.add.gameObject(bucket, { isStatic: true, isSensor: true });

        bucket.setCollisionCategory(bucketCategory);
        bucket.setCollidesWith([ ballsCategory ]);

        //  Use a tween to move the bucket in a set path
        this.tweens.add({
            targets: bucket,
            x: 600,
            duration: 6000,
            yoyo: true,
            repeat: -1,
            ease: 'linear',
        });

        //  Our 'dropper' that will drop balls from the top (technically this doesn't have to be a physics object, but it helps for debugging)
        const dropper = this.matter.add.rectangle(400, 50, 96, 32, { isStatic: true });

        //  A basic score
        let score = 0;

        const scoreText = this.add.text(10, 10, 'Score: 0', { font: '16px Courier', fill: '#00ff00' });

        //  The balls we can drop from the top

        this.balls = new Set();

        let ballCount = 0;

        const ballsText = this.add.text(690, 10, 'Balls: 100', { font: '16px Courier', fill: '#00ff00' });

        //  A function that creates a ball
        const createBall = (x, y) =>
        {
            const ball = this.matter.add.image(x, y, 'ball');

            ball.setCircle();
            ball.setFriction(0.005);
            ball.setBounce(1);
            ball.setCollisionCategory(ballsCategory);
            ball.setCollidesWith([ ballsCategory, pinsCategory, bucketCategory ]);

            bucket.setOnCollideWith(ball.body, (body, collisionData) => {

                this.balls.delete(ball);

                ball.destroy();

                score += 100;

                scoreText.setText('Score: ' + score);

            });

            this.balls.add(ball);

            ballCount++;

            ballsText.setText('Balls: ' + (100 - ballCount));
        };

        this.input.on('pointermove', pointer => {

            this.matter.body.setPosition(dropper, { x: pointer.worldX, y: dropper.position.y });

        });

        this.input.on('pointerdown', pointer => {

            if (ballCount < 100)
            {
                createBall(dropper.position.x, dropper.position.y);
            }

        });
    }

    update ()
    {
        //  If a ball goes below the screen, remove it
        this.balls.forEach(ball => {

            if (ball.y > 650)
            {
                this.balls.delete(ball);

                ball.destroy();
            }

        });
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
            enableSleeping: false,
            gravity: {
                y: 1
            },
            debug: {
                staticLineColor: 0x00ff00,
                lineColor: 0xffffff,
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
