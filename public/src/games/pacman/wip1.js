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

    preload: function ()
    {
        this.load.image('map', 'assets/games/pacman/map.png');
        this.load.json('mapData', 'assets/games/pacman/map.json');
        this.load.spritesheet('sprites', 'assets/games/pacman/sprites.png', { frameWidth: 16, frameHeight: 16 });
    },

    create: function ()
    {
        this.world = new Phaser.Physics.Impact.World();

        this.add.image(0, 0, 'map').setOrigin(0);

        this.dots = new Dots(this);

        this.parseMapData();

        this.pacman = new Pacman(this);
    },

    parseMapData: function ()
    {
        var mapData = this.cache.json.get('mapData').layers[1].data;

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
    },

    addDot: function (x, y)
    {
        var dot = this.create(x, y, 'sprites', 0);

        dot.setOrigin(0);
    },

    addPowerDot: function (x, y)
    {
        var dot = this.create(x, y, 'sprites', 1);

        dot.setOrigin(0);
    }

});

var Dot = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    function Dot (state, x, y, key, frame)
    {
        Phaser.GameObjects.Image.call(this, state, x, y, key, frame);

        this.isPowerDot = (frame === 1);

        this.body = state.world.create(x, y, 16, 16);

        this.body.parent = this;

        this.body.setTypeB().setCheckAgainstA().setLite();
    }

});

var Pacman = new Phaser.Class({

    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Pacman (state)
    {
        Phaser.GameObjects.Sprite.call(this, state, 13 * 16, 23 * 16, 'sprites', 14);

        state.children.add(this);

        this.setOrigin(0);

        this.direction = Phaser.RIGHT;
        this.heading = Phaser.NONE;
        this.canMove = { LEFT: true, RIGHT: true, UP: false, DOWN: false };

        this.state.anims.create({
            key: 'left',
            frames: this.state.anims.generateFrameNumbers('sprites', { start: 28, end: 29 }),
            framerate: 10,
            repeat: -1
        });

        this.state.anims.create({
            key: 'right',
            frames: this.state.anims.generateFrameNumbers('sprites', { start: 14, end: 15 }),
            framerate: 10,
            repeat: -1
        });

        this.state.anims.create({
            key: 'up',
            frames: this.state.anims.generateFrameNumbers('sprites', { start: 42, end: 43 }),
            framerate: 10,
            repeat: -1
        });

        this.state.anims.create({
            key: 'down',
            frames: this.state.anims.generateFrameNumbers('sprites', { start: 56, end: 57 }),
            framerate: 10,
            repeat: -1
        });

        this.state.anims.create({
            key: 'die',
            frames: this.state.anims.generateFrameNumbers('sprites', { start: 16, end: 27 }),
            framerate: 10,
            repeat: -1
        });

        //  Physics Body

        this.body = this.state.world.create(this.x, this.y, 16, 16);

        this.body.setMaxVelocity(200, 200);
        this.body.setTypeA().setCheckAgainstB().setActive();

        this.body.collideWith = this.collideWith;
        this.body.handleMovementTrace = this.handleMovementTrace.bind(this);

        this.cursors = this.state.input.keyboard.createCursorKeys();
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
        }
        else if (this.cursors.right.isDown)
        {
            this.heading = Phaser.RIGHT;
        }
        else if (this.cursors.up.isDown)
        {
            this.heading = Phaser.UP;
        }
        else if (this.cursors.down.isDown)
        {
            this.heading = Phaser.DOWN;
        }
        else
        {
            this.heading = Phaser.NONE;
        }
    },

    update: function (time, delta)
    {
        this.checkCursors();

        //  Simple direction change
        if (this.heading === Phaser.LEFT && this.canMove.LEFT)
        {
            this.body.setVelocity(-200, 0);
            this.play('left', true);
            this.direction = Phaser.LEFT;
            this.canMove.LEFT = false;
            this.canMove.RIGHT = true;
        }
        else if (this.heading === Phaser.RIGHT && this.canMove.RIGHT)
        {
            this.body.setVelocity(200, 0);
            this.play('right', true);
            this.direction = Phaser.RIGHT;
            this.canMove.LEFT = true;
            this.canMove.RIGHT = false;
        }
        else if (this.heading === Phaser.UP && this.canMove.UP)
        {
            this.body.setVelocity(0, -200);
            this.play('up', true);
            this.direction = Phaser.UP;
            this.canMove.UP = false;
            this.canMove.DOWN = true;
        }
        else if (this.heading === Phaser.DOWN && this.canMove.DOWN)
        {
            this.body.setVelocity(0, 200);
            this.play('down', true);
            this.direction = Phaser.DOWN;
            this.canMove.UP = true;
            this.canMove.DOWN = false;
        }

        this.x = this.body.pos.x;
        this.y = this.body.pos.y;
    },

    handleMovementTrace: function (res)
    {
        if (res.collision.x || res.collision.y)
        {
            //  We hit a tile, now work out where we can move
            var x = res.pos.x / 16;
            var y = res.pos.y / 16;
            var map = this.state.world.collisionMap.data;

            this.canMove.LEFT = (map[y][x - 1] === 0);
            this.canMove.RIGHT = (map[y][x + 1] === 0);
            this.canMove.UP = (map[y - 1][x] === 0);
            this.canMove.DOWN = (map[y + 1][x] === 0);

            console.log(this.canMove);
        }

        return true;
    },

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
