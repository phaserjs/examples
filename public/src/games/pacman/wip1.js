// http://gameinternals.com/post/2072558330/understanding-pac-man-ghost-behavior

var PacmanGame = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function PacmanGame ()
    {
        Phaser.State.call(this);

        this.world;
        this.dots;
        this.ghosts;
        this.pacman;

        this.offset = new Phaser.Geom.Point(375, 64);

        this.intersections;
    },

    //  Global Events
    POWER_UP: 'powerUp',
    LEVEL_COMPLETE: 'levelComplete',

    preload: function ()
    {
        this.load.image('map', 'assets/games/pacman/map.png');
        this.load.image('bezel', 'assets/games/pacman/bezel600.png');
        this.load.json('mapData', 'assets/games/pacman/map.json');
        this.load.spritesheet('dots', 'assets/games/pacman/dots.png', { frameWidth: 16, frameHeight: 16 });
        this.load.spritesheet('sprites', 'assets/games/pacman/sprites32.png', { frameWidth: 32, frameHeight: 32 });
    },

    createAnimations: function ()
    {
        //  PowerDot animation

        this.anims.create({
            key: 'powerDot',
            frames: this.anims.generateFrameNumbers('dots', { start: 1, end: 2 }),
            framerate: 5,
            repeat: -1
        });

        //  Pacman Animations

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('sprites', { start: 3, end: 4 }),
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
            frames: this.anims.generateFrameNumbers('sprites', { start: 5, end: 6 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('sprites', { start: 7, end: 8 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('sprites', { start: 11, end: 21 }),
            framerate: 8,
            onComplete: this.playDeathOver,
            callbackScope: this
        });

        //  Ghosts

        //  Red = Blinky (Shadow)

        this.anims.create({
            key: 'blinkyRight',
            frames: this.anims.generateFrameNumbers('sprites', { start: 22, end: 23 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'blinkyDown',
            frames: this.anims.generateFrameNumbers('sprites', { start: 24, end: 25 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'blinkyLeft',
            frames: this.anims.generateFrameNumbers('sprites', { start: 26, end: 27 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'blinkyUp',
            frames: this.anims.generateFrameNumbers('sprites', { start: 28, end: 29 }),
            framerate: 16,
            repeat: -1
        });

        //  Pink = Pinky (Speedy)

        this.anims.create({
            key: 'pinkyRight',
            frames: this.anims.generateFrameNumbers('sprites', { start: 33, end: 34 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'pinkyDown',
            frames: this.anims.generateFrameNumbers('sprites', { start: 35, end: 36 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'pinkyLeft',
            frames: this.anims.generateFrameNumbers('sprites', { start: 37, end: 38 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'pinkyUp',
            frames: this.anims.generateFrameNumbers('sprites', { start: 39, end: 40 }),
            framerate: 16,
            repeat: -1
        });

        //  Blue = Inky (Bashful)

        this.anims.create({
            key: 'inkyRight',
            frames: this.anims.generateFrameNumbers('sprites', { start: 44, end: 45 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'inkyDown',
            frames: this.anims.generateFrameNumbers('sprites', { start: 46, end: 47 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'inkyLeft',
            frames: this.anims.generateFrameNumbers('sprites', { start: 48, end: 49 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'inkyUp',
            frames: this.anims.generateFrameNumbers('sprites', { start: 50, end: 51 }),
            framerate: 16,
            repeat: -1
        });

        //  Yellow = Clyde (Pokey)

        this.anims.create({
            key: 'clydeRight',
            frames: this.anims.generateFrameNumbers('sprites', { start: 55, end: 56 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'clydeDown',
            frames: this.anims.generateFrameNumbers('sprites', { start: 57, end: 58 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'clydeLeft',
            frames: this.anims.generateFrameNumbers('sprites', { start: 59, end: 60 }),
            framerate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'clydeUp',
            frames: this.anims.generateFrameNumbers('sprites', { start: 61, end: 62 }),
            framerate: 16,
            repeat: -1
        });

        //  Ghost death

        this.anims.create({
            key: 'frightened',
            frames: this.anims.generateFrameNumbers('sprites', { start: 77, end: 78 }),
            framerate: 16,
            repeat: 50,
            onComplete: this.setFrightenedOut,
            callbackScope: this
        });

        this.anims.create({
            key: 'frightenedOut',
            frames: this.anims.generateFrameNumbers('sprites', { start: 77, end: 80 }),
            framerate: 16,
            repeat: 10,
            onComplete: this.setFrightenedOver,
            callbackScope: this
        });

    },

    setFrightenedOut: function (sprite)
    {
        sprite.play('frightenedOut');
    },

    setFrightenedOver: function (sprite)
    {
        sprite.removeEdible();
    },

    create: function ()
    {
        this.createAnimations();

        this.world = new Phaser.Physics.Impact.World();

        this.add.image(this.offset.x, this.offset.y, 'map').setOrigin(0);

        this.dots = new Dots(this);

        this.parseMapData();

        this.ghosts = new Ghosts(this);

        this.pacman = new Pacman(this);

        this.events.on('LEVEL_COMPLETE', this.levelComplete.bind(this));

        this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'bezel');

        console.log('Dots left', this.dots.left);
    },

    playDeathOver: function ()
    {
        this.ghosts.reset();
        this.pacman.reset();
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

            //  28 = map width (in tiles)
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

        //  Our intersection data for the ghosts

        this.intersections = [];

        var _this = this;

        this.cache.json.get('mapData').layers.forEach(function (current) {

            if (current.name === 'Tile Layer 2')
            {
                current.data.forEach(function (current, index, array) {

                    var x = index % 28;
                    var y = Math.floor(index / 28);

                    if (x === 0)
                    {
                        _this.intersections[y] = [];
                    }

                    _this.intersections[y][x] = 0;

                    if (current === 5)
                    {
                        _this.intersections[y][x] = 1;
                    }
                    else if (current === 6)
                    {
                        _this.intersections[y][x] = 2;
                    }

                });
            }

        });
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

        this.ghosts.update(time, delta);

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

        this.x += state.offset.x;
        this.y += state.offset.y;

        this.isPowerDot = (frame === 1);

        this.spawnPos = { x: x, y: y, gx: x / 16, gy: y / 16 };

        this.name = 'dot';

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
        this.body.pos.x = this.spawnPos.x;
        this.body.pos.y = this.spawnPos.y;

        this.body.enabled = true;

        this.visible = true;
    }

});

var Ghosts = new Phaser.Class({

    Extends: Phaser.GameObjects.Group,

    initialize:

    function Ghosts (state)
    {
        Phaser.GameObjects.Group.call(this, state);

        this.classType = Ghost;

        this.blinky = this.create(16, 14, 'blinky');
        this.pinky = this.create(12, 14, 'pinky');
        this.inky = this.create(14, 12, 'inky');
        this.clyde = this.create(12, 9, 'clyde');
    },

    hide: function ()
    {
        this.blinky.hide();
        this.pinky.hide();
        this.inky.hide();
        this.clyde.hide();
    },

    reset: function ()
    {
        this.blinky.reset();
        this.pinky.reset();
        this.inky.reset();
        this.clyde.reset();
    }

});

var Ghost = new Phaser.Class({

    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Ghost (state, x, y, type)
    {
        Phaser.GameObjects.Sprite.call(this, state, x * 16, y * 16, 'sprites', 26);

        state.children.add(this);

        this.spawnPos = { x: x * 16, y: y * 16, gx: x, gy: y };

        this.name = type;

        this.speed = 2;
        this.heading = Phaser.NONE;
        this.direction = Phaser.LEFT;

        this.canMove = {};

        this.canMove[Phaser.LEFT] = true;
        this.canMove[Phaser.RIGHT] = true;
        this.canMove[Phaser.UP] = false;
        this.canMove[Phaser.DOWN] = false;

        this.edible = false;

        //  Valid modes are Chase, Scatter and Frightened (edible)
        this.mode = 'chase';

        this.state.events.on('POWER_UP', this.canBeEaten.bind(this));

        //  Physics Body

        this.body = this.state.world.create(this.x, this.y, 16, 16);

        this.body.parent = this;

        this.body.setTypeB().setCheckAgainstA().setLite();
    },

    hide: function ()
    {
        this.body.enabled = false;

        this.visible = false;
    },

    reset: function ()
    {
        this.body.enabled = true;
        this.body.pos.x = this.spawnPos.x;
        this.body.pos.y = this.spawnPos.y;

        this.x = this.state.offset.x + this.body.pos.x + 8;
        this.y = this.state.offset.y + this.body.pos.y + 8;

        this.speed = 2;
        this.heading = Phaser.NONE;
        this.direction = Phaser.LEFT;

        this.canMove[Phaser.LEFT] = true;
        this.canMove[Phaser.RIGHT] = true;
        this.canMove[Phaser.UP] = false;
        this.canMove[Phaser.DOWN] = false;

        this.edible = false;
        this.visible = true;
    },

    canBeEaten: function ()
    {
        this.edible = true;

        this.speed = 1;

        this.play('frightened');

        //  Start timer, etc
    },

    wasEaten: function ()
    {
        //  Drop score sprite

        //  Eyes mode

        this.reset();
    },

    removeEdible: function ()
    {
        this.edible = false;

        this.speed = 2;
    },

    update: function (time, delta)
    {
        if (!this.visible)
        {
            return;
        }

        switch (this.direction)
        {
            case Phaser.LEFT:

                this.body.pos.x -= this.speed;

                if (!this.edible)
                {
                    this.play(this.name + 'Left', true);
                }

                break;

            case Phaser.RIGHT:

                this.body.pos.x += this.speed;


                if (!this.edible)
                {
                    this.play(this.name + 'Right', true);
                }

                break;

            case Phaser.UP:

                this.body.pos.y -= this.speed;

                if (!this.edible)
                {
                    this.play(this.name + 'Up', true);
                }

                break;

            case Phaser.DOWN:

                this.body.pos.y += this.speed;

                if (!this.edible)
                {
                    this.play(this.name + 'Down', true);
                }

                break;
        }
            
        this.updateDirection();

        this.x = this.state.offset.x + this.body.pos.x + 8;
        this.y = this.state.offset.y + this.body.pos.y + 8;
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
            if (x === 0 && y === 17)
            {
                //  From left edge to right
                this.body.pos.x = 27 * 16;
                return;
            }
            else if (x === 27 && y === 17)
            {
                //  From right edge to left
                this.body.pos.x = 0;
                return;
            }

            var wasHeading = this.direction;

            //  Stop their movement?
            if (this.canMove[this.direction] === false || this.state.intersections[y][x] !== 0 || this.edible)
            {
                this.direction = Phaser.NONE;
            }

            if (this.direction === Phaser.NONE)
            {
                var options = [];

                if (this.canMove[Phaser.LEFT] && wasHeading !== Phaser.RIGHT)
                {
                    options.push(Phaser.LEFT);
                }

                if (this.canMove[Phaser.RIGHT] && wasHeading !== Phaser.LEFT)
                {
                    options.push(Phaser.RIGHT);
                }

                if (this.canMove[Phaser.UP] && wasHeading !== Phaser.DOWN)
                {
                    options.push(Phaser.UP);
                }

                if (this.canMove[Phaser.DOWN] && wasHeading !== Phaser.UP)
                {
                    options.push(Phaser.DOWN);
                }

                this.direction = Phaser.Math.RND.pick(options);
            }
        }
    }

});

var Pacman = new Phaser.Class({

    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Pacman (state)
    {
        Phaser.GameObjects.Sprite.call(this, state, 13 * 16, 26 * 16, 'sprites', 14);

        state.children.add(this);

        this.speed = 2;
        this.heading = Phaser.NONE;
        this.direction = Phaser.LEFT;

        this.canMove = {};

        this.canMove[Phaser.LEFT] = true;
        this.canMove[Phaser.RIGHT] = true;
        this.canMove[Phaser.UP] = false;
        this.canMove[Phaser.DOWN] = false;

        this.alive = true;

        //  Physics Body

        this.body = this.state.world.create(this.x, this.y, 16, 16);

        this.body.parent = this;

        this.body.setTypeA().setCheckAgainstB().setActive();

        this.body.collideWith = this.collideWith;

        this.cursors = this.state.input.keyboard.createCursorKeys();
    },

    reset: function ()
    {
        this.alive = true;

        this.body.pos.x = 13 * 16;
        this.body.pos.y = 23 * 16;
        this.body.enabled = true;

        this.x = this.state.offset.x + this.body.pos.x + 8;
        this.y = this.state.offset.y + this.body.pos.y + 8;

        this.speed = 2;
        this.heading = Phaser.NONE;
        this.direction = Phaser.LEFT;

        this.canMove[Phaser.LEFT] = true;
        this.canMove[Phaser.RIGHT] = true;
        this.canMove[Phaser.UP] = false;
        this.canMove[Phaser.DOWN] = false;
    },

    collideWith: function (body, axis)
    {
        if (body.parent.name === 'dot')
        {
            body.enabled = false;
            body.parent.visible = false;
        }
        else
        {
            //  Ghost!

            if (body.parent.edible)
            {
                body.parent.wasEaten();
            }
            else
            {
                //  RIP
                this.parent.state.ghosts.hide();

                this.enabled = false;

                this.parent.alive = false;

                this.parent.play('die');
            }
        }
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
        if (!this.alive)
        {
            return;
        }

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

        this.x = this.state.offset.x + this.body.pos.x + 8;
        this.y = this.state.offset.y + this.body.pos.y + 8;
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
            if (x === 0 && y === 17)
            {
                //  From left edge to right
                this.body.pos.x = 27 * 16;
                return;
            }
            else if (x === 27 && y === 17)
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
    width: 1200,
    height: 680,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    state: PacmanGame
};

var game = new Phaser.Game(config);
