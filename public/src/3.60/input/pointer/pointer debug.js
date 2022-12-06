class Example extends Phaser.Scene
{
    text;

    preload ()
    {
        this.load.spritesheet('balls', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    }

    create ()
    {
        this.text = this.add.text(10, 10, 'Move the mouse', { font: '16px Courier', fill: '#00ff00' });
    }

    update ()
    {
        const pointer = this.input.activePointer;

        this.text.setText([
            `x: ${pointer.x}`,
            `y: ${pointer.y}`,
            `mid x: ${pointer.midPoint.x}`,
            `mid y: ${pointer.midPoint.y}`,
            `velocity x: ${pointer.velocity.x}`,
            `velocity y: ${pointer.velocity.y}`,
            `movementX: ${pointer.movementX}`,
            `movementY: ${pointer.movementY}`
        ]);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    disableContextMenu: true,
    scene: Example
};

const game = new Phaser.Game(config);
