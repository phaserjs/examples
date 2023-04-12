class Example extends Phaser.Scene
{
    swatchData;
    color = new Phaser.Display.Color();
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

        this.input.keyboard.on('keydown-C', this.setCircle, this);
        this.input.keyboard.on('keydown-R', this.setRectangle, this);
        this.input.keyboard.on('keydown-E', this.setEllipse, this);
        this.input.keyboard.on('keydown-S', this.setStar, this);
        this.input.keyboard.on('keydown-L', this.setLine, this);
        this.input.keyboard.on('keydown-DELETE', this.deleteShape, this);
        this.input.keyboard.on('keydown-TAB', this.changeShape, this);

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
            this.shape.x -= (this.cursors.left.shiftKey) ? 10 : 1;
        }
        else if (this.input.keyboard.checkDown(this.cursors.right, 100))
        {
            this.shape.x += (this.cursors.right.shiftKey) ? 10 : 1;
        }

        if (this.input.keyboard.checkDown(this.cursors.up, 100))
        {
            this.shape.y -= (this.cursors.up.shiftKey) ? 10 : 1;
        }
        else if (this.input.keyboard.checkDown(this.cursors.down, 100))
        {
            this.shape.y += (this.cursors.down.shiftKey) ? 10 : 1;
        }
    }

    changeColor (pointer, x, y, event)
    {
        this.swatchData.getPixel(x, y, this.color);

        if (this.shape)
        {
            this.shape.setFillStyle(this.color.color);
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

        if (this.shape)
        {
            this.shape.setFillStyle(this.color.color);
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

        switch (this.current)
        {
            case 1:
                this.shape = this.add.circle(pointer.x, pointer.y, 4, this.color.color);
                break;

            case 2:
                this.shape = this.add.rectangle(pointer.x, pointer.y, 4, 4, this.color.color);
                break;

            case 3:
                this.shape = this.add.ellipse(pointer.x, pointer.y, 4, 4, this.color.color);
                break;

            case 4:
                this.shape = this.add.star(pointer.x, pointer.y, 5, 2, 4, this.color.color);
                break;

            case 5:
                this.shape = this.add.line(pointer.x, pointer.y, 0, 0, 4, 0, this.color.color);
                break;
        }
    }

    drawUpdate (pointer)
    {
        if (!this.isDown)
        {
            return;
        }

        switch (this.current)
        {
            case 1:
                this.shape.radius = pointer.getDistance();
                break;

            case 2:
                this.shape.setSize(pointer.x - pointer.downX, pointer.y - pointer.downY);
                break;

            case 3:
                this.shape.setSize((pointer.x - pointer.downX) * 2, (pointer.y - pointer.downY) * 2);
                break;

            case 4:
                this.shape.scaleX = pointer.x - pointer.downX;
                this.shape.scaleY = pointer.y - pointer.downY;
                break;

            case 5:
                this.shape.setTo(0, 0, pointer.x - pointer.downX, pointer.y - pointer.downY);
                break;
        }
    }

    drawStop ()
    {
        this.isDown = false;

        this.shapes.push(this.shape);

        this.index++;
    }

    setCircle ()
    {
        if (this.isDown)
        {
            return;
        }

        this.current = 1;
        this.shape = null;
    }

    setRectangle ()
    {
        if (this.isDown)
        {
            return;
        }

        this.current = 2;
        this.shape = null;
    }

    setEllipse ()
    {
        if (this.isDown)
        {
            return;
        }

        this.current = 3;
        this.shape = null;
    }

    setStar ()
    {
        if (this.isDown)
        {
            return;
        }

        this.current = 4;
        this.shape = null;
    }

    setLine ()
    {
        if (this.isDown)
        {
            return;
        }

        this.current = 5;
        this.shape = null;
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

