var Breakout = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Breakout ()
    {
        Phaser.Scene.call(this, { key: 'breakout' });

        this.bricks;
        this.paddle;
        this.ball;

        this.ballOnPaddle = true;
    },

    preload: function ()
    {
        this.load.atlas('assets', 'assets/games/breakout/breakout.png', 'assets/games/breakout/breakout.json');
    },

    create: function ()
    {
        this.physics.world.setBoundsCollision(true, true, true, false);

        //  Create the bricks in a 10x6 grid
        this.bricks = this.physics.add.staticGroup({
            key: 'assets', frame: [ 'blue1', 'red1', 'green1', 'yellow1', 'silver1', 'purple1' ],
            frameQuantity: 10,
            gridAlign: { width: 10, height: 6, cellWidth: 64, cellHeight: 32, x: 112, y: 100 }
        });

        //  Create a ball
        this.ball = this.physics.add.image(400, 500, 'assets', 'ball1').setCollideWorldBounds(true).setBounce(1);

        //  Create the paddle
        this.paddle = this.physics.add.image(400, 550, 'assets', 'paddle1').setImmovable();

        //  Our colliders
        this.physics.add.collider(this.ball, this.bricks, this.hitBrick);
        this.physics.add.collider(this.ball, this.paddle, this.hitPaddle);

        //  Input events
        this.input.events.on('POINTER_MOVE_EVENT', function (event) {
        
            //  Keep the paddle within the game
            this.paddle.x = Phaser.Math.Clamp(event.x, 52, 748);

            if (this.ballOnPaddle)
            {
                this.ball.x = this.paddle.x;
            }
        
        }, 0, this);

        this.input.events.on('POINTER_DOWN_EVENT', function (event) {
        
            if (this.ballOnPaddle)
            {
                this.ball.setVelocity(-75, -300);
                this.ballOnPaddle = false;
            }
        
        }, 0, this);
    },

    hitBrick: function (ball, brick)
    {
        brick.body.enable = false;
        brick.active = false;
        brick.visible = false;
    },

    hitPaddle: function (ball, paddle)
    {
        var diff = 0;

        if (ball.x < paddle.x)
        {
            //  Ball is on the left-hand side of the paddle
            diff = paddle.x - ball.x;
            ball.setVelocityX(-10 * diff);
        }
        else if (ball.x > paddle.x)
        {
            //  Ball is on the right-hand side of the paddle
            diff = ball.x -paddle.x;
            ball.setVelocityX(10 * diff);
        }
        else
        {
            //  Ball is perfectly in the middle
            //  Add a little random X to stop it bouncing straight up!
            ball.setVelocityX(2 + Math.random() * 8);
        }
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ Breakout ],
    physics: {
        default: 'arcade'
    }
};

var game = new Phaser.Game(config);
