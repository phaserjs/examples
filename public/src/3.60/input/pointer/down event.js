class Example extends Phaser.Scene
{
    text;

    preload ()
    {
        this.load.spritesheet('balls', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    }

    create ()
    {
        this.text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

        this.input.on('pointerdown', function (pointer)
        {

            console.log(this.game.loop.frame, 'down B');

            this.add.image(pointer.x, pointer.y, 'balls', Phaser.Math.Between(0, 5));

        }, this);
    }

    update ()
    {
        const p = this.input.activePointer;

        this.text.setText([
            `x: ${p.x}`,
            `y: ${p.y}`,
            `duration: ${p.getDuration()}`
        ]);
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
