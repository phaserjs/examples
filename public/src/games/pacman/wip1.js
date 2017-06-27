var PacmanGame = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function PacmanGame ()
    {
        Phaser.State.call(this);

        this.world;
        this.dots;
        this.pacman;
    },

    //  Global Events
    POWER_UP: 'powerUp',
    LEVEL_COMPLETE: 'levelComplete',

    preload: function ()
    {
        this.load.image('map', 'assets/games/pacman/map.png');
        this.load.json('mapData', 'assets/games/pacman/map.json');
        this.load.spritesheet('dots', 'assets/games/pacman/dots.png', { frameWidth: 16, frameHeight: 16 });
        this.load.spritesheet('sprites', 'assets/games/pacman/sprites.png', { frameWidth: 32, frameHeight: 32 });
    },

    createAnimations: function ()
    {
        //  Create the powerDot animation
        this.anims.create({
            key: 'powerDot',
            frames: this.anims.generateFrameNumbers('dots', { start: 1, end: 2 }),
            framerate: 5,
            repeat: -1
        });

        //  Pacman Animations
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('sprites', { start: 14, end: 15 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('sprites', { start: 0, end: 1 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('sprites', { start: 28, end: 29 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('sprites', { start: 42, end: 43 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('sprites', { start: 2, end: 13 }),
            framerate: 4,
            repeat: -1
        });
    },

    create: function ()
    {
        this.createAnimations();

        this.world = new Phaser.Physics.Impact.World();

        this.add.image(0, 0, 'map').setOrigin(0);

        this.dots = new Dots(this);

        this.parseMapData();

        this.pacman = new Pacman(this);

        this.events.on('LEVEL_COMPLETE', this.levelComplete.bind(this));

        console.log('Dots left', this.dots.left);
    },

    parseMapData: function ()
    {
        var mapData = [];

        //  Search for our collision map data in the JSON
        this.cache.json.get('mapData').layers.forEach(function (current) {

            if (current.name === 'Tile Layer 1')
            {
                mapData = current.data;
            }

        });

        var colMapData = [];

        var _this = this;

        mapData.forEach(function (current, index, array) {

            var x = index % 28;
            var y = Math.floor(index / 28);

            if (x === 0)
            {
                colMapData[y] = [];
            }

            colMapData[y][x] = 0;

            if (current === 1)
            {
                colMapData[y][x] = 1;
            }
            else if (current === 4)
            {
                colMapData[y][x] = 12;
            }
            else if (current === 2)
            {
                _this.dots.addDot(x * 16, y * 16);
            }
            else if (current === 3)
            {
                _this.dots.addPowerDot(x * 16, y * 16);
            }

        });

        this.world.collisionMap = new Phaser.Physics.Impact.CollisionMap(16, colMapData);
    },

    levelComplete: function ()
    {
        console.log('well done!!!');

        //  After a level complete fanfare:

        //  Reset all the dots
        this.dots.reset();

        //  Reset Pacman
        this.pacman.reset();
    },

    update: function (time, delta)
    {
        this.world.update(time, delta);

        this.pacman.update(time, delta);
    }

});

var Dots = new Phaser.Class({

    Extends: Phaser.GameObjects.Group,

    initialize:

    function Dots (state)
    {
        Phaser.GameObjects.Group.call(this, state);

        this.classType = Dot;

        this._left = 0;
    },

    addDot: function (x, y)
    {
        var dot = this.create(x, y, 'dots', 0);

        dot.setOrigin(0);

        this.left++;
    },

    addPowerDot: function (x, y)
    {
        var dot = this.create(x, y, 'dots', 1);

        dot.setOrigin(0);

        this.left++;
    },

    reset: function ()
    {
        this.children.iterate(function (child) {

            child.reset();

        });

        this.left = 244;
    },

    left: {

        get: function ()
        {
            return this._left;
        },

        set: function (value)
        {
            this._left = value;

            if (this._left === 0)
            // if (this._left === 230)
            {
                this.state.events.dispatch(new Phaser.Event('LEVEL_COMPLETE'));
            }
        }
    }

});

var Dot = new Phaser.Class({

    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Dot (state, x, y, key, frame)
    {
        Phaser.GameObjects.Sprite.call(this, state, x, y, key, frame);

        this.isPowerDot = (frame === 1);

        this.gridPos = { x: x, y: y, gx: x / 16, gy: y / 16 };

        // this.name = (x / 16).toString() + '-' + (y / 16).toString();

        this.body = state.world.create(x, y, 16, 16);

        this.body.setTypeB().setCheckAgainstA().setLite();

        this.body.parent = this;

        this.body.collideWith = this.collideWith;

        if (this.isPowerDot)
        {
            this.play('powerDot');
        }
    },

    collideWith: function (pacman, axis)
    {
        //  The scope within this callback is the Body

        this.enabled = false;

        this.parent.visible = false;

        this.parent.state.dots.left--;

        if (this.parent.isPowerDot)
        {
            this.parent.state.events.dispatch(new Phaser.Event('POWER_UP'))
        }

        //  play sound
    },

    reset: function ()
    {
        this.body.pos.x = this.gridPos.x;
        this.body.pos.y = this.gridPos.y;

        this.body.enabled = true;

        this.visible = true;
    }

});

var Pacman = new Phaser.Class({

    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Pacman (state)
    {
        // Phaser.GameObjects.Sprite.call(this, state, 13 * 16, 15 * 16, 'sprites', 14);
        Phaser.GameObjects.Sprite.call(this, state, 13 * 16, 23 * 16, 'sprites', 14);

        state.children.add(this);

        this.speed = 2;
        this.heading = Phaser.NONE;
        this.direction = Phaser.LEFT;

        this.canMove = {};

        this.canMove[Phaser.LEFT] = true;
        this.canMove[Phaser.RIGHT] = true;
        this.canMove[Phaser.UP] = false;
        this.canMove[Phaser.DOWN] = false;

        this.canEatGhosts = false;

        this.state.events.on('POWER_UP', this.activatePowerUp);

        //  Physics Body

        this.body = this.state.world.create(this.x, this.y, 16, 16);

        this.body.setTypeA().setCheckAgainstB().setActive();

        this.body.collideWith = this.collideWith;

        this.cursors = this.state.input.keyboard.createCursorKeys();
    },

    reset: function ()
    {
        this.body.pos.x = 13 * 16;
        this.body.pos.y = 23 * 16;

        this.x = this.body.pos.x + 8;
        this.y = this.body.pos.y + 8;

        this.speed = 2;
        this.heading = Phaser.NONE;
        this.direction = Phaser.LEFT;

        this.canMove[Phaser.LEFT] = true;
        this.canMove[Phaser.RIGHT] = true;
        this.canMove[Phaser.UP] = false;
        this.canMove[Phaser.DOWN] = false;

        this.canEatGhosts = false;
    },

    activatePowerUp: function ()
    {
        console.log('munch munch');

        //  Start a timer going
        this.canEatGhosts = true;
    },

    collideWith: function (dot, axis)
    {
        dot.enabled = false;
        dot.parent.visible = false;
    },

    checkCursors: function ()
    {
        if (this.cursors.left.isDown)
        {
            this.heading = Phaser.LEFT;

            if (this.direction === Phaser.RIGHT)
            {
                this.direction = Phaser.LEFT;
            }
        }
        else if (this.cursors.right.isDown)
        {
            this.heading = Phaser.RIGHT;

            if (this.direction === Phaser.LEFT)
            {
                this.direction = Phaser.RIGHT;
            }
        }
        else if (this.cursors.up.isDown)
        {
            this.heading = Phaser.UP;

            if (this.direction === Phaser.DOWN)
            {
                this.direction = Phaser.UP;
            }
        }
        else if (this.cursors.down.isDown)
        {
            this.heading = Phaser.DOWN;

            if (this.direction === Phaser.UP)
            {
                this.direction = Phaser.DOWN;
            }
        }
        else
        {
            this.heading = Phaser.NONE;
        }
    },

    update: function (time, delta)
    {
        this.checkCursors();

        switch (this.direction)
        {
            case Phaser.LEFT:
                this.body.pos.x -= this.speed;
                this.play('left', true);
                break;

            case Phaser.RIGHT:
                this.body.pos.x += this.speed;
                this.play('right', true);
                break;

            case Phaser.UP:
                this.body.pos.y -= this.speed;
                this.play('up', true);
                break;

            case Phaser.DOWN:
                this.body.pos.y += this.speed;
                this.play('down', true);
                break;
        }
            
        this.updateDirection();

        this.x = this.body.pos.x + 8;
        this.y = this.body.pos.y + 8;
    },

    updateDirection: function ()
    {
        var x = Math.floor(this.body.pos.x / 16);
        var y = Math.floor(this.body.pos.y / 16);
        var map = this.state.world.collisionMap.data;

        this.canMove[Phaser.LEFT] = (map[y][x - 1] === 0);
        this.canMove[Phaser.RIGHT] = (map[y][x + 1] === 0);
        this.canMove[Phaser.UP] = (map[y - 1][x] === 0 || map[y - 1][x] === 12);
        this.canMove[Phaser.DOWN] = (map[y + 1][x] === 0);

        //  At a grid junction
        if (this.body.pos.x % 16 === 0 && this.body.pos.y % 16 === 0)
        {
            //  First check if they're wrapping around the edge of the map
            if (x === 0 && y === 14)
            {
                //  From left edge to right
                this.body.pos.x = 27 * 16;
                return;
            }
            else if (x === 27 && y === 14)
            {
                //  From right edge to left
                this.body.pos.x = 0;
                return;
            }

            //  Stop their movement?
            if (this.canMove[this.direction] === false)
            {
                this.direction = Phaser.NONE;
                this.anims.stop();
            }

            //  Set a new direction
            if (this.heading !== this.direction)
            {
                if (this.heading === Phaser.LEFT && this.canMove[this.heading])
                {
                    this.direction = Phaser.LEFT;
                }
                else if (this.heading === Phaser.RIGHT && this.canMove[this.heading])
                {
                    this.direction = Phaser.RIGHT;
                }
                else if (this.heading === Phaser.UP && this.canMove[this.heading])
                {
                    this.direction = Phaser.UP;
                }
                else if (this.heading === Phaser.DOWN && this.canMove[this.heading])
                {
                    this.direction = Phaser.DOWN;
                }
            }
        }
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    state: PacmanGame
};

var game = new Phaser.Game(config);
