class Example extends Phaser.Scene
{
    boxY = 0;
    boxX = 0;
    result;

    preload ()
    {
        this.load.image('phaser', 'assets/sprites/diamond.png');
    }

    create ()
    {
        const tree = Phaser.Structs.RTree();

        const w = this.sys.textures.getFrame('phaser').width;
        const h = this.sys.textures.getFrame('phaser').height;

        for (let i = 0; i < 512; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            const sprite = this.add.image(x, y, 'phaser').setOrigin(0);

            tree.insert({
                left: x,
                top: y,
                right: x + w,
                bottom: y + h,
                sprite: sprite,
                w: w,
                h: h
            });
        }

        this.result = tree.search({
            minX: 0,
            minY: 0,
            maxX: 256,
            maxY: 256
        });

        this.input.on('pointermove', pointer =>
        {

            this.boxX = pointer.x;
            this.boxY = pointer.y;

            this.result = tree.search({
                minX: this.boxX,
                minY: this.boxY,
                maxX: this.boxX + 256,
                maxY: this.boxY + 256
            });

        });

        this.events.on('render', this.render, this);
    }

    render ()
    {
        const ctx = this.sys.game.context;

        ctx.strokeStyle = 'rgba(255,255,255,1)';
        ctx.lineWidth = 2;
        ctx.strokeRect(this.boxX, this.boxY, 256, 256);

        ctx.fillStyle = 'rgba(255,0,0,0.5)';

        this.result.forEach(s =>
        {

            ctx.fillRect(s.left, s.top, s.w, s.h);

        });
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
