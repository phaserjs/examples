class Cell
{
    constructor (index, x, y)
    {
        this.index = index;
        this.x = x;
        this.y = y;

        this.visible = false;
        this.bomb = false;

        //  0 = empty, 1,2,3,4 = number of adjacent bombs
        this.value = 0;
    }

    debug ()
    {
        if (this.bomb)
        {
            return '💣';
        }
        else if (this.value === 1)
        {
            return '1️⃣';
        }
        else if (this.value === 2)
        {
            return '2️⃣';
        }
        else if (this.value === 3)
        {
            return '3️⃣';
        }
        else if (this.value === 4)
        {
            return '4️⃣';
        }
        else
        {
            return '⬜️';
        }
    }
}

class Grid
{
    constructor (width, height)
    {
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
                this.data[x][y] = new Cell(i, x, y);
                i++;
            }
        }
    }

    addBombs (qty)
    {
        const bombs = [];

        do {
            const location = Phaser.Math.Between(0, this.size);

            const cell = this.getCell(location);

            if (!cell.bomb)
            {
                cell.bomb = true;

                qty--;

                bombs.push(cell);
            }

        } while (qty > 0);

        this.addFlags(bombs);
    }

    addFlags (bombs)
    {
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

    create ()
    {
        //  8x8 grid to start with
        this.grid = new Grid(16, 16);

        this.grid.addBombs(24);

        this.grid.debug();


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
