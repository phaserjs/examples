class Cell
{
    constructor (grid, index, x, y)
    {
        this.grid = grid;

        this.index = index;
        this.x = x;
        this.y = y;

        this.visible = false;
        this.bomb = false;

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

    onPointerDown (pointer, x, y)
    {

    }

    debug ()
    {
        if (this.bomb)
        {
            this.tile.setFrame(5);
            return '💣';
        }
        else if (this.value === 1)
        {
            this.tile.setFrame(8);
            return '1️⃣';
        }
        else if (this.value === 2)
        {
            this.tile.setFrame(9);
            return '2️⃣';
        }
        else if (this.value === 3)
        {
            this.tile.setFrame(10);
            return '3️⃣';
        }
        else if (this.value === 4)
        {
            this.tile.setFrame(11);
            return '4️⃣';
        }
        else
        {
            this.tile.setFrame(1);
            return '⬜️';
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

    addBombs (qty)
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

    preload ()
    {
        this.load.spritesheet('tiles', 'assets/games/minesweeper/tiles.png', { frameWidth: 16 });
    }

    create ()
    {
        this.grid = new Grid(this, 8, 8);

        this.grid.addBombs(6);

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
