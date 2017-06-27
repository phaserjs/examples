var PacmanGame = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function PacmanGame ()
    {
        Phaser.State.call(this);

        this.world;

        this.dots;
        this.pacman;

        this.debug;
    },

    preload: function ()
    {
        this.load.image('map', 'assets/games/pacman/map.png');
        this.load.json('mapData', 'assets/games/pacman/map.json');
        this.load.spritesheet('sprites', 'assets/games/pacman/sprites.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('dots', 'assets/games/pacman/dots.png', { frameWidth: 16, frameHeight: 16 });
    },

    create: function ()
    {
        this.world = new Phaser.Physics.Impact.World();

        this.add.image(0, 0, 'map').setOrigin(0);

        this.dots = new Dots(this);

        this.parseMapData();

        this.debug = this.add.graphics();

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
        var dot = this.create(x, y, 'dots', 0);

        dot.setOrigin(0);
    },

    addPowerDot: function (x, y)
    {
        var dot = this.create(x, y, 'dots', 1);

        dot.setOrigin(0);
    }

});

var Dot = new Phaser.Class({

    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Dot (state, x, y, key, frame)
    {
        Phaser.GameObjects.Sprite.call(this, state, x, y, key, frame);

        this.isPowerDot = (frame === 1);

        this.body = state.world.create(x, y, 16, 16);

        this.body.parent = this;

        this.body.setTypeB().setCheckAgainstA().setLite();

        if (this.isPowerDot)
        {
            this.state.anims.create({
                key: 'powerDot',
                frames: this.state.anims.generateFrameNumbers('dots', { start: 1, end: 2 }),
                framerate: 5,
                repeat: -1
            });

            this.play('powerDot');
        }
    }

});

var Pacman = new Phaser.Class({

    Extends: Phaser.GameObjects.Sprite,

    initialize:

    function Pacman (state)
    {
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

        this.state.anims.create({
            key: 'left',
            frames: this.state.anims.generateFrameNumbers('sprites', { start: 14, end: 15 }),
            framerate: 16,
            repeat: -1
        });

        this.state.anims.create({
            key: 'right',
            frames: this.state.anims.generateFrameNumbers('sprites', { start: 0, end: 1 }),
            framerate: 16,
            repeat: -1
        });

        this.state.anims.create({
            key: 'up',
            frames: this.state.anims.generateFrameNumbers('sprites', { start: 28, end: 29 }),
            framerate: 16,
            repeat: -1
        });

        this.state.anims.create({
            key: 'down',
            frames: this.state.anims.generateFrameNumbers('sprites', { start: 42, end: 43 }),
            framerate: 16,
            repeat: -1
        });

        this.state.anims.create({
            key: 'die',
            frames: this.state.anims.generateFrameNumbers('sprites', { start: 2, end: 13 }),
            framerate: 4,
            repeat: -1
        });

        //  Physics Body

        this.body = this.state.world.create(this.x, this.y, 16, 16);

        this.body.setTypeA().setCheckAgainstB().setActive();

        this.body.collideWith = this.collideWith;

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
        this.canMove[Phaser.UP] = (map[y - 1][x] === 0);
        this.canMove[Phaser.DOWN] = (map[y + 1][x] === 0);

        //  At a grid junction
        if (this.body.pos.x % 16 === 0 && this.body.pos.y % 16 === 0)
        {
            //  Stop their movement?
            if (this.canMove[this.direction] === false)
            {
                this.direction = Phaser.NONE;
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

        /*
        var g = this.state.debug;
        var p = this.body.pos;
        var w = this.body.size.x;
        var h = this.body.size.y;

        g.clear();

        g.fillStyle((this.canMove.LEFT) ? 0x00ff00 : 0xff0000, 0.5);
        g.fillRect((x - 1) * 16, y * 16, w, h);

        g.fillStyle((this.canMove.RIGHT) ? 0x00ff00 : 0xff0000, 0.5);
        g.fillRect((x + 1) * 16, y * 16, w, h);

        g.fillStyle((this.canMove.UP) ? 0x00ff00 : 0xff0000, 0.5);
        g.fillRect(x * 16, (y - 1) * 16, w, h);

        g.fillStyle((this.canMove.DOWN) ? 0x00ff00 : 0xff0000, 0.5);
        g.fillRect(x * 16, (y + 1) * 16, w, h);
        */
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
