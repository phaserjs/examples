class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.input.on(Phaser.Input.Events.POINTER_UP_OUTSIDE, () => console.info('phaser pointer up outside'));
        this.input.on(Phaser.Input.Events.POINTER_UP, () => console.info('phaser pointer up inside'));

        this.add.text(this.scale.width / 2, this.scale.height / 2, 'This is a test Phaser game', { align: 'center', color: '#ffffff', fontSize: '32px', fontFamily: 'Arial' }).setOrigin(0.5);

        this.game.canvas.addEventListener('mousedown', () => console.log('mouse down on canvas'));

        const block = this.physics.add.image(400, 100, 'block')
            .setVelocity(100, 200)
            .setBounce(1, 1)
            .setCollideWorldBounds(true);

        this.input.setDraggable(block.setInteractive());

        this.input.on('dragstart', (pointer, obj) =>
        {
            obj.body.moves = false;
        });

        this.input.on('drag', (pointer, obj, dragX, dragY) =>
        {
            obj.setPosition(dragX, dragY);
        });

        this.input.on('dragend', (pointer, obj) =>
        {
            obj.body.moves = true;
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
window.addEventListener('mouseup', () => console.info('mouse up on window'));