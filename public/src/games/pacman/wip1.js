var PacmanGame = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function PacmanGame ()
    {
        Phaser.State.call(this);

        this.world;

        this.dots;
        this.pacman;
        this.map;
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

        var _this = this;

        mapData.forEach(function (current, index, array) {

            var x = index % 28;
            var y = Math.floor(index / 28);

            if (current === 2)
            {
                _this.dots.addDot(x * 16, y * 16);
            }
            else if (current === 3)
            {
                _this.dots.addPowerDot(x * 16, y * 16);
            }

        });
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

        this.cursors = this.state.input.keyboard.createCursorKeys();
    },

    collideWith: function (dot, axis)
    {
        dot.enabled = false;
        dot.parent.visible = false;
    },

    update: function (time, delta)
    {
        if (this.cursors.left.isDown)
        {
            this.body.setVelocity(-200, 0);
            this.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.body.setVelocity(200, 0);
            this.play('right', true);
        }
        else if (this.cursors.up.isDown)
        {
            this.body.setVelocity(0, -200);
            this.play('up', true);
        }
        else if (this.cursors.down.isDown)
        {
            this.body.setVelocity(0, 200);
            this.play('down', true);
        }

        this.x = this.body.pos.x;
        this.y = this.body.pos.y;
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
