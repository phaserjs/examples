class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient13.png');
        this.load.atlas('rocket', 'assets/animations/rocket.png', 'assets/animations/rocket.json');
    }

    create3 ()
    {
        this.add.image(400, 300, 'bg');

        this.anims.create({ key: 'trail', frames: this.anims.generateFrameNames('rocket', { prefix: 'trail_', start: 0, end: 12, zeroPad: 2 }), repeat: -1 });

        const container = this.add.container(400, 300);

        //  A container must have a size in order to receive input
        container.setSize(120, 80);
        container.setInteractive({ draggable: true });

        this.trail = this.add.sprite(-125, 0).play('trail');
        this.rocket = this.add.sprite(0, 0, 'rocket', 'rocket')
            .setInteractive({ draggable: true })
            .on(Phaser.Input.Events.GAMEOBJECT_DRAG, (pointer, x, y) =>
            {
                console.log('GAMEOBJECT_DRAG', x, y);
                this.rocket.setPosition(x, y);
            })
            .on(Phaser.Input.Events.GAMEOBJECT_DRAG_END, (pointer, x, y) => 
            {
                console.log('GAMEOBJECT_DRAG_END', pointer, x, y);
                // this.rocket.setPosition(x, y);
                this.updateText(x, y);
            }); // should return the same values but doesn't

        container.add([ this.trail, this.rocket ]);

        this.input.on('dragend', (pointer, gameObject, dropped) =>
        {
            console.log('GLOBAL dragend', gameObject);
        });
        // container.on('drag', (pointer, dragX, dragY) => container.setPosition(dragX, dragY));

        this.createText();
    }

    create ()
    {
        const r1 = this.add.rectangle(this.scale.width * .75, this.scale.height / 2, 100, 100, 0xff0000).setInteractive({ draggable: true });

        const r2 = this.add.rectangle(this.scale.width / 4, this.scale.height / 2, 100, 100, 0xff0000)
            .setInteractive({ draggable: true });
        r2.on(Phaser.Input.Events.GAMEOBJECT_DRAG, function (pointer, x, y)
        {
            console.log('GAMEOBJECT_DRAG', x, y);
            this.setPosition(x, y);
        }, r2);
        r2.on(Phaser.Input.Events.GAMEOBJECT_DRAG_END, function (pointer, x, y) 
        {
            const localX = this.x + x;
            const localY = this.y + y;
            console.log('GAMEOBJECT_DRAG_END', localX, localY);
        }, r2);

        this.createText();
    }

    createText ()
    {
        this.text = this.add.text(16, 16, '', {
            font: '16px Arial',
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
    }

    updateText (x, y)
    {
        const result = {
            x: this.rocket.x + x,
            y: this.rocket.y + y,
        }
        const message = [ `Rocket: ${this.rocket.x}, ${this.rocket.y}` ];
        message.push(`Display Origin: ${this.rocket.displayOriginX}, ${this.rocket.displayOriginY}`);
        message.push(`Mouse Position: ${this.rocket.input.localX}, ${this.rocket.input.localY}`);
        message.push(`Expected RESULT: ${result.x}, ${result.y}`);

        this.text.setText(message);
    }

    // update (time, delta)
    // {
    //     const worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);

    //     const message = [ `Mouse Position: ${this.rocket.input.localX}, ${this.rocket.input.localY}` ];

    //     this.text.setText(message);

    //     // this.updateCircle(worldPoint);
    // }
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
