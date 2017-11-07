var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        extend: {

            allowClick: true,
            cursor: null,
            currentColor: '',
            cursorTween: null,
            emitters: {},
            grid: [],
            matched: [],
            text1: null,
            text2: null,
            moves: 0,
            frames: [ 'blue', 'green', 'grey', 'purple', 'red', 'yellow' ],

            onIconDown: onIconDown,
            onIconOut: onIconOut,
            onIconOver: onIconOver,

            checkWon: checkWon,
            createEmitter: createEmitter,
            createIcon: createIcon,
            floodFill: floodFill,
            startFlow: startFlow

        }
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-smooth.png', 'assets/fonts/bitmap/atari-smooth.xml');
    this.load.atlas('flood', 'assets/games/flood/blobs.png', 'assets/games/flood/blobs.json');
}

function createIcon (color, x, y)
{
    var icon = this.add.image(x, y, 'flood', 'icon-' + color);

    icon.setData('color', this.frames.indexOf(color));

    icon.setOrigin(0);

    icon.setInteractive();
}

function onIconOver (event)
{
    var icon = event.gameObject;

    var newColor = icon.getData('color');

    //  Valid color?
    if (newColor !== this.currentColor)
    {
        this.cursor.setFrame('cursor-over');
    }
    else
    {
        this.cursor.setFrame('cursor-invalid');
    }

    this.cursor.setPosition(icon.x, icon.y);

    if (this.cursorTween)
    {
        this.cursorTween.stop();
    }

    this.cursor.setAlpha(1);
    this.cursor.setVisible(true);
}

function onIconOut (event)
{
    this.cursorTween = this.tweens.add({
        targets: this.cursor,
        alpha: 0,
        duration: 300
    });
}

function onIconDown (event)
{
    if (!this.allowClick)
    {
        return;
    }

    var icon = event.gameObject;

    var newColor = icon.getData('color');

    //  Valid color?
    if (newColor === this.currentColor)
    {
        return;
    }

    var oldColor = this.grid[0][0].getData('color');

    // console.log('starting flood from', oldColor, this.frames[oldColor], 'to', newColor, this.frames[newColor]);

    if (oldColor !== newColor)
    {
        this.currentColor = newColor;

        this.matched = [];

        this.moves++;

        this.text2.setText(Phaser.Utils.String.Pad(this.moves, 2, '0', 1));

        this.floodFill(oldColor, newColor, 0, 0);

        if (this.matched.length > 0)
        {
            this.startFlow();
        }
    }
}

function create ()
{
    this.add.image(400, 300, 'flood', 'background');
    this.add.image(400, 300, 'flood', 'grid');

    this.createIcon('grey', 16, 172);
    this.createIcon('red', 16, 328);
    this.createIcon('green', 16, 474);
    this.createIcon('yellow', 688, 172);
    this.createIcon('blue', 688, 328);
    this.createIcon('purple', 688, 474);

    this.cursor = this.add.image(16, 172, 'flood', 'cursor-over').setOrigin(0).setVisible(false);

    //  The game is played in a 14x14 grid with 6 different colors

    this.grid = [];

    for (var x = 0; x < 14; x++)
    {
        this.grid[x] = [];

        for (var y = 0; y < 14; y++)
        {
            var sx = 166 + (x * 36);
            var sy = 66 + (y * 36);
            var color = Phaser.Math.Between(0, 5);

            var block = this.add.image(sx, sy, 'flood', this.frames[color]);

            block.setData('oldColor', color);
            block.setData('color', color);

            this.grid[x][y] = block;
        }
    }

    this.currentColor = this.grid[0][0].getData('color');

    this.particles = this.add.particles('flood');

    for (var i = 0; i < this.frames.length; i++)
    {
        this.createEmitter(this.frames[i]);
    }

    this.text1 = this.add.bitmapText(10, 30, 'atari', 'Moves', 20);
    this.text2 = this.add.bitmapText(20, 60, 'atari', '00', 40);

    this.input.events.on('GAME_OBJECT_OVER_EVENT', this.onIconOver.bind(this));

    this.input.events.on('GAME_OBJECT_OUT_EVENT', this.onIconOut.bind(this));

    this.input.events.on('GAME_OBJECT_DOWN_EVENT', this.onIconDown.bind(this));
}

function createEmitter (color)
{
    this.emitters[color] = this.particles.createEmitter({
        frame: color,
        lifespan: 1000,
        speed: { min: 300, max: 400 },
        alpha: { start: 1, end: 0 },
        scale: { start: 0.5, end: 0 },
        rotate: { start: 0, end: 360, ease: 'Power2' },
        blendMode: 'ADD',
        on: false
    });
}

function startFlow ()
{
    this.matched.sort(function (a, b) {

        var aDistance = Phaser.Math.Distance.Between(a.x, a.y, 166, 66);
        var bDistance = Phaser.Math.Distance.Between(b.x, b.y, 166, 66);

        return aDistance - bDistance;

    });

    //  Swap the sprites

    var t = 0;

    this.allowClick = false;

    for (var i = 0; i < this.matched.length; i++)
    {
        var block = this.matched[i];

        var blockColor = this.frames[block.getData('color')];
        var oldBlockColor = this.frames[block.getData('oldColor')];

        var emitter = this.emitters[oldBlockColor];

        this.time.delayedCall(t, function (block, blockColor) {

            block.setFrame(blockColor);

            emitter.explode(4, block.x, block.y);
            
        }, [ block, blockColor, emitter ]);

        t += 10;
    }

    // console.log('spriteflow finishes in', t, 'ms');

    _this = this;

    this.time.delayedCall(t, function () {

        _this.allowClick = true;

        if (_this.checkWon())
        {
            _this.text1.setText("Won!!");
        }

    });
}

function checkWon ()
{
    var topLeft = this.grid[0][0].getData('color');

    for (var x = 0; x < 14; x++)
    {
        for (var y = 0; y < 14; y++)
        {
            if (this.grid[x][y].getData('color') !== topLeft)
            {
                return false;
            }
        }
    }

    return true;
}

function floodFill (oldColor, newColor, x, y)
{
    if (oldColor === newColor || this.grid[x][y].getData('color') !== oldColor)
    {
        return;
    }

    this.grid[x][y].setData('oldColor', oldColor);
    this.grid[x][y].setData('color', newColor);

    if (this.matched.indexOf(this.grid[x][y]) === -1)
    {
        this.matched.push(this.grid[x][y]);
    }

    if (x > 0)
    {
        this.floodFill(oldColor, newColor, x - 1, y);
    }

    if (x < 13)
    {
        this.floodFill(oldColor, newColor, x + 1, y);
    }

    if (y > 0)
    {
        this.floodFill(oldColor, newColor, x, y - 1);
    }

    if (y < 13)
    {
        this.floodFill(oldColor, newColor, x, y + 1);
    }
}
