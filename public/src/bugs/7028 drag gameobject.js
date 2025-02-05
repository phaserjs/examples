class Example extends Phaser.Scene
{

    create ()
    {
        const r1 = this.add.rectangle(this.scale.width * .75, this.scale.height / 2, 100, 100, 0xff0000).setInteractive({ draggable: true })
            .on(Phaser.Input.Events.GAMEOBJECT_DRAG, (pointer, x, y) => console.log('GAMEOBJECT_DRAG', x, y))
            .on(Phaser.Input.Events.GAMEOBJECT_DRAG_END, (pointer, x, y) => console.log('GAMEOBJECT_DRAG_END', x, y)); // should return the same values but doesn't

        const r2 = this.add.rectangle(this.scale.width / 4, this.scale.height / 2, 100, 100, 0xff0000).setInteractive({ draggable: true })
            .on(Phaser.Input.Events.GAMEOBJECT_DRAG, (pointer, x, y) =>
            {
                console.log('GAMEOBJECT_DRAG', x, y);
                r2.setPosition(x, y);
            })
            .on(Phaser.Input.Events.GAMEOBJECT_DRAG_END, (pointer, x, y) => console.log('GAMEOBJECT_DRAG_END', x, y)); // should return the same values but doesn't

        this.text = this.add.text(16, 16, '', {
            font: '16px Arial',
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
    }

    update (time, delta)
    {
        const worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);

        const message = [ `Mouse Position: ${worldPoint.x}, ${worldPoint.y}` ];

        this.text.setText(message);

        // this.updateCircle(worldPoint);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
