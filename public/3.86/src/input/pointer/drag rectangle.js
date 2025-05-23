class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const color = 0xffff00;
        const thickness = 2;
        const alpha = 1;

        //  Events

        let draw = false;

        this.input.on('pointerdown', pointer =>
        {

            draw = true;

        });

        this.input.on('pointerup', () =>
        {

            draw = false;

        });

        this.input.on('pointermove', pointer =>
        {

            if (draw)
            {
                graphics.clear();
                graphics.lineStyle(thickness, color, alpha);
                graphics.strokeRect(pointer.downX, pointer.downY, pointer.x - pointer.downX, pointer.y - pointer.downY);
            }

        });
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
