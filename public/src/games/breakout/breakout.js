var Breakout = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function Breakout() {
            Phaser.Scene.call(this, {
                key: 'breakout'
            });

            this.bricks;
            this.paddle;
            this.ball;

            // initialize score and lives counters
            this.score = 0;
            this.lives = 3;

            // display score and lives status to user
            this.scoreText;
            this.livesText;
            this.introText;
        },

    preload: function() {
        this.load.atlas('assets', 'assets/games/breakout/breakout.png', 'assets/games/breakout/breakout.json');
    },

    create: function() {
        //  Enable world bounds, but disable the floor
        this.physics.world.setBoundsCollision(true, true, true, false);

        //  Create the bricks in a 10x6 grid
        this.bricks = this.physics.add.staticGroup({
            key: 'assets',
            frame: ['blue1', 'red1', 'green1', 'yellow1', 'silver1', 'purple1'],
            frameQuantity: 10,
            gridAlign: {
                width: 10,
                height: 6,
                cellWidth: 64,
                cellHeight: 32,
                x: 112,
                y: 100
            }
        });

        this.ball = this.physics.add.image(400, 500, 'assets', 'ball1').setCollideWorldBounds(true).setBounce(1);
        this.ball.setData('onPaddle', true);

        this.paddle = this.physics.add.image(400, 550, 'assets', 'paddle1').setImmovable();

        //  Our colliders
        this.physics.add.collider(this.ball, this.bricks, this.hitBrick, null, this);
        this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this);

        //  Input events
        this.input.on('pointermove', function(pointer) {

            //  Keep the paddle within the game
            this.paddle.x = Phaser.Math.Clamp(pointer.x, 52, 748);

            if (this.ball.getData('onPaddle')) {
                this.ball.x = this.paddle.x;
            }

        }, this);

        this.input.on('pointerup', function(pointer) {

            if (this.ball.getData('onPaddle')) {
                this.ball.setVelocity(-75, -300);
                this.ball.setData('onPaddle', false);

                // player started game so disable into text
                this.introText.visible = false;
            }

            // If starting a new game initialize lives to 3
            if (this.lives == 0) {
                this.lives = 3;
                this.livesText.setText('Lives: ' + this.lives);
            }

        }, this);

        // Display current score 
        this.scoreText = this.add.text(32, 550, 'Score: 0', {
            font: "20px Arial",
            fill: "#ffffff",
            align: "left"
        });

	// Available lives status display
        this.livesText = this.add.text(680, 550, 'Lives: 3', {
            font: "20px Arial",
            fill: "#ffffff",
            align: "left"
        });

        // Game Intro/Game over status display
        this.introText = this.add.text(window.innerWidth / 2, 400, 'Click To Start', {
            font: "40px Arial",
            fill: "#ffffff",
            align: "center"
        });
        
        //Phaser 2: introText.anchor.setTo(0.5, 0.5); 
        this.introText.setOrigin(0.5, 0.5);
    },

    hitBrick: function(ball, brick) {
        this.score += 10;
        this.scoreText.setText("Score: " + this.score);

        brick.disableBody(true, true);

        if (this.bricks.countActive() === 0) {
            this.resetLevel();
        }
    },

    ballLost: function() {

        this.lives--;
        this.livesText.setText('Lives: ' + this.lives);

        if (this.lives === 0) {
            this.gameOver();
        }
    },

    gameOver: function() {

        this.ball.body.velocity.setTo(0, 0);

        this.introText.text = 'Game Over!';
        this.introText.visible = true;

    },

    resetBall: function() {
        this.ball.setVelocity(0);
        this.ball.setPosition(this.paddle.x, 500);
        this.ball.setData('onPaddle', true);
    },

    resetLevel: function() {
        this.resetBall();

        this.bricks.children.each(function(brick) {

            brick.enableBody(false, 0, 0, true, true);

        });
    },

    hitPaddle: function(ball, paddle) {
        var diff = 0;

        if (ball.x < paddle.x) {
            //  Ball is on the left-hand side of the paddle
            diff = paddle.x - ball.x;
            ball.setVelocityX(-10 * diff);
        } else if (ball.x > paddle.x) {
            //  Ball is on the right-hand side of the paddle
            diff = ball.x - paddle.x;
            ball.setVelocityX(10 * diff);
        } else {
            //  Ball is perfectly in the middle
            //  Add a little random X to stop it bouncing straight up!
            ball.setVelocityX(2 + Math.random() * 8);
        }
    },

    update: function() {
        if (this.ball.y > 600) {
            this.ballLost();
            this.resetBall();
        }
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [Breakout],
    physics: {
        default: 'arcade'
    }
};

var game = new Phaser.Game(config);
