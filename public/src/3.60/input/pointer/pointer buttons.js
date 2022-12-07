class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('balls', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    }

    create ()
    {
        const graphics = this.add.graphics();

        let color = 0xffff00;
        const thickness = 2;
        const alpha = 1;

        //  Events

        let sx = 0;
        let sy = 0;
        let draw = false;

        //  Stop the right-click from triggering the context menu
        //  You can also set this in the game config
        this.input.mouse.disableContextMenu();

        this.input.on('pointerdown', pointer =>
        {

            sx = pointer.x;
            sy = pointer.y;
            draw = true;

            if (pointer.leftButtonDown() && pointer.rightButtonDown())
            {
                color = 0x00ffff;
            }
            else if (pointer.leftButtonDown())
            {
                color = 0xffff00;
            }
            else if (pointer.rightButtonDown())
            {
                color = 0x00ff00;
            }

        });

        this.input.on('pointerup', () =>
        {

            draw = false;

        });

        this.input.on('pointermove', pointer =>
        {

            if (draw && pointer.noButtonDown() === false)
            {
                graphics.clear();
                graphics.lineStyle(thickness, color, alpha);
                graphics.strokeRect(sx, sy, pointer.x - sx, pointer.y - sy);
            }

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    disableContextMenu: true,
    scene: Example
};

const game = new Phaser.Game(config);
