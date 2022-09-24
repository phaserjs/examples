class Cell
{
    constructor (grid, index, x, y)
    {
        this.grid = grid;

        this.index = index;
        this.x = x;
        this.y = y;

        this.open = false;
        this.bomb = false;

        this.flagged = false;
        this.query = false;

        //  0 = empty, 1,2,3,4,5,6,7,8 = number of adjacent bombs
        this.value = 0;

        this.tile = grid.scene.make.image({
            key: 'tiles',
            frame: 0,
            x: x * 16,
            y: y * 16,
            origin: 0
        });

        grid.board.add(this.tile);

        this.tile.setInteractive();

        this.tile.on('pointerdown', this.onPointerDown, this);
    }

    reset ()
    {
        this.open = false;
        this.bomb = false;

        this.flagged = false;
        this.query = false;

        this.value = 0;

        this.tile.setFrame(0);
    }

    onPointerDown (pointer)
    {
        if (this.open)
        {
            return;
        }

        if (pointer.rightButtonDown())
        {
            if (this.query)
            {
                this.query = false;
                this.tile.setFrame(0);
            }
            else if (this.flagged)
            {
                this.query = true;
                this.flagged = false;
                this.tile.setFrame(3);
            }
            else if (!this.flagged)
            {
                this.flagged = true;
                this.tile.setFrame(2);
            }
        }
        else if (!this.flagged && !this.query)
        {
            this.reveal();
        }
    }

    reveal ()
    {
        if (this.bomb)
        {
            this.tile.setFrame(6);

            console.log('Game Over');
        }
        else
        {
            if (this.value === 0)
            {
                this.grid.floodFill(this.x, this.y);
            }
            else
            {
                this.show();
            }
        }
    }

    show ()
    {
        const values = [ 1, 8, 9, 10, 11, 12, 13, 14, 15 ];

        this.tile.setFrame(values[this.value]);

        this.open = true;
    }

    debug ()
    {
        const values = [ '⬜️', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣' ];

        if (this.bomb)
        {
            return '💣';
        }
        else
        {
            return values[this.value];
        }
    }
}

class Grid
{
    constructor (scene, width, height)
    {
        this.scene = scene;

        this.board = scene.add.container();

        this.width = width;
        this.height = height;
        this.size = width * height;

        this.data = [];

        let i = 0;

        for (let x = 0; x < width; x++)
        {
            this.data[x] = [];

            for (let y = 0; y < height; y++)
            {
                this.data[x][y] = new Cell(this, i, x, y);

                i++;
            }
        }
    }

    generate (qty)
    {
        const bombs = [];

        do {
            const location = Phaser.Math.Between(0, this.size - 1);

            const cell = this.getCell(location);

            if (!cell.bomb)
            {
                cell.bomb = true;

                qty--;

                bombs.push(cell);
            }

        } while (qty > 0);

        bombs.forEach(cell => {

            //  Update the 8 cells around this bomb cell

            const adjacent = this.getAdjacentCells(cell);

            adjacent.forEach(adjacentCell => {

                if (adjacentCell)
                {
                    adjacentCell.value++;
                }
            });
        });
    }

    getCell (index)
    {
        const pos = Phaser.Math.ToXY(index, this.width, this.height);

        return this.data[pos.x][pos.y];
    }

    getCellXY (x, y)
    {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height)
        {
            return null;
        }

        return this.data[x][y];
    }

    getAdjacentCells (cell)
    {
        return [
            //  Top-Left, Top-Middle, Top-Right
            this.getCellXY(cell.x - 1, cell.y - 1),
            this.getCellXY(cell.x, cell.y - 1),
            this.getCellXY(cell.x + 1, cell.y - 1),

            //  Left, Right
            this.getCellXY(cell.x - 1, cell.y),
            this.getCellXY(cell.x + 1, cell.y),

            //  Bottom-Left, Bottom-Middle, Bottom-Right
            this.getCellXY(cell.x - 1, cell.y + 1),
            this.getCellXY(cell.x, cell.y + 1),
            this.getCellXY(cell.x + 1, cell.y + 1)
        ];
    }

    floodFill (x, y)
    {
        const cell = this.getCellXY(x, y);

        if (cell && !cell.open && !cell.bomb)
        {
            cell.show();

            if (cell.value === 0)
            {
                this.floodFill(x, y - 1);
                this.floodFill(x, y + 1);
                this.floodFill(x - 1, y);
                this.floodFill(x + 1, y);
            }
        }
    }

    debug ()
    {
        for (let y = 0; y < this.height; y++)
        {
            let row = '';

            for (let x = 0; x < this.width; x++)
            {
                let cell = this.data[x][y];

                if (x === 0)
                {
                    row = row.concat(`|`);
                }

                row = row.concat(`${cell.debug()}|`);
            }

            console.log(row);
        }
    }
}

class MineSweeper extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.spritesheet('tiles', 'assets/games/minesweeper/tiles.png', { frameWidth: 16 });
        this.load.spritesheet('digits', 'assets/games/minesweeper/digits.png', { frameWidth: 13, frameHeight: 23, endFrame: 9 });
        this.load.spritesheet('buttons', 'assets/games/minesweeper/digits.png', { frameWidth: 26, frameHeight: 26, startFrame: 5 });
    }

    create ()
    {
        this.input.mouse.disableContextMenu();

        this.grid = new Grid(this, 16, 16);

        this.grid.generate(30);

        // this.grid.debug();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: MineSweeper
};

const game = new Phaser.Game(config);
