class Example extends Phaser.Scene
{
    text;

    preload ()
    {
        this.load.image('mouse', 'assets/sprites/mouse_jim_sachs.png');
    }

    create ()
    {
        this.add.sprite(0, 600, 'mouse').setOrigin(0, 1);

        this.text = this.add.text(10, 10, '', { fill: '#00ff00' });
    }

    update ()
    {
        const pointer = this.input.activePointer;

        this.text.setText([
            `x: ${pointer.worldX}`,
            `y: ${pointer.worldY}`,
            `isDown: ${pointer.isDown}`,
            `rightButtonDown: ${pointer.rightButtonDown()}`
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
