class Example extends Phaser.Scene
{
    TILE_HEIGHT = 32;
    TILE_WIDTH = 16;
    blockSize = 32;
    swatchData;
    fillRight;
    fillLeft;
    fillTop;
    map;
    color = new Phaser.Display.Color(255, 255, 255);
    cursors;
    index = 0;
    shape = null;
    current = 1;
    isDown = false;
    shapes = [];

    preload ()
    {
        this.load.image('bg1', 'assets/skies/gradient4.png');
        this.load.image('dp', 'assets/swatches/gradient-palettes.png');
    }

    create ()
    {
        this.add.image(0, 0, 'bg1').setOrigin(0);

        //  Create the swatch
        const src = this.textures.get('dp').getSourceImage();
        this.swatchData = this.textures.createCanvas('swatch', src.width, src.height);
        this.swatchData.draw(0, 0, src);

        const swatch = this.add.image(800, 0, 'dp').setOrigin(0).setDepth(1000);

        swatch.setInteractive();

        swatch.on('pointerdown', this.changeColor, this);
        swatch.on('pointermove', this.updateColor, this);

        this.fillTop = this.color.color;
        this.fillLeft = this.color.darken(30).color;
        this.fillRight = this.color.lighten(15).color;



        // this.input.keyboard.on('keydown_C', this.setCircle, this);
        // this.input.keyboard.on('keydown_R', this.setRectangle, this);
        // this.input.keyboard.on('keydown_E', this.setEllipse, this);
        // this.input.keyboard.on('keydown_S', this.setStar, this);
        // this.input.keyboard.on('keydown_L', this.setLine, this);
        // this.input.keyboard.on('keydown_DELETE', this.deleteShape, this);
        // this.input.keyboard.on('keydown_TAB', this.changeShape, this);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.on('pointerdown', this.drawStart, this);
        this.input.on('pointermove', this.drawUpdate, this);
        this.input.on('pointerup', this.drawStop, this);
    }

    update ()
    {
        if (!this.shape)
        {
            return;
        }

        if (this.input.keyboard.checkDown(this.cursors.left, 100))
        {
            this.shape.x -= (this.cursors.left.shiftKey) ? this.TILE_WIDTH * 4 : this.TILE_WIDTH;
        }
        else if (this.input.keyboard.checkDown(this.cursors.right, 100))
        {
            this.shape.x += (this.cursors.right.shiftKey) ? this.TILE_WIDTH * 4 : this.TILE_WIDTH;
        }

        if (this.input.keyboard.checkDown(this.cursors.up, 100))
        {
            this.shape.y -= (this.cursors.up.shiftKey) ? this.TILE_HEIGHT * 4 : this.TILE_HEIGHT;
        }
        else if (this.input.keyboard.checkDown(this.cursors.down, 100))
        {
            this.shape.y += (this.cursors.down.shiftKey) ? this.TILE_HEIGHT * 4 : this.TILE_HEIGHT;
        }
    }

    mapToPx (mapX, mapY)
    {
        const x = (mapX - mapY) * this.TILE_WIDTH;
        const y = (mapX + mapY) * this.TILE_HEIGHT / 2;

        return { x: x, y: y };
    }

    pxToMap (screenX, screenY)
    {
        screenX = Phaser.Math.Snap.Floor(screenX, this.TILE_WIDTH);
        screenY = Phaser.Math.Snap.Floor(screenY, this.TILE_HEIGHT);

        // var x = ((screenX / TILE_WIDTH) + (screenY / TILE_HEIGHT)) / 2;
        // var y = ((screenY / TILE_HEIGHT) - (screenX / TILE_WIDTH)) / 2;

        // var x = screenY / TILE_HEIGHT + screenX / (2 * TILE_WIDTH);
        // var y = screenY / TILE_HEIGHT - screenX / (2 * TILE_WIDTH);

        const x = ((screenY * 2 / this.TILE_HEIGHT) + (screenX / this.TILE_WIDTH)) / 2;
        const y = (screenY * 2 / this.TILE_HEIGHT) - x;

        return { x: x, y: y };
    }

    changeColor (pointer, x, y, event)
    {
        this.swatchData.getPixel(x, y, this.color);

        this.fillTop = this.color.this.color;
        this.fillLeft = this.color.darken(30).color;
        this.fillRight = this.color.lighten(15).color;

        if (this.shape)
        {
            this.shape.setFillStyle(this.fillTop, this.fillLeft, this.fillRight);
        }

        event.stopPropagation();
    }

    updateColor (pointer, x, y, event)
    {
        if (!pointer.isDown)
        {
            return;
        }

        this.swatchData.getPixel(x, y, this.color);

        this.fillTop = this.color.this.color;
        this.fillLeft = this.color.darken(30).color;
        this.fillRight = this.color.lighten(15).color;

        if (this.shape)
        {
            this.shape.setFillStyle(this.fillTop, this.fillLeft, this.fillRight);
        }

        event.stopPropagation();
    }

    deleteShape ()
    {
        if (this.shape)
        {
            this.shape.destroy();
            this.shape = null;
        }
    }

    changeShape ()
    {
        if (this.shapes.length < 2)
        {
            return;
        }

        this.index++;

        if (this.index >= this.shapes.length)
        {
            this.index = 0;
        }

        this.shape = this.shapes[this.index];
    }

    drawStart (pointer)
    {
        if (this.current === 0)
        {
            return;
        }

        this.isDown = true;

        console.log('down', pointer.x, pointer.y);

        let pos = this.pxToMap(pointer.x, pointer.y);

        console.log('map', pos.x, pos.y);

        pos = this.mapToPx(pos.x, pos.y);

        console.log('px', pos.x, pos.y);

        this.shape = this.add.isobox(pos.x, pos.y, this.blockSize, this.blockSize * 0.70, this.fillTop, this.fillLeft, this.fillRight);
    }

    drawUpdate (pointer)
    {
        if (!this.isDown)
        {
            return;
        }

    }

    drawStop ()
    {
        this.isDown = false;

        this.shapes.push(this.shape);

        this.index++;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1010,
    height: 600,
    backgroundColor: '#efefef',
    scene: Example
};

const game = new Phaser.Game(config);
