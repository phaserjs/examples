var config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    backgroundColor: '#bfcc00',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var headPosition;
var speed;
var body;
var head;
var food;
var cursors;
var heading = 3;
var direction = 3;
var moveTime = 0;
var camera;
var ctx = new AudioContext();

//  Direction consts
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

//  Audio effects
var foodEffect = {
    frequency: 523.25,
    attack: 0.05,
    decay: 0.2,
    type: 'sine',
    volume: 3,
    pan: 0.8,
    pitchBend: 600,
    reverse: true,
    random: 100
};

var deathEffect = {
    frequency: 16,
    decay: 1,
    type: 'sawtooth',
    dissonance: 50
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('food', 'assets/games/snake/food.png');
    this.load.image('body', 'assets/games/snake/body.png');
}

function create ()
{
    //  The starting position of the snake (in grid coordinates)
    headPosition = new Phaser.Geom.Point(8, 8);

    //  Default speed of the snake (in ms between movement updates)
    speed = 100;

    //  As the snake grows we'll add to this Group, but its empty to start with
    body = this.add.layer();

    //  Everything is positioned at 16x16 offsets
    head = body.create(headPosition.x * 16, headPosition.y * 16, 'body');

    head.setOrigin(0);

    //  The food the snake should eat (always starts in the same location)
    food = this.add.image(3 * 16, 4 * 16, 'food').setOrigin(0);

    //  Create our keyboard controls
    cursors = this.input.keyboard.createCursorKeys();

    //  We'll use the real time clock to work out when to next move the snake

    camera = this.cameras.main;
}

function update (time, delta)
{
    if (heading === -1)
    {
        //  Because the game is over

        if (moveTime > time)
        {
            camera.shake(1000);
        }

        return;
    }

    /**
    * Check which key is pressed, and then change the direction the snake
    * is heading based on that. The checks ensure you don't double-back
    * on yourself, for example if you're moving to the right and you press
    * the LEFT cursor, it ignores it, because the only valid directions you
    * can move in at that time is up and down.
    */

    if (cursors.left.isDown && (direction === UP || direction === DOWN))
    {
        heading = LEFT;
    }
    else if (cursors.right.isDown && (direction === UP || direction === DOWN))
    {
        heading = RIGHT;
    }
    else if (cursors.up.isDown && (direction === LEFT || direction === RIGHT))
    {
        heading = UP;
    }
    else if (cursors.down.isDown && (direction === LEFT || direction === RIGHT))
    {
        heading = DOWN;
    }

    // debug.setText('x: ' + headPosition.x + ' y: ' + headPosition.y + ' l: ' + body.getLength());

    //  Is it time to move the snake?
    if (time >= moveTime)
    {
        moveSnake(time);
    }
}

function moveSnake (time)
{
    /**
    * Based on the heading property (which is the direction the player pressed)
    * we update the headPosition value accordingly.
    * 
    * The Math.wrap call allow the snake to wrap around the screen, so when
    * it goes off any of the sides it re-appears on the other.
    */
    switch (heading)
    {
        case LEFT:
            headPosition.x = Phaser.Math.Wrap(headPosition.x - 1, 0, 40);
            break;

        case RIGHT:
            headPosition.x = Phaser.Math.Wrap(headPosition.x + 1, 0, 40);
            break;

        case UP:
            headPosition.y = Phaser.Math.Wrap(headPosition.y - 1, 0, 30);
            break;

        case DOWN:
            headPosition.y = Phaser.Math.Wrap(headPosition.y + 1, 0, 30);
            break;
    }

    direction = heading;

    //  Update the body segments
    body.shiftPosition(headPosition.x * 16, headPosition.y * 16, 1);

    //  Did the head hit any body piece?
    if (bodyCollideCheck())
    {
        //  Game Over
        new Phaser.Sound.Dynamic.FX(ctx, deathEffect);

        moveTime = time + 2000;

        heading = -1;
    }
    else
    {
        //  Did the head hit the food?
        foodCollideCheck();

        //  Update the timer ready for the next movement
        moveTime = time + speed;
    }
}

function bodyCollideCheck ()
{
    var segments = body.getChildren();

    for (var i = 1; i < segments.length; i++)
    {
        if (head.x === segments[i].x && head.y === segments[i].y)
        {
            return true;
        }
    }

    return false;
}

function foodCollideCheck ()
{
    //  Is the head in the same grid space as the food?
    if (head.x === food.x && head.y === food.y)
    {
        /**
        * Munch, munch - expand our body by creating a new body segment in the Group,
        * positioned at the location of the head.
        */
        var newPart = body.create(head.x, head.y, 'body');

        newPart.setOrigin(0);

        //  Play the food fx
        new Phaser.Sound.Dynamic.FX(ctx, foodEffect);

        //  Place down a new food item to collect
        if (repositionFood())
        {
            //  For every 5 new body segments we'll increase the snake speed
            if (speed > 40 && body.getLength() % 5 === 0)
            {
                speed -= 10;
            }
        }
        else
        {
            //  Whoa, they won!
            heading = -1;
        }
    }
}

/**
* We can place the food anywhere in our 40x30 grid
* *except* on-top of the head or a body piece, so we need
* to filter those out of the possible food locations.
* If there aren't any locations left, they've won!
*
* @method repositionFood
* @return {boolean} true if the food was placed, otherwise false
*/
function repositionFood ()
{
    //  First create an array that assumes all positions
    //  are valid for the new piece of food
    var testLocations = [];

    for (var y = 0; y < 30; y++)
    {
        testLocations[y] = [];

        for (var x = 0; x < 40; x++)
        {
            testLocations[y][x] = true;
        }
    }

    //  Remove head location from valid positions list
    testLocations[head.y / 16][head.x / 16] = false;

    //  Remove all body pieces from valid positions list
    body.children.each(function (segment) {

        var bx = segment.x / 16;
        var by = segment.y / 16;

        testLocations[by][bx] = false;

    });

    //  Purge out false positions
    var validLocations = [];

    for (var y = 0; y < 30; y++)
    {
        for (var x = 0; x < 40; x++)
        {
            if (testLocations[y][x])
            {
                //  Is this position valid for food? If so, add it here ...
                validLocations.push({ x: x, y: y });
            }
        }
    }

    if (validLocations.length > 0)
    {
        //  Use the RNG to pick a random food position
        var pos = Phaser.Math.RND.pick(validLocations);

        //  And place it
        food.x = pos.x * 16;
        food.y = pos.y * 16;

        return true;
    }
    else
    {
        return false;
    }
}
