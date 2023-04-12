class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.image('ayu', 'assets/pics/ayu.png');
    }

    create ()
    {
        const rt = this.add.renderTexture(700, 600, 1400, 1200);

        rt.fill(0x2d2d2d);

        for (let y = 0; y < 4; y++)
        {
            for (let x = 0; x < 4; x++)
            {
                rt.draw('ayu', x * 404, y * 371);
            }
        }

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            acceleration: 0.06,
            drag: 0.0005,
            maxSpeed: 1.0
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

        this.add.text(10, 10, 'Cursors to move', { font: '16px Courier', fill: '#ffffff' }).setScrollFactor(0);
    }

    update (time, delta)
    {
        this.controls.update(delta);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
