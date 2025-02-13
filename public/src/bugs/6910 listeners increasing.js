class Example extends Phaser.Scene
{
    constructor()
    {
        super({
            key: "example"
        });
    }

    preload ()
    {
        this.load.image('button', 'assets/sprites/button-bg.png');
    }

    create ()
    {
        this.button_click_index = 0;
        this.buttons = [];

        const button1 = this.add.image(400, 100, 'button')
            .setScale(0.5)
            .setInteractive({ draggable: true })
            .addListener('pointerdown', () => 
            {
                this.button_click_index = 0;
                console.log(this.button_click_index);
            })
            .addListener('drag',
                (_pointer, _dragX, dragY) =>
                {
                    this.drag(_pointer,
                        _dragX,
                        dragY)
                });
        this.buttons.push(button1);

        const button2 = this.add.image(400, 200, 'button')
            .setScale(0.5)
            .setInteractive({ draggable: true })
            .addListener('pointerdown', () => 
            {
                this.button_click_index = 0;
                console.log(this.button_click_index);
            })
            .addListener('drag', (
                _pointer,
                _dragX,
                dragY) =>
            {
                this.drag(_pointer,
                    _dragX,
                    dragY)
            });

        this.buttons.push(button2);
    }

    drag (_pointer, _dragX, dragY)
    {
        for (let i = 0; i < this.buttons.length; i++)
        {
            this.buttons[ i ].setY(dragY + i * 200);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'phaser-example',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Example ]
};

const game = new Phaser.Game(config);