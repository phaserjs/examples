var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        extend: {
            spriteFlow: spriteFlow
        }
    }
};

var grid;
var matched;
var frames;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('monsters', 'assets/games/flood/monsters.png', 'assets/games/flood/monsters.json');
}

function create ()
{
    //  The game is played in a 14x14 grid with 6 different colors
    //  red, blue, green, purple, orange and yellow

    grid = [];

    frames = this.textures.get('monsters').getFrameNames();

    for (var x = 0; x < 14; x++)
    {
        grid[x] = [];

        for (var y = 0; y < 14; y++)
        {
            var sx = 48 + (x * 50);
            var sy = 48 + (y * 50);
            var color = Phaser.Math.Between(0, 5);

            var monster = this.add.image(sx, sy, 'monsters', frames[color]);

            monster.setInteractive();

            monster.setData('color', color);

            grid[x][y] = monster;
        }
    }

    var _this = this;

    this.input.events.on('GAME_OBJECT_DOWN_EVENT', function (event) {

        var monster = event.gameObject;

        var newColor = monster.getData('color');

        var oldColor = grid[0][0].getData('color');

        console.log('starting flood from', oldColor, frames[oldColor], 'to', newColor, frames[newColor]);

        if (oldColor !== newColor)
        {
            matched = [];

            floodFill(oldColor, newColor, 0, 0);

            console.log(matched.length, 'matches');

            //  Sort the matches

            matched = matched.sort(function (a, b) {

                var ad = Phaser.Math.Distance.Between(a.x, a.y, 48, 48);
                var bd = Phaser.Math.Distance.Between(b.x, b.y, 48, 48);

                return ad - bd;

            });

            //  Swap the sprites

            var t = 0;

            for (var i = 0; i < matched.length; i++)
            {
                monster = matched[i];

                _this.time.delayedCall(t, function (monster) {

                    var newColor = monster.getData('color');

                    monster.setFrame(frames[newColor]);
                    
                }, [ monster ]);

                t += 20;
            }

            console.log('spriteflow finishes in', t, 'ms');

            // _this.spriteFlow();
        }

        console.log('game won?', checkWon());

    });
}

function spriteFlow ()
{
    var t = 0;

    for (var i = 0; i < matched.length; i++)
    {
        var monster = matched[i];
        var newColor = monster.getData('color');

        this.time.delayedCall(t, function () {

            monster.setFrame(frames[newColor]);
            
        });

        t += 30;
    }

    console.log('spriteflow finishes in', t, 'ms');
}

function checkWon ()
{
    var topLeft = grid[0][0].getData('color');

    for (var x = 0; x < 14; x++)
    {
        for (var y = 0; y < 14; y++)
        {
            if (grid[x][y].getData('color') !== topLeft)
            {
                return false;
            }
        }
    }

    return true;
}

function floodFill (oldColor, newColor, x, y)
{
    if (oldColor === newColor || grid[x][y].getData('color') !== oldColor)
    {
        return;
    }

    grid[x][y].setData('color', newColor);

    if (matched.indexOf(grid[x][y]) === -1)
    {
        matched.push(grid[x][y]);
    }

    if (x > 0)
    {
        floodFill(oldColor, newColor, x - 1, y);
    }

    if (x < 13)
    {
        floodFill(oldColor, newColor, x + 1, y);
    }

    if (y > 0)
    {
        floodFill(oldColor, newColor, x, y - 1);
    }

    if (y < 13)
    {
        floodFill(oldColor, newColor, x, y + 1);
    }
}
