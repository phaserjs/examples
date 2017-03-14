var SpaceShipMaxAccelerations = 100 * 2;
var SpaceShip = Phaser.Class({
    
    initialize:
    
    function SpaceShip(sprite, x, y) {
        this.sprite = sprite;
        this.sprite.x = x;
        this.sprite.y = y;
        this.angularVelocity = 0;
        this.maxVelocity = 3.5;
        this.damping = 0.01;
        this.angularDamping = 0.01;
        this.accelerationAngle = 0.0;
        /* acceleration angle + velocity */
        this.accelerationVectors = new Float32Array(SpaceShipMaxAccelerations);
        this.accelerationVectorsCount = 0;
        this.accelerationVectorsHead = 0;
        this.lastAccelerationIndex = 0;
        this.isMoving = false;
    },

    addAccelerationVector: function ()
    {
        this.accelerationVectorsCount += 2;
        if (this.accelerationVectorsCount > SpaceShipMaxAccelerations)
        {
            this.accelerationVectorsCount = SpaceShipMaxAccelerations;
        }
    },

    startActiveMove: function ()
    {
        if (!this.isMoving)
        {
            this.addAccelerationVector();
            this.isMoving = true;
            this.accelerationAngle = this.sprite.rotation;
        }
    },

    stopActiveMove: function ()
    {
        this.isMoving = false;
    },

    update: function ()
    {

        var accelerationVectors = this.accelerationVectors;
        var accelerationVectorsCount = this.accelerationVectorsCount;
        var rotation = 0;
        var accelerationVectorsHead = this.accelerationVectorsHead;
        var vectorSize = 2;
        var damping = this.damping;
        var angularDamping = this.angularDamping;
        var sprite = this.sprite;
        var maxVelocity = this.maxVelocity;
        var newAccelerationVectorCount = accelerationVectorsCount;
        var newAccelerationVectorsHead = accelerationVectorsHead;
        var MathCos = Math.cos;
        var MathSin = Math.sin;
        var angularVelocity = this.angularVelocity;

        sprite.rotation += angularVelocity;

        if (Math.abs(angularVelocity) - angularDamping > 0.0)
        {
            this.angularVelocity -= angularDamping * (angularVelocity > 0.0 ? 1.0 : -1.0);
        }
        else
        {
            this.angularVelocity = 0.0;
        }

        for (var index = 0; index < accelerationVectorsCount; index += vectorSize)
        {
            var rotation = accelerationVectors[index];
            var velocity = accelerationVectors[index + 1];
            var velocitySign = (velocity > 0 ? 1 : -1);
            var rotationSign = (rotation > 0 ? 1 : -1);
            var absVelocity = velocitySign * velocity;
            var absRotation = rotationSign * rotation;

            sprite.x += MathCos(rotation) * velocity;
            sprite.y += MathSin(rotation) * velocity;

            if (absVelocity > maxVelocity)
            {
                accelerationVectors[index + 1] = maxVelocity * velocitySign;
                absVelocity = maxVelocity;   
            }
            if (absVelocity - damping > 0.0)
            {
                accelerationVectors[index + 1] -= damping * velocitySign;
            }
            else
            {
                accelerationVectors[index + 1] = 0;
            }
        }
        for (var index = 0; index < SpaceShipMaxAccelerations; index += 2)
        {
            if (accelerationVectors[index + 1] !== 0)
            {
                this.accelerationVectorsCount = accelerationVectors.length;
                break;
            }
        }


    }
});

var PlayerAngularSpeed = 0.1;
var PlayerAcceleration = 0.05;
var Player = Phaser.Class({

    Extends: SpaceShip,

    initialize: 

    function Player(sprite, x, y, state) {
        SpaceShip.call(this, sprite, x, y);
        this.accelerateForward = false;
        this.rotateLeft = false;
        this.rotateRight = false;

        state.input.keyboard.events.on('KEY_DOWN_LEFT', this.onKeyLeftPressed.bind(this));
        state.input.keyboard.events.on('KEY_DOWN_RIGHT', this.onKeyRightPressed.bind(this));
        state.input.keyboard.events.on('KEY_DOWN_UP', this.onKeyUpPressed.bind(this));
        state.input.keyboard.events.on('KEY_DOWN_DOWN', this.onKeyDownPressed.bind(this));
        state.input.keyboard.events.on('KEY_UP_LEFT', this.onKeyLeftReleased.bind(this));
        state.input.keyboard.events.on('KEY_UP_RIGHT', this.onKeyRightReleased.bind(this));
        state.input.keyboard.events.on('KEY_UP_UP', this.onKeyUpReleased.bind(this));
        state.input.keyboard.events.on('KEY_UP_DOWN', this.onKeyDownReleased.bind(this));
    },
    update: function () 
    {
        SpaceShip.prototype.update.call(this);
        
        var lastAccelerationIndex = this.lastAccelerationIndex;
        var accelerationVectors = this.accelerationVectors;


        accelerationVectors[lastAccelerationIndex] = this.sprite.rotation;

        if (this.accelerateForward)
        {
            this.startActiveMove();
            accelerationVectors[lastAccelerationIndex + 1] += PlayerAcceleration;
        }
        if (this.rotateLeft)
        {
            this.angularVelocity = -PlayerAngularSpeed;
        }
        if (this.rotateRight)
        {
            this.angularVelocity = PlayerAngularSpeed;
        }
    },
    onKeyLeftPressed: function () 
    {
        this.rotateRight = false;
        this.rotateLeft = true;
    },
    onKeyRightPressed: function () 
    {
        this.rotateLeft = false;
        this.rotateRight = true;
    },
    onKeyUpPressed: function () 
    {
        this.accelerateForward = true; 
    },
    onKeyLeftReleased: function () 
    {
        this.rotateLeft = false;
    },
    onKeyRightReleased: function () 
    {
        this.rotateRight = false;
    },
    onKeyUpReleased: function ()
    {
        this.stopActiveMove();
        this.accelerateForward = false;
        this.lastAccelerationIndex = (this.lastAccelerationIndex + 2) % SpaceShipMaxAccelerations;
    }    
});
var player;
var PlayStateChildren = [];
var PlayState = {

    preload: function () {
        this.load.image('thrust_ship', 'assets/sprites/thrust_ship.png');
        this.load.image('CherilPerils', 'assets/tests/camera/CherilPerils.png');

    },
    create: function () {
        this.add.image(0, 0, 'CherilPerils');
        player = new Player(this.add.image(0, 0, 'thrust_ship'), 400, 300, this);
        PlayStateChildren.push(player);
        this.cameras.main.startFollow(player.sprite);
    },
    update: function () {
        for (var i = 0, l = PlayStateChildren.length; i < l; ++i)
        {
            PlayStateChildren[i].update();
        }
    }
};

var game = new Phaser.Game({
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: PlayState,
    width: 800,
    height: 600
});
