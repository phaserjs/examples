var Breakout = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Breakout ()
    {
        Phaser.Scene.call(this, { key: 'breakout' });

        // this.brickCat = this.physics.world.nextCategory();
        // this.ballCat = this.physics.world.nextCategory();

        this.bricks = [];
        this.bat;
        this.ball;

        this.hitBrick = null;
    },

    preload: function ()
    {
        this.load.atlas('assets', 'assets/games/breakout/breakout.png', 'assets/games/breakout/breakout.json');
    },

    create: function ()
    {
        this.physics.world.setBounds();

        var brickFrames = [ 'blue1', 'red1', 'green1', 'yellow1', 'silver1', 'purple1' ];

        //  Create the bricks

        var bx = 112;
        var by = 100;

        for (var y = 0; y < 6; y++)
        {
            for (var x = 0; x < 10; x++)
            {
                var brick = this.physics.add.image(bx, by, 'assets', brickFrames[y], { isStatic: true });

                brick.setName('brick');

                // brick.setCollisionCategory(this.brickCat);

                bx += 64;

                this.bricks.push(brick);
            }

            bx = 112;
            by += 32;
        }

        //  Create a ball
        this.ball = this.physics.add.image(400, 550, 'assets', 'ball1', { shape: 'circle' });
        this.ball.name = 'ball';
        this.ball.setFixedRotation();
        this.ball.setBounce(1);
        this.ball.setFriction(0);
        this.ball.setFrictionStatic(0);
        this.ball.setFrictionAir(0);

        // this.ball.setCollidesWith([ this.brickCat ]);

        this.ball.setVelocity(3, -3);

        // this.physics.add.rectangle(200, 200, 100, 100, { 
        //     chamfer: { radius: 20 }
        // }),

        this.physics.world.events.on('COLLISION_END_EVENT', function (event) {

            var ball;
            var brick;

            console.log(event.bodyA);
            console.log(event.bodyB);

            if (event.bodyA.gameObject && event.bodyA.gameObject.name === 'ball')
            {
                ball = event.bodyA.gameObject;

                if (event.bodyB.gameObject && event.bodyB.gameObject.name === 'brick')
                {
                    brick = event.bodyB.gameObject;
                }
            }
            else if (event.bodyB.gameObject && event.bodyB.gameObject.name === 'ball')
            {
                ball = event.bodyB.gameObject;

                if (event.bodyA.gameObject && event.bodyA.gameObject.name === 'brick')
                {
                    brick = event.bodyA.gameObject;
                }
            }

            if (ball && brick && !this.hitBrick)
            {
                this.hitBrick = brick;
            }

        });
    },

    update: function ()
    {
        if (this.hitBrick)
        {
            this.hitBrick.destroy();
            this.hitBrick = null;
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
        default: 'matter',
        matter: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    }
};

var game = new Phaser.Game(config);
