class Example extends Phaser.Scene
{
    helpText;
    onlyColliding = false;
    selectedShape = 'rectangle';
    graphics;
    controls;
    map;
    p2 = null;
    p1 = null;

    preload ()
    {
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/cybernoid.json');
        this.load.image('cybernoid', 'assets/tilemaps/tiles/cybernoid.png');
    }

    create ()
    {
        this.map = this.add.tilemap('map');
        const tiles = this.map.addTilesetImage('cybernoid');
        const layer = this.map.createLayer(0, tiles);

        // var layer = map.createDynamicLayer(0, tiles);

        layer.setScale(1.25, 1.25);

        this.graphics = this.add.graphics({
            lineStyle: { width: 4, color: 0xa8fff2 },
            fillStyle: { color: 0xa8fff2 }
        });

        this.map.setCollisionByExclusion(7);

        this.input.keyboard.on('keydown-ONE', (event) =>
        {
            this.selectedShape = 'rectangle';
            this.helpText.setText(this.getHelpMessage());
        });

        this.input.keyboard.on('keydown-TWO', (event) =>
        {
            this.selectedShape = 'line';
            this.helpText.setText(this.getHelpMessage());
        });

        this.input.keyboard.on('keydown-THREE', (event) =>
        {
            this.selectedShape = 'circle';
            this.helpText.setText(this.getHelpMessage());
        });

        this.input.keyboard.on('keydown-FOUR', (event) =>
        {
            this.selectedShape = 'triangle';
            this.helpText.setText(this.getHelpMessage());
        });

        this.input.keyboard.on('keydown-C', (event) =>
        {
            this.onlyColliding = !this.onlyColliding;
            this.helpText.setText(this.getHelpMessage());
        });

        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

        const cursors = this.input.keyboard.createCursorKeys();
        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.5
        };
        this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);

        this.helpText = this.add.text(16, 16, this.getHelpMessage(), {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            fill: '#ffffff',
            backgroundColor: '#000000'
        });
        this.helpText.setScrollFactor(0);

        this.input.on('pointerdown', () =>
        {

            // Update p1 & p2 based on where user clicks
            const worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);
            if (!this.p1)
            {
                this.p1 = worldPoint.clone();
            }
            else if (!this.p2)
            {
                this.p2 = worldPoint.clone();
            }
            else
            {
                this.p1 = worldPoint.clone();
                this.p2 = null;
            }

        });
    }

    update (time, delta)
    {
        this.controls.update(delta);
        this.graphics.clear();

        // Show user where they clicked
        if (this.p1) { this.graphics.fillCircle(this.p1.x, this.p1.y, 3); }
        if (this.p2) { this.graphics.fillCircle(this.p2.x, this.p2.y, 3); }

        // If we have both points, draw a shape and manipulate the tiles in that shape
        if (this.p1 && this.p2)
        {
            this.map.forEachTile((tile) => { tile.alpha = 1; });

            let overlappingTiles = [];

            switch (this.selectedShape)
            {
                case 'rectangle': {
                    const xStart = Math.min(this.p1.x, this.p2.x);
                    const yStart = Math.min(this.p1.y, this.p2.y);
                    const xEnd = Math.max(this.p1.x, this.p2.x);
                    const yEnd = Math.max(this.p1.y, this.p2.y);
                    const rect = new Phaser.Geom.Rectangle(xStart, yStart, xEnd - xStart, yEnd - yStart);
                    overlappingTiles = this.map.getTilesWithinShape(rect, { isColliding: this.onlyColliding });
                    this.graphics.strokeRectShape(rect);
                    break; }
                case 'line': {
                    const line = new Phaser.Geom.Line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
                    overlappingTiles = this.map.getTilesWithinShape(line, { isColliding: this.onlyColliding });
                    this.graphics.strokeLineShape(line);
                    break; }
                case 'circle': {
                    const radius = Math.sqrt(Math.pow(this.p2.x - this.p1.x, 2) + Math.pow(this.p2.y - this.p1.y, 2)) / 2;
                    const cx = (this.p1.x + this.p2.x) / 2;
                    const cy = (this.p1.y + this.p2.y) / 2;
                    const circle = new Phaser.Geom.Circle(cx, cy, radius);
                    overlappingTiles = this.map.getTilesWithinShape(circle, { isColliding: this.onlyColliding });
                    this.graphics.strokeCircleShape(circle);
                    break; }
                case 'triangle': {
                    const tri = new Phaser.Geom.Triangle(this.p1.x, this.p1.y, this.p1.x, this.p2.y, this.p2.x, this.p2.y);
                    overlappingTiles = this.map.getTilesWithinShape(tri, { isColliding: this.onlyColliding });
                    this.graphics.strokeTriangleShape(tri);
                    break; }
                default:
                    break;
            }

            overlappingTiles.forEach((tile) => { tile.alpha = 0.25; });
        }

    }

    getHelpMessage ()
    {
        return `Click to draw. Press 1/2/3/4 to change shapes.\nSelected shape: ${this.selectedShape}\nPress C to only select colliding tiles: ${this.onlyColliding ? 'on' : 'off'}\nArrows to scroll.`;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1affdd',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);

