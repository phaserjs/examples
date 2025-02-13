class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient13.png');
        this.load.atlas('rocket', 'assets/animations/rocket.png', 'assets/animations/rocket.json');
    }

    create ()
    {
        // const r0 = this.add.rectangle(this.scale.width * .75, this.scale.height * 0.75, 100, 100, 0xff0000).setInteractive({ draggable: true })
        //     .on(Phaser.Input.Events.GAMEOBJECT_DRAG, (pointer, x, y) =>
        //     {
        //         r0.setPosition(x, y);
        //         console.log(x, y);
        //     })

        //     .on(Phaser.Input.Events.GAMEOBJECT_DRAG_END, (pointer, x, y) =>
        //     {
        //         r0.setPosition(x, y); // this does not work as expected
        //         console.log(x, y);

        //         const localX = r0.x + x;
        //         const localY = r0.y + y;
        //         console.log(r0.x, r0.y, x, y);
        //         r0.setPosition(localX, localY); // this does not work either
        //     });

        // const r1 = this.add.rectangle(this.scale.width * .75 + 150, this.scale.height * 0.75, 100, 100, 0xff0000).setInteractive({ draggable: true })
        //     .on(Phaser.Input.Events.GAMEOBJECT_DRAG, (pointer, x, y) =>
        //     {
        //         r1.setPosition(x, y);
        //         console.log(x, y);
        //     })
        //     .on(Phaser.Input.Events.GAMEOBJECT_DRAG_END, (pointer, x, y) =>
        //     {
        //         r1.setPosition(x, y); // this does not work as expected
        //         console.log(x, y);

        //         const localX = r1.x + x;
        //         const localY = r1.y + y;
        //         console.log(localX, localY);
        //         r1.setPosition(localX, localY); // this does not work either
        //     });

        const c = this.add.container(250, 250);
        const r2 = this.add.rectangle(0, 0, 100, 100, 0xff0000).setInteractive({ draggable: true })
            .on(Phaser.Input.Events.GAMEOBJECT_DRAG, (pointer, x, y) =>
            {
                r2.setPosition(x, y);
                console.log(x, y);
            })
            .on(Phaser.Input.Events.GAMEOBJECT_DRAG_END, (pointer, x, y) =>
            {
                // r2.setPosition(x, y); // this does not work as expected
                // console.log(x, y);

                const localX = r2.x + x;
                const localY = r2.y + y;
                console.log(localX, localY);
                r2.setPosition(localX, localY); // this does not work either
            });

        const r3 = this.add.rectangle(150, 0, 100, 100, 0xff0000).setInteractive({ draggable: true })
            .on(Phaser.Input.Events.GAMEOBJECT_DRAG, (pointer, x, y) =>
            {
                r3.setPosition(x, y);
                console.log(x, y);
            })
            .on(Phaser.Input.Events.GAMEOBJECT_DRAG_END, (pointer, x, y) =>
            {
                // r3.setPosition(x, y); // this does not work as expected
                // console.log(x, y);

                const localX = r3.x + x;
                const localY = r3.y + y;
                console.log(localX, localY);
                r3.setPosition(localX, localY); // this does not work either
            });

        c.add([ r2, r3 ]);
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
