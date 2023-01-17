class Example extends Phaser.Scene
{
    timer;
    direction = 0;
    speed = 250;
    block3;
    block2;
    block1;
    gridSize = 32;
    gridHeight = 15;
    gridWidth = 7;
    currentY = this.gridHeight;
    grid;

    init ()
    {
        const element = document.createElement('style');

        document.head.appendChild(element);

        element.sheet.insertRule('@font-face { font-family: "bebas"; src: url("assets/fonts/ttf/bebas.ttf") format("truetype"); }', 0);
    }

    preload ()
    {
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }

    create ()
    {
        WebFont.load({
            custom: {
                families: [ 'bebas' ]
            },
            active: this.startGame.bind(this)
        });
    }

    startGame ()
    {
        this.add.text(400, 32, 'Stacker', { fontFamily: 'bebas', fontSize: 80, color: '#ffffff' }).setShadow(2, 2, '#333333', 2, false, true);

        this.add.grid(0, 0, this.gridWidth * this.gridSize, this.gridHeight * this.gridSize, this.gridSize, this.gridSize, 0x999999, 1, 0x666666).setOrigin(0);

        const space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.block1 = this.add.rectangle(this.gridSize * 2, (this.currentY - 1) * this.gridSize, this.gridSize - 1, this.gridSize - 1, 0x6666ff).setOrigin(0);
        this.block2 = this.add.rectangle(this.gridSize * 3, (this.currentY - 1) * this.gridSize, this.gridSize - 1, this.gridSize - 1, 0x6666ff).setOrigin(0);
        this.block3 = this.add.rectangle(this.gridSize * 4, (this.currentY - 1) * this.gridSize, this.gridSize - 1, this.gridSize - 1, 0x6666ff).setOrigin(0);

        this.grid = [];

        for (let y = 0; y < this.gridHeight; y++)
        {
            this.grid.push([ 0, 0, 0, 0, 0, 0, 0 ]);
        }

        this.timer = this.time.addEvent({ delay: this.speed, callback: this.moveBlocks, callbackScope: this, loop: true });

        this.input.keyboard.on('keydown_SPACE', this.drop, this);
        this.input.on('pointerdown', this.drop, this);
    }

    gameOver ()
    {

    }

    gameWon ()
    {

    }

    getGridX (block)
    {
        return Math.ceil(block.x / this.gridSize);
    }

    hasBlockBelow (block)
    {
        return (block && this.grid[this.currentY][this.getGridX(block)]);
    }

    moveBlocks ()
    {
        if (this.direction === 0)
        {
            //  Moving right
            if (this.block1)
            {
                this.block1.x += this.gridSize;

                if (this.getGridX(this.block1) === this.gridWidth - 1)
                {
                    this.direction = 1;
                }
            }

            if (this.block2)
            {
                this.block2.x += this.gridSize;

                if (this.getGridX(this.block2) === this.gridWidth - 1)
                {
                    this.direction = 1;
                }
            }

            if (this.block3)
            {
                this.block3.x += this.gridSize;

                if (this.getGridX(this.block3) === this.gridWidth - 1)
                {
                    this.direction = 1;
                }
            }
        }
        else
        {
            //  Moving left
            if (this.block1)
            {
                this.block1.x -= this.gridSize;

                if (this.block1 && this.getGridX(this.block1) === 0)
                {
                    this.direction = 0;
                }
            }

            if (this.block2)
            {
                this.block2.x -= this.gridSize;

                if (this.block2 && this.getGridX(this.block2) === 0)
                {
                    this.direction = 0;
                }
            }

            if (this.block3)
            {
                this.block3.x -= this.gridSize;

                if (this.block3 && this.getGridX(this.block3) === 0)
                {
                    this.direction = 0;
                }
            }
        }

    }

    totalBlocks ()
    {
        let total = 0;

        if (this.block1)
        {
            total++;
        }

        if (this.block2)
        {
            total++;
        }

        if (this.block3)
        {
            total++;
        }

        return total;
    }

    nextRow ()
    {
        this.currentY--;

        if (this.currentY === 10 || this.currentY === 5)
        {
            console.log('GETTING HARDER!', this.currentY);

            this.speed -= (this.currentY === 10) ? 90 : 50;

            //  We also need to remove a block if they've still got the full amount
            if (this.currentY === 10 && this.totalBlocks() === 3)
            {
                //  3 down to 2
                this.block1 = null;
            }
            else if (this.currentY === 5 && this.totalBlocks() === 2)
            {
                //  2 down to 1
                if (this.block1 && this.block2 || this.block1 && this.block3)
                {
                    this.block1 = null;
                }
                else
                {
                    this.block2 = null;
                }
            }
        }

        //  Pick either left or right to appear from

        let side = 0;
        let shift = this.gridSize;

        if (Math.random() >= 0.5)
        {
            this.direction = 1;
            side = (this.gridWidth - 1) * this.gridSize;
            shift = -this.gridSize;
        }
        else
        {
            this.direction = 0;
        }

        if (this.block1)
        {
            this.block1 = this.add.rectangle(side, (this.currentY - 1) * this.gridSize, this.gridSize - 1, this.gridSize - 1, 0x6666ff).setOrigin(0);
            side += shift;
        }

        if (this.block2)
        {
            this.block2 = this.add.rectangle(side, (this.currentY - 1) * this.gridSize, this.gridSize - 1, this.gridSize - 1, 0x6666ff).setOrigin(0);
            side += shift;
        }

        if (this.block3)
        {
            this.block3 = this.add.rectangle(side, (this.currentY - 1) * this.gridSize, this.gridSize - 1, this.gridSize - 1, 0x6666ff).setOrigin(0);
        }

        this.timer = this.time.addEvent({ delay: this.speed, callback: this.moveBlocks, callbackScope: this, loop: true });
    }

    drop ()
    {
        this.timer.remove(false);

        const pos1 = (this.block1) ? this.getGridX(this.block1) : -1;
        const pos2 = (this.block2) ? this.getGridX(this.block2) : -1;
        const pos3 = (this.block3) ? this.getGridX(this.block3) : -1;

        // console.log('drop y', currentY, 'pos', pos1, pos2, pos3);

        const mapY = this.currentY - 1;

        if (this.currentY === this.gridHeight)
        {
            //  Is this the first row? If so we just drop and carry on.

            this.grid[mapY][pos1] = 1;
            this.grid[mapY][pos2] = 1;
            this.grid[mapY][pos3] = 1;

            this.nextRow();
        }
        else if (!this.hasBlockBelow(this.block1) && !this.hasBlockBelow(this.block2) && !this.hasBlockBelow(this.block3))
        {
            //  Can we drop? First check all 3 blocks. If none of them have anything
            //  below then it's game over.

            
            this.gameOver();
        }
        else
        {
            //  Drop them one by one
            if (this.block1)
            {
                if (this.hasBlockBelow(this.block1))
                {
                    //  There's something below this block, so we're good to carry on
                    this.grid[mapY][pos1] = 1;
                }
                else
                {
                    //  There's nothing below this block, so they loose it
                    this.block1.visible = false;
                    this.block1 = null;
                }
            }

            if (this.block2)
            {
                if (this.hasBlockBelow(this.block2))
                {
                    //  There's something below this block, so we're good to carry on
                    this.grid[mapY][pos2] = 1;
                }
                else
                {
                    //  There's nothing below this block, so they loose it
                    this.block2.visible = false;
                    this.block2 = null;
                }
            }

            if (this.block3)
            {
                if (this.hasBlockBelow(this.block3))
                {
                    //  There's something below this block, so we're good to carry on
                    this.grid[mapY][pos3] = 1;
                }
                else
                {
                    //  There's nothing below this block, so they loose it
                    this.block3.visible = false;
                    this.block3 = null;
                }
            }

            // console.table(grid);

            if (this.block1 || this.block2 || this.block3)
            {
                if (this.currentY === 1)
                {
                    this.gameWon();
                }
                else
                {
                    this.nextRow();
                }
            }
            else
            {
                this.gameOver();
            }
        }
        
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
